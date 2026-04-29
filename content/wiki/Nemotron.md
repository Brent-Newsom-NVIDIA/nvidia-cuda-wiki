# Nemotron

**Type:** Model
**Tags:** NVIDIA, Nemotron, LLM, multimodal, speech, OCR, content safety, agentic AI, NIM
**Related:** [[NVIDIA-NeMo]], [[NeMo-AutoModel]], [[NeMo-RL]], [[NeMo-Megatron-Bridge]], [[NeMo-Customizer]], [[NeMo-Evaluator]], [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[NIM-for-Vision-Language-Models]], [[NeMo-Retriever-Embedding-NIM]], [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-ASR-NIM]], [[NVIDIA-TTS-NIM]], [[NVIDIA-NMT-NIM]], [[NVIDIA-NemoGuard-NIMs]], [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]], [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]], [[NVIDIA-AI-Blueprints]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-Data-Flywheel-Blueprint]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[NeMo-Retriever]], [[NeMo-Guardrails]], [[TensorRT-LLM]], [[NVIDIA-DGX-Cloud]], [[NVIDIA-NemoClaw]], [[NVIDIA-Enterprise-Reference-Architectures]], [[Red-Hat-AI-Factory-with-NVIDIA]]
**Sources:** https://build.nvidia.com/models, https://build.nvidia.com/blueprints, https://build.nvidia.com/nvidia/nemotron-3-super-120b-a12b/modelcard, https://build.nvidia.com/nvidia/nemotron-3-nano-30b-a3b/modelcard, https://build.nvidia.com/nvidia/nemotron-3-content-safety/modelcard, https://build.nvidia.com/nvidia/nemotron-asr-streaming/modelcard, https://developer.nvidia.com/nemotron, https://docs.nvidia.com/nemo/microservices/latest/customizer/models/index.html, https://docs.nvidia.com/nemo/microservices/latest/fine-tune/models/llama-nemotron.html, https://docs.nvidia.com/nemo/microservices/latest/customizer/models/embedding.html, https://docs.nvidia.com/nemo/automodel/latest/model-coverage/llm.html, https://docs.nvidia.com/nemo/automodel/latest/model-coverage/llm/nvidia/nemotron.html, https://docs.nvidia.com/nim/vision-language-models/latest/support-matrix.html, https://docs.nvidia.com/nim/speech/latest/index.html, https://docs.nvidia.com/nim/llama-3-1-nemotron-safety-guard-8b/latest/index.html, https://docs.nvidia.com/nemo/automodel/latest/index.html, https://docs.nvidia.com/nemo/rl/latest/about/model-support.html, https://docs.nvidia.com/nemo/megatron-bridge/latest/index.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
Nemotron is NVIDIA's family of open and hosted AI models for agentic reasoning, instruction following, safety, retrieval, speech, OCR, and multimodal workflows. Current NVIDIA docs place Nemotron across [[NeMo-Customizer]] tested model catalogs, [[NeMo-AutoModel]] model coverage, [[NVIDIA-NIM]] serving surfaces, speech NIMs, VLM NIMs, and build.nvidia.com model cards.

## Detail

### Purpose
Nemotron gives NVIDIA a model family that can be trained and customized through [[NVIDIA-NeMo]], deployed through [[NVIDIA-NIM]], optimized on NVIDIA GPUs, and used as the reasoning/model layer for enterprise agents and AI applications.

### Current model directions
- **Agentic LLMs:** Nemotron 3 Super 120B-A12B, Nemotron 3 Nano 30B-A3B, Llama 3.3 Nemotron Super 49B v1/v1.5, and Llama 3.1 Nemotron Nano 8B v1 are current NVIDIA/Nemotron variants surfaced across model cards and NeMo Customizer docs.
- **Customizer catalog:** current [[NeMo-Customizer]] docs list tested support for Llama 3.1 Nemotron Nano 8B v1, NVIDIA Nemotron Nano 9B v2, NVIDIA Nemotron 3 Nano 30B-A3B BF16, NVIDIA Nemotron 3 Super 120B-A12B BF16, and Llama Nemotron Embedding 1B v2.
- **Training/post-training support:** current [[NeMo-AutoModel]], [[NeMo-RL]], and [[NeMo-Megatron-Bridge]] docs list Nemotron/Minitron, Llama-Nemotron, Nemotron Nano, Nemotron H, and Nemotron 3 model support in NVIDIA training and post-training paths.
- **Omnimodal reasoning:** current [[NIM-for-Vision-Language-Models]] support docs list NVIDIA Nemotron 3 Nano Omni in the VLM release stream, and build.nvidia.com positions it for image, video, speech, and text understanding.
- **Embedding and retrieval:** Llama Nemotron Embedding 1B v2 is a current NeMo Customizer embedding model with NIM deployment, long-document support, configurable embedding dimensions, and [[NeMo-Retriever]] relevance.
- **Content safety:** Nemotron 3 Content Safety is a multilingual, multimodal safety model for classifying unsafe prompts/images and responses, tied to [[NeMo-Guardrails]] use cases.
- **NemoGuard safety NIMs:** [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]] and [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]] connect Nemotron safety datasets and models to deployable NIM guardrails.
- **Speech:** current [[NVIDIA-Speech-NIM-Microservices]] docs frame ASR, TTS, and NMT NIMs around Nemotron speech model families, including Nemotron ASR Streaming.
- **Document AI:** Nemotron OCR, table-structure, and page-elements models target extraction of text, layout, tables, charts, and document structure.
- **Retrieval:** Llama Nemotron reranking and embedding models connect Nemotron to [[NeMo-Retriever]], [[NeMo-Retriever-Embedding-NIM]], and enterprise RAG workflows.
- **Blueprint usage:** current [[NVIDIA-AI-Blueprints]] use Nemotron-related models in agent, voice, retrieval, and data-flywheel workflows, including [[NVIDIA-AI-Q-Blueprint]] and [[NVIDIA-Data-Flywheel-Blueprint]].
- **Enterprise RA sizing:** the AI-Q Enterprise RA paper uses a Nemotron reasoning model, specifically Llama 3.3 Nemotron Super 49B v1.5, as a key scaling lever for research-agent latency.
- **Red Hat AI Factory:** [[Red-Hat-AI-Factory-with-NVIDIA]] lists Nemotron as a domain-specific NVIDIA model family for agentic AI workloads on the OpenShift AI factory stack.

### NVIDIA context
Nemotron is central to NVIDIA's agentic AI stack: [[NVIDIA-NIM]] exposes model endpoints, [[NVIDIA-Agent-Intelligence-Toolkit]] orchestrates workflows, [[NeMo-Retriever]] connects proprietary data, [[NeMo-Guardrails]] applies policy/safety, and [[NVIDIA-DGX-Cloud]] or self-hosted GPUs provide deployment infrastructure.

## Connections
- [[NVIDIA-NeMo]] - lifecycle suite for training, customizing, evaluating, and deploying Nemotron-related systems.
- [[NeMo-AutoModel]], [[NeMo-RL]], and [[NeMo-Megatron-Bridge]] - current NeMo framework tooling for Nemotron-compatible training, post-training, and Megatron/Hugging Face conversion paths.
- [[NeMo-Customizer]] and [[NeMo-Evaluator]] - managed adaptation and measurement services for Nemotron-related systems.
- [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], and [[NIM-for-Vision-Language-Models]] - hosted and self-hosted endpoint paths for Nemotron text and multimodal models.
- [[NeMo-Retriever-Embedding-NIM]] - deployment surface adjacent to Llama Nemotron embedding models.
- [[NVIDIA-Speech-NIM-Microservices]] - current docs surface for Nemotron ASR, TTS, and NMT model-family microservices.
- [[NVIDIA-ASR-NIM]], [[NVIDIA-TTS-NIM]], and [[NVIDIA-NMT-NIM]] - deployable speech NIMs connected to Nemotron speech model families.
- [[NVIDIA-AI-Blueprints]] - build.nvidia.com surfaces Nemotron-backed application blueprints without requiring one wiki page per build listing.
- [[NVIDIA-AI-Q-Blueprint]] - AI-Q's current blueprint card lists Nemotron model options for enterprise research agents.
- [[NVIDIA-Enterprise-Reference-Architectures]] - AI-Q Enterprise RA paper shows Nemotron as part of a sized enterprise research-agent deployment.
- [[NVIDIA-Data-Flywheel-Blueprint]] - data flywheel workflows use open/NIM model choices in the Nemotron ecosystem for optimization experiments.
- [[NVIDIA-Agent-Intelligence-Toolkit]] - workflow layer for building agents on top of Nemotron and other models.
- [[NeMo-Retriever]] - retrieval layer that uses NVIDIA embedding/reranking models related to Nemotron.
- [[NeMo-Guardrails]] - safety and policy workflows can use Nemotron content-safety models.
- [[NVIDIA-NemoGuard-NIMs]] - guardrail NIM family for safety, topic control, and jailbreak detection.
- [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]] and [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]] - deployable content-safety NIMs in the Nemotron/NemoGuard lineage.
- [[TensorRT-LLM]] - optimized inference backend for large language models on NVIDIA GPUs.
- [[NVIDIA-NemoClaw]] - assistant stack that references open NVIDIA models such as Nemotron.
- [[Red-Hat-AI-Factory-with-NVIDIA]] - OpenShift AI deployment guide that calls out Nemotron for agentic AI use cases.

## Source Excerpts
- build.nvidia.com lists recent NVIDIA-published Nemotron models across reasoning, safety, speech, OCR, retrieval, and multimodal categories.
- Current NeMo Customizer docs list multiple Nemotron and Llama Nemotron models in the tested model catalog, including reasoning LLMs and a Llama Nemotron embedding model.
- Current NeMo AutoModel docs list Nemotron/Minitron and Nemotron H model coverage for Hugging Face-compatible training and fine-tuning.
- Current VLM NIM support docs list NVIDIA Nemotron 3 Nano Omni in the active VLM release stream.
- NVIDIA's Nemotron 3 Content Safety model card identifies a multilingual multimodal safety model for prompts, images, and responses.
- NVIDIA's Nemotron ASR Streaming card describes a 600M-parameter English streaming ASR model.

## Resources
- [Build NVIDIA Models](https://build.nvidia.com/models)
- [Nemotron Developer Page](https://developer.nvidia.com/nemotron)
- [NeMo Customizer Model Catalog](https://docs.nvidia.com/nemo/microservices/latest/customizer/models/index.html)
- [NeMo Customizer Llama Nemotron Models](https://docs.nvidia.com/nemo/microservices/latest/fine-tune/models/llama-nemotron.html)
- [NeMo Customizer Llama Nemotron Embedding](https://docs.nvidia.com/nemo/microservices/latest/customizer/models/embedding.html)
- [NeMo AutoModel LLM Coverage](https://docs.nvidia.com/nemo/automodel/latest/model-coverage/llm.html)
- [NIM for VLMs Support Matrix](https://docs.nvidia.com/nim/vision-language-models/latest/support-matrix.html)
- [Nemotron 3 Content Safety](https://build.nvidia.com/nvidia/nemotron-3-content-safety/modelcard)
- [Nemotron ASR Streaming](https://build.nvidia.com/nvidia/nemotron-asr-streaming/modelcard)
