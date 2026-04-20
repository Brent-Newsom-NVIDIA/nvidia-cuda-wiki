# cuPQC

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Post-Quantum Cryptography, Security, Cryptography, CUDA-X
**Related:** [[NVCC]], [[NVRTC]], [[cuBLAS]], [[Thrust]]
**Sources:** NVIDIA official documentation, developer.nvidia.com/cupqc
**Last Updated:** 2026-04-09

## Summary
cuPQC (CUDA Post-Quantum Cryptography) is an NVIDIA CUDA-X library providing GPU-accelerated implementations of post-quantum cryptographic (PQC) algorithms standardized or under evaluation by NIST. As quantum computers threaten to break current public-key cryptography (RSA, ECC), cuPQC enables organizations to perform high-throughput PQC operations — key generation, encapsulation/decapsulation, signing/verification — at GPU speeds, supporting the migration of security infrastructure to quantum-resistant algorithms.

## Detail

### Purpose
cuPQC addresses the massive computational cost of post-quantum cryptographic operations, which are significantly more expensive than RSA/ECC equivalents. By accelerating PQC on NVIDIA GPUs, it enables applications that require high-throughput cryptographic processing (TLS certificate authorities, code signing, VPN gateways, hardware security modules) to adopt quantum-resistant algorithms without sacrificing performance.

### Key Features
- GPU-accelerated CRYSTALS-Kyber (ML-KEM): NIST-standardized key encapsulation mechanism
- GPU-accelerated CRYSTALS-Dilithium (ML-DSA): NIST-standardized digital signature scheme
- GPU-accelerated FALCON: NIST-standardized lattice-based signature scheme
- GPU-accelerated SPHINCS+ (SLH-DSA): hash-based signature scheme
- Batched operations: thousands of PQC operations per GPU kernel call
- Both device-side (kernel) and host-side APIs
- Integration with CUDA streams for pipelined cryptographic processing
- Constant-time implementations for side-channel resistance
- Support for multiple NIST security levels (1, 3, 5)

### Use Cases
- High-throughput TLS/certificate authority operations migrating to PQC
- Code signing and firmware authentication at scale
- VPN and secure channel establishment with quantum-resistant KEM
- Blockchain and digital ledger systems requiring PQC signatures
- HSM (Hardware Security Module) software acceleration
- IoT device provisioning at scale
- Research into PQC performance benchmarking

### Hardware Requirements
- NVIDIA GPU with CUDA Compute Capability 7.0+ (Volta minimum)
- A100/H100 recommended for maximum throughput
- CUDA 11.0 or higher

### Language Bindings
- C (C API)
- C++ (header-based API)
- Python bindings (planned/available via wrapper)

## Connections
- [[NVCC]] — cuPQC kernels compiled with NVCC for device-side execution
- [[NVRTC]] — runtime compilation optionally used for dynamic algorithm selection
- [[Thrust]] — Thrust primitives used internally for auxiliary GPU operations
- [[cuBLAS]] — lattice-based PQC involves polynomial matrix operations that parallel BLAS patterns

## Resources
- [NVIDIA cuPQC Developer Page](https://developer.nvidia.com/cupqc)
- [NIST PQC Standardization](https://csrc.nist.gov/projects/post-quantum-cryptography)
- [NVIDIA Security Libraries Overview](https://developer.nvidia.com/cryptography)
