import React from "react";
import TeamMember from "./TeamMembers";
import team from "./assets/team.js";
import "./assets/style_team.css";

function Team() {
    return (
        <div>
            <h1>Meet the Officers</h1>
            <div className="members">
                {team["team"].map((value, index) =>{
                    return <TeamMember key={index} attr={value} />
                })}
            </div>
        </div>
    )
}

export default Team;
