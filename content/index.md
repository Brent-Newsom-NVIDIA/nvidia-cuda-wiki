# NVIDIA Wiki — Master Index

*Last updated: 2026-04-29*
*Total pages: 214*

---

## Concepts

- [[NVIDIA-AI-Grid]] — Distributed AI infrastructure concept for workload placement across cloud, data center, and edge locations
- [[Floating-Point-and-IEEE-754]] — NVIDIA guidance on CUDA floating-point behavior, IEEE 754 compliance, FMA, and numerical accuracy

## People

*(none yet)*

## Organizations

*(none yet)*

## Technologies

### Math & Linear Algebra
- [[cuBLAS]] — GPU-accelerated BLAS library: all 152 standard routines, Tensor Core GEMM, multi-GPU
- [[cuBLASDx]] — Device-side BLAS-style operations for fusing dense linear algebra into CUDA kernels
- [[cuBLASMp]] — Multi-process distributed dense linear algebra library with PBLAS-like APIs
- [[cuFFT]] — GPU-accelerated Fast Fourier Transform library for 1D/2D/3D real and complex data
- [[cuFFTDx]] — Device-side FFT library for fusing FFT operations into CUDA kernels
- [[cuRAND]] — GPU-accelerated random number generation library (pseudo and quasi-random, multiple distributions)
- [[cuSOLVER]] — GPU-accelerated dense and sparse direct linear solvers and eigensolvers
- [[cuSOLVERMp]] — Distributed-memory dense linear solver and eigensolver library with ScaLAPACK-like APIs
- [[cuSPARSE]] — GPU-accelerated sparse matrix linear algebra (SpMV, SpMM, preconditioners)
- [[cuSPARSELt]] — Structured sparse matrix-matrix multiplication library for Tensor Core sparse acceleration
- [[cuTENSOR]] — GPU-accelerated tensor contraction, reduction, and elementwise operations
- [[cuDSS]] — GPU-accelerated direct sparse solver for very sparse linear systems
- [[AmgX]] — GPU-accelerated algebraic multigrid and Krylov solver library (open source)
- [[Incomplete-LU-Cholesky]] — CUDA whitepaper guidance for preconditioned iterative solvers using cuSPARSE and cuBLAS
- [[nvmath-python]] — Python interface to NVIDIA CUDA-X math libraries (cuBLAS, cuFFT, cuRAND, cuDSS)
- [[NVBLAS]] — drop-in GPU BLAS shim; transparently redirects Level 3 BLAS calls to cuBLAS via LD_PRELOAD
- [[NVPL]] — NVIDIA Performance Libraries: CPU math (BLAS, LAPACK, FFT, RAND) optimized for Grace/Arm

### Deep Learning
- [[cuDNN]] — GPU-accelerated primitives for deep neural networks (convolution, attention, pooling)
- [[TensorRT]] — inference compiler, runtime, and model optimizer for production DNN deployment
- [[TensorRT-LLM]] — LLM inference optimization library with continuous batching, paged KV cache, FP8
- [[CUTLASS]] — open-source C++ template library for custom high-performance GEMM on NVIDIA GPUs
- [[FlashInfer]] — open-source GPU kernel toolkit for LLM inference (attention, batch decode, sampling)
- [[NVIDIA-Deep-Learning-Performance]] — NVIDIA guidance for GPU deep learning performance, precision, Tensor Cores, and profiling
- [[LLM-Inference-Quick-Start-Recipes]] — NVIDIA quick-start recipes for common LLM inference paths across NIM, TensorRT-LLM, Triton, and Dynamo

### Data Processing & ML
- [[cuDF]] — GPU-accelerated DataFrame library; 50x faster pandas drop-in (RAPIDS)
- [[cuML]] — GPU-accelerated machine learning; 50x faster scikit-learn drop-in (RAPIDS)
- [[cuGraph]] — GPU-accelerated graph analytics; 48x faster NetworkX drop-in (RAPIDS)
- [[cuVS]] — GPU-accelerated vector search with world-class CAGRA ANN performance (RAPIDS)
- [[cuOpt]] — GPU-accelerated operations research solver for vehicle routing and logistics optimization
- [[NVIDIA-cuOpt-Managed-Service]] — hosted/API-oriented cuOpt service for routing optimization workloads
- [[NeMo-Curator]] — GPU-accelerated multimodal data curation pipelines for LLM training
- [[Morpheus]] — GPU-accelerated AI cybersecurity framework for real-time threat detection
- [[nvComp]] — GPU-accelerated data compression and decompression library (LZ4, Snappy, ZSTD, GDeflate)
- [[GPU-Direct-Storage]] — direct data path from NVMe/network storage to GPU memory bypassing CPU

### Image & Video
- [[NVIDIA-DALI]] — GPU-accelerated data loading and augmentation for deep learning training pipelines
- [[CV-CUDA]] — open-source GPU-accelerated image pre/post-processing for computer vision inference
- [[NPP]] — GPU-accelerated image and signal processing primitives library (5,000+ functions)
- [[NVIDIA-Video-Codec-SDK]] — hardware-accelerated video encode (NVENC) and decode (NVDEC) APIs
- [[NVIDIA-Optical-Flow-SDK]] — hardware-accelerated optical flow computation on Turing/Ampere/Ada GPUs
- [[nvImageCodec]] — unified GPU-accelerated image codec library (JPEG, JPEG2000, TIFF, WebP, PNG)
- [[cuCIM]] — GPU-accelerated image processing with scikit-image compatible API (RAPIDS)
- [[nvJPEG]] — GPU-accelerated JPEG encoding/decoding; batch decode backend for DALI and nvImageCodec
- [[nvJPEG2000]] — CUDA-accelerated JPEG2000 encode/decode library
- [[nvTIFF]] — CUDA-accelerated TIFF encode/decode library

### Parallel Algorithms
- [[Thrust]] — GPU-accelerated C++ STL-compatible parallel algorithms (sort, scan, reduce, transform)
- [[CUB]] — GPU cooperative primitives library: device/block/warp-level sort, scan, reduce, histogram
- [[cuda-parallel]] — Python bindings for CUB/Thrust parallel algorithms with JIT-compiled user operators
- [[NCCL]] — multi-GPU and multi-node collective communications (all-reduce, all-gather, broadcast)
- [[NVSHMEM]] — GPU-cluster PGAS (Partitioned Global Address Space) communication via OpenSHMEM

### Scientific & Physics
- [[NVIDIA-Warp]] — open-source Python framework for GPU-accelerated physics simulation with auto-diff
- [[cuEquivariance]] — GPU-accelerated kernels for equivariant neural networks (drug discovery, materials science)
- [[cuLitho]] — GPU-accelerated computational lithography (OPC, ILT) for semiconductor manufacturing
- [[cuQuantum]] — GPU-accelerated quantum computing simulation (state vector, tensor network, density matrix)
- [[cuStateVec]] — cuQuantum state-vector simulation component for quantum circuit workloads
- [[CUDA-Q]] — hybrid quantum-classical computing platform with GPU simulation and QPU backend support

### Security & Cryptography
- [[cuPQC]] — GPU-accelerated post-quantum cryptography (Kyber, Dilithium, FALCON, SPHINCS+)

### Signal & Electronic Warfare
- [[cuEST]] — GPU-accelerated RF signal processing for electronic warfare and spectrum monitoring

### Development Tools
- [[NVIDIA-CUDA]] — Core NVIDIA GPU computing platform, toolkit, programming model, libraries, and tools
- [[CUDA-Quick-Start-Guide]] — minimal first-steps guide for installing CUDA and verifying a sample application
- [[CUDA-Installation-Guide-Linux]] — full Linux CUDA Toolkit installation guide across package managers, runfile, Conda, pip, and WSL
- [[CUDA-Installation-Guide-Windows]] — full Windows CUDA Toolkit installation guide with Visual Studio and sample verification
- [[CUDA-Programming-Guide]] — core CUDA programming model guide covering kernels, memory, streams, graphs, and runtime behavior
- [[CUDA-Best-Practices-Guide]] — practical CUDA performance guide covering APOD, profiling, memory, precision, and deployment
- [[CUDA-Release-Notes]] — current CUDA Toolkit release notes for component versions, driver requirements, issues, and library updates
- [[NVCC]] — NVIDIA CUDA Compiler Driver; compiles CUDA C/C++ for host and device
- [[CUDA-GDB]] — GNU GDB-based GPU debugger for CUDA applications on Linux and QNX
- [[NVRTC]] — NVIDIA Runtime Compilation library for JIT compilation of CUDA C++ at runtime
- [[nvJitLink]] — CUDA 12 runtime device-code linker for JIT-linking PTX/cubin/LTOIR modules
- [[libNVVM]] — LLVM-based NVVM IR to PTX compiler backend; enables custom GPU language compilers
- [[NVVM-IR]] — LLVM-based intermediate representation for CUDA GPU compiler front ends
- [[libdevice]] — Device-side bitcode library used by CUDA compiler flows for GPU math and utilities
- [[PTX-ISA]] — NVIDIA virtual GPU instruction set used by CUDA compiler and JIT workflows
- [[PTX-Compiler-APIs]] — Toolkit APIs for compiling PTX strings into GPU assembly code
- [[Inline-PTX-Assembly]] — guide for embedding PTX assembly statements inside CUDA C++ source
- [[PTX-Interoperability]] — ABI and interoperability guide for PTX generated by compilers, DSLs, and runtime systems
- [[nvFatbin]] — Runtime CUDA fatbin creation API for packaging cubin, PTX, and LTO-IR variants
- [[CUDA-Binary-Utilities]] — cuobjdump, nvdisasm, cu++filt, and nvprune tools for CUDA binaries
- [[CUDA-Compile-Time-Advisor]] — ctadvisor tool for analyzing and reducing CUDA C++ compile time
- [[CUDA-Demo-Suite]] — CUDA validation demos such as deviceQuery and bandwidthTest for checking GPU/toolkit setup
- [[CUDA-Debugger-API]] — Low-level CUDA debugger integration API
- [[CUDA-Cpp-Standard-Library]] — CUDA-capable C++ standard library facilities in the CCCL stack
- [[CUDA-Runtime-API]] — Higher-level CUDA API for devices, memory, streams, graphs, and launches
- [[CUDA-Driver-API]] — Lower-level CUDA API for contexts, modules, memory, and explicit control
- [[CUDA-Math-API]] — device-side math functions (sin, cos, exp, FP16/BF16 intrinsics) for CUDA kernels
- [[Compute-Sanitizer]] — GPU functional correctness checker (memory, race, init, sync errors)
- [[Nsight-Compute]] — interactive GPU kernel profiler with hardware counters and guided analysis
- [[Nsight-Systems]] — system-wide CPU+GPU performance profiler and timeline visualizer
- [[Nsight-Visual-Studio-Edition]] — Visual Studio integration for CUDA debugging, profiling, and GPU development on Windows
- [[Nsight-Eclipse-Plugins]] — Eclipse plugin path for CUDA Linux IDE development workflows

### Embedded & Edge
- [[cuDLA]] — CUDA API for programming NVIDIA DLA (Deep Learning Accelerator) on Jetson/DRIVE SoCs
- [[CUDA-for-Tegra]] — CUDA guidance for Tegra integrated GPU platforms including Jetson and DRIVE
- [[CUDA-on-WSL]] — CUDA support for Linux GPU development inside Windows Subsystem for Linux 2
- [[CUDA-on-EFLOW]] — CUDA deployment guidance for EFLOW-enabled Windows edge devices running Linux AI containers

### Inference & Data Transfer
- [[NIXL]] — NVIDIA Inference Xfer Library; high-throughput KV cache and tensor transfer for LLM serving
- [[NVIDIA-Dynamo]] — NVIDIA inference-serving platform for local, VM, and Kubernetes deployment paths

---

## NVIDIA Frameworks

### Large Language Models & Speech
- [[NVIDIA-NeMo]] — Modular suite for AI agent lifecycle management, training, microservices, retrieval, and deployment
- [[NeMo-Platform]] — NeMo microservices platform for synthetic data, customization, evaluation, guardrails, and inference
- [[NeMo-Retriever]] — Multimodal extraction, embedding, indexing, retrieval, and reranking microservices for RAG
- [[NVIDIA-Agent-Intelligence-Toolkit]] — Framework-agnostic toolkit for agent workflows, profiling, evaluation, MCP, and A2A
- [[Megatron-LM]] — open-source framework for 3D-parallel LLM pre-training at trillion-parameter scale
- [[TensorRT-LLM]] — LLM inference optimization: continuous batching, paged KV cache, FP8, TP/PP

### Inference Serving
- [[Triton-Inference-Server]] — multi-framework AI model serving platform with dynamic batching and gRPC/REST

### Physics & Scientific AI
- [[NVIDIA-Modulus]] — physics-ML framework for PINNs, neural operators (FNO, DeepONet), CFD surrogates
- [[PhysicsNeMo]] — large-scale geoscience physics-AI training (weather, seismic, reservoir simulation)
- [[Earth-2]] — AI-powered Earth climate digital twin; km-scale weather forecasting with neural operators

### Robotics & Simulation
- [[NVIDIA-Isaac]] — robotics development platform: Isaac Sim, Isaac Lab, Isaac ROS, Isaac Perceptor
- [[NVIDIA-Omniverse]] — OpenUSD-based 3D simulation and digital twin platform with RTX rendering

### Healthcare & Edge AI
- [[NVIDIA-Holoscan]] — real-time AI sensor processing SDK for medical devices and industrial edge computing

---

## Partner / Ecosystem Libraries

### Python GPU Computing
- [[PyTorch]] — CUDA-accelerated deep learning framework backed by cuDNN, cuBLAS, NCCL, and TensorRT export paths
- [[CuPy]] — NumPy/SciPy-compatible GPU array library backed by cuBLAS, cuFFT, cuRAND, cuSPARSE
- [[cuPyNumeric]] — NumPy API implementation on Legate for CPU, GPU, and multi-node scaling
- [[JAX]] — composable function transformations (jit, grad, vmap, pmap) with XLA GPU compilation
- [[TensorFlow-GPU]] — Google's deep learning framework with CUDA/cuDNN/XLA GPU acceleration
- [[Dask]] — Python parallel/distributed computing; scales RAPIDS GPU workflows across multi-GPU clusters
- [[OpenCV-CUDA]] — GPU-accelerated classical computer vision (filters, geometry, feature detection, stereo)

---

---

## Platforms & Products

### AI Cloud & Software Platforms
- [[NGC]] — NVIDIA GPU Cloud: curated hub of GPU-optimized containers, models, Helm charts, and SDKs
- [[NVIDIA-NIM]] — Inference Microservices: production-ready AI inference containers with OpenAI-compatible REST API
- [[NVIDIA-Dynamo]] — NVIDIA inference-serving platform adjacent to NIM and disaggregated serving workflows
- [[NVIDIA-AIStore]] — Distributed storage stack tailored for AI workloads and elastic clusters
- [[NVIDIA-AI-Enterprise]] — End-to-end enterprise AI software suite with SLA support covering the full NVIDIA stack
- [[NVIDIA-AI-Workbench]] — Unified developer environment for GPU projects with one-click environment management and multi-location compute
- [[NVIDIA-Base-Command]] — AI training cluster management platform for DGX systems: job scheduling, dataset versioning, experiment tracking
- [[NVIDIA-Base-Command-Manager]] — Cluster-management platform for provisioning and operating AI data center infrastructure
- [[NVIDIA-BaseOS]] — Validated production operating system layer for DGX and AI factory environments
- [[NVIDIA-DGX-Cloud]] — Cloud-accessible NVIDIA AI supercomputing platform
- [[NVIDIA-Cloud-Functions]] — NVIDIA cloud/API delivery surface for hosted AI functions and services
- [[NVIDIA-API-Documentation]] — public API documentation hub for NVIDIA-hosted model and microservice endpoints
- [[NVIDIA-Brev]] — NVIDIA cloud GPU development environments for prototyping and API experimentation
- [[NVIDIA-Bright-Cluster-Manager]] — NVIDIA Bright cluster-management documentation for HPC and AI infrastructure
- [[NVIDIA-Certification-Programs]] — NVIDIA certification documentation across systems, software, and partner validation programs
- [[NVIDIA-Cloud-Accelerator-NCX]] — cloud accelerator documentation for validated NVIDIA AI infrastructure on cloud partners
- [[NVIDIA-Mission-Control]] - Integrated AI factory management platform for DGX B200/B300 and GB200/GB300 NVL72 environments

### Agent Platforms
- [[NVIDIA-NemoClaw]] — Alpha stack for running OpenClaw assistants with NVIDIA OpenShell and Nemotron models
- [[NVIDIA-OpenShell]] — Secure sandboxed runtime and policy layer for autonomous AI agents

### AI Application Platforms
- [[NVIDIA-AI-Aerial]] — Accelerated AI-RAN platform for 5G/6G wireless network development and simulation
- [[NVIDIA-BioNeMo]] — GPU-accelerated drug discovery and biomolecular AI (protein structure, molecular generation)
- [[NVIDIA-Riva]] — GPU-accelerated real-time speech AI SDK: ASR, TTS, NLU with sub-100ms latency
- [[NVIDIA-Maxine]] — GPU-accelerated audio/video/AR enhancement for video conferencing and media applications
- [[NVIDIA-Capture-SDK]] — capture and stream SDKs for desktop/session capture and NVIDIA media workflows
- [[NVIDIA-CloudXR]] — GPU-accelerated XR streaming platform for remote RTX-rendered spatial experiences
- [[NVIDIA-Cosmos-Curator-LHA]] — Cosmos Curator/LHA documentation for large-scale video analysis and physical AI data curation
- [[NVIDIA-Clara]] — Healthcare AI platform: Parabricks (genomics), MONAI (medical imaging), Clara Guardian (smart hospital)
- [[NVIDIA-Metropolis]] — Intelligent video analytics platform and partner ecosystem for smart cities, retail, and industrial AI
- [[NVIDIA-DeepStream]] — GStreamer-based streaming analytics toolkit for GPU-accelerated multi-stream video AI pipelines

### Hardware Platforms
- [[NVIDIA-DGX]] — Purpose-built AI supercomputing systems: DGX H100, DGX B200, DGX SuperPOD
- [[NVIDIA-DGX-SuperPOD]] — Scale-out NVIDIA AI supercomputing reference architecture for AI factories
- [[NVIDIA-Certified-Systems]] — partner systems validated by NVIDIA for enterprise AI and accelerated computing workloads
- [[NVIDIA-Data-Center-CPUs]] — NVIDIA data center CPU documentation covering Grace, Grace Hopper, and Grace Blackwell systems
- [[NVIDIA-Jetson-Platform]] — Edge AI computing modules for robotics, drones, and intelligent cameras (Jetson Orin family)
- [[NVIDIA-Drive-Platform]] — End-to-end autonomous vehicle platform: DRIVE AGX hardware, DriveWorks SDK, DRIVE Sim
- [[NVIDIA-GB200-NVL72]] — Rack-scale liquid-cooled system: 72 Blackwell GPUs, 36 Grace CPUs, 130 TB/s NVLink, 1,440 PFLOPS FP4
- [[NVIDIA-HGX]] — Multi-GPU baseboard platform (8x SXM) for OEM servers; HGX B200, B300, Rubin NVL8 configurations
- [[NVIDIA-GB200-NVL4]] — Single-server 4x B200 + 2x Grace config; 1.3 TB coherent memory, ~6 kW, OEM ecosystem entry point

---

## GPU Architectures

- [[NVIDIA-Blackwell-Architecture]] — 2024 architecture: FP4 Tensor Cores, NVLink 5 (1.8TB/s), NVL72 rack-scale, NVLink-C2C
- [[NVIDIA-Hopper-Architecture]] — 2022 architecture: Transformer Engine (FP8), NVLink 4 (900GB/s), MIG, Confidential Computing
- [[NVIDIA-Ada-Lovelace-Architecture]] — 2022 architecture for RTX 40/pro visualization GPUs with SER and third-generation RT Cores
- [[NVIDIA-Ampere-Architecture]] — 2020 architecture for A100/A30/A10 and RTX 30-era GPUs with Tensor Core and MIG advances
- [[NVIDIA-Turing-Architecture]] — 2018 architecture that introduced RTX RT Cores, Tensor Cores for graphics, and concurrent INT/FP execution
- [[NVIDIA-Grace-CPU]] — NVIDIA's ARM Neoverse V2 data center CPU; paired with GPUs via NVLink-C2C in GH200/GB200

---

## CUDA Concepts

- [[CUDA-Compatibility]] — Driver/toolkit compatibility rules for CUDA applications in managed deployments
- [[CUDA-Graphs]] — Capture GPU operation sequences as a graph for single-submission replay; eliminates per-kernel CPU launch overhead
- [[CUDA-Unified-Memory]] — Single-pointer CPU+GPU memory with hardware-managed demand paging; GH200 enables coherent access at NVLink bandwidth
- [[CUDA-Streams]] — Sequences of ordered GPU operations enabling concurrent kernel execution and compute/transfer overlap
- [[NVLink]] — NVIDIA's proprietary high-bandwidth GPU interconnect: NVLink 5 delivers 1.8TB/s per GPU on Blackwell
- [[GPUDirect-RDMA]] — Direct NIC↔GPU memory DMA path, bypassing CPU; enables high-performance inter-node GPU communication
- [[Multi-Process-Service]] — MPS: enables concurrent kernel execution from multiple CUDA processes on a single GPU for improved utilization

---

## Infrastructure & DevOps

- [[NVIDIA-Data-Center-GPU-Drivers]] — Data center GPU driver release notes and deployment documentation
- [[NVIDIA-MIG]] — Multi-Instance GPU partitioning for isolated slices of supported data center GPUs
- [[NVIDIA-vGPU]] — Virtual GPU software and CUDA support for GPU-accelerated virtualized environments
- [[NVIDIA-Attestation]] — Attestation suite for confidential computing and platform integrity verification
- [[NVIDIA-Cloud-Native-Technologies]] — NVIDIA cloud-native documentation hub for GPU Operator, Container Toolkit, Kubernetes, and container deployment
- [[NVIDIA-GPU-Operator]] — Kubernetes operator automating NVIDIA driver, Container Toolkit, DCGM, MIG Manager, and device plugin lifecycle
- [[NVIDIA-Container-Toolkit]] — Container runtime hook enabling GPU access from Docker/containerd/Podman without driver bundling in images
- [[NVIDIA-DCGM]] — Data Center GPU Manager: cluster telemetry, health monitoring, diagnostics, and Prometheus metrics for GPU fleets
- [[CUPTI]] — CUDA Profiling Tools Interface: low-level API for hardware counters, activity tracing, and CUDA API callbacks used by Nsight tools
- [[CUPTI-Python]] — Python-facing CUPTI profiling and tracing documentation for CUDA applications
- [[NVBit]] — Open-source binary instrumentation framework for custom GPU analysis tools without source code (NVlabs research tool)

---

## Ecosystem & Partners

### LLM Inference
- [[vLLM]] — Open-source high-throughput LLM serving with PagedAttention and continuous batching; NIM-supported backend
- [[DeepSpeed]] — Microsoft's ZeRO optimizer and LLM training/inference library for multi-GPU, multi-node GPU clusters

### GPU Programming
- [[Triton-GPU-Language]] — OpenAI's Python-based GPU kernel language with block-level programming model; powers torch.compile Inductor

### Distributed Training
- [[Hugging-Face-Accelerate]] — Thin PyTorch abstraction for multi-GPU/multi-node training across DDP, FSDP, and DeepSpeed backends

### Enterprise Data Platforms
- [[NVIDIA-Certified-for-Cloudera]] — NVIDIA-authored Cloudera Data Platform reference/certification guidance built on NVIDIA-Certified Systems

---

## Networking

- [[NVIDIA-ConnectX-InfiniBand]] — NVIDIA ConnectX NICs and Quantum InfiniBand switches powering DGX SuperPODs and HPC clusters (up to 400Gb/s)
- [[NVIDIA-BlueField-DPU]] — Data Processing Unit combining ConnectX NIC with ARM CPU and hardware accelerators for infrastructure offload

---

## NVIDIA Model Families

### Large Language Models
- [[Nemotron]] — NVIDIA's family of aligned LLMs (8B to 340B); Minitron distillation; reward models for synthetic data
- [[NVLM]] — Frontier-class multimodal LLM (72B); dual-path NVLM-D/H/X architecture; competitive with GPT-4V
- [[NVIDIA-EAGLE]] — Efficient multimodal LLMs (EAGLE2); context-aware tiling; synthetic data training pipeline

### Speech & Audio
- [[Parakeet-ASR]] — State-of-the-art English ASR (0.6B–1.1B); FastConformer encoder; CTC/RNN-T/TDT decoding
- [[NVIDIA-Canary]] — Multilingual ASR + speech translation (EN/ES/DE/FR); encoder-decoder; Canary-1B
- [[NVIDIA-Fugatto]] — Generative audio transformer: text-to-audio, voice transformation, compositional sound generation

### Alignment & Control
- [[NVIDIA-SteerLM]] — Inference-time LLM behavior control via multi-attribute conditioning; HelpSteer dataset

### On-Device AI
- [[NVIDIA-ChatRTX]] — Local RAG chatbot for Windows RTX PCs; TensorRT-LLM backend; no cloud required

### Multimodal
- [[NVIDIA-ACE]] — Avatar Cloud Engine: AI microservices for interactive digital humans and NPCs (ASR+LLM+TTS+animation)

### World Models
- [[NVIDIA-Cosmos]] — World foundation model platform for physical AI; video generation for synthetic robotics/AV training data

---

## NVIDIA Research

### Overview
- [[NVIDIA-Research]] — NVIDIA's central research org; 300+ researchers; NeRF, StyleGAN, Instant NGP, Megatron scaling

### Neural Rendering
- [[NVIDIA-NeRF]] — Neural Radiance Fields: novel view synthesis from sparse images; NVIDIA co-invented (ECCV 2020)
- [[NVIDIA-Instant-NGP]] — Instant NGP: multiresolution hash encoding for NeRF training in seconds (SIGGRAPH 2022)

### 3D Generation
- [[NVIDIA-GET3D]] — GAN-based 3D textured mesh generation from 2D image supervision (NeurIPS 2022)

### Image Synthesis
- [[NVIDIA-GauGAN]] — SPADE semantic image synthesis; GauGAN2 multimodal input; powers NVIDIA Canvas app

### Real-Time Rendering
- [[NVIDIA-DLSS]] — AI super-sampling and frame generation: DLSS 4 Multi Frame Generation on Blackwell
- [[NVIDIA-RTX]] — RTX platform: RT Cores, Tensor Cores, SER, OptiX 8; DirectX Raytracing and Vulkan RT

---

## Networking & Scale

### InfiniBand
- [[NVIDIA-Quantum-InfiniBand]] — Quantum-2 NDR 400Gb/s InfiniBand switches with SHARP in-network allreduce
- [[NVIDIA-UFM]] — Unified Fabric Manager: InfiniBand/Ethernet fabric management, monitoring, and routing

### Ethernet AI Networking
- [[NVIDIA-Spectrum-X]] — Spectrum-4 400GbE AI networking platform; Adaptive Routing for lossless Ethernet RDMA

### Collective Communication
- [[NCCL-Algorithms]] — Ring and tree allreduce algorithms, SHARP offload, topology-aware selection in NCCL

---

## Developer Experience

### Programs & Events
- [[NVIDIA-Developer-Program]] — Free developer program: SDK access, NGC, DLI courses, beta programs, forums
- [[NVIDIA-GTC]] — GPU Technology Conference: annual developer/industry event; Jensen keynote; 1,000+ sessions

### Cloud Labs & Catalogs
- [[NVIDIA-LaunchPad]] — Free cloud GPU lab environments for POC evaluation and hands-on developer access
- [[NVIDIA-NGC-Catalog]] — NGC model and container marketplace: 600+ models, NIM integration, monthly-updated containers

---

## Additional CUDA-X / Libraries

### GPU Programming Abstractions
- [[cuTile]] — CUDA Tile IR: hierarchical tile programming model for Blackwell WGMMA/TMA kernel development

### CPU Math (Grace/Arm)
- [[NVPL-FFT]] — NVPL FFT: FFTW3-compatible CPU FFT for NVIDIA Grace (Neoverse V2); SVE-optimized

### Physics Simulation (Advanced)
- [[NVIDIA-Warp-Advanced]] — Warp advanced features: FEM, NanoVDB volumes, differentiable rendering, Isaac Lab integration

### LLM Safety & Optimization
- [[NeMo-Guardrails]] — Programmable LLM safety toolkit; Colang DSL; input/output/dialog/retrieval rails
- [[TensorRT-Model-Optimizer]] — Model quantization and pruning: FP8/INT4/FP4, QAT, PTQ, TRT-LLM export

---

## Projects

*(none yet)*

## Events

*(none yet)*

## Strategies

*(none yet)*
