# NVIDIA CMX

**Type:** Platform
**Tags:** NVIDIA, CMX, context memory storage, KV cache, long-context inference, BlueField-4, DOCA, Spectrum-X, Dynamo
**Related:** [[NVIDIA-STX]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-Dynamo]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-DOCA]], [[NVIDIA-Spectrum-X]], [[NVIDIA-NIM]]
**Sources:** https://www.nvidia.com/en-us/data-center/ai-storage/cmx/, https://www.nvidia.com/en-us/data-center/ai-storage/stx/
**Last Updated:** 2026-04-29

## Summary
NVIDIA CMX is NVIDIA's context memory storage platform for long-context, multi-turn, and agentic AI inference. It uses BlueField-4, DOCA, Spectrum-X Ethernet, and Dynamo-oriented serving concepts to add a pod-level context tier for ephemeral key-value cache and context sharing across rack-scale inference systems.

## Detail

### Purpose
Long-context and multi-agent inference can stall GPUs when systems repeatedly recompute or move large key-value cache state through general-purpose storage paths. CMX introduces an AI-native context tier that extends GPU capacity, stores reusable KV cache, and gives inference systems a high-bandwidth path for shared context.

### Core components
- BlueField-4-class storage processors for NVMe management, storage services, data integrity, encryption, and infrastructure offload.
- DOCA Memos, described by NVIDIA as a CMX-optimized SDK for managing and sharing KV cache through simple key-value APIs.
- [[NVIDIA-Spectrum-X]] Ethernet for low-latency, high-bandwidth RDMA access to context memory across the pod.
- [[NVIDIA-Dynamo]] integration so serving can route requests with awareness of where relevant KV cache already resides.

### Benefits
CMX is positioned to reclaim data center power from traditional storage, improve GPU utilization, reduce stalls, enable pod-wide KV-cache sharing, extend context capacity, reduce time to first token, and increase tokens per second for multi-turn agentic inference.

### NVIDIA context
CMX is the context-memory building block inside [[NVIDIA-STX]] and [[NVIDIA-AI-Data-Platform]] direction. It connects storage, networking, and inference serving, making it relevant to [[NVIDIA-Dynamo]], [[NVIDIA-NIM]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-DOCA]], and [[NVIDIA-Spectrum-X]].

## Connections
- [[NVIDIA-STX]] - STX is the broader modular AI storage reference architecture that includes CMX context memory.
- [[NVIDIA-AI-Data-Platform]] - AI Data Platform uses storage and context infrastructure such as CMX to support agentic workloads.
- [[NVIDIA-Dynamo]] - Dynamo is the serving layer NVIDIA describes as making CMX context storage usable across the pod.
- [[NVIDIA-BlueField-DPU]] - BlueField provides storage, networking, integrity, encryption, and offload capabilities.
- [[NVIDIA-DOCA]] - DOCA and DOCA Memos provide the software surface for BlueField-accelerated context memory.
- [[NVIDIA-Spectrum-X]] - Ethernet fabric for low-latency RDMA access to context storage.
- [[NVIDIA-NIM]] - NIM inference workloads can benefit from faster context and KV-cache handling in large deployments.

## Source Excerpts
- NVIDIA's CMX page describes a BlueField-4-powered context memory tier for long-context, multi-turn, and agentic inference.
- The CMX page connects BlueField-4, DOCA Memos, Spectrum-X Ethernet, and Dynamo as the co-designed storage, networking, and serving stack.

## Resources
- [NVIDIA CMX Context Memory Storage Platform](https://www.nvidia.com/en-us/data-center/ai-storage/cmx/)
