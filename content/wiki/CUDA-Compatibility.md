# CUDA Compatibility

**Type:** Concept
**Tags:** NVIDIA, CUDA, compatibility, drivers, deployment, data center
**Related:** [[NVIDIA-CUDA]], [[NVIDIA-Data-Center-GPU-Drivers]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-DGX]], [[NVIDIA-Container-Toolkit]], [[NVIDIA-GPU-Operator]]
**Sources:** https://docs.nvidia.com/deploy/cuda-compatibility/index.html
**Last Updated:** 2026-04-29

## Summary
CUDA Compatibility defines how CUDA applications and toolkit components run across NVIDIA driver versions. It matters most in enterprise, data center, and managed cluster environments where application/toolkit upgrades and driver qualification schedules do not always move at the same pace.

## Detail

### Compatibility modes
- **Minor Version Compatibility:** CUDA 11 and later allow applications within a major CUDA release family to run on sufficiently new drivers, with documented limits.
- **Forward Compatibility:** CUDA compatibility packages allow some newer toolkit-built applications to run on older supported base drivers.
- **Driver/toolkit planning:** Compatibility guidance helps platform owners decide when a driver update is mandatory versus when a toolkit or container update can proceed independently.

### NVIDIA context
CUDA Compatibility is critical for [[NVIDIA-DGX]], Kubernetes GPU clusters, [[NVIDIA-AI-Enterprise]], and containerized workflows using [[NVIDIA-Container-Toolkit]] or [[NVIDIA-GPU-Operator]]. It reduces operational friction while preserving known constraints around driver features, GPUs, and supported platforms.

## Connections
- [[NVIDIA-Data-Center-GPU-Drivers]] - driver release branches determine which CUDA toolkits are supported.
- [[NVIDIA-Container-Toolkit]] - containers rely on the host driver, making compatibility planning essential.
- [[NVIDIA-GPU-Operator]] - automates driver stack deployment in Kubernetes environments.
- [[NVIDIA-AI-Enterprise]] - enterprise validated stacks depend on CUDA, driver, and container compatibility.
- [[NVIDIA-DGX]] - DGX OS/BaseOS releases include validated CUDA and driver combinations.

## Source Excerpts
- NVIDIA CUDA Compatibility docs cover minor-version and forward-compatibility behavior for CUDA applications and drivers.

