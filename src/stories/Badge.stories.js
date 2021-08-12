import Badge from '../components/UI-kit/Badge/Badge';

export default {
	component: Badge,
	title: 'Элементы/Badge',
	argTypes: {
		title: {
			name: 'Текст внутри тэга',
			type: { name: 'string', required: false },
			description: 'Текст',
			defaultValue: 'Текст',
			table: {
				category: 'Внутреннее содержимое',
				type: { summary: null },
				defaultValue: { summary: 'Сохранить' },
			},
			control: {
				type: 'text'
			}
		},
		type: {
			name: 'Тип тэга',
			type: { name: 'string', required: false },
			description: 'Типы: ',
			table: {
				category: 'Внешний вид',
				type: { summary: 'primary | secondary | danger | warning' },
				defaultValue: { summary: 'primary' },
			},
			control: {
				type: 'select',
				options: [ 'primary', 'secondary', 'danger', 'warning' ]
			}
		},
		size: {
			name: 'Размер тэга',
			type: { name: 'string', required: false },
			description: 'Размеры: ',
			table: {
				category: 'Внешний вид',
				type: { summary: 'small | default | big' },
				defaultValue: { summary: 'default' },
			},
			control: {
				type: 'select',
				options: [ 'small', 'default', 'big' ]
			}
		},
		bgColor: {
			name: 'Цвет фона',
			type: { name: 'color', required: false },
			description: 'Цвет',
			table: {
				category: 'Внутреннее содержимое',
				type: { summary: null },
				defaultValue: { summary: null },
			},
			control: {
				type: 'color'
			}
		}
	}
};

const Template = (args, { argTypes }) => ({
	components: { Badge },
	props: Object.keys(argTypes),
	template: '<Badge v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
	type: 'secondary'
};

export const Danger = Template.bind({});
Danger.args = {
	type: 'danger'
};

export const Warning = Template.bind({});
Warning.args = {
	type: 'warning'
};

export const Small = Template.bind({});
Small.args = {
	size: 'small'
};

export const Big = Template.bind({});
Big.args = {
	size: 'big'
};
