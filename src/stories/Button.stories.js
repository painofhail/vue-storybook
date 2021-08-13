import WButton from '../components/UI-kit/WButton/WButton';

const iconNames = ['gear', 'close', 'filter'];

export default {
	component: WButton,
	title: 'Контролы/WButton',
	argTypes: {
		title: {
			name: 'Текст внутри кнопки',
			type: { name: 'string', required: false },
			description: 'Текст',
			table: {
				category: 'Внутреннее содержимое',
				type: { summary: null },
				defaultValue: { summary: 'Сохранить' },
			},
			control: { type: 'text' }
		},
		secondary: {
			name: 'Альтернативная кнопка',
			type: { name: 'boolean', required: false },
			description: '',
			table: {
				category: 'Внешний вид',
				type: { summary: 'Альтернативная' },
				defaultValue: { summary: 'false' },
			},
			control: { type: 'boolean' }
		},
		size: {
			name: 'Размер кнопки',
			type: { name: 'string', required: false },
			description: 'Размеры: ',
			table: {
				category: 'Внешний вид',
				type: { summary: 'small | medium | big' },
				defaultValue: { summary: 'medium' },
			},
			control: { type: 'select' },
			options: [ 'small', 'medium', 'big' ]
		},
		disabled: {
			name: 'Неактивная кнопка',
			type: { name: 'boolean', required: false },
			description: 'Неактивная:',
			table: {
				category: 'Состояние',
				type: { summary: 'true | false' },
				defaultValue: { summary: 'false' },
			},
			control: { type: 'boolean' }
		},
		prependIcon: {
			name: 'Иконка до текста',
			type: { name: 'string', required: false },
			description: 'Имя иконки, например: ',
			table: {
				category: 'Внутреннее содержимое',
				type: { summary: 'close, gear, ...' },
				defaultValue: { summary: null },
			},
			control: { type: 'select' },
			options: iconNames
		},
		appendIcon: {
			name: 'Иконка после текста',
			type: { name: 'string', required: false },
			description: 'Имя иконки, например: ',
			table: {
				category: 'Внутреннее содержимое',
				type: { summary: 'close, gear, ...' },
				defaultValue: { summary: null },
			},
			control: { type: 'select' },
			options: iconNames
		},
		iconColor: {
			name: 'Цвет иконки',
			type: { name: 'string', required: false },
			description: 'Цвет',
			table: {
				category: 'Внутреннее содержимое',
				type: { summary: null },
				defaultValue: { summary: null },
			},
			control: { type: 'color' }
		},
		onClick: {
			action: 'clicked'
		}
	},
	args: {
		title: 'Сохранить'
	},
};

const Template = (args, { argTypes }) => ({
	components: { WButton },
	props: Object.keys(argTypes),
	template: '<WButton @click="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = { };

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
	disabled: true
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
	size: 'small'
};

export const PrimarySmallDisabled = Template.bind({});
PrimarySmallDisabled.args = {
	disabled: true,
	size: 'small'
};

export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
	size: 'big'
};

export const PrimaryBigDisabled = Template.bind({});
PrimaryBigDisabled.args = {
	disabled: true,
	size: 'big'
};

export const Secondary = Template.bind({});
Secondary.args = {
	secondary: true
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
	disabled: true,
	secondary: true
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
	secondary: true,
	size: 'small'
};

export const SecondarySmallDisabled = Template.bind({});
SecondarySmallDisabled.args = {
	secondary: true,
	size: 'small',
	disabled: true
};

export const SecondaryBig = Template.bind({});
SecondaryBig.args = {
	secondary: true,
	size: 'big'
};

export const SecondaryBigDisabled = Template.bind({});
SecondaryBigDisabled.args = {
	secondary: true,
	size: 'big',
	disabled: true
};
