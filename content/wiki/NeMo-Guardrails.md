# NeMo Guardrails

**Type:** Tool
**Tags:** NVIDIA, NeMo, Guardrails, LLM Safety, AI Alignment, RAG, Dialogue Management, Colang
**Related:** [[NVIDIA-NeMo]], [[NeMo-Platform]], [[NVIDIA-NemoGuard-NIMs]], [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]], [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]], [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]], [[NVIDIA-NemoGuard-JailbreakDetect-NIM]], [[NIM-for-Multimodal-Safety]], [[Nemotron]], [[NVIDIA-NIM]], [[TensorRT-LLM]], [[NVIDIA-AI-Enterprise]]
**Sources:** NVIDIA official documentation, https://docs.nvidia.com/nemo/guardrails/latest/configure-rails/guardrail-catalog/index.html, https://docs.nvidia.com/nemo/microservices/26.3.0/guardrails/tutorials/deploy-nemoguard-nims.html
**Last Updated:** 2026-04-29

## Summary
NeMo Guardrails is an open-source toolkit from NVIDIA for adding programmable safety, topic control, and behavioral guardrails to large language model (LLM) applications. It uses a custom domain-specific language called Colang to define rules that control what topics an LLM can discuss, how it should handle off-topic requests, what facts it must check against a knowledge base, and how it should respond to jailbreak attempts. NeMo Guardrails works with any LLM (OpenAI, Nemotron, Llama, etc.) and integrates with LangChain, providing lightweight runtime guardrails without fine-tuning.

## Detail

### Purpose
Deploying LLMs in enterprise and consumer applications requires controlling model behavior: preventing hallucinations, enforcing topic restrictions (a customer service bot should not discuss competitors), blocking jailbreaks and toxic outputs, and ensuring factual grounding via RAG. NeMo Guardrails solves this with a programmable, LLM-agnostic runtime that adds a controllability layer without modifying model weights.

### Key Features
- Colang language: human-readable scripting language for defining conversation flows and guardrail rules
- Input rails: filter and modify user inputs before they reach the LLM
- Output rails: check and modify LLM outputs before they reach the user
- Dialog rails: control conversation flow (topic adherence, multi-turn dialogue management)
- Retrieval rails: enforce RAG usage for factual grounding
- Jailbreak detection: heuristic and LLM-based jailbreak attempt detection
- Guardrail catalog: current docs include content safety, topic control, jailbreak protection, PII detection/masking, and grounding rails.
- NemoGuard NIMs: [[NVIDIA-NemoGuard-NIMs]] provide deployable NIMs for content safety, topic control, and jailbreak detection.
- LLM-agnostic: works with any LLM backend (OpenAI, HuggingFace, NIM, etc.)
- LangChain integration: NeMo Guardrails as a LangChain runnable component
- Fact-checking rail: automated fact verification against provided knowledge bases
- Hallucination rail: self-consistency checking to detect potential hallucinations

### Use Cases
- Enterprise customer service chatbots with strict topic and brand compliance
- Healthcare AI assistants with regulatory and safety constraints
- Financial services LLM applications requiring factual accuracy
- Educational AI that must stay on-topic and age-appropriate
- Internal HR or legal chatbots that must not discuss restricted topics
- Production RAG systems needing factual grounding enforcement

### Hardware Requirements / Compatibility
- CPU: NeMo Guardrails runtime runs on CPU (lightweight wrapper layer)
- LLM backend: any GPU-hosted or cloud-hosted LLM
- Python 3.8+
- pip install nemoguardrails
- Compatible with all major LLM providers (OpenAI, Anthropic, HuggingFace, NVIDIA NIM)

### Language Bindings / APIs
- Python (primary: from nemoguardrails import RailsConfig, LLMRails)
- Colang (.co files): domain-specific scripting for guardrail rules
- LangChain integration: RunnableRails wrapper
- REST API: guardrails can be exposed as a REST endpoint
- CLI: nemoguardrails chat for testing

## Connections
- [[NVIDIA-NeMo]] — NeMo Guardrails is part of the broader NeMo ecosystem
- [[NeMo-Platform]] - platform deployment path for self-hosted NemoGuard NIMs and guardrail services.
- [[NVIDIA-NemoGuard-NIMs]] - current specialized guardrail NIM family.
- [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]] - multilingual content-safety NIM used in current NeMo Platform tutorials.
- [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]] - topic-control NIM for on-topic/off-topic classification.
- [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]] - earlier NemoGuard content-safety NIM lineage.
- [[NVIDIA-NemoGuard-JailbreakDetect-NIM]] - jailbreak and prompt-injection detection NIM.
- [[NIM-for-Multimodal-Safety]] - visual/multimodal moderation NIM family adjacent to text guardrails.
- [[Nemotron]] — Guardrails applied to Nemotron-based enterprise deployments
- [[NVIDIA-NIM]] — NIM microservices can be wrapped with NeMo Guardrails for controlled access
- [[TensorRT-LLM]] — TensorRT-LLM provides the optimized inference backend that Guardrails wraps
- [[NVIDIA-AI-Enterprise]] — NeMo Guardrails included in NVAIE for enterprise-grade LLM safety

## Resources
- [NeMo Guardrails Developer Page](https://developer.nvidia.com/nemo-guardrails)
- [NeMo Guardrails GitHub](https://github.com/NVIDIA/NeMo-Guardrails)
- [NeMo Guardrails Documentation](https://docs.nvidia.com/nemo/guardrails/)
- [Colang Language Guide](https://docs.nvidia.com/nemo/guardrails/colang_2/overview.html)
