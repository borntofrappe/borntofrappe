<script>
	import Text from './helpers/Text.svelte';
	import AnimatedText from './helpers/AnimatedText.svelte';

	const hp = 3;
</script>

<svg viewBox="0 0 80 50">
	<rect fill="#86bded" width="80" height="50" />
	<path fill="#f9e382" d="M 0 50 v -21 c 20 -5 60 -5 80 0 v 21" />

	<g>
		<g fill="#f1f6f6">
			<path
				d="m65.3 10.5c0.594 1.22 2 1.77 3.28 1.86 2.29 0.153 4.59-0.377 6.71-1.21 1.35-0.708 2-2.22 2.27-3.64 0.259-1.3 0.226-2.78-0.597-3.88-0.553-0.682-1.63-1.06-2.4-0.498-0.62 0.437-0.568 1.28-0.475 1.94 0.104 0.648-0.265 1.39-0.984 1.42-0.794 0.115-1.7-0.149-2.38 0.417-1.1 0.705-1.82 1.97-3.11 2.39-0.67 0.132-1.49-0.0911-2 0.485-0.201 0.18-0.444 0.444-0.322 0.735z"
			/>
			<path
				d="m1.7 9.85c-0.0914-1.01 1.03-1.41 1.69-1.9 1.01-0.494 1.15-1.83 0.314-2.57-0.969-0.759-0.994-2.35 0.345-2.69 2.43-0.721 5.15 0.121 6.98 1.82 1.21 1.02 2.42 2.04 3.67 3.02 0.805 0.651 1.46 1.96 0.623 2.85-0.852 0.874-2.18 0.804-3.3 0.948-1.5 0.0624-2.98 0.407-4.49 0.256-1.63-0.124-3.26-0.386-4.85-0.79-0.43-0.164-0.86-0.466-0.982-0.934z"
			/>
			<path
				d="m10.6 13.7c0.955 2.34 3.76 0.897 5.6 1.11 2.53 0.0894 5.11 0.543 7.34 1.79 5.03 1.32 10.3 0.485 15.4 0.774 6.7-0.0157 13.5-0.35 20-2.25 1.68 0.104 4.48-0.729 4.07-2.86-0.649-2.36-4.37-1.45-4.83-3.8 1.03-0.826 3.57-3.3 0.914-4.18-4.62-2.42-10-2.02-15.1-2.09-5.97 0.186-12 0.342-17.8 1.58-1.65 0.544-5.23 0.844-3.6 3.32 0.791 2.35-3.05 0.563-3.58 2.62-0.94 1.33-2.21 2.67-3.99 2.46-1.53 0.12-3.37 0.121-4.36 1.51z"
			/>
		</g>

		<g>
			<path
				fill="#59a258"
				d="m3.65 20.1c-1.42 0.0522-3.51 0.52-3.65 2.23v27.7h12.4c1.1-0.673 2.24-1.87 2.08-3.26-0.651-1.44-2.6-0.67-3.74-1.46-1.42-0.814 0.0745-2.36 1.2-2.44 2.58-0.555 5.37 0.355 7.85-0.761 2.16-1.24-0.67-3.18-2.23-2.73-1.62-0.0055-1.92-2.14-0.478-2.7 1.06-1.59-2.61-3.13-0.642-4.38 1.56-0.438 3.29-0.836 3.71-2.64 1.27-1.2 3.15-1.28 4.71-1.94 1.84-0.187 3.25-3.02 0.703-3.31-1.92-0.325-3.21-2.02-5.08-2.52-2.21-0.743-4.12 1.04-6.19 1.48-2.38 0.527-4.55-1.03-6.58-2.04-1.25-0.65-2.59-1.21-4.02-1.24z"
			/>
			<path
				fill="#f9e382"
				d="m20 25.2c-2.78 0.0146-4.8 2.41-7.52 2.69-1.8 0.316-3.94 0.271-5.22 1.79-0.767 1.16 0.319 2.84-0.861 3.82-1.24 0.833-3.03-0.0881-4.13 1.07-1.1 1.36-0.19 3.43-1.44 4.72-0.931 0.163-0.923 1.05-0.86 1.78v5.18c1.16 0.484 2.52-0.375 2.87-1.52 0.935-1.14 2.48-1.44 3.81-1.91 1.23-0.384 2.66-0.982 3.11-2.31 0.164-1.29-1.65-2-1.21-3.34 0.351-1.45 1.99-1.55 3.05-2.17 1.08-0.949 1.09-2.67 2.36-3.47 2.11-1.7 5.1-1.98 6.96-4.03 0.785-0.937 0.646-2.49-0.913-2.29z"
			/>
			<path
				fill="#455f58"
				d="m3.11 15.7c-1.3 0.0791-2.56 0.922-3.11 2.09v3.94c1.47 1.81 3.89 2.43 6.12 2.59 3.31 0.272 6.66-0.247 9.95 0.372 1.16 0.168 2.53 0.266 3.48-0.543 0.653-0.662 0.537-1.84-0.207-2.39-1.42-1.31-3.49-1.27-5.3-1.26-2 0.0226-4.16 0.214-5.97-0.808-1.61-1.01-2.28-3.09-4.08-3.85-0.282-0.105-0.584-0.155-0.885-0.148z"
			/>
		</g>

		<g transform="translate(80 0) scale(-1 1)">
			<g>
				<path
					fill="#59a258"
					d="m3.65 20.1c-1.42 0.0522-3.51 0.52-3.65 2.23v27.7h12.4c1.1-0.673 2.24-1.87 2.08-3.26-0.651-1.44-2.6-0.67-3.74-1.46-1.42-0.814 0.0745-2.36 1.2-2.44 2.58-0.555 5.37 0.355 7.85-0.761 2.16-1.24-0.67-3.18-2.23-2.73-1.62-0.0055-1.92-2.14-0.478-2.7 1.06-1.59-2.61-3.13-0.642-4.38 1.56-0.438 3.29-0.836 3.71-2.64 1.27-1.2 3.15-1.28 4.71-1.94 1.84-0.187 3.25-3.02 0.703-3.31-1.92-0.325-3.21-2.02-5.08-2.52-2.21-0.743-4.12 1.04-6.19 1.48-2.38 0.527-4.55-1.03-6.58-2.04-1.25-0.65-2.59-1.21-4.02-1.24z"
				/>
				<path
					fill="#f9e382"
					d="m20 25.2c-2.78 0.0146-4.8 2.41-7.52 2.69-1.8 0.316-3.94 0.271-5.22 1.79-0.767 1.16 0.319 2.84-0.861 3.82-1.24 0.833-3.03-0.0881-4.13 1.07-1.1 1.36-0.19 3.43-1.44 4.72-0.931 0.163-0.923 1.05-0.86 1.78v5.18c1.16 0.484 2.52-0.375 2.87-1.52 0.935-1.14 2.48-1.44 3.81-1.91 1.23-0.384 2.66-0.982 3.11-2.31 0.164-1.29-1.65-2-1.21-3.34 0.351-1.45 1.99-1.55 3.05-2.17 1.08-0.949 1.09-2.67 2.36-3.47 2.11-1.7 5.1-1.98 6.96-4.03 0.785-0.937 0.646-2.49-0.913-2.29z"
				/>
				<path
					fill="#455f58"
					d="m3.11 15.7c-1.3 0.0791-2.56 0.922-3.11 2.09v3.94c1.47 1.81 3.89 2.43 6.12 2.59 3.31 0.272 6.66-0.247 9.95 0.372 1.16 0.168 2.53 0.266 3.48-0.543 0.653-0.662 0.537-1.84-0.207-2.39-1.42-1.31-3.49-1.27-5.3-1.26-2 0.0226-4.16 0.214-5.97-0.808-1.61-1.01-2.28-3.09-4.08-3.85-0.282-0.105-0.584-0.155-0.885-0.148z"
				/>
			</g>
		</g>
	</g>

	<g display="none">
		<set
			begin="battleTheEnemyShow{hp - 1}.begin"
			attributeName="display"
			to="initial"
			fill="freeze"
		/>
		<g transform="translate(1 1)">
			<rect fill="currentColor" stroke="#f7f7f7" width="20" height="11" rx="1" />
			<g transform="translate(10 4.6)">
				<g
					fill="#f7f7f7"
					font-family="sans-serif"
					font-size="4"
					font-weight="bold"
					text-anchor="middle"
				>
					<text>Enemy</text>
					<text y="4.6"
						>HP:
						{#each Array(hp + 1) as _, i}
							<tspan display={i === hp ? 'initial' : 'none'}>
								{#if i !== hp}
									<set
										begin="battleTheEnemyHit{i}.begin"
										attributeName="display"
										to="initial"
										fill="freeze"
									/>
								{/if}
								{#if i > 0}
									<set
										begin="battleTheEnemyHit{i - 1}.begin"
										attributeName="display"
										to="none"
										fill="freeze"
									/>
								{/if}
								{i}
							</tspan>
						{/each}
					</text>
				</g>
			</g>
		</g>

		<g transform="translate(1 38)">
			<rect fill="currentColor" stroke="#f7f7f7" width="78" height="11" rx="1" />
			<g transform="translate(39 6.8)">
				<g
					fill="#f7f7f7"
					font-family="sans-serif"
					font-size="4"
					font-weight="bold"
					text-anchor="middle"
				>
					{#each Array(hp + 1) as _, i}
						<g display={i === hp ? 'initial' : 'none'}>
							{#if i !== hp}
								<set
									begin="battleTheEnemyHit{i}.begin"
									attributeName="display"
									to="initial"
									fill="freeze"
								/>
							{/if}
							{#if i > 0}
								<set
									begin="battleTheEnemyHit{i - 1}.begin"
									attributeName="display"
									to="none"
									fill="freeze"
								/>
							{/if}
							<text>
								{#if i === hp}
									{#each 'An enemy appeared!'.split('') as c, j}
										<tspan fill-opacity="0">
											<animate
												id="battleTheEnemyMessage{i}Letter{j}"
												begin={j === 0
													? `battleTheEnemyShow${hp - 1}.begin`
													: `battleTheEnemyMessage${i}Letter${j - 1}.end`}
												attributeName="fill-opacity"
												to="1"
												dur="0.025s"
												fill="freeze"
												calcMode="discrete"
											/>
											{c}
										</tspan>
									{/each}
								{:else}
									{#each `${i === 0 ? 'You defeated the enemy!' : 'You hit for 1 point!'}`.split('') as c, j}
										<tspan fill-opacity="0">
											<animate
												id="battleTheEnemyMessage{i}Letter{j}"
												begin={j === 0
													? `battleTheEnemyHit${i}.begin`
													: `battleTheEnemyMessage${i}Letter${j - 1}.end`}
												attributeName="fill-opacity"
												to="1"
												dur="0.025s"
												fill="freeze"
												calcMode="discrete"
											/>
											{c}
										</tspan>
									{/each}
								{/if}
							</text>
						</g>
					{/each}
				</g>
			</g>
		</g>
	</g>

	<g transform="translate(40 22)">
		<g fill="#f7f7f7" stroke="currentColor" stroke-width="0.75">
			{#each Array(hp) as _, i}
				<g display="none">
					<set
						id="battleTheEnemyShow{i}"
						begin={i === hp - 1 ? 'battleTheEnemyStart.begin' : `battleTheEnemyHit${i + 1}.begin`}
						attributeName="display"
						to="initial"
						fill="freeze"
					/>
					{#if i !== hp - 1}
						<animate
							begin="battleTheEnemyHit{i + 1}.begin"
							attributeName="opacity"
							values="1;0;1"
							repeatCount="2"
							dur="0.2s"
							calcMode="discrete"
						/>
					{/if}

					<set
						id="battleTheEnemyHit{i}"
						begin="click"
						attributeName="display"
						to="none"
						fill="freeze"
					/>
					<g style:cursor="pointer">
						<path
							d="M 3.5 -0.75 l 3.5 3.5 a 2 2 0 1 1 -2 2 l -1 -1 v 4 q 2 0 2 2 0 1 -1 1 h -2.5 q -2 0 -2 -2 v -1 q 0 -0.5 -0.5 -0.5 -0.5 0 -0.5 0.5 v 1 q 0 2 -2 2 h -2.5 q -1 0 -1 -1 0 -2 2 -2 v -4 l -1 1 a 2 2 0 1 1 -2 -2 l 3.5 -3.5"
						/>
						<circle cy="-2.5" r="5" />
						<circle cx="1.8" cy="-3.5" r="0.9" />
						<circle cx="-1.8" cy="-3.5" r="0.9" />
						<rect x="-1.7" y="-1" width="3.4" height="1.7" rx="1" />
					</g>
				</g>
			{/each}
		</g>
	</g>

	<g display="none">
		<set
			id="battleTheEnemyMessage"
			begin="battleTheEnemyHit0.begin + 2s"
			attributeName="display"
			to="initial"
			fill="freeze"
		/>
		<g>
			<g transform="translate(40 22)">
				<AnimatedText
					text="Level up!"
					begin="battleTheEnemyMessage.begin"
					end="battleTheEnemyEnd.begin"
					fill="url(#linear-gradient-text)"
				/>
			</g>
			<rect style:cursor="pointer" width="80" height="50" opacity="0">
				<set id="battleTheEnemyEnd" begin="click" attributeName="display" to="none" fill="freeze" />
			</rect>
		</g>
	</g>

	<g style:cursor="pointer">
		<set id="battleTheEnemyStart" begin="click" attributeName="display" to="none" fill="freeze" />
		<g transform="translate(40 25)">
			<Text fill="url(#linear-gradient-text)">Battle!</Text>
		</g>
		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
