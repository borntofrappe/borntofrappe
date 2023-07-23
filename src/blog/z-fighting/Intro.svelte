<script>
	import svg from './svg.js';
</script>

<section>
	<div>
		{@html svg['microwave']}
	</div>

	<p>Something happens when you brave higher dimensions with the Zdog library.</p>

	<p>
		Beyond the x and y axes, you are able to position shapes at a certain depth, on the additional z
		axis. With this function, however, you risk to stumble on a few issues. These are <a
			href="https://zzz.dog/extras#z-fighting">well documented</a
		>, so you can try and solve your problems in a few ways. Or, you can lean on the quirks and
		entertain the possibilities.
	</p>
</section>

<style>
	div {
		max-inline-size: 20rem;
	}

	section > p + p {
		margin-block-start: 1rem;
	}

	section > div {
		float: left;
		inline-size: 100%;
		margin: 0 1rem 0.5rem 0;
	}

	@media screen and (max-width: 32rem) {
		section > div {
			margin: initial;
		}

		section {
			display: flex;
			flex-direction: column;
		}

		section > div {
			margin-block-end: 1rem;
			align-self: center;
			inline-size: 100%;
		}
	}
</style>
