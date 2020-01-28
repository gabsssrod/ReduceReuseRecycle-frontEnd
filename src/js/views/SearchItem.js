import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/searchItems.scss";

export const SearchItem = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="card">
				{store.materials.map((item, index) => {
					return (
						<div key={index} className="card-body">
							{store.materials}
						</div>
					);
				})}
			</div>
		</>
	);
};
