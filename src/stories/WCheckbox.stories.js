import WCheckbox from '../components/UI-kit/WCheckbox/WCheckbox';

export default {
	component: WCheckbox,
	title: 'Контролы/WCheckbox',
	argTypes: {
		title: {
			name: 'Текст чекбокса',
			type: { name: 'string', required: false },
			description: 'Текст',
			table: {
				category: 'Внутреннее содержимое',
				type: { summary: null },
				defaultValue: { summary: 'Чекбокс' },
			},
			control: { type: 'text' }
		},
		checked: {
			name: 'Состояние чекбокса',
			type: { name: 'boolean', required: false },
			description: 'Активный/неактивный чекбокс',
			table: {
				category: 'Состояние',
				type: { summary: 'true | false' },
				defaultValue: { summary: 'false' },
			},
			control: { type: 'boolean' }
		},
		disabled: {
			name: 'Неактивный чекбокс',
			type: { name: 'boolean', required: false },
			description: 'Неактивный:',
			table: {
				category: 'Состояние',
				type: { summary: 'true | false' },
				defaultValue: { summary: 'false' },
			},
			control: { type: 'boolean' }
		},
		onClick: {
			title: 'Чекбокс',
			action: 'clicked'
		}
	},
	args: {
		onClick () {
			console.log('Привет')
		}
	},
};

const Template = (args, { argTypes }) => ({
	components: { WCheckbox },
	props: Object.keys(argTypes),
	template: '<WCheckbox @click="onClick" v-bind="$props" />',
});

export const Checkbox = Template.bind({});
Checkbox.args = {};

export const CheckboxChecked = Template.bind({});
CheckboxChecked.args = {
	checked: true
};

export const CheckboxDisabled = Template.bind({});
CheckboxDisabled.args = {
	disabled: true
};

export const CheckboxCheckedDisabled = Template.bind({});
CheckboxCheckedDisabled.args = {
	checked: true,
	disabled: true
};

