import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

//create your first component
export const Light = props => {
	return <div className={props.classes} onClick={props.clickfunction}></div>;
};

Light.propTypes = {
	classes: PropTypes.string,
	clickfunction: PropTypes.func
};
