import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Notification = () => {
	const [collapse, setCollapse] = useState("d-none");
	const [button, setButton] = useState("block");

	const collapseHandler = () => {
		setCollapse("block");
		setButton("d-none");
	};

	return (
		<>
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Your pick up days/h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                <button className={button} onClick={collapseHandler}>
                    Click me
                </button>
                <div className={collapse}>
                    <input type="text" />
                </div>
            
            </div>
            </div>
        </>
	);
};
