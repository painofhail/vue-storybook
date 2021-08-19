<template>
	<span :class="classes" :style="styles">{{ title }}</span>
</template>

<script>
	export default {
		name: 'WText',
		props: {
			title: {							// Текст
				type: String,
				required: false,
				default: 'Текст',
				validator: value => typeof(value) === "string"
			},
			type: {								// Тип текста
				type: String,
				required: false,
				default: 'primary',
				validator: value => ['primary', 'secondary', 'warning'].includes(value)
			},
			size: {								// Размер текста
				type: String,
				required: false,
				default: 'medium',
				validator: value => ['very-small', 'small', 'medium', 'big'].includes(value)
			},
			weight: {							// Толщина текста
				type: String,
				required: false,
				default: 'normal',
				validator: value => ['normal', 'semi-bold', 'bold'].includes(value)
			},
			color: {							// Цвет текста
				type: String,
				required: false,
				default: null,
				validator: value => typeof(value) === "string"
			}
		},
		computed: {
			classes () {
				return {
					'w-text': true,
					[`w-text--type-${this.$props.type}`]: true,
					[`w-text--size-${this.$props.size}`]: true,
					[`w-text--weight-${this.$props.weight}`]: true
				}
			},
			styles () {
				return {
					color: this.$props.color,
				};
			},
		}
	}
</script>
