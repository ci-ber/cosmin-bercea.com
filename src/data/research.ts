export interface FeaturedPaper {
    title: string;
    authors: string;
    venue: string;
    link: string;
    image: string;
  }
  
  export interface ResearchArea {
    title: string;
    slug: string;
    description: string;
    content: string;
    ui_effect: 'scan' | 'pulse' | 'connect';
    challenges: { label: string; description: string }[];
    featured_papers: FeaturedPaper[];
  }
  
  export const researchAreas: ResearchArea[] = [
    {
      slug: "normative-learning",
      title: "Normative Learning",
      description: "Establishing the generative foundation for anomaly detection by modeling the healthy biological manifold.",
      ui_effect: "scan",
      content: "Normative learning provides the formal foundation for anomaly detection by establishing the high-dimensional 'healthy' state as a baseline. Only by accurately modeling this baseline can we identify pathology not as a pre-defined category, but as a statistically significant departure from a patient's expected anatomical manifold—enabling the discovery of novel disease markers through high-fidelity pseudo-healthy synthesis.",
      challenges: [
        { 
          label: "Context-Aware Restoration", 
          description: "Architecting generative frameworks that resolve the fundamental tension between pathological correction and the preservation of patient-specific healthy anatomical context." 
        },
        { 
          label: "High-Dimensional Covariate Modeling", 
          description: "Conditioning generative priors on continuous variables—aging, sex, and acquisition hardware—to ensure the normative manifold is robust against non-pathological variance." 
        },
        { 
          label: "Multiscale Systems Integration", 
          description: "Augmenting structural imaging with molecular signatures and population-level insights to bridge the gap between microscopic biological drivers and macroscopic clinical outcomes." 
        }
      ],
      featured_papers: [
        { 
          title: "Evaluating Normative Representation Learning in Generative AI", 
          authors: "Cosmin I. Bercea, Benedikt Wiestler, Daniel Rückert, Julia A. Schnabel",
          venue: "Nature Communications 2025", 
          link: "https://www.nature.com/articles/s41467-025-56321-y",
          image: "/media/research/nature_normative.png" 
        },
        { 
          title: "Diffusion Models with Implicit Guidance for Medical Anomaly Detection", 
          authors: "Cosmin I. Bercea, Benedikt Wiestler, Daniel Rückert, Julia A. Schnabel",
          venue: "MICCAI 2024", 
          link: "https://arxiv.org/abs/2403.08464",
          image: "/media/research/miccai_thor.png"
        }
      ]
    },
    {
      slug: "unseen",
      title: "The Unseen & Unknown",
      description: "Identifying rare clinical phenotypes and resections without expert labels through OOD detection.",
      ui_effect: "pulse",
      content: "Unsupervised Anomaly Detection (UAD) is formulated as a label-free approach for open-world clinical settings, where the space of possible pathologies is inherently unbounded, yet is predominantly developed and evaluated under closed-world assumptions tied to known anomaly distributions. We reframe UAD as a problem of generalizing anomaly discovery by grounding detection in principled modeling of the normative anatomical manifold, enabling reliable identification of rare, heterogeneous, and previously unseen disease phenotypes.",
      challenges: [
        { 
          label: "Agnostic Sensitivity", 
          description: "Develop representations that remain sensitive to the full pathological spectrum without encoding assumptions about anomaly appearance, prevalence, or intensity." 
        },
        { 
          label: "The False Positive Bottleneck", 
          description: "Disentangle pathological deviations from benign anatomical variability to prevent increased open-world sensitivity from translating into clinically prohibitive false-positive rates." 
        },
        {
          label: "Integrity of Open-World Generalization",
          description: "Establish datasets and evaluation protocols that explicitly stress test UAD methods under open-world conditions, including rarity, heterogeneity, and previously unseen disease phenotypes."
        }
      ],
      featured_papers: [
        { 
        title: "NOVA: A Benchmark for Rare Anomaly Localization and Clinical Reasoning in Brain MRI", 
        authors: "Cosmin I. Bercea, Jun Li, Philipp Raffler, Evamaria O. Riedel, Lena Schmitzer, Angela Kurz, Felix Bitzer, Paula Roßmüller, Julian Canisius, Mirjam L. Beyrle, Che Liu, Wenjia Bai, Bernhard Kainz, Julia A. Schnabel, Benedikt Wiestler",
        venue: "NeurIPS 2025 (Oral)", 
        link: "https://neurips.cc/virtual/2025/loc/san-diego/poster/121770",
        image: "/media/research/neurips-nova.png" 
        },
        { 
        title: "Generalizing Unsupervised Anomaly Detection: Towards Unbiased Pathology Screening", 
        authors: "Cosmin I. Bercea, Benedikt Wiestler, Daniel Rückert, Julia A. Schnabel",
        venue: "MIDL 2023", 
        link: "https://proceedings.mlr.press/v227/bercea24a.html",
        image: "/media/research/midl-ra.png"
        }
      ]
    },
    {
      slug: "multimodal-reasoning",
      title: "Multimodal Reasoning",
      description: "Advancing abnormality grounding via Vision-Language Models.",
      ui_effect: "connect",
      content: "Detecting anomalies is not sufficient for clinical decision-making. Current medical AI systems either detect visual deviations or describe images, but rarely connect the two through reasoning. This work reframes anomaly detection as a multimodal reasoning problem, where visual deviations are treated as hypotheses that must be grounded, explained, and contextualized through language and prior knowledge. We couple generative models with vision–language reasoning to enable systems that can both condition generation on semantic intent and interpret previously unseen anomalies in clinically meaningful terms. This closes the loop between detection, explanation, and reasoning, supporting open-world clinical settings.",
      challenges: [
        { 
          label: "Multimodal Anomaly Grounding", 
          description: "Anchor visually detected anomalies in structured clinical language, ensuring that explanations correspond to anatomically and pathophysiologically valid concepts rather than free-form descriptions." 
        },
        { 
          label: "Language-Conditioned Generation and Repair", 
          description: "Develop generative models that can be steered by semantic constraints, enabling hypothesis-driven synthesis, counterfactual reasoning, and targeted normalization guided by clinical language." 
        },
        {
          label: "Open-World Reasoning",
          description: "Enable vision–language systems to reason about unseen anomalies, supporting interpretation of rare, ambiguous, or previously uncharacterized findings."
        }
      ],
      featured_papers: [
        { 
            title: "NOVA: A Benchmark for Rare Anomaly Localization and Clinical Reasoning in Brain MRI", 
            authors: "Cosmin I. Bercea, Jun Li, Philipp Raffler, Evamaria O. Riedel, Lena Schmitzer, Angela Kurz, Felix Bitzer, Paula Roßmüller, Julian Canisius, Mirjam L. Beyrle, Che Liu, Wenjia Bai, Bernhard Kainz, Julia A. Schnabel, Benedikt Wiestler",
            venue: "NeurIPS 2025 (Oral)", 
            link: "https://neurips.cc/virtual/2025/loc/san-diego/poster/121770",
            image: "/media/research/neurips-nova.png" 
            },
        { 
            title: "Learning to Reason about Rare Diseases through Retrieval-Augmented Agents", 
            authors: "Ha Young Kim, Jun Li, Ana Beatriz Solana, Carolin M. Pirkl, Benedikt Wiestler, Julia A. Schnabel*, Cosmin I. Bercea*",
            venue: "arXiv 2025", 
            link: "https://arxiv.org/abs/2511.04720",
            image: "/media/research/radar-agents.png"
        },
        { 
            title: "Enhancing Abnormality Grounding for Vision-Language Models with Knowledge Descriptions", 
            authors: "Jun Li, Che Liu, Wenjia Bai, Rossella Arcucci, Cosmin I. Bercea*, Julia A. Schnabel*",
            venue: "WACV 2025", 
            link: "https://arxiv.org/abs/2503.03278",
            image: "/media/research/wacv-k2sight.png"
          },
        { 
          title: "Language Models Meet Anomaly Detection for Better Interpretability and Generalizability", 
          authors: "Jun Li, Su Hwan Kim, Philip Müller, Lina Felsner, Daniel Rückert, Benedikt Wiestler, Julia A. Schnabel*, Cosmin I. Bercea*",
          venue: "MICCAI 2024 / MMMI", 
          link: "https://arxiv.org/abs/2404.07622",
          image: "/media/research/miccai-vlm-ad.png" 
        },
      ]
    }
  ];