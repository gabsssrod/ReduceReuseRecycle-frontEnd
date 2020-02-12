import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/registration.scss";

export const Registration = () => {
	const { store, actions } = useContext(Context);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="signin_Background">
			<div className="container signin_Container">
				<img
					src="https://www.freepngimg.com/thumb/leaf/64620-bin-associate-symbol-recycling-recycle-waste-electronic.png"
					alt="Avatar"
					className="planet"
				/>
				<h5 className="mb-3 font-weight-normal">Sign Up</h5>
				<div>
					<div className="col form-group">
						<input
							type="text"
							className="form-control signin_input"
							placeholder="First Name"
							required
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
						/>
					</div>
					<div className="col form-group">
						<input
							type="text"
							className="form-control signin_input"
							placeholder="Last Name"
							required
							value={lastName}
							onChange={e => setLastName(e.target.value)}
						/>
					</div>
					<div className="col form-group">
						<input
							type="text"
							className="form-control signin_input"
							placeholder="Email Address"
							required
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="col form-group">
						<input
							type="password"
							className="form-control signin_input"
							placeholder="Password"
							required
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<div className="col form-group">
						<input type="text" className="form-control signin_input" placeholder="Comfirm Password" />
					</div>
				</div>
				<div className="checkbox mb-3 signin_Remember_Me">
					<label>
						<input type="checkbox" defaultValue="remember-me" /> Remember me
					</label>
				</div>
				<button
					className="signin_btn"
					role="button"
					onClick={() => actions.registration(firstName, lastName, email, password)}
					type="submit">
					Create My Account
				</button>
			</div>
		</div>
	);
};
