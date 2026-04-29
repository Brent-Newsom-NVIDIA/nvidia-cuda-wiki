# NVIDIA DOCA Platform Framework

**Type:** Framework
**Tags:** NVIDIA, DOCA Platform Framework, DPF, BlueField, DPU, Kubernetes, cloud infrastructure, services, orchestration
**Related:** [[NVIDIA-DOCA]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-NCX-Infra-Controller]], [[NVIDIA-Network-Operator]], [[NVIDIA-Cloud-Accelerator-NCX]]
**Sources:** https://docs.nvidia.com/ncx/index.html; https://github.com/NVIDIA/doca-platform
**Last Updated:** 2026-04-29

## Summary
NVIDIA DOCA Platform Framework (DPF) is an orchestration system for provisioning and operating BlueField-accelerated infrastructure services in cloud environments. NCX describes DPF as a way to build, deploy, and operate BlueField-accelerated infrastructure services for secure, multi-tenant cloud infrastructure. The public NVIDIA repository describes DPF as a system that provisions and orchestrates NVIDIA BlueField DPUs through Kubernetes APIs.

## Detail
DPF sits above [[NVIDIA-DOCA]] and [[NVIDIA-BlueField-DPU]] in the software stack. DOCA provides the underlying SDK, drivers, runtime, and services; DPF provides Kubernetes-facing orchestration for DPU provisioning and DPU service lifecycle.

The public DPF README lists three key features: Kubernetes integration for DPU provisioning and management, DPU service orchestration, and cluster management for DPUs in Kubernetes clusters. Hardware support currently calls out dual-port BlueField-3 DPUs. The same README notes that BlueField DPUs run Linux on arm64 CPUs and DOCA software components.

## Connections
- [[NVIDIA-DOCA]] - DPF orchestrates infrastructure services built on the DOCA software stack.
- [[NVIDIA-BlueField-DPU]] - DPF provisions and manages BlueField DPUs in cloud environments.
- [[NVIDIA-NCX-Infra-Controller]] - both are NCX infrastructure components for secure multi-tenant GPU cloud operations.
- [[NVIDIA-Network-Operator]] - Network Operator and DPF both expose NVIDIA networking/DPU resources through Kubernetes patterns.
- [[NVIDIA-Cloud-Accelerator-NCX]] - NCX lists DPF as a component for BlueField-accelerated cloud infrastructure.

## Source Excerpts
- "provisions and orchestrates NVIDIA BlueField DPUs in cloud environments"
- "DPU Service Orchestration"
