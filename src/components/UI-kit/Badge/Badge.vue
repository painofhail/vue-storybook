<template>
	<span :class="classes" :style="style">{{ title }}</span>
</template>

<script>

	export default {
		name: 'Badge',
		props: {
		// Текст тэга
			title: {
				type: String,
				required: false,
				default: ''
			},
			// Тип тэга
			type: {
				type: String,
				required: false,
				default: 'primary'	// primary | secondary | danger | warning
			},
			// Размер тэга
			size: {
				type: String,
				required: false,
				default: 'default'	// small | default | big
			},
			// Цвет тэга
				bgColor: {
				type: String,
				required: false,
				default: null
			}
		},
		computed: {
			classes() {
				return {
					'w-badge': true,
					[`w-badge_${this.$props.size}`]: true,
					[`w-badge_${this.$props.type}`]: true
				}
			},
			style() {
				return {
					backgroundColor: this.bgColor,
				};
			},
		}
	}

</script>
