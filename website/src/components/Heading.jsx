import React from "react";
import '../styles/heading.css'

function Heading(props) {
    return (
        <div className="container-heading">
            <p className="default-heading">
                {props.title}
            </p>
        </div>
    );
}

export default Heading;