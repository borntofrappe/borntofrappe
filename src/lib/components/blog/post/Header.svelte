<script>
	import icons from '$lib/icons.js';

	export let title;
	export let keywords;
	export let latest;
</script>

<header class:latest>
	<h1>{title}</h1>

	{#if keywords}
		<h2 class="visually-hidden">Keywords</h2>
		<ul>
			{#each keywords.split(/,\s+?/) as keyword}
				<li>{@html icons[keyword] || icons.bug}<span class="visually-hidden">{keyword}</span></li>
			{/each}
		</ul>
	{/if}
</header>

<style>
	header {
		text-align: center;
		padding: 4.5em 1em 3em;
		margin-bottom: 20px;
		color: var(--frappe-grey-10);
		background: var(--frappe-grey-0);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		background-size: 20px;
		background-position: 0 100%;
		position: relative;
	}

	header.latest:before {
		line-height: 0;
		position: absolute;
		top: 0;
		width: 8rem;
		left: 50%;
		transform: translateX(-50%) rotate(180deg);
		content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -45 120 80"%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke="hsl(215, 10%25, 97%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"%3E%3Cpath transform="translate(0 -10)" d="M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4" /%3E%3Cpath transform="rotate(90) translate(0 -35) scale(0.8)" d="M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4" /%3E%3Cpath transform="rotate(-90) translate(0 -35) scale(0.8)" d="M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4" /%3E%3C/g%3E%3Cg transform="translate(0 54)"%3E%3Cg stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cg stroke="none"%3E%3Ccircle fill="none" r="25" cy="-24"/%3E%3Cg fill="hsl(215, 10%25, 97%25)"%3E%3Cpath d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath transform="scale(-1 1)" d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath d="M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0" /%3E%3Cpath d="M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0" /%3E%3Cpath d="M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
	}

	header::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 0%;
		width: 100%;
		height: 20px;
		transform: scaleY(-1);
		background: var(--frappe-grey-0);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		background-size: 20px;
		-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
		mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
		-webkit-mask-size: 100px 40px;
		mask-size: 100px 40px;
		-webkit-mask-position: 50% 0;
		mask-position: 50% 0;
	}

	header h1 {
		color: inherit;
		text-align: center;
		max-width: 15ch;
		margin: 0 auto;
	}

	header ul {
		padding: 0;
		list-style: none;
		margin-top: 10px;
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow-x: auto;
		display: flex;
		align-items: center;
		z-index: 5;
	}

	header ul li {
		flex-shrink: 0;
		padding: 0.5em;
		border-radius: 50%;
		margin: 0px 22.5px;
		width: 55px;
		height: 55px;
		color: var(--grey-0);
		background: var(--grey-10);
		border: 0.3rem solid currentColor;
		transition: color var(--transition-duration) var(--ease-in-out-sine);
	}

	@supports (display: grid) {
		header ul {
			align-items: initial;
			display: grid;
			grid-auto-columns: 100px;
			justify-items: center;
			grid-auto-flow: column;
		}

		header ul li {
			flex-shrink: initial;
			margin: 0px;
			width: 3em;
			height: 3em;
		}
	}

	header ul li :global(svg) {
		height: 100%;
		width: auto;
	}

	header ul li:hover {
		color: hsl(340, 90%, 55%);
		color: var(--primary-6);
	}

	header ul::-webkit-scrollbar {
		height: 0.3rem;
	}

	header ul::-webkit-scrollbar-track {
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
	}

	header ul::-webkit-scrollbar-thumb {
		border-radius: 0.5rem;
		background: hsl(340, 90%, 55%);
		background: var(--primary-6);
	}
</style>
