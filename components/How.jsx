import React from "react";
import styles from "../styles/How.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationArrow,
	faTruck,
	faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

function How() {
	return (
		<>
			<section className="section-how">
				<h2 className="heading-secondary center-text">How it Works</h2>
				<div className="how-section container center-text">
					<div>
						<FontAwesomeIcon icon={faLocationArrow} className="howIcon" />
						<h3 className="heading-tertiary">Set Delivery Location</h3>
						<p>Select the Location where you want us to deliver</p>
					</div>
					<div>
						<FontAwesomeIcon icon={faShoppingBag} className="howIcon" />
						<h3 className="heading-tertiary">Choose the Product</h3>
						<p>Browse the items you want</p>
					</div>
					<div>
						<FontAwesomeIcon icon={faTruck} className="howIcon" />
						<h3 className="heading-tertiary">Receive it at your Doorstep</h3>
						<p>Your Order will be delivered to you in no time</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default How;
