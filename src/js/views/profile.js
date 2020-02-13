import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { SearchItem } from "../views/SearchItem";
import { SearchResult } from "../views/searchResult";

import "../../styles//profile.scss";

import calendar from "../../img/calendar.png";
import loupe from "../../img/loupe.png";
import map from "../../img/map.png";
import linechart from "../../img/line-chart.png";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const [collapse, setCollapse] = useState("d-none");
	const [button, setButton] = useState("block");

	const [pickDay, setPickDay] = useState();
	const [pickday2, setPickDay2] = useState();

	const [button1, setButton1] = useState("block");
	const [collapse1, setCollapse1] = useState("d-none");

	const [notificationDay, setnotificationDay] = useState();
	const [notificationDay2, setnotificationDay2] = useState();

	let userId = localStorage.getItem("userID");

	const collapseHandler = () => {
		setCollapse("block");
		setButton("d-none");
	};

	const collapseHandler1 = () => {
		setCollapse1("block");
		setButton1("d-none");
	};

	const confirmDays = () => {
		setCollapse("d-none");
		setButton("block");
		actions.addDays(pickDay, pickday2);
	};

	const confirmNotification = () => {
		setCollapse1("d-none");
		setButton1("block");
		actions.sendMsg();
	};

	let days = ["Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	let daysNotify = ["Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	return (
		<div className="zxz">
			<div className="container m-5 mx-auto">
				<div className="card-deck mb-4">
					<div className="card search">
						<div className="tryinggg card-body cardSearch">
							<img src={loupe} className="map1" alt="" />
							<h5 className="card-title profileTitle">Search Items</h5>
							<p className="card-text profileTitle">
								Search for any item for the easiest way to stay earth friendly.
							</p>
							<p className="card-text">
								<div className="search">
									<div className="search1 form-inline">
										<SearchItem />
									</div>
								</div>
								<SearchResult />
							</p>
						</div>
						{/* <div className="card-footer">
						<small className="text-muted">Find out the best way to reduce waste!</small>
					</div> */}
					</div>

					<div className="card pick days tryinggg">
						<div className="card-body">
							<img src={calendar} className="map1" alt="" />
							<h5 className="card-title profileTitle">Your Pick Up Days</h5>
							<div className={collapse}>
								<div className="select">
									<select
										className="select1 form-control form-control-sm profileTitle"
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
										className="select2 form-control form-control-sm profileTitle"
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
										<button className="btn2 btn-light profileTitle" onClick={confirmDays}>
											Confirm Days
										</button>
									</div>
								</div>
							</div>

							{/* ------------NOTIFICATION---------------- */}
							<div className={collapse1}>
								<div className="select">
									<select
										className="form-control form-control-sm profileTitle"
										onChange={e => setnotificationDay(e.target.value)}>
										<option>when do you want to be notified: day 1</option>
										{daysNotify.map((item, index) => {
											return (
												<option key={index} value={item}>
													{item}
												</option>
											);
										})}
									</select>
									<br />
									<select
										className="form-control form-control-sm profileTitle"
										onChange={e => setnotificationDay2(e.target.value)}>
										<option>when do you want to be notified: day 2</option>
										{daysNotify.map((item, index) => {
											return (
												<option key={index} value={item}>
													{item}
												</option>
											);
										})}
									</select>
									<br />
									<div className="confirmDay">
										<button className="btn2 btn-light profileTitle" onClick={confirmNotification}>
											Notify me on these days!
										</button>
									</div>
								</div>
							</div>

							{/* ------------END NOTIFICATION----------------  */}

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
								<button className={button1} onClick={collapseHandler1}>
									Set Notifications
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
					<div className="card trends tryinggg">
						<div className="card-body">
							<img src={linechart} className="map1" alt="" />
							<h5 className="card-title profileTitle">Track your trash and monitor your trends!</h5>
							<p className="card-text profileTitle">See your progress here!</p>
							<Link to="/progress">
								<button className="btn2 profileTitle" role="button">
									lets take a look at your progress!
								</button>
							</Link>
						</div>
						{/* <div className="card-footer">
						<small className="text-muted">A curated list of upcoming earth-friendly events.</small>
					</div> */}
					</div>
					<div className="card events">
						<div className="card-body tryinggg">
							<img src={map} className="map1" alt="" />
							<h5 className="card-title profileTitle">Upcoming Events</h5>
							<p className="card-text profileTitle">
								March 12th, 2020 - Environmental Chemistry and Pollution Control Conference in June 3rd,
								2020 - AERE Annual Summer Conference
							</p>
							<Link to="/events">
								<button className="btn2 profileTitle" role="button">
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
		</div>
	);
};
