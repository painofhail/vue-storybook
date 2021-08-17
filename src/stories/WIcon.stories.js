import WIcon from '../components/UI-kit/WIcon/WIcon';

// получение имён иконок из спрайта
let iconNames = [];

const req = new XMLHttpRequest();
req.open('GET', '../../dist/images/svg/sprite.svg', true);

req.onreadystatechange = () => {
	const el = document.createElement('div');
	el.innerHTML = req.responseText;
	el.querySelectorAll('[id]').forEach((icon, i) => iconNames[i] = icon.id)
	el.remove();
}

req.send(null);

export default {
	component: WIcon,
	title: 'Изображения/WIcon',
	argTypes: {
		name: {
			name: 'Название иконки',
			type: { name: 'string', required: true },
			description: 'Имя',
			table: {
				category: 'Свойства',
				type: { summary: null },
				defaultValue: { summary: 'icon' },
			},
			control: { type: 'select' },
			options: iconNames
		},
		width: {},
		height: {},
	},
	args: {
		name: 'Task-Task',
		onClick () {
			console.log('Привет')
		}
	},
};

const Template = (args, { argTypes }) => ({
	components: { WIcon },
	props: Object.keys(argTypes),
	template: '<WIcon v-bind="$props" />',
});

export const Icon = Template.bind({});
Icon.args = {
	width: 24
};
