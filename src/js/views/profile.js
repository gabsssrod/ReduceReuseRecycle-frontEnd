import React from "react";
import { Link } from "react-router-dom";

export const Profile = () => {
	return (
		<>
			<div className="card-deck mx-auto">
				<div className="card">
					<img src="..." className="card-img-top" alt="" />
					<div className="card-body">
						<h5 className="card-title">search items</h5>
						<p className="card-text">
							SEARCH ITEMS
							<Link to="/SearchItem">
								<button className="btn1 btn-light btn-lg" role="button">
									Search
								</button>
							</Link>
						</p>
					</div>
				</div>
				<div className="card">
					<img src="..." className="card-img-top" alt="" />
					<div className="card-body">
						<h5 className="card-title">notifications</h5>
						<p className="card-text">
							NOTIFICATIONS
							<Link to="/notification">
								<button className="btn1 btn-light btn-lg" role="button">
									Set up notification
								</button>
							</Link>
						</p>
					</div>
				</div>
			</div>
			<br />
			<div className="card-deck mx-auto">
				<div className="card">
					<img src="..." className="card-img-top" alt="" />
					<div className="card-body">
						<h5 className="card-title">Progress</h5>
						<p className="card-text">
							PROGRESS
							<Link to="/progress">
								<button className="btn1 btn-light btn-lg" role="button">
									See your progress
								</button>
							</Link>
						</p>
					</div>
				</div>
				<div className="card">
					<img src="..." className="card-img-top" alt="" />
					<div className="card-body">
						<h5 className="card-title">Evenst</h5>
						<p className="card-text">
							Beach clean up, park clean up.... etc
							<Link to="/events">
								<button className="btn1 btn-light btn-lg" role="button">
									Search events near you
								</button>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
