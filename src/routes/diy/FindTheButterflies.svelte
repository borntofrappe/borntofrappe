<script>
	import Title from './Title.svelte';
</script>

<svg viewBox="0 0 80 50">
	<g style:cursor="pointer">
		<set begin="click" attributeName="display" to="none" fill="freeze" />

		<Title fill="url(#linear-gradient-text)">Butterflies?</Title>

		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
