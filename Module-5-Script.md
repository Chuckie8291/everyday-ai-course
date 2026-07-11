# Module 5: The API Bridge — Narration Script

**Tone:** Authoritative, clear, inspiring. "This changes everything." Speak at 140–150 wpm.
**Total:** ~40 minutes across 5 lessons + intro/recap

---

## SLIDE 1: Module 5 Title (0:00–0:20)
*Let this one breathe. The golden accent bar signals: this module is different.*

---

## SLIDE 2: 5.1 Title — What's an API? (0:20–0:30)

---

## SLIDE 3: The Restaurant Analogy (0:30–4:30)

**[0:30]**
Three letters. API. They unlock everything. And I'm going to explain them with a restaurant.

Imagine you walk into a restaurant. You don't walk into the kitchen and start cooking. That would be chaos. You'd be in the way. You don't know where anything is. The chef would be furious.

**[0:55]**
Instead, you sit down. You're handed a menu. The menu tells you exactly what's available, how it's prepared, and what it costs. You tell the waiter what you want. The waiter takes your order to the kitchen. The kitchen makes it. The waiter brings it to you.

**[1:20]**
That's an API.

The menu is the API. It tells you what you can ask for and how to ask for it.

The kitchen is the AI — it does the actual work.

You are you. You don't need to know how the kitchen works. You just need to read the menu and tell the waiter what you want.

**[1:50]**
In technical terms: you send a request — "make this" — through the API. The AI processes it. You get a response back. That's it. Request, process, response. That's the whole thing.

This is not a simplification. This is literally how it works. The chat window you've been using this whole time? It's just a pretty wrapper around the exact same API calls we're about to talk about.

---

## SLIDE 4: You Already Use APIs (4:30–6:30)

**[4:30]**
Here's the thing: you already use APIs every single day. You just didn't know the name for it.

When you open your weather app and it tells you it's 72 degrees — that app doesn't have a weather station. It called a weather API and asked: "What's the temperature at this location?" The API responded with the number. The app showed it to you.

**[5:00]**
Google Maps. You search "coffee near me." Google's API finds every coffee shop within walking distance and sends back their locations, ratings, and hours.

Every time you pay online, the website calls a payment API. "Charge this card $47.50." The API processes it. "Approved."

**[5:30]**
Instagram. Uber. Spotify. Your banking app. Every single app on your phone works by sending requests to APIs and displaying the responses. You have been using APIs for years. You just didn't have the word for it.

Now you do. And now you're going to learn how to use them yourself.

**[6:00]**
Here's why this matters. Right now, you use AI through a chat window. You type. It responds. That's one way — a good way. But it's not the only way.

When you understand APIs, AI can work inside your other tools. Your spreadsheet can ask AI to analyze data — automatically. Your email can draft replies using AI — without you opening ChatGPT. Your calendar can use AI to schedule things intelligently. Your to-do list can use AI to break tasks into steps.

**[6:20]**
An API key is like a password that lets your tools talk to the AI directly. No chat window needed. And you don't need to code to use it.

---

## SLIDE 5: Why Care About APIs? (6:30–7:30)
*Transition slide — move through quickly, the previous slide covered this.*

---

## SLIDE 6: 5.2 Title — Getting Your Key (7:30–7:40)

---

## SLIDE 7: Step by Step (7:40–10:00)

**[7:40]**
Let's get you an API key. This takes about five minutes and costs five dollars. I'll walk you through every step.

Step one. Go to platform.openai.com. This is different from chatgpt.com — it's the developer dashboard. It looks a little more technical, but don't let that scare you. We're only using a tiny corner of it.

**[8:10]**
Step two. Sign up or log in. Use the same account you use for ChatGPT, or create a new one. Sign in with Google is the fastest route.

Step three. Add a payment method. Go to Billing, then Payment Methods. You pre-pay five dollars. That's it. Five dollars will last you months. AI API calls cost fractions of a cent each. A typical question costs less than one penny.

**[8:50]**
Step four. Generate your key. Go to API Keys in the left sidebar. Click "Create new secret key." Give it a name — anything, like "My First Key." Copy the key immediately. This is important: you will only see this key once. If you close the window, it's gone and you have to create a new one.

**[9:20]**
Step five. Save it somewhere safe. Paste it into a password manager. Or a secure note. Or a text file on your computer. Treat this exactly like a password. Never share it. Never paste it into a chat with the AI. Never put it in an email.

If someone gets your API key, they can use AI on your account. You're protected by your five-dollar spending limit — but still. Guard this key.

---

## SLIDE 8: Cost & Safety (10:00–11:00)
*Visual reference while narrator summarizes key points. Can move faster here.*

---

## SLIDE 9: 5.3 Title — First API Call (11:00–11:10)

---

## SLIDE 10: Behind the Chat Window (11:10–14:00)

**[11:10]**
Let me show you what's actually happening every time you use AI.

On the left, this is what you send. It looks technical, but look closer. You're saying: "I'm using this model — GPT-4. Here's my message: what is an API?" That's it. That's the whole request. The rest is just formatting.

**[11:40]**
On the right, this is what the AI sends back. It looks technical too, but buried in here is the actual answer: "An API is a way for..."

All the brackets and quotes and formatting — that's just packaging. The content — your question and the AI's answer — that's the same thing you see in the chat window.

**[12:10]**
Why does this matter? Because when you understand this format, you realize you can send these requests from anywhere. Not just a chat window. A spreadsheet. An email client. A website. An automation tool. Anything that can send a message over the internet can talk to an AI.

**[12:40]**
The AI doesn't care where the request comes from. It doesn't care if it's a chat window or a Google Sheet or a Zapier automation. It just needs your API key — to prove you're allowed to use it — and a clear question.

This is the moment where AI stops being a website you visit and starts being a capability you can build into anything.

**[13:15]**
Now, for your first API call — we're going to keep it simple. There are free web tools where you paste your key, type your question, and see the raw response. No command line. No terminal. No code. You'll do this in the exercise that comes with this lesson.

**[13:45]**
But I wanted you to see what's under the hood first, because understanding this is what separates people who use AI from people who build with it.

---

## SLIDE 11: 5.4 Title — AI in Your Tools (14:00–14:10)

---

## SLIDE 12: Tools You Already Use (14:10–17:00)

**[14:10]**
Now let's plug AI into the tools you actually use every day.

Google Sheets. There's a free add-on called GPT for Sheets. You install it. You enter your API key once. Now, in any cell, you can type equals GPT, open parenthesis, and your question. "Summarize this customer feedback." "Categorize these expenses." "Translate this to Spanish." Your spreadsheet can now think.

**[14:50]**
Notion. If you use Notion for notes and documents, it has AI built right in. Highlight any text, and you can say "Summarize this." "Translate this." "Improve the writing." "Find action items in these meeting notes." Your notes are now interactive.

**[15:15]**
Zapier and Make.com. These are the bridges. They connect apps without any code. The pattern is always: "When THIS happens, do THAT."

"When I get an email from a client, have AI draft a reply and put it in my drafts folder." "When someone submits my contact form, have AI analyze their message and add them to the right email list." "When I add a task to my to-do list, have AI break it into subtasks."

**[16:00]**
Gmail. There are tools like GhostWrite and Mailbutler that plug AI directly into your inbox. You select an email, click "Draft reply with AI." It reads the entire thread, understands the context, and writes a response that sounds like you.

**[16:30]**
Notice the pattern. Every one of these is the same thing: your tool sends your API key and your question to the AI. The AI responds. The tool shows you the response. The only difference is where you're typing — a spreadsheet cell instead of a chat window. That's it.

---

## SLIDE 13: A Real Automation (17:00–18:30)

**[17:00]**
Let me show you a real automation. This is a Zap — built in Zapier. No code. Drag and drop. Ten minutes to set up.

New email arrives in your Gmail. Zapier grabs the content. Sends it to OpenAI's API with instructions: "Draft a polite, professional reply." The API responds with a draft. Zapier saves it to your drafts folder. You review it, maybe tweak a sentence, and hit send.

**[17:40]**
You just built something that used to require a software developer. In ten minutes. For free, or close to it.

And here's the best part: once it's set up, it runs forever. Every email that matches your rules gets a draft reply. You just review and send. The tedious part — staring at a blank reply window, figuring out what to say — that's gone.

**[18:10]**
This is the promise of the API bridge. Not just using AI. Building with AI. Making it work for you in the background, in the tools you already use, without you having to open a chat window.

---

## SLIDE 14: 5.5 Title — Connecting Everything (18:30–18:40)

---

## SLIDE 15: The Vision (18:40–21:30)

**[18:40]**
Let me paint a picture of what becomes possible now.

A smart inbox. Every email that arrives — AI reads it, decides if it's urgent, drafts a reply for your review, and archives the newsletters. Your inbox manages itself. You spend ten minutes a day reviewing and sending, instead of an hour wrestling with email.

**[19:10]**
An AI calendar. You type: "Schedule a thirty-minute meeting with the team next week." AI checks everyone's availability, finds a slot that works, sends the invites, and attaches an agenda. No more back-and-forth emails trying to find a time.

**[19:35]**
Living spreadsheets. Your budget spreadsheet automatically pulls in your transactions. AI analyzes them. Generates a spending report. Emails it to you every Monday morning. You never open the spreadsheet — the insights come to you.

**[20:00]**
A personal knowledge base. Every article you save. Every note you take. Every idea you jot down. AI organizes all of it. Connects related ideas. Surfaces what you need when you need it. Your second brain, curated by AI.

**[20:25]**
Your first AI agent. This is Module 6 — and it builds directly on what you just learned. An agent isn't just a chatbot. It's AI that can take actions. Check your calendar. Send emails. Search the web. Make decisions. Run tasks while you sleep.

**[20:55]**
AI for your business. Customer emails answered automatically. Leads qualified. Social media scheduled. Reports generated. Inventory tracked. All of it connected. All of it automated.

This isn't science fiction. Every piece of this exists today. You now understand the foundation that makes it all possible.

---

## SLIDE 16: Module 5 Recap (21:30–22:30)

**[21:30]**
You crossed the bridge.

You understand what an API is — not as abstract technology, but as a menu that lets your tools order from the AI kitchen.

You have your own API key. You know how to keep it safe. You know what it costs — about five dollars for thousands of questions.

**[21:55]**
You've seen what's behind the chat window. You understand that every AI interaction is just a request and a response, and that you can send those requests from anywhere.

You know how to plug AI into Google Sheets, Notion, Gmail, and other tools you already use. And you've seen how Zapier lets you build automations that run in the background — no code required.

**[22:15]**
You are no longer just an AI user. You're an AI builder.

Next: Module 6. AI agents. Your digital assistant that doesn't just answer — it does.
