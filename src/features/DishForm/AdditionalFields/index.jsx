import { connect } from "react-redux";
import { Field, formValueSelector } from "redux-form";

import { DISH_FORM } from "features/DishForm/constants";
import { FormInput } from "shared/components/FormInput";

const AdditionalFieldsComponent = ({ type }) => {
	if (!type) {
		return null;
	}

	if (type.value === "pizza") {
		return (
			<>
				<div>
					<label htmlFor="diameter">Diameter</label>
					<Field
						name="diameter"
						type="number"
						component={FormInput}
						min="0"
						required
					/>
				</div>
				<div>
					<label htmlFor="no_of_slices">Number of slices</label>
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
			<div>
				<label htmlFor="spiciness_scale">Spiciness scale</label>
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
			<div>
				<label htmlFor="slices_of_bread">Slices of bread</label>
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
