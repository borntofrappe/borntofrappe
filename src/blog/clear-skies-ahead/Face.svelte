<script>
	export let trueColors = false;
</script>

<svg viewBox="-50 -50 100 100">
	<defs>
		<circle id="face-c" r="11" />
		<mask id="face-mask">
			<use fill="white" href="#face-c" />
			<use fill="black" y="-2" href="#face-c" />
		</mask>
		<g id="face-cc">
			<use href="#face-c" />
			<use href="#face-c" mask="url(#face-mask)" fill="black" opacity="0.1" />
		</g>
	</defs>

	<g fill="#ebf3f5">
		<use href="#face-c" />
		<use transform="translate(-12.5 -5)" href="#face-c" />
		<use transform="translate(12.5 -5)" href="#face-c" />
		<use transform="translate(0 -10)" href="#face-c" />
		<use transform="translate(-20 0)" href="#face-cc" />
		<use transform="translate(20 0)" href="#face-cc" />
		<use transform="translate(-15 10)" href="#face-cc" />
		<use transform="translate(15 10)" href="#face-cc" />
		<use transform="translate(0 15)" href="#face-cc" />
	</g>

	<g fill="#acacfa">
		<g transform="translate(10 -2.5)">
			<circle r="2.5" />
		</g>
		<g transform="translate(-10 -2.5)">
			<circle r="2.5" />
		</g>

		<g
			fill="#acacfa"
			stroke="#acacfa"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<g transform="translate(0 8)">
				<path d="M -2 0 h 4" />
				{#if trueColors}
					<path d="M -2 0 v 2 a 2 2 0 0 0 4 0 v -2z" />
				{/if}
			</g>
		</g>
	</g>

	{#if trueColors}
		<g fill="#f9a3c6">
			<g transform="translate(10 2.5)">
				<ellipse rx="2.5" ry="1.4" />
			</g>
			<g transform="translate(-10 2.5)">
				<ellipse rx="2.5" ry="1.4" />
			</g>
		</g>
	{/if}
</svg>
