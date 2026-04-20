# NIXL (NVIDIA Inference Xfer Library)

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Inference, Data Transfer, Networking, LLM, KV Cache, CUDA-X
**Related:** [[TensorRT-LLM]], [[Triton-Inference-Server]], [[GPU-Direct-Storage]], [[NCCL]], [[NVSHMEM]]
**Sources:** NVIDIA official documentation, developer.nvidia.com/nixl
**Last Updated:** 2026-04-09

## Summary
NIXL (NVIDIA Inference Xfer Library) is a high-performance data transfer library purpose-built for GPU inference workloads, particularly large language model (LLM) serving. It provides a unified API for efficient data movement between GPUs, CPUs, storage, and network endpoints, optimized for the KV cache transfer patterns required in disaggregated LLM inference architectures (prefill-decode disaggregation). NIXL abstracts multiple transport backends (UCX, NVLink, InfiniBand, NVMe) behind a single interface to maximize inference throughput.

## Detail

### Purpose
NIXL addresses the data movement bottleneck in modern LLM serving, where prefill computation and decode computation can be disaggregated across different GPU pools for efficiency. Moving large KV (key-value) caches between prefill servers and decode servers — or between GPU memory and high-capacity CPU/NVMe storage — requires high-bandwidth, low-latency transfers that existing general-purpose libraries do not optimize for specifically.

### Key Features
- Unified transfer API supporting multiple backends: UCX (RDMA/InfiniBand), NVLink, PCIe, NVMe-oF
- GPU Direct RDMA: NIC-to-GPU transfers bypassing CPU for minimum latency
- KV cache-optimized transfer patterns for disaggregated LLM inference
- GPU-initiated transfers: allows GPU kernels to trigger data movement without CPU involvement
- Memory registration and buffer management for pooled transfer efficiency
- Asynchronous, stream-ordered operations for overlapping compute and communication
- Integration with TensorRT-LLM for KV cache disaggregation
- Support for CPU offload (GPU-to-DRAM) for extended KV cache capacity
- Support for NVMe offload via GPU Direct Storage for very large KV cache pools
- Multi-GPU and multi-node topologies

### Use Cases
- Disaggregated LLM inference: separate prefill and decode GPU pools
- KV cache offload to CPU/NVMe for extended context length support
- High-throughput LLM serving with large batch sizes
- Multi-model serving with shared KV cache across model replicas
- GPU-to-GPU data streaming for inference pipeline stages

### Hardware Requirements
- NVIDIA GPU with CUDA Compute Capability 7.0+ (Volta minimum)
- H100/A100 with NVLink or InfiniBand for full bandwidth utilization
- RDMA-capable NICs (ConnectX series) for GPU Direct RDMA
- NVMe SSDs with GPU Direct Storage for NVMe offload
- CUDA 11.8 or higher

### Language Bindings
- C++ (primary library API)
- Python bindings for integration testing and application use

## Connections
- [[TensorRT-LLM]] — NIXL is the primary data transfer layer for TRT-LLM disaggregated inference
- [[Triton-Inference-Server]] — Triton LLM serving uses NIXL for KV cache transfers in disaggregated deployments
- [[GPU-Direct-Storage]] — NIXL leverages GDS for NVMe-to-GPU KV cache offload
- [[NCCL]] — NIXL complements NCCL; while NCCL handles collective training comms, NIXL handles point-to-point inference data movement
- [[NVSHMEM]] — NVSHMEM handles symmetric memory for HPC; NIXL targets inference-specific transfer patterns

## Resources
- [NVIDIA NIXL Developer Page](https://developer.nvidia.com/nixl)
- [NVIDIA Blog: Disaggregated LLM Inference](https://developer.nvidia.com/blog/nvidia-tensorrt-llm-disaggregated-serving/)
- [GitHub](https://github.com/ai-dynamo/nixl)
