# cuBLAS

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Linear Algebra, BLAS, Math, HPC, AI
**Related:** [[cuSOLVER]], [[cuSPARSE]], [[cuTENSOR]], [[CUTLASS]], [[nvmath-python]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-09

## Summary
cuBLAS is NVIDIA's GPU-accelerated library implementing all 152 standard Basic Linear Algebra Subprograms (BLAS) routines for NVIDIA GPUs. It covers Level 1 (vector-vector), Level 2 (matrix-vector), and Level 3 (matrix-matrix) operations, with optimized support for Tensor Cores and mixed/low-precision arithmetic. It is the foundational building block for GPU-accelerated AI and HPC numerical computing.

## Detail

### Purpose
cuBLAS solves the problem of accelerating dense linear algebra workloads by offloading standard BLAS routines to the GPU. It allows developers to replace CPU BLAS calls with GPU-accelerated equivalents with minimal code changes, enabling dramatic speedups for matrix-heavy workloads in deep learning, scientific simulation, and financial modeling.

### Key Features
- Complete support for all 152 standard BLAS routines
- Half-precision and integer matrix multiplication (GEMM) for AI workloads
- GEMM operations optimized for Tensor Cores with kernel fusion support
- Batched operations for processing many small matrices efficiently
- Multi-GPU execution via cuBLASXt and cuBLASMp variants
- Mixed- and low-precision computation support (FP64, FP32, FP16, INT8)
- CUDA stream compatibility for concurrent, asynchronous operations
- cuBLASLt: multi-stage GEMM APIs with advanced tuning options
- cuBLASXt: single-node, multi-GPU interface for Level 3 workloads
- cuBLASMp: multi-node distributed linear algebra (preview)
- cuBLASDx: device-side kernel API for use inside CUDA kernels (preview)

### Use Cases
- Training and inference of deep neural networks
- High-performance computing (HPC) simulations
- Computational fluid dynamics
- Financial risk modeling and Monte Carlo methods
- Scientific computing requiring dense matrix operations

### Hardware Requirements
- NVIDIA GPU with CUDA support (Kepler or later)
- Tensor Core acceleration available on Volta (V100) and later GPUs
- Mixed-precision and INT8 requires Turing (T4) or Ampere (A100) and later

### Language Bindings
- C and C++ (primary API)
- Fortran (via cuBLAS Fortran interface)
- Python (via nvmath-python and cuPy wrappers)

## Connections
- [[cuSOLVER]] — builds on cuBLAS for linear solvers and decompositions
- [[cuSPARSE]] — sparse counterpart to cuBLAS dense operations
- [[cuTENSOR]] — extends dense algebra to arbitrary tensor contractions
- [[CUTLASS]] — open-source GEMM templates that complement cuBLAS
- [[nvmath-python]] — Python-friendly wrapper exposing cuBLAS and other math libs

## Resources
- [Official Page](https://developer.nvidia.com/cublas)
- [cuBLAS Documentation](https://docs.nvidia.com/cuda/cublas/)
