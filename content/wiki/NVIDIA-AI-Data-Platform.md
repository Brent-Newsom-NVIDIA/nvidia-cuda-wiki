# NVIDIA AI Data Platform

**Type:** Platform
**Tags:** NVIDIA, AI Data Platform, enterprise storage, RAG, retrieval, AI factory, BlueField, Spectrum-X, NIM, NeMo Retriever
**Related:** [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-STX]], [[NVIDIA-CMX]], [[NVIDIA-Certified-Storage]], [[NeMo-Retriever]], [[NVIDIA-NIM]], [[cuVS]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-BlueField-4]], [[NVIDIA-ConnectX-9]], [[NVIDIA-Spectrum-X]]
**Sources:** https://www.nvidia.com/en-us/data-center/ai-data-platform/, https://docs.nvidia.com/ai-enterprise/planning-resource/ai-factory-white-paper/latest/ecosystem-architecture.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI Data Platform is a reference design for bringing NVIDIA accelerated computing, networking, and AI software into enterprise storage and data systems. It is positioned as the AI factory data layer for ingestion, extraction, embedding, indexing, retrieval, RAG, video search, deep research agents, and context-aware distributed inference.

## Detail

### Purpose
Agentic AI depends on fresh, private, multimodal enterprise data. NVIDIA AI Data Platform is designed to help companies turn existing storage and data platforms into AI-ready systems that can feed agents and retrieval pipelines without moving every dataset into a separate AI silo.

### Reference workflows
- Multimodal agentic RAG over PDFs, graphics, audio, and text.
- Video search, summarization, and Q&A over live or archived media.
- Deep research agents over private enterprise data.
- Centralized cache for distributed inference with [[NVIDIA-Dynamo]].
- Semantic search across large video datasets, including physical AI and autonomous-vehicle post-training data.

### Product layer
NVIDIA describes the platform as a combination of enterprise storage, accelerated infrastructure, and enterprise AI software. The product stack includes Blackwell GPUs, [[NVIDIA-BlueField-DPU]], [[NVIDIA-Spectrum-X]], [[NVIDIA-NIM]], [[NeMo-Retriever]], and [[cuVS]]. It also connects to [[NVIDIA-STX]] and [[NVIDIA-CMX]] for newer AI-native storage and context-memory designs.

### NVIDIA context
The AI Data Platform is the data-side counterpart to [[NVIDIA-Enterprise-AI-Factory]]. It links the physical data layer to [[NeMo-Retriever]], [[NVIDIA-NIM]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-Dynamo]], and [[NVIDIA-Certified-Storage]] so agents can retrieve, reason, and reuse context at production scale.

## Connections
- [[NVIDIA-Enterprise-AI-Factory]] - AI Data Platform is an optional but important data layer in enterprise AI factory guidance.
- [[NVIDIA-STX]] - STX is a modular AI-native storage reference architecture tied to AI Data Platform designs.
- [[NVIDIA-CMX]] - CMX provides context memory storage for long-context, multi-turn inference.
- [[NVIDIA-Certified-Storage]] - certification validates storage for AI factory and AI Data Platform workloads.
- [[NeMo-Retriever]] - retrieval microservices connect enterprise data to RAG and agents.
- [[NVIDIA-NIM]] - NIM provides inference microservices used by agents and retrieval workflows.
- [[cuVS]] - GPU-accelerated vector search and indexing are part of the platform's retrieval story.
- [[NVIDIA-BlueField-DPU]] - BlueField accelerates data access, storage paths, and secure scaling.
- [[NVIDIA-BlueField-4]] - BlueField-4 is the current DPU generation tied to STX/CMX data platform designs.
- [[NVIDIA-ConnectX-9]] - next-generation SuperNIC for high-bandwidth AI data movement.
- [[NVIDIA-Spectrum-X]] - Spectrum-X provides the Ethernet fabric for high-throughput AI data movement.

## Source Excerpts
- NVIDIA's AI Data Platform page describes a reference design that combines enterprise storage, accelerated infrastructure, and NVIDIA enterprise software to speed extraction and retrieval.
- The Enterprise AI Factory design guide positions AI Data Platform as a high-performance, secure retrieval design for modern AI workloads.

## Resources
- [NVIDIA AI Data Platform](https://www.nvidia.com/en-us/data-center/ai-data-platform/)
