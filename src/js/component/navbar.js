import React from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<header>
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<button type="button" className="btn btn-primary">
						Log In
					</button>
					<h1 className="display-4">Fluid jumbotron</h1>
					<p className="lead">
						This is a modified jumbotron that occupies the entire horizontal space of its parent.
					</p>
				</div>
			</div>
		</header>
	);
};
