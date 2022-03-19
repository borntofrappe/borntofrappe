<script>
	import alphabet from '$lib/alphabet';

	export let title = 'Hello World';
	const { length } = title;

	const characters = [
		...new Set(
			Array(length)
				.fill()
				.map((_, i) => alphabet[Math.floor(Math.random() * alphabet.length)])
		)
	];
</script>

<h1>
	{title}
	<svg viewBox="-50 -50 {length * 100} 100">
		<g fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="square">
			{#each characters as character, i}
				<g transform="translate({length * 100 - 100 - 100 * i} 0)">
					<g transform="scale(0.9)">
						{@html character}
					</g>
				</g>
			{/each}
		</g>
	</svg>
</h1>

<style>
	h1 {
		text-transform: uppercase;
		font-size: 3rem;
		display: inline-block;
		padding: 0 2rem;
		filter: drop-shadow(0.15rem 0.25rem hsla(0, 0%, 0%, 0.1));
		position: relative;
	}

	h1::before {
		content: '';
		position: absolute;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 50%;
		background: url('data:image/svg+xml,%3Csvg opacity="0.05" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 20"%3E%3Cdefs%3E%3Cpattern id="c0" width="5" height="5" viewBox="-5 -5 10 10" patternUnits="userSpaceOnUse"%3E%3Ccircle r="4.5" /%3E%3C/pattern%3E%3Cpattern id="c1" width="5" height="5" viewBox="-5 -5 10 10" patternUnits="userSpaceOnUse"%3E%3Ccircle r="4" /%3E%3C/pattern%3E%3Cpattern id="c2" width="5" height="5" viewBox="-5 -5 10 10" patternUnits="userSpaceOnUse"%3E%3Ccircle r="3.5" /%3E%3C/pattern%3E%3Cpattern id="c3" width="5" height="5" viewBox="-5 -5 10 10" patternUnits="userSpaceOnUse"%3E%3Ccircle r="2.75" /%3E%3C/pattern%3E%3Cpattern id="c4" width="5" height="5" viewBox="-5 -5 10 10" patternUnits="userSpaceOnUse"%3E%3Ccircle r="1.75" /%3E%3C/pattern%3E%3Crect id="r" width="5" height="25" /%3E%3C/defs%3E%3Crect x="70" width="10" height="20" /%3E%3Cg transform="translate(72.5 0) scale(-1 1)"%3E%3Cg transform="translate(0 -2.5)"%3E%3Cuse href="%23r" fill="url(%23c0)" /%3E%3C/g%3E%3Cg transform="translate(5 0)"%3E%3Cuse href="%23r" fill="url(%23c0)" /%3E%3C/g%3E%3Cg transform="translate(10 -2.5)"%3E%3Cuse href="%23r" fill="url(%23c1)" /%3E%3C/g%3E%3Cg transform="translate(15 0)"%3E%3Cuse href="%23r" fill="url(%23c1)" /%3E%3C/g%3E%3Cg transform="translate(20 -2.5)"%3E%3Cuse href="%23r" fill="url(%23c2)" /%3E%3C/g%3E%3Cg transform="translate(25 0)"%3E%3Cuse href="%23r" fill="url(%23c3)" /%3E%3C/g%3E%3Cg transform="translate(30 -2.5)"%3E%3Cuse href="%23r" fill="url(%23c4)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E'),
			hsl(330, 79%, 56%);
		background-size: 100%;
		z-index: -5;
		clip-path: polygon(0% 0%, 100% 0%, 95% 90%, 10% 90%);
		clip-path: var(--clip, polygon(0% 0%, 100% 0%, 95% 90%, 10% 90%));
	}

	h1 > svg {
		display: block;
		width: 100%;
		height: auto;
	}

	h1::before,
	h1 > svg {
		transform: rotate(-3deg);
	}
</style>
