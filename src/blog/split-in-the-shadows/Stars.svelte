<script>
	import { onMount } from 'svelte';

	let wrapper = null;
	onMount(() => {
		const [first, second] = wrapper.children;
		const shadowRoot = second.attachShadow({ mode: 'open' });
		const { innerHTML } = first;
		shadowRoot.innerHTML = innerHTML;
	});
</script>

<figure bind:this={wrapper}>
	<div>
		<svg
			style="display: block;"
			viewBox="-20.915218353271484 -21.927501678466797 41.8204345703125 39.911720275878906"
		>
			<defs>
				<path
					id="star"
					fill="currentColor"
					d="M 0 12 C -15.29 21.03 -15.29 21.03 -11.42 3.7 C -24.73 -8.04 -24.73 -8.04 -7.06 -9.71 C -0.01 -26 -0.01 -26 7.05 -9.71 C 24.72 -8.04 24.72 -8.04 11.41 3.7 C 15.28 21.03 15.28 21.03 0 12"
				/>
			</defs>
			<use href="#star" />
		</svg>
	</div>
	<div>
		<svg
			style="display: block;"
			viewBox="-20.915218353271484 -21.927501678466797 41.8204345703125 39.911720275878906"
		>
			<use href="#star" />
		</svg>
	</div>
</figure>

<style>
	figure {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	figure > * {
		color: hsl(47 100% 62%);
		background: hsl(49 100% 87%);
		position: relative;
		padding: var(--slant, 25%);
	}

	figure > div:nth-child(2) {
		filter: invert();
	}

	figure > div:nth-child(2)::before,
	figure > div:nth-child(2)::after {
		content: '';
		position: absolute;
		inset-inline-start: 0%;
		translate: -50% 0%;
		inset-block-start: 0;
		inline-size: var(--slant, 25%);
		block-size: 100%;
		background: inherit;
		clip-path: polygon(100% 0%, 100% 100%, 0% 100%);
	}

	figure > div:nth-child(2)::after {
		filter: invert();
		clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
	}
</style>
