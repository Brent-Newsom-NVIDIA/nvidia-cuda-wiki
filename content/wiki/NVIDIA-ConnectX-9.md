# NVIDIA ConnectX-9

**Type:** Technology
**Tags:** NVIDIA, ConnectX-9, SuperNIC, InfiniBand, Ethernet, RDMA, AI networking, XDR, 1.6Tb/s
**Related:** [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-BlueField-4]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Silicon-Photonics]], [[GPUDirect-RDMA]], [[NVIDIA-HPC-X]], [[NVIDIA-Enterprise-AI-Factory]]
**Sources:** https://www.nvidia.com/en-us/networking/products/ethernet-adapters/connectx-9-supernic/, https://docs.nvidia.com/networking/display/connectx9supernic/introduction, https://www.nvidia.com/en-us/networking/
**Last Updated:** 2026-04-29

## Summary
NVIDIA ConnectX-9 SuperNIC is NVIDIA's next-generation high-performance network adapter for AI factories and accelerated data centers. Current NVIDIA docs and product pages position ConnectX-9 as a 1.6 Tb/s-class adapter supporting both InfiniBand and Ethernet, with PCIe Gen 6, CXL-ready interfaces, GPUDirect, RDMA, and in-network computing capabilities.

## Detail

### Purpose
As AI systems scale into rack-level and multi-rack memory domains, network adapters must carry GPU collectives, storage traffic, inference disaggregation, and multi-tenant data paths without making the CPU the bottleneck. ConnectX-9 extends the ConnectX family for XDR/1.6 Tb/s-class networks and next-generation AI factory fabrics.

### Current public capabilities
- Single-port 1.6 Tb/s or dual-port 800 Gb/s configurations in public docs.
- InfiniBand and Ethernet options for AI, HPC, and cloud infrastructure.
- PCIe Gen 6 and CXL-ready host connectivity.
- GPUDirect RDMA, GPU-initiated networking, MPI collectives, and storage acceleration.
- Secure networking, virtualization, isolation, telemetry, and DOCA/driver integration.

### NVIDIA context
ConnectX-9 belongs under the existing [[NVIDIA-ConnectX-InfiniBand]] family page, but it is current enough to warrant a generation page because it anchors Vera Rubin, BlueField-4/STX, silicon photonics, and next-generation AI networking.

## Connections
- [[NVIDIA-ConnectX-InfiniBand]] - family page for ConnectX adapters and InfiniBand/Ethernet networking.
- [[NVIDIA-BlueField-4]] - adjacent next-generation infrastructure processor for networking/storage offload.
- [[NVIDIA-Spectrum-X]] - Ethernet AI fabric using NVIDIA NICs and switches.
- [[NVIDIA-Silicon-Photonics]] - optical networking direction tied to next-generation high-bandwidth AI clusters.
- [[GPUDirect-RDMA]] - direct GPU-to-network memory path used by ConnectX adapters.
- [[NVIDIA-HPC-X]] - MPI/SHMEM/UCX/UCC stack for NVIDIA network adapters.
- [[NVIDIA-Enterprise-AI-Factory]] - AI factory networks depend on this class of low-latency high-bandwidth adapter.

## Source Excerpts
- NVIDIA ConnectX-9 docs describe 1.6 Tb/s-class SuperNIC configurations, InfiniBand/Ethernet support, PCIe Gen 6, CXL-ready connectivity, GPUDirect, and storage/offload features.

## Resources
- [NVIDIA ConnectX-9 SuperNIC](https://www.nvidia.com/en-us/networking/products/ethernet-adapters/connectx-9-supernic/)
- [ConnectX-9 SuperNIC Docs](https://docs.nvidia.com/networking/display/connectx9supernic/introduction)
