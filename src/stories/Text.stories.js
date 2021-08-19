import Wtext from '../components/UI-kit/WText/WText';

export default {
	component: Wtext,
	title: 'Элементы/WText',
	argTypes: {
		title: {
			name: 'Текст',
			type: { name: 'string', required: false },
			description: 'Текст',
			table: {
				category: 'Внешний вид',
				type: { summary: null },
				defaultValue: { summary: 'Текст' },
			},
			control: { type: 'text' }
		},
		type: {
			name: 'Тип текста',
			type: { name: 'string', required: false },
			description: 'Типы: ',
			table: {
				category: 'Внешний вид',
				type: { summary: 'primary | secondary | warning' },
				defaultValue: { summary: 'primary' },
			},
			control: { type: 'select' },
			options: [ 'primary', 'secondary', 'warning' ]
		},
		size: {
			name: 'Размер текста',
			type: { name: 'string', required: false },
			description: 'Размеры: ',
			table: {
				category: 'Внешний вид',
				type: { summary: 'very-small | small | medium | big' },
				defaultValue: { summary: 'medium' },
			},
			control: { type: 'select' },
			options: [ 'very-small', 'small', 'medium', 'big' ]
		},
		weight: {
			name: 'Толщина текста',
			type: { name: 'string', required: false },
			description: 'Стили: ',
			table: {
				category: 'Внешний вид',
				type: { summary: 'normal | semi-bold | bold' },
				defaultValue: { summary: 'normal' },
			},
			control: { type: 'select' },
			options: [ 'normal', 'semi-bold', 'bold' ]
		},
		color: {
			name: 'Цвет текста',
			type: { name: 'string', required: false },
			description: 'Цвет',
			table: {
				category: 'Внешний вид',
				type: { summary: null },
				defaultValue: { summary: null },
			},
			control: { type: 'color' }
		}
	},
	args: {
		title: 'Текст',
	}
};

const Template = (args, { argTypes }) => ({
	components: { Wtext },
	props: Object.keys(argTypes),
	template: '<Wtext v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryVerySmall = Template.bind({});
PrimaryVerySmall.args = {
	size: 'very-small'
};

export const PrimaryVerySmallSemiBold = Template.bind({});
PrimaryVerySmallSemiBold.args = {
	size: 'very-small',
	weight: 'semi-bold'
};

export const PrimaryVerySmallBold = Template.bind({});
PrimaryVerySmallBold.args = {
	size: 'very-small',
	weight: 'bold'
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
	size: 'small'
};

export const PrimarySmallSemiBold = Template.bind({});
PrimarySmallSemiBold.args = {
	size: 'small',
	weight: 'semi-bold'
};

export const PrimarySmallBold = Template.bind({});
PrimarySmallBold.args = {
	size: 'small',
	weight: 'bold'
};

export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
	size: 'big'
};

export const PrimaryBigSemiBold = Template.bind({});
PrimaryBigSemiBold.args = {
	size: 'big',
	weight: 'semi-bold'
};

export const PrimaryBigBold = Template.bind({});
PrimaryBigBold.args = {
	size: 'big',
	weight: 'bold'
};

export const Secondary = Template.bind({});
Secondary.args = {
	type: 'secondary'
};

export const SecondaryVerySmall = Template.bind({});
SecondaryVerySmall.args = {
	type: 'secondary',
	size: 'very-small'
};

export const SecondaryVerySmallSemiBold = Template.bind({});
SecondaryVerySmallSemiBold.args = {
	type: 'secondary',
	size: 'very-small',
	weight: 'semi-bold'
};

export const SecondaryVerySmallBold = Template.bind({});
SecondaryVerySmallBold.args = {
	type: 'secondary',
	size: 'very-small',
	weight: 'bold'
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
	type: 'secondary',
	size: 'small'
};

export const SecondarySmallSemiBold = Template.bind({});
SecondarySmallSemiBold.args = {
	type: 'secondary',
	size: 'small',
	weight: 'semi-bold'
};

export const SecondarySmallBold = Template.bind({});
SecondarySmallBold.args = {
	type: 'secondary',
	size: 'small',
	weight: 'bold'
};

export const SecondaryBig = Template.bind({});
SecondaryBig.args = {
	type: 'secondary',
	size: 'big'
};

export const SecondaryBigSemiBold = Template.bind({});
SecondaryBigSemiBold.args = {
	type: 'secondary',
	size: 'big',
	weight: 'semi-bold'
};

export const SecondaryBigBold = Template.bind({});
SecondaryBigBold.args = {
	type: 'secondary',
	size: 'big',
	weight: 'bold'
};

export const Warning = Template.bind({});
Warning.args = {
	type: 'warning'
};

export const WarningVerySmall = Template.bind({});
WarningVerySmall.args = {
	type: 'warning',
	size: 'very-small'
};

export const WarningVerySmallSemiBold = Template.bind({});
WarningVerySmallSemiBold.args = {
	type: 'warning',
	size: 'very-small',
	weight: 'semi-bold'
};

export const WarningVerySmallBold = Template.bind({});
WarningVerySmallBold.args = {
	type: 'warning',
	size: 'very-small',
	weight: 'bold'
};

export const WarningSmall = Template.bind({});
WarningSmall.args = {
	type: 'warning',
	size: 'small'
};

export const WarningSmallSemiBold = Template.bind({});
WarningSmallSemiBold.args = {
	type: 'warning',
	size: 'small',
	weight: 'semi-bold'
};

export const WarningSmallBold = Template.bind({});
WarningSmallBold.args = {
	type: 'warning',
	size: 'small',
	weight: 'bold'
};

export const WarningBig = Template.bind({});
WarningBig.args = {
	type: 'warning',
	size: 'big'
};

export const WarningBigSemiBold = Template.bind({});
WarningBigSemiBold.args = {
	type: 'warning',
	size: 'big',
	weight: 'semi-bold'
};

export const WarningBigBold = Template.bind({});
WarningBigBold.args = {
	type: 'warning',
	size: 'big',
	weight: 'bold'
};
