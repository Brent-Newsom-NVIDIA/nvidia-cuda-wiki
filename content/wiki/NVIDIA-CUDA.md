# NVIDIA CUDA

**Type:** Technology
**Tags:** NVIDIA, CUDA, GPU computing, CUDA Toolkit, programming model, software stack
**Related:** [[CUDA-Runtime-API]], [[CUDA-Driver-API]], [[NVCC]], [[CUDA-Graphs]], [[CUDA-Streams]], [[CUDA-Unified-Memory]], [[PTX-ISA]], [[cuBLAS]], [[cuDNN]], [[NVIDIA-Blackwell-Architecture]]
**Sources:** https://docs.nvidia.com/cuda/, https://docs.nvidia.com/cuda/doc/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA CUDA is the core GPU computing platform and programming model for building accelerated applications across NVIDIA GPUs. The current CUDA Toolkit documentation organizes the stack into installation guides, programming guides, architecture guides, API references, libraries, compiler SDK components, profiling and debugging tools, and deployment compatibility notes.

## Detail

### Role in the NVIDIA stack
CUDA is the foundation beneath NVIDIA CUDA-X libraries, AI frameworks, HPC applications, and many production inference and training systems. It provides the compiler, runtime, driver-level APIs, math and communication libraries, profiling/debugging tools, and GPU programming abstractions used by higher-level software such as [[PyTorch]], [[TensorRT]], [[TensorRT-LLM]], [[NVIDIA-NIM]], and [[NVIDIA-NeMo]].

### Current documentation scope
- **Programming model:** [[CUDA-Streams]], [[CUDA-Graphs]], [[CUDA-Unified-Memory]], the CUDA Programming Guide, Best Practices Guide, and architecture-specific tuning guidance.
- **API layers:** [[CUDA-Runtime-API]], [[CUDA-Driver-API]], [[CUDA-Math-API]], [[CUDA-Debugger-API]], [[PTX-Compiler-APIs]], [[NVRTC]], and [[nvJitLink]].
- **Compiler path:** [[NVCC]], [[PTX-ISA]], [[NVVM-IR]], [[libNVVM]], [[libdevice]], [[nvFatbin]], and [[CUDA-Binary-Utilities]].
- **Libraries:** [[cuBLAS]], [[cuFFT]], [[cuRAND]], [[cuSOLVER]], [[cuSPARSE]], [[NPP]], [[nvJPEG]], [[cuDNN]], [[NCCL]], and newer device/distributed libraries such as [[cuBLASDx]], [[cuFFTDx]], [[cuBLASMp]], [[cuSOLVERMp]], and [[cuSPARSELt]].
- **Deployment contexts:** [[CUDA-Compatibility]], [[CUDA-on-WSL]], [[CUDA-for-Tegra]], [[NVIDIA-MIG]], [[NVIDIA-vGPU]], [[GPUDirect-RDMA]], and [[GPU-Direct-Storage]].

### NVIDIA context
CUDA is the connective tissue for NVIDIA hardware generations from data center GPUs to Jetson edge devices. Current docs explicitly include Blackwell guidance, making CUDA the bridge between low-level GPU architecture features and production AI software that consumes them.

## Connections
- [[NVIDIA-Blackwell-Architecture]] - latest architecture-specific CUDA compatibility and tuning docs live inside the CUDA documentation set.
- [[NVCC]] - the CUDA compiler driver is the main compilation front door for CUDA C++.
- [[CUDA-Runtime-API]] - the higher-level API most CUDA applications use directly.
- [[CUDA-Driver-API]] - the lower-level API used by runtimes, frameworks, and advanced module loading workflows.
- [[PTX-ISA]] - virtual GPU ISA emitted by CUDA compiler paths and consumed by JIT/compiler tooling.
- [[cuBLAS]] - representative CUDA-X library built on the CUDA platform.

## Source Excerpts
- NVIDIA CUDA docs present the Toolkit as the development environment for high-performance GPU-accelerated applications.
- The documentation hub groups CUDA docs into programming guides, architecture guides, APIs, tools, compiler SDK components, and libraries.

