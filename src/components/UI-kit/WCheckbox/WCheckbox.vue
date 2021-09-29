<template>
	<label class="w-checkbox">
		<input
			type="checkbox"
			class="w-checkbox__input"
			:class="classes"
			:checked="$props.checked"
			:disabled="$props.disabled"
		>
		<span class="w-checkbox__box"></span>
		{{ title }}
	</label>
</template>

<script>
	export default {
		name: 'WCheckbox',
		props: {
			title: {
				type: String,
				required: false,
				default: 'Чекбокс',
				validator: value => typeof(value) === "string"
			},
			checked: {
				type: Boolean,
				required: false,
				default: false,
				validator: value => typeof(value) === "boolean"
			},
			disabled: {
				type: Boolean,
				required: false,
				default: false,
				validator: value => typeof(value) === "boolean"
			},
		},
		computed: {
			classes () {
				return {
					'w-checkbox__some-class': true
				}
			},
		}
	}
</script>
