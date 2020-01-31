import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import "../../styles/navbar.scss";

import rigoImage from "../../img/rigo-baby.jpg";
import landingImage from "../../img/ladingImage.jpg";

export const Home = () => {
	let bg = [
		"https://cdn.pixabay.com/photo/2018/10/11/04/33/vietnam-3738879_1280.jpg",
		"https://cdn.pixabay.com/photo/2019/11/08/21/42/landscape-4612528_1280.jpg",
		"https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_1280.jpg",
		"https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_1280.jpg"
	];
	let randomImage = Math.floor(Math.random() * bg.length);

	return (
		<>
			<div>
				<div className="jumbotron1 jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">reMINDFUL</h1>
						<p className="lead">Reduce. Reuse. Recycle. ReMindful.</p>
						<Link to="/profile">
							<button className="btn2 btn mx-1 samir">Lets Begin!</button>
						</Link>

						<Link to="/login">
							<button className="btn2 btn mx-1 samir">Login (to track Progress)</button>
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
