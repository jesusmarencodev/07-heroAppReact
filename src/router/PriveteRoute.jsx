import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

export const PriveteRoute = ({
	isAuthenticated,
	component : Component,
	...rest //este es el path, location, computedMatch que viene del componente AppRoute
}) => {
	console.log(rest.location.pathname)
	localStorage.setItem('lastPath', rest.location.pathname);
  return (
		<Route
			{...rest} //este es el path, location, computedMatch que viene del componente AppRoute
			component={ (props) =>(
				(isAuthenticated)
					? <Component {...props}/>
					: <Redirect to='/login'/>
			)}
		/>
	);
};

PriveteRoute.propTypes = {
	isAuthenticated : PropTypes.bool.isRequired,
	component : PropTypes.func.isRequired,
}

