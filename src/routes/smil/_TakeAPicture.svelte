<script>
	import AnimatedText from './_helpers/_AnimatedText.svelte';
	import Text from './_helpers/_Text.svelte';

	const size = 15;
	const width = 80;
	const height = 50;

	const lens = {
		width: 30,
		height: 28
	};

	lens.x = width / 2 - lens.width / 2;
	lens.y = height / 2 - lens.height / 2;

	const time = 3 + Math.floor(Math.random() * 2);

	const frames = [
		{
			threshold: 0,
			text: 'Way too early!'
		},
		{
			threshold: height + lens.y - size,
			text: 'A bit early...'
		},
		{
			threshold: height + lens.y,
			text: 'Nice shot!',
			filter: false
		},
		{
			threshold: height + lens.y + lens.height - size,
			text: 'A tad late...'
		},
		{
			threshold: height + lens.y + lens.height,
			text: 'Exceedingly late...'
		}
	].map(({ threshold, text, filter = true }) => ({
		delay: (threshold / (height * 2)) * time,
		text,
		filter
	}));

	const getX = () => Math.floor(Math.random() * (lens.width - size)) + lens.x;
	const path = `M ${getX()} ${-height} ${getX()} ${height}`;

	const end = frames.map((_, i) => `takeAPictureFrame${i}.begin`).join(';');
</script>

<svg viewBox="0 0 80 50">
	<defs>
		<pattern id="take-a-picture-pattern-sprite" viewBox="-2.25 -2.12 4.5 4.6" width="1" height="1">
			<g stroke="currentColor" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round">
				<g fill="none">
					<path d="M 0.1 -1 q 0 -0.8 0.75 -1" />
					<path transform="scale(-1 1)" d="M 0.1 -1 q 0 -0.8 0.75 -1" />
				</g>
				<g fill="#f70000">
					<g transform="translate(0 0.5)">
						<path d="M 0.35 -0.8 a 0.6 0.8 0 0 1 1.6 0 0.8 0.8 0 0 1 -0.8 0.8 h -0.8z" />
						<path
							transform="scale(-1 1)"
							d="M 0.35 -0.8 a 0.6 0.8 0 0 1 1.6 0 0.8 0.8 0 0 1 -0.8 0.8 h -0.8z"
						/>
						<path
							transform="scale(-1 -1)"
							d="M 0.35 -0.8 a 0.6 0.8 0 0 1 1.6 0 0.8 0.8 0 0 1 -0.8 0.8 h -0.8z"
						/>
						<path
							transform="scale(1 -1)"
							d="M 0.35 -0.8 a 0.6 0.8 0 0 1 1.6 0 0.8 0.8 0 0 1 -0.8 0.8 h -0.8z"
						/>
					</g>
				</g>
				<path fill="currentColor" d="M 0 -1 c 0.75 0.5 0.75 2.5 0 3 -0.75 -0.5 -0.75 -2.5 0 -3" />
			</g>
		</pattern>

		<filter id="take-a-picture-filter">
			<feColorMatrix
				type="matrix"
				values="-1 0 0 0 1 
                0 -1 0 0 1 
                0 0 -1 0 1
                0 0 0 1 0"
			/>
			<feColorMatrix
				type="matrix"
				values="0.33 0.33 0.33 0 0
                0.33 0.33 0.33 0 0
                0.33 0.33 0.33 0 0
                0 0 0 1 0"
			/>
		</filter>

		<rect
			id="take-a-picture-lens"
			x={lens.x}
			y={lens.y}
			width={lens.width}
			height={lens.height}
			rx="2"
		/>

		<clipPath id="take-a-picture-clip-lens">
			<use href="#take-a-picture-lens" />
		</clipPath>
	</defs>

	<g>
		<animate
			attributeName="filter"
			to="url(#take-a-picture-filter)"
			dur="0.1s"
			calcMode="discrete"
			fill="freeze"
			begin={frames
				.map(({ filter }, i) => (filter ? `takeAPictureFrame${i}.begin` : null))
				.filter((d) => d)
				.join(';')}
		/>

		<rect fill="currentColor" width="80" height="50" />

		<g>
			<use href="#take-a-picture-lens" fill="none" stroke="#ffffff" stroke-width="2.5" />
			<use href="#take-a-picture-lens" fill="none" stroke="currentColor" stroke-width="1" />

			<g clip-path="url(#take-a-picture-clip-lens)">
				<rect width="80" height="50" fill="#ffffff" />

				<path
					transform="scale(.5)"
					fill="#d6d7d6"
					d="m0 0v50.2a26.3 26.3 0 0 0 3.03 0.342 26.3 26.3 0 0 0 13.2-3.54 26.3 26.3 0 0 0 24.2 16.2 26.3 26.3 0 0 0 23.3-14.2 26.3 26.3 0 0 0 14.1 4.13 26.3 26.3 0 0 0 23.3-14.2 26.3 26.3 0 0 0 1.45 0.0762 26.3 26.3 0 0 0 25-18.2 26.3 26.3 0 0 0 5.99-2.03 26.3 26.3 0 0 0 5.38 0.561 26.3 26.3 0 0 0 21.1-10.8v-8.4h-160z"
				/>
				<g stroke="#bdbebd">
					<path
						transform="scale(.5)"
						fill="#f7f7f7"
						d="m47.8 0 7.1 33.4-54.9-20v19.3l57.9 19 8.65 48.3h25.4l-13.8-58.3 70.8-41.7h-28l-47.9 27.2-7.63-27.2z"
					/>
					<g stroke-width="0.4">
						<path d="m4.55 13.9 9.49 3.54" />
						<path d="m27.5 4.82 1.86 6.96" />
						<path d="m33.6 32.2 2.24 12.5" />
						<path d="m37.2 24.4 1.81 8.68" />
						<path d="m40.5 15.5 5.62-3.18" />
						<path d="m51.5 6.63 4.11-2.25" />
						<path d="m54.7 8.21 9.09-5.25" />
						<path d="m18.4 16 5.68 1.99" />
						<path d="m30.6 19.2 0.795 4.78" />
					</g>
				</g>

				<g>
					<animateMotion
						begin="takeAPictureStart.begin"
						{path}
						dur="{time}s"
						{end}
						fill="freeze"
						restart="never"
						id="takeAPictureMotion"
					/>
					<rect width={size} height={size} fill="url(#take-a-picture-pattern-sprite)" />
				</g>
			</g>
		</g>

		<g>
			{#each frames as { delay, text }, i}
				<g display="none">
					<animate
						attributeName="display"
						to="initial"
						fill="freeze"
						dur="0.1s"
						calcMode="discrete"
						begin="takeAPictureStart.begin + {delay}s"
						{end}
					/>
					<animate
						attributeName="display"
						to="none"
						fill="freeze"
						dur="0.1s"
						calcMode="discrete"
						begin={i < frames.length - 1
							? `takeAPictureStart.begin + ${frames[i + 1].delay}s`
							: 'takeAPictureMotion.end'}
						{end}
					/>
					<g>
						<animate id="takeAPictureFrame{i}" begin="click" />
						<g display="none">
							<animate
								attributeName="display"
								to="initial"
								dur="0.1s"
								calcMode="discrete"
								begin="takeAPictureFrame{i}.begin"
								fill="freeze"
							/>
							<g display="none">
								<animate
									id="takeAPictureMessage{i}"
									attributeName="display"
									to="initial"
									dur="0.1s"
									calcMode="discrete"
									begin="takeAPictureFlash.end"
									fill="freeze"
								/>
								<g transform="translate(40 46)">
									<AnimatedText
										fill="currentColor"
										stroke="#f7f7f7"
										{text}
										begin="takeAPictureMessage{i}.begin"
										end="takeAPictureEnd.begin"
									/>
								</g>
							</g>
						</g>

						<rect style:cursor="pointer" width="80" height="50" opacity="0">
							<animate
								attributeName="display"
								to="none"
								dur="0.1s"
								calcMode="discrete"
								begin="takeAPictureFrame{i}.begin"
								fill="freeze"
							/>
						</rect>
					</g>
				</g>
			{/each}
		</g>
	</g>

	<rect style="pointer-events: none;" width="80" height="50" opacity="0" fill="#ffffff">
		<animate
			id="takeAPictureFlash"
			attributeName="opacity"
			values="0; 1; 0"
			fill="freeze"
			dur="0.15s"
			begin={end}
		/>
	</rect>

	<g display="none">
		<animate
			id="takeAPictureMessage"
			attributeName="display"
			to="initial"
			dur="0.1s"
			calcMode="discrete"
			begin="takeAPictureMotion.end + 1s"
			{end}
			fill="freeze"
		/>
		<g transform="translate(40 46)">
			<AnimatedText
				fill="currentColor"
				stroke="#f7f7f7"
				text="Moment's gone..."
				begin="takeAPictureMessage.begin"
				end="takeAPictureEnd.begin"
			/>
		</g>
	</g>

	<g style:cursor="pointer" display="none">
		<animate
			attributeName="display"
			to="none"
			fill="freeze"
			dur="0.1s"
			calcMode="discrete"
			begin="click"
			id="takeAPictureEnd"
		/>
		<animate
			attributeName="display"
			to="initial"
			fill="freeze"
			dur="0.1s"
			calcMode="discrete"
			begin="takeAPictureFlash.end; takeAPictureMotion.end"
		/>
		<rect width="80" height="50" opacity="0" />
	</g>

	<g style:cursor="pointer">
		<g>
			<animate
				id="takeAPictureStart"
				attributeName="display"
				to="none"
				fill="freeze"
				begin="click"
				dur="0.1s"
				restart="never"
			/>
			<g transform="translate(40 25)">
				<Text fill="url(#linear-gradient-text)">Frame!</Text>
			</g>
			<rect width="80" height="50" opacity="0" />
		</g>
	</g>
</svg>
