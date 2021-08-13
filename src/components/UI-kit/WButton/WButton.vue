<template>
	<button :class="classes" :disabled="disabled" @click="click">
		<!-- <SvgIcon v-if="prependIcon" :name="prependIcon" :fill="iColor" class="mr_8" /> -->

		<span>{{ title }}</span>

		<!-- <SvgIcon v-if="appendIcon" :name="appendIcon" :fill="iColor" class="ml_8" /> -->
	</button>
</template>

<script>

	export default {
		name: 'WButton',
		props: {
			title: {									// Текст кнопки
				type: String,
				default: 'Сохранить'
			},
			secondary: {							// Не основная кнопка (по умолчанию - основная)
				type: Boolean,
				default: false,
			},
			size: {										// Размеры кнопки
				type: String,
				default: 'medium'				// small | medium | big
			},
			disabled: {								// Заблокированная кнопка
				type: Boolean,
				default: false
			},
			prependIcon: {						// Иконка до текста кнопки
				type: String,
				default: null
			},
			appendIcon: {							// Иконка после текста кнопки
				type: String,
				default: null
			},
			iconColor: {							// Цвет иконок
				type: String,
				default: null
			}
		},
		computed: {
			classes () {
				return {
					'w-button': true,
					'w-button--primary': !this.$props.secondary,
					'w-button--secondary': this.$props.secondary,
					[`w-button--${this.$props.size}`]: true,
					'w-button--disabled' : this.$props.disabled
				}
			},
			iColor () {
				return this.$props.disabled ? null : this.$props.iconColor;
			}
		},
		methods: {
			click () {
				this.$emit('click');
			}
		}
	}
</script>
