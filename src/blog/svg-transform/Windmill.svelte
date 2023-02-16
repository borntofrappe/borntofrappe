<script>
	let wind = false;
</script>

<div>
	<form on:submit|preventDefault>
		<label>
			<input type="checkbox" bind:checked={wind} />
			<span>{wind ? 'Pause' : 'Let the wind blow'}</span>
		</label>
	</form>

	<svg class:wind viewBox="-50 -45 100 100">
		<title>A charming windmill waiting for a gentle breeze</title>
		<defs>
			<g id="windmill-sail">
				<path fill="#db9756" stroke="#db9756" d="M 0 6 V 38 h -15 V 6z" />
				<path fill="none" stroke="#632b2a" d="M 0 0 v 38" />
			</g>
		</defs>
		<g>
			<g stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
				<rect fill="#f5e0c1" stroke="#f5e0c1" x="-24" width="48" height="48" />
				<path fill="#914c3c" stroke="#914c3c" d="M -24 0v-3 l 24 -26 24 26v3Z" />
				<path
					opacity="0.2"
					fill="#000000"
					stroke="#000000"
					d="M 0 -29 l 24 26 v 3 48 h -6 v -48 l -18 -16.6z"
				/>
			</g>
			<path fill="#52343c" d="M -7 50 v -12 a 7 7 0 0 1 14 0 v 12 " />
		</g>

		<g class="sails">
			<g transform="rotate(-45)">
				<g stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
					<use href="#windmill-sail" />
					<use transform="rotate(90)" href="#windmill-sail" />
					<use transform="rotate(180)" href="#windmill-sail" />
					<use transform="rotate(270)" href="#windmill-sail" />
				</g>
				<circle fill="#4d2317" stroke="#e3a171" stroke-width="3" paint-order="stroke" r="2" />
			</g>
		</g>
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
	}

	.sails {
		animation: 10s rotate linear infinite paused;
	}

	.wind .sails {
		animation-play-state: running;
	}

	@keyframes rotate {
		to {
			transform: rotate(1turn);
		}
	}
</style>
