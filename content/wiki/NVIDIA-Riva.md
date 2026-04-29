# NVIDIA Riva

**Type:** Platform
**Tags:** NVIDIA, speech AI, ASR, TTS, NLP, real-time, conversational AI, speech-to-text, text-to-speech
**Related:** [[NVIDIA-NIM]], [[NVIDIA-NeMo]], [[NVIDIA-AI-Enterprise]], [[Triton-Inference-Server]], [[NGC]], [[NVIDIA-Maxine]], [[NVIDIA-Audio-Effects-SDK]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; updated from https://docs.nvidia.com/maxine/afx/latest/index.html)
**Last Updated:** 2026-04-29

## Summary
NVIDIA Riva is a GPU-accelerated SDK for building real-time, production-grade speech AI and multimodal conversational AI applications. It provides pre-trained and customizable pipelines for automatic speech recognition (ASR), text-to-speech synthesis (TTS), neural machine translation (NMT), and natural language processing (NLP) — all deployable as NIM microservices via gRPC or REST APIs. Riva delivers millisecond-latency speech AI suitable for call center automation, voice assistants, real-time transcription, and multilingual customer service.

## Detail

### Purpose
Building speech AI from scratch requires assembling acoustic models, language models, punctuation restoration, inverse text normalization, and speaker diarization — all requiring different expertise and GPU optimization. Riva packages this complexity into a turnkey SDK: plug in audio, receive text (ASR), or plug in text, receive audio (TTS), with enterprise-grade latency, accuracy, and customizability. Riva powers the speech layer in NVIDIA's conversational AI ecosystem, integrating with NeMo for model customization and Triton for serving.

### Key Features
- **Automatic Speech Recognition (ASR):** High-accuracy streaming and offline ASR with support for 60+ languages; includes punctuation restoration, inverse text normalization (ITN), and speaker diarization
- **Text-to-Speech (TTS):** Neural TTS with natural-sounding voices; customizable voice cloning and expressive synthesis using FastPitch + HiFi-GAN or radTTS vocoders
- **Neural Machine Translation (NMT):** Real-time translation between 30+ language pairs with domain-adaptive fine-tuning capability
- **NLP Tasks:** Named entity recognition (NER), intent/slot classification, and question answering pipelines
- **Parakeet ASR Models:** NVIDIA's state-of-the-art English ASR model family (Parakeet-TDT, Parakeet-CTC, Parakeet-RNNT) — competitive with Whisper on accuracy at lower latency
- **Canary Models:** Multi-lingual ASR and speech translation models for 4–50+ languages
- **Custom Vocabulary & Acoustic Adaptation:** Domain-specific vocabulary injection (medical, legal, financial terminology) without full model retraining; acoustic model adaptation to new speakers or noise conditions
- **Streaming & Offline Modes:** Real-time streaming ASR with configurable chunk sizes for low-latency applications; batch offline mode for maximum accuracy
- **NIM Packaging:** All Riva models available as NIM microservices deployable via Docker/Kubernetes with OpenAI-compatible or gRPC speech APIs
- **Hardware-Optimized:** TensorRT-compiled models; optimized for Ampere and Hopper GPU Tensor Cores

### Use Cases
- Call center automation: real-time ASR transcription + intent classification for agent assist and self-service IVR
- Voice assistant and chatbot voice interfaces with low-latency speech I/O
- Real-time meeting transcription and captioning for accessibility
- Multilingual customer service with NMT for real-time translation in contact centers
- Medical transcription: clinical-domain ASR with medical vocabulary and speaker diarization for multi-speaker clinical notes
- Edge voice AI on NVIDIA Jetson for offline/on-device speech applications in robotics and embedded systems
- Video subtitle generation and localization workflows

### Hardware Requirements / Compatibility
- **GPU:** NVIDIA T4, A10, A30, A100, H100 (data center); RTX A-series (workstation); Jetson AGX Orin (edge)
- **Minimum GPU Memory:** 8 GB VRAM for ASR-only deployments; 16+ GB for full ASR + TTS stacks
- **CUDA:** 11.8 or later; TensorRT 8.x+ for compiled inference
- **OS:** Linux (Ubuntu 18.04/20.04/22.04); Docker containerized
- **Kubernetes:** Helm charts available; integrates with GPU Operator for auto-provisioning

### Language Bindings / APIs
- **Python gRPC Client SDK:** `riva-python-clients` package for streaming and batch ASR/TTS from Python applications
- **gRPC API:** High-performance streaming protocol ideal for real-time speech applications (low overhead vs HTTP)
- **REST/HTTP API:** Available for non-streaming use cases; compatible with standard HTTP clients
- **NIM REST API:** OpenAI-compatible speech endpoints (`/v1/audio/transcriptions`, `/v1/audio/speech`) for drop-in compatibility
- **C++ Client SDK:** Low-latency C++ client for embedded or high-performance applications
- **WebSocket:** Browser-compatible streaming via WebSocket proxy for web applications

## Connections
- [[NVIDIA-NIM]] — Riva ASR and TTS models are packaged and deployed as NIM microservices
- [[NVIDIA-NeMo]] — NeMo is the training framework for customizing and fine-tuning Riva's acoustic, language, and TTS models
- [[Triton-Inference-Server]] — Riva server is built on Triton; models are served via Triton inference engine
- [[NVIDIA-AI-Enterprise]] — Riva is included in AI Enterprise with enterprise SLA and security support
- [[NGC]] — Riva containers, pre-trained model checkpoints, and Helm charts distributed via NGC
- [[NVIDIA-Maxine]] — Maxine uses Riva for the speech AI component (noise cancellation feeds into Riva ASR)
- [[NVIDIA-Audio-Effects-SDK]] — audio cleanup can improve upstream audio quality before ASR or voice workflows.

## Resources
- [NVIDIA Riva Developer Page](https://developer.nvidia.com/riva)
- [Riva Documentation](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/index.html)
- [Riva NIM on NGC](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/riva/collections/riva)
- [Riva Python Client](https://github.com/nvidia-riva/python-clients)
- [Parakeet ASR Models](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/nemo/models/parakeet_tdt_1.1b)
