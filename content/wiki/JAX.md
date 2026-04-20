# JAX (GPU)

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Machine Learning, Automatic Differentiation, JIT, Python, Scientific Computing
**Related:** [[cuDNN]], [[cuBLAS]], [[NCCL]], [[CuPy]], [[PyTorch]], [[TensorFlow-GPU]]
**Sources:** jax.readthedocs.io official documentation
**Last Updated:** 2026-04-09

## Summary
JAX is an open-source Python library developed by Google DeepMind for high-performance numerical computing and machine learning, with GPU acceleration via CUDA. It provides composable function transformations — `jit` (XLA compilation), `grad` (automatic differentiation), `vmap` (vectorization), and `pmap`/`shard_map` (parallelization) — that transform pure Python/NumPy functions into highly optimized GPU code via the XLA (Accelerated Linear Algebra) compiler. JAX is increasingly popular for ML research due to its functional programming model and efficient GPU/TPU execution.

## Detail

### Purpose
JAX solves the problem of writing high-performance numerical code that is simultaneously differentiable, parallelizable, and hardware-accelerated, without requiring low-level GPU programming. Its composable transformation system enables researchers to write simple NumPy-like code and automatically get JIT-compiled, differentiable, vectorized GPU implementations.

### Key Features
- `jax.jit`: JIT compilation of Python functions via XLA for GPU/TPU
- `jax.grad` / `jax.jacobian` / `jax.hessian`: automatic differentiation (forward and reverse mode)
- `jax.vmap`: automatic vectorization (batching) of functions over array axes
- `jax.pmap`: SPMD parallelization across multiple devices (GPUs/TPUs)
- `jax.sharding` / `shard_map`: explicit device mesh sharding for multi-GPU/multi-host training
- NumPy-compatible API (`jax.numpy`) running on GPU
- XLA-optimized CUDA kernel generation with operator fusion
- Uses cuDNN, cuBLAS via XLA backends on NVIDIA GPUs
- NCCL-based collective communications for multi-GPU training
- Pytree support for arbitrary nested data structure transformations
- `jax.random` with explicit PRNG key system for reproducibility
- DLPack / CUDA Array Interface for interoperability with PyTorch, CuPy
- Flax, Haiku, Equinox neural network libraries built on JAX

### Use Cases
- ML research requiring custom loss functions and gradient computations
- Physics simulation with automatic differentiation through simulation steps
- Bayesian ML and probabilistic programming (Pyro, NumPyro on JAX)
- Scientific computing: PDE solvers, molecular dynamics, quantum chemistry
- Reinforcement learning environments requiring differentiable dynamics
- Multi-host distributed training with explicit sharding control
- Neural ODE and continuous-time model training

### Hardware Requirements
- NVIDIA GPU with CUDA Compute Capability 5.2+ (Maxwell minimum)
- CUDA 11.8 or higher (CUDA 12.x for JAX 0.4.x+)
- cuDNN 8.6+ required for full XLA GPU backend
- Multi-GPU: NCCL for collective operations; NVLink recommended for bandwidth
- H100/A100 recommended for large-scale model training

### Language Bindings
- Python (exclusively)
- XLA HLO (intermediate representation, typically not user-facing)

## Connections
- [[cuDNN]] — XLA uses cuDNN for convolution and attention operations on NVIDIA GPUs
- [[cuBLAS]] — XLA delegates GEMM operations to cuBLAS/cuBLASLt
- [[NCCL]] — JAX's `pmap`/`shard_map` multi-device collectives use NCCL
- [[CuPy]] — CuPy and JAX arrays interoperable via CUDA Array Interface for zero-copy exchange
- [[PyTorch]] — JAX and PyTorch coexist in many research workflows; DLPack enables tensor sharing
- [[TensorFlow-GPU]] — TensorFlow and JAX both use XLA as a compilation backend on GPU

## Resources
- [JAX Documentation](https://jax.readthedocs.io)
- [GitHub](https://github.com/google/jax)
- [JAX GPU Installation](https://jax.readthedocs.io/en/latest/installation.html)
- [XLA Compiler](https://openxla.org/xla)
