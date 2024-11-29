<script>
	import { onMount } from 'svelte';

	let frame = null;
	let state = 'wait';

	let t = 0;
	const duration = 1000;

	const animate = (time) => {
		t = (time % duration) / duration;
		frame = requestAnimationFrame(animate);
	};

	const toggleTime = () => {
		if (state === 'wait') {
			frame = requestAnimationFrame(animate);
			state = 'run';
		} else {
			cancelAnimationFrame(frame);
			state = 'wait';
		}
	};

	onMount(() => {
		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<div>
	<svg display="none">
		<symbol id="toggle-start" viewBox="-6.5 -6.5 13 13">
			<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
				<circle fill="none" r="6" />
				<path fill="currentColor" d="M -1.25 -2.25 2.25 0 -1.25 2.25 Z" />
			</g>
		</symbol>

		<symbol id="toggle-pause" viewBox="-6.5 -6.5 13 13">
			<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
				<circle fill="none" r="6" />
				<path
					fill="currentColor"
					d="M -2 -2.25 -1 -2.25 -1 2.25 -2 2.25 Z M 1 -2.25 2 -2.25 2 2.25 1 2.25 Z"
				/>
			</g>
		</symbol>
	</svg>
	<button aria-label="Toggle timer" aria-pressed={state === 'run'} on:click={toggleTime}>
		<svg style="display: block;" viewBox="0 0 1 1">
			<use href={state === 'run' ? '#toggle-pause' : '#toggle-start'} />
		</svg>
	</button>
	<dl>
		<dt>
			<span>Progress</span>
		</dt>
		<dd>
			{t.toFixed(2)}
		</dd>
		<dt>
			<span>Duration</span>
		</dt>
		<dd>{duration}</dd>
	</dl>
</div>

<style>
	div {
		color: hsl(210 17% 95%);
		background: hsl(210 10% 23%);
		display: flex;
		inline-size: max-content;
		margin-inline: auto;
		gap: 2rem;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding: 1rem 1.5rem;
		border-radius: 1rem;
	}

	dl {
		color: hsl(210 17% 95%);
	}

	dt {
		color: hsl(210 16% 93%);
	}

	dl {
		margin: 0;
	}

	dt,
	dd {
		display: inline;
	}

	dd + dt::before {
		content: '\A';
		white-space: pre;
	}

	dt {
		font-size: 1rem;
	}

	dt::after {
		content: ':';
	}

	dd {
		font-size: 2.5rem;
		margin-inline-start: 0.5rem;
	}

	@supports (display: grid) {
		dl {
			display: grid;
			grid-template-columns: auto 1fr;
			align-items: baseline;
			gap: 0.5rem;
		}

		dt::after {
			content: initial;
		}

		dd {
			margin-inline-start: 0;
			text-align: end;
		}

		dd + dt::before {
			content: initial;
		}
	}

	button {
		color: hsl(210 17% 95%);
		background: none;
		padding: 0;
		border: none;
		border-radius: 1e5px;
		inline-size: 3rem;
		block-size: 3rem;
		transition: scale 0.2s cubic-bezier(0.37, 0, 0.63, 1);
	}

	button > svg {
		display: block;
		inline-size: 100%;
		block-size: 100%;
	}

	button:active {
		scale: 0.95;
	}
</style>
