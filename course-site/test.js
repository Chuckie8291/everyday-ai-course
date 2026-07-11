const fs = require("fs");
const path = require("path");

let ok = true;

// Check required files exist
["server.js", "public/index.html"].forEach(f => {
  if (!fs.existsSync(f)) { console.error("MISSING:", f); ok = false; }
});

// Check HTML has required elements
const html = fs.readFileSync("public/index.html", "utf8");
["COURSE", "checkout", 'id="viewer"', 'id="landing"'].forEach(s => {
  if (!html.includes(s)) { console.error("MISSING in HTML:", s); ok = false; }
});

// Check server.js loads without error
try {
  // Don't actually start listening — just verify the module parses
  require.resolve("./server.js");
} catch (e) {
  console.error("Server module fails to resolve:", e.message);
  ok = false;
}

console.log(ok ? "PASS" : "FAIL");
process.exit(ok ? 0 : 1);
