import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Progress = () => {
	// const [balance, setBalance] = useState("");

	const clik = () => {
		fetch("http://192.168.11.88:3000/remainder")
			.then(res => res.json())
			.then(res => console.log(res.msg))
			.catch(error => console.log("error: ", error));
	};

	return (
		<>
			<h3>Progress Stats</h3>
			<p>Recycle: 4 lbs</p>
			<p>Trash: 4 lbs</p>
			<p>Overall Reduction: 10lbs from previous week</p>
			<button onClick={clik}>Get from rasp</button>
		</>
	);
};
