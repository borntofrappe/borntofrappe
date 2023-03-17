<script>
	const id = Math.random().toString().slice(-4);

	const value = `#dice-${Math.floor(Math.random() * 6) + 1}`;
	$: values = [
		...Array(28)
			.fill()
			.map((_, i) => `#roll-${i + 1}`),
		value
	].join(';');
</script>

<svg style="display: block;" viewBox="0 0 1 3">
	<g>
		<animateTransform
			id="roll{id}"
			begin="click"
			restart="never"
			attributeName="transform"
			type="translate"
			values="0 0; 0 -2; 0 0; 0 -1.4; 0 0; 0 -0.6; 0 0"
			dur="1.8s"
			calcMode="spline"
			keySplines="0.2 0 0.5 1; 0.75 0 0.75 1; 0.3 0 0.5 1; 0.75 0 0.75 1; 0.4 0 0.5 1; 0.75 0 0.75 1"
		/>
		<use href="#roll-1" y="2" width="1" height="1">
			<animate begin="roll{id}.begin" attributeName="href" {values} dur="1.8s" fill="freeze" />
		</use>
	</g>
</svg>
