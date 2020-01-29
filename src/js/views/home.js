import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import "../../styles/navbar.scss";
//import { Link } from "react-router";
//import { HashLink as Link } from "react-router-hash-link";

export const Home = () => {
	return (
		<>
			<header>
				<div className="header header1">
					<span>
						<p className="logoName">reMINDFUL</p>
						<Link to="/login">
							<button className="btn1 btn-light btn-lg" role="button">
								Log In
							</button>
						</Link>
					</span>
				</div>
			</header>
			<div>
				<div className="jumbotron1 jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">reMINDFUL</h1>
						<p className="lead">Reduce. Reuse. Recycle. Re•mindful.</p>
						<Link to="/profile">
							<button className="btn2 btn">Lets Begin!</button>
						</Link>
					</div>
				</div>
				<div className="jumbotron2 jumbotron-fluid" id="earthInfo">
					<div className="container">
						<h1 className="display-4">Fluid jumbotron</h1>
						<p className="lead">
							This is a modified jumbotron that occupies the entire horizontal space of its parent.
						</p>
					</div>
				</div>
				<div className="jumbotron3 jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Fluid jumbotron</h1>
						<p className="lead">
							This is a modified jumbotron that occupies the entire horizontal space of its parent.
						</p>
					</div>
				</div>
				<div className="jumbotron4 jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Fluid jumbotron</h1>
						<p className="lead">
							This is a modified jumbotron that occupies the entire horizontal space of its parent.
						</p>
					</div>
				</div>
				<div className="jumbotron5 jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Fluid jumbotron</h1>
						<p className="lead">
							This is a modified jumbotron that occupies the entire horizontal space of its parent.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
