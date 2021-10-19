import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

//create your first component
export const Light = props => {
	const [glow, setGlow] = useState({
		red: false,
		orange: false,
		green: false
	});

	const changeLight = () => {
		let selectedColor = Object.entries(glow).find(
			color => color[0] === props.color
		)[0];

		if (selectedColor === "red") {
			glow["red"]
				? setGlow({ red: false, orange: false, green: false })
				: setGlow({ red: true, orange: false, green: false });
		} else if (selectedColor === "orange") {
			glow["orange"]
				? setGlow({ red: false, orange: false, green: false })
				: setGlow({ red: false, orange: true, green: false });
		} else {
			glow["green"]
				? setGlow({ red: false, orange: false, green: false })
				: setGlow({ red: false, orange: false, green: true });
		}

		console.log(glow);
	};

	return (
		<div
			className={
				props.color +
				"-light" +
				(glow[props.color] ? " " + props.color + "-glow" : "")
			}
			onClick={changeLight}></div>
	);
};

Light.propTypes = {
	color: PropTypes.string
};
