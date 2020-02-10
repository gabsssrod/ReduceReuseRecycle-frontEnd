import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/login.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="login_Background">
			<div className="container login_Container">
				<div className="container input_Container">
					<h5 className="mb-3 font-weight-normal" />
					<label htmlFor="inputEmail" className="sr-only inputSize m-2">
						Email address
					</label>
					<input
						type="email"
						id="inputEmail"
						className="form-control login_input inputSize m-2"
						placeholder="Email address"
						required
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<label htmlFor="inputPassword" className="sr-only inputSize m-2 ">
						Password
					</label>
					<input
						type="password"
						id="inputPassword"
						className="form-control login_input inputSize m-2"
						placeholder="Password"
						required
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<div className="checkbox mb-3 remember_Me">
						<label>
							<input type="checkbox" defaultValue="remember-me" /> Remember me
						</label>
					</div>
					<button className="login_btn" onClick={() => actions.signin(email, password)} type="submit">
						Login
					</button>
					<p>
						<small className="register_Link">Register</small>
						<small>Forgot your password?</small>
					</p>
				</div>
			</div>
		</div>
	);
};
