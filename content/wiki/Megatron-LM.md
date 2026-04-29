# Megatron-LM

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, LLM, Distributed Training, Transformer, Research, Pre-training
**Related:** [[NVIDIA-NeMo]], [[NeMo-Megatron-Bridge]], [[NeMo-AutoModel]], [[NeMo-RL]], [[NeMo-Export-Deploy]], [[BioNeMo-Recipes]], [[PyTorch]], [[NCCL]], [[cuDNN]], [[CUTLASS]], [[TensorRT-LLM]], [[FlashInfer]]
**Sources:** NVIDIA official documentation, github.com/NVIDIA/Megatron-LM, https://docs.nvidia.com/nemo/megatron-bridge/latest/index.html, https://docs.nvidia.com/nemo/rl/latest/about/backends.html, https://docs.nvidia.com/bionemo-framework/latest/main/recipes/
**Last Updated:** 2026-04-29

## Summary
Megatron-LM is NVIDIA's open-source research framework for efficient training of large transformer-based language models, developed by the NVIDIA Applied Deep Learning Research team. It pioneered the combination of tensor parallelism, pipeline parallelism, and data parallelism that enables training of models with hundreds of billions to trillions of parameters across thousands of NVIDIA GPUs. Current NeMo docs now place [[NeMo-Megatron-Bridge]] beside this lineage as the PyTorch-native bridge, conversion, and training layer for Hugging Face and Megatron Core workflows.

## Detail

### Purpose
Megatron-LM addresses the fundamental challenge of training neural network models that are too large to fit in a single GPU's memory. It provides efficient, numerically stable distributed training techniques that scale to thousands of GPUs with near-linear throughput scaling, enabling the training of foundation models at the frontier of AI capability.

### Key Features
- Tensor Model Parallelism (TMP): splits individual transformer layer weight matrices across multiple GPUs
- Pipeline Model Parallelism (PMP): partitions model layers across pipeline stages with micro-batch interleaving
- Sequence Parallelism: splits the sequence dimension for attention computations to reduce activation memory
- Expert Parallelism: supports Mixture-of-Experts (MoE) architectures with load-balanced routing
- Data Parallelism with ZeRO-like optimizer state sharding
- Distributed optimizer with reduced communication overhead
- Flash Attention integration for memory-efficient attention computation
- Fused CUDA kernels for LayerNorm, SoftMax, and attention for reduced kernel launch overhead
- BF16 and FP8 mixed-precision training on Ampere/Hopper/Blackwell
- Activation checkpointing (gradient checkpointing) for memory reduction
- Selective recomputation of activations
- GPT, BERT, T5, and Llama-style architecture support
- Interleaved pipeline schedule for reduced pipeline bubble overhead
- Checkpoint conversion utilities for downstream fine-tuning
- Current NeMo ecosystem bridge through [[NeMo-Megatron-Bridge]] for Hugging Face/Megatron conversion, verification, recipes, and downstream export.
- BioNeMo recipe adjacency through [[BioNeMo-Recipes]], which documents megatron-FSDP style scaling for biological foundation model training examples.

### Use Cases
- Pre-training GPT/Llama/Nemotron-style decoder LLMs at scale
- Training BERT-style encoder models for NLP tasks
- Training T5/encoder-decoder models
- Research into parallelism strategies and scaling laws
- Ablation studies on large transformer architectures
- Foundation model development for domain adaptation

### Hardware Requirements
- NVIDIA GPU with CUDA Compute Capability 7.0+ (Volta/V100 minimum)
- A100 (SXM4) strongly recommended for BF16 and NVLink bandwidth
- H100 (SXM5) for FP8 training and NVLink 4.0
- NVLink between GPUs within a node (critical for tensor parallelism bandwidth)
- InfiniBand HDR/NDR for inter-node pipeline and data parallelism
- DGX A100, DGX H100, DGX B200 or equivalent HGX platforms
- CUDA 11.8+; CUDA 12.x for Hopper/Blackwell features

### Language Bindings
- Python (primary)
- CUDA C++ for fused kernel extensions

## Connections
- [[NVIDIA-NeMo]] — NeMo incorporates Megatron-LM's parallelism core as its distributed training backbone
- [[NeMo-Megatron-Bridge]] - current NeMo library for Hugging Face/Megatron conversion, high-scale recipes, and Megatron Core training paths.
- [[NeMo-AutoModel]] - Hugging Face-compatible training path that complements Megatron-scale workflows.
- [[NeMo-RL]] - post-training library that can use Megatron-style backends for larger models.
- [[NeMo-Export-Deploy]] - downstream export/deploy path for Megatron Bridge and Megatron-family checkpoints.
- [[BioNeMo-Recipes]] - biological foundation model recipe layer that uses megatron-FSDP and TransformerEngine patterns for scaling PyTorch training.
- [[NCCL]] — all cross-GPU collective communications (all-reduce, reduce-scatter, all-gather) use NCCL
- [[PyTorch]] — Megatron-LM is built on top of PyTorch
- [[CUTLASS]] — custom GEMM kernels optionally used for optimized matrix multiplications
- [[FlashInfer]] — Flash Attention algorithms integrated for memory-efficient attention during training
- [[TensorRT-LLM]] — Megatron-trained model checkpoints are the upstream source for TRT-LLM deployment
- [[cuDNN]] — cuDNN fused attention used as an alternative attention backend

## Resources
- [GitHub](https://github.com/NVIDIA/Megatron-LM)
- [Original Paper: Megatron-LM (2019)](https://arxiv.org/abs/1909.08053)
- [Megatron-Turing NLG Paper](https://arxiv.org/abs/2201.11990)
- [NVIDIA Blog: Megatron-LM](https://developer.nvidia.com/blog/scaling-language-model-training-to-a-trillion-parameters-using-megatron/)
