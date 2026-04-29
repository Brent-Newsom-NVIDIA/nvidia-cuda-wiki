# NVIDIA DOCA

**Type:** Framework
**Tags:** NVIDIA, DOCA, BlueField, ConnectX, SuperNIC, DPU, networking, storage, security, SDK, DOCA-OFED
**Related:** [[NVIDIA-BlueField-DPU]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-Network-Operator]], [[NVIDIA-DOCA-Platform-Framework]], [[NVIDIA-Spectrum-X]], [[GPUDirect-RDMA]], [[NVIDIA-HPC-X]], [[NVIDIA-Rivermax]]
**Sources:** https://docs.nvidia.com/doca/sdk/index.html; https://developer.nvidia.com/networking/doca; https://developer.nvidia.com/networking/doca/getting-started
**Last Updated:** 2026-04-29

## Summary
NVIDIA DOCA is the software framework for developing, deploying, and operating accelerated infrastructure services on NVIDIA BlueField DPUs, BlueField SuperNICs, and ConnectX adapters. It plays a CUDA-like role for the networking and infrastructure side of NVIDIA systems: a consistent SDK, runtime, drivers, libraries, tools, services, and documentation surface for offloading data center networking, storage, security, telemetry, and management workloads. In AI factories, DOCA is the connective layer between [[NVIDIA-BlueField-DPU]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-Spectrum-X]], [[GPUDirect-RDMA]], and Kubernetes-facing tools such as [[NVIDIA-Network-Operator]].

## Detail
The current public DOCA docs surface is DOCA Documentation v3.3.0, last updated March 2026. NVIDIA notes that DOCA 3.3.0 is tested as part of Spectrum-X reference architecture 2.1, making it a current networking software baseline for modern Ethernet AI clusters.

DOCA consists of both an SDK and runtime environment. The BlueField software bundle includes the bootloader, OS kernel, NIC firmware, NVIDIA drivers, sample filesystem, and toolchain for the BlueField side of the platform. DOCA-Host is the host-side package for BlueField and ConnectX devices; current docs position DOCA-OFED as the host driver stack used by newer NVIDIA networking deployments.

The SDK spans several infrastructure domains: RDMA and UCX/UCC communications, GPUDirect integration, ASAP2 switching, emulated VirtIO, P4, DPA access to NIC engines, inline crypto, App Shield runtime security, storage emulation and virtualization, compression, management, deployment, and provisioning. Public docs also list DOCA programming guides, reference applications, tools, services, API references, and driver documentation.

DOCA is especially important because it consolidates infrastructure offload into a single NVIDIA programming and operations surface. Instead of treating DPU firmware, host drivers, RDMA, storage virtualization, packet processing, crypto, telemetry, and Kubernetes networking as unrelated layers, DOCA provides the shared architecture underneath BlueField and ConnectX software features.

## Connections
- [[NVIDIA-BlueField-DPU]] - DOCA is the primary software framework for programming BlueField DPUs and SuperNICs.
- [[NVIDIA-ConnectX-InfiniBand]] - DOCA-Host and DOCA-OFED provide host-side support for current ConnectX adapters.
- [[NVIDIA-Network-Operator]] - Network Operator deploys and manages DOCA-OFED driver containers and related networking components in Kubernetes.
- [[NVIDIA-DOCA-Platform-Framework]] - DPF orchestrates BlueField-accelerated services built on the DOCA software stack.
- [[NVIDIA-Spectrum-X]] - DOCA 3.3.0 is tied to the Spectrum-X reference architecture 2.1 release stack.
- [[GPUDirect-RDMA]] - DOCA RDMA, UCX, and GPUDirect support form part of the GPU-to-network data path.
- [[NVIDIA-HPC-X]] - HPC-X consumes UCX/UCC/SHARP-style networking capabilities that sit close to DOCA networking infrastructure.
- [[NVIDIA-Rivermax]] - DOCA Rivermax exposes Rivermax streaming acceleration through DOCA APIs.

## Source Excerpts
- "DOCA 3.3.0 is tested as part of Spectrum-X reference architecture release version 2.1."
- "Network, storage, and security services are offloaded, accelerated, and isolated on BlueField."
