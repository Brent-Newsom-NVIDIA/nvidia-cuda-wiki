# NVIDIA DRIVE Platform

**Type:** Platform
**Tags:** NVIDIA, autonomous vehicles, AV, automotive, ADAS, self-driving, robotics, DRIVE Orin, DRIVE Thor
**Related:** [[NVIDIA-Jetson-Platform]], [[NVIDIA-Omniverse]], [[NVIDIA-Isaac]], [[TensorRT]], [[cuDLA]], [[NVIDIA-Hopper-Architecture]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; written from verified knowledge)
**Last Updated:** 2026-04-10

## Summary
NVIDIA DRIVE is an end-to-end platform for autonomous vehicle (AV) and advanced driver assistance system (ADAS) development, spanning in-vehicle compute hardware (DRIVE Orin, DRIVE Thor), software SDKs (DRIVE OS, DRIVE AV, DRIVE IX), simulation (DRIVE Sim on Omniverse), and data management (DRIVE Constellation). DRIVE provides automakers, Tier 1 suppliers, and AV startups with the full stack required to develop, train, validate, and deploy automated driving software from ADAS Level 2+ to full autonomy (Level 4/5). NVIDIA DRIVE is adopted by 300+ automotive partners.

## Detail

### Purpose
Building autonomous vehicles requires solving perception, prediction, planning, and control — all in real time, with safety-grade reliability, on constrained automotive-grade hardware. Developing this at scale requires a consistent hardware compute platform, a software architecture that separates functional domains, massive simulation for validation (testing in the real world alone is infeasible), and deep learning tools for training perception models. NVIDIA DRIVE provides all of these as an integrated platform, enabling automotive OEMs to focus on their differentiated driving software rather than building GPU SoCs and simulation infrastructure from scratch.

### Key Features

**DRIVE Hardware (SoCs):**
- **DRIVE Orin:** Automotive-grade SoC with 254 TOPS AI performance; 12-core ARM Cortex-A78AE CPU, Ampere GPU, 2× DLA, 2× PVA; ISO 26262 ASIL-B/D certified; powers current-generation ADAS and roboaxi platforms
- **DRIVE Thor:** Next-generation centralized vehicle compute SoC combining former DRIVE and infotainment compute into one chip; 2000 TOPS; targets 2025+ model year vehicles with L2+ to L4 autonomy
- **DRIVE Hyperion:** Reference sensor and compute architecture blueprint for Level 4 AV — defines the sensor suite (cameras, radars, lidars) and compute platform for AV development

**DRIVE Software Stack:**
- **DRIVE OS:** Automotive-grade real-time OS layer with QNX hypervisor support; deterministic scheduling, functional safety separation
- **DRIVE AV (Autonomous Vehicle Stack):** Modular software components for perception (camera, radar, lidar fusion), prediction (motion forecasting), and planning (path planning, behavior prediction)
- **DriveWorks SDK:** CUDA-accelerated library of automotive algorithms — sensor processing, camera calibration, egomotion, point cloud processing, traffic sign recognition
- **DRIVE IX (Driver/Occupant Experience):** AI SDK for interior sensing — driver monitoring (DMS), occupant monitoring (OMS), gesture recognition, gaze tracking

**DRIVE Development Tools:**
- **DRIVE Sim (on Omniverse):** Physically-based synthetic data generation and closed-loop simulation in NVIDIA Omniverse; test 1000s of scenario miles virtually for every real test mile
- **DRIVE Constellation:** Hardware-in-the-loop (HIL) simulation using two-server architecture — one server runs DRIVE Orin, another renders sensor data; enables real hardware testing without physical road driving
- **DRIVE Map (Maps & Localization):** HD map and localization framework

### Use Cases
- Level 2+ ADAS: adaptive cruise control, lane centering, automatic emergency braking using DRIVE Orin
- Level 4 robotaxi platforms (Waymo, WeRide, and others) using DRIVE Orin or DRIVE Thor
- Automotive OEM development: BMW, Mercedes-Benz, Volvo, and others using DRIVE for next-gen autonomous features
- Truck platooning and logistics automation (Torc Robotics, Plus.ai)
- Training perception models on synthetic data from DRIVE Sim, then validating on DRIVE Orin hardware
- Driver monitoring systems (DMS) for regulatory-required attention monitoring

### Hardware Requirements / Compatibility
- **DRIVE Orin DevKit:** Development hardware for software teams; connects to standard camera/lidar/radar sensors
- **Automotive Grade:** DRIVE Orin operates at -40°C to 105°C junction temperature; AEC-Q100 Grade 2 automotive qualification
- **DRIVE Thor:** Production SoC for 2025+ vehicles; supports multi-domain consolidation (ADAS + IVI)
- **CUDA/TensorRT:** Full CUDA 11.x compatibility; TensorRT for DLA and GPU inference compilation

### Language Bindings / APIs
- **DriveWorks C++ API:** Primary SDK interface for ADAS algorithm development
- **Python:** Python bindings for DriveWorks sensor processing and visualization
- **ROS 2:** DriveWorks ROS 2 bridge for AV stack integration with ROS-based middleware
- **CUDA:** Direct CUDA programming for custom perception algorithms on DRIVE Orin GPU
- **OpenCV, PCL:** Standard CV and point cloud libraries with DRIVE hardware acceleration

## Connections
- [[NVIDIA-Jetson-Platform]] — Jetson and DRIVE share Orin SoC architecture; Jetson is the edge/robotics variant, DRIVE is the automotive-grade variant
- [[NVIDIA-Omniverse]] — DRIVE Sim is built on Omniverse for physically-based synthetic data generation and closed-loop simulation
- [[NVIDIA-Isaac]] — Isaac robotics platform shares software concepts with DRIVE; both target autonomous machine perception
- [[TensorRT]] — All DRIVE inference models are compiled with TensorRT for maximum SoC performance
- [[cuDLA]] — DRIVE Orin DLA is programmed via cuDLA for energy-efficient always-on perception tasks

## Resources
- [NVIDIA DRIVE Platform](https://developer.nvidia.com/drive)
- [DRIVE Orin](https://www.nvidia.com/en-us/self-driving-cars/drive-orin/)
- [DriveWorks SDK Documentation](https://developer.nvidia.com/docs/drive/driveworks/latest/index.html)
- [DRIVE Sim on Omniverse](https://developer.nvidia.com/drive/drive-sim)
- [DRIVE Safety](https://www.nvidia.com/en-us/self-driving-cars/safety/)
