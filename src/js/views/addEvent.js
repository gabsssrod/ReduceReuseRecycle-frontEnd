import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/events_eventsForm.scss";

export const Addevents = () => {
	return (
		<div className="container eventsContainer bg-white">
			<div>Event Registration Form</div>
			<div className="form-row mt-3">
				<div className="col">
					<label>First Name</label>
					<input id="inputAlert4" type="text" className="form-control" placeholder="First Name" />
				</div>
				<div className="col">
					<label f>Last Name</label>
					<input id="inputAlert5" type="text" className="form-control" placeholder="Last Name" />
				</div>
			</div>
			<div className="row">
				<div className="col">
					<label>Address</label>
					<input id="inputAlert4" type="text" className="form-control" placeholder="Street Address" />
				</div>
			</div>
			<div className="form-row mt-3">
				<div className="col-md-6 mb-3">
					<label>City</label>
					<input id="inputAlert6" type="text" className="form-control" placeholder="City" />
				</div>
				<div className="col-md-3 mb-3">
					<label>State</label>
					<input id="inputAlert7" type="text" className="form-control" placeholder="State" />
				</div>
				<div className="col-md-3 mb-3">
					<label>Zip</label>
					<input id="inputAlert8" type="text" className="form-control" placeholder="zip" />
				</div>
			</div>
			<div>Event Information:</div>
			<div className="form-row mt-3">
				<div className="col">
					<label>Event Name</label>
					<input id="inputAlert4" type="text" className="form-control" placeholder="Event Name" />
				</div>
			</div>
			<div className="event location">Event Location:</div>
			<div className="row">
				<div className="col">
					<label>Address</label>
					<input id="inputAlert4" type="text" className="form-control" placeholder="Street Address" />
				</div>
			</div>
			<div className="form-row mt-3">
				<div className="col-md-6 mb-3">
					<label>City</label>
					<input id="inputAlert6" type="text" className="form-control" placeholder="City" />
				</div>
				<div className="col-md-3 mb-3">
					<label>State</label>
					<input id="inputAlert7" type="text" className="form-control" placeholder="State" />
				</div>
				<div className="col-md-3 mb-3">
					<label>Zip</label>
					<input id="inputAlert8" type="text" className="form-control" placeholder="zip" />
				</div>
			</div>
			<div>Describe your event below:</div>
			<div className="row">
				<div className="form-group col">
					<label htmlFor="exampleFormControlTextarea1" />
					<textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
				</div>
			</div>
            <div>
                <button className="btn2">Submit Event</button>
            </div>
		</div>
	);
};
