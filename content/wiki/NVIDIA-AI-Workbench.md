# NVIDIA AI Workbench

**Type:** Platform
**Tags:** NVIDIA, developer tools, IDE, data science, MLOps, Jupyter, containers, local development, project management
**Related:** [[NVIDIA-AI-Enterprise]], [[NGC]], [[NVIDIA-NIM]], [[NVIDIA-NeMo]], [[NVIDIA-DGX-Spark]], [[NVIDIA-DGX-Station]], [[CUDA-Graphs]], [[NVIDIA-Base-Command]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; written from verified knowledge)
**Last Updated:** 2026-04-10

## Summary
NVIDIA AI Workbench is a developer-focused tool for managing, versioning, and running AI and data science projects across local workstations, cloud instances, and remote GPU servers — with seamless environment reproduction via containers. It integrates with Jupyter, VS Code, and popular IDEs, and provides one-click access to NVIDIA NIM microservices and NGC resources, allowing data scientists to develop locally on RTX hardware and deploy to production data center infrastructure without environment inconsistencies. AI Workbench is NVIDIA's answer to the "works on my machine" problem in GPU-accelerated AI development.

## Detail

### Purpose
Data scientists routinely face environment management problems: Python package version conflicts, CUDA/driver incompatibilities, differences between local dev machines and production clusters, and difficulty sharing reproducible project environments with teammates. NVIDIA AI Workbench wraps project environments in containers (based on NGC images) and tracks them with Git, so a project developed on an NVIDIA RTX workstation can be cloned and run identically on a DGX cluster, AWS EC2 instance, or a colleague's laptop — with one command. It reduces "setup time" from hours to minutes for GPU AI projects.

### Key Features
- **Project Management:** Projects are Git repositories with a Workbench manifest (`.workbench/`) defining the container image, mounts, ports, and environment variables — fully reproducible and version-controlled
- **Container-Based Environments:** Each project runs in an NGC-based Docker container; Workbench handles container lifecycle (build, run, stop, rebuild) transparently — no Docker expertise required
- **Multi-Location Compute:** Switch project execution between local workstation, remote SSH server, or cloud GPU instance with a dropdown — same code, same environment, different hardware
- **Integrated Jupyter Lab:** Auto-launches JupyterLab inside the project container; accessible via browser or directly from VS Code
- **VS Code Integration:** VS Code extension for NVIDIA AI Workbench allows editing code in VS Code while it runs in the GPU container
- **NIM Integration:** One-click deployment and testing of NVIDIA NIM microservices from within Workbench; NIM containers pulled from NGC and exposed as local API endpoints
- **NGC Catalog Access:** Browse NGC containers and models from within Workbench; use NGC models as project dependencies
- **System Snapshot:** Capture and share exact environment state (package versions, container layer hash) for experiment reproducibility
- **Secret Management:** Secure handling of API keys and NGC credentials without committing them to Git
- **Port Forwarding:** Automatic port forwarding for running web apps (Gradio, Streamlit, Jupyter) inside containers on remote machines

### Use Cases
- Local development on NVIDIA RTX workstations for LLM fine-tuning, RAG prototyping, and inference testing
- Local Grace Blackwell development on [[NVIDIA-DGX-Spark]] or larger deskside development on [[NVIDIA-DGX-Station]]
- Sharing reproducible AI project environments with team members across different OS/hardware setups
- Testing NIM microservices locally before deploying to production Kubernetes clusters
- Data science teams standardizing development environments across Windows (with WSL2) and Linux
- Onboarding new team members — clone a Workbench project and be running GPU code in minutes
- Bridging dev → production: develop on Workbench locally, push to Base Command Platform for large-scale training

### Hardware Requirements / Compatibility
- **Local GPU:** Any NVIDIA RTX 20-series or newer (Turing, Ampere, Ada Lovelace, Blackwell) for local GPU acceleration; also works without local GPU for CPU-only projects
- **Remote Compute:** SSH-accessible NVIDIA GPU servers (DGX, cloud instances, on-prem servers)
- **Host OS:** Windows 11 (with WSL2), macOS (Apple Silicon — remote GPU compute only), Ubuntu 20.04/22.04
- **Container Runtime:** Docker Desktop (Windows/macOS) or Docker Engine (Linux); NVIDIA Container Toolkit required for GPU access
- **CUDA:** Determined by project container; Workbench selects compatible NGC base image

### Language Bindings / APIs
- **GUI:** Primary interface is a desktop application (Windows/macOS/Linux) with graphical project and environment management
- **CLI:** `nvwb` command-line tool for scripting project creation, cloning, and environment management
- **REST API:** Internal API for VS Code extension and IDE integration

## Connections
- [[NGC]] — Workbench uses NGC as the source for all project base containers and model dependencies
- [[NVIDIA-NIM]] — Workbench has native NIM integration for one-click local NIM deployment and testing
- [[NVIDIA-AI-Enterprise]] — AI Workbench is part of the AI Enterprise platform, available with enterprise support
- [[NVIDIA-Base-Command]] — Workbench serves as the local development companion to Base Command for large-scale cluster training
- [[NVIDIA-NeMo]] — NeMo-based fine-tuning projects can be developed in Workbench and scaled to DGX clusters
- [[NVIDIA-DGX-Spark]] - compact local system for AI Workbench projects and tutorials.
- [[NVIDIA-DGX-Station]] - deskside system for larger local Workbench projects before data center deployment.

## Resources
- [NVIDIA AI Workbench Page](https://www.nvidia.com/en-us/deep-learning-ai/solutions/data-science/workbench/)
- [AI Workbench Documentation](https://docs.nvidia.com/ai-workbench/latest/index.html)
- [AI Workbench Getting Started](https://docs.nvidia.com/ai-workbench/user-guide/latest/overview/introduction.html)
- [Workbench Example Projects on GitHub](https://github.com/NVIDIA/workbench-example-hybrid-rag)
