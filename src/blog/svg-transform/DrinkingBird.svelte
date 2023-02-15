<script>
	let drink = false;
</script>

<div>
	<form on:submit|preventDefault>
		<label>
			<input type="checkbox" bind:checked={drink} />
			<span>{drink ? 'Pause' : 'Take a sip'}</span>
		</label>
	</form>

	<svg class:drink viewBox="0 0 100 100">
		<title>A precious toy waiting to be tipped to and fro</title>
		<defs>
			<path
				id="coaster"
				fill="none"
				stroke="#632b2a"
				stroke-width="2"
				stroke-linecap="round"
				d="M 0 16 h 16"
			/>
			<path
				id="glass"
				fill="none"
				stroke="#52343c"
				stroke-width="2"
				stroke-linecap="round"
				d="M 0 0 l 4 15 h 8 l 4 -15"
			/>
			<clipPath id="clip-glass">
				<use href="#glass" />
			</clipPath>
			<g>
				<path
					id="juice"
					fill="#fc7259"
					stroke="none"
					stroke-width="2"
					stroke-linecap="round"
					d="M -16 2 q 2 -1 4 0 t 4 0 4 0 4 0 4 0 4 0 4 0 4 0 4 0 4 0 4 0 4 0 v 20 h -40"
				/>
			</g>
		</defs>

		<g transform="translate(70 70)">
			<g clip-path="url(#clip-glass)">
				<use class="juice" href="#juice" />
			</g>
			<use href="#coaster" />
			<use href="#glass" />
		</g>

		<g>
			<g
				fill="none"
				stroke="#632b2a"
				stroke-width="4"
				stroke-linejoin="round"
				stroke-linecap="round"
			>
				<path d="M 50 50 v 35 h -10 h 20" />
			</g>
			<circle fill="#632b2a" cx="50" cy="50" r="4" />
		</g>

		<g transform="translate(50 50)">
			<g class="bird">
				<path fill="none" stroke="#db9756" stroke-width="4" d="M 0 -40 v 60" />
				<circle fill="#db9756" cy="20" r="11" />
				<ellipse fill="#f5e0c1" cy="16" rx="5" ry="4" />
				<g fill="#914c3c" stroke="#914c3c" stroke-width="2" stroke-linejoin="round">
					<g transform="translate(0 -35)">
						<circle r="10" />
						<path d="M 0 0 l 10 0 10 10 -20 0" />
					</g>
				</g>
			</g>
		</g>

		<circle fill="#632b2a" cx="50" cy="50" r="1" />
	</svg>
</div>

<style>
	div * {
		padding: 0;
		margin: 0;
	}

	div > * + * {
		margin-block-start: 0.75rem;
	}

	input {
		inline-size: 1em;
		block-size: 1em;
	}

	svg {
		display: block;
		--animation-duration: 3s;
	}

	.bird {
		animation: rotate 4s infinite alternate;
		animation-duration: var(--animation-duration);
		animation-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
		transform: rotate(25deg);
	}

	.juice {
		animation: translate 8s infinite;
		animation-duration: calc(var(--animation-duration) * 2);
		animation-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
	}

	.bird,
	.juice {
		animation-play-state: paused;
	}

	.drink .bird,
	.drink .juice {
		animation-play-state: running;
	}

	@keyframes rotate {
		to {
			transform: rotate(95deg);
		}
	}

	@keyframes translate {
		0%,
		44% {
			transform: translateX(0px);
		}
		62%,
		100% {
			transform: translateX(16px);
		}
	}
</style>
