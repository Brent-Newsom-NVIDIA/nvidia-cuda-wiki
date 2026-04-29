# TensorRT

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Deep Learning, Inference, Optimization, LLM, AI
**Related:** [[cuDNN]], [[cuBLAS]], [[CUTLASS]], [[NCCL]], [[NIM-for-Large-Language-Models]], [[NeMo-Retriever-Embedding-NIM]], [[NeMo-Retriever-Reranking-NIM]], [[NIM-for-Image-OCR]], [[NIM-for-Object-Detection]], [[NIM-for-Cosmos-WFM]], [[NIM-for-Cosmos-Embed1]], [[NIM-for-Vision-Language-Models]], [[NIM-for-Visual-Generative-AI]], [[NIM-for-Multimodal-Safety]], [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-ASR-NIM]], [[NVIDIA-TTS-NIM]], [[NVIDIA-NMT-NIM]], [[NVIDIA-Background-Noise-Removal-NIM]], [[NVIDIA-NemoGuard-NIMs]], [[NIM-for-MAISI]], [[NIM-for-VISTA-3D]], [[NIM-for-OpenFold3]], [[NIM-for-Boltz2]], [[NVIDIA-Isaac-ROS]], [[NVIDIA-Jetson-Platform]], [[NVIDIA-DriveOS]], [[NVIDIA-DRIVE-AGX-Thor]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-09

## Summary
TensorRT is NVIDIA's ecosystem of inference compilers, runtimes, and model optimization tools that deliver low latency and high throughput for production deep learning inference. It can accelerate inference by up to 36x over CPU-only platforms through quantization, layer/tensor fusion, and kernel tuning. TensorRT-LLM extends this specifically to large language model serving, delivering up to 8x speedups for models like GPT-J.

## Detail

### Purpose
Moving deep learning models from training to production requires inference-time optimization — reducing model size, fusing operations, and selecting the fastest kernels for target hardware. TensorRT automates this optimization pipeline, enabling developers to deploy high-accuracy models at production scale without manual kernel engineering.

### Key Features
- Inference compilers and runtimes targeting NVIDIA GPUs from edge to data center
- Quantization support: FP8, FP4, INT8, INT4, AWQ, post-training quantization, quantization-aware training
- Layer and tensor fusion for reduced memory bandwidth and latency
- Automatic kernel selection and tuning per problem size and target hardware
- ONNX model import for framework-agnostic deployment
- PyTorch integration via Torch-TensorRT (6x faster inference)
- Hugging Face integration
- **TensorRT-LLM**: open-source library for LLM inference with simplified Python API (up to 8x speedup)
- **TensorRT Model Optimizer**: compression and quantization toolkit
- **TensorRT Cloud**: automated engine generation for LLMs (limited access)
- **TensorRT for RTX**: optimized for RTX/consumer GPUs with fast build times (<30s, <200MB)
- Tripy: Pythonic frontend for TensorRT
- Deployment via NVIDIA Triton Inference Server

### Use Cases
- Large language model (LLM) inference in data center
- Computer vision model deployment (object detection, segmentation, classification)
- Edge and embedded AI (Jetson, IGX)
- Robotics perception and manipulation inference through [[NVIDIA-Isaac-ROS]] and [[NVIDIA-Jetson-Platform]]
- Automotive safety-critical systems (NVIDIA DRIVE AGX)
- Conversational AI and speech recognition
- Recommendation systems

### Hardware Requirements
- Data center GPUs: GB100, H100, A100 (and older)
- Workstations: NVIDIA RTX / RTX Pro
- Edge: Jetson Orin, AGX Xavier, IGX
- Automotive: DRIVE AGX
- Consumer: GeForce RTX
- Supports CUDA 11.x and 12.x toolchains

### Language Bindings
- Python (primary for TensorRT-LLM and Model Optimizer)
- C++ (core TensorRT runtime API)
- ONNX (model interchange format)

## Connections
- [[cuDNN]] — TensorRT uses cuDNN for layer-level inference kernels
- [[cuBLAS]] — TensorRT uses cuBLAS for GEMM operations
- [[CUTLASS]] — TensorRT uses CUTLASS-derived kernels for optimized GEMM
- [[NCCL]] — multi-GPU TensorRT inference uses NCCL for tensor parallelism communication
- [[NIM-for-Large-Language-Models]] — NIM LLM is the production LLM microservice layer adjacent to TensorRT/TensorRT-LLM.
- [[NeMo-Retriever-Embedding-NIM]] and [[NeMo-Retriever-Reranking-NIM]] — current docs name TensorRT as part of the retrieval NIM acceleration stack.
- [[NIM-for-Image-OCR]] and [[NIM-for-Object-Detection]] — extraction NIMs use TensorRT-backed NVIDIA inference acceleration.
- [[NIM-for-Cosmos-WFM]] and [[NIM-for-Cosmos-Embed1]] — Cosmos NIM docs connect physical AI generation and embedding services to the NVIDIA inference stack.
- [[NIM-for-Vision-Language-Models]] and [[NIM-for-Visual-Generative-AI]] — multimodal and visual generation NIMs use TensorRT/TensorRT-LLM where model profiles are available.
- [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-ASR-NIM]], [[NVIDIA-TTS-NIM]], and [[NVIDIA-NMT-NIM]] — current Speech NIM docs package TensorRT/CUDA execution inside ASR, TTS, and NMT containers.
- [[NVIDIA-Background-Noise-Removal-NIM]] — BNR docs name TensorRT as part of the audio cleanup NIM acceleration stack.
- [[NVIDIA-NemoGuard-NIMs]] and [[NIM-for-Multimodal-Safety]] — safety NIMs use NIM LLM or Triton/TensorRT-backed deployment surfaces.
- [[NIM-for-MAISI]] and [[NIM-for-VISTA-3D]] - medical imaging NIMs sit on the same NVIDIA optimized inference deployment stack.
- [[NIM-for-OpenFold3]] and [[NIM-for-Boltz2]] — BioNeMo NIMs whose docs reference TensorRT-backed production inference optimization.
- [[FlashInfer]] — FlashInfer provides complementary attention kernels used alongside TensorRT-LLM
- [[NVIDIA-Isaac-ROS]] - robot perception packages can use TensorRT-optimized models on NVIDIA edge hardware.
- [[NVIDIA-Jetson-Platform]] - common deployment target for TensorRT inference in embedded robotics.
- [[NVIDIA-DriveOS]] - current DriveOS 7.0.3 public docs list TensorRT 10.10.10 for DRIVE OS.
- [[NVIDIA-DRIVE-AGX-Thor]] - DRIVE AGX Thor uses TensorRT for automotive AI inference pipelines.

## Resources
- [Official Page](https://developer.nvidia.com/tensorrt)
- [TensorRT Documentation](https://docs.nvidia.com/deeplearning/tensorrt/)
- [TensorRT-LLM GitHub](https://github.com/NVIDIA/TensorRT-LLM)
