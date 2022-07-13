import React from "react";
import style from "../styles/NavBar.module.css";

function NavBar() {
	const LogoName = "MAVUNO";
	const help = "HELP";
	const LoginSignup = "LOGIN/SIGNUP";
	return (
		<>
			<header className="header">
				<a className="header-name" href="#">
					<p>
						<span className="tag mavuno-tag">{LogoName}</span>
						<span className="tag market-tag">
							<ion-icon name="storefront-outline"></ion-icon>
							MARKET
						</span>
					</p>
				</a>
				<nav className="main-nav">
					<ul className="main-nav-list">
						<li>
							<a className="main-nav-link" href="#">
								{help}
							</a>
						</li>
						<li>
							<a className="main-nav-link nav-cta" href="#">
								{LoginSignup}
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default NavBar;
