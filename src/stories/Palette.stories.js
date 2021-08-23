import Palette from '../components/UI-kit/Palette/Palette';

import colors from '../styles/global/colors/colors.scss';

export default {
	component: Palette,
	title: 'Палитра',
	argTypes: {
		palette: {
			name: 'Цветовая палитра',
			type: { name: 'array', required: false },
		}
	}
};

const Template = ( args ) => ({
	components: { Palette },
	props: args,
	template: '<Palette :palette="$props.palette" />'
});

export const PaletteMain = Template.bind({});
PaletteMain.args = {
	palette: Object.entries(colors).map((i, index) => {
		return {
			id: index,
			name: i[0],
			value: i[1]
		};
	})
};
