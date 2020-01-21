import React from "react";
import { Link } from "react-router-dom";

export const Registration = () => {
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
					<label>First name </label>
					<input type="text" className="form-control" placeholder />
				</div>
				<div className="col form-group">
					<label>Last name</label>
					<input type="text" className="form-control" placeholder=" " />
				</div>
				<div className="col form-group">
					<label>Email Address </label>
					<input type="text" className="form-control" placeholder />
				</div>
				<div className="col form-group">
					<label>Password</label>
					<input type="text" className="form-control" placeholder=" " />
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
			<Link to="/profile">
				<button className="btn1 btn-light btn-lg" role="button">
					Sign Up
				</button>
			</Link>
			<p className="mt-5 mb-3 text-muted">© 2019-2020</p>
		</form>
	);
};
