<template>
	<div class="w-palette">
		<div
			class="w-palette__item"
			v-for="color in colors"
			:style="{'background-color': color.value}"
			:key="color.id">
			<span class="w-palette__value">{{ color.value }}</span>
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
		},
		computed: {
			colors () {
				console.log(this.$props.palette);
				return this.$props.palette;
			}
		}
	}
</script>
