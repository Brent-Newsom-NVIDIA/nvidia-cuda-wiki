import { readFileSync, readdirSync, statSync } from "node:fs"
import { join, relative, basename, extname } from "node:path"

const CONTENT = "C:/dev/quartz/content"

function walk(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) out.push(...walk(full))
    else if (name.toLowerCase().endsWith(".md")) out.push(full)
  }
  return out
}

const files = walk(CONTENT)

// Index by exact stem and by lowercase stem
const byStem = new Map()
const byLowerStem = new Map()
for (const f of files) {
  const stem = basename(f, extname(f))
  byStem.set(stem, f)
  const lower = stem.toLowerCase()
  if (!byLowerStem.has(lower)) byLowerStem.set(lower, [])
  byLowerStem.get(lower).push(stem)
}

// Match [[target]] but NOT ![[embed]] images handled same way (both count as references).
// Capture group: inner contents of [[...]]
const WIKILINK = /(!?)\[\[([^\]]+)\]\]/g

const missing = []   // stem doesn't exist at all
const caseMismatch = [] // stem exists with different case only
const hyphenMismatch = [] // stem has spaces but a hyphenated variant exists

for (const f of files) {
  const rel = relative(CONTENT, f).replace(/\\/g, "/")
  const text = readFileSync(f, "utf8")
  let m
  while ((m = WIKILINK.exec(text)) !== null) {
    const embed = m[1] === "!"
    let inner = m[2].trim()
    // Strip display text after |
    const pipeIdx = inner.indexOf("|")
    if (pipeIdx !== -1) inner = inner.slice(0, pipeIdx)
    // Strip anchor after #
    const hashIdx = inner.indexOf("#")
    if (hashIdx !== -1) inner = inner.slice(0, hashIdx)
    inner = inner.trim()
    if (!inner) continue
    // If link includes slashes (explicit path), take basename for stem
    const stem = inner.includes("/") ? inner.split("/").pop() : inner
    // Skip attachment-style links (image/pdf embeds with real extensions)
    if (embed && /\.(png|jpg|jpeg|gif|svg|webp|pdf|mp4|webm|mp3|wav)$/i.test(stem)) continue

    if (byStem.has(stem)) continue
    const lower = stem.toLowerCase()
    if (byLowerStem.has(lower)) {
      caseMismatch.push({ file: rel, link: m[0], target: stem, actual: byLowerStem.get(lower) })
      continue
    }
    // Try swapping spaces -> hyphens (shortest-path convention the vault uses)
    if (stem.includes(" ")) {
      const hyph = stem.replace(/ /g, "-")
      if (byStem.has(hyph) || byLowerStem.has(hyph.toLowerCase())) {
        hyphenMismatch.push({ file: rel, link: m[0], target: stem, actual: hyph })
        continue
      }
    }
    missing.push({ file: rel, link: m[0], target: stem })
  }
}

console.log(`Scanned ${files.length} files.`)
console.log(`Missing targets:    ${missing.length}`)
console.log(`Case mismatches:    ${caseMismatch.length}`)
console.log(`Space vs hyphen:    ${hyphenMismatch.length}`)
console.log("")
if (hyphenMismatch.length) {
  console.log("=== SPACE-VS-HYPHEN (stem has spaces but hyphenated file exists) ===")
  for (const x of hyphenMismatch) console.log(`  ${x.file}: ${x.link}  ->  rename link to [[${x.actual}]]`)
  console.log("")
}
if (caseMismatch.length) {
  console.log("=== CASE MISMATCH (target exists with different case) ===")
  for (const x of caseMismatch) console.log(`  ${x.file}: ${x.link}  ->  "${x.target}" but actual is "${x.actual.join(", ")}"`)
  console.log("")
}
if (missing.length) {
  console.log("=== MISSING (no matching file; may be intentional placeholder or genuinely missing) ===")
  for (const x of missing) console.log(`  ${x.file}: ${x.link}  ->  no file "${x.target}.md"`)
  console.log("")
}
