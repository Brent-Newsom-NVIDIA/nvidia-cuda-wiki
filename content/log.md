# Ingestion Log

---

## 2026-04-29 - Overnight batch 4: Clara healthcare and life sciences documentation expansion

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch4-20260429T054137Z`; local Git tag `codex-backup-overnight-pre-batch4-20260429T054137Z`

**Source URLs:** https://docs.nvidia.com/clara/index.html, https://docs.nvidia.com/clara/latest/index.html, https://docs.nvidia.com/clara-viz/index.html, https://docs.nvidia.com/clara/monai/overview.html, https://docs.nvidia.com/holoscan/index.html, https://docs.nvidia.com/holoscan/sdk-user-guide/index.html, https://docs.nvidia.com/bionemo-framework/latest/index.html

**Gap analysis summary:**

- Expanded Clara from a single broad healthcare page into connected pages for three canonical NVIDIA healthcare/life-sciences surfaces: Parabricks, Clara Viz, and NVIDIA MONAI Toolkit.
- Updated existing Clara, BioNeMo, Holoscan, and AI Enterprise pages with current docs-hub links and cross-connections.
- Kept BioNeMo information consolidated into the existing `NVIDIA-BioNeMo.md` page rather than creating a parallel BioNeMo Framework page.

**Pages created (3 total):**

- `content/wiki/NVIDIA-Parabricks.md`
- `content/wiki/NVIDIA-Clara-Viz.md`
- `content/wiki/NVIDIA-MONAI-Toolkit.md`

**Pages updated:**

- `content/wiki/NVIDIA-Clara.md` - connected Parabricks, Clara Viz, MONAI Toolkit, and current Clara docs hub structure.
- `content/wiki/NVIDIA-Holoscan.md` - refreshed current Holoscan docs context and linked Clara imaging companions.
- `content/wiki/NVIDIA-BioNeMo.md` - linked current BioNeMo framework docs and Parabricks as a Clara life-sciences sibling.
- `content/wiki/NVIDIA-AI-Enterprise.md` - connected MONAI Toolkit to enterprise healthcare AI.
- `content/index.md` - updated page count to 217 and indexed the new Clara pages.

---

## 2026-04-29 - Overnight batch 3: CUDA core guides, PTX compiler docs, cuOpt service, and Cloudera certification reference

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch3-20260429T053624Z`; local Git tag `codex-backup-overnight-pre-batch3-20260429T053624Z`

**Source URLs:** https://docs.nvidia.com/cuda/cuda-quick-start-guide/index.html, https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html, https://docs.nvidia.com/cuda/cuda-installation-guide-microsoft-windows/index.html, https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html, https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/index.html, https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html, https://docs.nvidia.com/cuda/inline-ptx-assembly/index.html, https://docs.nvidia.com/cuda/ptx-writers-guide-to-interoperability/index.html, https://docs.nvidia.com/cuda/tile-ir/latest/index.html, https://docs.nvidia.com/cuopt/service/latest/index.html, https://docs.nvidia.com/cloudera/prod_certified-for-cloudera.html

**Gap analysis summary:**

- Filled remaining current CUDA documentation gaps from the docs hub: quick start, Linux/Windows install guides, programming guide, best-practices guide, release notes, inline PTX assembly, and PTX interoperability.
- Updated the existing `cuTile` page from the current Tile IR docs instead of creating a duplicate Tile IR page.
- Added a separate page for the cuOpt Managed Service because it is a distinct hosted/API workflow from the base cuOpt library page.
- Added NVIDIA Certified for Cloudera as NVIDIA-authored certification/reference material, while noting that the source is older and should be treated as reference architecture material rather than a fast-moving product page.
- Skipped NVIDIA DIGITS for this batch because the docs surface appears older and not aligned with the current/latest-docs rule.

**Pages created (10 total):**

### CUDA setup, programming, and release docs (6)
- `content/wiki/CUDA-Quick-Start-Guide.md`
- `content/wiki/CUDA-Installation-Guide-Linux.md`
- `content/wiki/CUDA-Installation-Guide-Windows.md`
- `content/wiki/CUDA-Programming-Guide.md`
- `content/wiki/CUDA-Best-Practices-Guide.md`
- `content/wiki/CUDA-Release-Notes.md`

### PTX and compiler docs (2)
- `content/wiki/Inline-PTX-Assembly.md`
- `content/wiki/PTX-Interoperability.md`

### Services and partner/reference docs (2)
- `content/wiki/NVIDIA-cuOpt-Managed-Service.md`
- `content/wiki/NVIDIA-Certified-for-Cloudera.md`

**Pages updated:**

- `content/wiki/NVIDIA-CUDA.md` - linked the current CUDA setup, programming, best-practices, and release-note guide pages.
- `content/wiki/NVCC.md` - connected compiler docs to the CUDA programming guide, best-practices guide, inline PTX, and PTX interoperability.
- `content/wiki/PTX-ISA.md` and `content/wiki/PTX-Compiler-APIs.md` - connected PTX ISA and compiler API pages to inline PTX and interoperability guidance.
- `content/wiki/cuTile.md` - refreshed from current Tile IR docs and linked PTX/compiler-adjacent pages.
- `content/wiki/cuOpt.md` - linked the cuOpt Managed Service as the hosted/API counterpart.
- `content/wiki/NVIDIA-Certified-Systems.md` and `content/wiki/NVIDIA-AI-Enterprise.md` - linked NVIDIA Certified for Cloudera as enterprise reference material.
- `content/index.md` - updated page count to 214 and indexed all 10 new pages.

---

## 2026-04-29 - Overnight batch 2: CUDA guides, AI platform docs, cloud-native infrastructure, and architecture coverage

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch-20260429T052306Z`; local Git tag `codex-backup-overnight-pre-batch-20260429T052306Z`

**Source URLs:** https://docs.api.nvidia.com/, https://build.nvidia.com/, https://docs.nvidia.com/llm-inference-quick-start-recipes/index.html, https://developer.nvidia.com/brev, https://docs.nvidia.com/bright-cluster-manager/index.html, https://docs.nvidia.com/base-command-manager/index.html, https://developer.nvidia.com/capture-sdk, https://docs.nvidia.com/nvidia-certification-programs/index.html, https://docs.nvidia.com/certification-programs/latest/nvidia-certified-systems.html, https://www.nvidia.com/en-us/data-center/products/certified-systems/, https://docs.nvidia.com/ncx/index.html, https://docs.nvidia.com/ncx/ncp-software-reference-guide/latest/index.html, https://docs.nvidia.com/datacenter/cloud-native/index.html, https://docs.nvidia.com/cloudxr-sdk/latest/index.html, https://docs.nvidia.com/cloudxr-sdk/latest/overview/overview.html, https://www.nvidia.com/en-us/design-visualization/solutions/cloud-xr/, https://docs.nvidia.com/cosmos-curator-lha/current, https://docs.nvidia.com/cosmos-curator-lha/current/introduction.html, https://docs.nvidia.com/cosmos/index.html, https://docs.nvidia.com/dccpu/index.html, https://docs.nvidia.com/deeplearning/performance/index.html, https://docs.nvidia.com/cuda/demo-suite/index.html, https://docs.nvidia.com/cuda/eflow-users-guide/index.html, https://docs.nvidia.com/nsight-visual-studio-edition/index.html, https://docs.nvidia.com/cuda/nsight-eclipse-plugins-guide/index.html, https://docs.nvidia.com/cuda/nsightee-plugins-install-guide/index.html, https://docs.nvidia.com/cuda/floating-point/index.html, https://docs.nvidia.com/cuda/incomplete-lu-cholesky/index.html, https://docs.nvidia.com/cuda/ampere-compatibility-guide/index.html, https://docs.nvidia.com/cuda/ampere-tuning-guide/index.html, https://docs.nvidia.com/cuda/ada-compatibility-guide/index.html, https://docs.nvidia.com/cuda/ada-tuning-guide/index.html, https://docs.nvidia.com/cuda/turing-compatibility-guide/index.html, https://docs.nvidia.com/cuda/turing-tuning-guide/index.html

**Gap analysis summary:**

- Continued the current-docs pass across NVIDIA-authored public documentation, focusing on missing CUDA guide pages, architecture guide pages, AI platform docs, cloud-native infrastructure docs, certification docs, and media/XR SDK docs.
- Treated `build.nvidia.com` as a discovery/API surface rather than a per-build page source; no duplicate pages were created for model/build variants.
- Kept one page per canonical NVIDIA doc/topic, and consolidated related material into existing pages where a topic already existed.

**Pages created (22 total):**

### API, AI platform, and infrastructure docs (8)
- `content/wiki/NVIDIA-API-Documentation.md`
- `content/wiki/NVIDIA-Brev.md`
- `content/wiki/NVIDIA-Bright-Cluster-Manager.md`
- `content/wiki/NVIDIA-Certification-Programs.md`
- `content/wiki/NVIDIA-Certified-Systems.md`
- `content/wiki/NVIDIA-Cloud-Accelerator-NCX.md`
- `content/wiki/NVIDIA-Cloud-Native-Technologies.md`
- `content/wiki/NVIDIA-Data-Center-CPUs.md`

### Inference and performance guides (2)
- `content/wiki/LLM-Inference-Quick-Start-Recipes.md`
- `content/wiki/NVIDIA-Deep-Learning-Performance.md`

### Media, XR, and Cosmos docs (3)
- `content/wiki/NVIDIA-Capture-SDK.md`
- `content/wiki/NVIDIA-CloudXR.md`
- `content/wiki/NVIDIA-Cosmos-Curator-LHA.md`

### CUDA guides, tools, and architecture docs (9)
- `content/wiki/CUDA-Demo-Suite.md`
- `content/wiki/CUDA-on-EFLOW.md`
- `content/wiki/Nsight-Visual-Studio-Edition.md`
- `content/wiki/Nsight-Eclipse-Plugins.md`
- `content/wiki/Floating-Point-and-IEEE-754.md`
- `content/wiki/Incomplete-LU-Cholesky.md`
- `content/wiki/NVIDIA-Ampere-Architecture.md`
- `content/wiki/NVIDIA-Ada-Lovelace-Architecture.md`
- `content/wiki/NVIDIA-Turing-Architecture.md`

**Pages updated:**

- `content/wiki/NVIDIA-CUDA.md` - linked CUDA Demo Suite, EFLOW, floating-point guidance, and Ampere/Ada/Turing architecture guidance.
- `content/wiki/NVIDIA-DGX.md` - connected DGX to Bright Cluster Manager, Certified Systems, Data Center CPUs, and NCX.
- `content/wiki/NVIDIA-AI-Enterprise.md` - connected API docs, LLM inference recipes, certified systems, and cloud-native deployment docs.
- `content/wiki/NVIDIA-NIM.md` - linked API docs, LLM inference recipes, Brev, and NCX while preserving the no-per-build-page policy.
- `content/wiki/NVIDIA-Base-Command-Manager.md` - linked Bright Cluster Manager as adjacent cluster-management documentation.
- `content/wiki/NVIDIA-Cosmos.md` - connected Cosmos Curator/LHA to the existing Cosmos platform page.
- `content/wiki/NVIDIA-Grace-CPU.md` - linked Data Center CPUs as the current NVIDIA docs hub for Grace-related CPU systems.
- `content/wiki/NVIDIA-GPU-Operator.md` and `content/wiki/NVIDIA-Container-Toolkit.md` - linked the cloud-native docs hub.
- `content/wiki/NVIDIA-RTX.md` and `content/wiki/NVIDIA-Maxine.md` - linked Capture SDK and CloudXR into RTX/media workflows.
- `content/wiki/cuBLAS.md`, `content/wiki/cuSPARSE.md`, `content/wiki/cuSOLVER.md`, and `content/wiki/AmgX.md` - linked iterative solver/preconditioning guidance.
- `content/wiki/NVCC.md`, `content/wiki/CUDA-Math-API.md`, and `content/wiki/cuFFT.md` - linked floating-point numerical guidance.
- `content/wiki/Nsight-Compute.md`, `content/wiki/Nsight-Systems.md`, and `content/wiki/CUDA-GDB.md` - linked Nsight Visual Studio Edition and Nsight Eclipse plugin paths.
- `content/index.md` - updated page count to 204 and added all 22 new pages to the master index.

---

## 2026-04-29 - Gap analysis and first broad NVIDIA docs/build expansion

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/pre-expansion-20260429T042416Z`; local Git tag `codex-backup-pre-expansion-20260429T042416Z`

**Source URLs:** https://docs.nvidia.com/, https://docs.nvidia.com/cuda/, https://docs.nvidia.com/cuda/doc/index.html, https://docs.nvidia.com/nim/index.html, https://docs.nvidia.com/nemo/index.html, https://docs.nvidia.com/nemo/microservices/latest/index.html, https://docs.nvidia.com/nemo/retriever/latest/index.html, https://docs.nvidia.com/nemo/agent-toolkit/latest/index.html, https://build.nvidia.com/models, https://docs.nvidia.com/dynamo/index.html, https://docs.nvidia.com/aistore, https://docs.nvidia.com/nemoclaw/index.html, https://docs.nvidia.com/openshell/index.html, https://docs.nvidia.com/aerial/index.html, https://docs.nvidia.com/ai-grid/index.html, https://docs.nvidia.com/attestation/index.html, https://docs.nvidia.com/base-command-manager/index.html, https://docs.nvidia.com/baseos/index.html, https://docs.nvidia.com/dgx-cloud/index.html, https://docs.nvidia.com/dgx-superpod/index.html, https://docs.nvidia.com/datacenter/tesla/index.html, https://docs.nvidia.com/cloud-functions/index.html, https://docs.nvidia.com/cupti-python/, https://docs.nvidia.com/cupynumeric/latest/

**Gap analysis summary:**

- Checked all current `content/wiki/*.md` pages against NVIDIA Docs Hub, CUDA 13.2 documentation, build.nvidia.com model catalog, and newly surfaced NVIDIA platform docs.
- Prioritized latest/current NVIDIA-authored public docs and avoided creating duplicate topic pages when an existing topic page should absorb new material.
- Identified major missing clusters: CUDA compiler/runtime/API references, device/distributed CUDA-X libraries, image codecs, CUDA deployment contexts, NeMo agent lifecycle components, NVIDIA agent runtime/sandboxing, AI factory storage/OS/cluster management, DGX Cloud/SuperPOD, and current Nemotron/NIM model catalog updates.

**Pages created (42 total):**

### CUDA platform, APIs, compiler SDK, and deployment (14)
- `content/wiki/NVIDIA-CUDA.md`
- `content/wiki/CUDA-Runtime-API.md`
- `content/wiki/CUDA-Driver-API.md`
- `content/wiki/CUDA-Compatibility.md`
- `content/wiki/PTX-ISA.md`
- `content/wiki/CUDA-Cpp-Standard-Library.md`
- `content/wiki/nvFatbin.md`
- `content/wiki/PTX-Compiler-APIs.md`
- `content/wiki/CUDA-Binary-Utilities.md`
- `content/wiki/CUDA-Compile-Time-Advisor.md`
- `content/wiki/CUDA-Debugger-API.md`
- `content/wiki/libdevice.md`
- `content/wiki/NVVM-IR.md`
- `content/wiki/CUDA-on-WSL.md`

### CUDA-X libraries and codecs (10)
- `content/wiki/cuFFTDx.md`
- `content/wiki/cuBLASDx.md`
- `content/wiki/cuBLASMp.md`
- `content/wiki/cuSOLVERMp.md`
- `content/wiki/cuSPARSELt.md`
- `content/wiki/nvJPEG2000.md`
- `content/wiki/nvTIFF.md`
- `content/wiki/CUDA-for-Tegra.md`
- `content/wiki/CUPTI-Python.md`
- `content/wiki/cuPyNumeric.md`

### Infrastructure, platform, and AI factory docs (10)
- `content/wiki/NVIDIA-Dynamo.md`
- `content/wiki/NVIDIA-AIStore.md`
- `content/wiki/NVIDIA-AI-Grid.md`
- `content/wiki/NVIDIA-Attestation.md`
- `content/wiki/NVIDIA-Base-Command-Manager.md`
- `content/wiki/NVIDIA-BaseOS.md`
- `content/wiki/NVIDIA-DGX-Cloud.md`
- `content/wiki/NVIDIA-DGX-SuperPOD.md`
- `content/wiki/NVIDIA-Data-Center-GPU-Drivers.md`
- `content/wiki/NVIDIA-Cloud-Functions.md`

### Agents, NeMo, and virtualization (8)
- `content/wiki/NVIDIA-NemoClaw.md`
- `content/wiki/NVIDIA-OpenShell.md`
- `content/wiki/NVIDIA-Agent-Intelligence-Toolkit.md`
- `content/wiki/NVIDIA-AI-Aerial.md`
- `content/wiki/NeMo-Platform.md`
- `content/wiki/NeMo-Retriever.md`
- `content/wiki/NVIDIA-MIG.md`
- `content/wiki/NVIDIA-vGPU.md`

**Pages updated:**

- `content/wiki/NVIDIA-NIM.md` - refreshed from current NIM docs and build.nvidia.com model catalog; linked Dynamo, NeMo Platform, NeMo Retriever, NIXL, and Nemotron.
- `content/wiki/NVIDIA-NeMo.md` - reframed from framework-only to current NeMo lifecycle suite covering microservices, framework, Retriever, Guardrails, Agent Toolkit, and deployment.
- `content/wiki/Nemotron.md` - updated from current build.nvidia.com Nemotron model cards, including Nemotron 3, content safety, ASR, OCR/document, retrieval, and multimodal directions.
- `content/wiki/NVIDIA-DGX.md` - connected DGX Cloud, DGX SuperPOD, BaseOS, Base Command Manager, and MIG.
- `content/wiki/NVIDIA-AI-Enterprise.md` - connected NeMo Platform, Retriever, Agent Toolkit, MIG, vGPU, and Attestation.
- `content/wiki/NGC.md` - connected NGC with NIM, Nemotron, NeMo Platform, and Dynamo.
- `content/wiki/NVIDIA-Base-Command.md` - clarified links to Base Command Manager, DGX Cloud, DGX SuperPOD, and BaseOS.
- `content/wiki/NVIDIA-Blackwell-Architecture.md` - connected CUDA compatibility, DGX SuperPOD, MIG, and Attestation.
- `content/wiki/NVCC.md` - connected PTX, NVVM IR, libdevice, nvFatbin, binary utilities, and compile-time advisor.
- `content/wiki/cuBLAS.md`, `content/wiki/cuFFT.md`, `content/wiki/cuSPARSE.md` - linked new Dx/Mp/structured-sparsity companion pages.
- `content/index.md` - updated page count to 182, added all 42 new pages, and fixed pre-existing missing index entries for `PyTorch` and `cuStateVec`.

---

## 2026-04-28 - Ingested NVIDIA Mission Control docs into a consolidated wiki page

**Source URLs:** https://docs.nvidia.com/mission-control/index.html, https://docs.nvidia.com/mission-control/docs/systems-quick-start-guide/2.3.0/index.html, https://docs.nvidia.com/mission-control/docs/systems-quick-start-guide/2.3.0/nmc-release-notes.html, https://docs.nvidia.com/mission-control/docs/systems-administration-guide/2.2.0/overview.html, https://docs.nvidia.com/mission-control/docs/systems-administration-guide/2.3.0/nvlink-management-software.html, https://docs.nvidia.com/mission-control/docs/systems-quick-start-guide/2.3.0/nmc-user-guide-runai-installation.html, https://docs.nvidia.com/mission-control/docs/systems-quick-start-guide/2.0.0/ajr/ajr-overview.html, https://docs.nvidia.com/mission-control/docs/systems-administration-guide/2.1.0/prs/introduction.html

**Pages created (1 total):**

- `content/wiki/NVIDIA-Mission-Control.md` - consolidated Mission Control page covering platform role, built-in workload management, observability, resiliency, and power-aware operations

**Pages updated:**

- `content/index.md` - added Mission Control under AI Cloud & Software Platforms and refreshed page count/date

---

## 2026-04-10 — NVL72, HGX added; NVL4 investigated

- Added `NVIDIA-GB200-NVL72.md` — live fetch from nvidia.com/en-us/data-center/gb200-nvl72/
- Added `NVIDIA-HGX.md` — live fetch from nvidia.com/en-us/data-center/hgx/
- Added `NVIDIA-GB200-NVL4.md` — sourced from ServeTheHome, Tweaktown, Tom's Hardware, VideoCardz (Nov 2024 announcement coverage). No official nvidia.com product page exists yet; OEM availability H2 2025.
- Updated index.md Hardware Platforms section

---

## 2026-04-09 — Wiki initialized

- Created folder structure: `raw/`, `wiki/`
- Created `CLAUDE.md`, `index.md`, `log.md`
- Pages created: 0
- Ready for first source ingestion.

---

## 2026-04-09 — Ingested 43 NVIDIA CUDA-X library pages from official NVIDIA documentation

**Source URLs:** NVIDIA Developer Portal (developer.nvidia.com), GitHub (github.com/NVIDIA), flashinfer.ai, docs.nvidia.com/cuda

**Pages created (43 total):**

### Math & Linear Algebra (9 pages)
- `wiki/cuBLAS.md` — GPU-accelerated BLAS; 152 routines, Tensor Core GEMM, multi-GPU variants
- `wiki/cuFFT.md` — GPU-accelerated FFT; 1D/2D/3D, cuFFTMp multi-node, cuFFTDx in-kernel
- `wiki/cuRAND.md` — GPU-accelerated random number generation; MRG32k3a, Mersenne Twister, Sobol'
- `wiki/cuSOLVER.md` — GPU-accelerated dense/sparse linear solvers and eigensolvers
- `wiki/cuSPARSE.md` — GPU-accelerated sparse linear algebra; 30-150x faster SpMM vs CPU
- `wiki/cuTENSOR.md` — GPU-accelerated tensor contraction/reduction; arbitrary dimensionality, Tensor Cores
- `wiki/cuDSS.md` — GPU-accelerated direct sparse solver; Pascal+ GPUs, Grace Hopper optimized
- `wiki/AmgX.md` — Open-source GPU multigrid/Krylov solver; up to 10x acceleration
- `wiki/nvmath-python.md` — Python interface to CUDA-X math libraries; NumPy/CuPy/PyTorch compatible

### Deep Learning (4 pages)
- `wiki/cuDNN.md` — GPU-accelerated DNN primitives; powers PyTorch, TensorFlow, JAX, MXNet
- `wiki/TensorRT.md` — Inference compiler/runtime/optimizer; 36x vs CPU, TensorRT-LLM for LLMs
- `wiki/CUTLASS.md` — Open-source C++ GEMM template library; Volta through Blackwell
- `wiki/FlashInfer.md` — Open-source LLM inference kernels; attention, batch decode, sampling

### Data Processing & ML (9 pages)
- `wiki/cuDF.md` — GPU DataFrame library; 50x faster pandas drop-in (RAPIDS)
- `wiki/cuML.md` — GPU ML library; 50x faster scikit-learn drop-in (RAPIDS)
- `wiki/cuGraph.md` — GPU graph analytics; 48x faster NetworkX drop-in (RAPIDS)
- `wiki/cuVS.md` — GPU vector search; CAGRA ANN algorithm (RAPIDS)
- `wiki/cuOpt.md` — GPU operations research; vehicle routing and logistics optimization
- `wiki/NeMo-Curator.md` — GPU multimodal data curation for LLM training pipelines
- `wiki/Morpheus.md` — GPU AI cybersecurity framework; digital fingerprinting, phishing detection
- `wiki/nvComp.md` — GPU compression/decompression; LZ4, Snappy, ZSTD, GDeflate, Bitcomp
- `wiki/GPU-Direct-Storage.md` — Direct NVMe-to-GPU data path; eliminates CPU copy bottleneck

### Image & Video (7 pages)
- `wiki/NVIDIA-DALI.md` — GPU data loading/augmentation for DL training; PyTorch/TF/MXNet drop-in
- `wiki/CV-CUDA.md` — Open-source GPU image pre/post-processing; 49x throughput vs CPU baseline
- `wiki/NPP.md` — GPU image/signal processing primitives; 5,000+ functions, 30x faster than CPU
- `wiki/NVIDIA-Video-Codec-SDK.md` — Hardware video encode (NVENC) / decode (NVDEC); AV1, H.265, H.264
- `wiki/NVIDIA-Optical-Flow-SDK.md` — Hardware optical flow on Turing/Ampere/Ada; 80% GPU util reduction
- `wiki/nvImageCodec.md` — Unified GPU image codec; JPEG, JPEG2000, TIFF, WebP, PNG, BMP
- `wiki/cuCIM.md` — GPU scikit-image compatible image processing; WSI/digital pathology (RAPIDS)

### Parallel Algorithms (4 pages)
- `wiki/Thrust.md` — GPU STL-compatible parallel algorithms; 5-100x faster sort vs STL/TBB
- `wiki/CUB.md` — GPU cooperative primitives; device/block/warp-level sort, scan, reduce, histogram
- `wiki/NCCL.md` — Multi-GPU collective communications; all-reduce, all-gather, NVLink/IB/RoCE
- `wiki/NVSHMEM.md` — GPU cluster PGAS communication via OpenSHMEM; GPU-initiated one-sided ops

### Scientific & Physics (4 pages)
- `wiki/NVIDIA-Warp.md` — GPU physics simulation Python framework; JIT-compiled, differentiable
- `wiki/cuEquivariance.md` — GPU equivariant NN kernels; 10x MACE, 200x symmetric contractions
- `wiki/cuLitho.md` — GPU computational lithography; 40x ILT speedup, TSMC/ASML/Synopsys adoption
- `wiki/cuQuantum.md` — GPU quantum simulation SDK; state vector, tensor network, density matrix

### Development Tools (6 pages)
- `wiki/NVCC.md` — NVIDIA CUDA Compiler Driver; compiles .cu files for host + device
- `wiki/CUDA-GDB.md` — GNU GDB-based CUDA debugger; breakpoints inside GPU kernels
- `wiki/NVRTC.md` — CUDA runtime compilation library; JIT compilation of CUDA C++ strings
- `wiki/Compute-Sanitizer.md` — GPU correctness checker; Memcheck, Racecheck, Initcheck, Synccheck
- `wiki/Nsight-Compute.md` — GPU kernel profiler; hardware counters, roofline, guided analysis
- `wiki/Nsight-Systems.md` — System-wide CPU+GPU profiler; timeline, NCCL traces, framework annotations

**index.md updated:** Yes — all 43 pages listed under 7 categories

---

## 2026-04-09 — Batch 2: Ingested 28 additional NVIDIA framework and ecosystem library pages

**Source URLs:** pytorch.org, developer.nvidia.com, github.com/NVIDIA, docs.nvidia.com/cuda, cupy.dev, jax.readthedocs.io, tensorflow.org, docs.dask.org, opencv.org, nvidia.github.io/cccl

**Pages created (28 total):**

### NVIDIA Frameworks (8 pages)
- `wiki/PyTorch.md` — CUDA-accelerated deep learning framework; cuDNN/cuBLAS/NCCL backed, torch.compile, AMP
- `wiki/NVIDIA-NeMo.md` — LLM/speech pre-training and fine-tuning framework; SFT, RLHF, DPO, Megatron-LM core
- `wiki/Triton-Inference-Server.md` — multi-framework production inference server; dynamic batching, gRPC/REST
- `wiki/Megatron-LM.md` — 3D-parallel LLM pre-training at trillion-parameter scale; tensor/pipeline/data parallelism
- `wiki/NVIDIA-Modulus.md` — physics-ML framework for PINNs, FNO, DeepONet; CFD/heat/structural surrogates
- `wiki/NVIDIA-Holoscan.md` — real-time AI sensor processing SDK; medical imaging, surgical AI, industrial edge
- `wiki/NVIDIA-Isaac.md` — robotics platform: Isaac Sim, Isaac Lab, Isaac ROS, Isaac Perceptor, Isaac Manipulator
- `wiki/NVIDIA-Omniverse.md` — OpenUSD-based 3D simulation and digital twin platform with RTX rendering

### Partner / Ecosystem Libraries (5 pages)
- `wiki/CuPy.md` — NumPy/SciPy-compatible GPU array library; wraps cuBLAS, cuFFT, cuRAND, cuSPARSE
- `wiki/JAX.md` — composable GPU function transforms (jit, grad, vmap, pmap) via XLA compiler
- `wiki/TensorFlow-GPU.md` — Google deep learning framework with CUDA/cuDNN/XLA/NCCL GPU support
- `wiki/Dask.md` — Python distributed computing; scales RAPIDS GPU workflows across multi-GPU clusters
- `wiki/OpenCV-CUDA.md` — GPU-accelerated classical CV; filters, geometry, feature detection, video codec

### Missing CUDA-X Libraries (15 pages)
- `wiki/PhysicsNeMo.md` — geoscience physics-AI training; SFNO, FourCastNet, seismic, reservoir simulation
- `wiki/Earth-2.md` — AI climate digital twin; CorrDiff downscaling, ensemble NWP, Earth-2 Studio SDK
- `wiki/cuPQC.md` — GPU-accelerated post-quantum cryptography: Kyber, Dilithium, FALCON, SPHINCS+
- `wiki/CUDA-Q.md` — hybrid quantum-classical platform; cuQuantum simulation, QPU backends, MLIR compiler
- `wiki/NIXL.md` — inference transfer library for disaggregated LLM KV cache; UCX/NVLink/NVMe backends
- `wiki/cuEST.md` — GPU RF signal processing for EW/SIGINT; spectrum sensing, PDW extraction, DOA estimation
- `wiki/cuDLA.md` — CUDA API for DLA deep learning accelerator on Jetson/DRIVE SoCs
- `wiki/nvJPEG.md` — GPU JPEG encode/decode; batch decode backend for DALI; nvJPEG2000 variant
- `wiki/NVBLAS.md` — drop-in Level 3 BLAS shim; GPU-enables legacy apps via LD_PRELOAD with zero code changes
- `wiki/nvJitLink.md` — CUDA 12 runtime device-code linker for PTX/LTOIR/cubin JIT linking
- `wiki/libNVVM.md` — NVVM IR to PTX compiler backend; enables custom GPU language compilers
- `wiki/CUDA-Math-API.md` — device-side math functions (sin, cos, exp, FP16/BF16 intrinsics) for CUDA kernels
- `wiki/NVPL.md` — CPU math libraries (BLAS, LAPACK, FFT, RAND) optimized for NVIDIA Grace/Arm Neoverse V2
- `wiki/cuda-parallel.md` — Python bindings for CUB/Thrust algorithms; JIT-compiled user operators via NVRTC
- `wiki/TensorRT-LLM.md` — LLM inference optimization: continuous batching, paged KV cache, FP8, TP/PP, LoRA

**index.md updated:** Yes — 28 new pages added across 3 new top-level sections (NVIDIA Frameworks, Partner/Ecosystem Libraries) and expanded Technologies section with new categories (Security, Signal/EW, Embedded/Edge, Inference/Transfer)

---

## 2026-04-10 — Batch 3: Ingested 34 additional pages covering NVIDIA platforms, GPU architectures, CUDA concepts, infrastructure tools, and ecosystem libraries.

**Source URLs:** catalog.ngc.nvidia.com, developer.nvidia.com, nvidia.com, docs.nvidia.com, triton-lang.org, deepspeed.ai, docs.vllm.ai, huggingface.co, github.com/NVlabs

**Pages created (34 total):**

### Platforms & Products (11 pages)
- `wiki/NGC.md` — NVIDIA GPU Cloud: container registry, model catalog, Helm charts, CLI; monthly-updated GPU-optimized containers
- `wiki/NVIDIA-NIM.md` — Inference Microservices: OpenAI-compatible REST API containers; TensorRT-LLM/vLLM backends; 1-click LLM deployment
- `wiki/NVIDIA-AI-Enterprise.md` — Enterprise AI software suite with 24/7 SLA support, CVE management, LTS releases, NGC delivery
- `wiki/NVIDIA-BioNeMo.md` — Drug discovery AI platform: ESMFold, DiffDock, protein LMs, molecular generation; NIM integration
- `wiki/NVIDIA-Riva.md` — Real-time speech AI SDK: ASR (Conformer), TTS (FastPitch+HiFiGAN), NLU; gRPC streaming API; <100ms latency
- `wiki/NVIDIA-Maxine.md` — Audio/video/AR AI SDKs for conferencing: noise removal, background removal, gaze correction
- `wiki/NVIDIA-Clara.md` — Healthcare AI: Parabricks genomics (30x WGS speedup), MONAI medical imaging, Clara Guardian edge AI
- `wiki/NVIDIA-Metropolis.md` — IVA platform + 700+ partner ecosystem; microservices for people counting, LPR, safety compliance
- `wiki/NVIDIA-DeepStream.md` — GStreamer-based multi-stream video analytics toolkit; 100+ streams per GPU; TensorRT+Triton integration
- `wiki/NVIDIA-AI-Workbench.md` — Developer IDE for GPU projects; one-click container envs; multi-location compute (local→cloud)
- `wiki/NVIDIA-Base-Command.md` — DGX cluster MLOps: job scheduling, dataset versioning, experiment tracking, multi-tenant RBAC

### Hardware Platforms (3 pages)
- `wiki/NVIDIA-DGX.md` — AI supercomputing systems: DGX H100 (8x H100), DGX B200 (8x B200), DGX SuperPOD; NVSwitch mesh
- `wiki/NVIDIA-Jetson-Platform.md` — Edge AI SOM modules: Jetson AGX Orin (275 TOPS), Orin NX, Orin Nano; JetPack SDK; DeepStream+Isaac ROS
- `wiki/NVIDIA-Drive-Platform.md` — Autonomous vehicle platform: DRIVE AGX Orin/Thor, DriveWorks SDK, DRIVE Sim (Omniverse-based)

### GPU Architectures (3 pages)
- `wiki/NVIDIA-Blackwell-Architecture.md` — 2024 arch: FP4 Tensor Cores, NVLink 5 (1.8TB/s), NVSwitch 4, NVL72 (72 GPUs), NVLink-C2C; B100/B200/GB200
- `wiki/NVIDIA-Hopper-Architecture.md` — 2022 arch: 1st-gen Transformer Engine (FP8), NVLink 4 (900GB/s), MIG, DPX instructions; H100/H200
- `wiki/NVIDIA-Grace-CPU.md` — ARM Neoverse V2 data center CPU; 72 cores; 512GB/s LPDDR5X; NVLink-C2C to GPU (GH200/GB200)

### CUDA Concepts (6 pages)
- `wiki/CUDA-Graphs.md` — Graph-captured GPU workflows for single-submission replay; 30-50% inference latency reduction
- `wiki/CUDA-Unified-Memory.md` — Demand-paging unified CPU+GPU memory; GH200 coherent access at NVLink bandwidth
- `wiki/CUDA-Streams.md` — Ordered GPU operation queues enabling concurrent kernel execution and compute/transfer overlap
- `wiki/NVLink.md` — NVIDIA GPU interconnect: 5 generations from 160GB/s (P100) to 1.8TB/s (B200); NVSwitch full-mesh
- `wiki/GPUDirect-RDMA.md` — Direct NIC↔GPU DMA path; zero CPU copy for inter-node collective communications
- `wiki/Multi-Process-Service.md` — MPS: multi-process GPU sharing with concurrent SM execution; improves utilization for under-saturated workloads

### Infrastructure & DevOps (5 pages)
- `wiki/NVIDIA-GPU-Operator.md` — Kubernetes operator managing full NVIDIA GPU software stack: driver, CTK, DCGM, MIG Manager
- `wiki/NVIDIA-Container-Toolkit.md` — nvidia-container-runtime: GPU access in Docker/containerd without driver bundling in images
- `wiki/NVIDIA-DCGM.md` — Data Center GPU Manager: telemetry, health monitoring, diagnostics, Prometheus exporter for GPU clusters
- `wiki/CUPTI.md` — CUDA Profiling Tools Interface: hardware counters, activity tracing, API callbacks; Nsight tools built on CUPTI
- `wiki/NVBit.md` — Binary instrumentation framework for custom GPU analysis tools; PTX injection without source code

### Ecosystem & Partners (4 pages)
- `wiki/vLLM.md` — High-throughput LLM serving: PagedAttention, continuous batching, OpenAI API, multi-LoRA; NIM backend
- `wiki/DeepSpeed.md` — Microsoft ZeRO optimizer (3 stages + Infinity); MoE, pipeline parallelism; trillion-parameter training
- `wiki/Triton-GPU-Language.md` — OpenAI Python GPU kernel DSL; block-level programming; powers torch.compile Inductor fusion
- `wiki/Hugging-Face-Accelerate.md` — PyTorch distributed training abstraction over DDP/FSDP/DeepSpeed; HF Trainer backbone

### Networking (2 pages)
- `wiki/NVIDIA-ConnectX-InfiniBand.md` — ConnectX NICs + Quantum switches: up to NDR 400Gb/s; SHARP in-network all-reduce; DGX networking
- `wiki/NVIDIA-BlueField-DPU.md` — DPU: ConnectX NIC + ARM CPU + crypto/compress accelerators; zero-trust networking and storage offload

**index.md updated:** Yes — 6 new sections added (Platforms & Products, GPU Architectures, CUDA Concepts, Infrastructure & DevOps, Ecosystem & Partners, Networking); total page count updated to 105

---

## 2026-04-10 — Batch 4: Added 30 new pages covering NVIDIA model families, research, networking, and developer ecosystem. Also refreshed 34 batch 3 pages with live data (parallel agent).

**Source URLs:** developer.nvidia.com, nvidia.com, research.nvidia.com, github.com/NVlabs, github.com/NVIDIA, blogs.nvidia.com

**Pages created (30 total):**

### NVIDIA Model Families (10 pages)
- `wiki/Nemotron.md` — NVIDIA LLM family (3B–340B); Minitron distillation; SteerLM-aligned instruct/reward models
- `wiki/NVIDIA-Cosmos.md` — World foundation model platform: text/image-to-video generation for physical AI training data
- `wiki/Parakeet-ASR.md` — State-of-the-art English ASR; FastConformer; CTC/RNN-T/TDT; 0.6B–1.1B models
- `wiki/NVIDIA-Canary.md` — Multilingual ASR+translation (EN/ES/DE/FR); Canary-1B; encoder-decoder architecture
- `wiki/NVLM.md` — Frontier multimodal LLM (72B); NVLM-D/H/X dual-path architecture; OCR, DocVQA, MathVista
- `wiki/NVIDIA-ChatRTX.md` — Local on-device RAG chatbot for Windows RTX PCs; TensorRT-LLM + CLIP multimodal search
- `wiki/NVIDIA-Fugatto.md` — Generative audio transformer: compositional text-to-audio, voice transformation, music gen
- `wiki/NVIDIA-ACE.md` — Avatar Cloud Engine: ASR+LLM+TTS+Audio2Face microservices for interactive NPC/digital humans
- `wiki/NVIDIA-EAGLE.md` — EAGLE2 competitive multimodal LLMs; context-aware tiling; synthetic data pipeline
- `wiki/NVIDIA-SteerLM.md` — Inference-time LLM behavior steering via multi-attribute conditioning; HelpSteer2 dataset

### NVIDIA Research (7 pages)
- `wiki/NVIDIA-Research.md` — NVIDIA Research overview: 300+ researchers, Toronto/Seattle/Santa Clara labs, NVlabs
- `wiki/NVIDIA-NeRF.md` — Neural Radiance Fields: NVIDIA co-invented (ECCV 2020); novel view synthesis from photos
- `wiki/NVIDIA-Instant-NGP.md` — Instant NGP: hash encoding, NeRF in seconds, real-time rendering (SIGGRAPH 2022)
- `wiki/NVIDIA-GET3D.md` — GET3D: GAN-based 3D textured mesh generation from 2D images (NeurIPS 2022)
- `wiki/NVIDIA-GauGAN.md` — GauGAN/SPADE semantic image synthesis; GauGAN2; NVIDIA Canvas free app
- `wiki/NVIDIA-DLSS.md` — DLSS suite: Super Resolution, Frame Generation, Ray Reconstruction, DLSS 4 Multi Frame Gen
- `wiki/NVIDIA-RTX.md` — RTX platform: RT Cores, Tensor Cores, SER, DMM, Neural Shaders; DXR/Vulkan/OptiX

### Networking & Scale (4 pages)
- `wiki/NVIDIA-Quantum-InfiniBand.md` — Quantum-2 NDR 400Gb/s IB switches; SHARP in-network allreduce; DGX backbone
- `wiki/NVIDIA-Spectrum-X.md` — Spectrum-4 400GbE AI networking; Adaptive Routing; RoCEv2 lossless for NCCL
- `wiki/NVIDIA-UFM.md` — Unified Fabric Manager: IB/Ethernet fabric management, routing, telemetry, job isolation
- `wiki/NCCL-Algorithms.md` — Ring/tree allreduce algorithms, SHARP offload, topology-aware selection, NVLink/IB interaction

### Developer Experience (4 pages)
- `wiki/NVIDIA-Developer-Program.md` — Free developer membership: SDK downloads, NGC access, DLI courses, beta programs
- `wiki/NVIDIA-LaunchPad.md` — Free cloud GPU lab environments on DGX H100 for POC evaluation and demos
- `wiki/NVIDIA-NGC-Catalog.md` — NGC model+container marketplace: 600+ models, NIM integration, monthly container updates
- `wiki/NVIDIA-GTC.md` — GPU Technology Conference: Jensen keynote venue, 1,000+ sessions, major product launches

### Additional CUDA-X / Missing Libraries (5 pages)
- `wiki/cuTile.md` — CUDA Tile IR: hierarchical tile programming model for Blackwell WGMMA/TMA kernel generation
- `wiki/NVPL-FFT.md` — NVPL FFT: FFTW3-compatible CPU FFT optimized for NVIDIA Grace (Neoverse V2 SVE)
- `wiki/NVIDIA-Warp-Advanced.md` — Warp advanced: FEM, NanoVDB volumes, differentiable rendering, Isaac Lab integration
- `wiki/NeMo-Guardrails.md` — LLM safety toolkit; Colang DSL; input/output/dialog/retrieval rails; LangChain integration
- `wiki/TensorRT-Model-Optimizer.md` — Model quantization/pruning: FP8, INT4, FP4 (Blackwell), QAT/PTQ, TRT-LLM export

**index.md updated:** Yes — 5 new top-level sections added (NVIDIA Model Families, NVIDIA Research, Networking & Scale, Developer Experience, Additional CUDA-X/Libraries); total page count updated to 135
