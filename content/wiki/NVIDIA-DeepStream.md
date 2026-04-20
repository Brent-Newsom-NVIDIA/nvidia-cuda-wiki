# NVIDIA DeepStream SDK

**Type:** Platform
**Tags:** NVIDIA, video analytics, streaming, GStreamer, IVA, edge AI, intelligent video, multi-stream
**Related:** [[NVIDIA-Metropolis]], [[NVIDIA-Jetson-Platform]], [[Triton-Inference-Server]], [[TensorRT]], [[NGC]], [[NVIDIA-AI-Enterprise]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; written from verified knowledge)
**Last Updated:** 2026-04-10

## Summary
NVIDIA DeepStream SDK is a streaming analytics toolkit for building AI-powered, multi-stream video analytics applications. Built on GStreamer, it provides a graph-based pipeline architecture that handles video decoding (H.264/H.265/AV1), pre-processing, batched AI inference via TensorRT or Triton, object tracking, and metadata output — enabling a single GPU to process dozens to hundreds of simultaneous HD video streams. DeepStream is the foundational technology for NVIDIA Metropolis and is used in intelligent video analytics, autonomous machine perception, and edge AI deployments.

## Detail

### Purpose
Processing live video for AI analytics at scale is a data-movement and compute challenge: decoding 100+ concurrent 1080p streams, batching frames for efficient GPU inference, running multi-stage detection and tracking pipelines, and streaming metadata to downstream systems — all with end-to-end latency in the tens of milliseconds. DeepStream solves this by providing GPU-native GStreamer plugins that keep video data on the GPU from decode to inference, avoiding expensive CPU<->GPU memory copies. The result is dramatically higher throughput per GPU compared to naive OpenCV/ffmpeg-based approaches.

### Key Features
- **GStreamer-Based Pipeline:** DeepStream applications are GStreamer pipelines; NVIDIA provides custom GPU-accelerated elements (`nvvideoconvert`, `nvinfer`, `nvtracker`, `nvmsgbroker`, etc.) that slot into standard GStreamer graphs
- **Hardware-Accelerated Video Decode:** NVDEC hardware video decoder for H.264, H.265, VP9, AV1 — handles high-density stream decode with zero CPU involvement
- **Batched Inference:** `nvinfer` plugin batches frames from multiple streams for high-throughput TensorRT inference; `nvinferserver` plugin routes to Triton for multi-model serving
- **Multi-Object Tracking:** Built-in tracker plugins (IOU Tracker, NvDCF, DeepSORT, ByteTrack) for persistent object identity across frames
- **Metadata Bus:** `NvDsMeta` structured metadata flows through the pipeline; output via `nvmsgbroker` to Kafka, MQTT, AMQP, Azure IoT Hub, or Redis
- **Smart Record:** Configurable clip saving triggered by AI events (e.g., save 10-second clip around detected intrusion)
- **Multi-Stream Input:** RTSP, USB camera, CSI camera, V4L2, file sources — simultaneous input from heterogeneous sources
- **Low-Code Python Bindings:** `deepstream-python-apps` bindings allow pipeline construction and probe callbacks in Python while retaining C++ performance for GStreamer core
- **REST API Server:** `nvdsrestapi` plugin for dynamic stream addition/removal and configuration changes without restarting the pipeline
- **DeepStream Graph Composer:** Visual drag-and-drop pipeline editor for building DeepStream applications without writing GStreamer code

### Use Cases
- Multi-camera retail analytics: concurrent processing of 50–200 store cameras per server for shrinkage detection, queue monitoring, and foot traffic
- Smart factory visual inspection: real-time defect detection across multiple production line cameras
- Traffic management: intersection cameras with vehicle detection, counting, license plate recognition, and wrong-way detection
- Security: perimeter monitoring with multi-camera person re-identification and alert triggering
- Edge robotics: real-time scene understanding on Jetson with sensor fusion from cameras and radar
- Broadcast monitoring: AI-powered content analysis of live video streams for compliance and metadata extraction

### Hardware Requirements / Compatibility
- **Edge:** NVIDIA Jetson Orin series, Xavier series; JetPack 5.x/6.x; hardware video decode via NVDEC
- **Server:** NVIDIA T4, L4, A10, A30, A100; CUDA 11.x/12.x; Ubuntu 18.04/20.04/22.04
- **Minimum Spec:** 2 GB GPU memory for basic pipelines; 8–16+ GB for high-density stream deployments
- **Video:** NVDEC hardware requires NVIDIA GPU; purely CPU video decode also supported (lower performance)

### Language Bindings / APIs
- **C/C++:** Native GStreamer/C API; custom plugin development in C
- **Python:** `deepstream-python-apps` (`pyds` module) — probe callbacks, metadata access, and pipeline building from Python
- **GStreamer:** Standard GStreamer pipeline syntax (`gst-launch-1.0`) for prototyping
- **REST API:** Dynamic stream management via built-in HTTP REST server
- **Triton gRPC:** `nvinferserver` routes inference requests to Triton via gRPC for multi-model and ensemble serving

## Connections
- [[NVIDIA-Metropolis]] — Metropolis is built on DeepStream; Metropolis provides the higher-level application framework and microservices layer
- [[NVIDIA-Jetson-Platform]] — DeepStream runs natively on Jetson with full hardware decode/encode acceleration
- [[Triton-Inference-Server]] — `nvinferserver` plugin enables Triton-backed inference within DeepStream pipelines
- [[TensorRT]] — `nvinfer` plugin uses TensorRT for on-device optimized inference within DeepStream
- [[NGC]] — DeepStream containers and pre-trained TAO models distributed via NGC
- [[NVIDIA-AI-Enterprise]] — DeepStream is part of the AI Enterprise software bundle for production deployments

## Resources
- [DeepStream SDK Developer Page](https://developer.nvidia.com/deepstream-sdk)
- [DeepStream Documentation](https://docs.nvidia.com/metropolis/deepstream/dev-guide/index.html)
- [DeepStream Python Apps](https://github.com/NVIDIA-AI-IOT/deepstream_python_apps)
- [DeepStream on NGC](https://catalog.ngc.nvidia.com/orgs/nvidia/containers/deepstream)
