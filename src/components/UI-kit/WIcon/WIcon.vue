<template>
	<svg :class="classes"	:style="styles">
		<use v-bind="{ 'href': 'dist/images/svg/sprite.svg#' + name }" />
	</svg>
</template>

<script>

	export default {
		name: 'WIcon',
		props: {
			name: {								// Имя иконки
				type: String,
				required: true,
				default: 'icon',
			},
			width: {							// Ширина иконки (если не указывать, то = высоте)
				type: Number
			},
			height: {							// Высота иконки (если не указывать, то = ширине)
				type: Number
			},
			fill: {								// Цвет (заполнение) иконки
				type: String
			},
			stroke: {							// Цвет обводки иконки
				type: String,
			},
			strokeWidth: {				// Толщина обводки иконки
				type: Number
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
					'width': this.$props.width ? this.$props.width : this.$props.height,
					'height': this.$props.height ? this.$props.height : this.$props.width,
					'fill': this.$props.fill,
					'stroke': this.$props.stroke,
					'strokeWidth': this.$props.strokeWidth
				}
			}
		}
	}
</script>
