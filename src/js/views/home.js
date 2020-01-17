import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div>
		<main role="main">
		
			{/* Marketing messaging and featurettes
      ================================================== */}
			{/* Wrap the rest of the page in another container to center all the content. */}
			<div className="container marketing">
				{/* Three columns of text below the carousel */}
				<div className="row">
					<div className="col-lg-4">
						<img
							className="rounded-circle"
							src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
							alt="Generic placeholder image"
							width={140}
							height={140}
						/>
						<h2>Heading</h2>
						<p>
							Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
							ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
							Praesent commodo cursus magna.
						</p>
						<p>
							<a className="btn btn-secondary" href="#" role="button">
								View details »
							</a>
						</p>
					</div>
					{/* /.col-lg-4 */}
					<div className="col-lg-4">
						<img
							className="rounded-circle"
							src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
							alt="Generic placeholder image"
							width={140}
							height={140}
						/>
						<h2>Heading</h2>
						<p>
							Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
							elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus
							commodo, tortor mauris condimentum nibh.
						</p>
						<p>
							<a className="btn btn-secondary" href="#" role="button">
								View details »
							</a>
						</p>
					</div>
					{/* /.col-lg-4 */}
					<div className="col-lg-4">
						<img
							className="rounded-circle"
							src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
							alt="Generic placeholder image"
							width={140}
							height={140}
						/>
						<h2>Heading</h2>
						<p>
							Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum
							id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
							condimentum nibh, ut fermentum massa justo sit amet risus.
						</p>
						<p>
							<a className="btn btn-secondary" href="#" role="button">
								View details »
							</a>
						</p>
					</div>
					{/* /.col-lg-4 */}
				</div>
				{/* /.row */}
				{/* START THE FEATURETTES */}
				<hr className="featurette-divider" />
				<div className="row featurette">
					<div className="col-md-7">
						<h2 className="featurette-heading">
							<span className="text-muted">
								It
								{"'"}
								ll blow your mind.
							</span>
						</h2>
						<p className="lead">
							Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod
							semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
							tellus ac cursus commodo.
						</p>
					</div>
					<div className="col-md-5">
						<img
							className="featurette-image img-fluid mx-auto"
							data-src="holder.js/500x500/auto"
							alt="Generic placeholder image"
						/>
					</div>
				</div>
				<hr className="featurette-divider" />
				<div className="row featurette">
					<div className="col-md-7 order-md-2">
						<h2 className="featurette-heading">
							<span className="text-muted">See for yourself.</span>
						</h2>
						<p className="lead">
							Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod
							semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
							tellus ac cursus commodo.
						</p>
					</div>
					<div className="col-md-5 order-md-1">
						<img
							className="featurette-image img-fluid mx-auto"
							data-src="holder.js/500x500/auto"
							alt="Generic placeholder image"
						/>
					</div>
				</div>
				<hr className="featurette-divider" />
				<div className="row featurette">
					<div className="col-md-7">
						<h2 className="featurette-heading">
							And lastly, this one. <span className="text-muted">Checkmate.</span>
						</h2>
						<p className="lead">
							Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod
							semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
							tellus ac cursus commodo.
						</p>
					</div>
					<div className="col-md-5">
						<img
							className="featurette-image img-fluid mx-auto"
							data-src="holder.js/500x500/auto"
							alt="Generic placeholder image"
						/>
					</div>
				</div>
				<hr className="featurette-divider" />
				{/* /END THE FEATURETTES */}
			</div>
		</main>
		{/* Bootstrap core JavaScript
    ================================================== */}
		{/* Placed at the end of the document so the pages load faster */}
		{/* Just to make our placeholder images work. Don't actually copy the next line! */}
	</div>
);
