<script>
	import { onMount } from 'svelte';
	let svg = null;

	onMount(() => {
		const duration = 170;

		const keyframes = [{ opacity: 0 }, { opacity: 1 }];
		const options = {
			easing: 'steps(1)',
			duration,
			fill: 'both'
		};

		const sprites = svg.querySelectorAll('use');

		sprites.forEach((sprite) => {
			sprite.style.setProperty('opacity', 0);
		});

		const observation = (entries) => {
			if (entries[0].isIntersecting) {
				sprites.forEach((sprite, i) => {
					sprite.animate(keyframes, {
						...options,
						delay: (i + 1) * duration
					});
				});
				observer.unobserve(svg);
			}
		};

		const observer = new IntersectionObserver(observation);

		observer.observe(svg);
	});
</script>

<svg
	bind:this={svg}
	arial-label="So you are reaching here at last, legendary hero."
	style="display: block;"
	viewBox="-6 -6.5 172 40"
	shape-rendering="crispEdges"
>
	<defs>
		<path
			id="S"
			d="M 1 0 h 3 M 0 1 h 1 M 4 1 h 1 M 0 2 h 1 M 0 3 h 1 M 0 4 h 1 M 1 5 h 3 M 4 6 h 1 M 4 7 h 1 M 4 8 h 1 M 0 9 h 1 M 4 9 h 1 M 1 10 h 3"
		/>
		<path
			id="a"
			d="M 1 4 h 3 M 1 5 h 1 M 3 5 h 1 M 1 6 h 1 M 3 6 h 1 M 1 7 h 1 M 1 8 h 1 M 3 8 h 1 M 0 9 h 1 M 3 9 h 1 M 0 10 h 5 M 0 11 h 1 M 4 11 h 1 M 4 12 h 1  M 3 7 h 1"
		/>
		<path
			id="c"
			d="M 1 4 h 2 M 0 5 h 1 M 0 6 h 1 M 0 7 h 1 M 0 8 h 1 M 0 9 h 1 M 1 10 h 2  M 3 5 h 1  M 3 9 h 1"
		/>
		<path
			id="d"
			d="M 3 1 h 1 M 3 2 h 1 M 3 3 h 1 M 1 4 h 3 M 0 5 h 1 M 3 5 h 1 M 0 6 h 1 M 3 6 h 1 M 0 7 h 1 M 3 7 h 1 M 0 8 h 1 M 3 8 h 1 M 0 9 h 1 M 3 9 h 1 M 1 10 h 2 M 4 10 h 1"
		/>
		<path
			id="e"
			d="M 1 4 h 2 M 0 5 h 1 M 3 5 h 1 M 3 6 h 1 M 2 7 h 1 M 3 8 h 1 M 0 9 h 1 M 3 9 h 1 M 1 10 h 2"
		/>
		<path
			id="g"
			d="M 1 4 h 3 M 0 5 h 1 M 3 5 h 1 M 0 6 h 1 M 3 6 h 1 M 0 7 h 1 M 3 7 h 1 M 0 8 h 1 M 3 8 h 1 M 3 9 h 1 M 3 10 h 1 M 0 11 h 1 M 3 11 h 1 M 1 12 h 2  M 1 9 h 2"
		/>
		<path
			id="h"
			d="M 0 4 h 1 M 3 4 h 1 M 0 5 h 1 M 3 5 h 1 M 0 6 h 4 M 0 7 h 1 M 3 7 h 1 M 0 8 h 1 M 3 8 h 1 M 0 9 h 1 M 0 10 h 1 M 3 10 h 1  M 3 9 h 1"
		/>
		<path
			id="i"
			d="M 0 2 h 1 M 0 4 h 1 M 0 5 h 1 M 0 6 h 1 M 0 7 h 1 M 0 8 h 1 M 0 9 h 1 M 0 10 h 1"
		/>
		<path
			id="l"
			d="M 0 2 h 1 M 0 3 h 1 M 0 4 h 1 M 0 5 h 1 M 0 6 h 1 M 0 7 h 1 M 0 8 h 1 M 0 9 h 1 M 0 10 h 1"
		/>
		<path
			id="n"
			d="M 0 4 h 1 M 3 4 h 1 M 0 5 h 1 M 3 5 h 1 M 0 6 h 1 M 3 6 h 1 M 0 7 h 1 M 2 7 h 2 M 0 8 h 2 M 3 8 h 1 M 0 9 h 1 M 3 9 h 1 M 0 10 h 1 M 3 10 h 1"
		/>
		<path
			id="o"
			d="M 3 3 h 1 M 3 4 h 1 M 1 5 h 4 M 0 6 h 1 M 3 6 h 1 M 6 6 h 1 M 3 7 h 1 M 6 7 h 1 M 0 8 h 1 M 3 8 h 1 M 6 8 h 1 M 0 9 h 1 M 3 9 h 1 M 6 9 h 1 M 2 10 h 2 M 5 10 h 1 M 3 11 h 1 M 3 12 h 1  M 5 5 h 1  M 0 7 h 1  M 1 10 h 1 M 4 10 h 1"
		/>
		<path
			id="r"
			d="M 1 4 h 3 M 0 5 h 1 M 3 5 h 1 M 0 6 h 1 M 3 6 h 1 M 0 7 h 1 M 3 7 h 1 M 1 8 h 3 M 0 9 h 1 M 3 9 h 1 M 0 10 h 1 M 3 10 h 1"
		/>
		<path
			id="s"
			d="M 1 4 h 2 M 0 5 h 1 M 3 5 h 1 M 0 6 h 1 M 1 7 h 2 M 3 8 h 1 M 0 9 h 1 M 3 9 h 1 M 1 10 h 2"
		/>
		<path
			id="t"
			d="M 1 3 h 1 M 0 4 h 3 M 1 5 h 1 M 1 6 h 1 M 1 7 h 1 M 1 8 h 1 M 1 9 h 1 M 2 10 h 1"
		/>
		<path
			id="u"
			d="M 0 4 h 1 M 3 4 h 1 M 0 5 h 1 M 3 5 h 1 M 3 6 h 1 M 0 7 h 1 M 3 7 h 1 M 0 8 h 1 M 3 8 h 1 M 0 9 h 1 M 3 9 h 1 M 0 10 h 1 M 2 10 h 3 M 4 11 h 1 M 4 12 h 1  M 0 6 h 1  M 1 10 h 1"
		/>
		<path
			id="y"
			d="M 0 4 h 1 M 3 4 h 1 M 0 5 h 1 M 3 5 h 1 M 0 6 h 1 M 0 7 h 1 M 3 7 h 1 M 1 8 h 3 M 3 9 h 1 M 3 10 h 1  M 3 6 h 1"
		/>
		<path id="," d="M 1 10 h 1 M 1 11 h 1 M 0 12 h 1" />
		<path id="." d="M 0 10 h 1" />
	</defs>
	<rect fill="hsl(0 0% 0%)" fill-opacity="0.7" x="-5" y="-5.5" width="170" height="38" />
	<rect
		fill="none"
		stroke="hsl(0 0% 100%)"
		stroke-width="1"
		rx="1"
		x="-5.5"
		y="-6"
		width="171"
		height="39"
	/>
	<g stroke="hsl(0 0% 100%)">
		<use href="#S" />
		<use href="#o" x="6" />
		<use />
		<use />
		<use href="#y" x="18" />
		<use href="#o" x="23" />
		<use href="#u" x="31" />
		<use />
		<use />
		<use href="#a" x="41" />
		<use href="#r" x="47" />
		<use href="#e" x="52" />
		<use />
		<use />
		<use href="#r" x="61" />
		<use href="#e" x="66" />
		<use href="#a" x="71" />
		<use href="#c" x="77" />
		<use href="#h" x="82" />
		<use href="#i" x="87" />
		<use href="#n" x="89" />
		<use href="#g" x="94" />
		<use />
		<use />
		<use href="#h" x="103" />
		<use href="#e" x="108" />
		<use href="#r" x="113" />
		<use href="#e" x="118" />
		<use />
		<use />
		<use href="#a" x="127" />
		<use href="#t" x="133" />
		<use />
		<use />
		<use href="#l" x="141" />
		<use href="#a" x="143" />
		<use href="#s" x="149" />
		<use href="#t" x="154" />
		<use />
		<use href="#," x="158" />
		<use />
		<use />
		<use href="#l" x="3" y="15" />
		<use href="#e" x="5" y="15" />
		<use href="#g" x="10" y="15" />
		<use href="#e" x="15" y="15" />
		<use href="#n" x="20" y="15" />
		<use href="#d" x="25" y="15" />
		<use href="#a" x="31" y="15" />
		<use href="#r" x="37" y="15" />
		<use href="#y" x="42" y="15" />
		<use />
		<use />
		<use href="#h" x="51" y="15" />
		<use href="#e" x="56" y="15" />
		<use href="#r" x="61" y="15" />
		<use href="#o" x="66" y="15" />
		<use href="#." x="74" y="15" />
	</g>
</svg>
