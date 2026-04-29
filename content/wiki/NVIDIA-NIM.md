# NVIDIA NIM (Inference Microservices)

**Type:** Platform
**Tags:** NVIDIA, inference, microservices, LLM, AI, REST API, containers, production deployment, OpenAI-compatible
**Related:** [[NVIDIA-AI-Enterprise]], [[NGC]], [[NVIDIA-NGC-Catalog]], [[TensorRT-LLM]], [[Triton-Inference-Server]], [[NVIDIA-NeMo]], [[NeMo-Platform]], [[NeMo-Retriever]], [[NVIDIA-Dynamo]], [[NIXL]], [[Nemotron]]
**Sources:** https://docs.nvidia.com/nim/index.html, https://build.nvidia.com/models, https://docs.nvidia.com/nemo/microservices/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NIM (NVIDIA Inference Microservices) is NVIDIA's containerized inference microservice layer for deploying foundation models on clouds, data centers, and self-hosted GPU infrastructure. Current NVIDIA docs position NIM as part of [[NVIDIA-AI-Enterprise]], with production runtimes, ongoing security updates, build.nvidia.com API access, and integration into the broader [[NVIDIA-NeMo]] agent lifecycle stack.

## Detail

### Purpose
NIM packages model-specific inference runtimes, APIs, containers, and deployment guidance so teams can move from model selection to production serving without rebuilding the entire inference stack. The same model capability may appear as a hosted build.nvidia.com API, a downloadable NIM, an NGC artifact, or a Kubernetes deployment.

### Current scope
- **Model APIs:** build.nvidia.com exposes free, partner, and downloadable model endpoints across chat, code, retrieval, speech, biology, image/video, safety, and multimodal use cases.
- **Self-hosted inference:** NIM containers are delivered through NVIDIA catalog/registry workflows and can run on NVIDIA GPU infrastructure.
- **Enterprise runtime:** NIM is part of [[NVIDIA-AI-Enterprise]] and receives production-grade runtime and security-update treatment.
- **NeMo integration:** [[NeMo-Platform]] uses NIM targets and inference gateways for agent lifecycle workflows.
- **Retriever integration:** [[NeMo-Retriever]] uses NIM microservices for embedding and reranking.
- **Disaggregated serving:** [[NIXL]] and [[NVIDIA-Dynamo]] connect to newer large-model serving patterns such as KV-cache and tensor transfer.

### Representative model families
- [[Nemotron]] reasoning, instruction, safety, ASR, OCR, voice, embedding, and reranking models.
- [[Parakeet-ASR]] and [[NVIDIA-Canary]] speech models.
- BioNeMo/Biology models surfaced through NIM-style APIs and NGC artifacts.
- Community and partner open models optimized for NVIDIA inference.

### NVIDIA context
NIM is the practical deployment boundary between NVIDIA's model catalog and production applications. It links model development in [[NVIDIA-NeMo]], inference optimization in [[TensorRT-LLM]], serving in [[Triton-Inference-Server]], catalog distribution in [[NGC]], and enterprise support in [[NVIDIA-AI-Enterprise]].

## Connections
- [[NVIDIA-AI-Enterprise]] - commercial enterprise software layer that includes supported NIM runtimes.
- [[NGC]] and [[NVIDIA-NGC-Catalog]] - distribution path for containers, models, and artifacts.
- [[TensorRT-LLM]] - optimized LLM inference backend for many NVIDIA-serving workflows.
- [[Triton-Inference-Server]] - serving layer used across NVIDIA model modalities.
- [[NeMo-Platform]] - agent lifecycle platform that integrates hosted and self-hosted NIM targets.
- [[NeMo-Retriever]] - retrieval microservices use NIM for embeddings and reranking.
- [[NVIDIA-Dynamo]] - newer NVIDIA inference-serving platform adjacent to NIM deployments.
- [[Nemotron]] - flagship NVIDIA model family available through build.nvidia.com and NIM paths.

## Source Excerpts
- NVIDIA NIM docs describe NIM microservices as part of NVIDIA AI Enterprise for deploying foundation models on cloud or data center infrastructure.
- build.nvidia.com lists NVIDIA-published models, downloadable artifacts, free endpoints, and NIM API experiences.

## Resources
- [NVIDIA NIM Documentation](https://docs.nvidia.com/nim/index.html)
- [Build NVIDIA Models](https://build.nvidia.com/models)
- [NeMo Platform Documentation](https://docs.nvidia.com/nemo/microservices/latest/index.html)
- [NIM API Catalog](https://build.nvidia.com)

