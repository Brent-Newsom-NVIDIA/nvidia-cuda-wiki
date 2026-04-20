# NVSHMEM

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, PGAS, Distributed Computing, Multi-GPU, HPC, OpenSHMEM
**Related:** [[NCCL]], [[cuFFT]], [[cuBLAS]], [[AmgX]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-09

## Summary
NVSHMEM is NVIDIA's implementation of the OpenSHMEM programming model for GPU clusters, providing a Partitioned Global Address Space (PGAS) interface that enables direct GPU-to-GPU communication without CPU orchestration. It supports GPU-initiated one-sided communication (puts/gets), fine-grained asynchronous data transfers, and interoperability with MPI. NVSHMEM4Py provides Python bindings with CuTe DSL support.

## Detail

### Purpose
Traditional multi-GPU programming models (MPI, NCCL) require CPU involvement to orchestrate communication. NVSHMEM enables GPUs to directly access memory on remote GPUs using one-sided put/get operations initiated from CUDA kernels, eliminating CPU synchronization bottlenecks and enabling fine-grained, irregular communication patterns that are difficult to express with collective operations.

### Key Features
- PGAS (Partitioned Global Address Space): unified address space across all GPUs in a cluster
- GPU-initiated one-sided communication: put, get, atomic operations from CUDA kernels
- CPU-initiated and CUDA stream-based operation modes
- Low-overhead one-sided primitives (initiating process specifies all transfer details)
- Asynchronous design: overlaps computation and communication
- MPI interoperability for hybrid programming models
- Compatible with OpenSHMEM implementations
- Multi-architecture support: x86 and Arm processors
- NVSHMEM4Py: Python bindings with CuTe DSL support (v0.3.0+)
- Used by cuFFTMp for multi-node FFT communication

### Use Cases
- Quantum chromodynamics (QCD) simulations via QUDA library
- Spatial-parallel deep learning convolutions
- Irregular communication patterns in sparse solvers
- HPC applications with fine-grained neighbor communication
- Molecular dynamics with non-collective communication patterns
- Graph analytics with irregular data access

### Hardware Requirements
- NVIDIA GPU with CUDA support
- NVLink for intra-node GPU communication
- InfiniBand or RoCE for inter-node GPU communication
- GPU cluster environment required for multi-node use

### Language Bindings
- C and C++ (primary API)
- Python (NVSHMEM4Py with CuTe DSL support)

## Connections
- [[NCCL]] — NCCL handles collective operations; NVSHMEM handles fine-grained point-to-point PGAS communication
- [[cuFFT]] — cuFFTMp uses NVSHMEM for multi-node distributed FFT communication
- [[cuBLAS]] — cuBLASMp multi-node linear algebra uses NVSHMEM for data movement
- [[AmgX]] — AmgX multi-node solvers use NVSHMEM-like communication patterns

## Resources
- [Official Page](https://developer.nvidia.com/nvshmem)
- [NVSHMEM Documentation](https://docs.nvidia.com/nvshmem/)
