// Funniest Time Machine Warning — make.fun one-liner entry.
// A warning label for time travellers: your past self is a mess, and
// he will absolutely ask you for the Wi-Fi password. Run.
//
// Winner-study rules applied: specific numbers (47 tabs, $3,200),
// escalation (tabs → debt → the password ask), and a one-word kicker
// ("Run.") that reframes the whole warning instead of explaining it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 120;
const LINE =
  "Warning: do not meet your past self. He has 47 tabs open, owes $3,200, and will ask you for the Wi-Fi password. Run.";

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
