// Reorder blog posts in the data file by publishedAt, descending (newest first).
// Run once after a content drop to keep the file readable in publish order.
//
//   node scripts/reorder-blog.mjs content/en/blog/posts.ts
//   node scripts/reorder-blog.mjs content/es/blog/posts.ts

import fs from "node:fs";
import path from "node:path";

const target = process.argv[2];
if (!target) {
  console.error("Usage: node scripts/reorder-blog.mjs <path-to-posts.ts>");
  process.exit(1);
}

const file = path.resolve(target);
const content = fs.readFileSync(file, "utf8");

// Find the opening "[" of the exported array and its matching closing "]".
const exportMatch = content.match(/export const \w+: BlogPost\[\] = \[/);
if (!exportMatch) {
  console.error(`Could not find "export const ...: BlogPost[] = [" in ${file}`);
  process.exit(1);
}
const arrayStart = exportMatch.index + exportMatch[0].length;
// The array always ends with "\n];" at the end of the module.
const arrayEnd = content.lastIndexOf("];");
const header = content.substring(0, arrayStart);
const footer = content.substring(arrayEnd);
const body = content.substring(arrayStart, arrayEnd);

// Walk the array body and pull each top-level post object. A post is
// delimited by matching braces at brace-depth 1 (relative to the array).
const posts = [];
let depth = 0;
let postStart = -1;
let i = 0;
let inString = false;
let stringChar = "";
let escaped = false;
while (i < body.length) {
  const c = body[i];
  if (inString) {
    if (escaped) {
      escaped = false;
    } else if (c === "\\") {
      escaped = true;
    } else if (c === stringChar) {
      inString = false;
    }
  } else {
    if (c === '"' || c === "'" || c === "`") {
      inString = true;
      stringChar = c;
    } else if (c === "{") {
      if (depth === 0) postStart = i;
      depth++;
    } else if (c === "}") {
      depth--;
      if (depth === 0 && postStart !== -1) {
        // Include the trailing "}," and the newline after.
        let endIdx = i + 1;
        if (body[endIdx] === ",") endIdx++;
        // Capture trailing whitespace and one newline so reassembly looks neat.
        while (endIdx < body.length && body[endIdx] === " ") endIdx++;
        if (body[endIdx] === "\n") endIdx++;
        const text = body.substring(postStart, endIdx);
        const dateMatch = text.match(/publishedAt:\s*"([^"]+)"/);
        if (!dateMatch) {
          console.error("Post missing publishedAt; bailing to avoid corruption");
          process.exit(1);
        }
        posts.push({ date: dateMatch[1], text });
        postStart = -1;
      }
    }
  }
  i++;
}

if (posts.length === 0) {
  console.error("No posts parsed; bailing");
  process.exit(1);
}

// Sort newest first (so the file order matches /blog page order).
posts.sort((a, b) => b.date.localeCompare(a.date));

// Reassemble. Header already ends with "[". We add a newline, then the posts
// in order (each already ends with "\n"). Footer begins with "];".
const newBody = "\n" + posts.map((p) => p.text).join("");
const result = header + newBody + footer;

fs.writeFileSync(file, result, "utf8");
console.log(`Reordered ${posts.length} posts in ${path.basename(file)} (newest first)`);
