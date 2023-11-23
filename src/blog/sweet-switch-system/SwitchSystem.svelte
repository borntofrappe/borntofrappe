<script>
	import data from './data.js';
</script>

<svg viewBox="-2.5 -19.04204750061035 146.1881103515625 24.337772369384766">
	<title>What's on the menu?</title>
	<switch>
		{#each data as { systemLanguage, flag, dessert }}
			<g {systemLanguage}>
				<text font-family="sans-serif" font-size="20" fill="currentColor">
					<tspan font-size="10">{flag}</tspan>
					{dessert}
				</text>
			</g>
		{/each}
		<g>
			<text font-family="sans-serif" font-size="20" fill="currentColor">
				<tspan font-size="10">🇪🇺</tspan>
				Sweet Europe
			</text>
		</g>
	</switch>
</svg>
