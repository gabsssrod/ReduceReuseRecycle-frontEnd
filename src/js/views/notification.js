import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/notification.scss";

export const Notification = props => {
	const { store, actions } = useContext(Context);
	const [collapse, setCollapse] = useState("block");
	const [button, setButton] = useState("d-none");
	const [pickDay, setPickDay] = useState();
	const [pickday2, setPickDay2] = useState();

	const confirmDays = () => {
		actions.addDays(pickDay, pickday2, props);
	};

	let days = ["Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	return (
		<>
			<div className="container text-center">
				<h1 className="display-4 text-center">Select Pick up Days</h1>
				<p className="lead" />
				<div>
					<div className="row">
						<select
							className="col-6 select1 form-control form-control-sm"
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
						<select
							className="cold-6 select2 form-control form-control-sm"
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

						<button onClick={confirmDays}>confirm bruh</button>
					</div>
				</div>
			</div>
		</>
	);
};
