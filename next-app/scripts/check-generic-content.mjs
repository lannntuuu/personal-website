// Guards the public content seam: shipped files must not expose the previous
// owner's real name or email. Run with `npm run check:generic`.
import { readFileSync, readdirSync, statSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { join, relative } from "node:path"

const root = fileURLToPath(new URL("..", import.meta.url))
const repoRoot = join(root, "..")
const files = []
const walk = (dir) => {
  for (const entry of readdirSync(dir)) {
    if ([".git", "node_modules", ".next", "scripts"].includes(entry)) continue
    const path = join(dir, entry)
    if (statSync(path).isDirectory()) walk(path)
    else if (!entry.endsWith(".ico") && !entry.endsWith(".jpg")) files.push(path)
  }
}
walk(repoRoot)

const forbidden = [
  { label: "real name", pattern: /Tu Lan/gi },
  { label: "real name (joined variant)", pattern: /tulan/gi },
  { label: "real email", pattern: /lannntuuu(?:@gmail\.com)?/gi },
]

const violations = []
for (const file of files) {
  const content = readFileSync(file, "utf8")
  for (const { label, pattern } of forbidden) {
    for (const match of content.matchAll(pattern)) {
      const line = content.slice(0, match.index).split("\n").length
      violations.push(`${relative(repoRoot, file)}:${line} contains ${label}`)
    }
  }
}

if (violations.length) {
  console.error("Generic-template check failed:\n" + violations.join("\n"))
  process.exit(1)
}
console.log("Generic-template check passed: no real name or email found.")
