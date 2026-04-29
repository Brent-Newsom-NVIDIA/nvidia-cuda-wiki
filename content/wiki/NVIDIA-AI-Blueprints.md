# NVIDIA AI Blueprints

**Type:** Platform
**Tags:** NVIDIA, AI blueprints, reference workflows, NIM, NeMo, agents, build.nvidia
**Related:** [[NVIDIA-NIM]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-Data-Flywheel-Blueprint]], [[NeMo-Platform]], [[Nemotron]], [[NVIDIA-Brev]]
**Sources:** https://build.nvidia.com/blueprints, https://build.nvidia.com/nvidia/aiq/blueprintcard, https://build.nvidia.com/nvidia/build-an-enterprise-data-flywheel/modelcard
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI Blueprints are NVIDIA-published reference workflows, code paths, and deployment patterns for building AI applications on NIM, NeMo, Nemotron, and the broader NVIDIA AI software stack. The build.nvidia.com blueprint catalog should be used as a discovery and current-state source, not as a reason to create a separate wiki page for every listed build or partner example.

## Detail

### Purpose
Blueprints give developers starting points for production-oriented AI applications. They commonly combine NVIDIA model endpoints or downloadable NIMs with orchestration code, deployment instructions, optional Helm or Docker paths, and guidance for connecting enterprise data or domain workflows.

### Current scope
- Agent workflows such as [[NVIDIA-AI-Q-Blueprint]] for enterprise research and deep research.
- Continuous model and agent optimization workflows such as [[NVIDIA-Data-Flywheel-Blueprint]].
- Domain application examples across voice agents, healthcare agents, retail assistants, telecom, warehouse operations, financial data, and physical AI data search.
- Deployment paths that can include build.nvidia.com endpoints, [[NVIDIA-Brev]] cloud environments, NGC artifacts, Docker Compose, or Kubernetes/Helm depending on the blueprint.

### NVIDIA context
Blueprints sit between NVIDIA developer samples and enterprise production platforms. They show how [[NVIDIA-NIM]], [[NeMo-Platform]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[NeMo-Retriever]], [[Nemotron]], and [[NVIDIA-AI-Enterprise]] fit together in real application patterns.

### Wiki curation guidance
Do not create one wiki page per blueprint listing. Create a page only when a blueprint is a durable NVIDIA-authored topic with its own stable docs, architecture, or ecosystem significance. Smaller or duplicate examples should be folded into the canonical topic page, such as [[Nemotron]], [[NVIDIA-Riva]], [[NVIDIA-Cosmos]], [[NeMo-Retriever]], or [[NVIDIA-AI-Q-Blueprint]].

## Connections
- [[NVIDIA-NIM]] - many blueprints rely on hosted or downloadable NIM model endpoints.
- [[NVIDIA-AI-Enterprise]] - enterprise blueprints map to NVIDIA-supported production AI software.
- [[NVIDIA-AI-Q-Blueprint]] - durable AI Blueprint for enterprise research agents.
- [[NVIDIA-Data-Flywheel-Blueprint]] - durable AI Blueprint for continuous agent and model optimization.
- [[NeMo-Platform]] - blueprints often use NeMo microservices for customization, evaluation, retrieval, and inference.
- [[Nemotron]] - current blueprints use Nemotron models for reasoning, speech, and agentic workflows.
- [[NVIDIA-Brev]] - some blueprints expose launchable cloud development paths through Brev.

## Source Excerpts
- build.nvidia.com lists NVIDIA and partner blueprints for AI applications, with tags for launchability, enterprise use, NIM, NeMo, Nemotron, and domain categories.
- The AI-Q and Data Flywheel blueprint cards show how durable blueprints can become canonical wiki pages when they have stable NVIDIA-authored architecture and deployment surfaces.

## Resources
- [Build NVIDIA Blueprints](https://build.nvidia.com/blueprints)
