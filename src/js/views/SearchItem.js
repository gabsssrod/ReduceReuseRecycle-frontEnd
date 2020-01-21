import React from "react";
import { Link } from "react-router-dom";

import "../../styles/searchItems.scss";

export const SearchItem = () => {
	return (
		<>
			<div className="input-field">
				<input className="search-input" type="text" placeholder="search item" />
				<div className="icon-wrap" />
			</div>
		</>
	);
};
