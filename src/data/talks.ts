// src/data/talks.ts

export type TalkItem = {
    date: string;        // "YYYY-MM-DD"
    title: string;       // short panel title
    subtitle?: string;   // one-line context
    href: string;        // story page route (create these later)
    badge?: string;      // e.g. "Oral", "Workshop", "Conference"
    readTime?: string;   // "1 min read"
    media?: {
      poster?: string;   // /media/talks/xxx.jpg
      mp4?: string;      // /media/talks/xxx.mp4  (preferred)
      webm?: string;     // /media/talks/xxx.webm (optional)
      gif?: string;      // fallback
    };
    featured?: boolean;  // show first
  };
  
  export const talks: TalkItem[] = [
    {
      date: "2025-12-01",
      title: "NeurIPS 2025 (Oral) —San Diego",
      subtitle: "New datasets on rare anomaly localization and clinical reasoning in brain MRI.",
      badge: "Oral",
      readTime: "1 min read",
      href: "/talks/neurips-nova",
      media: {
        // poster: "/media/talks/neurips-nova.jpg",
        // mp4: "/media/talks/neurips-nova.mp4",
        // webm: "/media/talks/neurips-nova.webm",
        gif: "/media/neurips25.gif"
      },
      featured: true,
    },
    {
        date: "2025-09-28",
        title: "MICCAI 2025 — Daejeon",
        subtitle: "2nd edition of the EMERGE workshop * Keynote on foundational models for medical anomaly detection.",
        badge: "Conference",
        readTime: "1 min read",
        href: "/talks/miccai-2024",
        media: {
          // poster: "/media/talks/miccai-2024.jpg",
          // mp4: "@/assets/miccai24.gif",
          // webm: "/media/talks/miccai-2024.webm",
          gif: "/media/miccai25.gif",
        },
        featured: true,
      },
    {
      date: "2024-10-10",
      title: "MICCAI 2024 — Marrakesh",
      subtitle: "Six works on anomaly detection and 3 awards across workshops.",
      badge: "Conference",
      readTime: "1 min read",
      href: "/talks/miccai-2024",
      media: {
        // poster: "/media/talks/miccai-2024.jpg",
        // mp4: "@/assets/miccai24.gif",
        // webm: "/media/talks/miccai-2024.webm",
        gif: "/media/miccai24.gif",
      },
      featured: true,
    },
    {
      date: "2023-10-01",
      title: "MICCAI 2023 — Vancouver",
      subtitle: "Three papers accepted at MICCAI 2023.",
      badge: "Conference",
      readTime: "1 min read",
      href: "/talks/miccai-2023",
      media: {
        // poster: "/media/talks/miccai-2023.jpg",
        // mp4: "/media/talks/miccai-2023.mp4",
        gif: "/media/miccai23.gif",
      },
    },
    {
      date: "2023-07-01",
      title: "MIDL 2023 (Oral) — Nashville",
      subtitle: "Universal anomaly detection in Nashville, Tennessee.",
      badge: "Oral",
      readTime: "1 min read",
      href: "/talks/midl-2023",
      media: {
        // poster: "/media/talks/midl-2023.jpg",
        // mp4: "/media/talks/midl-2023.mp4",
        gif: "/media/midl23.gif",
      },
    },
    // {
    //   date: "2023-07-01",
    //   title: "ICML 2023 — IMLH Workshop",
    //   subtitle: "AutoDDPM accepted and presented in Hawaii, US.",
    //   badge: "Workshop",
    //   readTime: "1 min read",
    //   href: "/talks/icml-2023",
    //   media: {
    //     poster: "/media/talks/icml-2023.jpg",
    //     mp4: "/media/talks/icml-2023.mp4",
    //   },
    // },
  ];
  