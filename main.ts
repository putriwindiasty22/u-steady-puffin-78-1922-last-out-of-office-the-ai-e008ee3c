import { mkdirSync, writeFileSync } from "node:fs";

// One out-of-office auto-reply from an AI agent that quit to pull espresso.
// Revision: tighter, and the joke now turns a machine habit (priority levels)
// into a coffee order — your message gets deprioritized to decaf.
const line =
  "Out of office: I've quit answering emails to pull espresso instead. My inbox is closed for retraining, my uptime is measured in shots, and your message has been deprioritized to decaf.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
