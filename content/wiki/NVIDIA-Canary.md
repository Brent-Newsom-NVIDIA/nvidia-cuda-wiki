# NVIDIA Canary

**Type:** Model
**Tags:** NVIDIA, ASR, Speech Recognition, NeMo, Multilingual, Translation, Audio AI
**Related:** [[NVIDIA-NeMo]], [[NVIDIA-Riva]], [[Parakeet-ASR]], [[NVIDIA-NIM]], [[TensorRT-LLM]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-10

## Summary
NVIDIA Canary is a multilingual automatic speech recognition (ASR) and speech translation model built within the NeMo framework, designed to transcribe and translate speech across multiple languages with high accuracy. Unlike Parakeet (English-only), Canary supports English, Spanish, German, and French transcription plus speech-to-text translation between these languages. It uses a novel encoder-decoder architecture with a multi-task training objective and achieves state-of-the-art results on multilingual ASR benchmarks.

## Detail

### Purpose
Global applications require ASR that goes beyond English. Canary addresses the multilingual gap by providing a single model capable of transcribing and translating across four major languages, making it suitable for international call centers, multilingual media, global meeting transcription, and cross-language accessibility applications.

### Key Features
- Multilingual support: English, Spanish, German, French (transcription and translation)
- Speech-to-speech translation: transcribe in one language and output text in another
- Encoder-decoder architecture: FastConformer encoder + Transformer decoder
- Multi-task training: joint ASR and speech translation objective
- Model sizes: Canary-1B (primary release)
- State-of-the-art multilingual WER on MLS, FLEURS, CoVoST-2 benchmarks
- Pnc (punctuation and capitalization) in output by default
- Open-weight release under CC-BY-4.0 license on Hugging Face

### Use Cases
- Multilingual meeting transcription and captioning
- Cross-language subtitle generation for international media
- International call center analytics and compliance
- Real-time speech translation for conferencing
- Multilingual voice search and voice command systems
- Academic research on multilingual speech processing

### Hardware Requirements / Compatibility
- Single A10G / A100 / H100 GPU for real-time inference
- Runs efficiently on T4 for non-real-time batch workloads
- TensorRT optimization available via NVIDIA Riva
- Deployable on NVIDIA Jetson for on-device edge inference

### Language Bindings / APIs
- Python (NVIDIA NeMo: nemo.collections.asr, EncDecMultiTaskModel)
- NVIDIA Riva SDK for production deployment
- Hugging Face (nvidia/canary-1b)
- NVIDIA NIM containers

## Connections
- [[NVIDIA-NeMo]] — Canary is developed and trained within the NeMo speech collection
- [[NVIDIA-Riva]] — Riva provides production deployment runtime for Canary in streaming mode
- [[Parakeet-ASR]] — Parakeet is English-focused, Canary extends to multilingual use cases
- [[NVIDIA-NIM]] — Canary available via NIM microservices
- [[TensorRT-LLM]] — decoder portion benefits from TensorRT-LLM optimization

## Resources
- [Canary on Hugging Face](https://huggingface.co/nvidia/canary-1b)
- [NeMo Framework](https://developer.nvidia.com/nemo)
- [Canary Model Card](https://huggingface.co/nvidia/canary-1b#model-details)
- [NeMo ASR Documentation](https://docs.nvidia.com/nemo-framework/user-guide/latest/nemotoolkit/asr/)
