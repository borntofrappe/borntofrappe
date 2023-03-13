<script>
	import Branch from './Branch.svelte';
</script>

<svg viewBox="0 0 70 55">
	<title>Spring has sprung</title>
	<defs>
		<marker
			id="marker-branch"
			viewBox="-25.44444465637207 -26 49.88888931274414 48.133331298828125"
			markerWidth="3"
			markerHeight="3"
			markerUnits="userSpaceOnUse"
			orient="auto"
		>
			<path
				fill="#eb919b"
				d="M 0 20 Q -21 28 -20 6 Q -34 -11 -12 -17 Q -1 -35 11 -17 Q 33 -11 19 6 Q 20 28 0 20"
			/>
			<circle fill="#fdfafb" r="8" />
		</marker>
	</defs>
	<g transform="translate(35 54)">
		<g fill="none" stroke="#8a6f68" stroke-linecap="square">
			<Branch animationDuration={1} />
		</g>
	</g>
</svg>

<style>
	svg {
		display: block;
	}

	svg :global(path.line) {
		stroke-dasharray: 1;
		animation: line 1s linear both;
	}

	svg :global(path.marker) {
		animation: show 0.7s cubic-bezier(0.33, 1, 0.68, 1) both;
	}

	@keyframes line {
		from {
			stroke-dashoffset: 1;
		}
		to {
			stroke-dashoffset: 0;
		}
	}

	@keyframes show {
		from {
			transform: rotate(0turn) scale(0);
		}
		to {
			transform: rotate(0.2turn) scale(1);
		}
	}
</style>
