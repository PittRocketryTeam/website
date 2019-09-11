const img_path = process.env.PUBLIC_URL + "/img/officers/";

const team = {
  team: [
    {
      name: "Eric Sherbocker",
      position: "Captain",
      image: img_path + "eric_s.jpg",
      descript: [
        "I am a junior Mechanical Engineering student and am currently serving as our team captain and manufacturing lead.",
        "I am looking forward to a successful year with our team! Please email me at, ems261@pitt.edu, with any questions regarding our organization."
      ],
      skills: ["Mechanical Design", "Manufacturing", "SolidWorks Modeling"]
    },
    {
      name: "Daniel Stumpp",
      position: "Avionics Lead",
      image: img_path + "dcs_pic.jpg",
      descript: [
        "I am the Pitt Rocketry Club's Avionics Team Lead. I am a junior electrical engineering student with a focus on digital systems.",
        "I was an avionics subteam member during the 2018-2019 competition season. I worked on the gps system and ground control interface. Outside of rocketry I have gained engineering experiance through an internship with Raytheon Missile Systems and through research involving low latency computing using FPGAs."
      ],
      skills: [
        "Embedded Systems",
        "Circuit Design",
        "Solidworks Modeling",
        "Process Automation"
      ]
    },
    {
        "name": "Leah Sirkis",
        "position": "Mechanical Subteam Lead",
        "image": img_path + "leah_sirkis.heic",
        "descript": [
          "I am SOAR's Mechanical Subteam Lead.",
          "The Mechanical Team is in charge of design and manufacturing. If you have any questions or would like to join, feel free to contact me or the team!"
        ],
        skills: ["simulations", "CAD", "mechanical"]
    },
    {
        "name": "Fernando Tabares",
        "position": "Integration Lead",
        "image": img_path + "fernando_tabares.jpg",
        "descript": [
          "I am SOAR's Integration Lead.",
          "My job is to ensure that all design decisions are coherent throughout all of the rocket's subsystems."
        ],
        skills: ["CAD", "mechanical", "Rapid Prototyping", "manufacturing"]
    },
    {
        "name":"Aarti Patel",
        "position":"Vice President & Safety Lead",
        "image": img_path + "aarti_patel.jpg",
        "descript":[
          "I am SOAR's Vice President & Safety Lead.",
          "As the Vice President & Safety Lead, I am responsible for assisting with ",
          "the organization of the team as well as implementing a safety plan ",
          "for our team members."
        ],
        skills: ["mechanical","recovery system","CAD","technical writing","presentation"]
    }
  ]
};

export default team;
