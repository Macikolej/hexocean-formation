import { Field, reduxForm } from "redux-form";

import { FormInput } from "shared/components/FormInput";
import { FormSelect } from "shared/components/FormSelect";

import { validatePresence, validatePreparationTime } from "./validators";
import { AdditionalFields } from "./AdditionalFields";
import { DURATION_REGEXP, DISH_FORM, TYPE_OPTIONS } from "./constants";
import css from "./styles.module.scss";

const styles = {
	menu: (base) => ({
		...base,
		marginTop: 0,		
	}),
};

const DishFormComponent = ({ handleSubmit, submitting }) => {
	return (
		<form onSubmit={handleSubmit} className={css.DishForm}>
			<span className={css.formTitle}>DISH FORM</span>
			<div className={css.formGroup}>
				<label htmlFor="name" className={css.formLabel}>
					Name
				</label>
				<Field name="name" type="text" component={FormInput} required />
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
			<button className={css.submitButton} type="submit" disabled={submitting}>
				{submitting ? "Loading..." : "Submit"}
			</button>
		</form>
	);
};

export const DishForm = reduxForm({
	form: DISH_FORM,
})(DishFormComponent);
