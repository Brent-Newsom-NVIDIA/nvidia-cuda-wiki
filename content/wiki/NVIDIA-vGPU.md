# NVIDIA vGPU Software

**Type:** Technology
**Tags:** NVIDIA, vGPU, virtualization, CUDA, virtual desktop, data center
**Related:** [[NVIDIA-CUDA]], [[CUDA-Compatibility]], [[NVIDIA-Data-Center-GPU-Drivers]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-RTX]], [[NVIDIA-MIG]]
**Sources:** https://docs.nvidia.com/cuda/vGPU/index.html, https://docs.nvidia.com/vgpu/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA vGPU Software virtualizes NVIDIA GPU resources for virtual machines and remote workloads. The CUDA vGPU documentation identifies which vGPU releases support CUDA, while the broader vGPU docs cover the virtualization software stack.

## Detail

### Purpose
Organizations use vGPU to deliver GPU acceleration through virtualized infrastructure for AI development, visualization, virtual workstations, and shared compute environments. CUDA support on vGPU matters when those virtual machines need GPU compute rather than only graphics acceleration.

### Key capabilities
- Virtualized NVIDIA GPU access for supported hypervisors and guest environments.
- Release-specific CUDA support matrix.
- Integration with NVIDIA driver branches and licensing.
- Useful for virtual workstations, managed enterprise environments, and shared infrastructure.

### NVIDIA context
vGPU sits near [[NVIDIA-AI-Enterprise]], [[NVIDIA-RTX]], and enterprise data center drivers. It is distinct from [[NVIDIA-MIG]]: vGPU virtualizes GPUs through hypervisor infrastructure, while MIG partitions supported physical GPUs into hardware-isolated instances.

## Connections
- [[CUDA-Compatibility]] - CUDA applications under vGPU still depend on supported driver/toolkit combinations.
- [[NVIDIA-Data-Center-GPU-Drivers]] - driver release branches determine supported CUDA and vGPU behavior.
- [[NVIDIA-AI-Enterprise]] - enterprise GPU software stack can include virtualized GPU environments.
- [[NVIDIA-RTX]] - virtual workstations often target RTX graphics and visualization workloads.
- [[NVIDIA-MIG]] - related but different GPU sharing/isolation technology.

## Source Excerpts
- NVIDIA's CUDA vGPU page documents CUDA support for NVIDIA virtual GPU software releases.

