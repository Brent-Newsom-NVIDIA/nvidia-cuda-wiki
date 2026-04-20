# NVIDIA Clara

**Type:** Platform
**Tags:** NVIDIA, healthcare, medical imaging, genomics, drug discovery, AI, radiology, clinical AI, life sciences
**Related:** [[NVIDIA-BioNeMo]], [[NVIDIA-Holoscan]], [[NVIDIA-Riva]], [[NVIDIA-AI-Enterprise]], [[NGC]], [[TensorRT]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; written from verified knowledge)
**Last Updated:** 2026-04-10

## Summary
NVIDIA Clara is a healthcare AI computing platform that provides domain-specific frameworks, tools, and reference applications for medical imaging, genomics, drug discovery, and clinical AI. It is organized into several focused sub-platforms — Clara Imaging, Clara Parabricks (genomics), and Clara Holoscan (medical-grade edge AI) — each offering GPU-accelerated pipelines and pre-trained models tailored to clinical and life sciences workflows. Clara enables hospitals, medical device companies, and pharmaceutical researchers to develop, validate, and deploy AI-powered diagnostics and therapeutics.

## Detail

### Purpose
Healthcare AI development faces unique challenges: specialized data types (DICOM, FASTQ, whole-slide images), regulatory requirements (FDA 510(k), CE marking), de-identification requirements, scarce labeled datasets, and the need for explainability. Clara addresses these with domain-specific frameworks that handle medical data ingestion, federated learning for privacy-preserving model training, pre-trained models for common medical imaging tasks, and real-time inference pipelines for clinical deployment. It bridges the gap between GPU computing capabilities and healthcare domain requirements.

### Key Features

**Clara Imaging (Medical Imaging AI):**
- **MONAI (Medical Open Network for AI):** Partnership framework (NVIDIA + King's College London) providing PyTorch-based tools for medical image segmentation, classification, and registration; widely adopted as the standard deep learning framework for radiology AI
- **MONAI Deploy:** MLOps framework for packaging, validating, and deploying medical imaging AI as MONAI Application Packages (MAPs) integrated with hospital PACS/VNA systems
- **Pre-trained Segmentation Models:** AI models for organ segmentation (liver, lungs, kidneys, brain), lesion detection (lung nodules, liver tumors), and annotation (total body segmentation)
- **3D Slicer Integration:** NVIDIA-accelerated 3D Slicer extension for interactive AI-assisted radiology workflows

**Clara Parabricks (Genomics):**
- **GPU-Accelerated Variant Calling:** Full GATK-compatible secondary analysis pipeline (alignment, duplicate marking, variant calling) running in 20–50 minutes on GPU vs 24–48 hours on CPU
- **FASTA-to-VCF Pipeline:** End-to-end germline and somatic variant calling from raw sequencing reads
- **Multi-GPU Scaling:** Linear scaling across multiple GPUs for large cohort studies
- **Compatibility:** Output VCF files are bit-for-bit compatible with CPU-based GATK, ensuring regulatory compliance and interoperability

**Clara Holoscan (Real-Time Medical AI):**
- See [[NVIDIA-Holoscan]] — Clara Holoscan is now its own branded platform for streaming AI sensor processing in medical devices

### Use Cases
- Radiology AI: automated organ and lesion segmentation for radiologist workflow augmentation
- Pathology AI: whole-slide image analysis for cancer grading and tumor detection
- Genomics: rapid population-scale variant calling for oncology, rare disease, and GWAS studies
- Federated learning: multi-site model training across hospital networks without sharing patient data (using Clara FL)
- Surgical AI: real-time instrument detection and procedure guidance in the OR (Holoscan)
- Drug target identification and structure prediction for pharmaceutical R&D (BioNeMo integration)

### Hardware Requirements / Compatibility
- **Clara Parabricks:** NVIDIA V100, A100, H100 recommended; minimum GTX 1080 or T4; CUDA 11.x+; Linux only
- **MONAI/Clara Imaging:** Any NVIDIA GPU with CUDA 11.x+; commonly deployed on A100, H100; Docker containerized
- **Storage:** Large-scale genomics pipelines require high-throughput NVMe storage (GPUDirect Storage recommended for large cohorts)
- **OS:** Ubuntu 18.04/20.04/22.04; Red Hat Enterprise Linux 7/8

### Language Bindings / APIs
- **Python:** MONAI Python library (`pip install monai`); Clara Parabricks CLI (`pbrun` command)
- **C++:** Holoscan SDK C++ API for real-time sensor processing
- **CLI:** `pbrun` for Parabricks; `clara` CLI for model registry and pipeline management
- **DICOM/HL7 FHIR:** MONAI Deploy integrates with hospital PACS via DICOMweb and HL7 FHIR standards
- **REST API:** MONAI Label server REST API for active learning annotation workflows

## Connections
- [[NVIDIA-BioNeMo]] — BioNeMo is the drug discovery/computational biology layer of Clara; Clara encompasses BioNeMo + imaging + genomics
- [[NVIDIA-Holoscan]] — Clara Holoscan became the NVIDIA Holoscan SDK; the real-time streaming AI platform for medical devices
- [[NVIDIA-Riva]] — Riva provides speech AI for clinical documentation (ambient clinical intelligence use cases)
- [[NVIDIA-AI-Enterprise]] — Clara workloads run under AI Enterprise license for regulated healthcare environments
- [[NGC]] — Clara containers, Parabricks, MONAI models, and reference applications distributed via NGC
- [[TensorRT]] — TensorRT accelerates inference for MONAI segmentation models and Clara imaging pipelines

## Resources
- [NVIDIA Clara Platform](https://developer.nvidia.com/clara)
- [MONAI Framework](https://monai.io)
- [MONAI Deploy](https://docs.monai.io/projects/monai-deploy-app-sdk/en/latest/)
- [Clara Parabricks Documentation](https://docs.nvidia.com/clara/parabricks/latest/index.html)
- [Clara on NGC](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/clara)
