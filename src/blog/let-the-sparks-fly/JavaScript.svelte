<script>
	import { onMount } from 'svelte';
	let widget = null;

	onMount(() => {
		const keyframes = [
			{
				transform: 'translate(0px, 0px)'
			},
			{
				transform: 'translate(-600px, 0px)'
			}
		];

		const options = {
			duration: 500,
			easing: 'steps(6)'
		};

		const button = widget.querySelector('button');
		const group = widget.querySelector('svg g');

		const handleClick = () => {
			group.animate(keyframes, options);
		};

		button.removeAttribute('disabled');
		button.addEventListener('click', handleClick);

		return () => {
			button.removeEventListener('click', handleClick);
		};
	});
</script>

<div bind:this={widget}>
	<svg style="display: block;" viewBox="0 0 100 100">
		<g>
			<path
				transform="translate(100 0)"
				fill="none"
				stroke="currentColor"
				stroke-width="5"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M 48 47 C 49 53 49 53 53 54 49 56 49 56 48 63 47 56 47 56 43 54 47 53 47 53 48 47"
			/>
			<path
				transform="translate(200 0)"
				fill="currentColor"
				stroke="currentColor"
				stroke-width="5"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M 48 34 C 51 51 51 51 63 53 50 56 50 56 49 71 46 56 46 56 34 54 45 50 45 50 48 34 M 38 43 Z M 60 60 Z M 56 65 Q 57 66 56 67 55 66 56 65"
			/>
			<path
				transform="translate(300 0)"
				fill="currentColor"
				stroke="currentColor"
				stroke-width="5"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M 46 26 C 51 48 51 48 70 51 51 55 51 55 47 78 43 55 43 55 25 51 42 47 42 47 46 26 M 61 67 Z M 34 40 Q 32 41 32 38 34 38 34 40"
			/>
			<path
				transform="translate(400 0)"
				fill="none"
				stroke="currentColor"
				stroke-width="5"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M 44 28 43 15 M 73 50 82 49 M 47 67 48 82 M 26 51 13 52 M 61 69 Z M 23 36 Z"
			/>
			<path
				transform="translate(500 0)"
				fill="none"
				stroke="currentColor"
				stroke-width="5"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M 43 17 42 13 M 83 48 88 47 M 50 82 51 87 M 12 53 6 54"
			/>
		</g>
	</svg>
	<button disabled>Spark</button>
</div>

<style>
	div {
		max-inline-size: 20rem;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		padding: 1rem;
	}

	button {
		font-family: inherit;
		font-size: 1rem;
		font-weight: 700;
		color: inherit;
		background: none;
		border: 0.1rem solid currentColor;
		display: flex;
		align-items: center;
		gap: 1ch;
		padding: 0.5rem;
		transition: scale 0.05s cubic-bezier(0.37, 0, 0.63, 1);
	}

	button:disabled {
		opacity: 0.7;
		scale: 0.95;
	}

	button:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 2px;
	}

	button::before,
	button::after {
		content: '';
		background: currentColor;
		mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-17.829999923706055 -17.829999923706055 35.654998779296875 35.654998779296875">\
          <path fill="hsl(0 0% 100%)" d="M 5.65 5.65 Q 0 30 -5.66 5.65 Q -30 0 -5.66 -5.66 Q -0.01 -30 5.65 -5.66 Q 30 -0.01 5.65 5.65" />\
      </svg>');
		mask-size: 100% 100%;
		inline-size: 1em;
		block-size: 1em;
		transform: scale(0);
	}

	button:not(:disabled):hover::before,
	button:not(:disabled):hover::after {
		animation: sparkle 3.5s cubic-bezier(0.37, 0, 0.63, 1) infinite;
	}

	button:hover::before {
		animation-delay: -0.1s;
		rotate: -2deg;
		scale: 0.95;
	}

	button:hover::after {
		rotate: 2deg;
	}

	button:not(:disabled):active {
		scale: 0.975;
	}

	@keyframes sparkle {
		0% {
			transform: scale(0);
			opacity: 1;
		}
		10% {
			transform: scale(1);
			opacity: 1;
		}
		15%,
		100% {
			transform: scale(1);
			opacity: 0;
		}
	}
</style>
