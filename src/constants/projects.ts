export const projectsData = [
  {
    id: 1,
    name: "Browser IDE",
    description:
      "Full-stack browser IDE with Monaco Editor, in-browser Node.js execution via WebContainers API, and an xterm.js terminal. Integrated local LLMs (Ollama/codellama) with streaming completions, OAuth 2.0 (Google & GitHub via NextAuth v5), MongoDB session persistence via Prisma, and 6 bootstrapped project templates.",
    image: "/work/BrowserIDE_Template.png",
    tags: ["Next.js 15", "TypeScript", "WebContainers", "MongoDB", "Ollama"],
    status: "Completed",
    date: "2025",
    href: "https://github.com/Aditya24Kashyap",
  },
  {
    id: 2,
    name: "Packet Inspector",
    description:
      "Multithreaded Deep Packet Inspection engine in C++17. Parses PCAP files, extracts TLS SNI from Client Hello packets, and classifies HTTPS traffic (YouTube, Facebook etc.) without decryption. Uses a producer-consumer thread pool with consistent hashing and mutex/condition variable synchronisation.",
    image: "/work/Packet_Inspector_Template.png",
    tags: ["C++17", "POSIX Threads", "TCP/IP", "TLS", "DPI"],
    status: "Completed",
    date: "2025",
    href: "https://github.com/Aditya24Kashyap",
  },
  {
    id: 3,
    name: "CortexDB",
    description:
      "Vector database built from scratch with HNSW (O(log N) — same algorithm as Pinecone & Weaviate), KD-Tree, and brute-force search across cosine, Euclidean, and Manhattan metrics. Full RAG pipeline: 768D embeddings via nomic-embed-text, overlapping chunking, HNSW retrieval, and LLM answers via llama3.2 over a REST API.",
    image: "/work/CortexDB_Template.png",
    tags: ["C++17", "Python", "HNSW", "RAG", "Ollama"],
    status: "Completed",
    date: "2025",
    href: "https://github.com/Aditya24Kashyap",
  },
];
