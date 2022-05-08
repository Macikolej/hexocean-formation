import { FULL_DURATION_REGEXP } from "./constants";

export const validatePresence = (value) => {
	if (!value) {
		return "This field must be present.";
	}
};

export const validatePreparationTime = (duration) => {
	if (!FULL_DURATION_REGEXP.test(duration)) {
		return "Preparation time must match the 00:00:00 format.";
	}
};