import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { RadialGauge } from "react-canvas-gauges";

export const Progress = () => {
	const { store, actions } = useContext(Context);
	const [recycle, setRecycle] = useState(0);

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md- 6">
						<h3>Progress Stats</h3>
						<p>Recycle: {recycle} lbs</p>
						<p>
							Trash: {store.weight.info}
							lbs
						</p>
						<p>Overall Reduction: 10lbs from previous week</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md- 2">
						<button className="btn btn-info mr-5" onClick={() => actions.getWeight()}>
							Get Data
						</button>
					</div>
					<div className="col-md- 2">
						<button
							className="btn btn-secondary"
							onClick={() => {
								setRecycle(store.weight.info), actions.emptyTrash();
							}}>
							Empty Trash
						</button>
					</div>
				</div>
			</div>
			<RadialGauge
				units="lbs"
				title="Weight"
				value={store.weight.info}
				minValue={0}
				width="500"
				maxValue={10}
				majorTicks={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
				minorTicks={2}
			/>
		</>
	);
};
