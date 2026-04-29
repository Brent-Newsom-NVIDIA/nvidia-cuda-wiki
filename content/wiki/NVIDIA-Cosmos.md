# NVIDIA Cosmos

**Type:** Platform
**Tags:** NVIDIA, World Foundation Model, WFM, Generative AI, Physical AI, Robotics, Autonomous Vehicles, Video Generation
**Related:** [[NVIDIA-Omniverse]], [[NVIDIA-Cosmos-Curator-LHA]], [[NVIDIA-Isaac]], [[NVIDIA-Isaac-Sim]], [[NVIDIA-Isaac-Lab]], [[NVIDIA-Isaac-GR00T]], [[NVIDIA-Drive-Platform]], [[NVIDIA-NeMo]], [[NVIDIA-NIM]]
**Sources:** NVIDIA official documentation; https://docs.nvidia.com/cosmos/curator/latest/lha/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Cosmos is a world foundation model (WFM) platform designed to accelerate the development of physical AI systems such as robots and autonomous vehicles. It provides a suite of pre-trained generative world models capable of synthesizing photorealistic, physically plausible video from text, images, or sensor inputs, enabling developers to generate massive amounts of synthetic training data and test AI systems in virtual worlds. Cosmos was announced at CES 2025 and is available under an open model license.

## Detail

### Purpose
Training physical AI systems (robots, self-driving cars, drones) requires vast amounts of real-world data — which is expensive, dangerous, or impossible to collect at scale. Cosmos solves this by generating synthetic, physically consistent video data that can augment or replace real-world data collection. It also enables simulation-to-reality transfer by creating realistic virtual environments for policy training and evaluation.

### Key Features
- World foundation models: Cosmos-1.0 family including video-to-world and text-to-world diffusion and autoregressive transformer models
- Cosmos Tokenizer: high-compression discrete and continuous video/image tokenizers for efficient video generation
- Cosmos Transfer: conditioned video generation from input signals (optical flow, depth, segmentation masks) for simulation-to-real transfer
- Cosmos Curator/LHA: [[NVIDIA-Cosmos-Curator-LHA]] documentation covers video understanding and curation workflows for large-scale physical AI datasets.
- Cosmos Predict: video prediction models for generating future frames from current observations
- Physical realism: models trained to respect physics, object permanence, and scene continuity
- Open model weights available under NVIDIA Open Model License
- Integration with NVIDIA Omniverse and [[NVIDIA-Isaac-Sim]] for synthetic data and physical AI simulation pipelines
- High-resolution video generation (up to 1080p)

### Use Cases
- Synthetic training data generation for robotics and AV perception models
- Simulation-to-real (sim2real) transfer for robot policy learning
- Autonomous vehicle sensor simulation (cameras, lidar projections)
- Scenario generation for edge-case testing in AV development
- World model-based reinforcement learning for robot manipulation
- Digital twin video synthesis for industrial AI

### Hardware Requirements / Compatibility
- H100 / B200 GPUs recommended for training and fine-tuning
- A100 80GB minimum for inference on largest models
- Available as NIM containers for optimized inference
- Integrates with NVIDIA DGX SuperPOD for large-scale synthetic data generation

### Language Bindings / APIs
- Python (Cosmos SDK, Hugging Face Transformers)
- NVIDIA NIM REST API
- Omniverse Replicator integration for synthetic data pipelines
- Available on Hugging Face Hub (nvidia/Cosmos-*)

## Connections
- [[NVIDIA-Omniverse]] — Cosmos integrates with Omniverse Replicator for synthetic data pipelines
- [[NVIDIA-Cosmos-Curator-LHA]] — Curator/LHA provides large-scale video analysis and curation workflows adjacent to Cosmos world models
- [[NVIDIA-Isaac]] — umbrella robotics platform that consumes Cosmos-generated physical AI data
- [[NVIDIA-Isaac-Sim]] — simulation environment that can combine 3D scenes with Cosmos-driven synthetic data workflows
- [[NVIDIA-Isaac-Lab]] — robot-learning framework that can train policies using synthetic and simulated data
- [[NVIDIA-Isaac-GR00T]] — humanoid robotics platform that uses Cosmos and GR00T data-generation workflows
- [[NVIDIA-Drive-Platform]] — Cosmos used for autonomous vehicle scenario generation and sensor simulation
- [[NVIDIA-NeMo]] — Cosmos models trained and fine-tuned within NeMo ecosystem
- [[NVIDIA-NIM]] — Cosmos deployed via NIM microservices for enterprise access

## Resources
- [Cosmos Developer Page](https://developer.nvidia.com/cosmos)
- [Cosmos Blog Announcement](https://blogs.nvidia.com/blog/cosmos-world-foundation-models/)
- [Cosmos GitHub](https://github.com/NVIDIA/Cosmos)
- [Hugging Face Models](https://huggingface.co/nvidia/Cosmos-1.0-Diffusion-7B-Text2World)
