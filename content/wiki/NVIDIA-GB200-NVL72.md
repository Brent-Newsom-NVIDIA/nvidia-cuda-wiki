# NVIDIA GB200 NVL72

**Type:** Platform
**Tags:** NVIDIA, GPU, Hardware, NVLink, Blackwell, Data Center, Rack-Scale, HPC, AI
**Related:** [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-GB300-NVL72]], [[NVIDIA-DGX-B300]], [[NVLink]], [[NVIDIA-DGX]], [[NCCL]], [[NVIDIA-Grace-CPU]], [[NVIDIA-Hopper-Architecture]], [[TensorRT-LLM]], [[Megatron-LM]]
**Sources:** NVIDIA official product page (live fetch 2026-04-10; updated from https://www.nvidia.com/en-us/data-center/gb300-nvl72/)
**Last Updated:** 2026-04-29

## Summary
The NVIDIA GB200 NVL72 is a rack-scale, liquid-cooled AI supercomputer housing 72 Blackwell GPUs and 36 Grace CPUs connected via fifth-generation NVLink. It delivers 1,440 PFLOPS of FP4 AI performance and is designed for trillion-parameter LLM training and inference at exascale. It claims 30x faster LLM inference and 25x better energy efficiency vs. the H100 generation.

## Detail

### Purpose
Provides rack-scale, all-to-all GPU connectivity for workloads that exceed what a single-node multi-GPU server can handle — primarily trillion-parameter model training, large-scale inference, and HPC simulations.

### Key Specifications
- **GPU count:** 72 NVIDIA Blackwell Tensor Core GPUs
- **CPU count:** 36 NVIDIA Grace CPUs (Arm Neoverse V2)
- **GPU memory:** 13.4 TB HBM3E total (372 GB per Grace Blackwell Superchip)
- **GPU memory bandwidth:** 576 TB/s total
- **CPU memory:** 17 TB LPDDR5X @ 14 TB/s
- **NVLink bandwidth:** 130 TB/s (5th-gen NVLink)
- **Form factor:** Rack-scale, liquid-cooled
- **Interconnect:** NVLink-C2C (Grace CPU ↔ Blackwell GPU), NVLink Switch fabric (all 72 GPUs)

### Performance (Sparse / Dense)
| Precision | Performance |
|---|---|
| NVFP4 | 1,440 PFLOPS / 720 PFLOPS |
| FP8 / FP6 | 720 PFLOPS / 360 PFLOPS |
| INT8 | 720 POPS / 360 POPS |
| FP16 / BF16 | 360 PFLOPS / 180 PFLOPS |
| FP32 | 5,760 TFLOPS |
| FP64 | 2,880 TFLOPS |

### Key Features
- Second-generation Transformer Engine with FP4 precision support
- NVLink-C2C interconnect: 900 GB/s CPU-to-GPU bandwidth per Superchip
- 130 TB/s low-latency all-to-all GPU communication fabric
- Dedicated decompression engines for database and data processing workloads
- Liquid cooling for extreme power density

### Performance Claims vs. H100
- **30x faster** real-time trillion-parameter LLM inference
- **4x faster** LLM training at scale
- **25x better energy efficiency** vs. H100 air-cooled infrastructure
- **18x faster** database queries vs. CPU

### Use Cases
- Trillion-parameter LLM training (GPT-4 scale and beyond)
- Real-time trillion-parameter LLM inference
- Mixture-of-Experts (MoE) model training and serving
- High-performance computing (HPC) and simulation
- Large-scale data analytics

### Target Customers
Cloud service providers, hyperscalers, national labs, and enterprises running frontier AI models.

### Hardware Requirements
- Requires liquid cooling infrastructure
- Rack-scale deployment (full rack)
- NVIDIA NVLink Switch System

## Connections
- [[NVIDIA-Blackwell-Architecture]] — built entirely on Blackwell B200 GPUs
- [[NVIDIA-GB300-NVL72]] — Blackwell Ultra successor rack-scale NVL72 system.
- [[NVIDIA-DGX-B300]] — current DGX Blackwell Ultra system direction.
- [[NVLink]] — 5th-gen NVLink provides the 130 TB/s all-to-all fabric
- [[NVIDIA-Grace-CPU]] — 36 Grace CPUs paired via NVLink-C2C
- [[NVIDIA-DGX]] — DGX GB200 is the branded version of this platform
- [[TensorRT-LLM]] — primary inference software stack for this hardware
- [[Megatron-LM]] — primary training framework for trillion-parameter models
- [[NCCL]] — collective communications library used across the 72 GPUs
- [[NVIDIA-Hopper-Architecture]] — predecessor architecture (H100/H200)

## Resources
- [Official Product Page](https://www.nvidia.com/en-us/data-center/gb200-nvl72/)
- [DGX GB200 System](https://www.nvidia.com/en-us/data-center/dgx-gb200/)
- [Blackwell Architecture Overview](https://www.nvidia.com/en-us/data-center/technologies/blackwell-architecture/)
