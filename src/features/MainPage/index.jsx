import { SubmissionError } from "redux-form";

import { dishSerialiser } from "utils/serialisers";
import { createDish } from "utils/api";
import { DishForm } from "features/DishForm";

import css from "./styles.module.scss";

export const MainPage = () => {
	const submit = (values) => {
	return createDish(dishSerialiser(values))
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			if (err.response.status === 400) {
				return err.response.json().then((res) => {
					throw new SubmissionError(res);
				});
			}
		});
};

	return (
		<div className={css.MainPage}>
			<DishForm onSubmit={submit}/>
		</div>
	);
};
