import React from "react";

function Cta() {
	return (
		<div>
			<div className="cta">
				<div className="cta-text-box">
					<h2 className="heading-secondary">Sign Up to our Website</h2>
					<p className="cta-text">
						Dont Miss out on our great offers and Gifts
					</p>

					<form className="cta-form">
						<div>
							<label for="full-name">Full Name</label>
							<input
								id="full-name"
								type="text"
								placeholder="Your name"
								name="full-name"
								required
							/>
						</div>
						<div>
							<label for="email">Email address</label>
							<input
								id="email"
								type="email"
								placeholder="me@example.com"
								name="email"
								required
							/>
						</div>
						<div>
							<label for="select-where">Where did here from us?</label>
							<select id="select-where" name="select-where" required>
								<option value="">Please choose one option:</option>
								<option value="friends">Friends and Family</option>
								<option value="youtube">YouTube video</option>
								<option value="podcast">Podcast</option>
								<option value="ad">Facebook ad</option>
								<option value="">Others</option>
							</select>
						</div>
						<button className="btn btn--form">Sign up now</button>
					</form>
				</div>
				<div
					className="cta-img-box"
					role="img"
					aria-label="Woman Enjoying food"
				></div>
			</div>
		</div>
	);
}

export default Cta;
