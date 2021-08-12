<template>
	<span :class="classes" :style="style">{{ title }}</span>
</template>

<script>

	export default {
		name: 'WText',
		props: {
			// Текст
			title: {
				type: String,
				required: false,
				default: ''
			},
			// Тип текста
			type: {
				type: String,
				required: false,
				default: 'default'	// default | secondary | warning
			},
			// Размер
			size: {
				type: String,
				required: false,
				default: 'default'	// very-small | small | default
			},
			weight: {
				type: String,
				required: false,
				default: 'normal'	// normal | semi-bold | bold
			},
			// Цвет
			color: {
				type: String,
				required: false,
				default: null
			}
		},
		computed: {
			classes() {
				return {
					'w-text': true,
					[`w-text_${this.$props.type}`]: true,
					[`w-text_${this.$props.size}`]: true,
					[`w-text_${this.$props.weight}`]: true
				}
			},
			style() {
				return {
					color: this.color,
				};
			},
		}
	}
</script>
