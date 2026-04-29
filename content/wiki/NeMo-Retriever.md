# NeMo Retriever

**Type:** Platform
**Tags:** NVIDIA, NeMo Retriever, RAG, retrieval, embedding, reranking, multimodal data extraction
**Related:** [[NVIDIA-NeMo]], [[NeMo-Platform]], [[NVIDIA-NIM]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-AI-Blueprints]], [[cuVS]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[Nemotron]]
**Sources:** https://docs.nvidia.com/nemo/retriever/latest/index.html, https://www.nvidia.com/en-us/data-center/ai-data-platform/, https://docs.nvidia.com/aiq-blueprint/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NeMo Retriever is NVIDIA's collection of microservices for building and scaling retrieval pipelines with multimodal data extraction, embeddings, indexing, retrieval, and reranking. It is built with [[NVIDIA-NIM]] and is part of the NeMo software suite for AI agent lifecycle management.

## Detail

### Purpose
Enterprise RAG and agent systems need to connect models to proprietary data with privacy, accuracy, and scale. NeMo Retriever provides document extraction, embedding, indexing, semantic/hybrid search, and reranking services optimized for NVIDIA infrastructure.

### Key capabilities
- Multimodal data extraction for documents with text, tables, charts, and infographics.
- Embedding and indexing flows using vector databases such as LanceDB or Milvus.
- GPU-accelerated vector search and indexing through [[cuVS]].
- Semantic and hybrid retrieval with embedding and reranking NIM microservices.
- Enterprise privacy and deployment model consistent with self-hosted NVIDIA AI stacks.

### NVIDIA context
NeMo Retriever is a central bridge between enterprise data and NVIDIA agent systems. It connects [[NVIDIA-NIM]] model endpoints, [[NVIDIA-Agent-Intelligence-Toolkit]] workflows, [[Nemotron]] reasoning models, [[NVIDIA-AI-Data-Platform]] reference workflows, and vector-search acceleration.

## Connections
- [[NVIDIA-NeMo]] - Retriever is part of the NeMo suite.
- [[NeMo-Platform]] - platform-level deployment and lifecycle management for NeMo services.
- [[NVIDIA-NIM]] - Retriever components are delivered as NIM-style microservices.
- [[NVIDIA-AI-Data-Platform]] - AI Data Platform uses retrieval, indexing, and vector search to connect agents to enterprise data.
- [[NVIDIA-AI-Q-Blueprint]] - AI-Q uses retrieval and knowledge sources as part of its enterprise research workflow.
- [[NVIDIA-AI-Blueprints]] - RAG, deep research, and data search blueprints are discovery surfaces for Retriever-related patterns.
- [[cuVS]] - GPU vector search acceleration used in indexing/retrieval stacks.
- [[NVIDIA-Agent-Intelligence-Toolkit]] - agent workflows use retrievers to access enterprise data.

## Source Excerpts
- NVIDIA NeMo Retriever docs describe multimodal extraction, embedding/indexing, retrieval, and reranking microservices.
