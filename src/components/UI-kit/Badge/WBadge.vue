<template>
	<span :class="classes" :style="style">{{ title }}</span>
</template>

<script>
	export default {
		name: 'Badge',
		props: {
			title: {								// Текст бейджа
				type: String,
				required: false,
				default: 'Бейдж',
				validator: value => typeof(value) === "string"
			},
			type: {									// Тип бейджа
				type: String,
				required: false,
				default: 'primary',
				validator: value => ['primary', 'secondary', 'danger', 'warning'].includes(value)
			},
			size: {									// Размер бейджа
				type: String,
				required: false,
				default: 'medium',
				validator: value => ['very-small', 'small', 'medium', 'big'].includes(value)
			},
				bgColor: {						// Цвет фона бейджа
				type: String,
				required: false,
				default: null,
				validator: value => typeof(value) === "string"
			}
		},
		computed: {
			classes () {
				return {
					'w-badge': true,
					[`w-badge--size-${this.$props.size}`]: true,
					[`w-badge--type-${this.$props.type}`]: true
				}
			},
			style () {
				return {
					backgroundColor: this.$props.bgColor,
				};
			},
		}
	}
</script>
