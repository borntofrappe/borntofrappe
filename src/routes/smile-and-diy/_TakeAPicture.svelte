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

	const time = 5 + Math.floor(Math.random() * 2);

	const frames = [
		{
			threshold: 0,
			text: 'Way too early!'
		},
		{
			threshold: height + lens.y - size,
			text: 'A touch early...'
		},
		{
			threshold: height + lens.y,
			text: 'Nice shot!',
			focus: true
		},
		{
			threshold: height + lens.y + lens.height - size,
			text: 'A bit late...'
		},
		{
			threshold: height + lens.y + lens.height,
			text: 'Exceedingly late...'
		}
	].map(({ threshold, text, focus }) => ({
		delay: (threshold / (height * 2)) * time,
		text,
		focus
	}));

	const getX = () => Math.floor(Math.random() * (lens.width - size)) + lens.x;
	const path = `M ${getX()} ${-height} ${getX()} ${height}`;

	const sprite = Math.floor(Math.random() * 2);

	const focusFrame = frames.findIndex((d) => d.focus);

	const focusBegin = `takeAPictureStart.begin + ${frames[focusFrame].delay}s`;
	const focusEnd = frames[focusFrame + 1]
		? `takeAPictureStart.begin + ${frames[focusFrame + 1].delay}s`
		: `takeAPictureMotion.end`;

	const end = 'takeAPictureFrame.begin; takeAPictureFocus.begin';
</script>

<svg viewBox="0 0 80 50">
	<defs>
		<pattern
			id="take-a-picture-pattern-sprite-0"
			viewBox="-2.25 -2.12 4.5 4.6"
			width="1"
			height="1"
		>
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

		<pattern id="take-a-picture-pattern-sprite-1" viewBox="-2.15 -1.75 4.3 5" width="1" height="1">
			<g stroke="currentColor" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round">
				<g transform="translate(0 0.11)">
					<path
						fill="#fecd00"
						d="M 0 0 c 0.5 -0.5 2 0 2 1.5 0 1.5 -2 1.5 -2 1.5 -1.5 0 -2 -1 -2 -1.5 0 -1.5 1.5 -2 2 -1.5"
					/>
				</g>
				<g fill="#00e200">
					<path transform="rotate(10)" d="M 0 0.25 v -0.1 q 0 -1.5 1.5 -1.5 0 1.5 -1.5 1.5" />
					<path transform="rotate(5) scale(-1 1) " d="M 0 0 q 0 -1.5 1.5 -1.5 0 1.5 -1.5 1.5" />
				</g>
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
		<set
			begin="takeAPictureFrame.begin"
			attributeName="filter"
			to="url(#take-a-picture-filter)"
			fill="freeze"
			restart="never"
		/>

		<rect fill="currentColor" width="80" height="50" />

		<g>
			<use href="#take-a-picture-lens" fill="none" stroke="#ffffff" stroke-width="2.5" />
			<use href="#take-a-picture-lens" fill="none" stroke="currentColor" stroke-width="1" />

			<g clip-path="url(#take-a-picture-clip-lens)">
				<rect width="80" height="50" fill="#ffffff" />

				<g>
					<g fill="#dedede">
						<circle cx="0" cy="0" r="25" />
						<circle cx="25" cy="0" r="25" />
						<circle cx="50" cy="-5" r="25" />
						<circle cx="80" cy="-10" r="25" />
						<circle cx="15" cy="20" r="12" />
						<circle cx="30" cy="20" r="12" />
						<circle cx="45" cy="15" r="12" />
						<circle cx="65" cy="10" r="12" />
					</g>

					<g stroke-width="0.5" stroke="#dfdfdf">
						<path
							fill="#f7f7f7"
							d="M 0 21.5 29.5 28.5 35 50 45 50 39 25 80 5 80 0 74 0 37 18 32.5 0 22.5 0 28 20 0 14"
						/>
						<g fill="none">
							<path d="M 0 21.5 29.5 28.5" stroke-dasharray="8" transform="translate(2 -3.5)" />
							<path d="M 29.5 27 35 50" stroke-dasharray="12" transform="translate(2 1)" />
							<path d="M 45 50 39 25" stroke-dasharray="10" transform="translate(-4 -2)" />
							<path d="M 39 25 80 5" stroke-dasharray="10" transform="translate(4 -5)" />
							<path d="M 37 18 32.5 0" stroke-dasharray="10" transform="translate(-3 -2)" />
							<path d="M 22.5 0 28 20" stroke-dasharray="10" transform="translate(2 -1)" />
						</g>
					</g>
				</g>

				<g>
					<animateMotion
						id="takeAPictureMotion"
						begin="takeAPictureStart.begin"
						{end}
						{path}
						dur="{time}s"
						fill="freeze"
						restart="never"
					/>
					<rect width={size} height={size} fill="url(#take-a-picture-pattern-sprite-{sprite})" />
				</g>
			</g>
		</g>

		<g display="none">
			<set begin={end} attributeName="display" to="initial" fill="freeze" restart="never" />
			{#each frames as { delay, text }, i}
				<g display="none">
					<set
						begin="takeAPictureStart.begin + {delay}s"
						{end}
						attributeName="display"
						to="initial"
						fill="freeze"
						restart="never"
					/>
					<set
						begin={i < frames.length - 1
							? `takeAPictureStart.begin + ${frames[i + 1].delay}s`
							: 'takeAPictureMotion.end'}
						{end}
						attributeName="display"
						to="none"
						fill="freeze"
						restart="never"
					/>
					<g display="none">
						<set
							begin="takeAPictureFlash.end"
							attributeName="display"
							to="initial"
							fill="freeze"
							restart="never"
						/>
						<g transform="translate(40 46)">
							<AnimatedText
								begin="takeAPictureFlash.end"
								end="takeAPictureEnd.begin"
								fill="currentColor"
								stroke="#f7f7f7"
								{text}
							/>
						</g>
					</g>
				</g>
			{/each}
		</g>
	</g>

	<rect width="80" height="50" opacity="0" fill="#ffffff">
		<set
			begin="takeAPictureFlash.end"
			attributeName="display"
			to="none"
			fill="freeze"
			restart="never"
		/>
		<animate
			id="takeAPictureFlash"
			begin={end}
			attributeName="opacity"
			values="0; 1; 0"
			dur="0.15s"
			fill="freeze"
			restart="never"
		/>
	</rect>

	<rect style:cursor="pointer" width="80" height="50" opacity="0">
		<set
			begin="takeAPictureMotion.end"
			attributeName="display"
			to="none"
			fill="freeze"
			restart="never"
		/>
		<set
			id="takeAPictureFrame"
			begin="click"
			attributeName="display"
			to="none"
			fill="freeze"
			restart="never"
		/>
	</rect>

	<g display="none">
		<set
			begin={focusBegin}
			{end}
			attributeName="display"
			to="initial"
			fill="freeze"
			restart="never"
		/>
		<set begin={focusEnd} {end} attributeName="display" to="none" fill="freeze" restart="never" />
		<set
			id="takeAPictureFocus"
			begin="click"
			attributeName="display"
			to="none"
			fill="freeze"
			restart="never"
		/>
		<rect style:cursor="pointer" width="80" height="50" opacity="0" />
	</g>

	<g display="none">
		<set
			id="takeAPictureMessage"
			begin="takeAPictureMotion.end + 1s"
			end="takeAPictureFrame.begin; takeAPictureFocus.begin"
			attributeName="display"
			to="initial"
			fill="freeze"
			restart="never"
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
		<set
			begin="takeAPictureFlash.end; takeAPictureMotion.end"
			attributeName="display"
			to="initial"
			fill="freeze"
			restart="never"
		/>

		<set id="takeAPictureEnd" begin="click" attributeName="display" to="none" fill="freeze" />

		<rect width="80" height="50" opacity="0" />
	</g>

	<g style:cursor="pointer">
		<set
			id="takeAPictureStart"
			begin="click"
			attributeName="display"
			to="none"
			fill="freeze"
			restart="never"
		/>
		<g transform="translate(40 25)">
			<Text fill="url(#linear-gradient-text)">Frame!</Text>
		</g>
		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
