import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import Home from "../body/home/Home";
import Team from "../body/team/Team";
import Event from "../body/event/Event";
import Projects from "../body/project/Projects";
import Learn from "../body/Learn";

function Routes() {
    console.log("This is the process.env", process.env.PUBLIC_URL);
    return (
        <div className="title">
        <Switch>
            <Route exact path={`/team`} component={Team} />
            <Route path={`/events`} component={Event} />
            <Route path={`/projects`} component={Projects} />
            <Route path={`/learn`} component={Learn} />
            <Route exact path={`/`} component={Home} />
            <Route render={function () {
                return <p>Not found</p>
            }} />
        </Switch>
        </div>
    )
}

export default Routes;
