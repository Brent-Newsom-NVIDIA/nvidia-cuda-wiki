# NVIDIA NeMo

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, LLM, Speech, NLP, Framework, Generative AI, Training
**Related:** [[NeMo-Curator]], [[Megatron-LM]], [[TensorRT-LLM]], [[PyTorch]], [[cuDNN]], [[NCCL]]
**Sources:** NVIDIA official documentation, developer.nvidia.com/nemo
**Last Updated:** 2026-04-09

## Summary
NVIDIA NeMo is an open-source, scalable framework for building, customizing, and deploying large language models (LLMs), multimodal models, and speech AI systems. It provides a modular, configuration-driven approach to training foundation models at scale, with built-in support for multi-node distributed training on NVIDIA GPU clusters. NeMo is the primary NVIDIA framework for LLM pre-training, fine-tuning (SFT, RLHF, DPO), and speech model development, and serves as the upstream training stack for models deployed via TensorRT-LLM.

## Detail

### Purpose
NeMo addresses the complexity of training large foundation models by providing production-grade, modular building blocks for LLM and speech AI workflows. It abstracts away distributed training infrastructure while exposing fine-grained control over parallelism strategies, making it suitable for both research exploration and production-scale model development on NVIDIA DGX/HGX clusters.

### Key Features
- Modular NeMo Collections: LLM, Multimodal, ASR (Automatic Speech Recognition), TTS (Text-to-Speech)
- Built on PyTorch Lightning with Megatron-LM parallelism integration
- Support for tensor parallelism, pipeline parallelism, sequence parallelism, and expert parallelism (for MoE models)
- Full fine-tuning and parameter-efficient fine-tuning (PEFT): LoRA, P-Tuning, Prompt Tuning, Adapter
- RLHF (Reinforcement Learning from Human Feedback) and DPO (Direct Preference Optimization) pipelines
- Supports Llama, Mixtral, Nemotron, Falcon, GPT variants, and custom architectures
- Automatic Mixed Precision (AMP): FP16, BF16, FP8 on Hopper/Blackwell
- Streamer-based data loading and online dataset mixing for trillion-token training runs
- Experiment Manager with automatic checkpointing, logging (WandB, TensorBoard), and resumability
- Native integration with NeMo Curator for data preparation
- NeMo Guardrails sub-project for LLM safety and alignment
- Inference export to TensorRT-LLM for production deployment

### Use Cases
- Pre-training LLMs from scratch (GPT, Llama, Nemotron architectures) at billion-to-trillion parameter scale
- Supervised fine-tuning (SFT) and instruction tuning of LLMs
- RLHF/DPO alignment training
- Domain adaptation of foundation models (medical, legal, code, etc.)
- Training automatic speech recognition (ASR) models (Conformer, FastConformer, Canary)
- Text-to-speech (TTS) synthesis model training
- Multimodal model training (vision-language models)

### Hardware Requirements
- NVIDIA GPU with CUDA Compute Capability 7.0+ (Volta/V100 minimum)
- A100 (Ampere) or H100 (Hopper) strongly recommended for BF16/FP8 training
- Multi-GPU / multi-node: NVLink + InfiniBand for large-scale runs
- DGX A100, DGX H100, or DGX B200 clusters for production pre-training
- CUDA 11.8 minimum; CUDA 12.x recommended

### Language Bindings
- Python (primary)
- YAML/Hydra configuration for experiments
- REST API for NeMo Guardrails

## Connections
- [[NeMo-Curator]] — upstream data curation pipeline that feeds into NeMo training workflows
- [[Megatron-LM]] — NeMo uses Megatron-LM's distributed training core for model and pipeline parallelism
- [[TensorRT-LLM]] — downstream deployment target; NeMo-trained models exported for optimized inference
- [[PyTorch]] — NeMo is built on PyTorch and PyTorch Lightning
- [[NCCL]] — underpins all distributed collective communications during multi-GPU/multi-node training
- [[cuDNN]] — used by PyTorch backend for attention and convolution primitives within NeMo

## Resources
- [NVIDIA NeMo Developer Page](https://developer.nvidia.com/nemo)
- [NeMo Documentation](https://docs.nvidia.com/nemo-framework/user-guide/latest/)
- [GitHub](https://github.com/NVIDIA/NeMo)
- [NVIDIA NGC NeMo Container](https://catalog.ngc.nvidia.com/orgs/nvidia/containers/nemo)
