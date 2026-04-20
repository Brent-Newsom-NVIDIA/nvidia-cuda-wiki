# PyTorch (NVIDIA CUDA Builds)

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Deep Learning, Framework, Python, Machine Learning
**Related:** [[cuDNN]], [[CUTLASS]], [[TensorRT]], [[NCCL]], [[cuBLAS]], [[NVIDIA-DALI]], [[TensorRT-LLM]], [[Megatron-LM]]
**Sources:** NVIDIA official documentation, pytorch.org
**Last Updated:** 2026-04-09

## Summary
PyTorch is an open-source deep learning framework developed by Meta AI and maintained by the PyTorch Foundation, distributed with NVIDIA CUDA support as first-class GPU acceleration. NVIDIA ships and maintains optimized CUDA-enabled PyTorch builds that leverage cuDNN, cuBLAS, NCCL, and other CUDA-X libraries under the hood. It is the dominant research and production framework for training and deploying neural networks, with native support for dynamic computation graphs, automatic differentiation, and distributed training across NVIDIA GPU clusters.

## Detail

### Purpose
PyTorch solves the problem of efficient GPU-accelerated neural network training and inference. Its CUDA builds provide direct tensor operations on NVIDIA GPUs, with deep integration into the NVIDIA software stack including Tensor Core utilization via cuBLAS/cuDNN, multi-GPU training via NCCL, and export pathways to TensorRT for optimized production deployment.

### Key Features
- Dynamic computation graph (eager execution) with `torch.autograd` automatic differentiation
- `torch.cuda` namespace for explicit GPU tensor management and device placement
- Tensor Core acceleration for FP16, BF16, TF32, FP8 mixed-precision training via AMP (Automatic Mixed Precision)
- `torch.distributed` for multi-GPU and multi-node distributed training (DDP, FSDP, RPC)
- `torch.compile` (introduced in 2.0) — JIT compilation via TorchInductor/Triton for kernel fusion and speedup
- `torch.nn` module system for building neural network layers and models
- `torch.utils.data` DataLoader with NVIDIA DALI integration support
- TorchScript for model serialization and C++ deployment
- ONNX export for cross-framework interoperability
- `torch.profiler` integration with Nsight Systems and Nsight Compute
- cuDNN backend for convolutions, attention, and other DNN primitives
- Flash Attention integration via `torch.nn.functional.scaled_dot_product_attention`
- FP8 training support on Hopper (H100) and Blackwell (B100/B200) GPUs

### Use Cases
- Training large language models (LLMs) and vision transformers
- Computer vision model development (classification, detection, segmentation)
- NLP and speech model research and production
- Reinforcement learning environments
- Scientific ML and physics-informed neural networks
- Production inference via TorchServe or export to TensorRT
- Multi-node distributed training on NVIDIA DGX/HGX clusters

### Hardware Requirements
- NVIDIA GPU with CUDA Compute Capability 3.7 or higher (Kepler+)
- CUDA 11.8 or higher recommended; CUDA 12.x for Hopper/Blackwell features
- Tensor Cores: Volta (V100) and newer for FP16; Ampere (A100) for BF16/TF32; Hopper (H100) for FP8
- NVLink/InfiniBand for multi-GPU distributed training at scale
- H100/H200/B100/B200 recommended for state-of-the-art LLM training

### Language Bindings
- Python (primary, `pip install torch`)
- C++ via LibTorch (`torch::Tensor`, `torch::nn`)
- Java (limited, via TorchScript)
- CUDA C++ for custom kernel extensions via `torch.utils.cpp_extension`

## Connections
- [[cuDNN]] — PyTorch uses cuDNN for all convolution, attention, and normalization primitives
- [[cuBLAS]] — underlies all `torch.matmul` / `torch.nn.Linear` operations on GPU
- [[NCCL]] — powers `torch.distributed` for multi-GPU all-reduce and collective operations
- [[TensorRT]] — primary export target for optimized production inference from PyTorch models
- [[NVIDIA-DALI]] — drop-in replacement for PyTorch DataLoader for GPU-accelerated data pipelines
- [[CUTLASS]] — custom GEMM kernels can be integrated via PyTorch C++ extensions
- [[Megatron-LM]] — built on top of PyTorch for large-scale LLM training
- [[TensorRT-LLM]] — uses PyTorch models as source for optimized LLM deployment

## Resources
- [Official Site](https://pytorch.org)
- [PyTorch Docs](https://pytorch.org/docs/stable/)
- [NVIDIA PyTorch Container](https://catalog.ngc.nvidia.com/orgs/nvidia/containers/pytorch)
- [GitHub](https://github.com/pytorch/pytorch)
- [PyTorch with CUDA Guide](https://pytorch.org/get-started/locally/)
