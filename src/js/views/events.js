import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "../../styles/events_eventsForm.scss";

import { Context } from "../store/appContext";

export const Events = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="Jumbotron jumboEvents">
			<div className="eventsHeader text-center mt-5">
				<h2>EVENTS</h2>
			</div>
			<div className="eventButton">
				<Link to="/addEvent">
					<i className="fas fa-plus-circle fa-lg" />
				</Link>
			</div>
			<div className="container">
				<div className="row ">
					{/* <div className="card-deck"> */}
					{store.events.map((item, index) => {
						return (
							// <div className="container " >
							<div className="col-md-4 " key={index}>
								<div className="card eventText eventsCard tryinggg">
									<Link to={item.eventInfo}>
										<img
											src={item.eventImage}
											className="card-img-top imageSize tryinggg1"
											alt="..."
										/>
									</Link>
									<div className="card-body card2">
										<h5 className="card-title eventText">{item.eventName}</h5>
										<p className="card-text eventText">
											{item.eventDate}-{item.eventLocation}
										</p>
										<p className="eventText">
											<small>{item.eventdescription}</small>
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
