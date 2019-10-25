import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Wizard from './Wizard';

class Form extends Component {
	constructor(props) {
		super(props)
		this.nextStep = this.nextStep.bind(this);
		this.previousStep = this.previousStep.bind(this);

		this.state = {
			step: 1
		};
	}

	nextStep() {
		this.setState(state => ({ step: state.step + 1 }));
	}

	previousStep() {
		this.setState(state => ({ step: state.step - 1 }));
	}

	render() {
		const { onSubmit, steps } = this.props
		const { step } = this.state
		const indexLastStep = steps.length;

		return (
			<div>
			{
				steps.map((currentStep, idx) => {
					const key = currentStep.title + idx;
					const indexStep = idx + 1;
					const isLastStep = indexStep === indexLastStep;

					if(indexStep !== step)
						return null;

					return (
						<Wizard
							key={key}
							{...currentStep}
							hasPreviousStep={!!idx}
							isLastStep={isLastStep}
							previousStep={this.previousStep}
							onSubmit={isLastStep ? onsubmit : this.nextStep}
						/>
					);
				})
			}
			</div>
		)
	}
}

Form.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default Form;