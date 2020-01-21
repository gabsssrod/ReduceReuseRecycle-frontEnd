import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/notification.scss";

export const Notification = () => {
	const [collapse, setCollapse] = useState("d-none");
	const [button, setButton] = useState("block");

	const collapseHandler = () => {
		setCollapse("block");
		setButton("d-none");
	};

	let days = ["Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	return (
		<div className="container text-center">
			<h1 className="display-4 text-center">Your pick up days</h1>
			<p className="lead" />
			<button className={button} onClick={collapseHandler}>
				setup up pick up days
			</button>
			<div className={collapse}>
				<div className="row">
					<select className="col-6 select1 form-control form-control-sm">
						<option>Select your first pick up day</option>
						{days.map((item, index) => {
							return (
								<option key={index} value={item}>
									{item}
								</option>
							);
						})}
					</select>
					<select className="cold-6 select2 form-control form-control-sm">
						<option>Select your second pick up day</option>
						{days.map((item, index) => {
							return (
								<option key={index} value={item}>
									{item}
								</option>
							);
						})}
					</select>
				</div>
			</div>
		</div>
	);
};
