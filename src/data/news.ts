// src/data/news.ts

export type NewsKind = "Paper" | "Journal" | "Workshop Paper" | "Milestone";

export type NewsItem = {
  date: string;          // "YYYY-MM" or "YYYY-MM-DD"
  kind: NewsKind;        // main badge
  venue: string;         // e.g., "MICCAI", "NeurIPS (Datasets & Benchmarks)"
  title: string;         // main line
  note?: string;         // e.g., "Oral", "Early Accept", "Best Paper Award"
  desc?: string;         // optional description for milestones
  by?: string;           // e.g., "Jun Li" (optional)
  href?: string;         // optional link to page/paper
  pinned?: boolean;      // optional
};

export const news: NewsItem[] = [
  {
    date: "2026-01",
    kind: "Milestone",
    venue: "MICCAI Student Board",
    title: "Elected as Vice President Academic and Scientific",
    desc: "The MSB is dedicated to connecting the global community of students in medical imaging. Check our projects for MICCAI 2026 in Abu Dhabi and our call for new members to join the team!",
    href: "https://miccai-sb.github.io/",
  },
  {
    date: "2026-01", 
    kind: "Paper",
    venue: "ISBI 2026",
    title: "Three student-led papers accepted",
    desc: "New research from <a href='https://scholar.google.com/citations?user=BTsiFV4AAAAJ&hl=en'>Ha Young Kim, <a href='https://scholar.google.com/citations?user=v1BkRGsAAAAJ'>Ben Schaper, and <a href='https://scholar.google.com/citations?user=gkSeL5sAAAAJ&hl=en'>Donna Hooft will be presented at ISBI.",
  },
  {
    date: "2025-12",
    kind: "Paper",
    note: "Oral",
    venue: "NeurIPS (Datasets & Benchmarks)",
    title: "NOVA: A Benchmark for Anomaly Localization and Clinical Reasoning in Brain MRI",
    href: "https://neurips.cc/virtual/2025/loc/san-diego/poster/121770",
  },
  {
    date: "2025-11",
    kind: "Paper",
    note: "Early Accept",
    venue: "WACV",
    title:
      "Knowledge to Sight: Reasoning over Visual Attributes via Knowledge Decomposition for Abnormality Grounding",
    by: "Jun Li",
    href: "https://arxiv.org/abs/2508.04572",
  },
  {
    date: "2025-10",
    kind: "Milestone",
    venue: "MICCAI 2025 (South Korea)",
    title: "Serving as Area Chair and Session Chair",
    desc: "Contributing to the review process and chairing oral sessions at MICCAI 2025.",
  },
  {
    date: "2025-10",
    kind: "Milestone",
    venue: "MICCAI 2025 · EMERGE Workshop",
    title: "Organizer of the EMERGE Workshop",
    desc: "Supporting and mentoring early-career researchers in medical imaging and AI.",
    href: "https://miccaimsb.github.io/emerge/",
  },
  {
    date: "2025-10",
    kind: "Milestone",
    venue: "MICCAI 2025 · MOOD Challenge",
    title: "Co-organizer of the MOOD Challenge",
    desc: "Advancing benchmarking for unsupervised anomaly detection in medical imaging.",
    href: "https://www.synapse.org/Synapse:syn21343101/wiki/599515",
  },
  {
    date: "2025-09",
    kind: "Journal",
    venue: "MELBA",
    title: "Denoising diffusion models for anomaly localization in medical images",
    href: "https://www.melba-journal.org/pdf/2025%3A030.pdf",
  },
  {
    date: "2025-02",
    kind: "Journal",
    venue: "Nature Communications",
    title:
      "Evaluating normative representation learning in generative AI for robust anomaly detection in brain imaging",
    href: "https://www.nature.com/articles/s41467-025-56321-y",
  },
  {
    date: "2024-12",
    kind: "Milestone",
    venue: "MICCAI Student Board",
    title: "Selected as Scientific Events Officer",
    desc: "Contributing to the organization of student-focused scientific events.",
    href: "https://miccai-sb.github.io",
  },
  {
    date: "2024-10",
    kind: "Paper",
    venue: "MICCAI",
    title: "Diffusion Models with Implicit Guidance for Medical Anomaly Detection",
    href: "https://arxiv.org/abs/2403.08464",
  },
  {
    date: "2024-10",
    kind: "Paper",
    venue: "SASHIMI @ MICCAI",
    title: "MedEdit: Counterfactual Diffusion-based Image Editing on Brain MRI",
    by: "Malek Ben Alaya",
    href: "https://arxiv.org/abs/2407.15270",
  },
  {
    date: "2024-10",
    kind: "Paper",
    note: "Best Paper Award",
    venue: "ADSM @ MICCAI",
    title:
      "Selective Test-Time Adaptation for Unsupervised Anomaly Detection using Neural Implicit Representations",
    by: "Sameer Ambekar",
    href: "https://arxiv.org/abs/2410.03306",
  },
  {
    date: "2024-10",
    kind: "Paper",
    venue: "MMMI @ MICCAI",
    title:
      "Language Models Meet Anomaly Detection for Better Interpretability and Generalizability",
    by: "Jun Li",
    href: "https://arxiv.org/abs/2404.07622",
  },
  {
    date: "2024-10",
    kind: "Paper",
    venue: "ASMUS @ MICCAI",
    title: "Diffusion Models for Unsupervised Anomaly Detection in Fetal Brain Ultrasound",
    by: "Hanna Mykula",
    href: "https://arxiv.org/abs/2407.15119",
  },
  {
    date: "2024-10",
    kind: "Paper",
    note: "Best Paper Award",
    venue: "EMERGE @ MICCAI",
    title:
      "Unsupervised Analysis of Alzheimer’s Disease Signatures using 3D Deformable Autoencoders",
    by: "Yigit Avci",
    href: "https://arxiv.org/abs/2407.03863",
  },
  {
    date: "2024-06",
    kind: "Milestone",
    venue: "TUM",
    title: "Started Postdoc",
    note: "with Prof. Julia Schnabel & Prof. Benedikt Wiestler",
    desc: "Working on generative AI and VLMs for anomaly grounding in medical imaging.",
    // milestones typically don't need href
  },
  {
    date: "2023-10",
    kind: "Paper",
    note: "Early Accept",
    venue: "MICCAI",
    title: "Reversing the Abnormal: Pseudo-Healthy Generative Networks for Anomaly Detection",
    href: "https://arxiv.org/abs/2303.08452",
  },
  {
    date: "2023-10",
    kind: "Paper",
    note: "Early Accept",
    venue: "MICCAI",
    title: "What do AEs learn? Challenging common assumptions in unsupervised anomaly detection",
    href: "https://dl.acm.org/doi/10.1007/978-3-031-43904-9_30",
  },
  {
    date: "2023-06",
    kind: "Workshop Paper",
    venue: "ICML Workshop (IMLH)",
    title:
      "Mask, Stitch, and Re-Sample: Enhancing Robustness and Generalizability in Anomaly Detection through Automatic Diffusion Models",
    by: "Michael Neumayr",
    href: "https://arxiv.org/abs/2305.19643",
  },
  {
    date: "2023-02",
    kind: "Paper",
    note: "Oral",
    venue: "MIDL",
    title: "Generalizing Unsupervised Anomaly Detection: Towards Unbiased Pathology Screening",
    href: "https://proceedings.mlr.press/v227/bercea24a.html",
  },
  {
    date: "2022-08",
    kind: "Journal",
    venue: "Nature Machine Intelligence",
    title:
      "Federated disentangled representation learning for unsupervised brain anomaly detection",
    href: "https://www.nature.com/articles/s42256-022-00515-2",
  },
  {
    date: "2020-12",
    kind: "Milestone",
    venue: "Helmholtz Munich @ TUM",
    title: "Started PhD",
    note: "supervised by Prof. Julia Schnabel & Prof. Daniel Rueckert",
    desc: "Generative models for unsupervised anomaly detection in medical imaging.",
    // milestones typically don't need href
  },
];
