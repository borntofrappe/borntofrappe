<script>
	import { blink, typewriter } from './utils';
	import svg from './svg.js';

	const changes = [
		{
			title: 'High ruler',
			id: 'change-king',
			style: '--c0: #030f00; --c1: #ff0757; --c2: #eef2d9;',
			talk: 'Hail the new king!'
		},
		{
			title: 'Pepper enthusiast',
			id: 'change-woman',
			style: '--c0: #030f00; --c1: #008e29; --c2: #eef2d9;',
			talk: "There's hope in Alefgard!"
		},
		{
			title: 'Baffling old man',
			id: 'change-old-man',
			style: '--c0: #030f00; --c1: #0100fc; --c2: #eef2d9;',
			talk: 'Fwaa! Fy falf feef!'
		},
		{
			title: 'Distant innkeeper',
			id: 'change-innkeeper',
			style: '--c0: #030f00; --c1: #008e29; --c2: #eef2d9;',
			talk: "It's morning! Rise and shine!"
		},
		{
			title: 'Rotund blue blob',
			id: 'change-slime',
			style: '--c0: #030f00; --c1: #0100fc; --c2: #eef2d9;',
			talk: '... ... !?'
		}
	];

	let i = 0;
	$: change = changes[i];
	const handleChange = () => {
		i = (i + 1) % changes.length;
	};
</script>

{@html svg['change-staff']}

<article>
	<div>
		<svg viewBox="0 0 1 1">
			<title>{change.title}</title>
			{#key i}
				<use in:blink={{ duration: 475, delay: 50 }} style={change.style} href="#{change.id}" />
			{/key}
		</svg>
		<p>
			<span aria-hidden="true" style:opacity="0" style:visibility="none">{change.talk}</span>
			{#key i}
				<span in:typewriter={{ speed: 40, delay: 650 }}>
					{change.talk}
				</span>
			{/key}
		</p>
	</div>

	<button on:click={handleChange}>
		Change
		<svg viewBox="0 0 1 1" width="1em" height="1em">
			<title>Change staff</title>
			<use style="--c0: #030f00; --c1: #5b5d5d; --c2: #eef2d9;" href="#change-staff" />
		</svg>
	</button>
</article>

<style>
	article {
		display: flex;
		gap: 0.5rem;
		flex-direction: column;
		align-items: center;
	}

	div > * + * {
		margin-block-start: 0.5rem;
	}

	div > svg {
		display: block;
		margin-inline: auto;
		inline-size: 100%;
		max-inline-size: 6rem;
	}

	button {
		border: none;
		background: none;
		cursor: pointer;
		font-weight: 700;
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	p {
		position: relative;
	}

	p > span {
		display: inline-block;
	}

	p > span:nth-of-type(1) {
		opacity: 0;
	}

	p > span:nth-of-type(2) {
		position: absolute;
		inset-inline-start: 0;
		inset-block-start: 0;
		inline-size: 100%;
		block-size: 100%;
	}
</style>
