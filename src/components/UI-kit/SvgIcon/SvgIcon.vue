<template functional>
	<svg
		:class="['w-icon', 'svgicon', { 'w-icon__remSize': remSize }]"
		:title="props.title"
		:style="{
			fill: props.fill,
			stroke: props.stroke,
			strokeWidth: props.strokeWidth,
			width: props.width,
			height: props.height,
		}"
	>
		<use v-bind="{ 'xlink:href': '/st/js-bundles/board/dist/svg/symbol-defs.svg#' + props.name }" />
	</svg>
</template>

<script>
	import '@project/public/svg/symbol-defs.svg';

	export default {
		name: 'SvgIcon',
		functional: true,
		props: {
			name: {
				type: String,
				default: '-name-not-specified-',
			},
			title: {
				type: String,
			},
			remSize: {
				type: Boolean,
				default: false,
			},
			width: {
				type: String,
			},
			height: {
				type: String,
			},
			fill: {
				type: String,
			},
			stroke: {
				type: String,
			},
			strokeWidth: {
				type: String,
			},
		},
	};
</script>
