# cuPyNumeric

**Type:** Technology
**Tags:** NVIDIA, cuPyNumeric, NumPy, Legate, distributed computing, Python, data science
**Related:** [[CuPy]], [[Dask]], [[cuDF]], [[cuML]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-CUDA]]
**Sources:** https://docs.nvidia.com/cupynumeric/latest/
**Last Updated:** 2026-04-29

## Summary
cuPyNumeric implements the NumPy API on top of the Legate framework, enabling Python NumPy-style programs to scale from CPUs to GPUs and multi-node, multi-GPU systems. It is NVIDIA-authored documentation for a Python data-science path distinct from [[CuPy]] and RAPIDS.

## Detail

### Purpose
NumPy is widely used, but single-node CPU execution limits many scientific and data-processing workloads. cuPyNumeric aims to preserve NumPy-style code while scaling execution onto accelerated and distributed NVIDIA systems.

### Key capabilities
- NumPy API implementation backed by the Legate runtime.
- Can run on CPU, single GPU, and multi-node multi-GPU configurations.
- Targets transparent acceleration and scaling of Python numerical programs.
- Complements RAPIDS and CuPy rather than replacing every use case.

### NVIDIA context
cuPyNumeric sits in NVIDIA's Python accelerated-computing portfolio alongside [[CuPy]], [[Dask]], [[cuDF]], and [[cuML]]. It is particularly relevant to scientific Python workloads where users want NumPy compatibility with large-scale GPU infrastructure.

## Connections
- [[CuPy]] - NumPy/SciPy-compatible GPU array library with a different execution model.
- [[Dask]] - distributed Python execution used in RAPIDS and data workflows.
- [[cuDF]] - GPU DataFrame library for tabular data.
- [[NVIDIA-DGX-SuperPOD]] - scale-out target class for multi-node GPU Python workloads.
- [[NVIDIA-CUDA]] - underlying GPU acceleration platform.

## Source Excerpts
- NVIDIA's cuPyNumeric docs describe a NumPy API implementation built on Legate for CPU, GPU, and multi-node scaling.

