import React from "react";
import {Image} from "react-bootstrap";
import sponsors from "./assets/sponsors";
import "./assets/style_sponsors.css";

function Sponsors() {
    const img_path = process.env.PUBLIC_URL + "/img/sponsors/";
    return (
        <div>
            <div className="sponsors">
                <h2>Sponsors</h2>
            </div>
            <div className="sponsor_imgs">
                {sponsors["sponsors"].map((value, index) => {
                    return (
                        <Image
                            key={index}
                            src={img_path + value["img"]}
                            className={value["class"]}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Sponsors;
