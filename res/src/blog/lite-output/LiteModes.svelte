<script>
	import { onMount } from 'svelte';
	import modes from './modes.js';

	const keys = Object.keys(modes);
	const defaultKey = 'list';

	let widget = null;

	onMount(() => {
		const buttonPrevious = widget.querySelector('button:nth-of-type(1)');
		const buttonNext = widget.querySelector('button:nth-of-type(2)');
		const output = widget.querySelector('output');
		const pre = widget.querySelector('pre');

		let index = keys.findIndex((d) => d === defaultKey);
		let state = 'wait';

		const update = () => {
			const { matches: prefersReducedMotion } = window.matchMedia(
				'(prefers-reduced-motion: reduce)'
			);

			if (!prefersReducedMotion && document.startViewTransition) {
				output.textContent = keys[index];

				const transition = document.startViewTransition(() => {
					pre.textContent = modes[keys[index]];
				});
				transition.finished.then(() => {
					state = 'wait';
				});
			} else {
				output.textContent = keys[index];
				pre.textContent = modes[keys[index]];
				state = 'wait';
			}
		};

		const handlePrevious = () => {
			if (state !== 'wait') return;
			state = 'update';

			index = index === 0 ? keys.length - 1 : index - 1;
			pre.style.setProperty('view-transition-name', 'slide-previous');
			update();
		};

		const handleNext = () => {
			if (state !== 'wait') return;
			state = 'update';

			index = (index + 1) % keys.length;
			pre.style.setProperty('view-transition-name', 'slide-next');
			update();
		};

		buttonPrevious.removeAttribute('disabled');
		buttonNext.removeAttribute('disabled');

		buttonPrevious.addEventListener('click', handlePrevious);
		buttonNext.addEventListener('click', handleNext);

		return () => {
			buttonPrevious.removeEventListener('click', handlePrevious);
			buttonNext.removeEventListener('click', handleNext);
		};
	});
</script>

<figure bind:this={widget}>
	<div>
		<button disabled>
			<span class="visually-hidden">Previous mode</span>
			<svg width="1em" height="1em" viewBox="-2.2 -2.2 4.4 4.4">
				<g fill="none" stroke="currentColor">
					<rect stroke-width="0.4" x="-2" y="-2" width="4" height="4" rx="0.5" />
					<path
						stroke-width="0.4"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M -0.5 -0.75 0.25 0 -0.5 0.75"
					/>
				</g>
			</svg>
		</button>
		<code>
			.mode
			<output>{defaultKey}</output>
		</code>
		<button disabled>
			<span class="visually-hidden">Next mode</span>
			<svg width="1em" height="1em" viewBox="-2.2 -2.2 4.4 4.4">
				<g fill="none" stroke="currentColor">
					<rect stroke-width="0.4" x="-2" y="-2" width="4" height="4" rx="0.5" />
					<path
						stroke-width="0.4"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M -0.5 -0.75 0.25 0 -0.5 0.75"
					/>
				</g>
			</svg>
		</button>
	</div>
	<pre>{modes[defaultKey]}</pre>
</figure>

<style>
	figure {
		margin-inline: 0;
	}

	div {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	code {
		font-family: monospace;
		font-weight: 700;
		font-size: inherit;
		background: none;
	}

	button:disabled {
		display: none;
	}

	button {
		color: inherit;
		margin: 0;
		padding: 0;
		inline-size: 1.5em;
		block-size: 1.5em;
		background: none;
		border: none;
	}

	button svg {
		inline-size: 100%;
		block-size: 100%;
	}

	button:nth-of-type(1) svg {
		scale: -1 1;
	}

	button svg path {
		transition: translate 0.2s ease-in-out;
	}

	button:is(:hover, :focus) svg path {
		translate: 0.25px 0;
	}

	button:is(:active) svg path {
		translate: 0.5px 0;
	}

	button:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 2px;
	}

	pre {
		overflow-x: auto;
	}

	:global(::view-transition-old(slide-next)) {
		animation: slide-out-left 0.5s ease-in-out;
	}

	:global(::view-transition-new(slide-next)) {
		animation: slide-in-right 0.5s ease-in-out;
	}

	:global(::view-transition-old(slide-previous)) {
		animation: slide-in-right 0.5s reverse ease-in-out;
	}

	:global(::view-transition-new(slide-previous)) {
		animation: slide-out-left 0.5s reverse ease-in-out;
	}

	@keyframes slide-out-left {
		from {
			translate: 0 0;
			opacity: 1;
		}

		to {
			translate: -100% 0;
			opacity: 0;
		}
	}

	@keyframes slide-in-right {
		from {
			translate: 100% 0;
			opacity: 0;
		}

		to {
			translate: 0 0;
			opacity: 1;
		}
	}
</style>
