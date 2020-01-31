import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ReactDOM from "react-dom";
import { Card } from "react-bootstrap";

export const searchResult = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row">
			{store.materials.map((item, index) => {
				return (
					<div className="col-sm m-5 mx-auto" key={index}>
						<Card key={index} style={{ width: "18rem" }}>
							<Card.Img variant="top" src="" />
							<Card.Body>
								<Card.Title>{item.name}</Card.Title>
								<Card.Header>{item.material}</Card.Header>
								<Card.Text>
									<p>
										{item.recycle}
										{item.reuse}
										{item.reduce}
										{item.trash}
									</p>
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
				);
			})}
		</div>
	);
};
