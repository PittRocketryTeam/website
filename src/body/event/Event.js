import React from "react";
import {
    DropdownButton,
    Dropdown
} from "react-bootstrap";
import debounce from "lodash.debounce";
import EventDate from "./EventDate";
import LocalEventAPI from "./assets/LocalEventAPI";
import "./assets/style_event.css";

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newest: true,
            title: "newest",
            other: "oldest",

            eventAPI: new LocalEventAPI(),
            hasMore: true,
            isLoading: false,
            events: []
        }

        this.handleSelect = this.handleSelect.bind(this);

        window.onscroll = debounce(() => {
            const {
                loadUsers,
                state: {
                    isLoading,
                    hasMore,
                },
            } = this;

            if (isLoading || !hasMore) return;

            if (
                window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight
            ) {
                loadUsers();
            }
        }, 500);
    }

    componentWillMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        this.setState({isLoading: true}, () => {
            this.state.eventAPI.get_events()
            .then((results) => {
                const nextEvents = results.events;

                this.setState({
                    hasMore: results.hasMore,
                    isLoading: false,
                    events: [
                        ...this.state.events,
                        ...nextEvents
                    ]
                })
            });
        });
    }

    handleSelect(event) {
        const label = event.target.innerText === "newest";
        this.setState({
            newest: label,
            title: label ? "newest" : "oldest",
            other: label ? "oldest" : "newest"
        })
        this.state.eventAPI.start_over(label);
        this.setState({
            events: []
        })
        this.loadUsers();
    }

    render() {
        const {
            isLoading,
            events
        } = this.state;

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
                    {events.length > 0 ?
                        events.map((value, index) => {
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
                {isLoading &&
                    <div>Loading...</div>
                }
            </div>
        )
    }
}

export default Event;
