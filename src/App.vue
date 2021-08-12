<template>
	<div id="app">
		<h1>Hello, World!</h1>
		<Button label="Hello" :primary="true" />
	</div>
</template>

<script>

	export default {
		name: 'App'
	}

</script>

<style lang="scss">
	@import 'styles/style.scss';

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

</style>
