import React, { useState, useMemo } from 'react';
import {heroes} from '../data/heroes.js';
import queryString  from 'query-string';
import { useForm } from '../hooks/useForm.js';
import { HeroCard } from '../heroes/HeroCard.jsx';
import { useLocation } from 'react-router-dom';
import { getHeroByName } from '../selectors/getHeroByName.js';

export const SearchScreen = ({history}) => {

	const location = useLocation();

	const {q = ''} = queryString.parse(location.search);


	const [ values, handleInputChange, reset ] = useForm({
		hero : q
	});

	const { hero } = values;

	const herosFiltered = useMemo(() => getHeroByName(q), [q]);

	

	const handleSubmit = (e) => {
		e.preventDefault();

		history.push(`?q=${hero}`)
		
	}



	return (
			<div className="row">
				<div className="col-5">
					<h4>Search Form</h4>
					<hr/>
					<form onSubmit={handleSubmit}>
						<input
							name = 'hero' 
							type='text'
							placeholder='Find your hero'
							className='form-control'
							onChange={handleInputChange}
							value={hero}

						/>
						<button
							type='submit'
							className='btn m-1 btn-block btn-outline-primary'
						>
							Search...
						</button>
					</form>
				</div>
				<div className="col-7">
					<h4>Results</h4>
					<hr/>
					{
						herosFiltered.map(hero =>(
							<HeroCard
								key={hero.id}
								{...hero}
							/>
						))
					}
				</div>
			</div>
		
	)
}
