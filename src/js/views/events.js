import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import { Context } from "../store/appContext";

export const Events = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="eventButton">
				<Link to="addEvent">
					<button className="btn2">Add Event</button>
				</Link>
			</div>
			<div className="row">
				{store.events.map((item, index) => {
					return (
						<div className="col-sm m-5 mx-auto" key={index}>
							<Card key={index} style={{ width: "20rem" }}>
								<Card.Img variant="top" src="" />
								<Card.Body>
									<Card.Title>{item.eventName}</Card.Title>
									<Card.Text>
										<p>
											{item.eventDate}
											{item.eventLocation}
										</p>
										<p>{item.eventdescription}</p>
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					);
				})}
			</div>
		</>
	);
};

{
	/* <Card style={{ width: "18rem" }}>
	<Card.Img variant="top" src="holder.js/100px180" />
	<Card.Body>
		<Card.Title>{item.eventName}</Card.Title>
		<Card.Text>
			<p>
				{item.eventDate} - {item.eventLocation}
			</p>
			<p>{item.eventdescription}</p>
		</Card.Text>
		<Button variant="primary">Go somewhere</button>
	</Card.Body>
</Card>; */
}
