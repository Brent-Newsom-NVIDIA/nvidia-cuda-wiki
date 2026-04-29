# NVVM IR

**Type:** Technology
**Tags:** NVIDIA, CUDA, NVVM, LLVM IR, compiler, PTX
**Related:** [[NVIDIA-CUDA]], [[libNVVM]], [[libdevice]], [[PTX-ISA]], [[NVCC]], [[NVRTC]]
**Sources:** https://docs.nvidia.com/cuda/nvvm-ir-spec/index.html
**Last Updated:** 2026-04-29

## Summary
NVVM IR is NVIDIA's LLVM-based intermediate representation for CUDA GPU compute kernels. It is designed for compiler front ends that need to represent GPU code before lowering it through [[libNVVM]] into [[PTX-ISA]].

## Detail

### Purpose
Custom languages and advanced compilers need a stable GPU-oriented IR that captures CUDA execution semantics. NVVM IR fills that role by defining the representation, metadata, intrinsics, memory model, and supported LLVM subset for NVIDIA GPU compilation.

### Key capabilities
- Represents CUDA kernels and device functions using an LLVM-derived IR.
- Defines memory spaces, metadata, intrinsics, atomics, and concurrency behavior for GPU code.
- Integrates with [[libdevice]] for device-side library functions.
- Enables non-CUDA-language front ends to target NVIDIA GPUs through [[libNVVM]].

### NVIDIA context
NVVM IR is important for compiler infrastructure, DSLs, research compilers, and runtime systems that generate GPU code programmatically rather than writing CUDA C++ directly.

## Connections
- [[libNVVM]] - compiles NVVM IR into PTX.
- [[libdevice]] - provides device-library bitcode linked into NVVM IR flows.
- [[PTX-ISA]] - downstream virtual ISA target.
- [[NVRTC]] - adjacent runtime compilation path for CUDA C++.
- [[NVCC]] - standard compiler driver uses related internal compilation stages.

## Source Excerpts
- NVIDIA's NVVM IR specification documents the LLVM-based IR, supported intrinsics, metadata, and memory model for CUDA compilation.

