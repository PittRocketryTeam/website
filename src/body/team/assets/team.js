const img_path = process.env.PUBLIC_URL + "/img/officers/"

const team = {
    "team": [
        {
        "name": "Eric Sherbocker",
        "position": "Captain",
        "image": img_path + "",
        "descript": [
            "I am a junior Mechanical Engineering student and am currently serving as our team captain and manufacturing lead.",
            "I am looking forward to a successful year with our team! Please email me at, ems261@pitt.edu, with any questions regarding our organization."
        ],
        skills: ["Mechanical Design", "Manufacturing", "SolidWorks Modeling"]
        },
        {
            "name": "Thomas Jefferson",
            "position": "Vice President",
            "image": img_path + "officer_sit.jpg",
            "descript": [
                "I am the Pitt Rocketry Club's President.",
                "I have been fascated by rockets since I was young."
            ],
            skills: ["rockets", "electronics", "programming", "mechanical"]
        },
        {
            "name": "Benjamin Franklin",
            "position": "Techincal Lead",
            "image": img_path + "officer_helmet.jpg",
            "descript": [
                "I am the Pitt Rocketry Club's President.",
                "I know everything about rockets so please talk to me."
            ],
            skills: ["rockets", "electronics", "programming", "mechanical"]
        },
        {
            "name": "John Adams",
            "position": "Outreach Lead",
            "image": img_path + "officer_sit.jpg",
            "descript": [
                "I am the Pitt Rocketry Club's President.",
                "I know everything about rockets so please talk to me."
            ],
            skills: ["rockets", "electronics", "programming", "mechanical"]
        },
        {
            "name": "Thomas Paine",
            "position": "Business Lead",
            "image": img_path + "officer_helmet.jpg",
            "descript": [
                "I am the Pitt Rocketry Club's President.",
                "I know everything about rockets so please talk to me."
            ],
            skills: ["rockets", "electronics", "programming", "mechanical"]
        }
    ]
}

export default team;
