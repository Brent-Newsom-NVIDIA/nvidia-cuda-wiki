# NVIDIA Metropolis

**Type:** Platform
**Tags:** NVIDIA, intelligent video analytics, IVA, smart cities, edge AI, retail, safety, computer vision
**Related:** [[NVIDIA-DeepStream]], [[NVIDIA-TAO]], [[NVIDIA-Video-Search-and-Summarization-Blueprint]], [[NVIDIA-Jetson-Platform]], [[NVIDIA-Jetson-Platform-Services]], [[NVIDIA-AI-Enterprise]], [[NGC]], [[Triton-Inference-Server]], [[TensorRT]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; updated from https://docs.nvidia.com/vss/latest/ and https://docs.nvidia.com/tao/tao-toolkit/latest/index.html)
**Last Updated:** 2026-04-29

## Summary
NVIDIA Metropolis is an application framework and partner ecosystem for building AI-powered intelligent video analytics (IVA) solutions for physical AI applications in retail, manufacturing, transportation, cities, and public safety. It provides an end-to-end platform spanning edge devices (Jetson), network appliances, and cloud/data center deployment — with pre-trained perception models, microservices for video ingestion and analytics, and a partner ecosystem of 750+ ISVs building Metropolis-enabled solutions. Metropolis is NVIDIA's primary platform for bringing AI perception from the cloud to the physical world.

## Detail

### Purpose
Cameras are ubiquitous, but extracting actionable intelligence from video at scale requires AI models for object detection, tracking, classification, and behavior analysis — running in real time on potentially thousands of concurrent streams. Metropolis provides the infrastructure to make this practical: a hardware-agnostic platform that runs on Jetson edge devices, x86 servers, and cloud VMs, using DeepStream for multi-stream pipeline management and NIM microservices for AI model deployment. The vision is that physical environments — factories, stores, roads, cities — become "AI-aware" through pervasive video analytics.

### Key Features
- **Video Analytics Microservices (VAS):** Metropolis microservices for video ingestion, multi-stream management, metadata output, and AI inference — architected for Kubernetes deployment
- **Pre-Trained Perception Models:** PeopleNet (person detection), TrafficCamNet (vehicle detection), DashCamNet, FaceDetect, LicensePlateNet, and dozens of domain-specific models available on NGC
- **[[NVIDIA-TAO]] (Train, Adapt, Optimize):** toolkit and services for transfer learning, fine-tuning, quantization, and deployment preparation for Metropolis perception models
- **DeepStream Integration:** Built on top of NVIDIA DeepStream SDK for multi-stream GStreamer pipeline management; handles video decode, pre-processing, inference, and output in a unified pipeline
- **Retail Analytics:** Shopper journey analysis, queue detection, heat maps, shrinkage detection, planogram compliance
- **Manufacturing Quality Inspection:** Defect detection, assembly verification, safety compliance monitoring on factory floors
- **Smart City / Traffic:** License plate recognition, vehicle counting, pedestrian safety, red light violation detection, parking management
- **Partner Ecosystem:** 750+ Metropolis ISV partners building certified solutions; NVIDIA Metropolis Application Framework provides reference applications
- **Cloud-to-Edge:** Unified deployment pipeline from cloud development/training to edge Jetson devices and on-premises servers
- **Blueprint adjacency:** [[NVIDIA-Video-Search-and-Summarization-Blueprint]] adds a current NVIDIA-authored vision-agent blueprint for search, summarization, alert verification, and smart-city/warehouse examples.

### Use Cases
- Retail loss prevention: AI-powered shrinkage detection with behavioral analysis and alert systems
- Automated checkout and queue management using person counting and wait-time estimation
- Manufacturing: 100% AI-based visual inspection replacing manual QA on assembly lines
- Transportation: highway traffic monitoring, incident detection, and autonomous intersection management
- Smart building security: multi-camera person re-identification, perimeter breach detection, occupancy management
- Agriculture: livestock monitoring, crop disease detection using drone-mounted cameras

### Hardware Requirements / Compatibility
- **Edge:** NVIDIA Jetson Orin (recommended), Jetson Xavier NX, Jetson AGX Xavier; also NVIDIA Jetson Orin NX and Nano for cost-sensitive deployments
- **Server:** NVIDIA T4, A2, A10, A30, L4 for on-premises multi-stream analytics (100s of concurrent streams per GPU)
- **Data Center/Cloud:** A100, H100 for large-scale batch analytics and model training
- **OS:** JetPack 5.x/6.x (Jetson); Ubuntu 20.04/22.04 (x86 server/cloud)
- **Software:** DeepStream 6.x+, TensorRT 8.x+, CUDA 11.8+

### Language Bindings / APIs
- **Python:** DeepStream Python bindings (`deepstream-python-apps`); TAO Toolkit Python CLI
- **C/C++:** DeepStream C/C++ SDK for custom plugin development
- **REST API:** Metropolis microservices expose REST APIs for stream management, AI configuration, and metadata output
- **GStreamer:** Native GStreamer plugin ecosystem for pipeline customization

## Connections
- [[NVIDIA-DeepStream]] — DeepStream SDK is the foundational video analytics engine underpinning Metropolis pipelines
- [[NVIDIA-TAO]] — model customization and optimization path for Metropolis vision models and datasets
- [[NVIDIA-Video-Search-and-Summarization-Blueprint]] - current VSS blueprint for building vision agents and video analytics applications.
- [[NVIDIA-Jetson-Platform]] — Jetson is the primary edge hardware platform for Metropolis edge deployments
- [[NVIDIA-Jetson-Platform-Services]] - JPS provides Jetson-hosted services for video analytics, VLM, detection, and edge application APIs.
- [[NVIDIA-AI-Enterprise]] — Metropolis microservices available under AI Enterprise for enterprise deployments
- [[NGC]] — Pre-trained models, DeepStream containers, and TAO models distributed via NGC
- [[Triton-Inference-Server]] — Metropolis inference can be served via Triton for multi-model deployments
- [[TensorRT]] — All Metropolis inference models are optimized with TensorRT for maximum stream throughput

## Resources
- [NVIDIA Metropolis Developer Page](https://developer.nvidia.com/metropolis)
- [Metropolis Documentation](https://docs.nvidia.com/metropolis/index.html)
- [TAO Toolkit Documentation](https://docs.nvidia.com/tao/tao-toolkit/index.html)
- [DeepStream SDK](https://developer.nvidia.com/deepstream-sdk)
- [Metropolis Models on NGC](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models)
