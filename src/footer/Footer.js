import React from "react";
import {Image} from "react-bootstrap";
import "./assets/style_footer.css";

function Footer(props) {
    const path = process.env.PUBLIC_URL + "/img/contact/"
    return (
        <div className="footer">
            <h4>Contact</h4>
            <div className="contact">
                <Image
                    className="contact-logo"
                    src = {path + "slack.png"}
                />
                <a
                    className="contact-link"
                    href="https://pittrocketryteam.slack.com"
                >
                    pittrocketryteam.slack.com
                </a>
            </div>
            <div className="contact">
                <Image
                    className="contact-logo"
                    src = {path + "github.jpg"}
                />
                <a
                    className="contact-link"
                    href="https://github.com/PittRocketryTeam"
                >
                    github.com/PittRocketryTeam
                </a>
            </div>
            <div className="contact">
                <Image
                    className="contact-logo"
                    src = {path + "email.png"}
                />
                <a
                    className="contact-link"
                    href="pittrocketryteam@gmail.com"
                >
                    pittrocketryteam@gmail.com
                </a>
            </div>
            <div className="webmaster">
                *If there is any problem with the website please contact Quinnan
                 on Slack.
            </div>
        </div>
    )
}

export default Footer;
