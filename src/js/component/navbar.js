import React from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<>
			<ul className="nav">
				<li className="nav-item">
					<Link to="/" className="nav-link">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/notification" className="nav-link">
						Notifications
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
						Register
					</Link>
				</li>
			</ul>
			{/* 
			<Link to="/notification">Notifications</Link>
			<Link to="/login">Login</Link>
			<Link to="/profile">My Profile</Link>
			<Link to="/progress">Progress</Link>
			<Link to="/events">Events</Link>
			<Link to="/registration">Register</Link> */}
		</>
	);
};
