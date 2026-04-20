# GPU Direct Storage

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Storage, I/O, HPC, AI Training, Direct I/O
**Related:** [[nvComp]], [[cuDF]], [[NVIDIA-DALI]], [[cuBLAS]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-09

## Summary
GPU Direct Storage (GDS) is an NVIDIA technology that enables a direct data path between GPU memory and storage (NVMe SSDs, networked storage), bypassing the CPU and system memory bottleneck. This dramatically reduces latency and increases storage I/O bandwidth for GPU-accelerated workloads by allowing data to flow directly from storage to GPU (and vice versa) without CPU-mediated copies.

## Detail

### Purpose
In traditional GPU workloads, data must travel from storage → CPU memory → GPU memory, creating a bottleneck at the CPU. GDS creates a direct path: storage → GPU memory, eliminating the intermediate CPU copy. This is critical for AI training on large datasets, HPC checkpointing, and real-time data analytics where storage I/O is the bottleneck.

### Key Features
- Direct data path from NVMe/NFS/GPFS storage to GPU memory
- Eliminates CPU as intermediary in storage-to-GPU data transfers
- Reduces latency and frees CPU resources for other work
- Compatible with NVMe-of (NVMe over Fabrics) and distributed file systems
- POSIX-compatible cuFile API for application integration
- Integration with RAPIDS cuDF, DALI, and HPC frameworks
- Works with GPUDirect RDMA for network-attached storage

### Use Cases
- AI/ML training from large image, video, or tabular datasets
- HPC checkpoint/restart acceleration
- Genomics and scientific data processing pipelines
- Real-time video analytics
- Database query acceleration on GPU
- Large model weight loading for inference

### Hardware Requirements
- NVIDIA GPU, Volta (V100) or newer
- NVMe SSD with PCIe 3.0 or 4.0 (preferred: PCIe 4.0 for maximum bandwidth)
- Linux with compatible NVMe driver
- Compatible with network-attached storage via GPUDirect RDMA

### Language Bindings
- C/C++ (cuFile API)
- Python (via RAPIDS and framework wrappers)

## Connections
- [[nvComp]] — nvComp compressed data can flow via GDS directly from storage to GPU for decompression
- [[cuDF]] — cuDF supports GDS-backed I/O for reading large datasets directly into GPU DataFrames
- [[NVIDIA-DALI]] — DALI can use GDS for loading training images directly to GPU without CPU copies
- [[cuBLAS]] — HPC workflows using cuBLAS benefit from GDS for loading matrix data from disk

## Resources
- [Official Page](https://developer.nvidia.com/gpudirectstorage)
- [GPU Direct Storage Documentation](https://docs.nvidia.com/gpudirect-storage/)
