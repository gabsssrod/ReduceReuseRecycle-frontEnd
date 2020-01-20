import React from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<header>
			<div className="header header1">
				<Link to="/login">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</header>
	);
};
