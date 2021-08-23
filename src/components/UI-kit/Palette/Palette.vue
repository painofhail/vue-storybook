<template>
	<div class="w-palette">
		<div class="w-palette__item" :style="{'background-color': color.value}"	v-for="color in palette" :key="color.id">
			<p class="w-palette__value">{{ color.name }}</p>
			<p class="w-palette__value">{{ color.value }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Palette',
		props: {
			palette: {
				type: Array,
				required: false,
				default: () => [],
				validator: () => true
			}
		}
	}
</script>
