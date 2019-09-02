import React from "react";
import { Image } from "react-bootstrap";
import Sponsors from "./sponsors/Sponsors";
import "./assets/style_home.css";

function Home() {
  return (
    <div>
      <div className="home">
        <Image src={process.env.PUBLIC_URL + "/img/space.png"} fluid />
        <h1 className="mission-statement">Mission Statement</h1>
        <h3 className="statement">
          To grow a community in Pittsburgh dedicated to advancing human
          spaceflight technology
        </h3>
      </div>
      <div className="w-and-w">
        <div>
          <div className="w">
            <h3>Where</h3>
          </div>
          <strong>Benedum 319</strong>
        </div>
        <div>
          <div className="w">
            <h3>When</h3>
          </div>
          <strong>Wednesdays 8:00pm</strong>
        </div>
      </div>
      <Sponsors />
    </div>
  );
}

export default Home;
