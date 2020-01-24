import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Registration = () => {
	const { store, actions } = useContext(Context);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<form className="form-signin form1">
			<img
				className="mb-4 img1"
				src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
				alt=""
				width={72}
				height={72}
			/>
			<h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
			<div>
				<div className="col form-group">
					<label>First Name </label>
					<input
						type="text"
						className="form-control"
						placeholder="First Name"
						required
						value={firstName}
						onChange={e => setFirstName(e.target.value)}
					/>
				</div>
				<div className="col form-group">
					<label>Last Name</label>
					<input
						type="text"
						className="form-control"
						placeholder="Last Name"
						required
						value={lastName}
						onChange={e => setLastName(e.target.value)}
					/>
				</div>
				<div className="col form-group">
					<label>Email Address</label>
					<input
						type="text"
						className="form-control"
						placeholder="Email Address"
						required
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div className="col form-group">
					<label>Password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Password"
						required
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
				<div className="col form-group">
					<label>Confirm Password </label>
					<input type="text" className="form-control" placeholder />
				</div>
			</div>
			<div className="checkbox mb-3">
				<label>
					<input type="checkbox" defaultValue="remember-me" /> Remember me
				</label>
			</div>
			<button
				className="btn1 btn-light btn-lg"
				role="button"
				onClick={() => actions.registration(firstName, lastName, email, password)}
				type="submit">
				Sign Up
			</button>
		</form>
	);
};
