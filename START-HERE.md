# NVIDIA CUDA Wiki: Start Here

This repo is a shared markdown knowledge base plus a Quartz website. If you just want to use it, start with one of these links:

- GitHub repo: [Brent-Newsom-NVIDIA/nvidia-cuda-wiki](https://github.com/Brent-Newsom-NVIDIA/nvidia-cuda-wiki)
- Quartz site: [NVIDIA CUDA Knowledge Base](https://brent-newsom-nvidia.github.io/nvidia-cuda-wiki/)
- Canonical wiki folder in the repo: [content/](https://github.com/Brent-Newsom-NVIDIA/nvidia-cuda-wiki/tree/main/content)

## What To Open

- If you want to browse visually, open the Quartz site.
- If you want to ask Claude or Codex questions against the wiki, clone the repo and open the repo root as your project.
- If you want to update the wiki, work in `content/`.

## Use It In Codex

1. Clone the repo:

   ```bash
   git clone https://github.com/Brent-Newsom-NVIDIA/nvidia-cuda-wiki.git
   ```

2. Open the cloned repo root in Codex.
3. Start a new chat in that project.
4. Ask questions normally.

Example prompts:

- `What does Mission Control do?`
- `How does NVIDIA AI Workbench relate to NIM and NGC?`
- `What are the key differences between HGX and DGX?`

Expected behavior:

- Codex should answer from `content/wiki/`, `content/index.md`, and `content/log.md`.
- It should not go to the web for normal questions.
- If the answer is not in the wiki yet, it should say so.

To add new knowledge, ask explicitly:

- `Ingest this URL into the wiki: <URL>`
- `Create or update wiki content from this NVIDIA doc: <URL>`

## Use It In Claude

1. Clone the repo:

   ```bash
   git clone https://github.com/Brent-Newsom-NVIDIA/nvidia-cuda-wiki.git
   ```

2. Open the cloned repo root in Claude.
3. Start a new project chat in that folder.
4. Ask questions normally, or ask it to ingest a new source.

The repo includes root-level instruction files so Claude should treat the wiki as the source of truth right away.

## Open The Graphical Wiki

Use the live Quartz site:

- [https://brent-newsom-nvidia.github.io/nvidia-cuda-wiki/](https://brent-newsom-nvidia.github.io/nvidia-cuda-wiki/)

If you want to run the site locally:

1. Clone the repo.
2. Install dependencies:

   ```bash
   npm ci
   ```

3. Start Quartz:

   ```bash
   npx quartz build --serve
   ```

4. Open:

   - [http://localhost:8080](http://localhost:8080)

## Where The Real Content Lives

The repo is the source of truth.

- `content/wiki/` = wiki pages
- `content/index.md` = master index
- `content/log.md` = ingestion history

If someone edits or ingests content, those updates should be committed back to this repo.
