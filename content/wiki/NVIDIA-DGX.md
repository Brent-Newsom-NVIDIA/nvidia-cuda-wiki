# NVIDIA DGX Systems

**Type:** Platform
**Tags:** NVIDIA, hardware, HPC, AI supercomputer, DGX, data center, training, infrastructure
**Related:** [[NVIDIA-Base-Command]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-Bright-Cluster-Manager]], [[NVIDIA-BaseOS]], [[NVIDIA-DGX-Cloud]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-Certified-Systems]], [[NVIDIA-Data-Center-CPUs]], [[NVIDIA-Cloud-Accelerator-NCX]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Hopper-Architecture]], [[NVLink]], [[NCCL]], [[NVIDIA-MIG]], [[NVIDIA-GPU-Operator]], [[NVIDIA-AI-Enterprise]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; written from verified knowledge)
**Last Updated:** 2026-04-29

## Summary
NVIDIA DGX systems are purpose-built AI supercomputers and infrastructure platforms integrating NVIDIA's most powerful GPUs, NVLink interconnects, high-bandwidth memory, and software stack into validated, production-ready systems for large-scale AI training and inference. The DGX family spans from single-node workstations (DGX Station) to rack-scale (DGX H100/H200) to hyperscale (DGX SuperPOD), and DGX Cloud — a fully managed cloud service. DGX represents NVIDIA's vertically integrated "AI factory" vision: hardware, interconnect, software, and MLOps stack combined and optimized end-to-end.

## Detail

### Purpose
Training large foundation models (LLMs, multi-modal models, scientific AI) at scale requires not just powerful GPUs, but tightly integrated GPU-to-GPU communication fabric, validated software stacks, and production-grade reliability. Assembling these components independently is complex and time-consuming. DGX systems provide a validated, out-of-the-box AI computing platform where all components (GPUs, NVLink, NVSwitch, InfiniBand, storage, software) are integrated, tested, and supported by NVIDIA — reducing time-to-training and operational risk.

### Key Features

**Current DGX Systems (as of 2025):**
- **DGX H100:** 8× H100 SXM5 (80 GB HBM3) GPUs; 640 GB total GPU memory; 4th-gen NVLink + NVSwitch for all-to-all 900 GB/s GPU bandwidth; 2× ConnectX-7 InfiniBand for multi-node scaling; 10 kW power
- **DGX H200:** 8× H200 SXM5 (141 GB HBM3e) GPUs; 1.1 TB total GPU memory — optimized for LLM inference and large-model training that benefits from bigger memory footprint
- **DGX B200:** 8× Blackwell B200 SXM (192 GB HBM3e) GPUs; NVLink 5 interconnect; 5th-gen NVSwitch; next-generation for FP4 training and inference at Blackwell performance levels
- **GB200 NVL72:** 36-node rack with 72× Blackwell B200 GPUs + 36× Grace CPUs connected via NVLink 5; designed as a single, liquid-cooled AI supercomputer unit with 1.44 TB/s NVLink bandwidth
- **DGX Station A100/H100:** Workstation-class systems for small-team or on-premises development
- **DGX SuperPOD:** Multi-rack clusters of DGX nodes connected via InfiniBand NDR fabric; scales from ~20 to 1000s of nodes; used for pre-training frontier models; "AI data center in a box"
- **DGX Cloud:** NVIDIA-managed DGX infrastructure on Oracle Cloud, Azure, GCP, and AWS; per-node/per-hour rental of full DGX pods; includes NVIDIA AI Enterprise software

**Key System Capabilities:**
- **NVLink/NVSwitch Fabric:** All 8 GPUs in a DGX node are fully connected via NVSwitch, enabling any-to-any GPU communication at line rate — critical for tensor parallelism in LLM training
- **NVIDIA AI Enterprise Bundle:** DGX systems ship with Base Command Manager (cluster OS), NGC access, and AI Enterprise software as standard
- **Validated Storage Integration:** Certified with VAST Data, WekaFS, DDN EXAScaler, and NetApp for high-throughput model checkpoint storage
- **Validated AI factory ecosystem:** DGX deployments connect to [[NVIDIA-Certified-Systems]], [[NVIDIA-Bright-Cluster-Manager]], [[NVIDIA-Data-Center-CPUs]], and [[NVIDIA-Cloud-Accelerator-NCX]] guidance for broader data center infrastructure.

### Use Cases
- Pre-training LLMs and multimodal foundation models at scale (GPT-4 class, Llama family, Nemotron)
- Large-scale scientific AI: climate modeling, molecular dynamics, drug discovery simulation
- High-throughput LLM inference serving at enterprise scale using DGX H200 or GB200 NVL72
- AI research labs requiring dense GPU compute without public cloud cost/latency concerns
- Enterprise "AI factory" deployment: dedicated on-premises AI infrastructure under DGX SuperPOD architecture
- Edge-to-cloud AI development: DGX Station for local development, DGX SuperPOD for production training

### Hardware Requirements / Compatibility
- **DGX H100:** 2× Intel Xeon Platinum CPUs; 2 TB DDR5 RAM; 30 TB NVMe SSD; Ubuntu 22.04 + DGX OS
- **DGX B200:** 2× Intel Xeon (or ARM Grace) CPUs; HBM3e GPU memory; NVLink 5 + NVSwitch 4
- **Power:** 10–14.3 kW per DGX node; requires 3-phase power; liquid cooling optional/required for B200 class
- **Networking:** 8× ConnectX-7 (400 Gb/s InfiniBand NDR or 400GbE) network cards per node for inter-node scaling
- **OS:** DGX OS (Ubuntu-based, customized); Base Command Manager as Kubernetes cluster OS for SuperPOD

### Language Bindings / APIs
- DGX is a hardware platform; software APIs are those of the installed frameworks:
  - **CUDA, cuDNN, NCCL** — GPU programming and communication
  - **NGC CLI** — container and model management
  - **Base Command CLI** (`ngc bc`) — job scheduling and cluster management
  - **DCGM REST API** — GPU health and telemetry

## Connections
- [[NVIDIA-Base-Command]] — Base Command Platform is the MLOps software layer for DGX SuperPOD and DGX Cloud
- [[NVIDIA-Base-Command-Manager]] — Base Command Manager handles cluster management and infrastructure operations for AI data centers
- [[NVIDIA-Bright-Cluster-Manager]] — Bright Cluster Manager is the HPC/AI cluster-management lineage adjacent to Base Command Manager
- [[NVIDIA-BaseOS]] — BaseOS/DGX OS provides the validated operating system layer for DGX deployments
- [[NVIDIA-DGX-Cloud]] — cloud-accessible counterpart to on-prem DGX infrastructure
- [[NVIDIA-DGX-SuperPOD]] — scale-out DGX cluster architecture for AI factories and large training runs
- [[NVIDIA-Certified-Systems]] — certified partner systems extend validated NVIDIA infrastructure beyond DGX-branded platforms
- [[NVIDIA-Data-Center-CPUs]] — NVIDIA data center CPUs pair Grace with GPU systems in GH200, GB200, and rack-scale AI factory designs
- [[NVIDIA-Cloud-Accelerator-NCX]] — NCX describes cloud partner accelerator infrastructure for NVIDIA AI workloads
- [[NVIDIA-Blackwell-Architecture]] — DGX B200 and GB200 NVL72 are the flagship DGX systems for Blackwell architecture
- [[NVIDIA-Hopper-Architecture]] — DGX H100 and H200 are the Hopper-generation DGX systems
- [[NVLink]] — NVLink/NVSwitch fabric is the defining interconnect technology within every DGX node
- [[NCCL]] — NCCL handles GPU-to-GPU communication for distributed training across DGX nodes
- [[NVIDIA-MIG]] — partitions supported DGX GPUs for isolated multi-tenant workloads
- [[NVIDIA-GPU-Operator]] — GPU Operator provisions Kubernetes on DGX SuperPOD nodes
- [[NVIDIA-AI-Enterprise]] — AI Enterprise software included with DGX systems for production AI workloads

## Resources
- [DGX Systems Overview](https://www.nvidia.com/en-us/data-center/dgx-systems/)
- [DGX H100 Specifications](https://www.nvidia.com/en-us/data-center/dgx-h100/)
- [DGX B200 Overview](https://www.nvidia.com/en-us/data-center/dgx-b200/)
- [GB200 NVL72](https://www.nvidia.com/en-us/data-center/gb200-nvl72/)
- [DGX SuperPOD](https://www.nvidia.com/en-us/data-center/dgx-superpod/)
- [DGX Cloud](https://www.nvidia.com/en-us/gpu-cloud/)
