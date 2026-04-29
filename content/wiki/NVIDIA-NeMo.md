# NVIDIA NeMo

**Type:** Platform
**Tags:** NVIDIA, NeMo, generative AI, AI agents, LLM, speech, multimodal, training, microservices
**Related:** [[NeMo-Platform]], [[NeMo-Curator]], [[NeMo-Retriever]], [[NeMo-Guardrails]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[NVIDIA-NIM]], [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-ASR-NIM]], [[NVIDIA-TTS-NIM]], [[NVIDIA-NMT-NIM]], [[Megatron-LM]], [[TensorRT-LLM]], [[Nemotron]]
**Sources:** https://docs.nvidia.com/nemo/index.html, https://docs.nvidia.com/nemo-framework/index.html, https://docs.nvidia.com/nemo/microservices/latest/index.html, https://docs.nvidia.com/nemo/agent-toolkit/latest/index.html, https://docs.nvidia.com/nim/speech/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NeMo is now best understood as a modular software suite for managing the AI agent lifecycle, not only as a training framework. Current NVIDIA docs organize NeMo across microservices, framework libraries, agent tooling, retrieval, guardrails, data curation, evaluation, customization, deployment, and blueprints.

## Detail

### Purpose
NeMo gives developers and enterprises a connected path for building, customizing, evaluating, protecting, deploying, and optimizing generative AI and agentic systems. It spans open-source training components, production microservices, and workflow tooling.

### Current architecture
- **[[NeMo-Platform]]:** Microservices for synthetic data, customization, evaluation, guardrails, inference, RBAC, and observability.
- **NeMo Framework:** Open-source framework for large-scale pretraining, post-training, reinforcement learning, multimodal models, and speech AI.
- **[[NVIDIA-Agent-Intelligence-Toolkit]]:** Framework-agnostic workflow layer for agent development, profiling, evaluation, MCP, and A2A.
- **[[NeMo-Retriever]]:** Multimodal extraction, embedding, indexing, retrieval, and reranking for enterprise RAG.
- **[[NeMo-Guardrails]]:** Programmable safety, policy, and topical controls for LLMs and agents.
- **[[NeMo-Curator]]:** GPU-accelerated data cleaning, filtering, and multimodal curation.
- **Export/deploy:** Production deployment through [[TensorRT]], [[TensorRT-LLM]], [[vLLM]], [[Triton-Inference-Server]], and [[NVIDIA-NIM]].
- **Speech NIM deployment:** current [[NVIDIA-Speech-NIM-Microservices]] docs package NeMo speech models into ASR, TTS, and NMT NIM containers.

### NVIDIA context
NeMo is the lifecycle layer around NVIDIA's model, inference, and AI software portfolio. [[Nemotron]] models can be trained/customized with NeMo components, served through [[NVIDIA-NIM]], connected to data via [[NeMo-Retriever]], protected by [[NeMo-Guardrails]], and orchestrated through [[NVIDIA-Agent-Intelligence-Toolkit]].

## Connections
- [[NeMo-Platform]] - microservices platform for production agent lifecycle workflows.
- [[NVIDIA-Agent-Intelligence-Toolkit]] - workflow and evaluation toolkit inside the NeMo family.
- [[NeMo-Retriever]] - retrieval layer for enterprise RAG and multimodal data extraction.
- [[NeMo-Guardrails]] - safety and policy controls for model and agent responses.
- [[NVIDIA-NIM]] - deployment and inference endpoint layer for NeMo-related models.
- [[NVIDIA-Speech-NIM-Microservices]] - current docs collection for NeMo-backed ASR, TTS, and NMT NIMs.
- [[NVIDIA-ASR-NIM]], [[NVIDIA-TTS-NIM]], and [[NVIDIA-NMT-NIM]] - deployable speech model microservices.
- [[Megatron-LM]] - distributed training lineage for large models and parallelism.
- [[TensorRT-LLM]] - production inference optimization path for NeMo-trained LLMs.
- [[Nemotron]] - NVIDIA model family closely tied to NeMo development and deployment workflows.

## Source Excerpts
- NVIDIA NeMo docs describe NeMo as a modular suite for managing the AI agent lifecycle.
- Current NeMo docs list microservices, framework, agent toolkit, Retriever, Guardrails, Curator, RL, AutoModel, and deployment components.

## Resources
- [NVIDIA NeMo Documentation](https://docs.nvidia.com/nemo/index.html)
- [NeMo Framework Documentation](https://docs.nvidia.com/nemo-framework/index.html)
- [NeMo Platform Documentation](https://docs.nvidia.com/nemo/microservices/latest/index.html)
- [NeMo Agent Toolkit](https://docs.nvidia.com/nemo/agent-toolkit/latest/index.html)
