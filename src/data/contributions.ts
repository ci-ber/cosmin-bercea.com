export const selectedContributions: Contribution[] = [
  {
    title: "NOVA: A Benchmark for Anomaly Localization and Clinical Reasoning in Brain MRI",
    venue: "NeurIPS (Datasets & Benchmarks)",
    year: "2025",
    description:
      "A zero-shot, evaluation-only benchmark featuring 281 rare pathologies and 900 multi-modal scans, designed to stress-test vision-language models on their ability to bridge the distribution gap between spatial detection and clinical narrative.",
    highlight:
      "Exposes a significant 'reasoning gap' in current VLMs, where performance on rare clinical cases remains substantially below resident-level expertise despite high-quality visual inputs.",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2505.14064", kind: "primary", external: true },
      { label: "Dataset", href: "https://huggingface.co/datasets/Ano-2090/Nova", kind: "neutral", external: true },
    ],
  },

  {
    title: "Evaluating normative representation learning in generative AI for robust anomaly detection in brain imaging",
    venue: "Nature Communications",
    year: "2025",
    description:
      "A systematic study introducing metrics (RQI, AHI, CACI) to evaluate how well generative models learn 'normative' anatomy, validated by a multi-reader study comparing AI-generated counterfactuals against radiologist judgment.",
    highlight:
      "Demonstrates that standard reconstruction metrics (PSNR/SSIM) are poor proxies for clinical utility, advocating for evaluation focused on the anatomical plausibility of the 'healthy' restoration.",
    links: [
      { label: "Paper", href: "https://www.nature.com/articles/s41467-025-56321-y", kind: "primary", external: true },
      { label: "Code", href: "https://github.com/compai-lab/2024-ncomms-bercea.git", kind: "neutral", external: true },
      { label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/39948337/", kind: "neutral", external: true },
    ],
  },

  {
    title: "Reversing the Abnormal: Pseudo-Healthy Generative Networks for Anomaly Detection",
    venue: "MICCAI",
    year: "2023",
    description:
      "Introduces PHANES, a framework that avoids image-wide stochastic alterations by using latent generative networks to selectively mask and inpaint abnormal regions while preserving the patient’s healthy anatomical context.",
    highlight:
      "Provides a more stable alternative to global diffusion-based reconstruction, significantly reducing false positives in the detection of focal lesions like stroke.",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2303.08452", kind: "primary", external: true },
      { label: "MICCAI page", href: "https://conferences.miccai.org/2023/papers/546-Paper1360.html", kind: "neutral", external: true },
      { label: "Code", href: "https://github.com/ci-ber/PHANES", kind: "neutral", external: true },
    ],
  },

  {
    title: "Federated disentangled representation learning for unsupervised brain anomaly detection",
    venue: "Nature Machine Intelligence",
    year: "2022",
    description:
      "A federated learning approach that disentangles global anatomical shape from site-specific scanner appearance, allowing institutions to collaboratively model 'healthy' anatomy without sharing raw patient data.",
    highlight:
      "Achieves up to 227% improvement in lesion segmentation over local models by leveraging cross-institutional shape priors while mitigating statistical heterogeneity (domain shift).",
    links: [
      { label: "Paper", href: "https://doi.org/10.1038/s42256-022-00515-2", kind: "primary", external: true },
      { label: "Code", href: "https://github.com/albarqounilab/FedDis-NMI", kind: "neutral", external: true },
      { label: "arXiv (preprint)", href: "https://arxiv.org/abs/2103.03705", kind: "neutral", external: true },
    ],
  },
];