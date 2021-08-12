<template>
	<button :class="classes" :disabled="disabled" @click="click">
	<SvgIcon v-if="prependIcon" :name="prependIcon" :fill="iColor" class="mr_8" />

	<span>{{ title }}</span>

	<SvgIcon v-if="appendIcon" :name="appendIcon" :fill="iColor" class="ml_8" />
	</button>
</template>

<script>
	// import SvgIcon from '@comps/utility/icon/SvgIcon.vue';

	export default {
		name: 'Button',
		// components: {
		// 	SvgIcon
		// },
		props: {
		// Текст кнопки
			title: {
				type: String,
				required: false,
				default: 'Сохранить'
			},
			// Не основная кнопка (по умолчанию - основная)
			secondary: {
				type: Boolean,
				required: false,
				default: false,
			},
			// Размеры кнопки
			size: {
				type: String,
				required: false,
				default: 'medium'	// small | default | big
			},
			// Заблокированная кнопка
			disabled: {
				type: Boolean,
				required: false,
				default: false
			},
			// Иконка до текста кнопки
			prependIcon: {
				type: String,
				required: false,
				default: null
			},
			// Иконка после текста кнопки
			appendIcon: {
				type: String,
				required: false,
				default: null
			},
			// Цвет иконки
				iconColor: {
				type: String,
				required: false,
				default: null
			}
		},
		computed: {
			classes() {
				return {
					'wf-button': true,
					'wf-button--primary': !this.$props.secondary,
					'wf-button--secondary': this.$props.secondary,
					[`wf-button--${this.$props.size}`]: true,
					'disabled' : this.$props.disabled
				}
			},
			iColor() {
				return this.$props.disabled ? 'currentColor' : this.$props.iconColor;
			}
		},
		methods: {
			click () {
				this.$emit('click');
			}
		}
	}
</script>
