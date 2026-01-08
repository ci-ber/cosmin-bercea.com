import type { Experience, Education, Publication, Skill, Award, Service, Teaching, Patent } from '../types/cv'

export const experiences: Experience[] = [
    {
        company: 'Technical University of Munich (TUM)',
        time: '2024 - present',
        title: 'Postdoctoral Researcher',
        location: 'Munich, Germany',
        description: 'Leading research on Generative AI and Multimodal Learning for medical image analysis to identify rare and early-stage diseases.',
    },
    {
        company: 'Technical University of Munich (TUM)',
        time: '2020 - 2024',
        title: 'PhD Researcher',
        location: 'Munich, Germany',
        description: 'Dissertation: "Deep Generative Models for Unsupervised Anomaly Detection in Medical Imaging." Developed SOTA algorithms for pathology screening.',
    },
    {
        company: 'Bosch Corporate Research',
        time: '2018 - 2020',
        title: 'Research Engineer',
        location: 'Hildesheim, Germany',
        description: 'R&D of deep learning models for perception and behavior prediction in autonomous driving systems.',
    },
    {
        company: 'Siemens Healthineers',
        time: '2017 - 2018',
        title: 'Research Assistant',
        location: 'Erlangen, Germany',
        description: 'Focused on Machine Learning for Medical Imaging under the supervision of Dr. Florin C. Ghesu. and Dr. Oliver Pauly.', 
    },
    {
        company: 'Computer Vision Center (UAB)',
        time: '2016',
        title: 'Research Assistant',
        location: 'Barcelona, Spain',
        description: 'Research on Machine Learningf for Action Recognition supervised by Prof.Dr. Petia Radeva.',
    },
    {
        company: 'Fraunhofer IIS',
        time: '2013 - 2017',
        title: 'Research Assistant',
        location: 'Erlangen, Germany',
        description: 'Research in Machine Learning and Virtual Reality supervised by Dr.-Ing. Christopher Mutschler.',
    }
];

export const education: Education[] = [
    {
        school: 'Technical University of Munich (TUM)',
        time: '2020 - 2024',
        degree: 'PhD (Dr. rer. nat.) in Computer Science',
        location: 'Munich, Germany',
        description: 'Focus on Deep Generative Models. Supervised by Prof. Julia Schnabel and Prof. Daniel Rückert.',
    },
    {
        school: 'King\'s College London',
        time: '2023',
        degree: 'Visiting Researcher',
        location: 'London, UK',
        description: 'Research on Biases in unsupervised learning with Dr. Andrew King and Dr. Esther Puyol-Antón.',
    },
    {
        school: 'FAU Erlangen-Nuremberg',
        time: '2011 - 2018',
        degree: 'B.Sc & M.Sc. in Computer Science',
        location: 'Erlangen, Germany',
        description: 'Grade 1.6. Specialization in Pattern Recognition and Medical Image Analysis under Prof. Dr. Andreas Maier.',
    }
];

export const awards: Award[] = [
    {
        time: '2024',
        title: '2nd Place, PhD Thesis Madness',
        institute: 'MICCAI 2024, Marrakesh',
        description: 'Global competition for groundbreaking doctoral research in medical imaging.'
    },
    {
        time: '2024',
        title: 'Best Paper Award',
        institute: 'EMERGE & ADSM Workshops @ MICCAI',
        description: 'Recognized for work on Deformable Autoencoders and Test-Time Adaptation.'
    }
];

export const service: Service[] = [
    { 
        role: 'Scientific Event Officer', 
        org: 'MICCAI Student Board', 
        period: '2024 - 2026',
        description: 'Elected officer representing the global student community and coordinating scientific events.'
    },
    { 
        role: 'Session and Area Chair', 
        org: 'MICCAI', 
        period: '2025',
        description: 'Coordinating peer-reviews and chairing oral sessions for the premier medical imaging conference.'
    },
    { 
        role: 'Program Chair', 
        org: 'MedEurIPS @ NeurIPS 2025', 
        period: '2025',
        description: 'Leading the flagship Medical Imaging workshop at EurIPS to bridge ML and clinical research.'
    },
    { 
        role: 'Lead Organizer', 
        org: 'MICCAI EMERGE Workshop', 
        period: '2025',
        description: 'Directing the MICCAI workshop focused on Foundation Models and Generative AI in Medical Imaging.'
    },
    { 
        role: 'Co-organizer', 
        org: 'MICCAI MOOD Challenge', 
        period: '2025',
        description: 'Directing the Medical Out-of-Distribution analysis challenge to benchmark anomaly detection robustness.'
    },
    { 
        role: 'Reviewer', 
        org: 'MICCAI, IEEE TMI, MEDIA', 
        period: 'Active',
        description: 'Providing expert peer review for top-tier journals and conferences in AI and Medical Imaging.'
    }
];

export const teaching: Teaching[] = [
    { role: 'Course Tutor', org: 'AI in Medicine', period: 'since 2023'},
    { role: 'Seminar Lead', org: 'AI for Vision and Multimodal Learning in Medical Imaging', period: 'since 2024 @ TUM' },
    { role: 'Seminar Lead', org: 'Unsupervised Anomaly Detection in Medicine', period: '2022 - 2024 @ TUM' },
    { role: 'Thesis Supervisor', org: 'Master\'s Theses and Projects in AI', period: 'Ongoing @ TUM' }
];

export const patents: Patent[] = [
    { id: 'US Patent 12,300,030', title: 'Detection device for recognizing an object and/or a person', authors: 'Bercea, C.I., Kapelner, T.', time: '2025' },
    { id: 'US Patent 12,243,241', title: 'Tracking of multiple objects using local and shared memory', authors: 'Bercea, C.I.', time: '2025' },
    { id: 'US Patent 12,086,993', title: 'Tracking in cooperation with multiple neural networks', authors: 'Bercea, C.I.', time: '2024' },
    { id: 'US Patent 10,885,663', title: 'Method for setting a viewing direction in a virtual environment', authors: 'Mutschler, C., et al.', time: '2021' },
    { id: 'US Patent 10,825,172', title: 'Medical image segmentation', authors: 'Pauly, O., Ghesu, F.C., Bercea, C.I.', time: '2020' },
    { id: 'DE Patent DE102020212856A1', title: 'Method and device for modeling a context of a physical system', authors: 'Lengsfeld, A., et al.', time: '2020' }
];

export const publications: Publication[] = [
    // 2026
    {
        title: "SegMaST: Mamba-based Spatio-Temporal Modeling to Improve Longitudinal Disease Detection and Segmentation",
        authors:
        "Aswathi Varma, Jonas Weidner, Laurin Lux, Cosmin Bercea, Mark Mühlau, Jan Kirschke, Benedikt Wiestler, Daniel Rueckert",
        journal: "Preprint [Under Review]",
        time: "2026",
        link: "https://openreview.net/forum?id=aJU5lkPRao",
    },
    {
        title: "Knowledge to Sight: Reasoning over Visual Attributes via Knowledge Decomposition for Abnormality Grounding",
        authors:
        "Jun Li, Che Liu, Wenjia Bai, Mingxuan Liu, Rossella Arcucci, Cosmin I. Bercea, Julia A. Schnabel",
        journal: "WACV",
        time: "2026",
        link: "https://arxiv.org/abs/2508.04572",
    },
    
    // 2025
    {
        title: "NOVA: A Benchmark for Rare Anomaly Localization and Clinical Reasoning in Brain MRI",
        authors:
        "Cosmin I. Bercea, Jun Li, Philipp Raffler, Evamaria Olga Riedel, Lena Schmitzer, Angela Kurz, Felix Bitzer, Paula Roßmüller, Julian Canisius, Mirjam L Beyrle, others",
        journal: "NeurIPS Datasets and Benchmarks Track",
        time: "2025",
        link: "https://neurips.cc/virtual/2025/loc/san-diego/poster/121770",
    },
    {
        title:
        "Evaluating normative representation learning in generative AI for robust anomaly detection in brain imaging",
        authors:
        "Cosmin I. Bercea, Benedikt Wiestler, Daniel Rückert, Julia A. Schnabel",
        journal: "Nature Communications",
        time: "2025",
        link: "https://doi.org/10.1038/s41467-025-56321-y",
    },
    {
        title: "Denoising diffusion models for anomaly localization in medical images",
        authors:
        "Cosmin I. Bercea, Philippe C. Cattin, Julia A. Schnabel, Julia Wolleb",
        journal: "MELBA",
        time: "2025",
        link: "https://www.melba-journal.org/papers/2025:030.html",
    },
    {
        title: "Does DINOv3 set a new medical vision standard?",
        authors:
        "Che Liu, Yinda Chen, Haoyuan Shi, Jinpeng Lu, Bailiang Jian, Jiazhen Pan, Linghan Cai, Jiayi Wang, Yundi Zhang, Jun Li, Cosmin I. Bercea, Cheng Ouyang, Chen Chen, Zhiwei Xiong, Benedikt Wiestler, Christian Wachinger, Daniel Rueckert, Wenjia Bai, Rossella Arcucci",
        journal: "arXiv preprint",
        time: "2025",
        link: "https://arxiv.org/abs/2509.06467",
    },
    {
        title: "Enhancing Abnormality Grounding for Vision Language Models with Knowledge Descriptions",
        authors:
        "Jun Li, Che Liu, Wenjia Bai, Rossella Arcucci, Cosmin I. Bercea, Julia A. Schnabel",
        journal: "arXiv preprint",
        time: "2025",
        link: "https://arxiv.org/abs/2503.03278",
    },
    {
        title: "Semantic Alignment of Unimodal Medical Text and Vision Representations",
        authors:
        "Maxime Di Folco, Emily Chan, Marta Hasny, Cosmin I. Bercea, Julia A. Schnabel",
        journal: "arXiv preprint",
        time: "2025",
        link: "https://arxiv.org/abs/2503.04478",
    },
    {
        title: "Influence of Classification Task and Distribution Shift Type on OOD Detection in Fetal Ultrasound",
        authors:
        "Chun Kit Wong, Anders N Christensen, Cosmin I. Bercea, Julia A. Schnabel, Martin G Tolsgaard, Aasa Feragen",
        journal: "MICCAI",
        time: "2025",
        link: "https://link.springer.com/chapter/10.1007/978-3-032-04981-0_28",
    },
    {
        title: "Learning to reason about rare diseases through retrieval-augmented agents",
        authors:
        "Ha Young Kim, Jun Li, Ana Beatriz Solana, Carolin M Pirkl, Benedikt Wiestler, Julia A. Schnabel, Cosmin I. Bercea",
        journal: "arXiv preprint",
        time: "2025",
        link: "https://arxiv.org/abs/2511.04720",
    },
    {
        title:
        "TomoGraphView: 3D Medical Image Classification with Omnidirectional Slice Representations and Graph Neural Networks",
        authors:
        "Johannes Kiechle, Stefan M Fischer, Daniel M Lang, Cosmin I. Bercea, Matthew J Nyflot, Lina Felsner, Julia A. Schnabel, Jan C Peeken",
        journal: "arXiv preprint",
        time: "2025",
        link: "https://arxiv.org/abs/2511.09605",
    },
    {
        title: "GroundingDINO for Open-Set Lesion Detection in Medical Imaging",
        authors:
        "Samuel James Roughley, Johanna Paula Müller, Shangqi Gao, Zeyu Gao, Marta Ligero, Rudolfs Blums, Mireia Crispin-Ortuzar, Julia A. Schnabel, Bernhard Kainz, Cosmin I. Bercea, Ines Machado",
        journal: "MICCAI EMERGE Workshop",
        time: "2025",
        link: "https://openreview.net/pdf?id=Rvdet5Tm9n",
    },
    
    // 2024
    {
        title: "Selective Test-Time Adaptation for Unsupervised Anomaly Detection using Neural Implicit Representations",
        authors: "Sameer Ambekar, Julia A. Schnabel, Cosmin I. Bercea",
        journal: "MICCAI ADSMI Workshop",
        time: "2024",
        link: "https://arxiv.org/abs/2410.03306",
    },
    {
        title: "Fmbench: Benchmarking fairness in multimodal large language models on medical tasks",
        authors:
        "Peiran Wu, Che Liu, Canyu Chen, Jun Li, Cosmin I. Bercea, Rossella Arcucci",
        journal: "arXiv preprint",
        time: "2024",
        link: "https://arxiv.org/abs/2410.01089",
    },
    {
        title: "Towards universal unsupervised anomaly detection in medical imaging",
        authors:
        "Cosmin I. Bercea, Benedikt Wiestler, Daniel Rueckert, Julia A. Schnabel",
        journal: "arXiv preprint",
        time: "2024",
        link: "https://arxiv.org/abs/2401.10637",
    },
    {
        title: "Diffusion models with implicit guidance for medical anomaly detection",
        authors:
        "Cosmin I. Bercea, Benedikt Wiestler, Daniel Rueckert, Julia A. Schnabel",
        journal: "MICCAI",
        time: "2024",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-72120-5_20",
    },
    {
        title: "Interpretable Representation Learning of Cardiac MRI via Attribute Regularization",
        authors:
        "Maxime Di Folco, Cosmin I. Bercea, Emily Chan, Julia A. Schnabel",
        journal: "MICCAI",
        time: "2024",
        link: "https://arxiv.org/abs/2406.08282",
    },
    {
        title: "Language models meet anomaly detection for better interpretability and generalizability",
        authors:
        "Jun Li, Su Hwan Kim, Philip Müller, Lina Felsner, Daniel Rueckert, Benedikt Wiestler, Julia A. Schnabel, Cosmin I. Bercea",
        journal: "MICCAI MMMI Workshop",
        time: "2024",
        link: "https://arxiv.org/abs/2404.07622",
    },
    {
        title: "Multi-image visual question answering for unsupervised anomaly detection",
        authors:
        "Jun Li, Cosmin I. Bercea, Philip Müller, Lina Felsner, Su Hwan Kim, Daniel Rueckert, Benedikt Wiestler, Julia A. Schnabel",
        journal: "arXiv preprint",
        time: "2024",
        link: "https://arxiv.org/abs/2404.07622v1",
    },
    {
        title: "Unsupervised Analysis of Alzheimer’s Disease Signatures using 3D Deformable Autoencoders",
        authors:
        "Mehmet Yigit Avci, Emily Chan, Veronika Zimmer, Daniel Rueckert, Benedikt Wiestler, Julia A. Schnabel, Cosmin I. Bercea",
        journal: "MICCAI EMERGE Workshop",
        time: "2024",
        link: "https://arxiv.org/abs/2407.03863",
    },
    {
        title: "Mededit: Counterfactual diffusion-based image editing on brain mri",
        authors:
        "Malek Ben Alaya, Daniel M Lang, Benedikt Wiestler, Julia A. Schnabel, Cosmin I. Bercea",
        journal: "MICCAI Sashimi Workshop",
        time: "2024",
        link: "https://arxiv.org/abs/2407.15270",
    },
    {
        title: "Diffusion models for unsupervised anomaly detection in fetal brain ultrasound",
        authors:
        "Hanna Mykula, Lisa Gasser, Silvia Lobmaier, Julia A. Schnabel, Veronika Zimmer, Cosmin I. Bercea",
        journal: "MICCAI ASMUS Workshop",
        time: "2024",
        link: "https://arxiv.org/abs/2407.15119",
    },
    {
        title: "Denoising Diffusion Models for 3D Healthy Brain Tissue Inpainting",
        authors:
        "Alicia Durrer, Julia Wolleb, Florentin Bieder, Paul Friedrich, Lester Melie-Garcia, Mario Alberto Ocampo Pineda, Cosmin I. Bercea, Ibrahim Ethem Hamamci, Benedikt Wiestler, Marie Piraud, Oezguer Yaldizli, Cristina Granziera, Bjoern Menze, Philippe C Cattin, others",
        journal: "MICCAI DGM4 Workshop",
        time: "2024",
        link: "https://arxiv.org/abs/2403.14499",
    },    
    // 2023
    {
        title: "Attribute Regularized Soft Introspective VAE: Towards Cardiac Attribute Regularization Through MRI Domains",
        authors: "Maxime Di Folco, Cosmin Bercea, Julia A. Schnabel",
        journal: "arXiv preprint",
        time: "2023",
        link: "https://arxiv.org/abs/2307.12618",
    },
    {
        title:
        "Mask, stitch, and re-sample: Enhancing robustness and generalizability in anomaly detection through automatic diffusion models",
        authors:
        "Cosmin I. Bercea, Michael Neumayr, Daniel Rueckert, Julia A. Schnabel",
        journal: "ICML IMLH Workshop",
        time: "2023",
        link: "https://arxiv.org/abs/2305.19643",
    },
    {
        title: "Generalizing Unsupervised Anomaly Detection: Towards Unbiased Pathology Screening",
        authors:
        "Cosmin I. Bercea, Benedikt Wiestler, Daniel Rueckert, Julia A. Schnabel",
        journal: "Medical Imaging with Deep Learning",
        time: "2023",
        link: "https://openreview.net/forum?id=8ojx-Ld3yjR",
    },
    {
        title: "What do AEs learn? Challenging common assumptions in unsupervised anomaly detection",
        authors:
        "Cosmin I. Bercea, Daniel Rueckert, Julia A. Schnabel",
        journal: "MICCAI",
        time: "2023",
        link: "",
    },
    {
        title: "Reversing the Abnormal: Pseudo-Healthy Generative Networks for Anomaly Detection",
        authors:
        "Cosmin I. Bercea, Benedikt Wiestler, Daniel Rueckert, Julia A. Schnabel",
        journal: "MICCAI",
        time: "2023",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-43904-9_30",
    },
    {
        title: "Bias in unsupervised anomaly detection in brain MRI",
        authors:
        "Cosmin I. Bercea, Esther Puyol-Antón, Benedikt Wiestler, Daniel Rueckert, Julia A. Schnabel, Andrew P King",
        journal: "MICCAI FAIMI Workshop",
        time: "2023",
        link: "https://arxiv.org/abs/2308.13861v1",
    },
    {
        title:
        "Multispectral 3D masked autoencoders for anomaly detection in non-contrast enhanced breast MRI",
        authors:
        "Daniel M Lang, Eli Schwartz, Cosmin I. Bercea, Raja Giryes, Julia A. Schnabel",
        journal: "MICCAI Workshop on Cancer Prevention through Early Detection",
        time: "2023",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-45350-2_5",
    },
    
    // 2022
    {
        title:
        "Federated disentangled representation learning for unsupervised brain anomaly detection",
        authors:
        "Cosmin I. Bercea, Benedikt Wiestler, Daniel Rueckert, Shadi Albarqouni",
        journal: "Nature Machine Intelligence",
        time: "2022",
        link: "https://www.nature.com/articles/s42256-022-00515-2",
    },
    {
        title:
        "SPA: Shape-Prior Variational Autoencoders for Unsupervised Brain Pathology Segmentation",
        authors:
        "Cosmin I. Bercea, Benedikt Wiestler, Daniel Rueckert, Shadi Albarqouni",
        journal: "Preprint",
        time: "2022",
        link: "https://openreview.net/pdf?id=f3dmKk50hI",
    },
    
    // 2021
    {
        title:
        "Feddis: Disentangled federated learning for unsupervised brain pathology segmentation",
        authors:
        "Cosmin I. Bercea, Benedikt Wiestler, Daniel Rueckert, Shadi Albarqouni",
        journal: "arXiv preprint",
        time: "2021",
        link: "https://arxiv.org/abs/2103.03705",
    },
       
    // 2019
    {
        title: "SHAMANN: Shared memory augmented neural networks",
        authors:
        "Cosmin I. Bercea, Olivier Pauly, Andreas Maier, Florin C Ghesu",
        journal: "IPMI",
        time: "2019",
        link: "https://link.springer.com/chapter/10.1007/978-3-030-20351-1_65",
    },
    
    // 2016
    {
        title:
        "Confidence-aware levenberg-marquardt optimization for joint motion estimation and super-resolution",
        authors: "Cosmin Bercea, Andreas Maier, Thomas Köhler",
        journal: "IEEE ICIP",
        time: "2016",
        link: "https://arxiv.org/abs/1609.01524",
    },
];
      

export const skills: Skill[] = [
    { title: 'AI & Generative Modeling', description: 'Diffusion Models, VAEs, LLMs, Vision-Language Models (VLMs), Mamba Architectures.' },
    { title: 'Medical Computing', description: 'MRI/CT Analysis, Anomaly Localization, Unsupervised Pathology Screening, MONAI, PyTorch.' }
];