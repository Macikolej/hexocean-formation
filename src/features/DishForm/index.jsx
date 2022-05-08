import { useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import Select from "react-select";

import { FormInput } from "shared/components/FormInput";
import { FormSelect } from "shared/components/FormSelect";

import { AdditionalFields } from "./AdditionalFields";
import {
	FULL_DURATION_REGEXP,
	DURATION_REGEXP,
	DISH_FORM,
	TYPE_OPTIONS,
} from "./constants";
import css from "./styles.module.scss";

const options = [
	{ value: "pizza", label: "Pizza" },
	{ value: "soup", label: "Soup" },
	{ value: "sandwich", label: "Sandwich" },
];

const styles = {
	menu: (base) => ({
		...base,
		marginTop: 0,
	}),
};

const validatePresence = (value) => {	
	if (!value) {
		return "This field must be present.";
	}
};

const validatePreparationTime = (duration) => {
	if (!FULL_DURATION_REGEXP.test(duration)) {
		return "Preparation time must match the 00:00:00 format.";
	}
};

const DishFormComponent = ({ handleSubmit, submitting }) => {
	return (
		<form onSubmit={handleSubmit} className={css.DishForm}>
			<div className={css.formGroup}>				
				<label htmlFor="name" className={css.formLabel}>
					Name
				</label>
				<Field					
					name="name"
					type="text"
					component={FormInput}
					required
				/>
			</div>
			<div className={css.formGroup}>
				<label htmlFor="preparation_time" className={css.formLabel}>
					Preparation time
				</label>
				<Field					
					name="preparation_time"
					type="text"
					component={FormInput}
					onChange={(e) => {
						if (!DURATION_REGEXP.test(e.target.value)) {
							e.preventDefault();
						}
					}}
					validate={validatePreparationTime}
					placeholder="00:00:00"
					required
				/>
			</div>
			<div className={css.formGroup}>
				<label htmlFor="type" className={css.formLabel}>
					Type
				</label>
				<Field
					name="type"
					component={(props) => (
						<FormSelect {...props} styles={styles} options={TYPE_OPTIONS} />
					)}
					validate={validatePresence}
				/>
			</div>
			<AdditionalFields />
			<button className={css.submitButton} type="submit" disabled={submitting} >
				{submitting ? "Loading..." : "Submit"}
			</button>
		</form>
	);
};

export const DishForm = reduxForm({
	form: DISH_FORM,
})(DishFormComponent);
