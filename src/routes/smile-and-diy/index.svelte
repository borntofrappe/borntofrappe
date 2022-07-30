<script>
	import Defs from './_helpers/Defs.svelte';
	import Text from './_helpers/Text.svelte';
	import AnimatedText from './_helpers/AnimatedText.svelte';
</script>

<Defs />
<svg viewBox="0 0 80 40">
	<g transform="translate(40 10)">
		<Text fill="url(#linear-gradient-text)">Smile</Text>
	</g>

	<g transform="translate(40 20)">
		<Text fill="url(#linear-gradient-text)">&</Text>
	</g>

	<g transform="translate(40 30)">
		<AnimatedText fill="url(#linear-gradient-text)" text="D.I.Y." />
	</g>
</svg>

<style>
	svg {
		max-width: 40rem;
	}
</style>
