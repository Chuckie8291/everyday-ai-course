const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Checkout: create Stripe session
app.post("/api/checkout", express.json(), async (req, res) => {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) return res.status(500).json({ error: "Stripe not configured" });
    const stripe = require("stripe")(stripeKey);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [{
        price_data: {
          currency: "usd",
          product_data: { name: "Everyday AI: From Curious to Confident — Full Course" },
          unit_amount: 39900 // $399
        },
        quantity: 1
      }],
      success_url: `${req.protocol}://${req.get("host")}/course?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.protocol}://${req.get("host")}/`
    });
    res.json({ url: session.url });
  } catch (e) {
    console.error("Stripe error:", e.message);
    res.status(500).json({ error: e.message });
  }
});

// Verify session (called from course page to confirm payment)
app.get("/api/verify/:sessionId", async (req, res) => {
  // Dev mode: no Stripe key → always allow access
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.json({ paid: true, reason: "dev_mode" });
  }
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    const stripe = require("stripe")(stripeKey);
    const session = await stripe.checkout.sessions.retrieve(req.params.sessionId);
    res.json({ paid: session.payment_status === "paid" });
  } catch (e) {
    res.json({ paid: false, reason: e.message });
  }
});

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// All routes → index.html (SPA fallback)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => console.log(`Everyday AI Course running on port ${PORT}`));
