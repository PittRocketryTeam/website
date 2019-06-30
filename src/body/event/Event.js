import React from "react";
import {
    DropdownButton,
    Dropdown
} from "react-bootstrap";
import EventDate from "./EventDate";
import events from "./assets/no_events";
import "./assets/style_event.css";

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newest: true,
            title: "newest",
            other: "oldest"
        }

        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(event) {
        const label = event.target.innerText === "newest";
        this.setState({
            newest: label,
            title: label ? "newest" : "oldest",
            other: label ? "oldest" : "newest"
        })
    }
    render() {
        const newest = this.state.newest;
        return (
            <div>
                <div className="event-title">
                    <h1> Events </h1>
                    <div className="sort-by">
                        <div className="sort-by-label">
                            Sort By:
                        </div>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title={this.state.title}
                        >
                            <Dropdown.Item onClick={this.handleSelect}>
                                {this.state.other}
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <div className="events">
                    {events["events"].length > 0 ?
                        events["events"].sort(function(a,b) {
                            if (newest)
                                return new Date(a.date) - new Date(b.date);
                            else
                                return new Date(b.date) - new Date(a.date);
                        }).map((value, index) => {
                            let color_pick = ["event_blue", "event_grey"]
                            return (
                                <EventDate
                                    key={index}
                                    attr={value}
                                    color_event={color_pick[index % 2]}
                                />
                            )
                        })
                    :
                    <div className="no-events">
                        <h2> Sorry no events :( </h2>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default Event;
