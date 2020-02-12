import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import "../../styles/navbar.scss";

import rigoImage from "../../img/rigo-baby.jpg";
import landingImage from "../../img/ladingImage.jpg";

export const Home = () => {
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
					<div className="aboutUs">
						<div className="container aboutUsHeading">
							<h5 className="landingHeading">What we do</h5>
							<h2 className="secondHeading">reMINDFUL FOR A BETTER FUTURE</h2>
							<br />
						</div>
						<div className="row aboutUsContainer">
							<div className="container imgContainer col-6">
								<img
									src="https://www.freepngimg.com/thumb/leaf/64620-bin-associate-symbol-recycling-recycle-waste-electronic.png"
									alt="Avatar"
									className="gabyPic"
								/>
							</div>
							<div className="container col-6">
								<h6 className="aboutUsTitle">About Us</h6>
								<h5 className="missionHeading">
									<b>
										on a mission to make an eco conscious lifestyle
										<br /> easy for everyone
									</b>
								</h5>
								<p className="aboutUs1">
									<small>
										At reMindful we are aware that many people do not know the proper way to reduce,
										reuse, recycle. Mostly due to time constrictions. We get it, youre busy. But we
										believe that people would be more likely to utilize the three Rs if they had the
										resources readily available. So we decided to build an online community full of
										resources to make your journy simple and time efficient.
									</small>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="jumbotron3 jumbotron-fluid col-6">
						<div className="container mx-auto">
							<img
								src="https://cdn.pixabay.com/photo/2015/07/03/14/59/water-830374_960_720.jpg"
								alt="Avatar"
								className="reducePic"
							/>
						</div>
					</div>
					<div className="jumbotron33 jumbotron-fluid col-6">
						<div className="container">
							<h1 className="display-4">Reduce</h1>
							<p className="lead">
								The most effective way to reduce waste is to not create it in the first place. Making a
								new product requires a lot of materials and energy - raw materials must be extracted
								from the earth, and the product must be fabricated then transported to wherever it will
								be sold. As a result, reduction and reuse are the most effective ways you can save
								natural resources, protect the environment and save money.
								<Link to="https://www.epa.gov/recycle/reducing-and-reusing-basics">
									<button>Learn More</button>
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="jumbotron4 jumbotron-fluid col-6">
						<div className="container">
							<h1 className="display-4">Reuse</h1>
							<p className="lead">
								Reuse is a means to prevent solid waste from entering the landfill, improve our
								communities, and increase the material, educational and occupational wellbeing of our
								citizens by taking useful products discarded by those who no longer want them and
								providing them to those who do. It is best to reduce first, reuse as a second option,
								then to resort to recycling.
							</p>
						</div>
					</div>
					<div className="jumbotron44 jumbotron-fluid col-6">
						<div className="container mx-auto">
							<img
								src="http://handmadebykelly.com/wp-content/uploads/2014/06/final-e1403638792149.jpg"
								alt="Avatar"
								className="reUsePic"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="jumbotron5 jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">Recycle</h1>
					<p className="lead">
						Recycling is the process of collecting and processing materials that would otherwise be thrown
						away as trash and turning them into new products. Recycling is very important as waste has a
						huge negative impact on the natural environment. Harmful chemicals and greenhouse gasses are
						released from rubbish in landfill sites. Recycling helps to reduce the pollution caused by
						waste. Habitat destruction and global warming are some the affects caused by deforestation.
					</p>
					<div className="container mx-auto">
						<img
							src="https://cdn.pixabay.com/photo/2018/08/01/11/37/plastic-3577044_960_720.jpg"
							alt="Avatar"
							className="recyclePic"
						/>
					</div>
				</div>
			</div>
		</>
	);
};
