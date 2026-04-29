# NIM for LLM Benchmarking Guide

**Type:** Guide
**Tags:** NVIDIA, NIM, LLM, benchmarking, GenAI-Perf, latency, throughput, TTFT, ITL, TPS, RPS
**Related:** [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[TensorRT-LLM]], [[Triton-Inference-Server]], [[NVIDIA-Dynamo]], [[NIXL]], [[NVIDIA-AI-Enterprise]], [[LLM-Inference-Quick-Start-Recipes]], [[Nemotron]]
**Sources:** https://docs.nvidia.com/nim/benchmarking/llm/latest/overview.html, https://docs.nvidia.com/nim/benchmarking/llm/latest/
**Last Updated:** 2026-04-29

## Summary
NIM for LLM Benchmarking Guide is NVIDIA's current guide for measuring LLM inference latency and throughput for NIM-style deployments. It explains LLM serving stages, benchmark metrics, load parameters, and NVIDIA GenAI-Perf/AIPerf-style workflows for measuring OpenAI-compatible LLM services.

## Detail

### Purpose
LLM applications need cost-efficient serving that stays responsive under realistic traffic. The benchmarking guide helps teams measure whether a deployment can meet latency, throughput, and concurrency requirements before production rollout.

### Current scope
- Explains the queuing, prefill, and generation phases of LLM inference.
- Defines core metrics such as Time to First Token (TTFT), end-to-end latency, inter-token latency (ITL), tokens per second (TPS), and requests per second (RPS).
- Discusses load-control parameters such as concurrency, request rate, input sequence length, output sequence length, and streaming behavior.
- Compares general benchmarking tools such as Locust/K6 with LLM-specialized tooling such as NVIDIA GenAI-Perf and LLMPerf.
- Provides step-by-step guidance for benchmarking an OpenAI-compatible Llama-3 NIM inference service.
- Includes guidance for benchmarking LoRA and multi-LoRA deployments.

### NVIDIA context
This guide is not a model NIM. It is the performance-measurement companion for [[NIM-for-Large-Language-Models]], [[TensorRT-LLM]], [[Triton-Inference-Server]], and larger-scale serving layers such as [[NVIDIA-Dynamo]].

## Connections
- [[NIM-for-Large-Language-Models]] - primary LLM NIM deployment surface being benchmarked.
- [[NVIDIA-NIM]] - umbrella microservice platform for model serving.
- [[TensorRT-LLM]] and [[Triton-Inference-Server]] - inference/serving stack measured by GenAI-Perf-style workflows.
- [[NVIDIA-Dynamo]] and [[NIXL]] - scale-out/disaggregated serving context where latency-throughput benchmarking becomes critical.
- [[NVIDIA-AI-Enterprise]] - production support context for NIM deployments.
- [[LLM-Inference-Quick-Start-Recipes]] - hands-on inference recipes adjacent to benchmarking and deployment validation.
- [[Nemotron]] - NVIDIA LLM family often served through NIM and benchmarked in enterprise deployments.

## Source Excerpts
- NVIDIA docs describe the guide as covering important LLM inference latency and throughput metrics.
- The current docs call out GenAI-Perf/AIPerf-style workflows for measuring OpenAI-compatible LLM services.

## Resources
- [NIM LLM Benchmarking Guide](https://docs.nvidia.com/nim/benchmarking/llm/latest/overview.html)
- [NIM LLM Benchmarking Index](https://docs.nvidia.com/nim/benchmarking/llm/latest/)
