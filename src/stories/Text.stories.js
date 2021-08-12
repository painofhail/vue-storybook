import Wtext from '../components/UI-kit/WText/WText';

export default {
	component: Wtext,
	title: 'Элементы/WText',
	argTypes: {
		title: {
			name: 'Текст',
			type: { name: 'string', required: false },
			description: 'Текст',
			defaultValue: 'Текст',
			table: {
				category: 'Внешний вид',
				type: { summary: null },
				defaultValue: { summary: 'Текст' },
			},
			control: {
				type: 'text'
			}
		},
		type: {
			name: 'Тип',
			type: { name: 'string', required: false },
			description: 'Типы: ',
			table: {
				category: 'Внешний вид',
				type: { summary: 'default | secondary | danger' },
				defaultValue: { summary: 'default' },
			},
			control: {
				type: 'select',
				options: [ 'default', 'secondary', 'danger' ]
			}
		},
		size: {
			name: 'Размер',
			type: { name: 'string', required: false },
			description: 'Размеры: ',
			table: {
				category: 'Внешний вид',
				type: { summary: 'very-small | small | default' },
				defaultValue: { summary: 'default' },
			},
			control: {
				type: 'select',
				options: [ 'very-small', 'small', 'default' ]
			}
		},
		weight: {
			name: 'Стиль',
			type: { name: 'string', required: false },
			description: 'Стили: ',
			table: {
				category: 'Внешний вид',
				type: { summary: 'normal | semi-bold | bold' },
				defaultValue: { summary: 'default' },
			},
			control: {
				type: 'select',
				options: [ 'normal', 'semi-bold', 'bold' ]
			}
		},
		color: {
			name: 'Цвет текста',
			type: { name: 'color', required: false },
			description: 'Цвет',
			table: {
				category: 'Внешний вид',
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
	components: { Wtext },
	props: Object.keys(argTypes),
	template: '<Wtext v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};

