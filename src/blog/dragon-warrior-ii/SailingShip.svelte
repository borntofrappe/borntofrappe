<script>
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';

	const RESOLUTION = 16;
	const columns = 9;
	const rows = 7;

	const width = RESOLUTION * columns;
	const height = RESOLUTION * rows;

	const directions = {
		u: {
			hrefs: ['#boat-u-0', '#boat-u-1'],
			update: { x: 0, y: RESOLUTION }
		},
		r: {
			hrefs: ['#boat-r-0', '#boat-r-1'],
			update: { x: RESOLUTION * -1, y: 0 }
		},
		d: {
			hrefs: ['#boat-d-0', '#boat-d-1'],
			update: { x: 0, y: RESOLUTION * -1 }
		},
		l: {
			hrefs: ['#boat-l-0', '#boat-l-1'],
			update: { x: RESOLUTION, y: 0 }
		}
	};

	const keys = {
		ArrowUp: 'u',
		ArrowRight: 'r',
		ArrowDown: 'd',
		ArrowLeft: 'l'
	};

	const duration = 600;
	const camera = tweened(
		{
			x: 0,
			y: 0
		},
		{ duration, easing: linear }
	);

	let boat;
	let sea;
	const dur = `${duration / 2 / 1000}s`;
	const x = Math.floor(columns / 2) * RESOLUTION;
	const y = Math.floor(rows / 2) * RESOLUTION;

	let selection = null;
	let isMoving = false;
	const move = async (direction = 'd') => {
		if (isMoving) return;

		isMoving = true;

		const { hrefs, update } = directions[direction];

		const { x, y } = $camera;
		const { x: ux, y: uy } = update;

		boat.setAttribute('href', hrefs[0]);
		const animate = boat.querySelector('animate');
		animate.setAttribute('values', hrefs.join(';'));
		animate.beginElement();

		await camera.set({
			x: x + ux,
			y: y + uy
		});

		camera.set({ x, y }, { duration: 0 });

		if (selection) {
			const direction = selection;
			selection = null;
			isMoving = false;
			move(direction);
		} else {
			isMoving = false;
		}
	};

	const handleKeydown = (e) => {
		const direction = keys[e.key];

		if (direction) {
			e.preventDefault();
			if (isMoving) {
				selection = direction;
			} else {
				move(direction);
			}
		}
	};

	const handlePad = (direction = 'd') => {
		if (isMoving) {
			selection = direction;
		} else {
			move(direction);
		}
	};

	const handleFocus = () => {
		sea.querySelector('animateTransform').beginElement();
	};
	const handleBlur = () => {
		sea.querySelector('animateTransform').endElement();
	};
</script>

<svg style="width: 0; height: 0; position: absolute;" aria-hidden="true">
	<defs>
		<rect id="p" width="1" height="1" />
		<symbol shape-rendering="crispEdges" id="sea" viewBox="0 0 16 16">
			<rect width="16" height="16" fill="#005ab7" />
			<g fill="#1091f6">
				<use href="#p" x="1" />
				<use href="#p" x="2" />
				<use href="#p" x="3" />
				<use href="#p" x="7" />
				<use href="#p" x="8" />
				<use href="#p" x="9" />
				<use href="#p" x="10" />
				<use href="#p" y="1" />
				<use href="#p" x="3" y="1" />
				<use href="#p" x="6" y="1" />
				<use href="#p" x="10" y="1" />
				<use href="#p" x="14" y="1" />
				<use href="#p" x="15" y="1" />
				<use href="#p" x="4" y="2" />
				<use href="#p" x="5" y="2" />
				<use href="#p" x="11" y="2" />
				<use href="#p" x="12" y="2" />
				<use href="#p" x="13" y="2" />
				<use href="#p" x="14" y="2" />
				<use href="#p" x="3" y="3" />
				<use href="#p" x="7" y="3" />
				<use href="#p" x="8" y="3" />
				<use href="#p" x="9" y="3" />
				<use href="#p" x="10" y="3" />
				<use href="#p" x="13" y="3" />
				<use href="#p" x="2" y="4" />
				<use href="#p" x="3" y="4" />
				<use href="#p" x="6" y="4" />
				<use href="#p" x="7" y="4" />
				<use href="#p" x="10" y="4" />
				<use href="#p" x="14" y="4" />
				<use href="#p" x="1" y="5" />
				<use href="#p" x="4" y="5" />
				<use href="#p" x="5" y="5" />
				<use href="#p" x="10" y="5" />
				<use href="#p" x="13" y="5" />
				<use href="#p" x="15" y="5" />
				<use href="#p" y="6" />
				<use href="#p" x="5" y="6" />
				<use href="#p" x="10" y="6" />
				<use href="#p" x="11" y="6" />
				<use href="#p" x="4" y="7" />
				<use href="#p" x="8" y="7" />
				<use href="#p" x="9" y="7" />
				<use href="#p" x="12" y="7" />
				<use href="#p" x="15" y="7" />
				<use href="#p" y="8" />
				<use href="#p" x="1" y="8" />
				<use href="#p" x="2" y="8" />
				<use href="#p" x="3" y="8" />
				<use href="#p" x="10" y="8" />
				<use href="#p" x="11" y="8" />
				<use href="#p" x="12" y="8" />
				<use href="#p" x="15" y="8" />
				<use href="#p" x="3" y="9" />
				<use href="#p" x="7" y="9" />
				<use href="#p" x="8" y="9" />
				<use href="#p" x="9" y="9" />
				<use href="#p" x="12" y="9" />
				<use href="#p" x="13" y="9" />
				<use href="#p" x="14" y="9" />
				<use href="#p" x="4" y="10" />
				<use href="#p" x="5" y="10" />
				<use href="#p" x="6" y="10" />
				<use href="#p" x="15" y="10" />
				<use href="#p" y="11" />
				<use href="#p" x="3" y="11" />
				<use href="#p" x="9" y="11" />
				<use href="#p" x="10" y="11" />
				<use href="#p" x="11" y="11" />
				<use href="#p" x="14" y="11" />
				<use href="#p" x="15" y="11" />
				<use href="#p" x="1" y="12" />
				<use href="#p" x="2" y="12" />
				<use href="#p" x="3" y="12" />
				<use href="#p" x="8" y="12" />
				<use href="#p" x="10" y="12" />
				<use href="#p" x="11" y="12" />
				<use href="#p" x="13" y="12" />
				<use href="#p" x="1" y="13" />
				<use href="#p" x="4" y="13" />
				<use href="#p" x="5" y="13" />
				<use href="#p" x="7" y="13" />
				<use href="#p" x="11" y="13" />
				<use href="#p" x="12" y="13" />
				<use href="#p" y="14" />
				<use href="#p" x="1" y="14" />
				<use href="#p" x="5" y="14" />
				<use href="#p" x="6" y="14" />
				<use href="#p" x="12" y="14" />
				<use href="#p" y="15" />
				<use href="#p" x="5" y="15" />
			</g>
		</symbol>

		<symbol shape-rendering="crispEdges" id="boat-d-0" viewBox="0 -0.5 16 16">
			<path
				stroke="#000000"
				d="M4 1h8M3 2h1M12 2h1M3 3h1M12 3h1M2 4h1M13 4h1M2 5h12M1 6h1M14 6h1M1 7h1M6 7h4M14 7h1M0 8h1M4 8h3M9 8h3M15 8h1M1 9h3M6 9h1M9 9h1M12 9h3M2 10h1M5 10h2M9 10h2M13 10h1M2 11h1M4 11h1M6 11h1M9 11h1M11 11h1M13 11h1M3 12h1M5 12h2M9 12h2M12 12h1M4 13h1M6 13h1M9 13h1M11 13h1"
			/>
			<path
				stroke="#ffffff"
				d="M4 2h8M5 3h6M3 4h2M6 4h4M11 4h2M3 6h10M2 7h4M10 7h4M1 8h3M12 8h3M2 12h1M13 12h1M2 13h2M12 13h2M4 14h8"
			/>
			<path
				stroke="#663931"
				d="M4 3h1M11 3h1M5 4h1M10 4h1M2 6h1M13 6h1M7 8h2M4 9h2M7 9h2M10 9h2M3 10h2M7 10h2M11 10h2M3 11h1M5 11h1M7 11h2M10 11h1M12 11h1M4 12h1M7 12h2M11 12h1M5 13h1M7 13h2M10 13h1"
			/>
		</symbol>
		<symbol shape-rendering="crispEdges" id="boat-d-1" viewBox="0 -0.5 16 16">
			<path
				stroke="#000000"
				d="M4 0h8M3 1h1M12 1h1M3 2h1M12 2h1M2 3h1M13 3h1M2 4h12M1 5h1M14 5h1M1 6h1M6 6h4M14 6h1M0 7h1M4 7h3M9 7h3M15 7h1M1 8h3M6 8h1M9 8h1M12 8h3M2 9h1M5 9h2M9 9h2M13 9h1M2 10h1M4 10h1M6 10h1M9 10h1M11 10h1M13 10h1M3 11h1M5 11h2M9 11h2M12 11h1M4 12h1M6 12h1M9 12h1M11 12h1M5 13h1M10 13h1"
			/>
			<path
				stroke="#ffffff"
				d="M4 1h8M5 2h6M3 3h2M6 3h4M11 3h2M3 5h10M2 6h4M10 6h4M1 7h3M12 7h3M2 11h1M13 11h1M1 12h3M12 12h3M3 13h2M6 13h1M9 13h1M11 13h2M3 14h3M7 14h2M10 14h2"
			/>
			<path
				stroke="#663931"
				d="M4 2h1M11 2h1M5 3h1M10 3h1M2 5h1M13 5h1M7 7h2M4 8h2M7 8h2M10 8h2M3 9h2M7 9h2M11 9h2M3 10h1M5 10h1M7 10h2M10 10h1M12 10h1M4 11h1M7 11h2M11 11h1M5 12h1M7 12h2M10 12h1M7 13h2"
			/>
		</symbol>
		<symbol shape-rendering="crispEdges" id="boat-l-0" viewBox="0 -0.5 16 16">
			<path
				stroke="#000000"
				d="M6 1h2M11 1h2M5 2h1M7 2h1M10 2h1M12 2h1M4 3h1M6 3h1M9 3h1M12 3h1M4 4h1M6 4h1M9 4h1M12 4h1M5 5h1M7 5h1M10 5h1M12 5h1M3 6h3M7 6h1M9 6h2M12 6h3M0 7h3M4 7h1M6 7h2M9 7h1M12 7h1M15 7h1M0 8h2M3 8h2M6 8h1M8 8h2M12 8h1M15 8h1M0 9h1M2 9h1M4 9h2M7 9h1M9 9h2M12 9h4M0 10h1M4 10h12M0 11h1M13 11h1M15 11h1M1 12h1M4 12h1M6 12h1M8 12h1M10 12h1M12 12h1M14 12h2M2 13h2M5 13h1M7 13h1M9 13h1M11 13h1M13 13h1M15 13h1M8 14h1M13 14h2"
			/>
			<path
				stroke="#ffffff"
				d="M6 2h1M11 2h1M5 3h1M10 3h1M5 4h1M10 4h1M6 6h1M11 6h1M5 7h1M10 7h1M5 8h1M10 8h1M6 9h1M11 9h1M0 12h1M1 13h1M1 14h6M9 14h4M15 14h1"
			/>
			<path
				stroke="#663931"
				d="M11 3h1M11 4h1M6 5h1M11 5h1M3 7h1M11 7h1M13 7h2M2 8h1M7 8h1M11 8h1M13 8h2M1 9h1M3 9h1M8 9h1M1 10h3M1 11h12M14 11h1M2 12h2M5 12h1M7 12h1M9 12h1M11 12h1M13 12h1M4 13h1M6 13h1M8 13h1M10 13h1M12 13h1M14 13h1M7 14h1"
			/>
		</symbol>
		<symbol shape-rendering="crispEdges" id="boat-l-1" viewBox="0 -0.5 16 16">
			<path
				stroke="#000000"
				d="M6 0h2M11 0h2M5 1h1M7 1h1M10 1h1M12 1h1M4 2h1M6 2h1M9 2h1M12 2h1M4 3h1M6 3h1M9 3h1M12 3h1M5 4h1M7 4h1M10 4h1M12 4h1M0 5h1M3 5h3M7 5h1M9 5h2M12 5h3M0 6h3M4 6h1M6 6h2M9 6h1M12 6h1M15 6h1M0 7h2M3 7h2M6 7h1M8 7h2M12 7h1M15 7h1M0 8h1M2 8h1M4 8h2M7 8h1M9 8h2M12 8h4M0 9h1M4 9h12M0 10h1M13 10h1M15 10h1M1 11h1M4 11h1M6 11h1M8 11h1M10 11h1M12 11h1M14 11h2M2 12h2M5 12h1M7 12h1M9 12h1M11 12h1M13 12h1M15 12h1M4 13h1M6 13h1M13 13h2M5 14h1M13 14h1"
			/>
			<path
				stroke="#ffffff"
				d="M6 1h1M11 1h1M5 2h1M10 2h1M5 3h1M10 3h1M6 5h1M11 5h1M5 6h1M10 6h1M5 7h1M10 7h1M6 8h1M11 8h1M0 11h1M1 12h1M1 13h3M5 13h1M7 13h6M15 13h1M3 14h2M6 14h2M9 14h3M14 14h2"
			/>
			<path
				stroke="#663931"
				d="M11 2h1M11 3h1M6 4h1M11 4h1M3 6h1M11 6h1M13 6h2M2 7h1M7 7h1M11 7h1M13 7h2M1 8h1M3 8h1M8 8h1M1 9h3M1 10h12M14 10h1M2 11h2M5 11h1M7 11h1M9 11h1M11 11h1M13 11h1M4 12h1M6 12h1M8 12h1M10 12h1M12 12h1M14 12h1"
			/>
		</symbol>
		<symbol shape-rendering="crispEdges" id="boat-u-0" viewBox="0 -0.5 16 16">
			<path
				stroke="#000000"
				d="M4 1h3M9 1h3M3 2h1M7 2h2M12 2h1M3 3h1M7 3h2M12 3h1M2 4h1M7 4h2M13 4h1M1 5h5M7 5h2M10 5h5M1 6h1M7 6h2M14 6h1M1 7h1M7 7h2M14 7h1M0 8h1M7 8h2M15 8h1M0 9h7M9 9h7M2 10h1M13 10h1M2 11h1M13 11h1M3 12h1M12 12h1M4 13h1M11 13h1"
			/>
			<path
				stroke="#ffffff"
				d="M4 2h1M11 2h1M4 3h3M9 3h3M3 4h3M10 4h3M6 6h1M9 6h1M2 7h5M9 7h5M1 8h6M9 8h6M1 12h2M13 12h2M2 13h2M12 13h2M3 14h3M7 14h2M10 14h3M4 15h8"
			/>
			<path
				stroke="#663931"
				d="M5 2h2M9 2h2M6 4h1M9 4h1M6 5h1M9 5h1M2 6h4M10 6h4M7 9h2M3 10h10M3 11h10M4 12h8M5 13h6M6 14h1M9 14h1"
			/>
		</symbol>
		<symbol shape-rendering="crispEdges" id="boat-u-1" viewBox="0 -0.5 16 16">
			<path
				stroke="#000000"
				d="M4 0h3M9 0h3M3 1h1M7 1h2M12 1h1M3 2h1M7 2h2M12 2h1M2 3h1M7 3h2M13 3h1M1 4h5M7 4h2M10 4h5M1 5h1M7 5h2M14 5h1M1 6h1M7 6h2M14 6h1M0 7h1M7 7h2M15 7h1M0 8h7M9 8h7M2 9h1M13 9h1M2 10h1M13 10h1M3 11h1M12 11h1"
			/>
			<path
				stroke="#ffffff"
				d="M4 1h1M11 1h1M4 2h3M9 2h3M3 3h3M10 3h3M6 5h1M9 5h1M2 6h5M9 6h5M1 7h6M9 7h6M1 11h2M13 11h2M2 12h2M5 12h1M10 12h1M12 12h2M3 13h2M6 13h4M11 13h2M4 14h3M9 14h3"
			/>
			<path
				stroke="#663931"
				d="M5 1h2M9 1h2M6 3h1M9 3h1M6 4h1M9 4h1M2 5h4M10 5h4M7 8h2M3 9h10M3 10h10M4 11h8M4 12h1M6 12h4M11 12h1M5 13h1M10 13h1"
			/>
		</symbol>
		<symbol shape-rendering="crispEdges" id="boat-r-0" viewBox="0 -0.5 16 16">
			<use transform="translate(16 0) scale(-1 1)" href="#boat-l-0" />
		</symbol>
		<symbol shape-rendering="crispEdges" id="boat-r-1" viewBox="0 -0.5 16 16">
			<use transform="translate(16 0) scale(-1 1)" href="#boat-l-1" />
		</symbol>
		<symbol shape-rendering="crispEdges" id="boat-u-0" viewBox="0 -0.5 16 16">
			<path
				stroke="#000000"
				d="M5 3h2M9 3h2M4 4h8M4 5h1M7 5h2M11 5h1M3 6h1M7 6h2M12 6h1M3 7h10M3 8h1M7 8h2M12 8h1M2 9h1M7 9h2M13 9h1M2 10h12M3 11h2M11 11h2M4 12h2M10 12h2M5 13h6"
			/>
			<path stroke="#ffffff" d="M5 5h2M9 5h2M4 6h3M9 6h3M4 8h3M9 8h3M3 9h4M9 9h4" />
			<path stroke="#7d4900" d="M5 11h6M6 12h4" />
		</symbol>
		<symbol shape-rendering="crispEdges" id="boat-u-1" viewBox="0 -0.5 16 16">
			<path
				stroke="#000000"
				d="M5 2h2M9 2h2M4 3h1M7 3h2M11 3h1M4 4h1M7 4h2M11 4h1M3 5h1M7 5h2M12 5h1M3 6h10M3 7h1M7 7h2M12 7h1M2 8h1M7 8h2M13 8h1M3 9h10M4 10h1M11 10h1M4 11h2M10 11h2M5 12h6"
			/>
			<path stroke="#ffffff" d="M5 3h2M9 3h2M5 4h2M9 4h2M4 5h3M9 5h3M4 7h3M9 7h3M3 8h4M9 8h4" />
			<path stroke="#7d4900" d="M5 10h6M6 11h4" />
		</symbol>
		<symbol shape-rendering="crispEdges" id="boat-r-0" viewBox="0 -0.5 16 16">
			<path
				stroke="#000000"
				d="M3 3h2M8 3h2M3 4h1M5 4h2M8 4h3M3 5h1M6 5h3M10 5h2M3 6h1M6 6h3M11 6h1M2 7h2M6 7h3M11 7h1M2 8h2M6 8h3M11 8h2M3 9h4M9 9h4M2 10h1M12 10h1M2 11h1M11 11h1M3 12h1M5 12h1M7 12h1M9 12h2M4 13h1M6 13h1M8 13h1"
			/>
			<path stroke="#ffffff" d="M4 4h1M4 5h2M9 5h1M4 6h2M9 6h2M4 7h2M9 7h2M4 8h2M9 8h2" />
			<path stroke="#7d4900" d="M7 9h2M3 10h9M3 11h8M4 12h1M6 12h1M8 12h1" />
		</symbol>
		<symbol shape-rendering="crispEdges" id="boat-r-1" viewBox="0 -0.5 16 16">
			<path
				stroke="#000000"
				d="M4 3h3M9 3h2M4 4h1M7 4h1M9 4h1M11 4h1M4 5h1M8 5h2M12 5h1M4 6h1M8 6h2M12 6h1M3 7h2M8 7h2M12 7h1M3 8h2M7 8h3M12 8h2M4 9h4M10 9h4M3 10h1M13 10h1M3 11h1M12 11h1M4 12h1M6 12h1M8 12h1M10 12h2M5 13h1M7 13h1M9 13h1"
			/>
			<path
				stroke="#ffffff"
				d="M5 4h2M10 4h1M5 5h3M10 5h2M5 6h3M10 6h2M5 7h3M10 7h2M5 8h2M10 8h2"
			/>
			<path stroke="#7d4900" d="M8 9h2M4 10h9M4 11h8M5 12h1M7 12h1M9 12h1" />
		</symbol>
		<symbol shape-rendering="crispEdges" id="boat-d-0" viewBox="0 -0.5 16 16">
			<path
				stroke="#000000"
				d="M5 3h6M4 4h1M11 4h1M4 5h2M10 5h2M4 6h1M6 6h4M11 6h1M3 7h2M11 7h2M2 8h2M7 8h2M12 8h2M2 9h1M6 9h1M9 9h1M13 9h1M2 10h5M9 10h5M3 11h1M6 11h1M9 11h1M12 11h1M4 12h1M6 12h1M9 12h1M11 12h1M5 13h6"
			/>
			<path stroke="#ffffff" d="M5 4h6M6 5h4M5 6h1M10 6h1M5 7h6M4 8h3M9 8h3M3 9h3M10 9h3" />
			<path stroke="#7d4900" d="M7 9h2M7 10h2M4 11h2M7 11h2M10 11h2M5 12h1M7 12h2M10 12h1" />
		</symbol>
		<symbol shape-rendering="crispEdges" id="boat-d-1" viewBox="0 -0.5 16 16">
			<path
				stroke="#000000"
				d="M5 2h6M4 3h1M11 3h1M4 4h2M10 4h2M3 5h1M6 5h4M12 5h1M3 6h4M9 6h4M2 7h1M7 7h2M13 7h1M2 8h1M5 8h2M9 8h2M13 8h1M3 9h1M6 9h1M9 9h1M12 9h1M3 10h1M6 10h1M9 10h1M12 10h1M4 11h1M6 11h1M9 11h1M11 11h1M5 12h1M7 12h2M10 12h1"
			/>
			<path stroke="#ffffff" d="M5 3h6M6 4h4M4 5h2M10 5h2M7 6h2M3 7h4M9 7h4M3 8h2M11 8h2" />
			<path
				stroke="#7d4900"
				d="M7 8h2M4 9h2M7 9h2M10 9h2M4 10h2M7 10h2M10 10h2M5 11h1M7 11h2M10 11h1"
			/>
		</symbol>
		<symbol shape-rendering="crispEdges" id="boat-l-0" viewBox="0 -0.5 16 16">
			<use transform="translate(16 0) scale(-1 1)" href="#boat-r-0" />
		</symbol>
		<symbol shape-rendering="crispEdges" id="boat-l-1" viewBox="0 -0.5 16 16">
			<use transform="translate(16 0) scale(-1 1)" href="#boat-r-1" />
		</symbol>
	</defs>
</svg>

<svg
	tabindex="0"
	role="menu"
	aria-label="Use the arrow keys to navigate the vast sea."
	on:keydown={handleKeydown}
	on:focus={handleFocus}
	on:blur={handleBlur}
	viewBox="0 0 {width} {height}"
>
	<defs>
		<pattern
			id="pattern-sea"
			viewBox="0 0 16 16"
			width="16"
			height="16"
			patternUnits="userSpaceOnUse"
		>
			<g bind:this={sea}>
				<animateTransform
					attributeName="transform"
					type="translate"
					dur="16s"
					values="0 0; 1 0; 2 0; 3 0; 4 0; 5 0; 6 0; 7 0; 8 0; 9 0; 10 0; 11 0; 12 0; 13 0; 14 0; 15 0"
					repeatCount="indefinite"
					calcMode="discrete"
					begin="indefinite"
				/>
				<use x="-16" href="#sea" width="16" height="16" />
				<use href="#sea" width="16" height="16" />
			</g>
		</pattern>
	</defs>

	<g transform="translate({$camera.x} {$camera.y})">
		<rect
			fill="url(#pattern-sea)"
			x={RESOLUTION * -1}
			y={RESOLUTION * -1}
			width={width + RESOLUTION * 2}
			height={height + RESOLUTION * 2}
		/>
	</g>

	<use bind:this={boat} {x} {y} href="#boat-d-0" width="16" height="16">
		<animate attributeName="href" {dur} repeatCount="2" calcMode="discrete" begin="indefinite" />
	</use>

	<g transform="translate({width / 2} {height / 2})">
		<g opacity="0">
			<g on:keydown on:click={() => handlePad('u')}>
				<path d="M 0 0 l {-width / 2} {-height / 2} {width} 0z" />
			</g>
			<g on:keydown on:click={() => handlePad('r')}>
				<path d="M 0 0 l {width / 2} {-height / 2} 0 {height}z" />
			</g>
			<g on:keydown on:click={() => handlePad('d')}>
				<path transform="rotate(180)" d="M 0 0 l {-width / 2} {-height / 2} {width} 0z" />
			</g>
			<g on:keydown on:click={() => handlePad('l')}>
				<path transform="rotate(180)" d="M 0 0 l {width / 2} {-height / 2} 0 {height}z" />
			</g>
		</g>
	</g>
</svg>

<style>
	svg {
		display: block;
		cursor: pointer;
	}

	svg:focus:not(:focus-visible) {
		outline: none;
	}
</style>
