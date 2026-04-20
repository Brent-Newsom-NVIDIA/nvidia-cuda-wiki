# cuEquivariance

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Equivariant Neural Networks, Drug Discovery, Materials Science, Scientific AI
**Related:** [[cuDNN]], [[cuTENSOR]], [[NVIDIA-Warp]], [[cuBLAS]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-09

## Summary
cuEquivariance is a CUDA-X library providing optimized GPU kernels for geometry-aware (equivariant) neural networks used in drug discovery, materials science, and molecular simulation. It delivers dramatic speedups — 10x for MACE models, 200x for symmetric contractions, 3.5x for triangle operations — and supports leading interatomic potential models (MACE, Allegro, NequIP) and protein structure prediction models (DiffDock, Boltz, OpenFold). It offers JAX and PyTorch frontends.

## Detail

### Purpose
Equivariant neural networks (E3NNs) respect the symmetries of physical systems (rotations, reflections, translations) and are therefore highly accurate for molecular property prediction and simulation. However, their core operations — irreducible representation (irreps) tensor products, symmetric contractions, triangle attention — are computationally expensive and not well-served by generic cuBLAS or cuDNN kernels. cuEquivariance provides hand-optimized CUDA implementations of these specific operations.

### Key Features
- Optimized CUDA kernels for irreps tensor products and tensor contractions
- Triangle attention and triangle multiplication kernels (used in AlphaFold-style architectures)
- 10x speedup for MACE model performance
- 200x speedup for symmetric contractions
- 3.5x speedup for triangle operations
- Scalability: up to 100,000 atoms per GPU simulation
- Flexible API: define custom irreps basis tensor products
- Extensible beyond irreps for general equivariant operations
- JAX frontend for JAX-based frameworks
- PyTorch frontend for PyTorch-based frameworks
- Supports compute capabilities cu12 and cu13

### Use Cases
- Drug discovery: molecular docking and force field computation (DiffDock)
- Materials science: interatomic potential models (MACE, Allegro, NequIP)
- Protein structure prediction (Boltz, Neo-1, OpenFold)
- Quantum chemistry calculations
- Molecular dynamics with machine-learned force fields
- Catalyst design and discovery

### Hardware Requirements
- NVIDIA GPU, CUDA compute capability 12.x or 13.x (Hopper H100 / Blackwell B200)
- JAX or PyTorch installation for respective frontends

### Language Bindings
- Python via JAX frontend
- Python via PyTorch frontend
- C++ core (underlying CUDA kernels)

## Connections
- [[cuDNN]] — cuDNN provides general DNN primitives; cuEquivariance provides equivariance-specific ops
- [[cuTENSOR]] — cuTENSOR handles general tensor contractions; cuEquivariance handles irreps-specific contractions
- [[NVIDIA-Warp]] — Warp enables differentiable physics simulation; cuEquivariance enables equivariant ML on molecular data
- [[cuBLAS]] — cuBLAS handles standard GEMM; cuEquivariance handles structured tensor products not expressible as standard GEMM

## Resources
- [Official Page](https://developer.nvidia.com/cuequivariance)
- [cuEquivariance GitHub](https://github.com/NVIDIA/cuEquivariance)
- [Documentation](https://docs.nvidia.com/cuda/cuequivariance/)
