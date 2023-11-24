<script>
	let pressed = false;
	function handleToggle() {
		pressed = !pressed;
	}
</script>

<button aria-label="Press to toggle a crisp suprise" aria-pressed={pressed} on:click={handleToggle}>
	<svg class:pressed viewBox="-45 -45 90 90">
		<defs>
			<symbol
				id="top-hat-star"
				viewBox="-25.07461166381836 -26.236068725585938 50.14922332763672 47.984046936035156"
				x="-5"
				y="-5"
				width="10"
				height="10"
			>
				<path
					fill="currentColor"
					d="M 9.797174393178826e-16 16C -17.63355756877419 24.270509831248425 -17.63355756877419 24.270509831248425 -15.216904260722456 4.94427190999916C -28.531695488854606 -9.270509831248432 -28.531695488854606 -9.270509831248432 -9.404564036679572 -12.944271909999157C -5.510910596163089e-15 -30 -5.510910596163089e-15 -30 9.404564036679567 -12.944271909999161C 28.531695488854606 -9.27050983124843 28.531695488854606 -9.27050983124843 15.216904260722458 4.944271909999155C 17.633557568774222 24.270509831248404 17.633557568774222 24.270509831248404 9.797174393178826e-16 16"
				/>
			</symbol>
			<filter id="top-hat-filter">
				<feTurbulence type="fractalNoise" baseFrequency="1" />
				<feColorMatrix values="1 0 0 5.5 -1 0 0.5 0 5.5 -1 0 0 0.5 5.5 -1 0 0 0 0 1" />
				<feBlend in2="SourceGraphic" mode="darken" />
				<feComposite in2="SourceGraphic" operator="in" />
			</filter>
		</defs>
		<circle filter="url(#top-hat-filter)" fill="hsl(43 53% 89%)" r="45" />
		<g class="active">
			<g class="hover">
				<g transform="translate(-25 -5) rotate(20)">
					<path stroke="hsl(41 9% 35%)" stroke-width="1" d="M 0 -5 v 30" />
					<use style="color: hsl(43 93% 64%)" href="#top-hat-star" y="-5" />
				</g>
			</g>
		</g>
		<ellipse fill="hsl(41 9% 35%)" rx="20" ry="10" />
		<ellipse fill="hsl(40 13% 23%)" rx="14" ry="7" />
		<g class="translate">
			<g class="scale">
				<use
					style="color: hsl(260 90% 72%)"
					transform=" translate(1 -5) rotate(5) scale(0.6)"
					href="#top-hat-star"
				/>
				<use
					style="color: hsl(194 90% 72%)"
					transform=" translate(-10 -6) rotate(-20) scale(0.7)"
					href="#top-hat-star"
				/>
				<use
					style="color: hsl(323 78% 77%)"
					transform="translate(11 -9) rotate(30) scale(0.75)"
					href="#top-hat-star"
				/>
				<use
					style="color: hsl(105 92% 67%)"
					transform="translate(-12 -24) rotate(-15) scale(0.85)"
					href="#top-hat-star"
				/>
				<use
					style="color: hsl(15 95% 65%)"
					transform="translate(10 -28) rotate(20)"
					href="#top-hat-star"
				/>
				<g fill="hsl(37 11% 28%)" font-family="monospace" text-anchor="middle" font-weight="700">
					<text transform="translate(-9 -13) rotate(-12)" font-size="5">&lt;svg&gt;</text>
					<text transform="translate(8 -17) rotate(20)" font-size="6">&lt;object&gt;</text>
				</g>
			</g>
		</g>
		<path
			fill="hsl(37 11% 28%)"
			d="M -14 0 C -14 10 -14 16 -15 26 C -8 32 8 32 15 26 C 14 16 14 10 14 0 A 14 7 0 0 1 -14 0"
		/>
		<path fill="hsl(41 9% 35%)" d="M -20 0 -14 0 A 14 7 0 0 0 14 0 L 20 0 A 20 11 0 0 1 -20 0" />
	</svg>
</button>

<style>
	button {
		display: block;
		inline-size: 100%;
		max-inline-size: 24rem;
		margin-inline: auto;
		border: none;
		background: none;
		--ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);
		--ease-in-out-cubic: cubic-bezier(0.65, 0, 0.35, 1);
		--ease-out-cubic: cubic-bezier(0.33, 1, 0.68, 1);
	}

	button:focus {
		outline: none;
		filter: drop-shadow(0 0 2px hsl(0 0% 0%/ 0.5));
	}

	button:focus:not(:focus-visible) {
		filter: initial;
	}

	.hover {
		transform: translate(0, -5px) rotate(-20deg);
		transition: transform 0.4s var(--ease-in-out-cubic);
	}

	button:hover .hover {
		transform: translate(0, 0px) rotate(0deg);
	}

	.active {
		transition: transform 0.3s var(--ease-in-out-cubic);
	}

	button:active .active {
		transform: translate(1px, 3px) rotate(5deg);
		transition-timing-function: var(--ease-out-back);
	}

	.translate,
	.scale {
		transition-timing-function: var(--ease-out-cubic);
		transition-duration: 0.8s;
	}

	.translate {
		translate: 0 30px;
		transition-property: translate;
	}

	.scale {
		scale: 0;
		transition-property: scale;
	}

	.pressed .translate,
	.pressed .scale {
		transition-timing-function: var(--ease-out-back);
	}

	.pressed .translate {
		translate: 0 0px;
	}

	.pressed .scale {
		scale: 1;
	}
</style>
