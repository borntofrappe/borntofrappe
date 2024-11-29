<script>
	import { onMount } from 'svelte';
	export let childrenText = ['first', 'second'];

	let widget = null;

	onMount(() => {
		const handleSwap = () => {
			const [first, second] = [...widget.querySelectorAll('ul li')];
			if (document.startViewTransition) {
				[first, second].forEach((item) => {
					const { innerText } = item;
					item.style.setProperty(
						'view-transition-name',
						innerText.replace(/[^\w]/gi, '').toLowerCase()
					);
				});
				document.startViewTransition(() => {
					second.parentNode.insertBefore(second, first);
				});
			} else {
				second.parentNode.insertBefore(second, first);
			}
		};

		const button = widget.querySelector('button');
		button.removeAttribute('disabled');

		button.addEventListener('click', handleSwap);

		return () => {
			button.removeEventListener('click', handleSwap);
		};
	});
</script>

<div bind:this={widget}>
	<ul>
		{#each childrenText as childText}
			<li>{childText}</li>
		{/each}
	</ul>
	<button disabled>
		<svg width="1em" height="1em" viewBox="-1.5 -1.5 3 3">
			<path
				fill="none"
				stroke="currentColor"
				stroke-width="0.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M -1.25 -1.25 -0.6 -0.6 M 0.6 0.6 1.25 1.25 0.4 1.25 1.25 1.25 1.25 0.4 M -1.25 1.25 1.25 -1.25 0.4 -1.25 1.25 -1.25 1.25 -0.4"
			/>
		</svg>
		<span>Shuffle words</span>
	</button>
</div>

<style>
	ul {
		font-family: monospace;
		font-weight: 700;
		padding: 0;
	}

	ul li {
		display: inline-block;
	}

	ul li:not(:first-child)::before {
		content: ' ';
		white-space: pre;
	}

	button {
		cursor: pointer;
        font-size: 0.9em;
		font-family: inherit;
		font-weight: 700;
		color: currentColor;
		background: none;
		border: 0.1rem solid currentColor;
		padding: 0.25rem 0.5rem;
		border-radius: 0.5rem;
        transition: scale 0.1s ease-out;
	}

	button:disabled {
		display: none;
	}

    button:active {
        scale: 0.975;
		transition-timing-function: ease-in;
    }

	button:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 2px;
	}

	button > svg {
		margin-inline-end: 0.1rem;
		vertical-align: middle;
	}
</style>
