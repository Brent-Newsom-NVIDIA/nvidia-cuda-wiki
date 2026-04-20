# cuTile / CUDA Tile IR

**Type:** Technology
**Tags:** NVIDIA, cuTile, CUDA, Tile IR, GPU Programming, Compiler, Blackwell, CTA
**Related:** [[NVCC]], [[CUTLASS]], [[TensorRT]], [[NVIDIA-Blackwell-Architecture]], [[cuda-parallel]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-10

## Summary
cuTile (CUDA Tile IR) is a new intermediate representation and programming model introduced with the NVIDIA Blackwell GPU architecture and CUDA 12.x, designed to express tile-level parallelism for tensor and matrix operations. It provides a hierarchical tile abstraction that maps directly to the new Blackwell hardware features — including the Tensor Memory Accelerator (TMA) and warp-group-level matrix operations — enabling compilers and libraries like CUTLASS and TensorRT to generate highly optimized GEMM and attention kernels without requiring experts to hand-write low-level PTX.

## Detail

### Purpose
Modern GPU tensor operations involve complex hierarchical tiling across thread blocks, warps, and individual threads — with explicit data movement between global, shared, and register memory at each level. Writing optimal kernels by hand requires deep expertise. cuTile/CUDA Tile IR provides a compiler-friendly intermediate representation that captures these tiling decisions cleanly, enabling automatic optimization and simplifying the generation of optimal code for new hardware features.

### Key Features
- Hierarchical tile abstraction: expresses computation as nested tile operations at cluster, CTA, warp, and thread levels
- TMA integration: seamless expression of Tensor Memory Accelerator bulk copy operations
- Warp-group matrix multiply: Blackwell's new WGMMA instructions expressed at tile IR level
- Compiler target: feeds into PTX/SASS code generation for Blackwell GPU
- CUTLASS integration: CUTLASS 3.x uses cuTile IR concepts for Blackwell kernel templates
- TensorRT backend: cuTile enables TensorRT to auto-generate Blackwell-optimized layers
- Explicit memory hierarchy: programmer specifies data movement between memory levels declaratively

### Use Cases
- Writing high-performance GEMM and attention kernels for Blackwell
- Compiler backend development for GPU languages (Triton, Mojo, custom DSLs)
- CUTLASS-based custom operator development
- TensorRT plugin authoring with Blackwell hardware acceleration
- Research into GPU programming model abstractions

### Hardware Requirements / Compatibility
- Primarily targets NVIDIA Blackwell architecture (B100, B200, GB200)
- CUDA 12.4+ for full Tile IR and TMA support
- Compatible with Hopper (H100) TMA and wgmma features
- CUTLASS 3.x required for C++ Tile IR usage

### Language Bindings / APIs
- C++ (CUTLASS 3.x tile abstractions)
- PTX (Tile IR lowers to PTX instructions)
- Python (via Triton and nvcc-backed compilation pipelines)
- Available as part of CUDA Toolkit

## Connections
- [[NVCC]] — NVCC compiles CUDA C++ including Tile IR-based code to PTX/SASS
- [[CUTLASS]] — CUTLASS 3.x is the primary user-facing C++ library expressing cuTile concepts
- [[TensorRT]] — TensorRT uses cuTile/Tile IR for Blackwell layer code generation
- [[NVIDIA-Blackwell-Architecture]] — cuTile is designed around Blackwell's TMA and WGMMA hardware features
- [[cuda-parallel]] — cuda-parallel Python library benefits from cuTile-optimized underlying kernels

## Resources
- [CUDA Toolkit](https://developer.nvidia.com/cuda-toolkit)
- [CUTLASS 3.x Documentation](https://github.com/NVIDIA/cutlass/blob/main/media/docs/cutlass_3x_design.md)
- [Blackwell Architecture Whitepaper](https://resources.nvidia.com/en-us-blackwell-architecture)
