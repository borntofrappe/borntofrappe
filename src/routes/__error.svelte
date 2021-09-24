<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				error,
				status
			}
		};
	}
</script>

<script>
	export let error;
	export let status;
</script>

<header>
	<h1>{status}</h1>
	<p>I tried my best, but something quite unexpected has happened.</p>
</header>

<main id="content">
	<p>Here's the error message for context.</p>

	<div class="code">
		<span>
			<svg
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="-50 -50 100 100"
				width="1em"
				height="1em"
			>
				<path
					fill="currentColor"
					stroke="none"
					d="M-40.5-33v16h.5v.5h80v-16h-.5v-.5h-80zm8.5.5a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0A4.5 4.5 0 01-1.5-28 4.5 4.5 0 01-6-23.5a4.5 4.5 0 01-4.5-4.5A4.5 4.5 0 01-6-32.5z"
				/>
				<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
					<path d="M-45-37.5h90v75h-90z" stroke-width="10" />
					<g stroke-width="8">
						<path d="M5-4L-5 21M-18 0l-8 8 8 8M18 0l8 8-8 8" />
					</g>
				</g>
			</svg>
		</span>
		<pre><code>{error.message}</code></pre>
	</div>

	<p>
		If you think this is a mistake I could fix, please consider filing an issue
		<a
			href="https://github.com/borntofrappe/borntofrappe/issues/new?title=Status%20code%20{status}&body={error.message}&labels=bug"
			>on github</a
		>.
	</p>

	<p>
		If you need some guidance,
		<em>home is always a good place to start.</em>
	</p>

	<a class="relative" href="/">Go to home page</a>
</main>

<style>
	header {
		width: 90vw;
		width: var(--width);
		max-width: 42rem;
		max-width: var(--max-width);
		margin: 0 auto 20px;
		padding: 3rem 0;
		color: hsl(215, 10%, 98%);
		color: var(--frappe-grey-10);
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
		position: relative;
		z-index: 5;
	}

	header > * + * {
		margin-top: 0.75em;
	}

	header::before {
		content: '';
		position: absolute;
		top: 0%;
		left: 50%;
		width: 100vw;
		height: 100%;
		transform: translateX(-50%);
		background: inherit;
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		background-size: 20px;
		background-position: 0 100%;
		z-index: -5;
	}

	header::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		width: 100vw;
		height: 20px;
		transform: translateX(-50%) scaleY(-1);
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		background-size: 20px;
		-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
		mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
		-webkit-mask-size: 100px 40px;
		mask-size: 100px 40px;
		-webkit-mask-position: 50% 0;
		mask-position: 50% 0;
		z-index: -5;
	}

	header h1 {
		color: inherit;
	}

	@supports (display: grid) {
		body {
			overflow-x: initial;
		}

		header {
			width: 100%;
			max-width: initial;
			margin: 0 initial 20px;
			display: grid;
			grid-template-columns: 1fr minmax(auto, 42rem) 1fr;
			grid-template-columns: 1fr minmax(auto, var(--max-width)) 1fr;
			gap: 0 5vw;
			background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
			background-size: 20px;
			background-position: 0 100%;
		}

		header > * {
			grid-column: 2;
		}

		header::before {
			content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-70 -90 140 140"%3E%3Cg fill="none" stroke="hsl(215, 10%25, 97%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cg transform="translate(0 -80) scale(0.25)"%3E%3Cg transform="scale(0.75)"%3E%3Cg fill="none" stroke-width="16"%3E%3Cg transform="translate(0 13.5)"%3E%3Cpath d="M 34 0 h -68"/%3E%3Cpath transform="rotate(45)" d="M 40 0 h -80"/%3E%3Cpath transform="rotate(-45)" d="M 40 0 h -80"/%3E%3C/g%3E%3C/g%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke-width="8"%3E%3Cpath d="M -0 -46 a 17 17 0 0 1 17 17 h -34 a 17 17 0 0 1 17 -17" /%3E%3Cpath d="M -0 -10 h 25 v 25 a 25 25 0 0 1 -50 0 v -25 z" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke="none"%3E%3Cpath d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath transform="scale(-1 1)" d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3Cpath transform="scale(-1 1)" d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3C/g%3E%3Cg stroke="none"%3E%3Ccircle fill="none" r="25" cy="-24"/%3E%3Cg fill="hsl(215, 10%25, 97%25)"%3E%3Cpath d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath transform="scale(-1 1)" d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath d="M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0" /%3E%3Cpath d="M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0" /%3E%3Cpath d="M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
			top: initial;
			left: initial;
			background: initial;
			transform: initial;
			grid-column: 2/3;
			grid-row: 3;
			justify-self: end;
			width: 6rem;
			height: 6rem;
			z-index: 5;
		}

		header::after {
			left: 0%;
			width: 100%;
			transform: scaleY(-1);
		}
	}

	main#content {
		width: 90vw;
		width: var(--width);
		max-width: 42rem;
		max-width: var(--max-width);
		margin: 0 auto;
		padding-top: 2.5rem;
		padding-bottom: 4rem;
	}

	main#content > * + * {
		margin-top: 0.75em;
	}

	/* components/code */
	.code > span,
	.code pre {
		border-radius: 0.4rem;
		padding: 0.8rem 1rem;
	}

	.code > span {
		font-weight: 700;
		color: hsl(215, 10%, 98%);
		color: var(--frappe-grey-10);
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		background-size: 20px;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		transition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
		transition: color var(--transition-duration) var(--ease-in-out-sine);
		display: flex;
		align-items: flex-end;
	}

	.code > span svg {
		width: 1.25em;
		height: auto;
		margin-right: 0.5rem;
	}

	.code:hover > span {
		color: hsl(340, 90%, 55%);
		color: var(--primary-6);
	}

	.code pre {
		margin-top: 0;
		line-height: 1.75;
		color: hsl(214, 15%, 88%);
		color: var(--frappe-grey-9);
		background: hsl(210, 20%, 12%);
		background: var(--frappe-grey-1);
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	.code pre {
		overflow-x: auto;
	}

	.code pre::-webkit-scrollbar {
		height: 0.4rem;
	}

	.code pre::-webkit-scrollbar-track {
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
	}

	.code pre::-webkit-scrollbar-thumb {
		background: hsl(340, 90%, 55%);
		background: var(--primary-6);
		border-radius: 0.2rem;
	}

	/* components/relative link */
	@supports ((-webkit-mask-image: url()) or (mask-image: url())) {
		:global(.webfonts) a.relative {
			font-family: JosefinSansBold, sans-serif;
		}

		a.relative {
			--transition-duration: 0.4s;
			font-weight: 700;
			text-decoration: none;
			display: inline-block;
			position: relative;
			padding-bottom: 0.5em;
			margin: 0.8em 0 1.3em;
			z-index: 5;
		}

		a.relative:focus {
			outline: none;
		}

		a.relative::before,
		a.relative::after {
			content: '';
			position: absolute;
			top: 100%;
			background: currentColor;
			transition: transform var(--transition-duration) var(--ease-in-out-sine);
			pointer-events: none;
			z-index: -5;
		}

		a.relative::before {
			left: 0%;
			width: 100%;
			height: 2px;
			transform-origin: 0% 50%;
			transform: translate(0%, -50%) scaleX(0);
		}

		a.relative:hover::before,
		a.relative:focus::before {
			transform: translate(0%, -50%) scaleX(1);
		}

		a.relative::after {
			left: 50%;
			width: 100%;
			height: 1.7em;
			transform: translate(-50%, -50%);
			-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"%3E%3Cg transform="scale(0.8) rotate(90)"%3E%3Cpath stroke-width="8" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" /%3E%3Cg stroke-width="7"%3E%3Cpath d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /%3E%3Cpath transform="scale(-1 1)" d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /%3E%3Cpath d="M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5" /%3E%3Ccircle r="9" cy="-11" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
			mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"%3E%3Cg transform="scale(0.8) rotate(90)"%3E%3Cpath stroke-width="8" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" /%3E%3Cg stroke-width="7"%3E%3Cpath d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /%3E%3Cpath transform="scale(-1 1)" d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /%3E%3Cpath d="M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5" /%3E%3Ccircle r="9" cy="-11" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
			-webkit-mask-repeat: no-repeat;
			mask-repeat: no-repeat;
		}

		a.relative:hover::after,
		a.relative:focus::after {
			transform: translate(50%, -50%);
		}
	}
</style>
