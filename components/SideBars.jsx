import React from "react";
import Image from "next/image";

function SideBars({ image }) {
	return (
		<div>
			<Image
				className="hero-img"
				src={image}
				alt="food-img"
				height={1000}
				width={300}
			/>
		</div>
	);
}

export default SideBars;
