<script>
	import alphabet from '$lib/alphabet';

	export let title = 'Hello World';
	const characters = Array(title.length)
		.fill()
		.map((_, i) => alphabet[Math.floor(Math.random() * alphabet.length)]);
</script>

<div>
	<h1>
		{title}
	</h1>

	<svg viewBox="{100 * characters.length * -1 + 50} -50 {100 * characters.length} 100">
		<g fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="square">
			<g transform="scale(0.9)">
				{#each [...new Set(characters)] as character, i}
					<g transform="translate({i * 100 * -1} 0)">
						{@html character}
					</g>
				{/each}
			</g>
		</g>
	</svg>
</div>

<style>
	div {
		position: relative;
		display: inline-block;
	}

	h1 {
		margin: 0;
		padding: 0 1rem;
		text-transform: uppercase;
		font-size: 2.5rem;
		font-size: calc(2.5rem + 2vw);
		letter-spacing: 0.1rem;
		text-shadow: 0.25rem 0.25rem hsla(0, 0%, 0%, 0.25);
	}

	div svg {
		position: absolute;
		width: 100%;
		top: 100%;
		display: block;
		transform: rotate(-2deg);
		filter: drop-shadow(0.25rem 0.25rem hsla(0, 0%, 0%, 0.25));
	}

	div::before,
	div::after {
		content: '';
		bottom: 0%;
		width: 100%;
		height: 50px;
		position: absolute;
		clip-path: polygon(0% 0%, 100% 0%, 95% 90%, 10% 90%);
		z-index: -5;
	}

	div::before {
		background: hsl(0, 0%, 0%, 0.25);
		transform: translateX(1%) translateY(60%) rotate(-2deg);
	}

	div::after {
		background: url('data:image/svg+xml,%3Csvg opacity="0.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 20"%3E%3Cdefs%3E%3Cpattern id="c0" width="5" height="5" viewBox="-5 -5 10 10" patternUnits="userSpaceOnUse"%3E%3Ccircle r="4.5" /%3E%3C/pattern%3E%3Cpattern id="c1" width="5" height="5" viewBox="-5 -5 10 10" patternUnits="userSpaceOnUse"%3E%3Ccircle r="4" /%3E%3C/pattern%3E%3Cpattern id="c2" width="5" height="5" viewBox="-5 -5 10 10" patternUnits="userSpaceOnUse"%3E%3Ccircle r="3.5" /%3E%3C/pattern%3E%3Cpattern id="c3" width="5" height="5" viewBox="-5 -5 10 10" patternUnits="userSpaceOnUse"%3E%3Ccircle r="2.75" /%3E%3C/pattern%3E%3Cpattern id="c4" width="5" height="5" viewBox="-5 -5 10 10" patternUnits="userSpaceOnUse"%3E%3Ccircle r="1.75" /%3E%3C/pattern%3E%3Crect id="r" width="5" height="25" /%3E%3C/defs%3E%3Cg transform="translate(40 0) scale(-1 1) translate(-40 0)"%3E%3Cg transform="translate(0 -2.5)"%3E%3Cuse href="%23r" fill="url(%23c0)" /%3E%3C/g%3E%3Cg transform="translate(5 0)"%3E%3Cuse href="%23r" fill="url(%23c0)" /%3E%3C/g%3E%3Cg transform="translate(10 -2.5)"%3E%3Cuse href="%23r" fill="url(%23c1)" /%3E%3C/g%3E%3Cg transform="translate(15 0)"%3E%3Cuse href="%23r" fill="url(%23c1)" /%3E%3C/g%3E%3Cg transform="translate(20 -2.5)"%3E%3Cuse href="%23r" fill="url(%23c2)" /%3E%3C/g%3E%3Cg transform="translate(25 0)"%3E%3Cuse href="%23r" fill="url(%23c3)" /%3E%3C/g%3E%3Cg transform="translate(30 -2.5)"%3E%3Cuse href="%23r" fill="url(%23c4)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E'),
			hsl(185, 57%, 50%);
		background-size: 100%;
		transform: translateY(50%) rotate(-2deg);
	}
</style>
