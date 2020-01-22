import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/login.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="form-signin form1">
			<img
				className="mb-4 img1"
				src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
				alt=""
				width={72}
				height={72}
			/>
			<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
			<label htmlFor="inputEmail" className="sr-only inputSize">
				Email address
			</label>
			<input
				type="email"
				id="inputEmail"
				className="form-control inputSize"
				placeholder="Email address"
				required
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<label htmlFor="inputPassword" className="sr-only inputSize">
				Password
			</label>
			<input
				type="password"
				id="inputPassword"
				className="form-control inputSize"
				placeholder="Password"
				required
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<div className="checkbox mb-3">
				<label>
					<input type="checkbox" defaultValue="remember-me" /> Remember me
				</label>
			</div>
			<button
				className="btn btn-lg btn-primary btn-block inputSize"
				onClick={() => actions.signin(email, password)}
				type="submit">
				Sign in
			</button>
			<p className="mt-5 mb-3 text-muted">© 2019-2020</p>
		</div>
	);
};
