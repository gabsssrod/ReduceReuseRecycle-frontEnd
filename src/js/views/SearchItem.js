import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/searchItems.scss";

export const SearchItem = () => {
	const [search, setSearch] = useState();

	return (
		<>
			<div className={search}>
				<div className="search1 form-inline">
					<i className="fas fa-search" aria-hidden="true" />
					<input
						className="form-control search-input form-control-sm ml-3 w-75"
						type="text"
						aria-label="Search"
						onChange={e => setSearch(e.target.value)}
					/>
				</div>
			</div>
			<div className="card">
				<div className="card-header">Quote</div>
				<div className="card-body">content</div>
			</div>
		</>
	);
};
