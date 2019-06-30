import React, { Component } from "react";
import Navigation from "./nav/Navigation";
import Routes from "./nav/Routes";
import Footer from "./footer/Footer";

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Navigation />
                <Routes />
                <Footer />
            </div>
        )
    }
}

export default App;
