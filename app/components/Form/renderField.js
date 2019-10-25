import React from 'react';

const renderField = ({
	input,
	label,
	type,
	meta: { touched, error, warning },
	values
}) => (
	<div>
		<label>{label}</label>
		<div>
			{
				values && values.length ?
					values.map(value => (
						<input
							key={value}
							name={input.name}
							onChange={input.onChange}
							value={value}
							placeholder={label}
							type={type}
						/>
					))
					:
					<input {...input} placeholder={label} type={type} />
			}
			{touched && error && <span>{error}</span>}
		</div>
	</div>
);

export default renderField;