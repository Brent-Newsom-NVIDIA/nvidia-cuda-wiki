# cuFFT

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, FFT, Signal Processing, Math, HPC, Scientific Computing
**Related:** [[cuBLAS]], [[cuFFTDx]], [[cuSOLVER]], [[Floating-Point-and-IEEE-754]], [[NVSHMEM]], [[nvmath-python]], [[NVIDIA-CUDA]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-29

## Summary
cuFFT is NVIDIA's GPU-accelerated library for Fast Fourier Transform (FFT) computations, supporting 1D, 2D, and 3D transforms over real and complex data. It provides FFTW-compatible APIs and scales from single-GPU to multi-node exascale systems via cuFFTMp. Applications span deep learning, computational physics, molecular dynamics, seismic imaging, and medical imaging.

## Detail

### Purpose
FFTs are a core computation in signal processing, physics simulation, and deep learning (e.g., spectral convolutions). cuFFT offloads these transforms to the GPU, replacing CPU-bound FFTW workflows with massively parallel GPU execution, achieving orders-of-magnitude speedups on large transform sizes.

### Key Features
- 1D, 2D, and 3D FFTs for complex and real-valued data
- FFTW-compatible API for easy migration from CPU code
- Flexible data layouts with arbitrary strides
- Streamed, asynchronous execution via CUDA streams
- Half, single, and double precision support
- Batch execution for processing many transforms simultaneously
- In-place and out-of-place transform modes
- cuFFTXt: multi-GPU support for up to 16 GPUs on a single node
- cuFFTMp: multi-node distributed FFTs using slab and pencil decomposition with NVSHMEM/MPI
- cuFFTDx: inline FFT execution inside CUDA kernels (device extensions) for kernel fusion

### Use Cases
- Deep learning spectral layers and frequency-domain convolutions
- Computational physics and quantum chemistry
- Molecular dynamics simulations
- Seismic data processing and imaging
- Medical imaging (MRI reconstruction)
- Signal and image processing pipelines

### Hardware Requirements
- NVIDIA GPU with CUDA support
- cuFFTMp requires multi-GPU / multi-node NVLink or InfiniBand interconnect
- Available in CUDA Toolkit and NVIDIA HPC SDK

### Language Bindings
- C and C++ (primary API)
- Fortran (via HPC SDK)
- Python (via CuPy and nvmath-python wrappers)

## Connections
- [[cuBLAS]] — complements cuFFT for dense linear algebra in signal pipelines
- [[cuFFTDx]] — device-side FFT operations for fused CUDA kernels
- [[Floating-Point-and-IEEE-754]] — numerical accuracy context for floating-point transform results
- [[NVSHMEM]] — used by cuFFTMp for multi-node distributed FFTs
- [[nvmath-python]] — Python interface exposing cuFFT functionality
- [[cuSOLVER]] — used alongside cuFFT in scientific computing pipelines

## Resources
- [Official Page](https://developer.nvidia.com/cufft)
- [cuFFT Documentation](https://docs.nvidia.com/cuda/cufft/)
