# cuQuantum

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Quantum Computing, Simulation, Tensor Networks, Scientific Computing
**Related:** [[cuTENSOR]], [[cuStateVec]], [[cuBLAS]], [[NVIDIA-Warp]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-09

## Summary
NVIDIA cuQuantum is a GPU-accelerated SDK for quantum computing simulation, providing libraries and tools for state vector, tensor network, density matrix, Pauli propagation, and stabilizer circuit simulation. It delivers orders-of-magnitude speedups on key quantum problems (random circuits, Shor's algorithm, Variational Quantum Eigensolver) and integrates with major quantum frameworks (Qiskit, Cirq, PennyLane, Qibo) with zero code changes. It scales from single GPU to supercomputer-scale multi-node deployments.

## Detail

### Purpose
Quantum computers are not yet large enough to solve practical problems without classical simulation for validation, research, and algorithm development. Quantum circuit simulation on CPU is exponentially expensive — simulating even 40+ qubit circuits takes days. cuQuantum runs these simulations on GPU clusters, enabling researchers to test quantum algorithms, validate hardware, and explore error correction without a physical quantum computer.

### Key Features
- **cuStateVec**: State vector simulation with optimized memory management and gate kernels
- **cuTensorNet**: Tensor network simulation with contraction order optimization and acceleration
- **cuDensityMat**: Density matrix dynamics supporting arbitrary operator actions
- **cuPauliProp**: Efficient Pauli propagation for expectation value calculations
- **cuStabilizer**: Stabilizer circuit simulation for quantum error correction research
- Orders-of-magnitude speedups on random quantum circuits, Shor's algorithm, VQE
- Single-GPU to multi-node cluster scaling via high-level Python APIs
- Zero-code-change acceleration for Qiskit, Cirq, PennyLane, Qibo, QuEST, and others
- C++ APIs for single-GPU/multi-GPU
- CUDA-Q: full quantum framework powered by cuQuantum
- Compatible with H200, Blackwell B200, GB200 NVL72 systems

### Use Cases
- Quantum algorithm development and validation
- Quantum hardware noise modeling and calibration
- Quantum error correction research
- Variational quantum algorithms (VQE, QAOA)
- Quantum chemistry simulations (molecular energy levels)
- Quantum machine learning research
- Quantum communication protocol simulation

### Hardware Requirements
- NVIDIA GPU (H100, H200, B200, GB200 NVL72 recommended for large-scale)
- Multi-GPU and multi-node cluster support
- CUDA 11.x or 12.x

### Language Bindings
- Python (primary high-level API)
- C++ (low-level single/multi-GPU API)

## Connections
- [[cuTENSOR]] — cuTensorNet builds on cuTENSOR for GPU-accelerated tensor network contractions
- [[cuBLAS]] — cuQuantum uses cuBLAS for dense matrix operations in gate simulation
- [[NVIDIA-Warp]] — both target scientific simulation; Warp for classical physics, cuQuantum for quantum simulation
- [[NCCL]] — multi-node cuQuantum simulations use NCCL for distributed communication

## Resources
- [Official Page](https://developer.nvidia.com/cuquantum-sdk)
- [cuQuantum Documentation](https://docs.nvidia.com/cuda/cuquantum/)
- [cuQuantum GitHub](https://github.com/NVIDIA/cuQuantum)
