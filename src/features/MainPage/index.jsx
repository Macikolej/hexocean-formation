import { useState } from "react";
import { SubmissionError } from "redux-form";
import cn from "classnames";

import { dishSerialiser } from "utils/serialisers";
import { createDish } from "utils/api";
import { DishForm } from "features/DishForm";

import { SUCCESS, FAILURE } from "./constants";
import css from "./styles.module.scss";

export const MainPage = () => {
	const [flashMessage, setFlashMessage] = useState({});

	const submit = (values) => {
		return createDish(dishSerialiser(values))
			.then((res) => {
				setFlashMessage({
					type: SUCCESS,
					message: `Successfully created a dish with id: ${res.id}`,
					visible: true,
				});
				setTimeout(() => {
					setFlashMessage((flash) => ({
						...flash,
						visible: false,
					}));
				}, 2000);
			})
			.catch((err) => {
				if (err.response.status === 400) {
					setFlashMessage({
						type: FAILURE,
						message: `Failed to create a dish.`,
						visible: true,
					});
					setTimeout(() => {
						setFlashMessage((flash) => ({
							...flash,
							visible: false,
						}));
					}, 2000);
					return err.response.json().then((res) => {
						throw new SubmissionError(res);
					});
				}
			});
	};

	return (
		<div className={css.MainPage}>
			<div
				className={cn(css.flash, {
					[css.flashVisible]: flashMessage.visible,
					[css.flashFailure]: flashMessage.type === FAILURE,
				})}
			>
				{flashMessage.message}
			</div>
			<DishForm onSubmit={submit} />
		</div>
	);
};
