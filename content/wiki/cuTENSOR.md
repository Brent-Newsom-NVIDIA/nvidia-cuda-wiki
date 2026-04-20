# cuTENSOR

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Tensor, Linear Algebra, Deep Learning, HPC, Math
**Related:** [[cuBLAS]], [[cuDNN]], [[CUTLASS]], [[cuSOLVER]], [[nvmath-python]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-09

## Summary
cuTENSOR is NVIDIA's GPU-accelerated tensor linear algebra library, providing high-performance tensor contraction, reduction, and elementwise operations. It leverages NVIDIA Tensor Cores (including TF32, 3xTF32, and DMMA modes) and supports arbitrary tensor dimensionality, block-sparse contractions, and multi-GPU/multi-node scaling via cuTENSORMp. It is used in deep learning, quantum chemistry, and computational physics.

## Detail

### Purpose
Tensor contractions are the generalization of matrix multiplication to higher-dimensional arrays — a core operation in deep learning, quantum chemistry, and physics simulation. cuTENSOR provides a highly optimized, hardware-native implementation of these operations that outperforms ad-hoc approaches and fully utilizes Tensor Core hardware on modern NVIDIA GPUs.

### Key Features
- Just-in-time (JIT) compiled kernels for tensor contraction
- Plan-based multi-stage API for contraction, reduction, and elementwise ops
- Support for arbitrarily dimensional tensor descriptors
- TF32, 3xTF32, and DMMA compute type support for Tensor Cores
- Block-sparse tensor contractions for sparsity exploitation
- Expressive API enabling elementwise operation fusion
- Mixed precision with int64 extents for large tensor dimensions
- cuTENSORMp: multi-GPU and multi-node tensor contractions (near-linear scaling on Grace Blackwell NVL72)

### Use Cases
- Deep learning training and inference (tensor operations in transformers)
- Computer vision model acceleration
- Quantum chemistry simulations (e.g., CCSD, MP2)
- Computational physics (e.g., tensor network methods)
- Scientific computing with multi-dimensional arrays

### Hardware Requirements
- NVIDIA GPU with CUDA support
- Tensor Core acceleration on Volta (V100) and later
- 3xTF32 and DMMA modes on Ampere (A100) and later
- cuTENSORMp requires multi-GPU NVLink or InfiniBand interconnect

### Language Bindings
- C and C++ (primary API)
- Python (via nvmath-python and CuPy wrappers)

## Connections
- [[cuBLAS]] — cuBLAS handles 2D matrix operations; cuTENSOR extends to N-D tensors
- [[cuDNN]] — cuDNN uses tensor operations internally; cuTENSOR provides the low-level primitive
- [[CUTLASS]] — CUTLASS provides GEMM templates; cuTENSOR provides higher-level tensor contraction
- [[nvmath-python]] — Python-accessible interface for cuTENSOR operations

## Resources
- [Official Page](https://developer.nvidia.com/cutensor)
- [cuTENSOR Documentation](https://docs.nvidia.com/cuda/cutensor/)
