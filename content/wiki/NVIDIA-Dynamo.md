# NVIDIA Dynamo

**Type:** Platform
**Tags:** NVIDIA, Dynamo, inference, LLM serving, Kubernetes, NIM, disaggregated serving
**Related:** [[NVIDIA-NIM]], [[NVIDIA-Grove]], [[KAI-Scheduler]], [[TensorRT-LLM]], [[Triton-Inference-Server]], [[NIXL]], [[NVIDIA-NeMo]], [[NVIDIA-DGX]]
**Sources:** https://docs.nvidia.com/dynamo/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Dynamo is NVIDIA's inference-serving platform documentation for running and deploying high-performance AI inference services locally or on Kubernetes. It is closely connected to the modern NVIDIA inference stack around [[NVIDIA-NIM]], [[TensorRT-LLM]], [[Triton-Inference-Server]], and disaggregated serving components such as [[NIXL]].

## Detail

### Purpose
AI factories need inference services that can scale beyond a single process or single deployment pattern. Dynamo provides a documented path for running inference infrastructure through CLI-based local/VM setup and Kubernetes deployment guides.

### Key capabilities
- Local or VM quickstart through the Dynamo CLI.
- Container-based install path with dependencies packaged into images.
- Kubernetes installation and quickstart path for cluster deployments.
- Designed to fit NVIDIA inference runtimes and model-serving workflows.
- Relevant to large language model serving, disaggregation, and operational deployment.
- Kubernetes multinode deployments can use [[NVIDIA-Grove]] and [[KAI-Scheduler]] for topology-aware pod placement, gang scheduling, and coordinated scaling.

### NVIDIA context
Dynamo is part of NVIDIA's fast-moving inference layer, bridging model-serving systems and AI factory operations. It should be tracked alongside [[NVIDIA-NIM]], [[NIXL]], [[TensorRT-LLM]], and [[Triton-Inference-Server]] for current production inference architecture.

## Connections
- [[NVIDIA-NIM]] - Dynamo complements NIM-based model deployment and serving.
- [[NVIDIA-Grove]] - Grove provides declarative Kubernetes orchestration for multi-component Dynamo inference systems.
- [[KAI-Scheduler]] - KAI handles topology-aware and gang-scheduled placement for Grove/Dynamo deployments.
- [[NIXL]] - disaggregated inference uses high-throughput transfer for KV cache and tensor movement.
- [[TensorRT-LLM]] - optimized LLM engine commonly associated with NVIDIA inference serving.
- [[Triton-Inference-Server]] - established NVIDIA inference server used across model modalities.
- [[NVIDIA-DGX]] - representative infrastructure for large inference deployments.

## Source Excerpts
- NVIDIA Dynamo docs include a local/VM quickstart and point to Kubernetes deployment guidance.
