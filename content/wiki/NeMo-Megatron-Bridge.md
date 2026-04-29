# NeMo Megatron Bridge

**Type:** Library
**Tags:** NVIDIA, NeMo, Megatron, Megatron Core, Hugging Face, LLM, VLM, checkpoint conversion, distributed training
**Related:** [[NVIDIA-NeMo]], [[Megatron-LM]], [[NeMo-AutoModel]], [[NeMo-RL]], [[NeMo-Run]], [[NeMo-Export-Deploy]], [[NeMo-Customizer]], [[NeMo-Evaluator]], [[TensorRT-LLM]], [[vLLM]], [[Nemotron]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/nemo/megatron-bridge/latest/index.html, https://docs.nvidia.com/nemo/rl/latest/about/model-support.html, https://docs.nvidia.com/nemo/rl/latest/about/backends.html
**Last Updated:** 2026-04-29

## Summary
NeMo Megatron Bridge is NVIDIA's PyTorch-native library within NeMo Framework for training, fine-tuning, and converting LLM/VLM checkpoints between Hugging Face and Megatron Core formats. Current NVIDIA docs frame it as both a bidirectional bridge/conversion layer and a performant training loop for pretraining, SFT, LoRA/PEFT, mixed precision, and large-scale parallel training.

## Detail

### Purpose
Large-model teams often need the usability and ecosystem reach of Hugging Face checkpoints plus the training throughput and parallelism of Megatron Core. NeMo Megatron Bridge provides conversion, verification, recipes, and training infrastructure so models can move between formats without losing correctness or deployment options.

### Current scope
- Bidirectional Hugging Face to Megatron conversion with verification and checkpoint integrity checks.
- Training and customization paths for pretraining, SFT, LoRA, DoRA, PEFT, packed sequences, distillation, and mixed precision.
- Parallelism-aware conversion and training for tensor, pipeline, virtual pipeline, context, expert, and data-parallel styles.
- Supported model docs that include Llama, Qwen, DeepSeek, Mistral, Gemma, GPT-OSS, Nemotron/Nemotron Nano/Nemotron H, and multiple VLM families.
- Integration with [[NeMo-RL]] as a high-scale training backend and with [[NeMo-Export-Deploy]] for downstream inference export.

### NVIDIA context
Megatron Bridge is the current NVIDIA-authored bridge between open model checkpoints and the large-scale Megatron training stack. It should be treated as separate from [[Megatron-LM]] because it has its own current docs surface, conversion workflow, model-support matrix, and NeMo Framework role.

## Connections
- [[NVIDIA-NeMo]] - parent framework family for training, customization, evaluation, and deployment.
- [[Megatron-LM]] - distributed transformer-training lineage and Megatron ecosystem adjacency.
- [[NeMo-AutoModel]] - Hugging Face-compatible PyTorch training path; Megatron Bridge covers higher-scale Megatron Core conversion and recipes.
- [[NeMo-RL]] - current RL docs use Megatron Bridge for optimal acceleration on top model families.
- [[NeMo-Run]] - cluster execution layer for large-model jobs.
- [[NeMo-Export-Deploy]] - downstream export/deployment path for Megatron Bridge checkpoints.
- [[NeMo-Customizer]] and [[NeMo-Evaluator]] - managed customization and evaluation services adjacent to code-level training.
- [[TensorRT-LLM]], [[vLLM]], and [[Triton-Inference-Server]] - downstream serving/export targets.
- [[Nemotron]] - current docs list Nemotron/Nemotron Nano variants among supported NVIDIA model families.
- [[NVIDIA-AI-Enterprise]] - enterprise software context for NeMo training and deployment.

## Source Excerpts
- NVIDIA docs describe Megatron Bridge as a NeMo Framework library for pretraining, SFT, LoRA, and Hugging Face/Megatron conversion.
- Current docs list Nemotron and Llama-Nemotron model families in model support and RL acceleration context.

## Resources
- [Megatron Bridge Documentation](https://docs.nvidia.com/nemo/megatron-bridge/latest/index.html)
- [NeMo RL Model Support](https://docs.nvidia.com/nemo/rl/latest/about/model-support.html)
