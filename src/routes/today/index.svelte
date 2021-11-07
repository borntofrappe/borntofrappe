<script>
	import { tweened } from 'svelte/motion';
	import { quintIn as easeIn, quintOut as easeOut } from 'svelte/easing';

	const date = new Date();
	const day = date.getDate();
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	const month = date.getMonth();
	const year = date.getFullYear();

	const duration = (500 * Math.floor(day / 10 + 1)) / day;
	const counter = tweened(0, { duration });

	let today = false;
	async function animate() {
		let easing;
		if ($counter === 0) easing = easeIn;
		else if ($counter === day - 1) easing = easeOut;

		await counter.update((n) => n + 1, {
			easing,
			duration: $counter === 0 || $counter === day - 1 ? duration * 5 : duration
		});

		if ($counter < day) animate();
		else today = true;
	}
</script>

<main>
	<h1>
		Day
		<div>
			<strong>{day}</strong>
			<span aria-hidden="true" style="transform: translate3d(0, {($counter % 1) * 100}%, 0)"
				>{Math.floor($counter)}</span
			>
			<span aria-hidden="true" style="transform: translate3d(0, {($counter % 1) * 100}%, 0)"
				>{Math.floor($counter + 1)}</span
			>
		</div>
	</h1>

	<svg
		class:today
		xmlns="http://www.w3.org/2000/svg"
		viewBox="-252.5 -27.5 505 230"
		width="505"
		height="230"
	>
		<defs>
			<path
				id="a"
				d="M -25 -25 a 12.5 12.5 0 0 0 25 0 25 25 0 0 0 -50 0 c 0 37.5 50 37.5 50 75 v -75 a 12.5 12.5 0 0 1 -25 0"
			/>
			<g id="aa">
				<use href="#a" />
				<use href="#a" transform="scale(-1 1)" />
			</g>
			<path id="b" d="M 0 50 c 0 15 -15 30 -30 30 c 15 0 30 37.5 30 70z" />
			<g id="bb">
				<use href="#b" />
				<use href="#b" transform="scale(-1 1)" />
			</g>

			<path id="c" d="M 0 0 v -10 c -5 10 -5 10 -150 10z" />
			<g id="cc">
				<use href="#c" />
				<use href="#c" transform="scale(-1 1)" />
			</g>
			<g id="ccc">
				<use href="#cc" />
				<use href="#cc" transform="scale(1 -1)" />
			</g>
			<path
				id="d"
				d="M -150 0 a 25 25 0 0 0 -25 -25 11.25 11.25 0 0 1 0 22.5 7.5 7.5 0 0 1 -7.5 -7.5 c 0 10 -30 10 -67.5 10 37.5 0 67.5 0 67.5 10 a 7.5 7.5 0 0 1 7.5 -7.5 11.25 11.25 0 0 1 0 22.5 25 25 0 0 0 25 -25z"
			/>
		</defs>
		<g
			fill="currentColor"
			stroke="currentColor"
			stroke-width="5"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<g
				on:animationend|once={() => {
					animate();
				}}
			>
				<use href="#ccc" />
				<use class="offset-x" href="#d" />
				<g transform="scale(-1 1)">
					<use class="offset-x" href="#d" />
				</g>
			</g>

			<g transform="translate(0 140)">
				<g class="offset-y" transform="translate(0 0)">
					<g transform="scale(0.4)">
						<g class="rotate-y">
							<use href="#aa" />
							<use href="#bb" />
						</g>
					</g>
				</g>
			</g>
		</g>

		<g transform="translate(0 67.5)">
			<g
				fill="currentColor"
				font-family="inherit"
				text-anchor="middle"
				dominant-baseline="middle"
				font-size="30"
				letter-spacing="2"
			>
				<g class="show" opacity="1">
					<text><tspan>{months[month]}</tspan> <tspan>{year}</tspan></text>
				</g>
			</g>
		</g>
	</svg>
</main>

<style>
	main {
		min-height: 100vh;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' opacity='0.5' viewBox='-400 -400 800 800'%3E%3Cg fill='hsl(338, 100%25, 86%25)'%3E%3Cpath id='star' d='M 4.898587196589413e-15 80 Q -117.5570504584946 161.80339887498948 -76.08452130361228 24.7213595499958 -190.21130325903073 -61.803398874989455 -47.02282018339786 -64.72135954999578 -3.6739403974420595e-14 -200 47.02282018339783 -64.72135954999581 190.2113032590307 -61.803398874989526 76.08452130361229 24.721359549995775 117.55705045849467 161.80339887498945 4.898587196589413e-15 80'%3E%3C/path%3E%3Cuse href='%23star' x='400' y='400'%3E%3C/use%3E%3Cuse href='%23star' x='400' y='-400'%3E%3C/use%3E%3Cuse href='%23star' x='-400' y='-400'%3E%3C/use%3E%3Cuse href='%23star' x='-400' y='400'%3E%3C/use%3E%3C/g%3E%3C/svg%3E");
		background-size: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		animation: show 2s ease-in-out both;
	}

	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference])) main {
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' opacity='0.5' viewBox='-400 -400 800 800'%3E%3Cg fill='hsl(212, 39%25, 19%25)'%3E%3Cpath id='star' d='M 4.898587196589413e-15 80 Q -117.5570504584946 161.80339887498948 -76.08452130361228 24.7213595499958 -190.21130325903073 -61.803398874989455 -47.02282018339786 -64.72135954999578 -3.6739403974420595e-14 -200 47.02282018339783 -64.72135954999581 190.2113032590307 -61.803398874989526 76.08452130361229 24.721359549995775 117.55705045849467 161.80339887498945 4.898587196589413e-15 80'%3E%3C/path%3E%3Cuse href='%23star' x='400' y='400'%3E%3C/use%3E%3Cuse href='%23star' x='400' y='-400'%3E%3C/use%3E%3Cuse href='%23star' x='-400' y='-400'%3E%3C/use%3E%3Cuse href='%23star' x='-400' y='400'%3E%3C/use%3E%3C/g%3E%3C/svg%3E");
		}
	}

	:global(html[data-preference='dark']) main {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' opacity='0.5' viewBox='-400 -400 800 800'%3E%3Cg fill='hsl(212, 39%25, 19%25)'%3E%3Cpath id='star' d='M 4.898587196589413e-15 80 Q -117.5570504584946 161.80339887498948 -76.08452130361228 24.7213595499958 -190.21130325903073 -61.803398874989455 -47.02282018339786 -64.72135954999578 -3.6739403974420595e-14 -200 47.02282018339783 -64.72135954999581 190.2113032590307 -61.803398874989526 76.08452130361229 24.721359549995775 117.55705045849467 161.80339887498945 4.898587196589413e-15 80'%3E%3C/path%3E%3Cuse href='%23star' x='400' y='400'%3E%3C/use%3E%3Cuse href='%23star' x='400' y='-400'%3E%3C/use%3E%3Cuse href='%23star' x='-400' y='-400'%3E%3C/use%3E%3Cuse href='%23star' x='-400' y='400'%3E%3C/use%3E%3C/g%3E%3C/svg%3E");
	}

	h1 {
		display: flex;
		gap: 0 0.4em;
		padding: 0;
	}

	div {
		position: relative;
		overflow: hidden;
	}

	div strong {
		opacity: 0;
	}

	div span {
		position: absolute;
		right: 0;
	}

	div span:nth-of-type(2) {
		bottom: 100%;
	}

	svg {
		display: block;
		max-width: 18rem;
		width: 100%;
		height: auto;
	}

	svg text {
		font-weight: 600;
	}

	:global(.webfonts) svg text {
		font-family: JosefinsansSemibold, sans-serif;
	}

	.offset-x {
		animation: offset-x 1s 1.5s cubic-bezier(0.25, 1, 0.5, 1) both;
	}

	.offset-y {
		animation: offset-y 2s cubic-bezier(0.37, 0, 0.63, 1) both paused;
	}

	.rotate-y {
		animation: rotate-y 2s cubic-bezier(0.37, 0, 0.63, 1) both paused;
	}

	.show {
		animation: show 1s 2.5s cubic-bezier(0.37, 0, 0.63, 1) both paused;
	}

	.today .offset-y,
	.today .rotate-y,
	.today .show {
		animation-play-state: running;
	}

	@keyframes offset-x {
		from {
			transform: translate3d(100px, 0, 0);
		}
		to {
			transform: translate3d(0px, 0, 0);
		}
	}

	@keyframes offset-y {
		from {
			transform: translate3d(0, -90px, 0);
		}
		to {
			transform: translate3d(0, 0px, 0);
		}
	}

	@keyframes rotate-y {
		from {
			transform: rotate3d(0, 0, 0, 2turn);
		}
		to {
			transform: rotate3d(0, 1, 0, 2turn);
		}
	}

	@keyframes show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
