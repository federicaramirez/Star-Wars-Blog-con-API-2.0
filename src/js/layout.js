import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import  Home  from "./views/home.jsx";
import { Favoritos } from "./views/favoritos.jsx";
import { Single } from "./views/single.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer";
import LeermasPersonas from "./views/leermaspersonas.jsx";
import LeermasPlanetas from "./views/leermasplanetas.jsx";
import LeermasVehiculos from "./views/leermasvehiculos.jsx";
import Authentication from "./views/authentication.jsx";
import CreateUser from "./views/createuser.jsx";
import Settings from "./views/settings.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div style={{background:"#1e272e"}} >
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/favoritos">
							<Favoritos />
						</Route>
						<Route exact path="/leermas/personas/:theid">
							<LeermasPersonas />
						</Route>
						<Route exact path="/leermas/planetas/:theid">
							<LeermasPlanetas />
						</Route>
						<Route exact path="/leermas/vehiculos/:theid">
							<LeermasVehiculos />
						</Route>
						<Route exact path="/login">
							<Authentication />
						</Route>
						<Route exact path="/signup">
							<CreateUser />
						</Route>
						<Route exact path="/settings">
							<Settings />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
