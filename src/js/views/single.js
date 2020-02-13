import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles//single.scss";
export const Single = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron itemJumbotron">
			<div className="card mx-auto itemCard">
				<div className="card-body">
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

					<Link to="/profile">
						<button className="btn mx-auto" href="#" role="button">
							Back to profile
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
