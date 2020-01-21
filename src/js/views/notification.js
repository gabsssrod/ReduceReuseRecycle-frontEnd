import React from "react";
import { Link } from "react-router-dom";

export const Notification = () => {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<button
					className="btn btn-primary"
					type="button"
					data-toggle="collapse"
					data-target="#collapseExample"
					aria-expanded="false"
					aria-controls="collapseExample">
					Button with data-target
				</button>
				<div className="collapse" id="collapseExample">
					<div className="card card-body">
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
						Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
						proident.
					</div>
				</div>
			</div>
		</div>
	);
};
