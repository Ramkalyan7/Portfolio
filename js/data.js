const portfolioData = {
    hero: {
        name: "RAMKALYAN",
        typingText: [
            "Full Stack Developer", 
            "Backend Engineer",
            "System Architect" 
        ],
        description: "Building scalable backend systems and high-performance web applications."
    },
    about: {
        paragraphs: [
            `I am a Full Stack Developer who bridges the gap between engaging UI and high-performance backend architecture. 
            With deep expertise in <span class="highlight">React, Next.js, and Node.js</span>, I don't just write code—I build systems that scale.`,
            
            `My work at PlaySimple Games proved that well-engineered features directly drive revenue, boosting LTV by over 25% across multiple initiatives. 
            I value clean architecture, data-driven iteration, and shipping products that matter.`
        ],
        techStack: [
            "TypeScript","React","Node.js", "Next.js","Tailwind","MongoDB",
            "PostgresSQL","Jest","Vitest","Cypress","Docker","AWS","Github","Go","C#","Unity"
        ]
    },
    experience: [
        {
            role: "Associate Software Engineer",
            company: "PlaySimple Games",
            date: "May 2025 – Oct 2025",
            description: "Led the development of core gameplay mechanics for 'Word Roll,' bridging Unity client-side logic with high-performance Go backend services.",
            achievements: [
                "<strong>Spinner Feature:</strong> Architected a complex in-game reward system with custom animations. <span class='highlight'>→ 12% increase in LTV</span>.",
                "<strong>Cross-Platform Shortcuts:</strong> Engineered a reusable Unity package for Android/iOS shortcuts. <span class='highlight'>→ 90% reduction</span> in integration time."
            ]
        },
        {
            role: "SDE Intern",
            company: "PlaySimple Games",
            date: "Feb 2024 – May 2025",
            description: "Owned critical social and monetization features that directly impacted the game's bottom line.",
            achievements: [
                "<strong>Friends System:</strong> Built the entire social infrastructure (invites, discovery, status). <span class='highlight'>→ 7% LTV uplift</span>.",
                "<strong>Monetization Engine:</strong> Deployed new In-App Purchase (IAP) strategies and pricing models. <span class='highlight'>→ 9% LTV boost</span>.",
                "<strong>Competitive Features:</strong> Revamped leaderboard algorithms for real-time ranking accuracy. <span class='highlight'>→ 4% LTV boost</span>."
            ]
        },
        {
            role: "Web Developer Intern",
            company: "Rish Electromobility",
            date: "June 2022 – Dec 2022",
            description: "", 
            achievements: [
                "<strong>Fleet Command Center:</strong> Developed a dashboard tracking real-time vehicle availability and maintenance cycles.",
                "<strong>Subscription Engine:</strong> Automated customer lifecycle—onboarding, payments, and renewals—replacing manual workflows."
            ]
        }
    ],
    projects: [
        {
            title: "AI Quiz App",
            category: "Real-Time Multiplayer",
            challenge: "Building a quiz app that handles concurrent live connections, syncs scores instantly, and generates infinite content.",
            solution: "I engineered a WebSocket-driven architecture where state is synchronized in real-time, integrating the Perplexity API to generate unique, context-aware questions on the fly.",
            techStack: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Perplexity API"],
            links: {
                github: "https://github.com/Ramkalyan7/Quiz-app",
                demo: "https://quiz-app-web-three.vercel.app/"
            }
        },
        {
            title: "Echo Room",
            category: "Video Conferencing",
            challenge: "Ensuring reliable video conferencing with low latency, secure access, and complex state management.",
            solution: "A production-grade video suite built on WebRTC (via GetStream). I prioritized security with Clerk authentication and usability with persistent 'Personal Rooms' for recurring meetings.",
            techStack: ["Next.js", "TypeScript", "GetStream", "Clerk", "Shadcn UI"],
            links: {
                github: "https://github.com/Ramkalyan7/Echo-Room-V2",
                demo: "https://echo-room-v2.vercel.app/"
            }
        }
    ],
    contact: {
        email: "yramkalyan0707@gmail.com",
        linkedin: "https://www.linkedin.com/in/ram0707",
        github: "https://github.com/Ramkalyan7"
    }
};
