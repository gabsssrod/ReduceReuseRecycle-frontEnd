import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = props => {
	const { store, actions } = useContext(Context);
	const [pickDay, setPickDay] = useState();
	const [pickday2, setPickDay2] = useState();

	return (
		<>
			<div className="card-deck mx-auto">
				<div className="card">
					<img src="..." className="card-img-top" alt="" />
					<div className="card-body">
						<h5 className="card-title">search items</h5>
						<p className="card-text">
							<div className="search">
								<div className="search1 form-inline">
									<i className="fas fa-search" aria-hidden="true" />
									<input
										className="form-control search-input form-control-sm ml-3 w-75"
										type="text"
										aria-label="Search"
									/>
								</div>
							</div>
						</p>
					</div>
				</div>
				<div className="card">
					<img src="..." className="card-img-top" alt="" />
					<div className="card-body">
						<h5 className="card-title">Your Pick Up Days</h5>
						<p className="card-text">
							{!store.buttonPickDays ? (
								""
							) : (
								<Link to="/notification" className={store.buttonPickDays}>
									set up days
								</Link>
							)}

							<div>
								<div>
									{!store.daysPicked
										? "nope"
										: store.daysPicked.map((item, index) => {
												return (
													<div key={index}>
														{item.first_day} {item.second_day}
														{pickDay} {pickday2}
													</div>
												);
										  })}
								</div>
							</div>
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
