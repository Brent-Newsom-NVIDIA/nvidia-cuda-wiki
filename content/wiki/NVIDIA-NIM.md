# NVIDIA NIM (Inference Microservices)

**Type:** Platform
**Tags:** NVIDIA, inference, microservices, LLM, AI, REST API, containers, production deployment, OpenAI-compatible
**Related:** [[NIM-for-Large-Language-Models]], [[NVIDIA-NIM-Operator]], [[NeMo-Retriever-Embedding-NIM]], [[NeMo-Retriever-Reranking-NIM]], [[NIM-for-Image-OCR]], [[NIM-for-Object-Detection]], [[NIM-for-Cosmos-WFM]], [[NIM-for-Cosmos-Embed1]], [[NIM-for-Earth-2-CorrDiff]], [[NIM-for-Earth-2-FourCastNet]], [[NIM-for-Vision-Language-Models]], [[NIM-for-Visual-Generative-AI]], [[NIM-for-AlphaFold2]], [[NIM-for-AlphaFold2-Multimer]], [[NIM-for-OpenFold2]], [[NIM-for-OpenFold3]], [[NIM-for-Boltz2]], [[NIM-for-Evo-2]], [[NVIDIA-AI-Enterprise]], [[NGC]], [[NVIDIA-NGC-Catalog]], [[NVIDIA-AI-Blueprints]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-Data-Flywheel-Blueprint]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-API-Documentation]], [[LLM-Inference-Quick-Start-Recipes]], [[NVIDIA-Brev]], [[NVIDIA-Cloud-Accelerator-NCX]], [[TensorRT-LLM]], [[Triton-Inference-Server]], [[NVIDIA-NeMo]], [[NeMo-Platform]], [[NeMo-Retriever]], [[NVIDIA-BioNeMo]], [[NVIDIA-Cosmos]], [[Earth-2]], [[NVLM]], [[NVIDIA-Dynamo]], [[NVIDIA-CMX]], [[NIXL]], [[Nemotron]]
**Sources:** https://docs.nvidia.com/nim/index.html, https://docs.nvidia.com/nim-operator/latest/index.html, https://docs.nvidia.com/nim/large-language-models/latest/about-nim-llm/overview.html, https://docs.nvidia.com/nim/nemo-retriever/text-embedding/latest/overview.html, https://docs.nvidia.com/nim/nemo-retriever/text-reranking/latest/overview.html, https://docs.nvidia.com/nim/ingestion/image-ocr/latest/overview.html, https://docs.nvidia.com/nim/ingestion/object-detection/latest/overview.html, https://docs.nvidia.com/nim/cosmos/latest/introduction.html, https://docs.nvidia.com/nim/cosmos-embed1/latest/introduction.html, https://docs.nvidia.com/nim/earth-2/corrdiff/latest/overview.html, https://docs.nvidia.com/nim/earth-2/fourcastnet/latest/overview.html, https://docs.nvidia.com/nim/vision-language-models/latest/introduction.html, https://docs.nvidia.com/nim/visual-genai/latest/overview.html, https://docs.nvidia.com/nim/bionemo/alphafold2/latest/overview.html, https://docs.nvidia.com/nim/bionemo/openfold3/latest/overview.html, https://docs.nvidia.com/nim/bionemo/boltz2/latest/overview.html, https://docs.nvidia.com/nim/bionemo/evo2/latest/overview.html, https://build.nvidia.com/models, https://build.nvidia.com/blueprints, https://docs.nvidia.com/nemo/microservices/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NIM (NVIDIA Inference Microservices) is NVIDIA's containerized inference microservice layer for deploying foundation models on clouds, data centers, and self-hosted GPU infrastructure. Current NVIDIA docs position NIM as part of [[NVIDIA-AI-Enterprise]], with production runtimes, ongoing security updates, build.nvidia.com API access, and integration into the broader [[NVIDIA-NeMo]] agent lifecycle stack.

## Detail

### Purpose
NIM packages model-specific inference runtimes, APIs, containers, and deployment guidance so teams can move from model selection to production serving without rebuilding the entire inference stack. The same model capability may appear as a hosted build.nvidia.com API, a downloadable NIM, an NGC artifact, or a Kubernetes deployment.

### Current scope
- **Model APIs:** build.nvidia.com exposes free, partner, and downloadable model endpoints across chat, code, retrieval, speech, biology, image/video, safety, and multimodal use cases.
- **LLM serving:** [[NIM-for-Large-Language-Models]] is the specific current docs surface for NIM Day 0, NIM Turbo, NIM Certified, model-free NIM, model-specific NIMs, LoRA, tool calling/MCP, and production LLM deployment.
- **Kubernetes lifecycle:** [[NVIDIA-NIM-Operator]] manages NIM and NeMo microservices, model caches, services, pipelines, autoscaling, and air-gapped deployment patterns.
- **Blueprints:** [[NVIDIA-AI-Blueprints]] use NIM as a reusable model-serving layer in application workflows such as [[NVIDIA-AI-Q-Blueprint]] and [[NVIDIA-Data-Flywheel-Blueprint]].
- **API docs and recipes:** [[NVIDIA-API-Documentation]] and [[LLM-Inference-Quick-Start-Recipes]] provide developer-facing examples for hosted APIs and NIM-style inference workflows.
- **Self-hosted inference:** NIM containers are delivered through NVIDIA catalog/registry workflows and can run on NVIDIA GPU infrastructure.
- **Enterprise runtime:** NIM is part of [[NVIDIA-AI-Enterprise]] and receives production-grade runtime and security-update treatment.
- **NeMo integration:** [[NeMo-Platform]] uses NIM targets and inference gateways for agent lifecycle workflows.
- **Retriever integration:** [[NeMo-Retriever]] uses NIM microservices for embedding, reranking, OCR, and object/document extraction; see [[NeMo-Retriever-Embedding-NIM]], [[NeMo-Retriever-Reranking-NIM]], [[NIM-for-Image-OCR]], and [[NIM-for-Object-Detection]].
- **Physical AI and video:** [[NIM-for-Cosmos-WFM]] deploys Cosmos Predict/Transfer world models, while [[NIM-for-Cosmos-Embed1]] creates joint video-text embeddings for retrieval and dataset curation.
- **Weather and climate AI:** [[NIM-for-Earth-2-CorrDiff]] and [[NIM-for-Earth-2-FourCastNet]] expose current Earth-2 weather models as self-hosted NIM microservices.
- **Multimodal and visual AI:** [[NIM-for-Vision-Language-Models]] covers current VLM serving, including Cosmos Reason and Nemotron multimodal models, while [[NIM-for-Visual-Generative-AI]] covers image generation, editing, and visual/3D generation NIMs.
- **AI data and context:** [[NVIDIA-AI-Data-Platform]] uses NIM in retrieval/agent workflows, while [[NVIDIA-CMX]] and [[NVIDIA-Dynamo]] address large-scale context and inference-serving patterns around NIM deployments.
- **Disaggregated serving:** [[NIXL]] and [[NVIDIA-Dynamo]] connect to newer large-model serving patterns such as KV-cache and tensor transfer.

### Representative model families
- [[Nemotron]] reasoning, instruction, safety, ASR, OCR, voice, embedding, and reranking models.
- [[Parakeet-ASR]] and [[NVIDIA-Canary]] speech models.
- BioNeMo/Biology models surfaced through NIM-style APIs and NGC artifacts, including [[NIM-for-AlphaFold2]], [[NIM-for-AlphaFold2-Multimer]], [[NIM-for-OpenFold2]], [[NIM-for-OpenFold3]], [[NIM-for-Boltz2]], and [[NIM-for-Evo-2]].
- Physical AI and multimodal model families, including Cosmos WFM, Cosmos Embed1, Earth-2 weather models, VLMs, and Visual GenAI NIMs.
- Community and partner open models optimized for NVIDIA inference.

### NVIDIA context
NIM is the practical deployment boundary between NVIDIA's model catalog and production applications. It links model development in [[NVIDIA-NeMo]], inference optimization in [[TensorRT-LLM]], serving in [[Triton-Inference-Server]], catalog distribution in [[NGC]], and enterprise support in [[NVIDIA-AI-Enterprise]].

## Connections
- [[NIM-for-Large-Language-Models]] - LLM-specific NIM docs for production LLM serving.
- [[NVIDIA-NIM-Operator]] - Kubernetes operator for NIM and NeMo microservice lifecycle management.
- [[NeMo-Retriever-Embedding-NIM]] - embedding NIM for semantic search, RAG, and vector retrieval.
- [[NeMo-Retriever-Reranking-NIM]] - reranking NIM for improving retrieved passage relevance.
- [[NIM-for-Image-OCR]] - OCR NIM for extracting text from visual document regions.
- [[NIM-for-Object-Detection]] - document object-detection NIMs for page, table, and graphic elements.
- [[NIM-for-Cosmos-WFM]] - Cosmos world foundation model NIM for text/image/video-to-world and video transfer workflows.
- [[NIM-for-Cosmos-Embed1]] - joint video-text embedding NIM for physical AI dataset search and curation.
- [[NIM-for-Earth-2-CorrDiff]] - Earth-2 NIM for weather downscaling and diffusion correction.
- [[NIM-for-Earth-2-FourCastNet]] - Earth-2 NIM for global medium-range AI weather forecasting.
- [[NIM-for-Vision-Language-Models]] - VLM NIM family for multimodal reasoning and image/video understanding.
- [[NIM-for-Visual-Generative-AI]] - visual generation NIM family for image generation, editing, and 3D assets.
- [[NIM-for-AlphaFold2]] - BioNeMo NIM for single-chain protein structure prediction.
- [[NIM-for-AlphaFold2-Multimer]] - BioNeMo NIM for protein complex structure prediction.
- [[NIM-for-OpenFold2]] - BioNeMo NIM for OpenFold2 monomer protein structure prediction.
- [[NIM-for-OpenFold3]] - BioNeMo NIM for all-atom biomolecular complexes.
- [[NIM-for-Boltz2]] - BioNeMo NIM for biomolecular structure and binding-affinity prediction.
- [[NIM-for-Evo-2]] - BioNeMo NIM for DNA sequence interpretation and generation.
- [[NVIDIA-AI-Enterprise]] - commercial enterprise software layer that includes supported NIM runtimes.
- [[NGC]] and [[NVIDIA-NGC-Catalog]] - distribution path for containers, models, and artifacts.
- [[NVIDIA-AI-Blueprints]] - reference workflows that compose NIM with NeMo, Retriever, Nemotron, and deployment assets.
- [[NVIDIA-AI-Q-Blueprint]] - enterprise research agent blueprint that lists NIM/Nemotron model options.
- [[NVIDIA-Data-Flywheel-Blueprint]] - continuous optimization workflow that evaluates and redeploys candidate NIMs.
- [[NVIDIA-AI-Data-Platform]] - data-platform reference design that uses NIM with retrieval and agent workloads.
- [[NVIDIA-API-Documentation]] - hosted API reference for NVIDIA model and microservice endpoints.
- [[LLM-Inference-Quick-Start-Recipes]] - hands-on inference recipes that complement NIM deployment docs.
- [[NVIDIA-Brev]] - cloud GPU development environments useful for prototyping against NIM and NVIDIA APIs.
- [[NVIDIA-Cloud-Accelerator-NCX]] - cloud accelerator infrastructure for NIM and AI Enterprise workloads.
- [[TensorRT-LLM]] - optimized LLM inference backend for many NVIDIA-serving workflows.
- [[Triton-Inference-Server]] - serving layer used across NVIDIA model modalities.
- [[NeMo-Platform]] - agent lifecycle platform that integrates hosted and self-hosted NIM targets.
- [[NeMo-Retriever]] - retrieval microservices use NIM for embeddings and reranking.
- [[NVIDIA-BioNeMo]] - biology and drug-discovery NIMs sit under the BioNeMo platform.
- [[NVIDIA-Cosmos]] and [[Earth-2]] - physical AI and climate AI platforms with current NIM microservice surfaces.
- [[NVLM]] - NVIDIA VLM family adjacent to NIM for VLM deployment.
- [[NVIDIA-Dynamo]] - newer NVIDIA inference-serving platform adjacent to NIM deployments.
- [[NVIDIA-CMX]] - context-memory storage platform relevant to long-context, multi-turn NIM inference at scale.
- [[Nemotron]] - flagship NVIDIA model family available through build.nvidia.com and NIM paths.

## Source Excerpts
- NVIDIA NIM docs describe NIM microservices as part of NVIDIA AI Enterprise for deploying foundation models on cloud or data center infrastructure.
- build.nvidia.com lists NVIDIA-published models, downloadable artifacts, free endpoints, and NIM API experiences.

## Resources
- [NVIDIA NIM Documentation](https://docs.nvidia.com/nim/index.html)
- [Build NVIDIA Models](https://build.nvidia.com/models)
- [NeMo Platform Documentation](https://docs.nvidia.com/nemo/microservices/latest/index.html)
- [NIM API Catalog](https://build.nvidia.com)
