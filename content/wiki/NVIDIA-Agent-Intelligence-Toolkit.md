# NVIDIA Agent Intelligence Toolkit

**Type:** Platform
**Tags:** NVIDIA, NeMo Agent Toolkit, AIQ, agents, workflows, observability, MCP, A2A
**Related:** [[NVIDIA-NeMo]], [[NVIDIA-NIM]], [[NeMo-Retriever]], [[NeMo-Guardrails]], [[NVIDIA-OpenShell]], [[Nemotron]]
**Sources:** https://docs.nvidia.com/aiqtoolkit/latest/index.html, https://docs.nvidia.com/nemo/agent-toolkit/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Agent Intelligence Toolkit now redirects to NVIDIA NeMo Agent Toolkit documentation. It is a framework-agnostic toolkit for connecting agents to tools and data sources, evaluating and profiling agentic workflows, and serving workflows through APIs and agent protocols.

## Detail

### Purpose
Enterprise agent systems rarely live in one framework or one model endpoint. NeMo Agent Toolkit gives teams a reusable workflow layer for connecting tools, LLMs, embedders, retrievers, memory, object stores, and existing agents while adding evaluation and observability.

### Key capabilities
- Framework-agnostic agent workflow construction.
- Integrations with LangChain, LlamaIndex, CrewAI, Semantic Kernel, Google ADK, local Python agents, and enterprise frameworks.
- Profiling, token/timing telemetry, evaluation, and workflow optimization.
- Model Context Protocol (MCP) client/server support.
- Agent-to-Agent (A2A) protocol support.
- API server, UI, and command-line execution paths through the `nat` CLI/package.

### NVIDIA context
The toolkit connects [[NVIDIA-NIM]] model endpoints, [[NeMo-Retriever]] data access, [[NeMo-Guardrails]] controls, and [[Nemotron]] reasoning models into composable agent workflows.

## Connections
- [[NVIDIA-NeMo]] - NeMo is the parent suite for agent lifecycle management.
- [[NVIDIA-NIM]] - NIMs provide model endpoints used by toolkit workflows.
- [[NeMo-Retriever]] - retrieval services connect agents to enterprise data.
- [[NeMo-Guardrails]] - safety and policy controls for agent behavior.
- [[NVIDIA-OpenShell]] - sandboxed runtime direction for agent tool execution.

## Source Excerpts
- NVIDIA's NeMo Agent Toolkit docs describe a flexible library for connecting enterprise agents to tools and data sources.

