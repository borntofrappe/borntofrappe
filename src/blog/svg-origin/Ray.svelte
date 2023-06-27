<script>
	import { observe } from './utils.js';
	let animate = false;
</script>

<svg
	use:observe={{
		onObserve: () => {
			animate = true;
		},
		onUnobserve: () => {
			animate = false;
		}
	}}
	class:animate
	viewBox="-20 -37.5 40 42.5"
>
	<title>Ray</title>
	<g stroke-linecap="round" stroke-linejoin="round">
		<g class="rotate" transform="rotate(40)">
			<path d="M 0 0 v -15" fill="none" stroke="#fd2005" stroke-width="1.75" />
			<path d="M -0.5 0 v -15" fill="none" stroke="#fe5208" stroke-width="0.75" />
			<g transform="translate(0 -15) scale(-1 1)">
				<g class="rotate" transform="rotate(40)">
					<g class="rotate" transform="rotate(40)">
						<g transform="scale(-1 1)">
							<path d="M 0 0 v -15" fill="none" stroke="#fd2005" stroke-width="1.75" />
							<path d="M -0.5 0 v -15" fill="none" stroke="#fe5208" stroke-width="0.75" />
							<g transform="translate(0 -15)">
								<g class="rotate" transform="rotate(40)">
									<path
										d="M -1 -2 l 3 0 c 1 1 1 3 0 4 l -3 0z"
										fill="#fd2005"
										stroke="#fd2005"
										stroke-width="1.75"
									/>
									<path
										d="M -1 2.37 h 3.13 c 0.75 -0.4 0.75 -1.2 0.85 -1.4 h -3.13 c -0.25 0.4 -0.25 1.2 -0.85 1.4"
										fill="#e40b02"
										stroke="#e40b02"
										stroke-width="1"
									/>
									<path
										d="M -5.5 -5 c -2 2 -2 8 0 10 2 -2 2 -8 0 -10"
										fill="#fd2005"
										stroke="#fd2005"
										stroke-width="1.75"
									/>
									<path
										d="M -5.5 -5 c -2 2 -2 8 0 10 2 -2 2 -8 0 -10"
										fill="#b8b7bc"
										stroke="#b8b7bc"
										stroke-width="0.5"
									/>
									<ellipse cx="-5" rx="1.5" ry="2.5" fill="#fcfefd" />
									<path
										d="M 0 0 q -1 -4 -2 -5 l -3.5 0 c 2.5 2 2.5 8 0 10 l 3.5 0 q 1 -1 2 -5"
										fill="#fd2005"
										stroke="#fd2005"
										stroke-width="1.75"
									/>
									<path
										d="M -5.5 5.3 h 3.5 c 0.8 -0.2 1 -1.4 1 -1.2 h -3.5 c -0.2 0.4 -1 1.4 -1 1.2"
										fill="#e40b02"
										stroke="#e40b02"
										stroke-width="1"
									/>
								</g>
							</g>
						</g>
					</g>
				</g>
				<circle r="2.2" fill="#e40b02" />
				<circle r="1.2" fill="#c90104" />
			</g>
		</g>

		<g transform="translate(0 3)">
			<path
				d="M -7 0 l 14 0 0 -1 -3.5 -2  -7 0 -3.5 2 0 1"
				fill="#fd2005"
				stroke="#fd2005"
				stroke-width="2"
			/>
			<path d="M -7 0.5 l 8 0" fill="none" stroke="#e40b02" stroke-width="1" />
		</g>
	</g>
</svg>

<style>
	svg {
		display: block;
	}

	.rotate {
		transform: rotate(40deg);
		animation: rotate 3s cubic-bezier(0.37, 0, 0.63, 1) infinite paused;
	}

	svg.animate .rotate {
		animation-play-state: running;
	}

	@keyframes rotate {
		0%,
		100% {
			transform: rotate(40deg);
		}
		50% {
			transform: rotate(-35deg);
		}
	}
</style>
