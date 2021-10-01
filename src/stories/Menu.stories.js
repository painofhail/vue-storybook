import WMenu from '../components/UI-kit/WMenu/WMenu';

export default {
	component: WMenu,
	title: 'Элементы/WMenu',
	argTypes: {},
	args: {}
};

const Template = (args, { argTypes }) => ({
	components: { WMenu },
	props: Object.keys(argTypes),
	template: '<WMenu v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {};
