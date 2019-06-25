import React from "react";
import {Image} from "react-bootstrap";
import Sponsors from "./sponsors/Sponsors";
import Footer from "./Footer";
import "./assets/style_home.css";

function Home() {
    return (
        <div>
            <div className="home">
                <Image src={process.env.PUBLIC_URL + "/img/space.png"} fluid />
                <h3>Mission Statement</h3>
                <p>In 1962 President John F. Kennedy said "We choose to go to the
                moon in this decade... not because they are easy, but because they
                are hard". This speech kicked off the space race which brough placing
                Americans on the moon. Today
                </p>
            </div>
            <div className="w-and-w">
                <div>
                    <div className="w">
                        <h3>Where</h3>
                    </div>
                    <strong>Benedum 303</strong>
                </div>
                <div>
                    <div className="w">
                        <h3>When</h3>
                    </div>
                    <strong>Thursdays 6:00</strong>
                </div>
            </div>
            <Sponsors />
            <Footer />
        </div>
    )
}

export default Home;
