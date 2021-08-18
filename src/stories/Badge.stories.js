import WBadge from '../components/UI-kit/Badge/WBadge';

export default {
	component: WBadge,
	title: 'Элементы/WBadge',
	argTypes: {
		title: {
			name: 'Текст внутри бейджа',
			type: { name: 'string', required: false },
			description: 'Текст',
			table: {
				category: 'Внутреннее содержимое',
				type: { summary: null },
				defaultValue: { summary: 'Бейдж' },
			},
			control: { type: 'text' }
		},
		type: {
			name: 'Тип бейджа',
			type: { name: 'string', required: false },
			description: 'Типы: ',
			table: {
				category: 'Внешний вид',
				type: { summary: 'primary | secondary | danger | warning' },
				defaultValue: { summary: 'primary' },
			},
			control: {
				type: 'select'
			},
			options: [ 'primary', 'secondary', 'danger', 'warning' ]
		},
		size: {
			name: 'Размер бейджа',
			type: { name: 'string', required: false },
			description: 'Размеры: ',
			table: {
				category: 'Внешний вид',
				type: { summary: 'very-small | small | medium | big' },
				defaultValue: { summary: 'medium' },
			},
			control: {
				type: 'select'
			},
			options: [ 'very-small', 'small', 'medium', 'big' ]
		},
		bgColor: {
			name: 'Цвет фона',
			type: { name: 'string', required: false },
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
	},
	args: {
		title: 'Бейдж',
	}
};

const Template = (args, { argTypes }) => ({
	components: { WBadge },
	props: Object.keys(argTypes),
	template: '<WBadge v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryVerySmall = Template.bind({});
PrimaryVerySmall.args = {
	size: 'very-small'
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
	size: 'small'
};

export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
	size: 'big'
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

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
	type: 'secondary',
	size: 'small'
};

export const SecondaryBig = Template.bind({});
SecondaryBig.args = {
	type: 'secondary',
	size: 'big'
};

export const Danger = Template.bind({});
Danger.args = {
	type: 'danger'
};

export const DangerVerySmall = Template.bind({});
DangerVerySmall.args = {
	type: 'danger',
	size: 'very-small'
};

export const DangerSmall = Template.bind({});
DangerSmall.args = {
	type: 'danger',
	size: 'small'
};

export const DangerBig = Template.bind({});
DangerBig.args = {
	type: 'danger',
	size: 'big'
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

export const WarningSmall = Template.bind({});
WarningSmall.args = {
	type: 'warning',
	size: 'small'
};

export const WarningBig = Template.bind({});
WarningBig.args = {
	type: 'warning',
	size: 'big'
};
