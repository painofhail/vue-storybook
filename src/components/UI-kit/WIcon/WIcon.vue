<template>
	<svg :class="classes"	:style="styles">
		<use v-bind="{ 'href': 'dist/images/svg/sprite.svg#' + $props.name }" />
	</svg>
</template>

<script>
	export default {
		name: 'WIcon',
		props: {
			name: {								// Имя иконки
				type: String,
				required: true,
				validator: value => typeof(value) === "string"
			},
			width: {							// Ширина иконки (если не указывать, то = высоте)
				type: Number,
				required: false,
				default: null,
				validator: value => typeof(value) === "number"
			},
			height: {							// Высота иконки (если не указывать, то = ширине)
				type: Number,
				required: false,
				default: null,
				validator: value => typeof(value) === "number"
			},
			fill: {								// Цвет (заполнение) иконки
				type: String,
				required: false,
				default: null,
				validator: value => typeof(value) === "string"
			},
			stroke: {							// Цвет обводки иконки
				type: String,
				required: false,
				default: null,
				validator: value => typeof(value) === "string"
			},
			strokeWidth: {				// Толщина обводки иконки
				type: Number,
				required: false,
				default: null,
				validator: value => typeof(value) === "number"
			},
		},
		computed: {
			classes () {
				return {
					'w-icon': true
				}
			},
			styles () {
				return {
					'width': !!this.$props.width ? this.$props.width : this.$props.height,
					'height': !!this.$props.height ? this.$props.height : this.$props.width,
					'fill': this.$props.fill,
					'stroke': this.$props.stroke,
					'strokeWidth': this.$props.strokeWidth
				}
			}
		}
	}
</script>
