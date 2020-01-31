import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ReactDOM from "react-dom";
import { Card } from "react-bootstrap";

export const searchResult = () => {
	let people = ["Colby", "Ivette", "Gaby", "Paolo", "Samir", "Antuan", "Jose"];
	const [searchTerm, setSearchTerm] = React.useState("");
	const [searchResults, setSearchResults] = React.useState([]);
	const handleChange = e => {
		setSearchTerm(e.target.value);
	};
	React.useEffect(
		() => {
			const results = people.filter(person => person.toLowerCase().includes(searchTerm));
			setSearchResults(results);
		},
		[searchTerm]
	);
	return (
		<>
			<div className="searchResult">
				<input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
				<ul>
					{searchResults.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
		</>
	);
};

// export const searchResult = () => {
// 	const { store, actions } = useContext(Context);
// 	return (
// 		<div className="row">
// 			{store.materials.map((item, index) => {
// 				return (
// 					<div className="col-sm m-5 mx-auto" key={index}>
// 						<Card key={index} style={{ width: "18rem" }}>
// 							<Card.Img variant="top" src="" />
// 							<Card.Body>
// 								<Card.Title>{item.name}</Card.Title>
// 								<Card.Header>{item.material}</Card.Header>
// 								<Card.Text>
// 									<p>
// 										<ul>
// 											<li>{item.recycle}</li>
// 											<br />
// 											<li>{item.reuse}</li>
// 											<br />
// 											<li>{item.reduce}</li>
// 											<br />
// 											<li>{item.trash}</li>
// 										</ul>
// 									</p>
// 								</Card.Text>
// 							</Card.Body>
// 						</Card>
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// };
