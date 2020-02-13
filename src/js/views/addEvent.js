import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/events_eventsForm.scss";

export const Addevents = () => {
	return (
		<div className="container eventsContainer m-5 mx-auto">
			<img
				src="https://www.freepngimg.com/thumb/leaf/64620-bin-associate-symbol-recycling-recycle-waste-electronic.png"
				alt="Avatar"
				className="PlanetEventForm"
			/>
			<p className="form-text text-center">Please fill out the form below to submit your event</p>
			<div className="form-row mt-3">
				<div className="col">
					<label className="form-text">First Name</label>
					<input id="inputAlert4" type="text" className="form-control" placeholder="First Name" />
				</div>
				<div className="col">
					<label className="form-text">Last Name</label>
					<input id="inputAlert5" type="text" className="form-control" placeholder="Last Name" />
				</div>
			</div>
			<div className="form-row mt-3">
				<div className="col">
					<label className="form-text">Address</label>
					<input id="inputAlert4" type="text" className="form-control" placeholder="Street Address" />
				</div>
			</div>
			<div className="form-row mt-3">
				<div className="col-md-6 mb-3">
					<label className="form-text">City</label>
					<input id="inputAlert6" type="text" className="form-control" placeholder="City" />
				</div>
				<div className="col-md-3 mb-3">
					<label className="form-text">State</label>
					<input id="inputAlert7" type="text" className="form-control" placeholder="State" />
				</div>
				<div className="col-md-3 mb-3">
					<label className="form-text">Zip</label>
					<input id="inputAlert8" type="text" className="form-control" placeholder="zip" />
				</div>
			</div>
			<div className="row">
				<div className="col">Event Information:</div>
			</div>
			<div className="form-row mt-3">
				<div className="col">
					<label className="form-text">Name</label>
					<input id="inputAlert4" type="text" className="form-control" placeholder="Event Name" />
				</div>
			</div>
			<div className="form-row mt-3">
				<div className="col form-text">Location</div>
			</div>
			<div className="form-row mt-3">
				<div className="col">
					<label className="form-text">Address</label>
					<input id="inputAlert4" type="text" className="form-control" placeholder="Street Address" />
				</div>
			</div>
			<div className="form-row mt-3">
				<div className="col-md-6 mb-3">
					<label className="form-text">City</label>
					<input id="inputAlert6" type="text" className="form-control" placeholder="City" />
				</div>
				<div className="col-md-3 mb-3">
					<label className="form-text">State</label>
					<input id="inputAlert7" type="text" className="form-control" placeholder="State" />
				</div>
				<div className="col-md-3 mb-3">
					<label className="form-text">Zip</label>
					<input id="inputAlert8" type="text" className="form-control" placeholder="zip" />
				</div>
			</div>
			<div className="form-text">Describe your event below</div>
			<div className="form-row">
				<div className="form-group col">
					<label htmlFor="exampleFormControlTextarea1" />
					<textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
				</div>
			</div>
			<div>
				<button className="btn2 form-text">Submit Event</button>
			</div>
		</div>
	);
};
