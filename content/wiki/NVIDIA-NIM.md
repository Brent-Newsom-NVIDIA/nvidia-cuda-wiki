# NVIDIA NIM (Inference Microservices)

**Type:** Platform
**Tags:** NVIDIA, inference, microservices, LLM, AI, REST API, containers, production deployment, OpenAI-compatible
**Related:** [[NVIDIA-AI-Enterprise]], [[NGC]], [[TensorRT-LLM]], [[Triton-Inference-Server]], [[NVIDIA-NeMo]], [[NVIDIA-BioNeMo]], [[vLLM]], [[NIXL]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; written from verified knowledge)
**Last Updated:** 2026-04-10

## Summary
NVIDIA NIM (NVIDIA Inference Microservices) is a suite of production-ready, containerized AI inference microservices that expose AI models via an OpenAI-compatible REST API. Each NIM encapsulates a specific AI model — LLMs, embedding models, vision-language models, speech models, or biology models — along with optimized inference engines (TensorRT-LLM, vLLM, Triton), automatic hardware tuning, and enterprise-grade observability. NIM reduces the cycle from model selection to production deployment from weeks to minutes, and is a core component of the NVIDIA AI Enterprise platform.

## Detail

### Purpose
Deploying high-performance AI inference requires deep expertise in TensorRT optimization, batching strategies, quantization selection, and hardware-specific tuning. NIM packages this expertise into self-contained, batteries-included microservices: pull a container from NGC, run it with `docker run --gpus all`, and call a standard REST API. Applications built against the OpenAI API can switch to a self-hosted NIM with a single endpoint URL change, enabling on-premises, data-private AI with no code refactoring.

### Key Features
- **OpenAI-Compatible API:** Drop-in replacement for OpenAI endpoints — `/v1/chat/completions`, `/v1/embeddings`, `/v1/completions`, `/v1/reranking` — enabling zero-code-change migration from cloud APIs
- **Optimized Inference Engines:** Internally uses TensorRT-LLM (preferred for NVIDIA GPUs), vLLM, or Triton depending on the model and hardware, with pre-compiled TensorRT engines for H100/A100/L40S
- **Broad Model Coverage:** LLMs (Meta Llama 3/3.1/3.2/3.3, Mistral, Mixtral, Gemma 2, Phi-3/4, Qwen2, DeepSeek), embedding models (NV-EmbedQA, E5), rerankers (NV-RerankQA), vision-language models (NVIDIA NVLM, LLaVA), speech (Parakeet, Canary), biology (ESM-2, AlphaFold2, MolMIM, DiffDock)
- **Auto-Optimization:** Automatically selects best quantization (FP16, BF16, FP8, INT8, INT4 AWQ) and tensor/pipeline parallelism configuration for the target GPU hardware
- **Production-Grade Observability:** Prometheus metrics endpoint (`/metrics`), readiness/liveness probes, structured logging, and OpenTelemetry tracing support
- **Preflight Profile System:** NIM uses "profiles" (pre-compiled engine configs) matched to detected GPU hardware at startup, eliminating manual TRT compilation
- **NIM Agent Blueprints:** Reference architectures for multi-NIM agentic pipelines — RAG, PDF processing, drug discovery, multimodal Q&A — with full source code
- **Model Context Protocol (MCP):** Selected NIMs support MCP for structured tool-calling in agentic AI systems
- **Disaggregated Serving:** Support for prefill/decode disaggregation with NIXL for KV cache transfer at scale
- **NVIDIA AI Enterprise Included:** Licensed as part of AI Enterprise for enterprise SLA, support, and security guarantees

### Use Cases
- Deploying LLMs on-premises for enterprise chatbots, copilots, and document automation with data privacy
- Building RAG (Retrieval-Augmented Generation) pipelines using embedding NIMs + reranker NIMs + LLM NIMs
- Replacing OpenAI cloud API calls with self-hosted equivalents for cost reduction and data sovereignty
- Multi-agent AI orchestration with specialized NIMs for retrieval, reasoning, code generation, and multimodal understanding
- Drug discovery and genomics workflows using BioNeMo NIMs (protein structure prediction, molecular generation, virtual screening)
- High-throughput batch inference for content moderation, summarization, or classification at scale

### Hardware Requirements / Compatibility
- **Data Center:** NVIDIA A100 (80 GB), H100 (80 GB SXM/NVL), H200, B100, B200, GH200 — recommended for 70B+ parameter models
- **Professional/Workstation:** L40S (48 GB), RTX 6000 Ada (48 GB) — suitable for 7B–13B models
- **CUDA:** 12.2 or later required
- **Memory:** Model-dependent — Llama-3.1-8B fits on single A100 80 GB at FP16; Llama-3.1-70B requires 4× H100 at FP8
- **OS:** Linux (Ubuntu 20.04/22.04/24.04); container-based so deployable on any Linux host with Docker and NVIDIA Container Toolkit
- **Kubernetes:** Helm charts hosted on NGC for scalable multi-replica deployments; NIM Operator available for Kubernetes lifecycle management

### Language Bindings / APIs
- **REST API:** OpenAI-compatible HTTP endpoints; fully documented with OpenAPI spec
- **Python:** `openai` Python SDK (`openai.OpenAI(base_url="http://localhost:8000/v1", api_key="...")`), `requests`, LangChain, LlamaIndex
- **LangChain Integration:** `langchain-nvidia-ai-endpoints` package (`pip install langchain-nvidia-ai-endpoints`)
- **LlamaIndex Integration:** Native NIM connector in `llama-index-llms-nvidia`
- **Docker:** `docker run --gpus all --shm-size=16GB -p 8000:8000 nvcr.io/nim/<org>/<model>:<tag>`
- **Kubernetes/Helm:** `helm install my-nim nvidia/nim-llm --set model.name=meta/llama-3.1-8b-instruct`
- **NIM Operator:** Kubernetes operator for automated NIM lifecycle management

## Connections
- [[NVIDIA-AI-Enterprise]] — NIM is the primary inference delivery mechanism within the AI Enterprise software suite
- [[NGC]] — All NIM containers are cataloged and pulled from NGC (`nvcr.io/nim/...`)
- [[TensorRT-LLM]] — NIM for LLMs uses TensorRT-LLM as its primary high-performance inference backend
- [[Triton-Inference-Server]] — Some NIMs (vision, speech) are built on Triton as the serving layer
- [[NVIDIA-NeMo]] — NeMo-trained and fine-tuned models are packaged and deployed as NIMs
- [[NVIDIA-BioNeMo]] — BioNeMo models (ESM-2, AlphaFold2, DiffDock, MolMIM) are deployed as NIM microservices
- [[vLLM]] — vLLM is an alternative inference backend used in some NIM configurations
- [[NIXL]] — NIXL (NVIDIA Inference Xfer Library) handles KV-cache transfer in disaggregated NIM prefill/decode architectures

## Resources
- [NVIDIA NIM Overview](https://developer.nvidia.com/nim)
- [NIM Documentation](https://docs.nvidia.com/nim/index.html)
- [NIM Catalog on NGC](https://catalog.ngc.nvidia.com/nim)
- [NIM Agent Blueprints](https://developer.nvidia.com/blog/nvidia-nim-agent-blueprints/)
- [NIM Operator](https://docs.nvidia.com/nim-operator/latest/index.html)
