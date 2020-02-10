import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Profile } from "./views/profile";
import { SearchItem } from "./views/SearchItem";
import { searchResult } from "./views/searchResult";
import { Notification } from "./views/notification";
import { Progress } from "./views/progress";
import { Events } from "./views/events";
import injectContext from "./store/appContext";
import { Registration } from "./views/registration";
import { Addevents } from "./views/addEvent";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./component/login";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/demo" component={Demo} />
						<Route path="/single/:theid" component={Single} />
						<Route path="/login" component={Login} />
						<Route path="/profile" component={Profile} />
						<Route path="/SearchItem" component={SearchItem} />
						<Route path="/searchResult" component={searchResult} />
						<Route path="/notification" component={Notification} />
						<Route path="/progress" component={Progress} />
						<Route path="/events" component={Events} />
						<Route path="/registration" component={Registration} />
						<Route path="/addEvent" component={Addevents} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
