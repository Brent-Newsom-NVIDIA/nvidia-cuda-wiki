# NVIDIA CUDA Knowledge Base

A Quartz 4 static site built from the `NVIDIA WIKI` Obsidian vault. The source vault is a curated, interlinked knowledge base covering NVIDIA's public CUDA platform, libraries, hardware, and ecosystem tooling.

## Content source

- **Vault:** `C:\Users\bnewsom\OneDrive - NVIDIA Corporation\Desktop\NVIDIA WIKI`
- **Content here:** `content/` — mirrored copy of the vault, excluding `.obsidian/` and `.trash/`
- **Scope:** public NVIDIA/CUDA technical documentation — safe to publish broadly. No internal or confidential material.

Vault structure under `content/`:

- `wiki/` — curated wiki pages (one per concept, library, hardware platform, etc.)
- `raw/` — raw source material (articles, transcripts, notes) used to build wiki pages
- `index.md` — Master Index, grouped by category
- `log.md` — ingestion history
- `CLAUDE.md` — agent operating instructions for the vault (informational)

## Updating content

1. Edit pages in the Obsidian vault at the path above.
2. Run `publish.bat` from the Desktop. It robocopies the vault into `content/`, builds the site, commits, and (once hosting is configured) pushes.

## Local preview

```
cd C:\dev\quartz
npx quartz build --serve
```

The site is served at `http://localhost:8080` by default.

## Scripts

- **`scripts/audit-links.mjs`** — scans `content/` for broken `[[wikilinks]]` and writes a categorized report (space-vs-hyphen, case mismatches, genuinely missing targets) to `audit-links-report.txt` at the repo root. The report is gitignored; regenerate with:

  ```
  node scripts/audit-links.mjs
  ```

  Exits non-zero when issues are found, so it can gate a publish step.

## Hosting

Not yet configured. `baseUrl` in `quartz.config.ts` is set to a placeholder (`TODO-set-hosting-url.example.com`). Once the hosting destination is decided (GitHub Enterprise Pages or internal NVIDIA hosting are under consideration), update `baseUrl` and uncomment the `git push` line in `publish.bat`.

## Stack

- [Quartz 4](https://quartz.jzhao.xyz/) — Obsidian-aware static site generator
- Link resolution strategy: **shortest path** (matches Obsidian's default)
- Content strategy: **Empty Quartz** (new content folder, vault contents copied in)
