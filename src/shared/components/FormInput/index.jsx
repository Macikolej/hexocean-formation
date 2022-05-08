export const FormInput = ({
	input,		
	meta: { touched, error, warning },
	...rest
}) => (
	<>
		<input {...input} {...rest} />
		{touched &&
			((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
	</>
);
