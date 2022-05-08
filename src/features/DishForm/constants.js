export const PIZZA = "pizza";
export const SOUP = "soup";
export const SANDWICH = "sandwich";
export const DISH_FORM = "DISH_FORM";
export const DURATION_REGEXP = /^$|(^\d\d:[0-5]\d:?$)|(^\d$)|(^\d\d:?$)|(^\d\d:[0-5]$)|(^\d\d:[0-5]\d:[0-5]\d?$)/;
export const FULL_DURATION_REGEXP = /^\d\d:[0-5]\d:[0-5]\d$/;

export const TYPE_OPTIONS = [
	{ value: PIZZA, label: "Pizza" },
	{ value: SOUP, label: "Soup" },
	{ value: SANDWICH, label: "Sandwich" }
];