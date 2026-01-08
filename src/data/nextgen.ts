export interface Student {
  name: string;
  venue: string;
  topic: string;
  type: string;
  tier: 'top-tier' | 'mid-tier' | 'workshop';
  award?: 'best-paper' | 'most-cited' | 'early-accept' | 'none';
  impactText?: string;
  link?: string;
}

export interface Pillar {
  title: string;
  role: string;
  desc: string;
}

export const nextGenData = {
  motto: "Empowering the Next Generation",
  pillars: [
    {
      title: "International Engagement",
      role: "MICCAI Student Board (MSB) Lead",
      desc: "Leading professional development and community-building initiatives for the global medical imaging student body."
    },
    {
      title: "Academic Pedagogy",
      role: "Lead Instructor & Invited Lecturer",
      desc: "From tutoring Federated Learning (2021) to leading AI & Multimodal seminars (2024) and lecturing on Generative Models at TUM."
    },
    {
      title: "Supervision",
      role: "Primary Research Mentor",
      desc: "Transforming Master's and GRP research into first-author publications at top-tier venues within the EMERGE ecosystem."
    }
  ] as Pillar[],

  students: [
    { 
      name: "Jun Li", 
      type: "PhD Student", 
      topic: "Knowledge to Sight: Reasoning over Visual Attributes via Knowledge Decomposition for Abnormality Grounding", 
      venue: "WACV 2026",
      tier: "top-tier",
      award: "early-accept",
      impactText: "#EarlyAccept",
      link: "https://arxiv.org/abs/2508.04572"
    },
    { 
      name: "Chun Kit Wong", 
      type: "Visiting Researcher from DTU", 
      topic: "Influence of Classification Task and Distribution Shift Type on OOD Detection in Fetal Ultrasound", 
      venue: "MICCAI 2025",
      tier: "top-tier",
      collaborators: "Aasa Feragen (DTU)",
      link: "https://link.springer.com/chapter/10.1007/978-3-032-04981-0_28"
    },
    { 
      name: "Samuel James Roughly", 
      type: "Master Project", 
      topic: "GroundingDINO for Open-Set Lesion Detection in Medical Imaging", 
      venue: "MICCAI 2025 EMERGE Workshop",
      tier: "workshop",
      collaborators: "Ines Machado (Cambridge), Johanna Mueller (FAU Erlangen)",
      link: "https://openreview.net/forum?id=Rvdet5Tm9n#discussion"
    },
    { 
      name: "Jun Li", 
      type: "PhD Student", 
      topic: "Language models meet anomaly detection for better interpretability and generalizability", 
      venue: "MICCAI 2024 MMMI Workshop",
      tier: "workshop",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-84525-3_10"
    },
    { 
      name: "Malek Ben Alaya", 
      type: "Master's Thesis", 
      topic: "MedEdit: Counterfactual Diffusion-Based Image Editing on Brain MRI", 
      venue: "MICCAI 2023 Sashimi Workshop",
      tier: "workshop",
      award: "most-cited",
      impactText: "#TopCitedAward (10+)",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-73281-2_16"
    },
    { 
      name: "Mehmet Yigit Avci", 
      type: "Guided Research Project", 
      topic: "Unsupervised Analysis of Alzheimer’s Disease Signatures using 3D Deformable Autoencoders", 
      impactText: "#BestPaperAward", 
      venue: "MICCAI 2024 EMERGE Workshop",
      tier: "workshop",
      award: 'best-paper',
      link: "https://link.springer.com/chapter/10.1007/978-3-031-79103-1_27" 
    },
    { 
      name: "Hanna Mykula", 
      type: "Master's Thesis / GRP", 
      topic: "Diffusion models for unsupervised anomaly detection in fetal brain ultrasound", 
      venue: "MICCAI 2024 ASMUS Workshop",
      tier: "workshop",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-73647-6_21" 
    },
    { 
      name: "Sameer Ambekar", 
      type: "PhD Student", 
      topic: "Selective Test-Time Adaptation for Unsupervised Anomaly Detection using Neural Implicit Representations", 
      impactText: "#BestPaperAward", 
      venue: "MICCAI 2024 ADSMI Workshop",
      tier: "workshop",
      award: 'best-paper',
      link: "https://arxiv.org/abs/2410.03306" 
    },
    { 
      name: "Michael Neumayr", 
      type: "GRP", 
      topic: "Diffusion Models for Unsupervised Anomaly Detection", 
      impactText: "TopCitedAward (50+)", 
      venue: "ICML 2023 IMLH Workshop",
      tier: 'mid-tier',
      award: 'most-cited',
      link: "https://icml.cc/virtual/2023/27760" 
    },

  ] as Student[]
};