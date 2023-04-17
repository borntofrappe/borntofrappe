<script>
	import Tangram from './tangram/Tangram.svelte';
</script>

<footer
	class="[ box stack ]"
	style="
		--padding: var(--step-space-400) var(--step-space-300);
		--box-color: hsl(210, 16%, 82%); 
		--box-background: hsl(210, 24%, 16%); 
		--selection-color: hsl(210, 16%, 82%); 
		--selection-background: hsl(209, 34%, 30%);
	"
>
	<figure class="[ center stack ]" style="--leading: 0;">
		<figcaption class="[ flow ]" style="--space: 0.5em;">
			<p>Crafted with considerably more than seven pieces, but always with care.</p>
			<p><cite>Gabriele Corti</cite>, 2023</p>
		</figcaption>

		<div class="[ center ]" style="--measure: 8rem; --leading: 0;">
			<Tangram shape="heart" padding={1} />
		</div>
	</figure>
</footer>
