<script>
	import Tangram from './tangram/Tangram.svelte';
</script>

<footer
	class="box stack"
	style:--color="hsl(210, 16%, 82%)"
	style:--background="hsl(210, 24%, 16%)"
	style:--selection-color="hsl(210, 16%, 82%)"
	style:--selection-background="hsl(209, 34%, 30%)"
	style:--padding="var(--step-space-400) var(--step-space-300)"
>
	<figure class="center stack" style:--leading="0">
		<figcaption class="flow" style:--space="0.5em">
			<p>Crafted with considerably more than seven pieces, but always with care.</p>
			<p><cite>Gabriele Corti</cite>, 2023</p>
		</figcaption>

		<div style:max-inline-size="8rem" style:margin-inline="auto">
			<Tangram shape="heart" padding={1} />
		</div>
	</figure>
</footer>
