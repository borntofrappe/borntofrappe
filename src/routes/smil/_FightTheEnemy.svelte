<script>
	const hpEnemy = 3;
	const hpYou = 3;

	const hpDropDelays = Array(hpYou)
		.fill()
		.map((_) => Math.floor(Math.random() * 2 + 2))
		.reduce(
			(acc, curr, i) => (i === 0 ? [...acc, curr] : [...acc, curr + acc[acc.length - 1]]),
			[]
		);
</script>

<svg viewBox="0 0 80 50">
	<rect width="80" height="50" fill="#faeab7" />
	<g>
		<path
			d="m3.85 5.71c-4.34-0.526-2.21 23.4-0.766 24.3 1.63 0.992 3.78-1.33 3.5-13.6-0.153-6.9 0.0334-10.3-2.74-10.6zm60.1 3.65c-0.486 0.227-0.653 3.66-0.971 13.3-0.275 8.34-0.838 15.5-1.25 15.9-1.53 1.52-2.25-0.938-2.34-7.92-0.151-12.7-0.634-21.2-1.1-19.4-0.525 2.01-1.95 2.32-2.54 0.547-0.221-0.662-0.207 2.84 0.0293 7.78 0.387 8.09-0.592 18.1-2.37 24.2-0.403 1.38-0.227 2.25 0.459 2.25 0.614 0 1.12-0.45 1.12-1s0.675-1 1.5-1 1.5-0.365 1.5-0.812c0-0.447 1.58-1.43 3.5-2.19 2.71-1.07 3.51-1.95 3.53-3.94 0.0175-1.41 0.298-7.17 0.625-12.8 0.439-7.57 0.235-11.1-0.781-13.5-0.397-0.942-0.683-1.5-0.904-1.4zm-40.4 2.31c-0.0944-0.0056-0.199 0.0141-0.314 0.0586-0.688 0.265-1.25 1.11-1.25 1.88s-0.338 1.39-0.75 1.39c-0.412-0.00108-0.61 5.17-0.439 11.5 0.206 7.63-0.0461 11.5-0.75 11.5-0.675 0-1.14-4.27-1.28-11.8-0.215-11.8-0.975-11.4-1.29 0.486-0.337 12.6 0.688 16 4.89 16 0.956 0 2.41 0.571 2.73 1.4 0.317 0.825 1.32 0.838 1.93 0.838 0.636 0 0.479-0.623-0.371-1.47-1.61-1.61-3.16-18.3-2.53-27.2 0.232-3.27 0.0825-4.58-0.578-4.62zm54.4 1.06c-0.0344-0.0226-0.0675-0.0204-0.0977 0.00977-6.85 8.61-2.75 13.2-1.61 16.8 0.0188 3.3 0.226 6.79 0.461 7.75 0.342 1.4 2.03 3.11 3.29 3.35v-16.7c-0.728-5.73-1.58-10.9-2.05-11.2zm-67.2 5.45c-1.64 0.0226-3.47 6.48-0.613 14.3 3.06 9.11 0.343 1.77 2.33-8.32-0.0525-4.25-0.859-6-1.72-5.99z"
			fill="#85734f"
		/>
		<path
			d="m78.4 5.19c-0.286-0.0677-0.402 0.24-0.402 0.943 0 0.843 0.327 1.86 0.729 2.26 0.401 0.401 0.902 0.211 1.11-0.422 0.211-0.632-0.117-1.65-0.729-2.26-0.306-0.306-0.539-0.483-0.711-0.523zm-72.8 1.44c-0.359 0.132-0.464 3.01-0.523 10.2-0.0733 8.84-0.418 12.1-1.23 11.6-1.72-1.06-0.643 11.8 1.16 13.9 2.14 2.41 4.48 2.08 5.8-0.822 1.49-3.27 3.13-8.75 1.68-6.5-1.15 1.79-2.74-3.45-1.68-15.1 0.459-5.03 0.35-7.5-0.32-7.26-1.68 0.61-3.08-0.915-4.23-4.61-0.288-0.927-0.503-1.44-0.666-1.38zm69.3 0.469c-1.11 0.0741-0.84 4.05-1.31 12.2-0.935 16.2-3.85 16 0.299 21.2 1.3 1.27 4.14 4.58 5.06 1.58 1.05-1.26 1-3.49-0.287-3-3.02 1.16-3.65-23-0.697-26.5 1.2-1.45 0.776-1.48-0.514-3.06-1.27-1.56-2.05-2.33-2.56-2.3zm-8.81 23.3c-0.6 0.14-1.1 1.96-1.12 4.69-0.0285 4.28-0.251 4.65-3.53 5.94-1.92 0.755-3.5 1.74-3.5 2.19 0 0.447-0.675 0.812-1.5 0.812-2.93 0-1.44 1.92 1.99 2.56 1.92 0.36 3.24 1.06 2.94 1.54-1.01 1.64 0.469 0.915 2.42-1.18 2.31-2.48 4.45-13.5 2.92-16.1-0.207-0.355-0.419-0.496-0.619-0.449zm-46.8 7.56c-1.4-0.0638-2.28 4.11-1.77 6.96 1.84 6.76 9.35 4.48 8.46-0.42-0.866-1.68-1.45-1.3-3.17-2.47-0.531-0.364-1.88-2.85-2.89-3.77-0.219-0.198-0.429-0.294-0.629-0.303z"
			fill="#313c2b"
		/>
		<path
			d="m0 0v9.61c0.752 0.46 1.53 1.6 2.13 3.8 3.43 0.501 7.25-0.385 8.58-0.873 2.8-1.02 2.94 22.7 0.178 28.8-1.38 3.02-3.69 3.37-5.89 0.9-1.19-1.33-1.57-5.42-1.81-19.6-0.0748-4.26-0.248-4.22-1.19-4.64-0.74-0.108-1.33 0.256-2 0v32h21.6c0.674-0.811 0.597-1.66-0.279-2.41-2.94-2.53-4.6-33.9-1.81-34.2 5.19-0.583 5.51-7.69 6.5-10.9 0-1.51-4.08-2.19-9.81-2.5zm57.6 0c1.97 2.65 8.31 5.86 7.1 9.09 4.46 8.93 0.796 38.7-4.65 40.7-0.22 0.0808-0.357 0.146-0.451 0.205h20.4v-10.4c-0.464-0.202-0.959-0.084-1.37 0.26-1.78 1.48-4.38 0.45-5.18-2.06-0.793-2.5 0.571-29.8 1.49-29.8 1.77 0 3.98 2.79 4.35 5.5 0.197 1.44 0.474 2.09 0.713 1.92v-15.1c-2.22-0.349-5.7-0.363-11-0.363z"
			fill="#192821"
		/>
	</g>

	<g display="none">
		<animate
			attributeName="display"
			to="initial"
			dur="0.1s"
			fill="freeze"
			calcMode="discrete"
			begin="fightTheEnemyStart.begin"
		/>
		<g>
			<animateTransform
				attributeName="transform"
				type="translate"
				dur="0.1s"
				repeatCount="2"
				values="0 0; 1 0; 0 0; -1 0; 0 0"
				begin={Array(hpYou)
					.fill()
					.map((_, i) => `fightTheEnemyHpDrop${i + 1}.begin`)
					.join(';')}
				end="fightTheEnemyHpEnemy1.begin"
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
						<g transform="translate(0 4.6)">
							<text
								>HP:
								{#each Array(hpEnemy + 1) as _, i}
									<tspan display={i === hpEnemy ? 'initial' : 'none'}>
										{#if i > 0}
											<animate
												attributeName="display"
												to="none"
												dur="0.1s"
												calcMode="discrete"
												fill="freeze"
												begin="fightTheEnemyHpEnemy{i}.begin"
											/>
										{/if}
										<animate
											attributeName="display"
											to="initial"
											dur="0.1s"
											calcMode="discrete"
											fill="freeze"
											begin="fightTheEnemyHpEnemy{i + 1}.begin"
										/>
										{i}
									</tspan>
								{/each}
							</text>
						</g>
					</g>
				</g>
			</g>

			<g transform="translate(59 25.5)">
				<rect fill="currentColor" stroke="#f7f7f7" width="20" height="11" rx="1" />
				<g transform="translate(10 4.6)">
					<g
						fill="#f7f7f7"
						font-family="sans-serif"
						font-size="4"
						font-weight="bold"
						text-anchor="middle"
					>
						<text>You</text>
						<g transform="translate(0 4.6)">
							<text
								>HP:
								{#each [0, ...[...hpDropDelays].reverse()] as hpDropDelay, i}
									<tspan display={i === hpDropDelays.length ? 'initial' : 'none'}>
										{#if i > 0}
											<animate
												attributeName="display"
												to="none"
												dur="0.1s"
												calcMode="discrete"
												fill="freeze"
												begin="fightTheEnemyStart.begin + {hpDropDelay}s"
												end="fightTheEnemyHpEnemy1.begin"
												id="fightTheEnemyHpYou{i}"
											/>
										{/if}
										<animate
											attributeName="display"
											to="initial"
											dur="0.1s"
											calcMode="discrete"
											fill="freeze"
											begin="fightTheEnemyHpYou{i + 1}.begin"
											end="fightTheEnemyHpEnemy1.begin"
										/>
										{i}
									</tspan>
								{/each}
							</text>
						</g>
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
						<g>
							{#each Array(hpYou) as _, i}
								<text display="none">
									<animate
										attributeName="display"
										to="initial"
										dur="0.1s"
										fill="freeze"
										begin="fightTheEnemyHpYou{i + 1}.begin"
										end="fightTheEnemyHpEnemy1.begin"
										id="fightTheEnemyHpDrop{i + 1}"
									/>
									<animate
										attributeName="display"
										to="none"
										dur="0.1s"
										fill="freeze"
										begin={`fightTheEnemyHpYou${i}.begin; ${Array(hpEnemy)
											.fill()
											.map((_, i) => `fightTheEnemyHpEnemy${i + 1}.begin`)
											.join(';')}`}
									/>
									{#each `${i === 0 ? 'You were defeated...' : 'You are hit for 1 point!'}`.split('') as l, j}
										<tspan fill-opacity="0">
											<animate
												attributeName="fill-opacity"
												to="1"
												dur="0.025s"
												fill="freeze"
												id="fightTheEnemyMessageYou{i}Letter{j}"
												calcMode="discrete"
												begin={j === 0
													? `fightTheEnemyHpDrop${i + 1}.begin`
													: `fightTheEnemyMessageYou${i}Letter${j - 1}.end`}
											/>
											{l}
										</tspan>
									{/each}
								</text>
							{/each}
						</g>

						<g>
							{#each Array(hpEnemy) as _, i}
								<text display="none">
									<animate
										attributeName="display"
										to="initial"
										dur="0.1s"
										fill="freeze"
										begin="fightTheEnemyHpEnemy{i + 1}.begin"
									/>
									{#if i > 0}
										<animate
											attributeName="display"
											to="none"
											dur="0.1s"
											fill="freeze"
											begin={`fightTheEnemyHpEnemy${i}.begin; ${Array(hpYou)
												.fill()
												.map((_, i) => `fightTheEnemyHpYou${i + 1}.begin`)
												.join(';')}`}
										/>
									{/if}
									{#each `${i === 0 ? 'You defeated the enemy!' : 'You hit for 1 point!'}`.split('') as l, j}
										<tspan fill-opacity="0">
											<animate
												attributeName="fill-opacity"
												to="1"
												dur="0.025s"
												fill="freeze"
												id="fightTheEnemyMessageEnemy{i}Letter{j}"
												calcMode="discrete"
												begin={j === 0
													? `fightTheEnemyHpEnemy${i + 1}.begin`
													: `fightTheEnemyMessageEnemy${i}Letter${j - 1}.end`}
											/>
											{l}
										</tspan>
									{/each}
								</text>
							{/each}
						</g>

						<g>
							<animate
								attributeName="display"
								to="none"
								dur="0.1s"
								fill="freeze"
								begin="fightTheEnemyHpEnemy{hpEnemy}.begin; fightTheEnemyHpYou{hpYou}.begin"
								restart="never"
							/>
							<text>
								{#each 'An enemy appeared!'.split('') as l, j}
									<tspan fill-opacity="0">
										<animate
											attributeName="fill-opacity"
											to="1"
											dur="0.025s"
											fill="freeze"
											id="fightTheEnemyMessageLetter{j}"
											calcMode="discrete"
											begin={j === 0
												? 'fightTheEnemyStart.begin'
												: `fightTheEnemyMessageLetter${j - 1}.end`}
										/>
										{l}
									</tspan>
								{/each}
							</text>
						</g>
					</g>
				</g>
			</g>
		</g>

		<g transform="translate(40 21)">
			<g fill="#f7f7f7" stroke="currentColor" stroke-width="0.75">
				{#each Array(hpEnemy) as _, i}
					<g display={i === hpEnemy - 1 ? 'initial' : 'none'}>
						<animate
							attributeName="display"
							to="initial"
							dur="0.1s"
							fill="freeze"
							calcMode="discrete"
							begin="fightTheEnemyHpEnemy{i + 2}.begin"
						/>

						<animate
							attributeName="opacity"
							values="1;0;1"
							repeatCount="2"
							dur="0.2s"
							calcMode="discrete"
							begin="fightTheEnemyHpEnemy{i + 2}.begin"
						/>

						<animate
							attributeName="display"
							to="none"
							dur="0.1s"
							fill="freeze"
							calcMode="discrete"
							id="fightTheEnemyHpEnemy{i + 1}"
							begin="click"
						/>

						<g>
							<animateTransform
								attributeName="transform"
								type="scale"
								dur="0.1s"
								values="1; 1.1; 1"
								begin={Array(hpYou)
									.fill()
									.map((_, i) => `fightTheEnemyHpDrop${i + 1}.begin`)
									.join(';')}
								end="fightTheEnemyHpEnemy1.begin"
							/>
							<animateTransform
								attributeName="transform"
								type="translate"
								dur="0.1s"
								values="0 0; 0 -1; 0 0"
								begin={Array(hpYou)
									.fill()
									.map((_, i) => `fightTheEnemyHpDrop${i}.begin`)
									.join(';')}
								end="fightTheEnemyHpEnemy1.begin"
								additive="sum"
							/>
							<path
								d="M 5 -2 q 3 -5 5 -5 c 3 0 3 8 0 8 q -1.5 0 -1.5 -3 v 2 l -3.5 4.5 v 1 c 0 4 -2 7 -14 7 q 4 -2 4 -4 v -4 l -3.5 -4.5 v -2 q 0 3 -1.5 3 c -3 0 -3 -8 0 -8 q 2 0 5 5"
							/>
							<circle cx="1.8" cy="-3.5" r="0.9" />
							<circle cx="-1.8" cy="-3.5" r="0.9" />
							<rect x="-1.7" y="-1" width="3.4" height="1.7" rx="1" />
							<circle cy="-2.5" r="5" />
							<circle cx="1.8" cy="-3.5" r="0.9" />
							<circle cx="-1.8" cy="-3.5" r="0.9" />
							<rect x="-1.7" y="-1" width="3.4" height="1.7" rx="1" />
						</g>
					</g>
				{/each}
			</g>
		</g>
	</g>

	<g>
		<g transform="translate(40 25)">
			<g
				style="pointer-events: none;"
				font-size="7"
				font-weight="bold"
				font-family="sans-serif"
				text-anchor="middle"
				dominant-baseline="middle"
				fill="#f7f7f7"
				stroke="currentColor"
				stroke-width="0.3"
			>
				<animate
					attributeName="opacity"
					to="0"
					fill="freeze"
					dur="0.1s"
					begin="fightTheEnemyStart.begin"
				/>
				<text> Fight! </text>
			</g>
		</g>

		<rect style:cursor="pointer" width="80" height="50" opacity="0">
			<animate
				id="fightTheEnemyStart"
				attributeName="display"
				to="none"
				fill="freeze"
				begin="click"
				dur="0.1s"
				restart="never"
			/>
		</rect>
	</g>

	<g>
		<rect display="none" width="80" height="50" opacity="0">
			<animate
				attributeName="display"
				to="initial"
				begin="fightTheEnemyHpEnemy1.end"
				fill="freeze"
				dur="0.1s"
				id="fightTheEnemyWin"
			/>
		</rect>

		<rect display="none" width="80" height="50" opacity="0">
			<animate
				attributeName="display"
				to="initial"
				begin="fightTheEnemyHpDrop1.end"
				end="fightTheEnemyHpEnemy1.end"
				fill="freeze"
				dur="0.1s"
				id="fightTheEnemyLoss"
			/>
		</rect>
	</g>

	<g display="none">
		<animate
			attributeName="display"
			to="initial"
			begin="fightTheEnemyWin.begin + 2s; fightTheEnemyLoss.begin + 2s"
			fill="freeze"
			dur="0.1s"
			id="fightTheEnemyMessage"
		/>
		<g transform="translate(40 25)">
			<g
				style="pointer-events: none;"
				font-size="6"
				font-weight="bold"
				font-family="sans-serif"
				text-anchor="middle"
				dominant-baseline="middle"
				fill="#f7f7f7"
				stroke="currentColor"
				stroke-width="0.3"
			>
				<animateTransform
					attributeName="transform"
					type="translate"
					to="0 1"
					dur="0.25s"
					repeatCount="indefinite"
					begin="fightTheEnemyMessage.begin"
					end="fightTheEnemyEnd.end"
					fill="freeze"
					calcMode="discrete"
				/>
				<text display="none" y="5">
					<animate
						attributeName="display"
						to="initial"
						begin="fightTheEnemyWin.begin"
						fill="freeze"
						dur="0.1s"
					/>
					{#each 'Level up!'.split('') as l, i}
						<tspan dx="0.5" dy={i % 2 === 0 ? 0.5 : -0.5}>{l}</tspan>
					{/each}
				</text>

				<text display="none" y="-20">
					<animate
						attributeName="display"
						to="initial"
						begin="fightTheEnemyLoss.begin"
						fill="freeze"
						dur="0.1s"
					/>
					{#each 'Oowoo'.split('') as l, i}
						<tspan dx="0.5" dy={i % 2 === 0 ? 0.5 : -0.5}>{l}</tspan>
					{/each}
				</text>
			</g>
		</g>

		<rect style:cursor="pointer" width="80" height="50" opacity="0">
			<animate
				attributeName="display"
				to="none"
				fill="freeze"
				begin="click"
				restart="never"
				dur="0.1s"
				id="fightTheEnemyEnd"
			/>
		</rect>
	</g>
</svg>
