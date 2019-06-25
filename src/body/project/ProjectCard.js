import React from "react";
import {
    Card,
    Accordion
} from "react-bootstrap";

function ProjectDesc(props) {
    const key = props.key
    const {title, img, description} = props.attr;
    const image = img;
    return (
        <Card>
            <Accordion.Toggle
                as={Card.Header}
                eventKey={key}
            >
                {title}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={key}>
                <Card.Body>
                    <div className="subteam-desc">
                        {description}
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default ProjectDesc;
