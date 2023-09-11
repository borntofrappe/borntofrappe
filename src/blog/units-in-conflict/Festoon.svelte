<script>
	import { onMount } from 'svelte';
	let svg = null;
	let animate = false;

	onMount(() => {
		if (CSS.registerProperty === undefined) return;

		const callback = (entries) => {
			if (entries[0].isIntersecting) {
				animate = true;
			} else {
				animate = false;
			}
		};

		const observer = new IntersectionObserver(callback);
		observer.observe(svg);

		return () => {
			observer.unobserve(svg);
		};
	});
</script>

<svg bind:this={svg} class:animate style="display: block;" viewBox="-10.1 -2.1 20.2 4.2">
	<title>A luminous garland</title>
	<defs>
		<filter
			id="festoon-filter"
			x="-2.1"
			width="5.2"
			filterUnits="objectBoundingBox"
			primitiveUnits="objectBoundingBox"
		>
			<feOffset dx="-2" in="SourceGraphic" result="-2" />
			<feOffset dx="-1" in="SourceGraphic" result="-1" />
			<feOffset dx="1" in="SourceGraphic" result="1" />
			<feOffset dx="2" in="SourceGraphic" result="2" />
			<feMerge result="graphic">
				<feMergeNode in="-2" />
				<feMergeNode in="-1" />
				<feMergeNode in="1" />
				<feMergeNode in="2" />
				<feMergeNode in="SourceGraphic" />
			</feMerge>
			<feSpecularLighting result="light" lighting-color="hsl(0 0% 100%)">
				<fePointLight x="0.5" y="0.5" z="-2" />
			</feSpecularLighting>
			<feComposite in="light" in2="graphic" operator="in" />
			<feBlend in2="graphic" mode="screen" />
		</filter>
	</defs>
	<g
		filter="url(#festoon-filter)"
		fill="hsl(0 0% 96%)"
		stroke="hsl(0 90% 65%)"
		stroke-width="0.2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path
			id="festoon-shape"
			d="M 0 0 A 1 1 0 0 1 1 -1 1 1 0 0 1 0 -2 1 1 0 0 1 -1 -1 1 1 0 0 1 0 0Z"
		/>
		<use transform="rotate(90)" href="#festoon-shape" />
		<use transform="rotate(180)" href="#festoon-shape" />
		<use transform="rotate(270)" href="#festoon-shape" />
	</g>
</svg>

<style>
	@property --hue {
		syntax: '<number>';
		initial-value: 0;
		inherits: true;
	}

	@property --luminosity {
		syntax: '<number>';
		initial-value: 70;
		inherits: true;
	}

	svg {
		display: block;
	}

	svg > g {
		--hue: 0;
		--luminosity: 70;
		stroke: hsl(var(--hue) 90% calc(var(--luminosity) * 1%));
		animation: rainbow 10s linear infinite paused;
	}

	svg.animate > g {
		animation-play-state: running;
	}

	@keyframes rainbow {
		8% {
			--luminosity: 59;
		}
		16% {
			--luminosity: 42;
		}
		24% {
			--luminosity: 46;
		}
		32% {
			--luminosity: 46;
		}
		40% {
			--luminosity: 46;
		}
		50% {
			--luminosity: 44;
		}
		58% {
			--luminosity: 65;
		}
		65% {
			--luminosity: 80;
		}
		73% {
			--luminosity: 72;
		}
		82% {
			--luminosity: 53;
		}
		91% {
			--luminosity: 62;
		}
		100% {
			--hue: 360;
		}
	}
</style>
