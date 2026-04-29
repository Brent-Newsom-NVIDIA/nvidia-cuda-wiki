# NeMo RL

**Type:** Library
**Tags:** NVIDIA, NeMo, reinforcement learning, post-training, RLHF, GRPO, DPO, SFT, VLM, LLM, Ray
**Related:** [[NVIDIA-NeMo]], [[NeMo-AutoModel]], [[NeMo-Megatron-Bridge]], [[NeMo-Run]], [[NeMo-Customizer]], [[NeMo-Evaluator]], [[NeMo-Auditor]], [[Megatron-LM]], [[vLLM]], [[Nemotron]], [[NVIDIA-NIM]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/nemo/rl/latest/about/overview.html, https://docs.nvidia.com/nemo/rl/latest/about/model-support.html, https://docs.nvidia.com/nemo/rl/latest/about/backends.html
**Last Updated:** 2026-04-29

## Summary
NeMo RL is NVIDIA's open-source NeMo library for scalable post-training and reinforcement learning workflows for LLMs and VLMs. Current NVIDIA docs describe it as a flexible, reproducible, Ray-based library that can run from small experiments to multi-GPU and multi-node training, with PyTorch/AutoModel and Megatron backends plus vLLM or Megatron generation backends.

## Detail

### Purpose
Post-training is where teams align models for reasoning, preference, safety, tool use, and domain behavior. NeMo RL provides reusable algorithms, training backends, generation backends, data formats, evaluation hooks, checkpointing, and distributed execution patterns so RL and alignment work can scale beyond ad hoc scripts.

### Current scope
- Algorithms and guides for SFT, DPO, reward model training, GRPO, DAPO, on-policy distillation, and related RL workflows.
- Hugging Face model support through [[NeMo-AutoModel]] for LLMs and VLMs under current documented limits.
- High-scale acceleration through [[NeMo-Megatron-Bridge]] and Megatron-style training paths.
- Generation/rollout backends using [[vLLM]] or Megatron-native inference.
- Ray-based resource management and multi-GPU/multi-node execution.
- Model support that includes current NVIDIA/Nemotron entries such as Llama-Nemotron-Super, Nemotron Nano v2, and Nemotron Nano v3.

### NVIDIA context
NeMo RL extends the NeMo stack beyond supervised customization into reinforcement learning and alignment. It is adjacent to [[NeMo-Customizer]] for managed fine-tuning, [[NeMo-Evaluator]] for measurement, and [[NeMo-Auditor]] for safety probing before deployment.

## Connections
- [[NVIDIA-NeMo]] - parent suite for training, customization, post-training, and deployment.
- [[NeMo-AutoModel]] - PyTorch backend path for broad Hugging Face model coverage.
- [[NeMo-Megatron-Bridge]] - Megatron Core bridge/training path for larger models and high-throughput recipes.
- [[NeMo-Run]] - experiment execution layer for repeatable local and cluster runs.
- [[NeMo-Customizer]] - managed customization service adjacent to code-level RL/post-training.
- [[NeMo-Evaluator]] - evaluation layer for post-training regressions and quality checks.
- [[NeMo-Auditor]] - safety audit layer for probing aligned or fine-tuned models.
- [[Megatron-LM]] - distributed training lineage and scaling model behind large-model backends.
- [[vLLM]] - rollout/generation backend used in current NeMo RL docs.
- [[Nemotron]] - NVIDIA model family represented in current NeMo RL model support.
- [[NVIDIA-AI-Enterprise]] - enterprise software context for production NeMo workflows.

## Source Excerpts
- NVIDIA docs describe NeMo RL as an open-source post-training library for multimodal models.
- Current backend docs describe PyTorch/AutoModel and Megatron training backends, plus vLLM and Megatron generation backends.

## Resources
- [NeMo RL Overview](https://docs.nvidia.com/nemo/rl/latest/about/overview.html)
- [NeMo RL Model Support](https://docs.nvidia.com/nemo/rl/latest/about/model-support.html)
- [NeMo RL Backends](https://docs.nvidia.com/nemo/rl/latest/about/backends.html)
