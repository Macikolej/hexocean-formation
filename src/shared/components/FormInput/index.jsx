import css from "./styles.module.scss";

export const FormInput = ({
	input,
	meta: { touched, error },
	...rest
}) => (
	<>
		<input className={css.formInput} {...input} {...rest} />
		{touched && error && <span className={css.formError}>{error}</span>}
	</>
);
