# Triton Inference Server

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Inference, Serving, MLOps, Production, Framework
**Related:** [[TensorRT]], [[TensorRT-LLM]], [[cuDNN]], [[PyTorch]], [[NVIDIA-NeMo]], [[FlashInfer]]
**Sources:** NVIDIA official documentation, developer.nvidia.com/triton-inference-server
**Last Updated:** 2026-04-09

## Summary
NVIDIA Triton Inference Server is an open-source, production-grade model serving platform that enables organizations to deploy AI models from any framework at scale on NVIDIA GPUs, CPUs, and other hardware. It supports simultaneous deployment of multiple models, dynamic batching, model ensembles, and provides a standardized HTTP/gRPC inference protocol. Triton is framework-agnostic, supporting TensorRT, ONNX Runtime, PyTorch (TorchScript/Eager), TensorFlow, JAX, OpenVINO, and custom C++/Python backends.

## Detail

### Purpose
Triton solves the operational complexity of serving diverse AI models in production. It provides a unified serving infrastructure that maximizes GPU utilization through concurrent model execution, dynamic batching, and model pipelining, eliminating the need for framework-specific serving solutions for each model type.

### Key Features
- Multi-framework backend support: TensorRT, ONNX Runtime, PyTorch (LibTorch), TensorFlow, JAX, Python, C++, FIL (forest models)
- Dynamic batching: automatically groups inference requests to maximize GPU throughput
- Concurrent model execution: multiple models share GPU memory and execute in parallel
- Model ensembles and Business Logic Scripting (BLS) for multi-step inference pipelines
- Streaming inference support for LLMs and other generative models
- KV cache management and in-flight batching via TensorRT-LLM backend for LLM serving
- gRPC and HTTP/REST inference protocols (KServe v2 compatible)
- Model repository pattern: hot-swappable model versions without server restart
- Metrics endpoint (Prometheus-compatible) for throughput, latency, and GPU utilization
- Decoupled (streaming) request/response mode for long-running inferences
- CUDA shared memory and GPU direct for zero-copy data transfer
- Rate limiting and priority scheduling
- Model warmup and readiness/liveness probes for Kubernetes deployment

### Use Cases
- Production LLM serving with streaming token generation
- Computer vision inference pipelines (classification, detection, segmentation)
- Multi-model ensembles (e.g., preprocessing + inference + postprocessing)
- Real-time speech recognition and synthesis serving
- Recommender system inference at scale
- A/B testing with multiple model versions
- Kubernetes-native AI inference microservices

### Hardware Requirements
- NVIDIA GPU (CUDA Compute Capability 6.0+ for basic functionality)
- TensorRT backend requires Volta (7.0+) or newer
- LLM serving via TensorRT-LLM backend: A100/H100/H200 recommended
- CPU-only deployment supported for non-GPU backends
- CUDA 11.x or 12.x depending on backend requirements

### Language Bindings
- Server: C++ core
- Client SDKs: Python, C++, Java, Go
- Configuration: Protocol Buffers (model config.pbtxt)
- REST/gRPC APIs for language-agnostic clients

## Connections
- [[TensorRT]] — primary high-performance backend for optimized CNN/Transformer inference
- [[TensorRT-LLM]] — specialized backend for high-throughput LLM serving with in-flight batching
- [[FlashInfer]] — attention kernel library used by TensorRT-LLM backend within Triton
- [[PyTorch]] — LibTorch backend enables direct serving of PyTorch models
- [[NVIDIA-NeMo]] — NeMo-trained models are commonly deployed through Triton
- [[cuDNN]] — used by PyTorch and TensorFlow backends for DNN primitive acceleration

## Resources
- [NVIDIA Triton Developer Page](https://developer.nvidia.com/triton-inference-server)
- [Documentation](https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/)
- [GitHub](https://github.com/triton-inference-server/server)
- [NVIDIA NGC Container](https://catalog.ngc.nvidia.com/orgs/nvidia/containers/tritonserver)
