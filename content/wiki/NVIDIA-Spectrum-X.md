# NVIDIA Spectrum-X

**Type:** Technology
**Tags:** NVIDIA, Spectrum-X, Ethernet, AI Networking, RoCE, Lossless Ethernet, HPC Networking
**Related:** [[NVIDIA-Cumulus-Linux]], [[NVIDIA-Network-Operator]], [[NVIDIA-DOCA]], [[NVIDIA-DOCA-OFED]], [[DOCA-Flow]], [[DOCA-PCC]], [[DOCA-Telemetry-Service]], [[OVS-DOCA]], [[NVIDIA-MLNX-EN]], [[NVIDIA-HPC-X]], [[NVIDIA-NetQ]], [[NVIDIA-DSX-Air]], [[NVIDIA-STX]], [[NVIDIA-CMX]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-Silicon-Photonics]], [[NVIDIA-Quantum-InfiniBand]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-ConnectX-9]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-BlueField-4]], [[NCCL]], [[NVIDIA-DGX]]
**Sources:** NVIDIA official documentation, https://docs.nvidia.com/doca/sdk/index.html, https://docs.nvidia.com/networking-ethernet-software/cumulus-linux/Whats-New/, https://docs.nvidia.com/networking/display/kubernetes2610/nic-conf-operator/spectrum-x-configuration.html, https://docs.nvidia.com/networking/display/hpcxv226, https://www.nvidia.com/en-us/data-center/ai-data-platform/, https://www.nvidia.com/en-us/data-center/ai-storage/stx/, https://www.nvidia.com/en-us/data-center/ai-storage/cmx/, https://www.nvidia.com/en-us/networking/silicon-photonics/
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
- Host-side Spectrum-X Ethernet/RoCE configuration sits on current [[NVIDIA-DOCA-OFED]] and legacy [[NVIDIA-MLNX-EN]] concepts.
- [[DOCA-Flow]] and [[DOCA-PCC]] are adjacent DOCA programming concepts for packet steering and programmable congestion behavior.
- Current AI data/storage pages tie Spectrum-X to [[NVIDIA-AI-Data-Platform]], [[NVIDIA-STX]], and [[NVIDIA-CMX]] as the Ethernet fabric for accelerated enterprise storage and context-memory access
- Current silicon photonics material connects Spectrum-X-class Ethernet to optical networking for future AI factory fabrics

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
- [[NVIDIA-DOCA-OFED]] — current host-driver stack for Ethernet/RoCE networking in modern Spectrum-X deployments.
- [[DOCA-Flow]] — packet-processing and flow steering layer relevant to Ethernet AI networking.
- [[DOCA-PCC]] — programmable congestion-control API for Ethernet/RoCE fabrics.
- [[DOCA-Telemetry-Service]] — DPU/network telemetry service for observability across Ethernet AI fabrics.
- [[OVS-DOCA]] — Open vSwitch datapath offload path for virtualized Ethernet environments on NVIDIA NICs/DPUs.
- [[NVIDIA-MLNX-EN]] — legacy Ethernet/RoCE host package for older Spectrum Ethernet runbooks.
- [[NVIDIA-HPC-X]] — HPC-X 2.26 is tested as part of Spectrum-X RA2.1 and includes Spectrum-X NCCL plugin guidance.
- [[NVIDIA-NetQ]] — NetQ provides network operations visibility for Ethernet fabrics.
- [[NVIDIA-DSX-Air]] — DSX Air supports simulation and validation of Cumulus/Spectrum designs.
- [[NVIDIA-STX]] — STX uses Spectrum-X Ethernet in AI-native storage and data platform reference architecture.
- [[NVIDIA-CMX]] — CMX uses Spectrum-X for low-latency RDMA access to context memory and KV cache.
- [[NVIDIA-AI-Data-Platform]] — AI Data Platform references Spectrum-X for accelerated storage and retrieval workflows.
- [[NVIDIA-Silicon-Photonics]] — optical networking direction that complements next-generation Spectrum-X AI fabrics.
- [[NVIDIA-Quantum-InfiniBand]] — Quantum IB is NVIDIA's InfiniBand platform; Spectrum-X is the Ethernet alternative
- [[NVIDIA-ConnectX-InfiniBand]] — ConnectX-7/8 NICs used with Spectrum-X for end-to-end acceleration
- [[NVIDIA-ConnectX-9]] — next-generation SuperNIC direction for 1.6 Tb/s-class AI networking.
- [[NVIDIA-BlueField-DPU]] — BlueField DPU can serve as a SmartNIC alongside Spectrum-X fabric
- [[NVIDIA-BlueField-4]] — next-generation DPU direction for AI data and storage acceleration.
- [[NCCL]] — NCCL runs over Spectrum-X using RoCEv2 transport
- [[NVIDIA-DGX]] — DGX systems can use Spectrum-X as Ethernet alternative to Quantum InfiniBand

## Resources
- [Spectrum-X Official Page](https://www.nvidia.com/en-us/networking/spectrumx/)
- [Spectrum-X Announcement Blog](https://blogs.nvidia.com/blog/nvidia-spectrum-x-ai-networking/)
- [NVIDIA Networking](https://www.nvidia.com/en-us/networking/)
