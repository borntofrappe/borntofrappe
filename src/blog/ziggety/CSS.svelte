<script>
	import { onMount } from 'svelte';

	let element = null;

	onMount(() => {
		const target = element.querySelector('use');

		const callback = (entries) => {
			if (entries[0].isIntersecting) {
				target.style.animationPlayState = 'running';
			} else {
				target.style.animationPlayState = 'paused';
			}
		};

		const observer = new IntersectionObserver(callback);
		observer.observe(element);

		return () => {
			observer.unobserve(element);
		};
	});
</script>

<svg bind:this={element} style="display: block;" viewBox="-60 -60 120 120">
	<defs>
		<symbol id="css-target" viewBox="0 0 10 5.5" stroke="transparent">
			<title>Magnemite</title>
			<rect fill="hsl(194 66% 86%)" x="3" y="1.5" width="4" height="4" />
			<rect fill="hsl(0 0% 100%)" x="4" y="2.5" width="2" height="2" />
			<rect fill="hsl(0 0% 42%)" x="4.835" y="3.335" width="0.33" height="0.33" />
			<g fill="hsl(60 2% 83%)">
				<rect x="4" width="2" height="0.5" />
				<rect x="4.5" y="0.5" width="1" height="0.33" />
				<rect x="4.5" y="1.17" width="1" height="0.33" />
				<rect x="1" y="2" width="2" height="1" />
				<rect x="7" y="2" width="2" height="1" />
				<rect x="2" y="3" width="1" height="1" />
				<rect x="7" y="3" width="1" height="1" />
				<rect x="1" y="4" width="2" height="1" />
				<rect x="7" y="4" width="2" height="1" />
				<rect x="3" y="4.5" width="1" height="1" />
				<rect x="6" y="4.5" width="1" height="1" />
			</g>
			<g fill="hsl(40 1% 61%)">
				<rect x="4.5" y="0.83" width="1" height="0.34" />
				<rect x="3.375" y="4.625" width="0.25" height="0.75" />
				<rect x="3.125" y="4.875" width="0.75" height="0.25" />
				<rect x="6.375" y="4.625" width="0.25" height="0.75" />
				<rect x="6.125" y="4.875" width="0.75" height="0.25" />
			</g>
			<g fill="hsl(196 58% 61%)">
				<rect x="9" y="2" width="1" height="1" />
				<rect y="4" width="1" height="1" />
			</g>
			<g fill="hsl(10 49% 68%)">
				<rect y="2" width="1" height="1" />
				<rect x="9" y="4" width="1" height="1" />
			</g>
		</symbol>
	</defs>
	<use href="#css-target" x="-50" y="-50" width="100" height="100" />
</svg>

<style>
	use {
		--dur: 2s;
		--angle: 20deg;
		--offset: 20px;
		animation: rotate var(--dur) infinite, translate calc(var(--dur) * 3) infinite;
		animation-play-state: paused;
	}

	@keyframes rotate {
		0%,
		50%,
		100% {
			rotate: 0deg;
			animation-timing-function: ease-out;
		}

		25% {
			rotate: calc(var(--angle) * -1);
			animation-timing-function: ease-in;
		}

		75% {
			rotate: var(--angle);
			animation-timing-function: ease-in;
		}
	}

	@keyframes translate {
		0%,
		50%,
		100% {
			translate: 0px 0px;
			animation-timing-function: ease-out;
		}

		25% {
			translate: 0px calc(var(--offset) * -1);
			animation-timing-function: ease-in;
		}

		75% {
			translate: 0px var(--offset);
			animation-timing-function: ease-in;
		}
	}
</style>
