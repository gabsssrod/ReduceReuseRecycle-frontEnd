import React from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<header>
			<div className="header header1">
				<button type="button" className="log-inbtn btn-light">
					Log In
				</button>
			</div>
			<div className="jumbotron1 jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">Fluid jumbotron</h1>
					<p className="lead">
						This is a modified jumbotron that occupies the entire horizontal space of its parent.
					</p>
				</div>
			</div>
		</header>
	);
};
