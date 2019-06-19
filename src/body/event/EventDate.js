import React from "react";
import EventDescription from "./EventDescription";
var moment = require('moment');

function EventDate(props) {
    const {date, time, where, title, descript} = props.attr;
    return (
        <div className={props.color_event}>
            <div className="event">
                <h2 className={
                    title.localeCompare("No Meeting") ?
                    "" : "no-meeting"
                }>
                    {title}
                </h2>
                <h3 className="date">
                    {moment(new Date(date)).format("MMMM Do, YYYY")}
                </h3>
            </div>
            <div className="time-and-place">
                {where.length !== 0 &&
                    <div>
                        <strong>Where: </strong>
                        {where}
                    </div>
                }
                {time.length !== 0 &&
                    <div>
                        <strong>When: </strong>
                        {time}
                    </div>
                }
            </div>
            <div className="info">
                <EventDescription descript={descript} />
            </div>
        </div>
    )
}

export default EventDate;
