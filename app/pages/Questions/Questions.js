import React from 'react';
import Form from '../../components/Form'
const steps = [
	{
		title: '¿step 1?',
		fields: [{
			type: 'radio',
			name: 'test',
			label: 'test label',
			values: ['1','2','3','4']
		}]
	},
	{
		title: '¿step 2?',
		fields: [{
			type: 'radio',
			name: 'test2',
			label: 'test label',
			values: ['1','2','3','4']
		}]
	}
];

const Questions = () => {
	return (
		<div>
			render
			<Form steps={steps} onSubmit={(data) => { console.log(data) }} />
		</div>
	)
};

export default Questions;