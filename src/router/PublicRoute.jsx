import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({
	isAuthenticated,
	component : Component,
	...rest // este es el path, location, computedMatch que viene del componente AppRoute
}) => {


	return (
		<Route
			{...rest} // este es el path, location, computedMatch que viene del componente AppRoute
			component={ (props) =>(
				(!isAuthenticated)
					? <Component {...props}/>
					: <Redirect to='/' />
			)}
		/>
	)
}

PublicRoute.propTypes = {
	isAuthenticated : PropTypes.bool.isRequired,
	component : PropTypes.func.isRequired,
}


