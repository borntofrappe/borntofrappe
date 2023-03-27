<script>
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	let keyboard = null;
	let smile = false;

	const handlePress = () => {
		smile = true;
	};

	const handleClear = () => {
		smile = false;
	};

	const handleKeydown = (e) => {
		const { key } = e;
		if (key === 'Enter') {
			e.preventDefault();
			keyboard.querySelector('animateTransform').beginElement();
			handlePress();
		}
	};
</script>

<svg viewBox="0 0 100 80">
	<defs>
		<g id="press-enter-keycap">
			<path
				fill="hsl(0, 0%, 69%)"
				stroke="hsl(0, 0%, 69%)"
				d="M 0 1.5 h -2 a 2 2 0 0 0 -2 2 v 2 a 2 2 0 0 0 2 2 h 2 2 a 2 2 0 0 0 2 -2 v -2 a 2 2 0 0 0 -2 -2z"
			/>
			<path
				fill="hsl(0, 0%, 75%)"
				stroke="hsl(0, 0%, 75%)"
				d="M 0 0 h -2 a 2 2 0 0 0 -2 2 v 2 a 2 2 0 0 0 2 2 h 2 2 a 2 2 0 0 0 2 -2 v -2 a 2 2 0 0 0 -2 -2z"
			/>
		</g>
	</defs>

	<g transform="translate(50 10)">
		{#if smile}
			<g
				in:fly={{ y: 3, duration: 250, delay: 150 }}
				out:fly={{ y: -1, delay: 800 }}
				on:introend={handleClear}
			>
				<g transform="translate(-30 0)">
					<rect fill="hsl(0, 0%, 23%)" width="60" height="18" rx="9" />
					<g transform="translate(9 9)">
						<g in:fly={{ y: 2, easing: backOut, duration: 500, delay: 150 }}>
							<circle fill="hsl(42, 78%, 60%)" r="5.5" />
							<g fill="hsl(43, 86%, 17%)">
								<circle r="1.1" cx="-2" cy="-1.8" />
								<circle r="1.1" cx="2" cy="-1.8" />
								<path
									stroke="hsl(43, 86%, 17%)"
									stroke-linejoin="round"
									stroke-linecap="round"
									d="M 0 1 h -2 a 2 2 0 0 0 4 0z"
								/>
							</g>
						</g>
					</g>
					<g transform="translate(18 9)">
						<g
							transform="translate(0 4)"
							font-size="11"
							font-family="sans-serif"
							fill="hsl(0, 0%, 81%)"
							font-weight="700"
							stroke-linejoin="round"
							stroke-linecap="round"
						>
							<text textLength="36">SMIL!</text>
						</g>
					</g>
				</g>
			</g>
		{/if}
	</g>

	<g transform="translate(50 40)">
		<g
			class="keyboard"
			bind:this={keyboard}
			tabindex="0"
			role="menubar"
			aria-label="Press enter to smile"
			on:keydown={handleKeydown}
		>
			<g transform="translate(-20 0)">
				<g fill="currentColor" stroke="currentColor" stroke-linejoin="round">
					<g stroke-width="6">
						<path
							fill="hsl(0, 0%, 81%)"
							stroke="hsl(0, 0%, 81%)"
							d="M 1.5 1.5 h -2 -2 a 2 2 0 0 0 -2 2 v 23.5 a 2 2 0 0 0 2 2 h 45 a 2 2 0 0 0 2 -2 v -23.5 a 2 2 0 0 0 -2 -2z"
						/>
						<path
							fill="hsl(0, 0%, 88%)"
							stroke="hsl(0, 0%, 88%)"
							d="M 1.5 -0.5 h -2 -2 a 2 2 0 0 0 -2 2 v 23.5 a 2 2 0 0 0 2 2 h 45 a 2 2 0 0 0 2 -2 v -23.5 a 2 2 0 0 0 -2 -2z"
						/>
					</g>

					<g>
						<use href="#press-enter-keycap" />
						<use href="#press-enter-keycap" x="10" />
						<use href="#press-enter-keycap" x="20" />

						<g transform="translate(30 0)">
							<path
								fill="hsl(42, 63%, 48%)"
								stroke="hsl(42, 63%, 48%)"
								d="M 0 1.5 h -2 a 2 2 0 0 0 -2 2 v 2 a 2 2 0 0 0 2 2 h 2 2 2 a 2 2 0 0 1 2 2 v 1.5 2 2 a 2 2 0 0 0 2 2 h 2 2 a 2 2 0 0 0 2 -2 v -2 -2 -1.5 -2 -2 -2 a 2 2 0 0 0 -2 -2z"
							/>
							<path
								on:click={handlePress}
								on:keydown
								style="cursor: pointer;"
								fill="hsl(42, 78%, 60%)"
								stroke="hsl(42, 78%, 60%)"
								d="M 0 0 h -2 a 2 2 0 0 0 -2 2 v 2 a 2 2 0 0 0 2 2 h 2 2 2 a 2 2 0 0 1 2 2 v 1.5 2 2 a 2 2 0 0 0 2 2 h 2 2 a 2 2 0 0 0 2 -2 v -2 -2 -1.5 -2 -2 -2 a 2 2 0 0 0 -2 -2z"
							>
								<animateTransform
									attributeName="transform"
									type="translate"
									values="0 0; 0 1; 0 0"
									begin="click"
									dur="0.35s"
									restart="whenNotActive"
									calcMode="spline"
									keySplines="0.5 0 0.5 1; 0.5 0 0.5 1;"
									keyTimes="0; 0.4; 1"
								/>
							</path>
						</g>
					</g>

					<g transform="translate(0 9.5)">
						<use href="#press-enter-keycap" />
						<use href="#press-enter-keycap" x="10" />
						<use href="#press-enter-keycap" x="20" />
						<use href="#press-enter-keycap" x="30" />
					</g>

					<g transform="translate(0 19)">
						<use href="#press-enter-keycap" />
						<use href="#press-enter-keycap" x="10" />
						<use href="#press-enter-keycap" x="20" />
						<use href="#press-enter-keycap" x="30" />
						<use href="#press-enter-keycap" x="40" />
					</g>
				</g>
			</g>
		</g>
	</g>
</svg>

<style>
	svg {
		display: block;
	}

	.keyboard:focus {
		outline-color: hsl(0, 0%, 23%);
		outline-offset: 2px;
	}

	.keyboard:focus:not(:focus-visible) {
		outline: none;
	}
</style>
