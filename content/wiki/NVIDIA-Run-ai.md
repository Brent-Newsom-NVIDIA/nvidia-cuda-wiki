# NVIDIA Run:ai

**Type:** Platform
**Tags:** NVIDIA, Run:ai, GPU orchestration, workload orchestration, Kubernetes, AI Enterprise, MLOps, AI factory
**Related:** [[NVIDIA-AI-Enterprise]], [[NVIDIA-Enterprise-Reference-Architectures]], [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-RTX-PRO-AI-Factory]], [[NVIDIA-HGX-AI-Factory]], [[NVIDIA-NVL72-AI-Factory]], [[NVIDIA-Mission-Control]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-GPU-Operator]], [[KAI-Scheduler]], [[NVIDIA-Grove]]
**Sources:** https://docs.nvidia.com/run-ai/; https://docs.nvidia.com/run-ai/self-hosted/index.html; https://www.nvidia.com/en-us/software/run-ai/; https://docs.nvidia.com/mission-control/docs/systems-quick-start-guide/2.3.0/overview-runai.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Run:ai is NVIDIA's AI workload and GPU orchestration platform for running AI workloads across the AI lifecycle. It manages GPU allocation, workload scheduling, policy, quota, governance, monitoring, and user/API workflows across hybrid infrastructure, with SaaS and self-hosted deployment paths. In current NVIDIA docs, Run:ai is part of the AI factory operations stack, appears in [[NVIDIA-AI-Enterprise]] guidance, and is integrated into [[NVIDIA-Mission-Control]] workflows for Kubernetes-native AI workload orchestration.

## Detail
The current NVIDIA Run:ai docs split users into SaaS and self-hosted product paths. SaaS is NVIDIA's fully managed cloud-hosted platform, while self-hosted is for on-premises and private cloud deployments aligned to cluster release cycles.

Self-hosted docs cover install, setup, monitoring, organizations and resources, model building/training/deployment, APIs, workload assets, permissions, policies, health/performance monitoring, telemetry, and the Run:ai Scheduler. This makes Run:ai the canonical page for questions about NVIDIA-managed AI workload submission, quota, teams/projects, policy-driven GPU access, and multi-tenant workload operations.

Run:ai also anchors open-source scheduling work. NVIDIA's product page links KAI Scheduler and Grove as open-source Run:ai ecosystem components: [[KAI-Scheduler]] for Kubernetes scheduling and [[NVIDIA-Grove]] for topology-optimized inference serving on Kubernetes. The same page mentions Run:ai Model Streamer as a model-loading acceleration feature, but this batch keeps it consolidated here until a separate current docs surface warrants its own page.

## Connections
- [[NVIDIA-AI-Enterprise]] - current AI Enterprise docs include self-hosted Run:ai in the enterprise software portfolio.
- [[NVIDIA-Enterprise-Reference-Architectures]] - current Enterprise RAs list Run:ai as part of the AI factory software stack.
- [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] - software RA positions Kubernetes as the orchestration base beneath AI Enterprise workloads.
- [[NVIDIA-RTX-PRO-AI-Factory]], [[NVIDIA-HGX-AI-Factory]], and [[NVIDIA-NVL72-AI-Factory]] - hardware RA pages that include Run:ai in the software context.
- [[NVIDIA-Mission-Control]] - Mission Control uses Run:ai as the Kubernetes AI workload orchestration layer.
- [[NVIDIA-Base-Command-Manager]] - Mission Control guidance installs/coordinates Run:ai through BCM-managed flows.
- [[NVIDIA-DGX-SuperPOD]] - Run:ai is used to schedule AI workloads into DGX clusters.
- [[NVIDIA-GPU-Operator]] - GPU Operator provides the Kubernetes GPU plumbing beneath Run:ai workloads.
- [[KAI-Scheduler]] - open-source scheduler based on NVIDIA Run:ai scheduling work.
- [[NVIDIA-Grove]] - Run:ai ecosystem component for multi-component inference orchestration.

## Source Excerpts
- "NVIDIA Run:ai accelerates AI operations with dynamic orchestration across the AI lifecycle."
- "For on-premise and private cloud deployments."
