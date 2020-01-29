import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
import "../../styles/profile.scss";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const [collapse, setCollapse] = useState("d-none");
	const [button, setButton] = useState("block");
	const [pickDay, setPickDay] = useState();
	const [pickday2, setPickDay2] = useState();

	let userId = localStorage.getItem("userID");

	const collapseHandler = () => {
		setCollapse("block");
		setButton("d-none");
	};

	const confirmDays = () => {
		setCollapse("d-none");
		setButton("block");
		actions.addDays(pickDay, pickday2);
	};

	let days = ["Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	return (
		<div className="container m-5 mx-auto">
			<div className="card-deck mb-4">
				<div className="card search">
					{/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
					<div className="card-body">
						<h5 className="card-title">Search Items</h5>
						<p className="card-text">Search for any item for the easiest way to stay earth friendly.</p>
						<p className="card-text">
							<div className="search">
								<div className="search1 form-inline">
									<i className="fas fa-search" aria-hidden="true" />
									<input
										className="form-control search-input form-control-sm ml-3 w-75"
										type="text"
										aria-label="Search"
									/>
								</div>
							</div>
						</p>
					</div>
					{/* <div className="card-footer">
						<small className="text-muted">Find out the best way to reduce waste!</small>
					</div> */}
				</div>

				<div className="card pick days">
					{/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
					<div className="card-body">
						<h5 className="card-title">Your Pick Up Days</h5>

						<div className={collapse}>
							<div className="select">
								<select
									className="select1 form-control form-control-sm"
									onChange={e => setPickDay(e.target.value)}>
									<option>Select your first pick up day</option>
									{days.map((item, index) => {
										return (
											<option key={index} value={item}>
												{item}
											</option>
										);
									})}
								</select>
								<br />
								<select
									className="select2 form-control form-control-sm"
									onChange={e => setPickDay2(e.target.value)}>
									<option>Select your second pick up day</option>
									{days.map((item, index) => {
										return (
											<option key={index} value={item}>
												{item}
											</option>
										);
									})}
								</select>
								<br />
								<div className="confirmDay">
									<button className="btn2" onClick={confirmDays}>
										Confirm Days
									</button>
								</div>
							</div>
						</div>

						<div className="map days container">
							<div className="map days text-center">
								{!store.daysPicked && !userId
									? "nope"
									: store.daysPicked.map((item, index) => {
											return (
												<div key={index}>
													{item.first_day} {item.second_day}
												</div>
											);
									  })}
							</div>
						</div>
						<br />
						<div className="setDayButton">
							<button className={button} onClick={collapseHandler}>
								Set Days
							</button>
						</div>
					</div>
					{/* <div className="card-footer">
						<small className="text-muted">Pickup notifications to help you stay organized!</small>
					</div> */}
				</div>
			</div>

			{/*PROGRESS AND EVENTS CARDS*/}

			<div className="card-deck mb-4">
				<div className="card progress">
					{/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
					<div className="card-body">
						<h5 className="card-title">Progress</h5>
						<p className="card-text">Track your trash and monitor your trends!</p>
						<Link to="/progress">
							<button className="btn2 btn-light btn-lg" role="button">
								See your progress
							</button>
						</Link>
					</div>
					{/* <div className="card-footer">
						<small className="text-muted">Keep track of your trash and monitor your contributions!</small>
					</div> */}
				</div>
				<div className="card events">
					{/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
					<div className="card-body">
						<h5 className="card-title">Upcoming Events</h5>
						<p className="card-text">
							March 12th, 2020 - Environmental Chemistry and Pollution Control Conference in June 3rd,
							2020 - AERE Annual Summer Conference
						</p>
						<Link to="/events">
							<button className="btn2 btn-light btn-lg" role="button">
								Search More Events
							</button>
						</Link>
					</div>
					{/* <div className="card-footer">
						<small className="text-muted">A curated list of upcoming earth-friendly events.</small>
					</div> */}
				</div>
			</div>
		</div>
	);
};
