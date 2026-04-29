# NeMo Retriever Reranking NIM

**Type:** Microservice
**Tags:** NVIDIA, NIM, NeMo Retriever, reranking, RAG, semantic search, hybrid retrieval, Triton, TensorRT, CUDA
**Related:** [[NeMo-Retriever]], [[NVIDIA-NIM]], [[NeMo-Retriever-Embedding-NIM]], [[NIM-for-Image-OCR]], [[NIM-for-Object-Detection]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-NIM-Operator]], [[Triton-Inference-Server]], [[TensorRT]]
**Sources:** https://docs.nvidia.com/nim/nemo-retriever/text-reranking/latest/overview.html; https://docs.nvidia.com/nim/nemo-retriever/text-reranking/latest/getting-started.html; https://docs.nvidia.com/nim/nemo-retriever/text-reranking/latest/deploy-kubernetes.html
**Last Updated:** 2026-04-29

## Summary
NeMo Retriever Reranking NIM is NVIDIA's NIM microservice for reordering retrieved passages by query relevance. It improves RAG quality after an initial retrieval step, especially when results come from different stores or different scoring systems such as dense vector search and sparse search.

## Detail
The current docs describe Reranking NIM as a fine-tuned reranker packaged into a Docker container and accelerated with NVIDIA Triton Inference Server. It exposes OpenAI-compatible and gRPC APIs and is built on the NVIDIA software platform with CUDA, TensorRT, and Triton.

Reranking is useful because retrieval pipelines often combine results from different sources with incompatible scoring scales. A dense nearest-neighbor score, a sparse BM25 score, and a metadata filter do not naturally sort into one final relevance order. Reranking evaluates candidate passages against the user query and places the best context higher before the LLM generates an answer.

This page is distinct from [[NeMo-Retriever-Embedding-NIM]]. Embeddings find candidate chunks; reranking reorders those candidates for relevance and quality. Together with [[NIM-for-Image-OCR]] and [[NIM-for-Object-Detection]], they form the retrieval side of multimodal enterprise RAG.

## Connections
- [[NeMo-Retriever]] - Reranking NIM is a core Retriever microservice.
- [[NVIDIA-NIM]] - delivered as an NVIDIA NIM microservice.
- [[NeMo-Retriever-Embedding-NIM]] - embedding retrieval feeds candidate passages into reranking.
- [[NIM-for-Image-OCR]] - OCR-derived text can be reranked after retrieval.
- [[NIM-for-Object-Detection]] - object/layout extraction improves multimodal document retrieval before reranking.
- [[NVIDIA-AI-Data-Platform]] - enterprise RAG workflows need relevance ranking over private data.
- [[NVIDIA-AI-Q-Blueprint]] - research agents use retrieval/reranking to produce citation-backed answers.
- [[NVIDIA-NIM-Operator]] - Kubernetes deployment path for NIM microservices.
- [[Triton-Inference-Server]] and [[TensorRT]] - inference acceleration stack named in the current docs.

## Source Excerpts
- "reorders citations"
- "fine-tuned reranker"
- "hybrid retrieval"

