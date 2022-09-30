<script>
	const columns = 10;
	const rows = 7;

	const column = Math.floor(Math.random() * columns);
	const row = Math.floor(Math.random() * rows);
</script>

<svg viewBox="0 0 {columns} {rows}" shape-rendering="crispEdges">
	<defs>
		<symbol id="dragon-warrior-hero" viewBox="0 0 32 16">
			<g>
				<g fill="#0c1019">
					<rect width="1" height="3" />
					<rect x="1" width="1" height="1" />
					<rect x="5" width="6" height="1" />
					<rect x="14" width="1" height="1" />
					<rect x="15" width="1" height="3" />
					<rect x="2" y="1" width="4" height="1" />
					<rect x="10" y="1" width="4" height="1" />
					<rect x="4" y="2" width="1" height="1" />
					<rect x="11" y="2" width="1" height="1" />
					<rect x="1" y="3" width="3" height="1" />
					<rect x="12" y="3" width="1" height="1" />
					<rect x="14" y="3" width="1" height="1" />
					<rect x="1" y="4" width="1" height="4" />
					<rect x="3" y="4" width="2" height="1" />
					<rect x="11" y="4" width="3" height="1" />
					<rect x="3" y="5" width="1" height="4" />
					<rect x="5" y="5" width="6" height="1" />
					<rect x="12" y="5" width="1" height="3" />
					<rect x="6" y="6" width="1" height="2" />
					<rect x="9" y="6" width="1" height="2" />
					<rect y="8" width="2" height="1" />
					<rect x="4" y="8" width="1" height="1" />
					<rect x="8" y="8" width="7" height="1" />
					<rect y="9" width="1" height="3" />
					<rect x="4" y="9" width="2" height="1" />
					<rect x="8" y="9" width="1" height="1" />
					<rect x="14" y="9" width="1" height="2" />
					<rect x="1" y="10" width="3" height="1" />
					<rect x="8" y="10" width="1" height="1" />
					<rect x="3" y="11" width="4" height="1" />
					<rect x="8" y="11" width="2" height="1" />
					<rect x="13" y="11" width="2" height="1" />
					<rect x="1" y="12" width="2" height="1" />
					<rect x="4" y="12" width="1" height="2" />
					<rect x="9" y="12" width="2" height="1" />
					<rect x="12" y="12" width="2" height="1" />
					<rect y="13" width="1" height="1" />
					<rect x="2" y="13" width="1" height="1" />
					<rect x="10" y="13" width="3" height="1" />
					<rect x="14" y="13" width="1" height="1" />
					<rect x="3" y="14" width="5" height="1" />
					<rect x="11" y="14" width="1" height="1" />
					<rect x="3" y="15" width="1" height="1" />
					<rect x="8" y="15" width="4" height="1" />
				</g>
				<g fill="#f5be86">
					<rect x="1" y="1" width="1" height="2" />
					<rect x="6" y="1" width="4" height="1" />
					<rect x="14" y="1" width="1" height="2" />
					<rect x="2" y="2" width="2" height="1" />
					<rect x="5" y="2" width="1" height="1" />
					<rect x="10" y="2" width="1" height="1" />
					<rect x="12" y="2" width="2" height="1" />
					<rect x="4" y="3" width="1" height="1" />
					<rect x="11" y="3" width="1" height="1" />
					<rect x="13" y="3" width="1" height="1" />
					<rect x="2" y="4" width="1" height="5" />
					<rect x="5" y="4" width="6" height="1" />
					<rect x="5" y="6" width="1" height="2" />
					<rect x="7" y="6" width="2" height="2" />
					<rect x="10" y="6" width="1" height="2" />
					<rect x="6" y="8" width="2" height="1" />
					<rect x="1" y="9" width="3" height="1" />
					<rect x="9" y="9" width="2" height="1" />
					<rect x="12" y="9" width="2" height="1" />
					<rect x="10" y="10" width="3" height="1" />
					<rect x="1" y="11" width="2" height="1" />
					<rect x="7" y="11" width="1" height="1" />
					<rect x="11" y="11" width="1" height="2" />
					<rect x="3" y="12" width="1" height="2" />
					<rect x="1" y="13" width="1" height="1" />
					<rect x="13" y="13" width="1" height="1" />
					<rect y="14" width="3" height="1" />
					<rect x="12" y="14" width="3" height="1" />
					<rect x="4" y="15" width="4" height="1" />
				</g>
				<g fill="#035f90">
					<rect x="6" y="2" width="4" height="1" />
					<rect x="5" y="3" width="6" height="1" />
					<rect x="4" y="5" width="1" height="3" />
					<rect x="11" y="5" width="1" height="3" />
					<rect x="5" y="8" width="1" height="1" />
					<rect x="6" y="9" width="2" height="1" />
					<rect x="11" y="9" width="1" height="1" />
					<rect x="4" y="10" width="4" height="1" />
					<rect x="9" y="10" width="1" height="1" />
					<rect x="13" y="10" width="1" height="1" />
					<rect x="10" y="11" width="1" height="1" />
					<rect x="12" y="11" width="1" height="1" />
					<rect x="5" y="12" width="4" height="1" />
					<rect x="5" y="13" width="5" height="1" />
					<rect x="8" y="14" width="3" height="1" />
				</g>
			</g>
			<g transform="translate(16 0)">
				<g fill="#0c1019">
					<rect width="1" height="3" />
					<rect x="1" width="1" height="1" />
					<rect x="5" width="6" height="1" />
					<rect x="14" width="1" height="1" />
					<rect x="15" width="1" height="3" />
					<rect x="2" y="1" width="4" height="1" />
					<rect x="10" y="1" width="4" height="1" />
					<rect x="1" y="2" width="1" height="1" />
					<rect x="4" y="2" width="1" height="1" />
					<rect x="11" y="2" width="1" height="1" />
					<rect x="1" y="3" width="3" height="1" />
					<rect x="12" y="3" width="1" height="1" />
					<rect x="14" y="3" width="1" height="1" />
					<rect x="1" y="4" width="1" height="3" />
					<rect x="3" y="4" width="2" height="1" />
					<rect x="11" y="4" width="3" height="1" />
					<rect x="3" y="5" width="1" height="2" />
					<rect x="5" y="5" width="6" height="1" />
					<rect x="12" y="5" width="1" height="3" />
					<rect x="4" y="6" width="1" height="2" />
					<rect x="6" y="6" width="1" height="2" />
					<rect x="9" y="6" width="1" height="2" />
					<rect y="7" width="1" height="1" />
					<rect y="8" width="5" height="1" />
					<rect x="10" y="8" width="2" height="1" />
					<rect y="9" width="1" height="1" />
					<rect x="3" y="9" width="3" height="1" />
					<rect x="8" y="9" width="7" height="1" />
					<rect x="1" y="10" width="1" height="1" />
					<rect x="3" y="10" width="1" height="1" />
					<rect x="8" y="10" width="1" height="1" />
					<rect x="14" y="10" width="1" height="1" />
					<rect x="2" y="11" width="5" height="1" />
					<rect x="8" y="11" width="1" height="1" />
					<rect x="14" y="11" width="1" height="1" />
					<rect x="1" y="12" width="1" height="2" />
					<rect x="4" y="12" width="1" height="3" />
					<rect x="8" y="12" width="2" height="1" />
					<rect x="13" y="12" width="3" height="1" />
					<rect x="9" y="13" width="2" height="1" />
					<rect x="12" y="13" width="2" height="1" />
					<rect y="14" width="1" height="1" />
					<rect x="8" y="14" width="6" height="1" />
					<rect x="4" y="15" width="4" height="1" />
					<rect x="12" y="15" width="1" height="1" />
				</g>
				<g fill="#f5be86">
					<rect x="1" y="1" width="1" height="1" />
					<rect x="6" y="1" width="4" height="1" />
					<rect x="14" y="1" width="1" height="2" />
					<rect x="2" y="2" width="2" height="1" />
					<rect x="5" y="2" width="1" height="1" />
					<rect x="10" y="2" width="1" height="1" />
					<rect x="12" y="2" width="2" height="1" />
					<rect x="4" y="3" width="1" height="1" />
					<rect x="11" y="3" width="1" height="1" />
					<rect x="13" y="3" width="1" height="1" />
					<rect x="2" y="4" width="1" height="3" />
					<rect x="5" y="4" width="6" height="1" />
					<rect x="5" y="6" width="1" height="2" />
					<rect x="7" y="6" width="2" height="2" />
					<rect x="10" y="6" width="1" height="2" />
					<rect x="1" y="7" width="3" height="1" />
					<rect x="6" y="8" width="4" height="1" />
					<rect x="1" y="9" width="2" height="1" />
					<rect x="9" y="10" width="2" height="1" />
					<rect x="2" y="10" width="1" height="1" />
					<rect x="12" y="10" width="2" height="1" />
					<rect x="10" y="11" width="3" height="1" />
					<rect x="7" y="11" width="1" height="1" />
					<rect x="2" y="12" width="2" height="2" />
					<rect x="11" y="12" width="1" height="2" />
					<rect x="14" y="13" width="2" height="1" />
					<rect x="1" y="14" width="3" height="1" />
					<rect x="14" y="14" width="1" height="1" />
					<rect x="8" y="15" width="4" height="1" />
				</g>
				<g fill="#035f90">
					<rect x="6" y="2" width="4" height="1" />
					<rect x="5" y="3" width="6" height="1" />
					<rect x="4" y="5" width="1" height="1" />
					<rect x="11" y="5" width="1" height="3" />
					<rect x="5" y="8" width="1" height="1" />
					<rect x="6" y="9" width="2" height="1" />
					<rect x="11" y="10" width="1" height="1" />
					<rect x="4" y="10" width="4" height="1" />
					<rect x="9" y="11" width="1" height="1" />
					<rect x="13" y="11" width="1" height="1" />
					<rect x="5" y="12" width="3" height="1" />
					<rect x="10" y="12" width="1" height="1" />
					<rect x="12" y="12" width="1" height="1" />
					<rect x="5" y="13" width="4" height="1" />
					<rect x="5" y="14" width="3" height="1" />
				</g>
			</g>
		</symbol>

		<symbol id="dragon-warrior-swamp" viewBox="0 0 16 8">
			<g fill="#0c1019">
				<rect y="1" width="16" height="1" />
				<rect y="3" width="16" height="1" />
				<rect y="5" width="16" height="1" />
				<rect y="7" width="16" height="1" />
				<rect width="1" height="1" />
				<rect x="6" width="1" height="1" />
				<rect x="9" width="2" height="1" />
				<rect x="15" width="1" height="1" />
				<rect y="8" width="1" height="1" />
				<rect x="3" y="2" width="1" height="1" />
				<rect x="8" y="2" width="1" height="1" />
				<rect x="12" y="2" width="2" height="1" />
				<rect y="4" width="2" height="1" />
				<rect x="5" y="4" width="1" height="1" />
				<rect x="10" y="4" width="1" height="1" />
				<rect y="12" width="2" height="1" />
				<rect x="2" y="6" width="2" height="1" />
				<rect x="8" y="6" width="1" height="1" />
				<rect x="13" y="6" width="2" height="1" />
			</g>
			<g fill="#9d0542">
				<rect x="1" width="1" height="1" />
				<rect x="5" width="1" height="1" />
				<rect x="7" width="2" height="1" />
				<rect x="11" width="1" height="1" />
				<rect x="14" width="1" height="1" />
				<rect x="2" y="2" width="1" height="1" />
				<rect x="4" y="2" width="1" height="1" />
				<rect x="7" y="2" width="1" height="1" />
				<rect x="9" y="2" width="1" height="1" />
				<rect x="11" y="2" width="1" height="1" />
				<rect x="14" y="2" width="1" height="1" />
				<rect x="2" y="4" width="1" height="1" />
				<rect x="4" y="4" width="1" height="1" />
				<rect x="6" y="4" width="1" height="1" />
				<rect x="9" y="4" width="1" height="1" />
				<rect x="11" y="4" width="1" height="1" />
				<rect x="15" y="4" width="1" height="1" />
				<rect x="1" y="6" width="1" height="1" />
				<rect x="4" y="6" width="1" height="1" />
				<rect x="7" y="6" width="1" height="1" />
				<rect x="9" y="6" width="1" height="1" />
				<rect x="12" y="6" width="1" height="1" />
				<rect x="15" y="6" width="1" height="1" />
			</g>
			<g fill="#fd5a39">
				<rect x="2" width="3" height="1" />
				<rect x="12" width="2" height="1" />
				<rect y="2" width="2" height="1" />
				<rect x="5" y="2" width="2" height="1" />
				<rect x="10" y="2" width="1" height="1" />
				<rect x="15" y="2" width="1" height="1" />
				<rect x="3" y="4" width="1" height="1" />
				<rect x="7" y="4" width="2" height="1" />
				<rect x="12" y="4" width="3" height="1" />
				<rect y="6" width="1" height="1" />
				<rect x="5" y="6" width="2" height="1" />
				<rect x="10" y="6" width="2" height="1" />
			</g>
		</symbol>

		<symbol id="dragon-warrior-loto-seal" viewBox="0 0 10 10">
			<g fill="#0c1019">
				<rect x="4" width="4" height="1" />
				<rect x="2" y="1" width="2" height="1" />
				<rect x="8" y="1" width="1" height="1" />
				<rect x="1" y="2" width="1" height="2" />
				<rect x="9" y="2" width="1" height="5" />
				<rect y="4" width="1" height="4" />
				<rect x="3" y="5" width="1" height="1" />
				<rect x="8" y="5" width="1" height="2" />
				<rect x="1" y="7" width="1" height="1" />
				<rect x="6" y="7" width="3" height="1" />
				<rect x="1" y="8" width="7" height="1" />
				<rect x="2" y="9" width="4" height="1" />
			</g>
			<g fill="#c38900">
				<rect x="4" y="1" width="1" height="1" />
				<rect x="6" y="1" width="2" height="1" />
				<rect x="6" y="2" width="3" height="1" />
				<rect x="2" y="3" width="2" height="1" />
				<rect x="5" y="3" width="1" height="1" />
				<rect x="8" y="3" width="1" height="1" />
				<rect x="4" y="4" width="1" height="1" />
				<rect x="7" y="4" width="1" height="3" />
				<rect x="1" y="5" width="1" height="2" />
				<rect x="5" y="5" width="1" height="3" />
				<rect x="2" y="7" width="2" height="1" />
			</g>
			<g fill="#ffb700">
				<rect x="5" y="1" width="1" height="1" />
				<rect x="2" y="2" width="4" height="1" />
				<rect x="4" y="3" width="1" height="1" />
				<rect x="6" y="3" width="2" height="1" />
				<rect x="1" y="4" width="3" height="1" />
				<rect x="5" y="4" width="2" height="1" />
				<rect x="8" y="4" width="1" height="1" />
				<rect x="2" y="5" width="1" height="1" />
				<rect x="4" y="5" width="1" height="1" />
				<rect x="6" y="5" width="1" height="1" />
				<rect x="2" y="6" width="3" height="1" />
				<rect x="6" y="6" width="1" height="1" />
				<rect x="4" y="7" width="1" height="1" />
			</g>
		</symbol>

		<pattern
			id="dragon-warrior-pattern-swamp"
			viewBox="0 0 16 16"
			patternUnits="userSpaceOnUse"
			width="1"
			height="1"
		>
			<svg width="16" height="8">
				<use href="#dragon-warrior-swamp" />
			</svg>
			<svg y="8" width="16" height="8">
				<use href="#dragon-warrior-swamp" />
			</svg>
		</pattern>
	</defs>

	<rect width={columns} height={rows} fill="url(#dragon-warrior-pattern-swamp)" />

	<!-- HIDE LOTO SEAL -->
	<g transform="translate({column} {row})">
		<svg width="1" height="1">
			<use href="#dragon-warrior-loto-seal" />
		</svg>
	</g>

	<!-- REMOVE GRID LINES -->
	<g fill="none" stroke="#ffffff" stroke-width="0.05">
		{#each Array(rows) as _, i}
			<path d="M 0 {i} h {columns}" />
		{/each}
		{#each Array(columns) as _, i}
			<path d="M {i} 0 v {rows}" />
		{/each}
	</g>
</svg>
