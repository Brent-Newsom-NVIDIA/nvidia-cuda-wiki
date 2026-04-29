# NVIDIA BioNeMo

**Type:** Platform
**Tags:** NVIDIA, drug discovery, biology, biomolecular AI, protein, genomics, cheminformatics, NIM, life sciences
**Related:** [[NVIDIA-NIM]], [[NIM-for-AlphaFold2]], [[NIM-for-AlphaFold2-Multimer]], [[NIM-for-OpenFold2]], [[NIM-for-OpenFold3]], [[NIM-for-Boltz2]], [[NIM-for-Evo-2]], [[NIM-for-MSA-Search]], [[NIM-for-ProteinMPNN]], [[NIM-for-RFdiffusion]], [[NIM-for-MolMIM]], [[NIM-for-GenMol]], [[NIM-for-DiffDock]], [[NIM-for-ALCHEMI-Batched-Geometry-Relaxation]], [[NIM-for-ALCHEMI-Batched-Molecular-Dynamics]], [[NVIDIA-NeMo]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-Clara]], [[NVIDIA-Parabricks]], [[cuEquivariance]], [[NGC]]
**Sources:** NVIDIA official documentation; https://docs.nvidia.com/clara/index.html, https://docs.nvidia.com/bionemo-framework/latest/index.html, https://docs.nvidia.com/nim/bionemo/alphafold2/latest/overview.html, https://docs.nvidia.com/nim/bionemo/alphafold2-multimer/latest/overview.html, https://docs.nvidia.com/nim/bionemo/openfold2/latest/overview.html, https://docs.nvidia.com/nim/bionemo/openfold3/latest/overview.html, https://docs.nvidia.com/nim/bionemo/boltz2/latest/overview.html, https://docs.nvidia.com/nim/bionemo/evo2/latest/overview.html, https://docs.nvidia.com/nim/bionemo/msa-search/latest/overview.html, https://docs.nvidia.com/nim/bionemo/proteinmpnn/latest/overview.html, https://docs.nvidia.com/nim/bionemo/rfdiffusion/latest/overview.html, https://docs.nvidia.com/nim/bionemo/molmim/latest/overview.html, https://docs.nvidia.com/nim/bionemo/genmol/latest/overview.html, https://docs.nvidia.com/nim/bionemo/diffdock/latest/overview.html, https://docs.nvidia.com/nim/alchemi/alchemi-bgr/latest/overview.html, https://docs.nvidia.com/nim/alchemi/alchemi-bmd/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA BioNeMo is a platform of GPU-accelerated AI models and frameworks purpose-built for computational biology, drug discovery, and life sciences research. It provides pre-trained biomolecular foundation models — covering protein structure prediction, molecular generation, virtual screening, and genomics — deployable as NIM microservices or fine-tunable via the BioNeMo Framework. BioNeMo enables pharmaceutical companies and research institutions to dramatically accelerate hit identification, lead optimization, and target discovery workflows using GPU computing.

## Detail

### Purpose
Computational biology and drug discovery involve computationally intensive tasks: predicting how proteins fold, generating candidate drug molecules, screening billions of compound-target interactions, and analyzing genomic sequences. These workflows traditionally take days to weeks on CPU clusters. BioNeMo re-engineers these pipelines with GPU-accelerated foundation models, reducing protein structure predictions from hours (CPU AlphaFold2) to seconds, and enabling generative molecular design at scale.

### Key Features
- **Pre-Trained Biomolecular Models:** A growing library of foundation models including:
  - **ESM-2 / ESM-3:** Protein language models (Meta ESM family) for sequence embedding, property prediction, and generation
  - **[[NIM-for-AlphaFold2]] / [[NIM-for-AlphaFold2-Multimer]]:** NVIDIA NIMs for single-chain and multimer AlphaFold2 protein structure prediction, with MSA workflows.
  - **[[NIM-for-OpenFold2]] / [[NIM-for-OpenFold3]]:** OpenFold protein and biomolecular-complex structure prediction NIMs; OpenFold3 covers proteins, DNA, RNA, ligands, structural templates, TensorRT, and cuEquivariance acceleration.
  - **[[NIM-for-Boltz2]]:** biomolecular structure and binding-affinity prediction NIM for proteins, RNA, DNA, ligands, and constrained molecular interactions.
  - **[[NIM-for-Evo-2]]:** DNA sequence interpretation and generation NIM for biological foundation-model workflows.
  - **[[NIM-for-MSA-Search]]:** GPU-accelerated MSA, paired MSA, and structural template search for structure-prediction pipelines.
  - **[[NIM-for-RFdiffusion]] / [[NIM-for-ProteinMPNN]]:** protein structure generation and sequence-design NIMs that can be chained for binder/scaffold workflows.
  - **[[NIM-for-MolMIM]] / [[NIM-for-GenMol]]:** controlled and fragment-based small molecule generation NIMs.
  - **[[NIM-for-DiffDock]]:** diffusion-based molecular docking NIM for protein-ligand pose prediction.
  - **[[NIM-for-ALCHEMI-Batched-Geometry-Relaxation]] / [[NIM-for-ALCHEMI-Batched-Molecular-Dynamics]]:** ALCHEMI atomistic modeling NIMs for relaxation and molecular dynamics using MLIPs.
  - **EquiDock, RoseTTAFold, and additional structure/design tools:** broader BioNeMo ecosystem components.
  - **Single-Cell Models:** scGPT and Evo for genomics and single-cell RNA sequencing analysis
- **BioNeMo Framework:** Python training and customization framework (analogous to NeMo for LLMs) for fine-tuning biomolecular models on proprietary assay data, structural databases, or custom compound libraries
- **Current framework docs:** Clara docs point to the BioNeMo Training Framework documentation center for current framework material, including models, recipes, datasets, and API documentation.
- **NIM Deployment:** All BioNeMo models are packaged as NIM microservices — deploy via `docker run`, call via REST API — integrating seamlessly into existing computational biology pipelines
- **Virtual Screening Pipelines:** End-to-end GPU-accelerated pipelines combining structure prediction, docking, ADMET property filtering, and generative design
- **cuEquivariance Integration:** GPU-accelerated equivariant operations (SO(3)/SE(3) symmetry) used in BioNeMo's structure-aware models for 10× speedup over CPU implementations
- **NVIDIA AI Enterprise Licensed:** Enterprise support, security patching, and SLA available for pharmaceutical production deployments

### Use Cases
- **Protein Structure Prediction:** Rapid prediction of 3D protein structures for novel targets and mutant variants
- **Virtual Screening:** GPU-accelerated docking of million-compound libraries against protein targets in hours
- **Generative Molecule Design:** De novo drug candidate generation using MolMIM or diffusion models, constrained by binding site or ADMET properties
- **Protein Engineering:** Sequence design for antibodies, enzymes, and therapeutic proteins using ProteinMPNN
- **Protein design pipelines:** generate structures with [[NIM-for-RFdiffusion]], design sequences with [[NIM-for-ProteinMPNN]], and validate or refine with structure-prediction NIMs.
- **MSA and template preprocessing:** use [[NIM-for-MSA-Search]] to feed AlphaFold/OpenFold/Boltz workflows.
- **Atomistic simulation:** use ALCHEMI BGR/BMD NIMs for geometry relaxation and molecular dynamics with MLIP models.
- **Genomics and Single-Cell Analysis:** Foundation models for scRNA-seq embedding, cell type annotation, and gene expression prediction
- **Target Identification:** Protein-protein interaction prediction and binding site identification for novel target discovery

### Hardware Requirements / Compatibility
- **GPU:** NVIDIA A100 (80 GB recommended for large protein models), H100, H200; L40S for smaller models
- **CUDA:** 12.x required for BioNeMo Framework; NIM containers include all dependencies
- **Memory:** AlphaFold2 GPU-accelerated requires ~40–80 GB GPU memory for large proteins; DiffDock and MolMIM run on single A100 40 GB
- **OS:** Linux (Ubuntu 20.04/22.04); BioNeMo Framework via Docker or conda
- **Storage:** Pre-trained model checkpoints range from 650 MB (ESM-2 650M) to 15 GB+ (large structure models)

### Language Bindings / APIs
- **Python:** BioNeMo Framework Python SDK for model fine-tuning, data loading, and pipeline construction
- **REST API:** NIM-based deployment exposes standard `/v1/biology/...` endpoints (protein embedding, structure prediction, molecular generation)
- **Docker / Kubernetes:** NIM containers deployable via Docker or Kubernetes Helm charts
- **Jupyter Notebooks:** BioNeMo examples and tutorials available as interactive notebooks via NGC

## Connections
- [[NVIDIA-NIM]] — All BioNeMo models are deployed as NIM microservices with REST APIs
- [[NIM-for-AlphaFold2]] — BioNeMo NIM for single-chain AlphaFold2 protein structure prediction.
- [[NIM-for-AlphaFold2-Multimer]] — BioNeMo NIM for AlphaFold2 protein-complex prediction.
- [[NIM-for-OpenFold2]] — BioNeMo NIM for OpenFold2 monomer protein structure prediction.
- [[NIM-for-OpenFold3]] — BioNeMo NIM for all-atom biomolecular complexes.
- [[NIM-for-Boltz2]] — BioNeMo NIM for structure and binding-affinity prediction.
- [[NIM-for-Evo-2]] — BioNeMo NIM for DNA sequence interpretation and generation.
- [[NIM-for-MSA-Search]] — GPU-accelerated sequence/template search for structure-prediction workflows.
- [[NIM-for-RFdiffusion]] and [[NIM-for-ProteinMPNN]] — protein structure generation and sequence design NIMs.
- [[NIM-for-MolMIM]] and [[NIM-for-GenMol]] — controlled and fragment-based small molecule generation NIMs.
- [[NIM-for-DiffDock]] — scalable molecular docking and pose-prediction NIM.
- [[NIM-for-ALCHEMI-Batched-Geometry-Relaxation]] and [[NIM-for-ALCHEMI-Batched-Molecular-Dynamics]] — atomistic modeling NIMs for MLIP-driven relaxation and molecular dynamics.
- [[NVIDIA-NeMo]] — BioNeMo Framework shares architectural patterns with NeMo; NeMo Curator used for biomolecular data curation
- [[NVIDIA-Clara]] — Clara is the broader NVIDIA healthcare platform; BioNeMo is the drug discovery / computational biology component
- [[NVIDIA-Parabricks]] — genomics acceleration sibling within the Clara life sciences portfolio
- [[NVIDIA-AI-Enterprise]] — BioNeMo available under AI Enterprise license for pharmaceutical production deployments
- [[cuEquivariance]] — BioNeMo structure models use cuEquivariance for GPU-accelerated SO(3)/SE(3) equivariant neural network operations
- [[NGC]] — BioNeMo model checkpoints, containers, and NIM images distributed via NGC

## Resources
- [BioNeMo Developer Page](https://developer.nvidia.com/bionemo)
- [BioNeMo Framework Documentation](https://docs.nvidia.com/bionemo-framework/latest/index.html)
- [BioNeMo NIM Catalog](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/clara/collections/bionemo)
- [BioNeMo GitHub](https://github.com/NVIDIA/bionemo-framework)
