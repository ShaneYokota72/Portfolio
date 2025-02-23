export interface Project {
    name: string;
    date: string;
    description: string[];
    image: string;
    links: Record<string, string>;
    productHuntEmbed?: string;
}

export const projectArray: Project[] = [
    {
        name: "Tacer",
        date: "Jun 2024 - Present",
        description: ["One click job application tracker(Chrome extension)."],
        image: "/TacerProject.png",
        links: {
            'Chrome Web Store': "https://chromewebstore.google.com/detail/tacer/jolmhpelmbiobcnaiadpblmekgidbcmf",
            'Website': "https://tacer.vercel.app/",
        },
        productHuntEmbed: '<a href="https://www.producthunt.com/posts/tacer?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tacer" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=907683&theme=light&t=1740309181022" alt="Tacer - One&#0032;click&#0032;job&#0032;application&#0032;tracker&#0033; | Product Hunt" style="width: 195px; height: 42px;" width="195" height="42" /></a>'
    },
    {
        name: "Lumora",
        date: "Feb 2025",
        description: ["Your AI-Powered Collaboration Hub", "🏆 Most Creative Use of Vercel/v0 in Edge AI track prize @ Treehacks25."],
        image: "/Lumora.png",
        links: {
            'Github': "https://github.com/ShaneYokota72/Lumora",
            'Devpost': "https://devpost.com/software/lumora"
        },
    },
    {
        name: "Tinker",
        date: "Feb 2024 - May 2024",
        description: ["Mobile app simplifying property management for landlords."],
        image: "/TinkerProject.png",
        links: {
            'Pitch Deck': "https://www.figma.com/proto/IvQxyZJCGeXyFHwF3luDuc/Lava-Decks?node-id=545-10575&node-type=canvas&t=oziPgY4thpZfrjCW-1&scaling=contain&content-scaling=fixed&page-id=545%3A10574&starting-point-node-id=545%3A10575"
        },
    },
    {
        name: "DevMesh",
        date: "Jun 2023 - Aug 2024",
        description: ["Collaborative cloud platform for all developers to edit codes together"],
        image: "/Devmesh.jpg",
        links: {
            'Github': "https://github.com/ShaneYokota72/DevMesh-FrontEnd",
            'Website': "https://devmesh.vercel.app/",
            'YouTube': "https://youtu.be/-ppDyhM1jH8"
        },
    },
    {
        name: "Med2Meals",
        date: "Feb 2024",
        description: ["Service linking users with local chefs for personalized, health-focused meals.", "🏆 1st place CrossMint Prize @ TreeHacks24."],
        image: "/Med2MealsProject.jpg",
        links: {
            'Github': "https://github.com/ShaneYokota72/Med2Meals",
            'Devpost': "https://devpost.com/software/nourish-connect"
        },
    },
    {
        name: "CareerChain",
        date: "Oct 2023",
        description: ["Blockchain-based hiring platform reducing work for recruiters.", "🏆 Best Use of XRP Ledger Prize @ Cal Hacks 10.0."],
        image: "/CareerChain.png",
        links: {
            'Devpost': "https://devpost.com/software/nourish-connect"
        },
    },
]