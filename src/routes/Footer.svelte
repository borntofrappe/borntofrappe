<script>
	import Tangram from './tangram/Tangram.svelte';
</script>

<footer
	class="box stack"
	style:--color="hsl(216, 33%, 97%)"
	style:--background="hsl(210, 24%, 16%)"
	style:--selection-color="hsl(216, 33%, 97%)"
	style:--selection-background="hsl(212, 34%, 30%)"
	style:--padding="var(--step-space-300)"
>
	<blockquote class="center flow text-align:center" style:--space="0.5em">
		<p>Designed with care, and considerably more than seven pieces.</p>
		<p><cite>Gabriele Corti</cite></p>
	</blockquote>

	<div class="center" style:--measure="8rem" style:--leading="0">
		<Tangram shape="heart" padding={1} />
	</div>
</footer>
