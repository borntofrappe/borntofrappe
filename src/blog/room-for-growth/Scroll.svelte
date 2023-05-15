<script>
	import { scale } from 'svelte/transition';
	import { quadOut as easing } from 'svelte/easing';

	let value = 0;
	$: length = Math.floor(value * 4);
</script>

<label>
	<span>Drag to scroll to your heart's content.</span>
	<input type="range" min="0" max="1" step="0.01" bind:value />
</label>

<svg viewBox="0 0 200 100">
	<rect width="200" height="100" fill="#f5f7fa" />
	<svg viewBox="-36 -52 22 69" x="10" y="28" width="22" height="69" style="color: #3e4c59">
		<g
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linejoin="round"
			stroke-linecap="round"
		>
			<g transform="translate(-25 0)">
				<path pathLength="1" stroke-dasharray="1" stroke-dashoffset={1 - value} d="M 0 0 v -42" />
				<g transform="translate(0 -6)">
					{#each { length } as _, i}
						<g transform="translate(0 {12 * i * -1})">
							<path
								transition:scale={{ opacity: 1, easing }}
								d="M 0 -2 c 0 -5 2 -7 9 -7 c 0 6 -1 9 -9 9 v -2 c 0 -5 -2 -7 -9 -7 c 0 6 1 9 9 9"
							/>
						</g>
					{/each}
				</g>
				<g transform="translate(-10 0)">
					<rect width="20" height="6" rx="2" />
					<path d="M 2 6 c 0.5 8 3 10 5 10 l 6 0 c 2 0 4.5 -2 5 -10" />
				</g>
			</g>
		</g>
	</svg>

	<g transform="translate(42 10)">
		<svg viewBox="0 0 148 87" width="148" height="87">
			<rect width="148" height="87" fill="#ffffff" />
			<g transform="translate(0 -{value * 150})">
				<g transform="translate(20 20)">
					<g transform="translate(0 5)">
						<rect width="30" height="30" fill="#dbe1e7" rx="2" />
						<g transform="translate(8 8)">
							<rect width="14" height="14" fill="#a5b3bb" rx="1" />
							<g fill="#ffffff">
								<circle cx="8.5" cy="4" r="1.25" />
								<path
									d="M 3 11 v -2 l 2.5 -2.5 3 2.5 1.25 -1.25 1.25 1.25 v 2z"
									stroke="#ffffff"
									stroke-width="1"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</g>
						</g>
						<g transform="translate(40 0)">
							<g fill="none" stroke-linecap="round" stroke-linejoin="round">
								<g stroke="#a5b3bb" stroke-width="2">
									<path d="M 1 1 h 60" />
									<path d="M 1 7 h 40" />
								</g>
								<g stroke="#d1d9e1">
									<path d="M 0.5 15 h 54" />
									<path d="M 0.5 20 h 50" />
									<path d="M 8.5 27 h 10" />
								</g>
							</g>
							<circle fill="#d1d9e1" cx="2" cy="27" r="2" />
						</g>
					</g>
					<g transform="translate(0 55)">
						<g fill="none" stroke-linecap="round" stroke-linejoin="round">
							<g stroke="#a5b3bb" stroke-width="2">
								<path d="M 1 1 h 20" />
							</g>
							<g stroke="#d1d9e1">
								<path d="M 0.5 8 h 80" />
								<path d="M 0.5 13 h 78" />
								<path d="M 0.5 18 h 82" />
								<path d="M 0.5 23 h 76" />
							</g>
						</g>
					</g>
					<g transform="translate(0 100)">
						<g transform="translate(4 4)">
							<g fill="#a5b3bb" stroke="#a5b3bb" stroke-linecap="round" stroke-linejoin="round">
								<path d="M 0.5 0 h 4 v 4 h -3 a 3 3 0 0 0 3 3 v 1 a 4 4 0 0 1 -4 -4 z" />
								<path d="M 7.5 0 h 4 v 4 h -3 a 3 3 0 0 0 3 3 v 1 a 4 4 0 0 1 -4 -4 z" />
							</g>
						</g>

						<g fill="none" stroke-linecap="round" stroke-linejoin="round">
							<g stroke="#a5b3bb" stroke-width="2">
								<path d="M 24 1 h 70" />
								<path d="M 24 8 h 72" />
								<path d="M 24 15 h 50" />
							</g>
							<g stroke="#d1d9e1">
								<path d="M 36.5 23 h 16" />
								<path d="M 37.5 27 h 8" />
							</g>
						</g>
						<circle cx="28" cy="25" r="4" fill="#d1d9e1" />
					</g>
					<g transform="translate(0 145)">
						<g fill="none" stroke-linecap="round" stroke-linejoin="round">
							<g stroke="#a5b3bb" stroke-width="2">
								<path d="M 1 1 h 16" />
							</g>
							<g stroke="#d1d9e1">
								<path d="M 0.5 8 h 72" />
								<path d="M 0.5 13 h 82" />
								<path d="M 0.5 18 h 78" />
								<path d="M 0.5 23 h 80" />
							</g>
						</g>
					</g>
					<g transform="translate(0 200)">
						<g fill="none" stroke-linecap="round" stroke-linejoin="round">
							<g stroke="#a5b3bb">
								<path d="M 0.5 0 h 107" />
							</g>
							<g stroke="#d1d9e1">
								<path d="M 0.5 8 h 30" />
								<path d="M 72.5 8 h 16" />
								<path d="M 92.5 8 h 16" />
							</g>
						</g>
					</g>
				</g>
			</g>

			<rect width={value * 148} height="1.25" fill="#3e4c59" />
		</svg>
	</g>
</svg>

<style>
	label {
		display: block;
	}

	label input {
		margin-block-start: 0.5rem;
		display: block;
		inline-size: 100%;
	}

	svg {
		display: block;
	}
</style>
