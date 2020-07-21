import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types';

export const LoginScreen = ({history}) => {

	const {dispatch} = useContext(AuthContext);

	const lastPath = localStorage.getItem('lastPath') || '/';

	const handleLogin = (e) => {
		//history.push('/');//el push recuerda la ventana anterior, 
		history.replace(lastPath); //el replace no recuerda la ventana anterior

 		dispatch({
			type : types.login,
			payload : {
				name : 'Jesus'
			}
		}) 
	}	

	return (
		<div className='container mt-5 '>
			<h1>Login</h1>
			<hr/>
			<button
				className='btn btn-primary'
				onClick={handleLogin}>Login</button>
		</div>
	)
}
