interface Project {
    name: string;
    description: string[];
    image: string;
    links: Record<string, string>;
}

interface ProjectData {
    title: string;
    description: string[];
    link?: string;
    github?: string;
    image?: string[];
    imagestyle?: boolean;
}

export const projectArray: Project[] = [
    {
        name: "Tacer",
        description: ["One click job application tracker(Chrome extension)."],
        image: "/TacerProject.png",
        links: {
            'Chrome Web Store': "https://chromewebstore.google.com/detail/tacer/jolmhpelmbiobcnaiadpblmekgidbcmf"
        }
    },
    {
        name: "Tinker",
        description: ["Mobile app simplifying property management for landlords."],
        image: "/TinkerProject.png",
        links: {
            'Pitch Deck': "https://www.figma.com/proto/IvQxyZJCGeXyFHwF3luDuc/Lava-Decks?node-id=545-10575&node-type=canvas&t=oziPgY4thpZfrjCW-1&scaling=contain&content-scaling=fixed&page-id=545%3A10574&starting-point-node-id=545%3A10575"
        }
    },
    {
        name: "Med2Meals",
        description: ["Service linking users with local chefs for personalized, health-focused meals.", "🏆1st place CrossMint Prize @ TreeHacks24."],
        image: "/Med2MealsProject.jpg",
        links: {
            'Github': "https://github.com/ShaneYokota72/Med2Meals",
            'Devpost': "https://devpost.com/software/nourish-connect"
        },
    },
    {
        name: "DevMesh",
        description: ["Collaborative cloud platform for all developers to edit codes together"],
        image: "/Devmesh.jpg",
        links: {
            'Github': "https://github.com/ShaneYokota72/DevMesh-FrontEnd",
            'Website': "https://devmesh.vercel.app/",
            'YouTube': "https://youtu.be/-ppDyhM1jH8"
        },
    },
    {
        name: "Task-Clear",
        description: ["This is to-do app with several other features that helps the user clear out their task faster and more efficiently"],
        image: "/taskclear.jpg",
        links: {
            'Github': "https://github.com/ShaneYokota72/task.clear",
            'Website': ""
        },
    },
    {
        name: "Sports Betting Helper",
        description: ["This program helps users with sports betting after analyzing the past game statistics"],
        image: "/sportsbetting.jpeg",
        links: {
            'Github': "",
            'Website': ""
        },
    },
    {
        name: "Number Scan",
        description: ["This is a numberscanner, which is a program that is able to detect and recognize the numbers in images just like when you scan a giftcard!"],
        image: "/NumScanImage.jpg",
        links: {
            'Github': "",
            'Website': ""
        },
    }
]

type projectmetadata = Record<string, ProjectData>;
export const projectData: projectmetadata = {
    devmesh: 
    {
        title: "DevMesh",
        description: ["Devmesh is a collaborative cloud platform for all developers. It features such as collaborative room create/join, reamtime code editing/messaging, public/private room setting, and free code storage.", "It is a full stack application built with React, Node.js, Express.js, MongoDB, and Socket.io, and it is hosted on Vercel and AWS-EC2."],
        link: "https://devmesh.vercel.app/",
        github: "https://github.com/ShaneYokota72/DevMesh-FrontEnd",
        image: ["/dmesh_1.jpg", "/dmesh_2.jpg"]
    }
    ,
    taskclear: 
    {
        title: "Task-Clear",
        description: ["This is to-do app with several other features that helps the user clear out their task faster and more efficiently made for students to use.", "The aim of the app is to maximize the user's potential and minimize the user's workload. To do this, the app has several features that help the user clear out their tasks faster.", "- The timer feature allows the user to set a timer for each task and the app will keep track of the time spent on each task to provide a detailed analysis.", "- The analytics feature allows the user to see how much time they have spent on each class tasks and how much time they have spent studying for the past 7 days.", "- The collaboration feature allows the user to share their tasks with other users and work on the same task together."],
        link: "https://taskclear.vercel.app/",
        github: "https://github.com/ShaneYokota72/task.clear",
        image: ["/taskclear2.jpg"],
    }
    ,
    sportsbetting: 
    {
        title: "Sports Betting Helper",
        description: ["↑ Some of the regresssion line from the data analyze", "", "", "This program helps users with sports betting after analyzing the past game statistics.", "", "This nba sports betting helper utilizes a real time dataset of nba players' performance to assist in making informed betting decisions. By applying linear regression to the player's past 10 game data, the program calculates a regression line. It then compares the predicted value at the next game with a provided threshold to suggest whether to bet above, below, or abstain from betting, enabling users to make more data-driven choices in nba sports betting."],
        link: "",
        github: "https://github.com/ShaneYokota72/SportsBetting-Assist",
        image: ["/SportsBetting1.jpg", "/SportsBetting2.jpg"],
        imagestyle: true,
    }
    ,
    numberscan: 
    {
        title: "Number Scan",
        description: ["THis is a numberscanner, which is a program that is able to detect and recognize the numbers in images just like when you scan a giftcard!", "This project is a optical character recognition program developed in C++ and Javascript to process the images. The program is able to accurately detect and recognize the numbers in images by using a multi-stage approach, including digit recognition, digit pixel calculations, and classification.", "The preprocessing techniques include converting the image to grayscale and applying a threshold.", "The digit pixel calculations include calculating the euler number, the number of holes, and the number of connected components, placement of center of mass, and more.", "The classification is done by using all the values calculated in the digit pixel calculations."],
        link: "",
        github: "https://github.com/ShaneYokota72/Portfolio/blob/main/src/Components/NumberScan.js",
    }
    
}