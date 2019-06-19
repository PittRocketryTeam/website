import React from "react";
import "./assets/style_event.css";

// Some text here...
// <a onClick={() => this.setState({
//         showText: !this.state.showText
//     })}>
//     See more
// </a>
// <Collapse in={this.state.showText}>
//     <div>
//         <span>
//             Some more texts here...
//         </span>
//     </div>
// </Collapse>

class EventDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: false,
            descr: props.descript
        };
    }

    render() {
        let len = 150;
        let descr_long = this.state.descr.join("");
        let descr_short = descr_long;
        if (descr_long.length > len) {
            descr_short = descr_long.substring(0, len) + "...";
        }
        return(
            <div className="discript poop">
                <div>
                    {this.state.showText ? descr_long : descr_short}
                </div>
                {descr_long.length > len &&
                    (
                    <a
                    onClick={() => this.setState({
                        showText: !this.state.showText
                    })}>
                        <div className="show">
                            {!this.state.showText ? (
                                "(more)"
                            ) : (
                                "(less)"
                            )}
                        </div>
                    </a>
                )}
            </div>
        )
    }
}

export default EventDescription;
