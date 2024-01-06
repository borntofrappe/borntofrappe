<script>
	import { scale } from 'svelte/transition';
	import { cubicInOut as easing } from 'svelte/easing';

	const duration = 500;

	const svg = [
		{
			label: 'base pastry',
			html: `<g fill="hsl(31 100% 35%)">
          <path d="M -55 2.66 L -55 7.32 C -55 18.531 -30.937 27.25 0 27.25 L 0 22.59 C -30.937 22.59 -55 13.871 -55 2.66 Z" />
          <path d="M 55 2.66 L 55 7.32 C 55 18.531 30.938 27.25 0 27.25 L 0 22.59 C 30.938 22.59 55 13.871 55 2.66 Z"/>
          <path stroke="hsl(31 100% 35%)" stroke-width="10" d="M -49.24 -0.486 C -44.357 -10.522 -19.015 -16.952 8.682 -15.182 C 36.38 -13.413 54.124 -4.23 49.24 5.806 C 44.357 15.843 19.015 22.273 -8.682 20.503 C -36.38 18.733 -54.124 9.551 -49.24 -0.486" />
      </g>`
		},
		{
			label: 'almond fill',
			html: `<path fill="hsl(35 100% 47%)" stroke="hsl(35 100% 47%)" stroke-width="10" d="M 6.599 -13.23 C 20.649 -13.745 20.649 -13.745 27.329 -9.234 C 39.54 -6.659 39.54 -6.659 37.63 -1.585 C 43.332 3.099 43.332 3.099 33.552 6.794 C 30.559 11.798 30.559 11.798 16.653 12.705 C 6.118 16.116 6.118 16.116 -6.599 13.891 C -20.649 14.406 -20.649 14.406 -27.33 9.898 C -39.54 7.319 -39.54 7.319 -37.63 2.246 C -43.332 -2.439 -43.332 -2.439 -37.525 2.031 C -43.332 -2.439 -43.332 -2.439 -33.657 -5.919 C -30.559 -11.138 -30.559 -11.138 -16.653 -12.045 C -6.118 -15.456 -6.118 -15.456 6.599 -13.23 Z" />`
		},
		{
			label: 'small trinket',
			html: `<path fill="hsl(47 100% 62%)" stroke="hsl(47 100% 62%)" stroke-width="3" d="M 10.833 -1.308 C 11.87 0.922 11.87 0.922 5.754 0.469 C 0.218 1.517 0.218 1.517 -0.475 -0.732 C -4.924 -2.315 -4.924 -2.315 0.751 -3.251 C 3.524 -5.278 3.524 -5.278 7.737 -3.607 C 13.912 -3.275 13.912 -3.275 10.833 -1.308 Z" />`
		},
		{
			label: 'cover pastry',
			html: `<path fill="hsl(31 100% 37%)" stroke="hsl(31 100% 37%)" stroke-width="10" d="M -49.24 -7.476 C -44.357 -17.513 -19.015 -23.942 8.682 -22.173 C 36.38 -20.403 54.124 -11.22 49.24 -1.184 C 44.357 8.853 19.015 15.282 -8.682 13.513 C -36.38 11.743 -54.124 2.56 -49.24 -7.476" />`
		},
		{
			label: 'gourmet stripes',
			html: `<g fill="none" stroke="hsl(35 100% 47%)" stroke-width="0.5">
          <path d="M 21.966 -23.735 L -4.535 -25.428" />
          <path d="M 51.793 -5.021 L 47.12 -14.623" />
          <path d="M 33.415 -21.094 L -17.786 -24.365" />
          <path d="M 48.859 -0.219 L 39.831 -18.772" />
          <path d="M 42.585 -17.465 L -29.828 -22.092" />
          <path d="M 42.585 4.145 L 29.816 -22.095" />
          <path d="M 48.861 -13.105 L -39.841 -18.772" />
          <path d="M 33.424 7.773 L 17.784 -24.369" />
          <path d="M 51.793 -8.3 L -47.131 -14.62" />
          <path d="M 21.966 10.415 L 4.523 -25.431" />
          <path d="M 51.21 -3.388 L -51.21 -9.932" />
          <path d="M 9.03 11.896 L -9.03 -25.217" />
          <path d="M 47.12 1.303 L -51.804 -5.018" />
          <path d="M -4.535 12.108 L -21.978 -23.738" />
          <path d="M 39.831 5.451 L -48.871 -0.216" />
          <path d="M -17.786 11.045 L -33.426 -21.097" />
          <path d="M 29.816 8.774 L -42.596 4.148" />
          <path d="M -29.828 8.771 L -42.596 -17.468" />
          <path d="M 17.784 11.048 L -33.436 7.776" />
          <path d="M -39.841 5.452 L -48.872 -13.108" />
          <path d="M 4.523 12.111 L -21.978 10.418" />
          <path d="M -47.131 1.3 L -51.804 -8.303" />
          <path d="M -9.03 11.896 L -9.04 11.896" />
          <path d="M -51.21 -3.388 L -51.212 -3.392" />
      </g>`
		}
	];

	let index = 0;
</script>

<article>
	<h2 lang="fr">Galette de rois</h2>

	<p>Build the cake in layers.</p>

	<div>
		<button
			disabled={index === 0}
			on:click={() => {
				index = Math.max(0, index - 1);
			}}
			aria-label="Previous layer"
		>
			<svg width="1em" height="1em" viewBox="-1 -1 2 2">
				<path
					transform="scale(-1 1)"
					fill="currentColor"
					stroke="currentColor"
					stroke-width="0.2"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M -0.5 -0.9 0.9 0 -0.5 0.9 Z"
				/>
			</svg>
		</button>
		<span>{svg[index].label}</span>
		<button
			disabled={index === svg.length - 1}
			on:click={() => {
				index = Math.min(svg.length - 1, index + 1);
			}}
			aria-label="Next layer"
		>
			<svg width="1em" height="1em" viewBox="-1 -1 2 2">
				<path
					fill="currentColor"
					stroke="currentColor"
					stroke-width="0.2"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M -0.5 -0.9 0.9 0 -0.5 0.9 Z"
				/>
			</svg>
		</button>
	</div>

	<svg style="display: block;" viewBox="-60 -30 120 60">
		<g stroke-linecap="round" stroke-linejoin="round">
			{#each svg.slice(0, index + 1) as { html }}
				<g transition:scale={{ duration, easing, opacity: 1 }}>
					{@html html}
				</g>
			{/each}
		</g>
	</svg>
</article>

<style>
	article {
		max-inline-size: 40ch;
		margin-inline: auto;
	}

	article > * + * {
		margin-block-start: 0.5rem;
	}

	article > svg {
		display: block;
		max-inline-size: 20rem;
		margin-inline: auto;
	}

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	@supports (display: grid) {
		div {
			justify-content: initial;
			align-items: initial;
			display: grid;
			grid-auto-flow: column;
			grid-template-columns: auto 1fr auto;
		}

		div > span {
			justify-self: center;
			text-transform: uppercase;
		}
	}

	div > span {
		text-transform: capitalize;
		font-style: italic;
	}

	button {
		color: hsl(50 100% 93%);
		background: hsl(31 100% 35%);
		inline-size: 2.25rem;
		block-size: 2.25rem;
		padding: 0.6rem;
		border-radius: 1e5px;
		border: none;
		transition-property: opacity, scale;
		transition-duration: 0.25s;
		transition-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
	}

	button:disabled {
		scale: 0.95;
		opacity: 0.7;
	}

	button:not(:disabled):active {
		scale: 0.95;
	}

	button:focus {
		outline: 2px solid hsl(31 100% 35%);
		outline-offset: 4px;
	}

	button:focus:not(:focus-visible) {
		outline: none;
	}

	button > svg {
		display: block;
		inline-size: 100%;
		block-size: 100%;
	}
</style>
