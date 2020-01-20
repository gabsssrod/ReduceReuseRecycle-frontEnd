import React from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<header>
			<div className="header header1">
				<button type="button" className="log-in btn btn-light">
					Log In
				</button>
			</div>
		</header>
	);
};
