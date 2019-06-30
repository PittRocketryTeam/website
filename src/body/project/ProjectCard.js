import React from "react";
import {
    Card,
    Accordion,
    Image
} from "react-bootstrap";

function ProjectDesc(props) {
    const key = props.index
    const {title, image, description} = props.attr;
    console.log(description);
    const img = process.env.PUBLIC_URL + "/img/projects/" + image;
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
                    <Image
                        src={img}
                        className="subteam-img"
                    />
                    <div className="subteam-desc">
                        <p>{description}</p>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default ProjectDesc;
