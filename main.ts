import * as fs from "node:fs";

const JOKE =
  "I replied-all asking everyone to stop replying-all \u2014 47 people replied-all to agree.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
