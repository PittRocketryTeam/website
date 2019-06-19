import React from "react";
import EventDate from "./EventDate";
import events from "./assets/events";
import "./assets/style_event.css";

function Event() {
    return (
        <div>
            <h1> Events </h1>
            <div className="events">
                {events["events"].length > 0 ?
                    events["events"].sort(function(a,b) {
                        return new Date(a.date) - new Date(b.date)
                    }).map((value, index) => {
                        let color_pick = ["event_blue", "event_grey"]
                        // let color_pick = ["event_blue", "event_grey"]
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

export default Event;
