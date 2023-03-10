<script>
	export let animations = ['flicker', 'float', 'stir'];
	export let transition = true;

	const id = `scene-${animations.join('-')}${transition ? '' : '-overflow'}`;

	let light = false;
</script>

<label>
	<input type="checkbox" bind:checked={light} />
	<span>Toggle animation</span>
</label>

<svg class:light viewBox="-40 -25 80 70">
	<defs>
		<g id="{id}-flame">
			<g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path
					fill="#f04545"
					stroke="#f04545"
					d="M 0 0 c -3.5 0 -4.5 -4.5 0 -6.5 4.5 1.5 3.5 6.5 0 6.5"
				/>
				<path
					transform="scale(0.5)"
					fill="#e8da38"
					stroke="#e8da38"
					d="M 0 0 c -3.5 0 -4.5 -4.5 0 -6.5 4.5 1.5 3.5 6.5 0 6.5"
				/>
			</g>
		</g>
		<g id="{id}-bubble">
			<circle r="4" fill="#f6c159" />
			<circle r="1.5" cx="1" cy="-1" fill="#f1daae" />
		</g>
	</defs>
	<g transform="translate(10 -16)">
		<g
			class:float={animations.includes('float')}
			style={animations.includes('float')
				? 'transform: translate(0, 26px); animation-delay: 3s;'
				: ''}
		>
			<use href="#{id}-bubble" />
		</g>
	</g>
	<g transform="translate(-3 -10)">
		<g
			class:float={animations.includes('float')}
			style={animations.includes('float')
				? 'transform: translate(0, 20px); animation-delay: 1s;'
				: ''}
		>
			<use transform="scale(0.8)" href="#{id}-bubble" />
		</g>
	</g>
	<g transform="translate(-12 -20)">
		<g
			class:float={animations.includes('float')}
			style={animations.includes('float') ? 'transform: translate(0, 30px);' : ''}
		>
			<use transform="scale(0.6)" href="#{id}-bubble" />
		</g>
	</g>
	<g transform="translate(2 -20)">
		<g
			class:float={animations.includes('float')}
			style={animations.includes('float')
				? 'transform: translate(0, 35px); animation-delay: 5s;'
				: ''}
		>
			<use transform="scale(0.7)" href="#{id}-bubble" />
		</g>
	</g>

	<g transform="translate(0 22)">
		<g class:stir={animations.includes('stir')} transform="rotate(-30)">
			<path d="M 0 0 v -30" fill="none" stroke="#e18434" stroke-width="5" stroke-linecap="round" />
		</g>
	</g>

	<g fill="#2e2e2c">
		<rect x="-20" width="40" height="8" rx="4" />
		<path d="M -16 4 a 22 22 0 1 0 32 0" />
	</g>
	<g fill="none" stroke="#2e2e2c" stroke-width="6" stroke-linecap="round">
		<path d="M -5 20 l -10 20" />
		<path d="M 5 20 l 10 20" />
	</g>
	<g>
		<g fill="none" stroke="#edb927" stroke-linecap="round">
			<path d="M -4 0 h 16" stroke-width="5" />
			<g stroke-width="4">
				<path class:overflow={transition} d="M 0 0 v 7" />
				<path class:overflow={transition} d="M 5 0 v 10" />
				<path class:overflow={transition} d="M 10 0 v 6" />
			</g>
		</g>
	</g>
	<g transform="translate(0 42)">
		<g transform="translate(8 0) rotate(28) scale(0.8)">
			<use class:flicker={animations.includes('flicker')} href="#{id}-flame" />
		</g>
		<g transform="translate(-8 0) rotate(-28) scale(0.8)">
			<use class:flicker={animations.includes('flicker')} href="#{id}-flame" />
		</g>
		<g transform="translate(4 0) rotate(16) scale(0.9)">
			<use class:flicker={animations.includes('flicker')} href="#{id}-flame" />
		</g>
		<g transform="translate(-4 0) rotate(-16) scale(0.9)">
			<use class:flicker={animations.includes('flicker')} href="#{id}-flame" />
		</g>
		<use class:flicker={animations.includes('flicker')} href="#{id}-flame" />
	</g>
</svg>

<style>
	svg {
		display: block;
	}

	.flicker {
		transform: scale(0.7);
		animation: flicker infinite 6s cubic-bezier(0.45, 0, 0.55, 1) paused;
	}

	.float {
		animation: float infinite 6s cubic-bezier(0.45, 0, 0.55, 1) paused;
	}

	.stir {
		transform: rotate(-32deg);
		animation: stir infinite 6s cubic-bezier(0.65, 0, 0.35, 1) paused;
	}

	.light .flicker,
	.light .float,
	.light .stir {
		animation-play-state: running;
	}

	.overflow {
		transition: transform 0.8s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	}

	.light .overflow {
		transition-delay: 0.5s;
		transform: scaleY(1.2);
	}

	@keyframes flicker {
		50% {
			transform: scale(1);
		}
	}

	@keyframes float {
		to {
			transform: translateY(0px);
		}
	}

	@keyframes stir {
		50% {
			transform: rotate(32deg);
		}
	}
</style>
