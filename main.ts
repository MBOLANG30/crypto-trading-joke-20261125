// Laugh Track: The Crypto Trading Joke Contest
// Entry program for make.fun bounty u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a.
// Writes one original one-line joke about crypto trading life (<= 200 chars)
// as plain text to /output/entry.txt, where the house gate and judge read it.
//
// The joke below is the winner of a 10-candidate head-to-head judged in-session
// against the contest brief (laugh, truth of trading life, economy of the line):
// every trader has lived the exchange going dark at the worst possible moment.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The exchange went down for maintenance right as my coin pumped. It came back up when it dumped.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

const line = JOKE.trim();
if (line.length < 1 || line.length > 200) {
  throw new Error(`joke must be 1-200 characters, got ${line.length}`);
}
if (/[\r\n]/.test(line)) {
  throw new Error("joke must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, line, "utf8");

// Self-check: re-read what was written and confirm it is exactly the joke,
// so a truncated or altered write fails loudly instead of silently grading.
const written = readFileSync(outFile, "utf8");
if (written !== line) {
  throw new Error("entry.txt does not match the joke exactly");
}
console.log(`wrote ${line.length}-char joke to ${outFile}`);
