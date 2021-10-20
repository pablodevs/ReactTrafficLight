import React, { useState } from "react";
import { Light } from "./light.jsx";

const TrafficLight = () => {
	// Hooks
	const [glow, setGlow] = useState({
		red: false,
		orange: false,
		green: false
	});

	// Funcions
	const setState = e => {
		let newGlow = glow;
		for (let key in newGlow) {
			key === e.target.classList[0]
				? (newGlow[key] = !newGlow[key])
				: (newGlow[key] = false);
		}
		setGlow(prevGlow => {
			return { ...prevGlow, ...newGlow };
		});
	};

	// Render
	return (
		<div className="traffic-light">
			<Light
				classes={"red" + (glow.red ? " red-glow" : "")}
				clickfunction={setState}
			/>
			<Light
				classes={"orange" + (glow.orange ? " orange-glow" : "")}
				clickfunction={setState}
			/>
			<Light
				classes={"green" + (glow.green ? " green-glow" : "")}
				clickfunction={setState}
			/>
		</div>
	);
};

export default TrafficLight;
