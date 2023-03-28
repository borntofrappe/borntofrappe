<script>
	import Title from './Title.svelte';
</script>

<svg viewBox="0 0 80 50">
	<defs>
		<pattern id="find-the-butterflies-pattern-bricks" width="0.1" height="0.1">
			<rect fill="#bd4900" width="8" height="5" />
			<g fill="none" stroke="currentColor" stroke-width="0.2">
				<path d="M 7.9 0 v 2.45 h -7.9" />
				<path d="M 3.95 2.45 v 2.5" />
				<path d="M 0 4.9 h 8" />
			</g>
		</pattern>
	</defs>

	<rect fill="url(#find-the-butterflies-pattern-bricks)" width="80" height="50" />

	<g style:cursor="pointer">
		<set begin="click" attributeName="display" to="none" fill="freeze" />

		<Title fill="url(#linear-gradient-text)">Butterflies?</Title>

		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
