<script>
	import { onMount } from 'svelte';

	let element = null;
	let animate = false;

	onMount(() => {
		const observation = (entries) => {
			if (entries[0].isIntersecting) {
				animate = true;
			} else {
				animate = false;
			}
		};

		const observer = new IntersectionObserver(observation);
		observer.observe(element);

		return () => {
			observer.unobserve(element);
		};
	});
</script>

<svg bind:this={element} class:animate style="display: block;" viewBox="-250 -160 500 320">
	<path
		fill="hsl(216 45% 16%)"
		d="M -250 -120 A 40 40 0 0 1 -210 -160 L 210 -160 A 40 40 0 0 1 250 -120 L 250 120 A 40 40 0 0 1 210 160 L -210 160 A 40 40 0 0 1 -250 120"
	/>

	<circle fill="hsl(202 89% 33%)" r="80" />
	<path
		fill="hsl(202 86% 30%)"
		d="M 0 -80 A 10 10 0 0 1 0 -60 10 10 0 0 0 0 -40 L 10 -40 A 10 10 0 0 1 10 -20 L -10 -20 A 10 10 0 0 0 -10 0 L 10 0 A 10 10 0 0 1 10 20 A 10 10 0 0 0 10 40 L 30 40 A 10 10 0 0 1 30 60 L 0 60 A 10 10 0 0 0 0 80 A 40 40 0 0 0 0 -80"
	/>

	<g class="rotate" fill="hsl(0, 0%, 97%)">
		<circle cx="128" cy="21" r="3" />
		<circle cx="113" cy="25" r="2" />
		<circle cx="113" cy="17" r="3" />
		<circle cx="122" cy="42" r="2" />
		<circle cx="102" cy="42" r="3" />
		<circle cx="113" cy="61" r="2" />
		<circle cx="93" cy="61" r="3" />
		<circle cx="100" cy="78" r="2" />
		<circle cx="85" cy="83" r="2" />
		<circle cx="85" cy="74" r="2" />
		<circle cx="84" cy="93" r="2" />
		<circle cx="66" cy="105" r="3" />
		<circle cx="56" cy="110" r="2" />
		<circle cx="46" cy="105" r="3" />
		<circle cx="56" cy="100" r="3" />
		<circle cx="26" cy="118" r="3" />
		<circle cx="6" cy="118" r="2" />
		<circle cx="4" cy="119" r="3" />
		<circle cx="-17" cy="116" r="3" />
		<circle cx="-32" cy="121" r="3" />
		<circle cx="-32" cy="112" r="2" />
		<circle cx="-38" cy="110" r="2" />
		<circle cx="-58" cy="110" r="2" />
		<circle cx="-57" cy="100" r="2" />
		<circle cx="-77" cy="100" r="2" />
		<circle cx="-73" cy="86" r="3" />
		<circle cx="-93" cy="86" r="2" />
		<circle cx="-88" cy="70" r="2" />
		<circle cx="-108" cy="70" r="2" />
		<circle cx="-106" cy="31" r="2" />
		<circle cx="-121" cy="36" r="3" />
		<circle cx="-121" cy="27" r="3" />
		<circle cx="-110" cy="10" r="2" />
		<circle cx="-125" cy="15" r="2" />
		<circle cx="-125" cy="6" r="3" />
		<circle cx="-110" cy="-11" r="3" />
		<circle cx="-106" cy="-32" r="3" />
		<circle cx="-116" cy="-27" r="2" />
		<circle cx="-126" cy="-32" r="3" />
		<circle cx="-116" cy="-37" r="2" />
		<circle cx="-88" cy="-71" r="2" />
		<circle cx="-103" cy="-67" r="2" />
		<circle cx="-103" cy="-75" r="2" />
		<circle cx="-38" cy="-111" r="2" />
		<circle cx="-53" cy="-107" r="3" />
		<circle cx="-53" cy="-115" r="3" />
		<circle cx="-17" cy="-117" r="3" />
		<circle cx="-27" cy="-112" r="2" />
		<circle cx="-37" cy="-117" r="2" />
		<circle cx="-27" cy="-122" r="2" />
		<circle cx="4" cy="-120" r="2" />
		<circle cx="-11" cy="-116" r="3" />
		<circle cx="-11" cy="-125" r="2" />
		<circle cx="26" cy="-119" r="3" />
		<circle cx="16" cy="-114" r="3" />
		<circle cx="6" cy="-119" r="3" />
		<circle cx="16" cy="-124" r="2" />
		<circle cx="47" cy="-115" r="3" />
		<circle cx="27" cy="-115" r="3" />
		<circle cx="66" cy="-106" r="2" />
		<circle cx="84" cy="-94" r="3" />
		<circle cx="69" cy="-90" r="3" />
		<circle cx="69" cy="-99" r="3" />
		<circle cx="100" cy="-79" r="3" />
		<circle cx="80" cy="-79" r="2" />
		<circle cx="113" cy="-62" r="3" />
		<circle cx="98" cy="-58" r="2" />
		<circle cx="98" cy="-66" r="2" />
		<circle cx="122" cy="-43" r="2" />
		<circle cx="102" cy="-43" r="3" />
		<circle cx="128" cy="-22" r="2" />
		<circle cx="113" cy="-18" r="3" />
		<circle cx="113" cy="-26" r="3" />
	</g>
</svg>

<style>
	.rotate {
		animation: rotate 15s linear infinite paused;
	}

	.animate .rotate {
		animation-play-state: running;
	}

	@keyframes rotate {
		to {
			transform: rotate(1turn);
		}
	}
</style>
