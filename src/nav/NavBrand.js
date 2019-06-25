import React from "react";

class NavBrand extends React.Component {
    constructor(props) {
        super(props)

        console.log(props)
        this.state = {
            isHovering: false,
            onSelect: props.onSelect
        }

        this.handleMouseHover = this.handleMouseHover.bind(this)
    }

    handleMouseHover() {
        this.setState(prev => {
            return {
                isHovering: !prev.isHovering
            }
        });
    }

    render () {
        console.log("Logo process.env", process.env.PUBLIC_URL);
        return (
            <div
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}
            >
                {this.state.isHovering ? (
                    <img
                        className="HomeRocket"
                        src={process.env.PUBLIC_URL+"/img/rocket_anmi.gif"}
                        alt="Rocket Home"
                    />
                ) : (
                    <img
                        className="HomeRocket"
                        src={process.env.PUBLIC_URL+"/img/logo.png"}
                        alt="Rocket Home"
                    />
                )}
            </div>
        )
    }
}

export default NavBrand;
