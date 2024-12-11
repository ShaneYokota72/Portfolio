export interface Project {
    name: string;
    date: string;
    description: string[];
    image: string;
    links: Record<string, string>;
    colors?: string[];
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
        colors: ["via-purple-800", "via-purple-800", "group-hover:via-purple-500"]
    },
    {
        name: "Tinker",
        date: "Feb 2024 - May 2024",
        description: ["Mobile app simplifying property management for landlords."],
        image: "/TinkerProject.png",
        links: {
            'Pitch Deck': "https://www.figma.com/proto/IvQxyZJCGeXyFHwF3luDuc/Lava-Decks?node-id=545-10575&node-type=canvas&t=oziPgY4thpZfrjCW-1&scaling=contain&content-scaling=fixed&page-id=545%3A10574&starting-point-node-id=545%3A10575"
        },
        colors: ["via-green-800", "via-green-800", "group-hover:via-green-500"]
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
        colors: ["via-yellow-800", "via-yellow-800", "group-hover:via-yellow-500"]
    },
    {
        name: "Med2Meals",
        date: "Feb 2024",
        description: ["Service linking users with local chefs for personalized, health-focused meals.", "🏆1st place CrossMint Prize @ TreeHacks24."],
        image: "/Med2MealsProject.jpg",
        links: {
            'Github': "https://github.com/ShaneYokota72/Med2Meals",
            'Devpost': "https://devpost.com/software/nourish-connect"
        },
        colors: ["via-rose-800", "via-rose-800", "group-hover:via-rose-500"]
    },
    {
        name: "CareerChain",
        date: "Oct 2023",
        description: ["Blockchain-based hiring platform reducing work for recruiters.", "🏆Best Use of XRP Ledger Prize @ Cal Hacks 10.0."],
        image: "/CareerChain.png",
        links: {
            'Devpost': "https://devpost.com/software/nourish-connect"
        },
        colors: ["via-slate-800", "via-slate-800", "group-hover:via-slate-500"]
    },
    // {
    //     name: "Task-Clear",
    //     date: "",
    //     description: ["This is to-do app with several other features that helps the user clear out their task faster and more efficiently"],
    //     image: "/taskclear.jpg",
    //     links: {
    //         'Github': "https://github.com/ShaneYokota72/task.clear",
    //         'Website': ""
    //     },
    //     colors: ["", "", ""]
    // },
    // {
    //     name: "Sports Betting Helper",
    //     date: "",
    //     description: ["This program helps users with sports betting after analyzing the past game statistics"],
    //     image: "/sportsbetting.jpeg",
    //     links: {
    //         'Github': "",
    //         'Website': ""
    //     },
    //     colors: ["", "", ""]
    // },
    // {
    //     name: "Number Scan",
    //     date: "",
    //     description: ["This is a numberscanner, which is a program that is able to detect and recognize the numbers in images just like when you scan a giftcard!"],
    //     image: "/NumScanImage.jpg",
    //     links: {
    //         'Github': "",
    //         'Website': ""
    //     },
    //     colors: ["", "", ""]
    // }
]