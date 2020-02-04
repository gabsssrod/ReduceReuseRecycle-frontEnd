import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron">
			<h1 className="display-4">{store.searchResults[props.match.params.theid].name}</h1>

			<h3>
				<i className="fas fa-recycle mr-1" float="left" />
				Reduce
			</h3>
			<p>{store.searchResults[props.match.params.theid].reduce}</p>

			<h3>
				<i className="fas fa-recycle mr-1" float="left" />
				Reuse
			</h3>
			<p>{store.searchResults[props.match.params.theid].reuse}</p>

			<h3>
				<i className="fas fa-recycle mr-1" float="left" />
				Recycle
			</h3>
			<p>{store.searchResults[props.match.params.theid].recycle}</p>

			<h3>
				<i className="far fa-frown mr-1" float="left" />
				Trash
			</h3>
			<p>{store.searchResults[props.match.params.theid].trash}</p>

			<hr className="my-4" />
			{/* 
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link> */}
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
