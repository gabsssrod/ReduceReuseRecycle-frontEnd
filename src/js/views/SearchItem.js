import React from "react";
import { Link } from "react-router-dom";

import "../../styles/searchItems.scss";

export const SearchItem = () => {
	return (
		<div className="search">
			<form className="search1 form-inline">
				<i className="fas fa-search" aria-hidden="true" />
				<input
					className="form-control search-input form-control-sm ml-3 w-75"
					type="text"
					aria-label="Search"
				/>
			</form>
		</div>
	);
};
