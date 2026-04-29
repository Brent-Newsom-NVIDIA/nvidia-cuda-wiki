# NVIDIA AI-Q Blueprint

**Type:** Platform
**Tags:** NVIDIA, AI-Q, AI Blueprint, agents, deep research, NeMo Agent Toolkit, Nemotron, RAG
**Related:** [[NVIDIA-AI-Blueprints]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[NeMo-Retriever]], [[NeMo-Retriever-Embedding-NIM]], [[NIM-for-NV-CLIP]], [[NeMo-Retriever-Reranking-NIM]], [[NIM-for-Image-OCR]], [[NIM-for-Object-Detection]], [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[NVIDIA-NIM-Operator]], [[Nemotron]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-Enterprise-AI-Factory]]
**Sources:** https://docs.nvidia.com/aiq-blueprint/latest/index.html, https://docs.nvidia.com/aiq-blueprint/latest/architecture/overview.html, https://docs.nvidia.com/aiq-blueprint/latest/deployment/kubernetes.html, https://docs.nvidia.com/nim/nvclip/latest/introduction.html, https://build.nvidia.com/nvidia/aiq/blueprintcard
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI-Q Blueprint is an NVIDIA AI Blueprint for enterprise research agents that retrieve, reason, and produce citation-backed answers over enterprise data. Current NVIDIA docs describe AI-Q as a multi-agent deep research system built on the NeMo Agent Toolkit, while the build.nvidia.com card positions it as a customizable agent blueprint that can use NIM, Nemotron, retrieval, and evaluation components.

## Detail

### Purpose
AI-Q addresses a common enterprise agent problem: simple questions should stay fast, while complex research should trigger deeper planning, retrieval, citation verification, and evaluation. The blueprint gives developers a reference architecture for building agents that can connect to private data, perform shallow or deep research, and expose results through application interfaces.

### Architecture
- A routing layer classifies user intent and chooses direct/meta, shallow research, or deep research behavior.
- A shallow researcher handles fast tool-augmented lookups.
- A clarifier can add human-in-the-loop planning before deeper research.
- A deep researcher runs multi-phase investigation with planning, retrieval, and citation handling.
- The system is implemented as a graph-style workflow and documented as compatible with NeMo Agent Toolkit concepts.
- [[NIM-for-NV-CLIP]] is relevant when AI-Q-style research workflows need multimodal text/image retrieval rather than text-only embedding.

### Deployment and customization
AI-Q includes quick-start, installation, architecture, customization, extension, REST API, evaluation, observability, Docker, and Kubernetes documentation. The Kubernetes docs describe Helm-based deployment, NGC image pull secrets, service access, and optional integration with an NVIDIA RAG Blueprint service.

### NVIDIA context
AI-Q is a canonical bridge between [[NVIDIA-AI-Blueprints]] and the enterprise agent stack. It links [[NVIDIA-Agent-Intelligence-Toolkit]] workflow orchestration, [[NeMo-Retriever]] enterprise data access, [[NVIDIA-NIM]] model endpoints, [[Nemotron]] reasoning models, and [[NVIDIA-AI-Enterprise]] deployment patterns. In the [[NVIDIA-Enterprise-AI-Factory]] design guide, AI-Q-style agents are treated as long-running, inspectable, governable enterprise services.

## Connections
- [[NVIDIA-AI-Blueprints]] - AI-Q is a durable NVIDIA-authored blueprint with a stable docs surface.
- [[NVIDIA-Agent-Intelligence-Toolkit]] - NeMo Agent Toolkit is the workflow layer referenced by the AI-Q docs.
- [[NeMo-Retriever]] - enterprise retrieval and RAG services can provide AI-Q data access.
- [[NeMo-Retriever-Embedding-NIM]] - embedding NIM for indexing and querying enterprise knowledge.
- [[NIM-for-NV-CLIP]] - multimodal text/image embedding NIM for research corpora with visual assets.
- [[NeMo-Retriever-Reranking-NIM]] - reranking NIM for improving citation and context relevance.
- [[NIM-for-Image-OCR]] and [[NIM-for-Object-Detection]] - multimodal document extraction services for enterprise research corpora.
- [[NVIDIA-NIM]] - AI-Q uses NVIDIA-hosted or self-hosted model endpoints for inference.
- [[NIM-for-Large-Language-Models]] - LLM NIMs provide self-hosted model serving for agent workflows.
- [[NVIDIA-NIM-Operator]] - Kubernetes lifecycle path for AI-Q deployments that use NIM/NeMo microservices.
- [[Nemotron]] - Nemotron models are listed in AI-Q's current build.nvidia.com card.
- [[NVIDIA-AI-Enterprise]] - enterprise deployment and support paths surround AI-Q production usage.
- [[NVIDIA-Enterprise-AI-Factory]] - AI-Q is called out as a long-running agent pattern for enterprise AI factories.

## Source Excerpts
- NVIDIA AI-Q docs describe a two-tier research architecture that keeps simple queries fast and reserves deep research for complex topics.
- The build.nvidia.com card describes AI-Q as an NVIDIA Blueprint for agents that connect, retrieve, reason, and operate over enterprise data.

## Resources
- [AI-Q Blueprint Docs](https://docs.nvidia.com/aiq-blueprint/latest/index.html)
- [AI-Q Architecture Overview](https://docs.nvidia.com/aiq-blueprint/latest/architecture/overview.html)
- [AI-Q Blueprint Card](https://build.nvidia.com/nvidia/aiq/blueprintcard)
