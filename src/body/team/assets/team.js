const img_path = process.env.PUBLIC_URL + "/img/officers/";

const team = {
  team: [
    {
      name: "Eric Sherbocker",
      position: "Captain",
      image: img_path + "",
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
      name: "Benjamin Franklin",
      position: "Techincal Lead",
      image: img_path + "officer_helmet.jpg",
      descript: [
        "I am the Pitt Rocketry Club's President.",
        "I know everything about rockets so please talk to me."
      ],
      skills: ["rockets", "electronics", "programming", "mechanical"]
    },
    {
      name: "John Adams",
      position: "Outreach Lead",
      image: img_path + "officer_sit.jpg",
      descript: [
        "I am the Pitt Rocketry Club's President.",
        "I know everything about rockets so please talk to me."
      ],
      skills: ["rockets", "electronics", "programming", "mechanical"]
    },
    {
      name: "Thomas Paine",
      position: "Business Lead",
      image: img_path + "officer_helmet.jpg",
      descript: [
        "I am the Pitt Rocketry Club's President.",
        "I know everything about rockets so please talk to me."
      ],
      skills: ["rockets", "electronics", "programming", "mechanical"]
    }
  ]
};

export default team;
