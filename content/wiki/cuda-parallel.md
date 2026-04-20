# cuda.parallel

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Parallel Algorithms, Python, CCCL, C++ Standard Library, CUDA-X
**Related:** [[Thrust]], [[CUB]], [[NVRTC]], [[nvJitLink]], [[CuPy]]
**Sources:** NVIDIA CCCL documentation, nvidia.github.io/cccl
**Last Updated:** 2026-04-09

## Summary
`cuda.parallel` is a Python library that exposes GPU-accelerated parallel algorithm primitives — sort, reduce, scan, merge sort, histogram, and more — directly to Python, enabling high-performance GPU parallelism without writing CUDA C++ code. It is part of the NVIDIA CCCL (CUDA Core Compute Libraries) project, which unifies Thrust, CUB, and libcudacxx under a single umbrella, and provides Python bindings that JIT-compile C++ algorithm implementations at runtime using NVRTC/nvJitLink for maximum performance with user-defined operations.

## Detail

### Purpose
`cuda.parallel` bridges the gap between Python's ease of use and the performance of Thrust/CUB C++ parallel algorithms on NVIDIA GPUs. Previously, accessing CUB's block/device-level parallel primitives required writing CUDA C++; `cuda.parallel` allows Python developers to call these primitives directly with Python callables (lambdas, custom operators) that are JIT-compiled to device code at runtime.

### Key Features
- `cuda.parallel.experimental.algorithms.reduce`: GPU parallel reduction with user-defined binary operator
- `cuda.parallel.experimental.algorithms.scan`: inclusive and exclusive prefix scan
- `cuda.parallel.experimental.algorithms.sort` / `sort_keys`: parallel radix sort
- `cuda.parallel.experimental.algorithms.merge_sort`: merge sort for user-defined comparators
- `cuda.parallel.experimental.algorithms.histogram`: multi-level histogram computation
- `cuda.parallel.experimental.algorithms.unique`: unique element extraction
- User-defined operators (UDOs): Python callables JIT-compiled via NVRTC into device code
- Interoperability with CuPy, NumPy, and DLPack array protocols
- CUDA stream support for asynchronous operation
- Stateful operators: Python objects with `__call__` compiled to device-side functors
- Part of CCCL — unified with Thrust and CUB C++ headers under the same project

### Use Cases
- Python-based data engineering pipelines requiring GPU sort/reduce without C++ code
- Custom GPU reduction operations (e.g., argmin/argmax with domain-specific comparison)
- Scientific computing pipelines in Python requiring GPU prefix sums or histograms
- Building GPU-accelerated Python analytics tools without CUDA C++ expertise
- Rapid prototyping of GPU parallel algorithms before C++ production implementation
- Integration into RAPIDS-style Python GPU libraries

### Hardware Requirements
- NVIDIA GPU with CUDA Compute Capability 5.0+ (Maxwell minimum)
- CUDA 11.4 or higher
- Python 3.8 or higher

### Language Bindings
- Python (exclusively — this is the Python binding for Thrust/CUB)
- User-defined operators can contain CUDA C++ device code as strings

## Connections
- [[Thrust]] — `cuda.parallel` exposes the same parallel algorithm patterns as Thrust but from Python
- [[CUB]] — `cuda.parallel` wraps CUB device-level primitives (DeviceReduce, DeviceScan, etc.) for Python
- [[NVRTC]] — user-defined Python operators are JIT-compiled to device code via NVRTC
- [[nvJitLink]] — nvJitLink links JIT-compiled UDO device code with algorithm templates at runtime
- [[CuPy]] — `cuda.parallel` arrays interoperate with CuPy `ndarray` via CUDA Array Interface

## Resources
- [NVIDIA CCCL Documentation](https://nvidia.github.io/cccl/)
- [cuda.parallel API Reference](https://nvidia.github.io/cccl/python/parallel/)
- [GitHub: NVIDIA/cccl](https://github.com/NVIDIA/cccl)
- [CCCL Python Package (PyPI)](https://pypi.org/project/cuda-parallel/)
