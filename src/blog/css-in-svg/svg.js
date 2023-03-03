export default {
	rocket:
		'<svg viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"><g transform="rotate(45)"><g stroke-width="7"><path d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /><path transform="scale(-1 1)" d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /><path d="M 0 24 c -10 5 -12 16 0 22.5 12 -6.5 10 -17.5 0 -22.5" /><circle r="9" cy="-11" /></g><path stroke-width="8" d="M 0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" /></g></g></svg>',
	butterfly: `<svg viewBox="-45 -45 90 80">
		<g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<g fill="currentColor" stroke="currentColor">
				<path d="M 0 -22 q 10 30 0 48 -10 -18 0 -48" />
			</g>
			<g fill="var(--wings-fill, #233887)" stroke="var(--wings-stroke, #1c1f62)">
				<path d="M 0 0 c 0 -40 -40 -40 -40 -40 0 40 0 40 40 40 -30 0 -30 0 -30 30 30 0 30 0 30 -30" />
				<path
					transform="scale(-1 1)"
					d="M 0 0 c 0 -40 -40 -40 -40 -40 0 40 0 40 40 40 -30 0 -30 0 -30 30 30 0 30 0 30 -30"
				/>
			</g>
			<g fill="var(--upper-dots-fill, #e89d38)" stroke="var(--upper-dots-stroke, #e2be80)">
				<circle r="8" cx="22" cy="-18" />
				<circle r="8" cx="-22" cy="-18" />
			</g>
			<g fill="var(--lower-dots-fill, #3fb38e)" stroke="var(--lower-dots-stroke, #3c8b98)">
				<circle r="6" cx="-15" cy="15" />
				<circle r="6" cx="15" cy="15" />
			</g>
		</g>
	</svg>`
};
