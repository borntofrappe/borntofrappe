<script>
	import Serena from './Serena.svelte';
</script>

<div>
	<p>
		Luck is relative. Take this website for instance. If you have never stumbled on an error page,
		you might have never enjoyed the comforting presence of a shy, but helpful character. You don't
		have to look for trouble to find it, however.
	</p>

	<div style:max-width="24rem" style:margin-inline="auto" style:margin-block="2em">
		<Serena />
	</div>

	<p>
		What fortune then. You don't even have to wonder too much how to create a similar mascot, nor
		how to reveal its true colors.
	</p>
</div>

<style>
	div > * + * {
		margin-block-start: 1em;
	}
</style>
