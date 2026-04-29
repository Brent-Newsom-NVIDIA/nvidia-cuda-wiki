# Nemotron

**Type:** Model
**Tags:** NVIDIA, Nemotron, LLM, multimodal, speech, OCR, content safety, agentic AI, NIM
**Related:** [[NVIDIA-NeMo]], [[NVIDIA-NIM]], [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-ASR-NIM]], [[NVIDIA-TTS-NIM]], [[NVIDIA-NMT-NIM]], [[NVIDIA-AI-Blueprints]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-Data-Flywheel-Blueprint]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[NeMo-Retriever]], [[NeMo-Guardrails]], [[TensorRT-LLM]], [[NVIDIA-DGX-Cloud]], [[NVIDIA-NemoClaw]]
**Sources:** https://build.nvidia.com/models, https://build.nvidia.com/blueprints, https://build.nvidia.com/nvidia/nemotron-3-super-120b-a12b/modelcard, https://build.nvidia.com/nvidia/nemotron-3-nano-30b-a3b/modelcard, https://build.nvidia.com/nvidia/nemotron-3-content-safety/modelcard, https://build.nvidia.com/nvidia/nemotron-asr-streaming/modelcard, https://developer.nvidia.com/nemotron, https://docs.nvidia.com/nim/speech/latest/index.html
**Last Updated:** 2026-04-29

## Summary
Nemotron is NVIDIA's family of open and hosted AI models for agentic reasoning, instruction following, safety, retrieval, speech, OCR, and multimodal workflows. The latest build.nvidia.com listings show Nemotron moving beyond earlier Nemotron-4/Minitron LLMs into Nemotron 3 MoE reasoning models, content-safety models, ASR, OCR, voice chat, and Retriever-adjacent embedding/reranking models.

## Detail

### Purpose
Nemotron gives NVIDIA a model family that can be trained and customized through [[NVIDIA-NeMo]], deployed through [[NVIDIA-NIM]], optimized on NVIDIA GPUs, and used as the reasoning/model layer for enterprise agents and AI applications.

### Current model directions
- **Agentic LLMs:** Nemotron 3 Super 120B-A12B and Nemotron 3 Nano 30B-A3B are MoE-oriented models positioned for reasoning, coding, long-context work, tool use, planning, and agentic workflows.
- **Omnimodal reasoning:** Nemotron 3 Nano Omni 30B-A3B Reasoning appears in build.nvidia.com as an NVIDIA model that understands images, video, speech, and text.
- **Content safety:** Nemotron 3 Content Safety is a multilingual, multimodal safety model for classifying unsafe prompts/images and responses, tied to [[NeMo-Guardrails]] use cases.
- **Speech:** current [[NVIDIA-Speech-NIM-Microservices]] docs frame ASR, TTS, and NMT NIMs around Nemotron speech model families, including Nemotron ASR Streaming.
- **Document AI:** Nemotron OCR, table-structure, and page-elements models target extraction of text, layout, tables, charts, and document structure.
- **Retrieval:** Llama Nemotron reranking and embedding models connect Nemotron to [[NeMo-Retriever]] and enterprise RAG workflows.
- **Blueprint usage:** current [[NVIDIA-AI-Blueprints]] use Nemotron-related models in agent, voice, retrieval, and data-flywheel workflows, including [[NVIDIA-AI-Q-Blueprint]] and [[NVIDIA-Data-Flywheel-Blueprint]].

### NVIDIA context
Nemotron is central to NVIDIA's agentic AI stack: [[NVIDIA-NIM]] exposes model endpoints, [[NVIDIA-Agent-Intelligence-Toolkit]] orchestrates workflows, [[NeMo-Retriever]] connects proprietary data, [[NeMo-Guardrails]] applies policy/safety, and [[NVIDIA-DGX-Cloud]] or self-hosted GPUs provide deployment infrastructure.

## Connections
- [[NVIDIA-NeMo]] - lifecycle suite for training, customizing, evaluating, and deploying Nemotron-related systems.
- [[NVIDIA-NIM]] - hosted and self-hosted endpoint path for Nemotron models.
- [[NVIDIA-Speech-NIM-Microservices]] - current docs surface for Nemotron ASR, TTS, and NMT model-family microservices.
- [[NVIDIA-ASR-NIM]], [[NVIDIA-TTS-NIM]], and [[NVIDIA-NMT-NIM]] - deployable speech NIMs connected to Nemotron speech model families.
- [[NVIDIA-AI-Blueprints]] - build.nvidia.com surfaces Nemotron-backed application blueprints without requiring one wiki page per build listing.
- [[NVIDIA-AI-Q-Blueprint]] - AI-Q's current blueprint card lists Nemotron model options for enterprise research agents.
- [[NVIDIA-Data-Flywheel-Blueprint]] - data flywheel workflows use open/NIM model choices in the Nemotron ecosystem for optimization experiments.
- [[NVIDIA-Agent-Intelligence-Toolkit]] - workflow layer for building agents on top of Nemotron and other models.
- [[NeMo-Retriever]] - retrieval layer that uses NVIDIA embedding/reranking models related to Nemotron.
- [[NeMo-Guardrails]] - safety and policy workflows can use Nemotron content-safety models.
- [[TensorRT-LLM]] - optimized inference backend for large language models on NVIDIA GPUs.
- [[NVIDIA-NemoClaw]] - assistant stack that references open NVIDIA models such as Nemotron.

## Source Excerpts
- build.nvidia.com lists recent NVIDIA-published Nemotron models across reasoning, safety, speech, OCR, retrieval, and multimodal categories.
- NVIDIA's Nemotron 3 Content Safety model card identifies a multilingual multimodal safety model for prompts, images, and responses.
- NVIDIA's Nemotron ASR Streaming card describes a 600M-parameter English streaming ASR model.

## Resources
- [Build NVIDIA Models](https://build.nvidia.com/models)
- [Nemotron Developer Page](https://developer.nvidia.com/nemotron)
- [Nemotron 3 Content Safety](https://build.nvidia.com/nvidia/nemotron-3-content-safety/modelcard)
- [Nemotron ASR Streaming](https://build.nvidia.com/nvidia/nemotron-asr-streaming/modelcard)
