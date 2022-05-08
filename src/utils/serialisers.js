import { PIZZA, SOUP, SANDWICH } from "features/DishForm/constants";

export const dishSerialiser = (dish) => {
	let result = {
		name: dish.name,
		preparation_time: dish.preparation_time,
		type: dish.type.value
	}

	switch (dish.type.value) {
		case PIZZA:		
			result.no_of_slices = parseInt(dish.no_of_slices)
			result.diameter = parseFloat(dish.diameter)
		break;
		case SOUP:
			result.spiciness_scale = parseInt(dish.spiciness_scale)
		break;
		case SANDWICH:		
			result.slices_of_bread = parseInt(dish.slices_of_bread)
		break;
		default:
	}

	return result;
}