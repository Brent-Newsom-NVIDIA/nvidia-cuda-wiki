# NVIDIA Jetson Platform

**Type:** Platform
**Tags:** NVIDIA, edge AI, embedded, IoT, robotics, autonomous machines, Jetson, ARM, SoC
**Related:** [[NVIDIA-DeepStream]], [[NVIDIA-Metropolis]], [[NVIDIA-Isaac]], [[NVIDIA-Isaac-ROS]], [[NVIDIA-Isaac-GR00T]], [[cuDLA]], [[NVIDIA-Drive-Platform]], [[TensorRT]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; written from verified knowledge)
**Last Updated:** 2026-04-10

## Summary
NVIDIA Jetson is a family of embedded AI computing modules and developer kits that bring GPU-accelerated AI inference to edge devices, robots, autonomous machines, and IoT systems. Jetson modules combine ARM-based CPUs, NVIDIA GPU cores, deep learning accelerators (DLA), video encode/decode engines, and high-speed I/O in a compact, power-efficient SoC — running from 5W to 60W. Jetson runs NVIDIA JetPack (Ubuntu-based Linux) and supports the full CUDA and TensorRT software stack, making it a genuine edge extension of NVIDIA's data center AI platform.

## Detail

### Purpose
AI inference workloads are increasingly needed at the edge — in robots, cameras, drones, industrial machines, and embedded devices — where cloud connectivity is unreliable, latency is critical, or data privacy prevents cloud offload. Jetson provides the compute density to run complex neural networks (object detection, segmentation, pose estimation, speech recognition) locally at edge power budgets (5–60W) with the same CUDA/TensorRT programming model used in data centers, avoiding dual-stack development.

### Key Features

**Jetson Module Family (current generation: Orin):**
- **Jetson Orin Nano (4/8 GB):** 20–40 TOPS AI performance; 5–10W; lowest-cost Orin for volume edge deployments
- **Jetson Orin NX (8/16 GB):** 70–100 TOPS; 10–20W; mid-range performance for smart cameras and compact robots
- **Jetson AGX Orin (32/64 GB):** 200–275 TOPS; 15–60W; top-tier Orin for autonomous machines and industrial robots
- **Jetson AGX Orin Industrial:** Industrial temperature range (-40°C to 85°C), extended lifetime supply for mission-critical deployments

**Previous Generation (still deployed):**
- **Jetson Xavier NX / AGX Xavier:** 15–32 TOPS; previous-gen for existing robot fleets
- **Jetson Nano / TX2:** Legacy; suitable for lightweight inference tasks

**Key Hardware Features:**
- **NVIDIA GPU Cores:** Ampere (Orin) architecture GPU; 1024 CUDA cores (AGX Orin) for TensorRT, CUDA, and OpenGL
- **DLA (Deep Learning Accelerator):** Dedicated fixed-function hardware for efficient inference without using GPU; 2× DLA engines per Orin; runs TensorRT DLA-compiled models
- **PVA (Programmable Vision Accelerator):** Signal processing and computer vision operations
- **NVDEC/NVENC:** Hardware video decode (H.264/H.265/VP9/AV1) and encode for camera pipelines
- **Memory Bandwidth:** 204 GB/s (AGX Orin 64 GB) — unified CPU+GPU memory architecture; no PCIe transfer overhead
- **JetPack SDK:** Ubuntu 20.04/22.04-based OS with CUDA, TensorRT, cuDNN, DeepStream, OpenCV, VPI (Vision Programming Interface), Isaac ROS preinstalled

### Use Cases
- Mobile robots and AMRs (Autonomous Mobile Robots): real-time navigation, obstacle avoidance, and manipulation planning
- Intelligent cameras (IPC): local AI inference for retail analytics, security, and smart city without cloud dependency
- Industrial inspection: real-time defect detection on assembly lines at camera-side
- Drones: onboard perception for autonomous flight, mapping, and inspection
- Medical devices: bedside AI diagnostics and real-time imaging analysis
- Agricultural robotics: crop counting, disease detection, precision spraying with onboard AI
- Smart NVRs and edge video analytics with DeepStream for multi-camera processing

### Hardware Requirements / Compatibility
- **Carrier Boards:** NVIDIA-designed Jetson developer kits (reference carriers); wide ecosystem of 3rd-party carrier boards (Auvidea, Connect Tech, Seeed Studio)
- **Form Factor:** Jetson modules use SO-DIMM-like 260-pin connector (Nano, NX) or custom 699-pin connector (AGX); OEM designs integrate modules into custom hardware
- **JetPack:** JetPack 5.x (Ubuntu 20.04, Jetson AGX Orin/Xavier); JetPack 6.x (Ubuntu 22.04, Orin series)
- **Power:** 5–60W depending on module and NVPModel power mode configuration

### Language Bindings / APIs
- **CUDA C/C++:** Full CUDA programming support with hardware-matched toolkit in JetPack
- **Python:** CuPy, PyTorch (NVIDIA-built Jetson wheel), TensorRT Python API, DeepStream Python bindings
- **TensorRT:** Primary inference optimization tool; generates DLA-compatible engine files for hardware accelerator
- **ROS 2 / Isaac ROS:** NVIDIA-accelerated ROS 2 hardware-accelerated nodes (cuVS, Visual SLAM, nvblox) via [[NVIDIA-Isaac-ROS]]
- **Triton:** Triton Inference Server runs on Jetson for local multi-model serving
- **GStreamer:** DeepStream pipelines run natively on Jetson with NVDEC/NVENC hardware acceleration

## Connections
- [[NVIDIA-DeepStream]] — DeepStream runs natively on Jetson for multi-stream intelligent video analytics at the edge
- [[NVIDIA-Metropolis]] — Metropolis edge deployments run on Jetson modules in smart city and retail use cases
- [[NVIDIA-Isaac]] — Isaac robotics workflows target Jetson as a primary robot compute platform
- [[NVIDIA-Isaac-ROS]] — CUDA-accelerated ROS 2 package family for Jetson robot deployment
- [[NVIDIA-Isaac-GR00T]] — humanoid robot foundation model workflows reference Jetson AGX Thor for robot-side deployment
- [[cuDLA]] — cuDLA provides the programming interface to Jetson's on-chip Deep Learning Accelerator hardware
- [[NVIDIA-Drive-Platform]] — DRIVE Orin SoC shares architecture with Jetson Orin; automotive-grade variant
- [[TensorRT]] — TensorRT is the primary inference optimization path on Jetson, including DLA target compilation

## Resources
- [Jetson Developer Page](https://developer.nvidia.com/embedded/jetson-modules)
- [JetPack SDK](https://developer.nvidia.com/embedded/jetpack)
- [Jetson Orin Specifications](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/)
- [Jetson Software Documentation](https://docs.nvidia.com/jetson/archives/r36.0/index.html)
- [Isaac ROS](https://developer.nvidia.com/isaac-ros)
