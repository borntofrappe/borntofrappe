<script>
	let checked = true;
</script>

<div>
	<form on:submit|preventDefault>
		<label>
			<svg viewBox="0 0 16 16" width="1em" height="1em" shape-rendering="crispEdges">
				<g>
					<g fill="#0c1019">
						<rect x="5" width="7" height="1" />
						<rect x="3" y="1" width="2" height="1" />
						<rect x="12" y="1" width="1" height="5" />
						<rect x="1" y="2" width="2" height="1" />
						<rect x="3" y="3" width="1" height="1" />
						<rect x="4" y="4" width="1" height="1" />
						<rect x="7" y="4" width="1" height="2" />
						<rect x="10" y="4" width="1" height="2" />
						<rect x="5" y="5" width="1" height="2" />
						<rect x="13" y="6" width="1" height="2" />
						<rect x="2" y="7" width="3" height="1" />
						<rect x="2" y="8" width="2" height="1" />
						<rect x="14" y="8" width="1" height="6" />
						<rect x="1" y="9" width="1" height="2" />
						<rect x="4" y="9" width="1" height="2" />
						<rect x="2" y="11" width="1" height="5" />
						<rect x="3" y="11" width="1" height="2" />
						<rect x="4" y="13" width="1" height="2" />
						<rect x="13" y="14" width="1" height="1" />
						<rect x="6" y="15" width="2" height="1" />
						<rect x="10" y="15" width="2" height="1" />
					</g>

					<g fill="#101cae">
						<rect x="5" y="1" width="7" height="1" />
						<rect x="3" y="2" width="9" height="1" />
						<rect x="4" y="3" width="3" height="1" />
						<rect x="8" y="3" width="2" height="1" />
						<rect x="11" y="3" width="1" height="1" />
						<rect x="5" y="4" width="1" height="1" />
						<rect x="8" y="6" width="2" height="1" />
						<rect x="12" y="6" width="1" height="1" />
						<rect x="5" y="7" width="3" height="1" />
						<rect x="10" y="7" width="3" height="1" />
						<rect x="4" y="8" width="2" height="1" />
						<rect x="12" y="8" width="2" height="1" />
						<rect x="5" y="9" width="2" height="1" />
						<rect x="11" y="9" width="3" height="1" />
						<rect x="5" y="10" width="3" height="1" />
						<rect x="11" y="10" width="3" height="1" />
						<rect x="4" y="11" width="5" height="1" />
						<rect x="10" y="11" width="4" height="1" />
						<rect x="4" y="12" width="10" height="1" />
						<rect x="5" y="13" width="9" height="1" />
						<rect x="7" y="14" width="6" height="1" />
					</g>
					<g fill="#f8fefc">
						<rect x="7" y="3" width="1" height="1" />
						<rect x="10" y="3" width="1" height="1" />
						<rect x="6" y="4" width="1" height="3" />
						<rect x="8" y="4" width="2" height="2" />
						<rect x="11" y="4" width="1" height="3" />
						<rect x="7" y="6" width="1" height="1" />
						<rect x="10" y="6" width="1" height="1" />
						<rect x="8" y="7" width="2" height="1" />
						<rect x="6" y="8" width="6" height="1" />
						<rect x="2" y="9" width="2" height="2" />
						<rect x="7" y="9" width="4" height="1" />
						<rect x="8" y="10" width="3" height="1" />
						<rect x="9" y="11" width="1" height="1" />
						<rect x="5" y="14" width="2" height="1" />
					</g>
				</g>
			</svg>

			<input type="checkbox" bind:checked />
			<span>Talk</span>
		</label>
	</form>
	<p>Begone you fool!</p>
</div>

<style>
	div {
		display: inline-flex;
		flex-direction: column-reverse;
		gap: 1rem;
	}

	svg {
		width: 100%;
		height: auto;
		max-width: 80px;
	}

	p {
		line-height: initial;
		padding: 0.35rem 0.5rem;
		border: 0.2rem solid currentColor;
		border-radius: 0.25rem;
	}

	input {
		accent-color: currentColor;
		width: 1rem;
		height: 1rem;
	}
</style>
