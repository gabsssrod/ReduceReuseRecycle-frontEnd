import React from "react";
import { Link } from "react-router-dom";

import "../../styles/searchItems.scss";

export const SearchItem = () => {
	return (
		<>
			<form className="form-inline my-2 my-lg-0">
				<input
					className="search-input form-control mr-sm-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
				/>
				<button className="btn1 btn-light my-2 my-sm-0" type="submit">
					Search
				</button>
			</form>
		</>
	);
};
