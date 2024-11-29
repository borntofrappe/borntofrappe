<script>
	export let offset = 0;
</script>

<svg style="display: block;" viewBox="-50 -50 100 100">
	<circle r="28" fill="#ffdb47" />
	<g fill="#ff877a">
		<g transform="translate(0 5)">
			<circle r="4" cx="-9" />
			<circle r="4" cx="9" />
		</g>
		<g transform="translate(0 6)">
			<g stroke="#ff877a" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
				<path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
			</g>
		</g>
	</g>

	<g transform="translate(0 {offset})">
		<g fill="#38311e" stroke="#ffdb47" stroke-width="1">
			<circle r="2" cx="-5" />
			<circle r="2" cx="5" />
		</g>
	</g>
</svg>
