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
    return (
        <div className="title">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/team" component={Team} />
            <Route path="/events" component={Event} />
            <Route path="/projects" component={Projects} />
            <Route path="/learn" component={Learn} />
            <Route render={function () {
                return <p>Not found</p>
            }} />
        </Switch>
        </div>
    )
}

export default Routes;
