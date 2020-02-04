import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/searchItems.scss";

export const SearchItem = () => {
	const [search, setSearch] = useState();
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col">
						<input type="text" placeholder="Search" onChange={e => setSearch(e.target.value)} />

						<button onClick={() => actions.search(search)} className="btn btn-info">
							Search
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
