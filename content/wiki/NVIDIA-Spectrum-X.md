# NVIDIA Spectrum-X

**Type:** Technology
**Tags:** NVIDIA, Spectrum-X, Ethernet, AI Networking, RoCE, Lossless Ethernet, HPC Networking
**Related:** [[NVIDIA-Cumulus-Linux]], [[NVIDIA-Network-Operator]], [[NVIDIA-DOCA]], [[NVIDIA-HPC-X]], [[NVIDIA-NetQ]], [[NVIDIA-DSX-Air]], [[NVIDIA-Quantum-InfiniBand]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-BlueField-DPU]], [[NCCL]], [[NVIDIA-DGX]]
**Sources:** NVIDIA official documentation, https://docs.nvidia.com/doca/sdk/index.html, https://docs.nvidia.com/networking-ethernet-software/cumulus-linux/Whats-New/, https://docs.nvidia.com/networking/display/kubernetes2610/nic-conf-operator/spectrum-x-configuration.html, https://docs.nvidia.com/networking/display/hpcxv226
**Last Updated:** 2026-04-29

## Summary
NVIDIA Spectrum-X is a networking platform designed to deliver InfiniBand-level AI computing performance over an Ethernet fabric, solving the challenge of running RDMA (Remote Direct Memory Access) collectives over lossy Ethernet infrastructure. Combining the Spectrum-4 400GbE switch ASIC with ConnectX-7 NICs and Adaptive Routing technology, Spectrum-X achieves up to 1.6x higher effective bandwidth for AI workloads compared to standard Ethernet, making it the preferred Ethernet-based AI networking solution for hyperscale cloud and enterprise AI clusters.

## Detail

### Purpose
Many cloud providers and enterprises have standardized on Ethernet infrastructure but need InfiniBand-class performance for AI training. Spectrum-X bridges this gap by providing a purpose-built Ethernet AI networking system that uses PFC (Priority Flow Control), ECN congestion management, and NVIDIA's proprietary Adaptive Routing to deliver lossless RDMA for NCCL collectives over standard 400GbE.

### Key Features
- Spectrum-4 switch ASIC: 400GbE, 128 ports, 51.2Tb/s non-blocking bandwidth
- Adaptive Routing: dynamically balances traffic across equal-cost paths to prevent hotspots
- RoCEv2 acceleration: hardware-optimized for GPU-to-GPU RDMA over Ethernet
- [[NVIDIA-DSX-Air]] simulation workflows for validating Cumulus Linux and Ethernet fabric designs before deployment
- Lossless fabric: eliminates packet drops that stall NCCL collectives
- SHARP over Ethernet: in-network collective offload extending SHARP to Ethernet
- Co-designed with ConnectX-7/8 NICs for end-to-end Ethernet AI acceleration
- Compatible with standard 400GbE infrastructure and optics
- Current NVIDIA docs tie Spectrum-X reference architecture 2.1 to [[NVIDIA-DOCA]] 3.3.0, [[NVIDIA-Cumulus-Linux]] 5.16, [[NVIDIA-HPC-X]] 2.26, and Network Operator Spectrum-X NIC configuration guidance

### Use Cases
- AI factory Ethernet backbone for LLM training clusters
- Cloud provider AI/ML training infrastructure (alternative to InfiniBand)
- Hyperscale data center AI workloads
- Multi-tenant AI clusters with Ethernet-native management
- HPC clusters preferring Ethernet over InfiniBand operational models

### Hardware Requirements / Compatibility
- Spectrum-4 (SN5000 series) switches: 400GbE, 51.2Tb/s
- Spectrum-3 (SN4000 series): 400GbE, previous generation
- ConnectX-7 400GbE NICs (required for full Spectrum-X capabilities)
- Fully compatible with standard 400GbE transceivers and cables
- UFM and [[NVIDIA-NetQ]] management/observability integration across fabric operations

### Language Bindings / APIs
- NCCL (uses RoCEv2 over Spectrum-X for collective operations)
- UCX over RoCEv2
- Standard Linux RDMA/InfiniBand APIs (ibverbs)
- OpenMPI over RoCEv2

## Connections
- [[NVIDIA-Cumulus-Linux]] — Spectrum switches use Cumulus Linux as a current Ethernet switch OS validated in Spectrum-X RA2.1.
- [[NVIDIA-Network-Operator]] — current Network Operator docs include Spectrum-X NIC configuration for Kubernetes clusters.
- [[NVIDIA-DOCA]] — DOCA 3.3.0 is tested as part of Spectrum-X reference architecture 2.1.
- [[NVIDIA-HPC-X]] — HPC-X 2.26 is tested as part of Spectrum-X RA2.1 and includes Spectrum-X NCCL plugin guidance.
- [[NVIDIA-NetQ]] — NetQ provides network operations visibility for Ethernet fabrics.
- [[NVIDIA-DSX-Air]] — DSX Air supports simulation and validation of Cumulus/Spectrum designs.
- [[NVIDIA-Quantum-InfiniBand]] — Quantum IB is NVIDIA's InfiniBand platform; Spectrum-X is the Ethernet alternative
- [[NVIDIA-ConnectX-InfiniBand]] — ConnectX-7/8 NICs used with Spectrum-X for end-to-end acceleration
- [[NVIDIA-BlueField-DPU]] — BlueField DPU can serve as a SmartNIC alongside Spectrum-X fabric
- [[NCCL]] — NCCL runs over Spectrum-X using RoCEv2 transport
- [[NVIDIA-DGX]] — DGX systems can use Spectrum-X as Ethernet alternative to Quantum InfiniBand

## Resources
- [Spectrum-X Official Page](https://www.nvidia.com/en-us/networking/spectrumx/)
- [Spectrum-X Announcement Blog](https://blogs.nvidia.com/blog/nvidia-spectrum-x-ai-networking/)
- [NVIDIA Networking](https://www.nvidia.com/en-us/networking/)
