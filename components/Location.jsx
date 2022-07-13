import React from "react";

function Location({ location }) {
	return (
		<div>
			<h1 className="heading-primary center-text">
				Everything you need, Delivered now
			</h1>
			<form className="delivery-form">
				<div>
					<ion-icon
						className="delivery-icon"
						name="location-outline"
					></ion-icon>
				</div>
				<div>
					<h2 className="service-header">Delivering to</h2>
				</div>
				<div>
					<input
						className="input-text"
						id="Address"
						type="text"
						placeholder={`Whats your address i.e ${location}`}
						name="Address"
					/>
				</div>
			</form>
		</div>
	);
}

export default Location;
