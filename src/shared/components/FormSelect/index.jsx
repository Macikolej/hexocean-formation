import Select from "react-select";

export const FormSelect = ({
	input: {value, onChange},		
	meta: { touched, error, warning },
	styles,
	options,	
}) => (
	<>
		<Select			
			value={value}
			onChange={onChange}
			styles={styles}
			options={options}
		/>		
		{touched &&
			((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
	</>
);
