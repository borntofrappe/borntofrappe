<script>
	export let title;
	export let body;
	export let illustration;
</script>

<header style="--illustration: {illustration}">
	<h1>{title}</h1>
	<p>{body}</p>
</header>

<style>
	:global(body) {
		overflow-x: hidden;
	}

	header {
		width: 90vw;
		width: var(--width);
		max-width: 42rem;
		max-width: var(--max-width);
		margin: 0 auto 20px;
		padding: 3em 0;
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
		:global(body) {
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
			content: var(--illustration);
			top: initial;
			left: initial;
			background: initial;
			transform: initial;
			grid-column: 2/3;
			grid-row: 3;
			justify-self: end;
			width: 6em;
			height: 6em;
			z-index: 5;
		}

		header::after {
			left: 0%;
			width: 100%;
			transform: scaleY(-1);
		}
	}
</style>
