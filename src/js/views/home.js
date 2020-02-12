import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import "../../styles/navbar.scss";

import rigoImage from "../../img/rigo-baby.jpg";
import electricCar from "../../img/electricCar.png";
import detergent from "../../img/detergent.png";
import trash from "../../img/trash.png";

export const Home = () => {
	return (
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
						<div className="imgContainer col-6">
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
			<div className="jumbotron jumbotron3 jumbotron-fluid">
				<div className="container jumbo3Container">
					<h1 className="display-4">Fluid jumbotron</h1>
					<p className="lead">
						This is a modified jumbotron that occupies the entire horizontal space of its parent.
					</p>
					<div className="row">
						<div className="col card cardStyle">
							<div className="card-body iconCards">
								<div className="iconCenter">
									<img src={electricCar} className="car" alt="" />
								</div>
								<br />
								<h6 className="card-subtitle mb-2 text-muted text-center">REDUCE</h6>
								<p className="">
									<small>
										The most effective way to reduce waste is to not create it in the first place. Making a
										new product requires a lot of materials and energy.
										Raw materials must be extracted
										from the earth, and the product must be fabricated then transported to wherever it will
										be sold. As a result, reduction and reuse are the most effective ways you can save
										natural resources, protect the environment and save money.
									</small>
								</p>
								<div className="card-footer">
									<Link
										to="https://www.epa.gov/recycle/reducing-and-reusing-basics"
										className="text-center">
										Learn More
									</Link>
								</div>
							</div>
						</div>
						<div className="col card cardStyle">
							<div className="card-body iconCards">
								<div className="iconCenter">
									<img src={detergent} className="car" alt="" />
								</div>
								<br />
								<h6 className="card-subtitle mb-2 text-muted text-center">REUSE</h6>
								<p className="">
									<small>
										Reuse is a means to prevent solid waste from entering the landfill, improve our
										communities, and increase the material, educational and occupational wellbeing of our
										citizens by taking useful products discarded by those who no longer want them and
										providing them to those who do. It is best to reduce first, reuse as a second option,
										then to resort to recycling.
									</small>
								</p>
								<div className="card-footer">
									<Link
										to="https://www.epa.gov/recycle/reducing-and-reusing-basics"
										className="text-center">
										Learn More
									</Link>
								</div>
							</div>
						</div>
						<div className="col card cardStyle">
							<div className="card-body iconCards">
								<div className="iconCenter">
									<img src={detergent} className="car" alt="" />
								</div>
								<br />
								<h6 className="card-subtitle mb-2 text-muted text-center">RECYCLE</h6>
								<p>
									<small>
										Recycling is the process of collecting and processing materials that would otherwise be thrown
										away as trash and turning them into new products. Recycling is very important as waste has a
										huge negative impact on the natural environment. Harmful chemicals and greenhouse gasses are
										released from rubbish in landfill sites. Recycling helps to reduce the pollution caused by
										waste. Habitat destruction and global warming are some the affects caused by deforestation.
									</small>
								</p>
							</div>
							<div className="card-footer">
								<Link to="https://www.epa.gov/recycle/recycling-basics" className="text-center">
									Learn More
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
