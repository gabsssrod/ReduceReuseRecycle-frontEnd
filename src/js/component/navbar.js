import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<nav className="navbar navbar-expand-md navbar-light fixed-top">
				<ul className="nav p-2">
					<li className="nav-item logoName">
						<Link to="/" className="nav-link">
							reMINDFUL
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/profile" className="nav-link">
							My Profile
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/progress" className="nav-link">
							Progress
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/events" className="nav-link">
							Events
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/registration" className="nav-link">
							Sign up
						</Link>
					</li>
				</ul>
				{store.token != undefined ? (
					<Link to="/">
						<button onClick={() => actions.logout()} className="btn2 btn mx-1 samir">
							Logout
						</button>
					</Link>
				) : (
					store.token == null && (
						<Link to="/login">
							<button className="btn2 btn mx-1 samir">Login (to track Progress)</button>
						</Link>
					)
				)}
			</nav>
		</>
	);
};
