<template>
	<button :class="classes" :disabled="disabled" @click="click">
		<!-- <SvgIcon v-if="prependIcon" :name="prependIcon" :fill="fill" class="mr_8" /> -->

		<span>{{ title }}</span>

		<!-- <SvgIcon v-if="appendIcon" :name="appendIcon" :fill="fill" class="ml_8" /> -->
	</button>
</template>

<script>
	export default {
		name: 'WButton',
		props: {
			title: {									// Текст кнопки
				type: String,
				required: false,
				default: 'Сохранить',
				validator: value => typeof(value) === "string"
			},
			secondary: {							// Не основная кнопка (по умолчанию - основная)
				type: Boolean,
				required: false,
				default: false,
				validator: value => typeof(value) === "boolean"
			},
			size: {										// Размеры кнопки
				type: String,
				required: false,
				default: 'medium',
				validator: value => ['small', 'medium', 'big'].includes(value)
			},
			disabled: {								// Заблокированная кнопка
				type: Boolean,
				required: false,
				default: false,
				validator: value => typeof(value) === "boolean"

			},
			prependIcon: {						// Иконка до текста кнопки
				type: String,
				required: false,
				default: null,
				validator: value => typeof(value) === "string"
			},
			appendIcon: {							// Иконка после текста кнопки
				type: String,
				required: false,
				default: null,
				validator: value => typeof(value) === "string"
			},
			iconFill: {								// Цвет иконок
				type: String,
				required: false,
				default: null,
				validator: value => typeof(value) === "string"
			}
		},
		computed: {
			classes () {
				return {
					'w-button': true,
					'w-button--type-primary': !this.$props.secondary,
					'w-button--type-secondary': this.$props.secondary,
					[`w-button--size-${this.$props.size}`]: true
				}
			},
			fill () {
				return this.$props.disabled ? null : this.$props.iconFill;
			}
		},
		methods: {
			click () {
				this.$emit('click');
			}
		}
	}
</script>
