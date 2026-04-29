# PTX ISA

**Type:** Technology
**Tags:** NVIDIA, CUDA, PTX, ISA, compiler, virtual architecture
**Related:** [[NVIDIA-CUDA]], [[NVCC]], [[NVRTC]], [[PTX-Compiler-APIs]], [[CUDA-Driver-API]], [[NVVM-IR]], [[libNVVM]]
**Sources:** https://docs.nvidia.com/cuda/parallel-thread-execution/index.html
**Last Updated:** 2026-04-29

## Summary
PTX is NVIDIA's parallel thread execution virtual instruction set architecture for CUDA GPUs. CUDA compiler paths generate PTX as an intermediate, portable GPU program representation that can be assembled or JIT-compiled to GPU-specific machine code.

## Detail

### Purpose
PTX separates CUDA language front ends from specific GPU machine-code targets. A compiler can emit PTX for a virtual architecture, then NVIDIA tooling or the driver can lower it to code for a concrete GPU architecture such as Hopper or Blackwell.

### Key concepts
- Data-parallel execution model aligned with CUDA threads, warps, blocks, and grids.
- State spaces for registers, shared memory, local memory, global memory, constants, and parameters.
- Type, instruction, predicate, control-flow, and memory-ordering rules.
- Special registers and instructions used to expose GPU execution state.
- Interoperability rules for PTX that must link or call into other CUDA code.

### NVIDIA context
PTX is central to custom compilers, runtime code generation, [[NVRTC]], [[PTX-Compiler-APIs]], and [[CUDA-Driver-API]] module loading. It is also an important debugging and performance-inspection layer for advanced CUDA developers.

## Connections
- [[NVCC]] - can emit PTX during CUDA compilation.
- [[NVRTC]] - creates PTX at runtime from CUDA C++ strings.
- [[PTX-Compiler-APIs]] - compile PTX strings into GPU assembly code.
- [[NVVM-IR]] - lower-level compiler IR can be translated into PTX through [[libNVVM]].
- [[CUDA-Binary-Utilities]] - tools such as cuobjdump and nvdisasm help inspect compiled CUDA code around the PTX/SASS boundary.

## Source Excerpts
- NVIDIA's PTX ISA docs define PTX as the virtual GPU ISA used by CUDA compiler and JIT workflows.

