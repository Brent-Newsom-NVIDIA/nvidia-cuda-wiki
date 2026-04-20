# cuDSS

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Sparse Solver, Direct Solver, Math, HPC, Autonomous Driving
**Related:** [[cuSPARSE]], [[cuSOLVER]], [[AmgX]], [[nvmath-python]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-09

## Summary
cuDSS is NVIDIA's first-generation GPU-accelerated Direct Sparse Solver library, designed to solve linear systems with very sparse matrices. It combines CPU sequential processing with GPU parallel execution and supports single-GPU, multi-GPU, and multi-node configurations. Target applications include autonomous driving simulations and industrial process simulation requiring high throughput and robustness.

## Detail

### Purpose
Direct sparse solvers are a cornerstone of numerical simulation — unlike iterative solvers, they produce exact solutions (up to floating-point precision) and are essential when iterative methods struggle to converge. cuDSS brings GPU acceleration to this class of solver, addressing the growing complexity of problems in autonomous driving, robotics, and process engineering.

### Key Features
- GPU-accelerated direct sparse solver (factorization + solve phases)
- Combines CPU sequential preprocessing with GPU parallel numerical phases
- Handles matrices with very few non-zero elements per row
- Single-GPU, multi-GPU, and multi-node platform support
- Refactorization capability for repeated solves with same sparsity pattern
- Multiple reordering options to minimize fill-in
- Flexible matrix type support
- Optimized for NVIDIA Grace Hopper Superchip architecture
- Compatible with all NVIDIA GPUs, Pascal and newer

### Use Cases
- Autonomous driving simulation and sensor fusion
- Industrial process simulation and control
- Structural analysis and finite element methods
- Circuit simulation
- Real-time control systems requiring robust linear algebra

### Hardware Requirements
- NVIDIA GPU, Pascal (GP100) or newer
- Optimized for Grace Hopper Superchip (GH200)
- Multi-GPU/multi-node support for large-scale problems

### Language Bindings
- C and C++ (primary API)
- Python (via nvmath-python)
- Sample code available via NVIDIA CUDALibrarySamples repository

## Connections
- [[cuSPARSE]] — cuDSS builds on sparse matrix infrastructure from cuSPARSE
- [[cuSOLVER]] — cuSOLVER's cusolverRF covers refactorization; cuDSS is a more specialized direct solver
- [[AmgX]] — AmgX provides iterative alternative; cuDSS provides direct solver
- [[nvmath-python]] — nvmath-python exposes cuDSS sparse solver via Python API

## Resources
- [Official Page](https://developer.nvidia.com/cudss)
- [cuDSS Documentation](https://docs.nvidia.com/cuda/cudss/)
