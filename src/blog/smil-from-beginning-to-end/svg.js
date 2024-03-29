export default {
	'jump-hero': `<svg display="block" viewBox="0 0 80 50">
	<title>A boxed hero ready to jump</title>
	<defs>
		<pattern
			id="jump-hero-pattern-check"
			viewBox="0 0 2 2"
			width="10"
			height="10"
			patternUnits="userSpaceOnUse"
		>
			<rect width="2" height="2" fill="hsl(0, 0%, 86%)" />
			<g fill="hsl(0, 0%, 84%)">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>
		<symbol id="jump-hero-hero" viewBox="-5.4 -5.4 10.8 10.8">
			<g stroke="hsl(0, 0%, 20%)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round">
				<rect fill="hsl(0, 0%, 97%)" x="-5" y="-5" width="10" height="10" rx="1" />
				<path d="M -2 -2.5 v 2 M 2 -2.5 v 2 M -1.5 2 q 1.5 1 3 0" />
			</g>
		</symbol>
	</defs>
	<rect width="80" height="50" fill="url(#jump-hero-pattern-check)" />
	<g transform="translate(0 30)">
		<g fill="none" stroke="hsl(0, 0%, 20%)" stroke-linecap="round">
			<path stroke-width="0.25" d="M 0 7.75 l 80 0" />
			<path stroke-width="0.5" d="M 0 0 c 20 10 60 10 80 0" />
		</g>
	</g>
	<g transform="translate(40 37.75)">
		<use href="#jump-hero-hero" x="-4" y="-8" width="8" height="8" />
	</g>
</svg>`
};
