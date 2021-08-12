// import "../src/styles/app.scss";

// Global parameters
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
	backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
			{ name: 'blue', value: '#00f' },
    ],
  },
	jsx: {
		showDefaultProps: false
	}
}

// Global decorators
export const decorators = [(story) => ({
  components: { story },
  template: '<div style="margin: 1em;"><story /></div>'
})];
