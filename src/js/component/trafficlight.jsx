import React, { useEffect, useState } from "react";
import { Light } from "./light.jsx";

const TrafficLight = () => {
	return (
		<div className="traffic-light">
			<Light color="red" />
			<Light color="orange" />
			<Light color="green" />
		</div>
	);
};

export default TrafficLight;
