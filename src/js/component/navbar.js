import React from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<header>
			<div className="header header1">
				<Link to="/login">
					<button className="btn1 btn-primary btn-lg" role="button">
						Log In
					</button>
				</Link>
			</div>
		</header>
	);
};
