import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from './renderField'

const required = value => (value ? undefined : 'Required')

const Wizard = props => {
	const {
	  handleSubmit,
	  previousStep,
	  isLastStep,
	  hasPreviousStep,
	  fields,
	  title
	} = props

	return (
		<form onSubmit={handleSubmit}>
			<h3>{title}</h3>
			<div>
				{
					fields.map(field => (
						<Field
							key={field.name}
							name={field.name}
							type={field.type}
							validate={required}
							component={renderField}
							label={field.label}
							values={field.values}
						/>
					))
				}
			</div>
			<div>
				{
					hasPreviousStep && (
						<button type="button" className="previous" onClick={previousStep}>
							Previous
						</button>
					)
				}
				<button type="submit" className="next">
					{isLastStep ? 'Submit': 'Next'}
				</button>
			</div>
		</form>
	);
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(Wizard)