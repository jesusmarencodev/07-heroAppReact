import { heroes } from "../data/heroes"

export const getHeroByName = (name = '') => {
	name.toLocaleLowerCase();
	return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
}
