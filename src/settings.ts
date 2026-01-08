export const profile = {
    fullName: 'Cosmin I. Bercea',
    title: 'Postdoctoral Researcher in Generative AI & Medical Imaging',
    institute: 'Technical University of Munich (TUM)',
    author_name: 'Cosmin I. Bercea', // This will highlight your name in your publication list
    research_areas: [
        { 
            title: 'Normative Learning', 
            description: 'Learning the "healthy manifold" from large-scale clinical data to enable unsupervised pathology screening.', 
            field: 'ai-medicine', 
			color: 'blue',
			link: '/research/normative-learning',
			ui_effect: 'scan', 
            content: `Normative learning redefines anomaly detection by establishing a high-fidelity reference of healthy anatomy. Using generative models, we can quantify how far a patient's scan deviates from the healthy norm.`,
            featured_papers: [
                { title: "Evaluating Normative Representation Learning", venue: "Nature Communications 2025", link: "#" },
                { title: "Auto-encoding Variational Bayes for Healthy Synthesis", venue: "MICCAI 2023", link: "#" }
            ]
        }, 
        { 
            title: 'The Unseen & Unknown', 
            description: 'Developing robust anomaly detection systems that identify rare disease signatures without expert labels.', 
            field: 'vision', 
			color: 'purple',
			link: '/research/unseen',
			ui_effect: 'pulse', // Trigger a pulse animation
            content: `Clinical AI often fails on "Out-of-Distribution" data. My research focuses on making systems aware of what they don't know, specifically detecting resections and rare malformations.`,
            featured_papers: [
                { title: "Reversing the Abnormal: Pseudo-Healthy Generation", venue: "NeurIPS 2024", link: "#" }
            ]
        },
        { 
            title: 'Multimodal Reasoning', 
            description: 'Integrating Vision-Language Models (VLMs) for clinical grounding and automated diagnostic reporting.', 
            field: 'generative-ai', 
			color: 'emerald',
			link: '/research/multimodal-reasoning',
			ui_effect: 'connect', // New effect
    		content: `My research in VLMs moves beyond simple classification. We develop models that can 'reason' over medical images, answering complex clinical questions and grounding their answers in visual evidence.`,
    		featured_papers: [
        	{ title: "NOVA: A Benchmark for Clinical Reasoning", venue: "Arxiv 2024", link: "#" }
    	]
        },
    ],
}

// Global social links - update these with your specific handles
export const social = {
    email: 'cosmin.bercea@tum.de',
    linkedin: 'https://www.linkedin.com/in/cosmin-bercea/',
    scholar: 'https://scholar.google.com/citations?user=6M7srVcAAAAJ&hl=en',
    x: '',
    bluesky: '',
    github: 'https://github.com/ci-ber',
    gitlab: '',
    inspire: '',
    arxiv: '',
    huggingface: 'https://huggingface.co/c-i-ber',
    orcid: 'https://orcid.org/0000-0003-2628-2766',
}

export const template = {
    website_url: 'https://cosmin-bercea.com', 
    menu_left: false,
    transitions: true,
    lightTheme: 'cosmin', 
    darkTheme: 'cosmin-dark', 
    excerptLength: 200,
    postPerPage: 5,
    base: '/', 
}

export const seo = {
    default_title: 'Cosmin I. Bercea | Generative AI & Medical Imaging',
    default_description: 'Portfolio of Dr. Cosmin Bercea focusing on Normative Learning, Anomaly Detection, and Generative AI for Medical Imaging.',
    default_image: '/images/profile_pictures.jpg',
}