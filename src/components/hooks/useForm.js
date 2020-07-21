import { useState, useEffect } from 'react';


export const useForm = (initialState = {}) => {
	const [values, setValues] = useState(initialState);

	const handleInputChange = ({target}) => { //hacemos destructurin del evento que viene como e

			setValues({
					...values,
					[target.name]  : target.value
			})
	}

	const reset = () => {
			setValues( initialState )
	}

  return [values, handleInputChange, reset]


}