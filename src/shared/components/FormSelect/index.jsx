import Select from "react-select";

import css from "./styles.module.scss";

export const FormSelect = ({
	input: { value, onChange },
	meta: { touched, error },
	styles,
	options,
	theme
}) => (
	<>
		<Select
			value={value}
			onChange={onChange}
			styles={styles}
			options={options}			
		/>
		{touched && error && <span className={css.FormError}>{error}</span>}
	</>
);
