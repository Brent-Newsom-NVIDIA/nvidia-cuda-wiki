# Compute Sanitizer

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Debugging, Memory Safety, Development Tools, CUDA Toolkit
**Related:** [[CUDA-GDB]], [[NVCC]], [[Nsight-Compute]], [[Nsight-Systems]]
**Sources:** NVIDIA official documentation (docs.nvidia.com/cuda)
**Last Updated:** 2026-04-09

## Summary
Compute Sanitizer is NVIDIA's functional correctness checking suite for CUDA applications, detecting memory access errors, race conditions, initialization errors, and synchronization issues in GPU code. It is the GPU equivalent of tools like Valgrind and AddressSanitizer, and is bundled with the CUDA Toolkit. It provides multiple sub-tools (Memcheck, Racecheck, Initcheck, Synccheck) each targeting different classes of GPU programming errors.

## Detail

### Purpose
GPU programming is prone to subtle errors: out-of-bounds memory accesses, race conditions between threads, use of uninitialized memory, and incorrect barrier synchronization. These bugs may cause silent wrong results or intermittent crashes. Compute Sanitizer instruments CUDA applications to detect these errors at runtime, pinpointing the exact source line and thread that caused the fault.

### Key Features
- **Memcheck**: Detects out-of-bounds memory accesses, misaligned accesses, device heap memory errors
- **Racecheck**: Detects shared memory data hazards and race conditions between CUDA threads
- **Initcheck**: Identifies accesses to uninitialized device memory (use-before-initialize errors)
- **Synccheck**: Detects improper usage of CUDA synchronization primitives (barrier misuse)
- Full stack trace for error localization to source line and thread
- Works on NVCC-compiled binaries without source code modification
- Compatible with CUDA streams and multiple GPU contexts
- Command-line interface bundled in CUDA Toolkit

### Use Cases
- Debugging memory corruption in CUDA kernels
- Detecting race conditions in shared memory usage
- Validating correct synchronization in multi-thread CUDA code
- Regression testing of CUDA library correctness
- Pre-release QA for CUDA applications
- CI/CD pipelines for GPU application testing

### Hardware Requirements
- NVIDIA GPU with CUDA support
- CUDA Toolkit installed
- Works best with debug builds (NVCC -G flag), but also works on release builds
- Linux and Windows supported

### Language Bindings
- Command-line tool (no language bindings required — instruments any CUDA binary)

## Connections
- [[CUDA-GDB]] — CUDA-GDB provides interactive debugging; Compute Sanitizer provides automated error detection
- [[NVCC]] — applications must be compiled with NVCC; Compute Sanitizer instruments the resulting binary
- [[Nsight-Compute]] — Nsight Compute profiles performance; Compute Sanitizer checks correctness
- [[Nsight-Systems]] — Nsight Systems profiles system behavior; Compute Sanitizer validates GPU code correctness

## Resources
- [Compute Sanitizer Documentation](https://docs.nvidia.com/cuda/compute-sanitizer/)
- [CUDA Toolkit](https://developer.nvidia.com/cuda-toolkit)
