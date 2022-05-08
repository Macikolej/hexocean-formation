import { connect } from "react-redux";
import { Field, formValueSelector } from "redux-form";

import { DISH_FORM } from "features/DishForm/constants";
import { FormInput } from "shared/components/FormInput";

import css from "../styles.module.scss";

const AdditionalFieldsComponent = ({ type }) => {
	if (!type) {
		return null;
	}

	if (type.value === "pizza") {
		return (
			<>
				<div className={css.formGroup}>
					<label htmlFor="diameter" className={css.formLabel}>
						Diameter
					</label>
					<Field						
						name="diameter"
						type="number"
						component={FormInput}
						min="0"
						required
					/>
				</div>
				<div className={css.formGroup}>
					<label htmlFor="no_of_slices" className={css.formLabel}>
						Number of slices
					</label>
					<Field						
						name="no_of_slices"
						type="number"
						component={FormInput}
						min="0"
						step="1"
						required
					/>
				</div>
			</>
		);
	} else if (type.value === "soup") {
		return (
			<div className={css.formGroup}>
				<label htmlFor="spiciness_scale" className={css.formLabel}>
					Spiciness scale
				</label>
				<Field					
					name="spiciness_scale"
					type="number"
					component={FormInput}
					min="1"
					max="10"
					step="1"
					required
				/>
			</div>
		);
	} else if (type.value === "sandwich") {
		return (
			<div className={css.formGroup}>
				<label htmlFor="slices_of_bread" className={css.formLabel}>
					Slices of bread
				</label>
				<Field					
					name="slices_of_bread"
					type="text"
					component={FormInput}
					min="0"
					step="1"
					required
				/>
			</div>
		);
	}

	return null;
};

const selector = formValueSelector(DISH_FORM);

export const AdditionalFields = connect((state) => ({
	type: selector(state, "type"),
}))(AdditionalFieldsComponent);
