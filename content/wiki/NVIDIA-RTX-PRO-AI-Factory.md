# NVIDIA RTX PRO AI Factory

**Type:** Reference Architecture
**Tags:** NVIDIA, RTX PRO AI Factory, Enterprise Reference Architecture, RTX PRO 6000 Blackwell, Spectrum-X, BlueField-3, AI Enterprise
**Related:** [[NVIDIA-Enterprise-Reference-Architectures]], [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-RTX-PRO-Server]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-Enterprise-RA-Observability-Guide]], [[NVIDIA-Spectrum-X]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-Certified-Systems]], [[NVIDIA-Certified-Storage]], [[NVIDIA-Run-ai]], [[NVIDIA-vGPU]], [[NVIDIA-Omniverse]], [[NVIDIA-NetQ]]
**Sources:** https://docs.nvidia.com/enterprise-reference-architectures/rtx-pro-ai-factory/latest/index.html, https://docs.nvidia.com/enterprise-reference-architectures/rtx-pro-ai-factory/latest/overview.html, https://docs.nvidia.com/enterprise-reference-architectures/rtx-pro-ai-factory/latest/components.html, https://docs.nvidia.com/enterprise-reference-architectures/rtx-pro-ai-factory/latest/software.html, https://docs.nvidia.com/enterprise-reference-architectures/rtx-pro-ai-factory/latest/nvidia-certified-storage.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA RTX PRO AI Factory is a current NVIDIA Enterprise Reference Architecture for building modular AI factories with NVIDIA RTX PRO Servers. It is based on a 2-8-5-200 infrastructure configuration with two CPUs, eight GPUs, and five 200 Gb/s-class network interfaces, using RTX PRO 6000 Blackwell Server Edition GPUs, BlueField-3 networking, Spectrum-X Ethernet, and NVIDIA AI Enterprise software.

## Detail

### Purpose
The RTX PRO AI Factory pattern targets enterprises that need an air-cooled, power-efficient, NVIDIA-certified platform for agentic AI inference, industrial and physical AI, visual computing, data analytics, scientific simulation, rendering, and video workflows.

### Architecture notes
- Each NVIDIA-Certified RTX PRO Server in the reference design carries eight RTX PRO 6000 Blackwell Server Edition GPUs.
- Scalable Units are four servers, with documented 16-node/128-GPU and 32-node/256-GPU design points.
- The architecture separates compute east-west traffic from north-south customer and storage traffic.
- BlueField-3 SuperNICs and DPUs are used for compute fabric and converged infrastructure roles.
- NVIDIA-Certified Storage guidance allocates storage bandwidth linearly, with about 12.5 Gb/s per GPU as a guideline.

### Software stack
The RA points to NVIDIA Enterprise AI Factory Validated Design software, including [[NVIDIA-AI-Enterprise]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-Omniverse]], [[NVIDIA-Run-ai]], [[NVIDIA-vGPU]], and [[NVIDIA-NetQ]]. Use [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] for the shared software stack across RA hardware choices.

### NVIDIA context
This page is the durable RTX PRO Enterprise RA page. Use [[NVIDIA-RTX-PRO-Server]] for the broader platform/product identity and [[NVIDIA-Enterprise-AI-Factory]] for the strategy-level AI factory concept.

## Connections
- [[NVIDIA-Enterprise-Reference-Architectures]] - program-level Enterprise RA hub.
- [[NVIDIA-Enterprise-AI-Factory]] - strategic AI factory planning context.
- [[NVIDIA-RTX-PRO-Server]] - platform page for RTX PRO server systems.
- [[NVIDIA-Blackwell-Architecture]] - RTX PRO 6000 Blackwell Server Edition is the GPU generation in this RA.
- [[NVIDIA-AI-Enterprise]] - supported software suite for production AI workloads.
- [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] - common software stack for RA deployments.
- [[NVIDIA-Enterprise-RA-Observability-Guide]] - observability pattern for Enterprise RA deployments.
- [[NVIDIA-Spectrum-X]] - Ethernet networking platform used in the AI factory fabric.
- [[NVIDIA-BlueField-DPU]] - north-south infrastructure and security offload role.
- [[NVIDIA-Certified-Systems]] - certification baseline for partner server configurations.
- [[NVIDIA-Certified-Storage]] - storage validation path for end-to-end AI factories.
- [[NVIDIA-Run-ai]] - workload orchestration path in the RA software design.
- [[NVIDIA-vGPU]] - virtualization path that matters for RTX PRO workloads.
- [[NVIDIA-Omniverse]] - industrial and physical AI workload target for RTX PRO AI factories.
- [[NVIDIA-NetQ]] - network visibility and troubleshooting tool in the RA software stack.

## Source Excerpts
- The current docs describe the RTX PRO AI Factory as a practical Enterprise RA based on the 2-8-5-200 pattern with RTX PRO Servers, BlueField-3, and Spectrum-X networking.
- NVIDIA lists agentic AI inference, industrial and physical AI, visual computing, and data analytics/scientific simulation as primary use cases.

## Resources
- [NVIDIA RTX PRO AI Factory](https://docs.nvidia.com/enterprise-reference-architectures/rtx-pro-ai-factory/latest/index.html)
- [RTX PRO AI Factory Overview](https://docs.nvidia.com/enterprise-reference-architectures/rtx-pro-ai-factory/latest/overview.html)
- [RTX PRO AI Factory Software](https://docs.nvidia.com/enterprise-reference-architectures/rtx-pro-ai-factory/latest/software.html)
