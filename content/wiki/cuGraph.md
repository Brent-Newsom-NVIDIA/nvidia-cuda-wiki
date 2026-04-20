# cuGraph

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Graph Analytics, RAPIDS, Python, Open Source, NetworkX
**Related:** [[cuDF]], [[cuML]], [[cuVS]], [[Thrust]], [[NCCL]]
**Sources:** NVIDIA official documentation (RAPIDS)
**Last Updated:** 2026-04-09

## Summary
cuGraph is a GPU-accelerated graph analytics library providing drop-in replacements for NetworkX, delivering up to 48x speedups on NVIDIA GPUs. Part of the RAPIDS ecosystem, it enables processing of graphs with millions of nodes on a single GPU without specialized software, and supports distributed multi-GPU graph analytics for billion-edge graphs.

## Detail

### Purpose
Graph algorithms (PageRank, community detection, shortest paths, betweenness centrality) are computationally intensive and slow on CPUs at large scale. cuGraph accelerates these algorithms on the GPU by exploiting massive parallelism, enabling real-time graph analytics on large networks that would otherwise require large CPU clusters.

### Key Features
- 48x faster NetworkX with drop-in accelerator mode (nx-cugraph)
- GPU-accelerated graph algorithms: PageRank, BFS, SSSP, Louvain, spectral clustering, betweenness centrality, triangle counting, and more
- Processes millions of nodes on a single GPU
- cuGraph.nx: zero-code-change NetworkX acceleration
- Multi-GPU and distributed graph analytics via Dask-cuGraph
- cuDF integration — operates natively on GPU DataFrames for edge/node tables
- Graph Neural Network (GNN) primitives via cuGraph-DGL and cuGraph-PyG
- Python and C++ APIs

### Use Cases
- Social network analysis and community detection
- Fraud detection via graph-based anomaly detection
- Recommendation systems using graph algorithms
- Cybersecurity threat analysis (lateral movement detection)
- Supply chain network optimization
- Knowledge graph analytics
- Graph Neural Network training and inference

### Hardware Requirements
- NVIDIA GPU, Pascal or newer (Volta+ recommended)
- CUDA 11.x or 12.x
- Linux (primary supported OS)
- Part of RAPIDS ecosystem

### Language Bindings
- Python (primary API, NetworkX compatible)
- C++ (underlying libcugraph)

## Connections
- [[cuDF]] — cuGraph operates on cuDF DataFrames for edge and node data
- [[cuML]] — cuML and cuGraph share graph-based clustering algorithms (Louvain, spectral)
- [[cuVS]] — cuVS and cuGraph are both used in recommendation and search pipelines
- [[Thrust]] — cuGraph uses Thrust for parallel primitives internally
- [[NCCL]] — distributed multi-GPU cuGraph uses NCCL for inter-GPU communication

## Resources
- [Official RAPIDS Page](https://developer.nvidia.com/rapids)
- [cuGraph GitHub](https://github.com/rapidsai/cugraph)
- [RAPIDS Documentation](https://docs.rapids.ai/api/cugraph/)
