# NVIDIA NemoClaw

**Type:** Platform
**Tags:** NVIDIA, NemoClaw, OpenClaw, agents, sandboxing, OpenShell, Nemotron
**Related:** [[NVIDIA-OpenShell]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[Nemotron]], [[NVIDIA-NIM]], [[NVIDIA-NeMo]], [[NVIDIA-DGX]]
**Sources:** https://docs.nvidia.com/nemoclaw/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NemoClaw is an open source stack for running OpenClaw always-on assistants with NVIDIA agent infrastructure. The docs identify it as an early alpha preview that installs [[NVIDIA-OpenShell]], part of the NVIDIA agent toolkit stack, and can use open NVIDIA models such as [[Nemotron]].

## Detail

### Purpose
Always-on AI assistants need safer execution boundaries, controlled permissions, and a repeatable runtime. NemoClaw packages that direction into a developer-friendly stack for experimenting with autonomous assistants while using NVIDIA model and agent components.

### Key capabilities
- Installs OpenClaw assistant components with a single-command style workflow.
- Uses [[NVIDIA-OpenShell]] as a secure runtime for autonomous agents.
- Connects to NVIDIA agent tooling and open NVIDIA models such as [[Nemotron]].
- Explicitly marked as alpha/early preview, so APIs and behavior may change.

### NVIDIA context
NemoClaw is a signpost for NVIDIA's agentic AI direction: [[Nemotron]] models, [[NVIDIA-NIM]] endpoints, [[NVIDIA-Agent-Intelligence-Toolkit]], and sandboxed execution are converging into a safer agent runtime story.

## Connections
- [[NVIDIA-OpenShell]] - secure runtime installed by NemoClaw.
- [[NVIDIA-Agent-Intelligence-Toolkit]] - adjacent agent workflow toolkit.
- [[Nemotron]] - NVIDIA open model family referenced by the NemoClaw docs.
- [[NVIDIA-NIM]] - model-serving path for NVIDIA-hosted or self-hosted agents.
- [[NVIDIA-NeMo]] - broader lifecycle suite for building and optimizing AI agents.

## Source Excerpts
- NVIDIA's NemoClaw docs describe an alpha preview for running OpenClaw assistants with OpenShell and NVIDIA models.

