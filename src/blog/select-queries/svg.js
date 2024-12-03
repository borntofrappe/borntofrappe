export default {
	'er-diagram': `<svg style="display: block; --er-background: hsl(210 10% 23%); --er-color-text: hsl(210 14% 83%); --er-background-text: hsl(210 11% 15%); --er-color-line: hsl(210 7% 56%);" viewBox="-65 -70 435 320">
  <defs>
    <symbol id="er-symbol-key" viewBox="-5 -5 10 10">
      <path fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round" stroke-linecap="round" d="M -2 -4.5 -2 4.5 -2.25 -4.5 -2.25 4.5 M 2 -4.5 2 4.5 2.25 -4.5 2.25 4.5 M -4.5 -2 4.5 -2 M -4.5 -2.25 4.5 -2.25 M -4.5 2 4.5 2 M -4.5 2.25 4.5 2.25" />
    </symbol>
    <symbol id="er-symbol-text" viewBox="-5 -5 10 10">
      <path fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round" stroke-linecap="round" d="M -3.25 -4.5 -4.5 -2.75 -4.5 -4.5 4.5 -4.5 4.5 -2.75 3.25 -4.5 M -4.5 -4 4.5 -4 M -0.5 -4.5 -0.5 4 -1 4.5 1 4.5 0.5 4 0.5 -4.5" />
    </symbol>
    <filter id="er-filter-background" width="1.55" height="1.25">
      <feFlood flood-color="var(--er-background-text, hsl(0 0% 100%))" />
      <feComposite in="SourceGraphic" />
    </filter>
  </defs>
  <rect fill="var(--er-background, hsl(228 38% 97%))" x="-65" y="-70" width="435" height="320" />
  <g fill="var(--er-color-text, hsl(0 0% 9%))" font-family="monospace">
    <g fill="none" stroke="var(--er-color-line, hsl(257 37% 37%))" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 5">
      <path d="M 0 22 -15 22 -15 162 0 162" />
      <path d="M 130 22 105 22 105 -30 -25 -30 -25 182 0 182" />
      <path d="M 260 22 235 22 235 -45 -40 -45 -40 202 0 202" />
      <path d="M -15 100 0 100 175 100 175 162 200 162" />
      <path d="M 175 165 175 182 200 182" />
    </g>
    <g filter="url(#er-filter-background)">
      <text font-size="12" font-weight="700">pokemon</text>
      <g transform="translate(18 25)" font-size="10">
        <use style="color: var(--er-color-text, hsl(0 0% 9%))" href="#er-symbol-key" x="-15" y="-6" width="7" height="7" />
        <text>id</text>
        <g transform="translate(0 20)">
          <use style="color: var(--er-color-text, hsl(0 0% 9%))" href="#er-symbol-text" x="-15" y="-6" width="7" height="7" />
          <text>no</text>
        </g>
        <g transform="translate(0 40)">
          <use style="color: var(--er-color-text, hsl(0 0% 9%))" href="#er-symbol-text" x="-15" y="-6" width="7" height="7" />
          <text>name</text>
        </g>
      </g>
    </g>
    <g filter="url(#er-filter-background)" transform="translate(130 0)">
      <text font-size="12" font-weight="700">area</text>
      <g transform="translate(18 25)" font-size="10">
        <use style="color: var(--er-color-text, hsl(0 0% 9%))" href="#er-symbol-key" x="-15" y="-6" width="7" height="7" />
        <text>id</text>
        <g transform="translate(0 20)">
          <use style="color: var(--er-color-text, hsl(0 0% 9%))" href="#er-symbol-text" x="-15" y="-6" width="7" height="7" />
          <text>name</text>
        </g>
      </g>
    </g>
    <g filter="url(#er-filter-background)" transform="translate(260 0)">
      <text font-size="12" font-weight="700">version</text>
      <g transform="translate(18 25)" font-size="10">
        <use style="color: var(--er-color-text, hsl(0 0% 9%))" href="#er-symbol-key" x="-15" y="-6" width="7" height="7" />
        <text>id</text>
        <g transform="translate(0 20)">
          <use style="color: var(--er-color-text, hsl(0 0% 9%))" href="#er-symbol-text" x="-15" y="-6" width="7" height="7" />
          <text>name</text>
        </g>
      </g>
    </g>
    <g filter="url(#er-filter-background)" transform="translate(0 140)">
      <text font-size="12" font-weight="700">location</text>
      <g transform="translate(18 25)" font-size="10">
        <use style="color: var(--er-color-text, hsl(0 0% 9%))" href="#er-symbol-key" x="-15" y="-6" width="7" height="7" />
        <text>pokemon_id</text>
        <g transform="translate(0 20)">
          <use style="color: var(--er-color-text, hsl(0 0% 9%))" href="#er-symbol-key" x="-15" y="-6" width="7" height="7" />
          <text>area_id</text>
        </g>
        <g transform="translate(0 40)">
          <use style="color: var(--er-color-text, hsl(0 0% 9%))" href="#er-symbol-key" x="-15" y="-6" width="7" height="7" />
          <text>version_id</text>
        </g>
      </g>
    </g>
    <g filter="url(#er-filter-background)" transform="translate(200 140)">
      <text font-size="12" font-weight="700">evolution</text>
      <g transform="translate(18 25)" font-size="10">
        <use style="color: var(--er-color-text, hsl(0 0% 9%))" href="#er-symbol-key" x="-15" y="-6" width="7" height="7" />
        <text>evolution_id</text>
        <g transform="translate(0 20)">
          <use style="color: var(--er-color-text, hsl(0 0% 9%))" href="#er-symbol-key" x="-15" y="-6" width="7" height="7" />
          <text>base_id</text>
        </g>
      </g>
    </g>
  </g>
</svg>`,
	'up-grade': `<svg style="display: block;" viewBox="0 0 46 30"> 
  <defs>
    <symbol id="up-grade-normal" viewBox="0 -0.5 46 30">
      <rect fill="hsl(0 0% 66%)" y="-0.5" width="46" height="30" />
      <path stroke="hsl(0 0% 97%)" d="M 20 3 26 3 M 18 4 28 4 M 16 5 21 5 M 25 5 30 5 M 15 6 19 6 M 27 6 31 6 M 14 7 17 7 M 29 7 32 7 M 13 8 16 8 M 30 8 33 8 M 13 9 15 9 M 31 9 33 9 M 12 10 15 10 M 31 10 34 10 M 12 11 14 11 M 32 11 34 11 M 11 12 14 12 M 32 12 35 12 M 11 13 13 13 M 33 13 35 13 M 11 14 21 14 M 25 14 35 14 M 11 15 21 15 M 25 15 35 15 M 21 12 25 12 M 20 13 22 13 M 24 13 26 13 M 20 16 22 16 M 24 16 26 16 M 21 17 25 17 M 11 16 13 16 M 33 16 35 16 M 11 17 14 17 M 32 17 35 17 M 20 26 26 26 M 18 25 28 25 M 16 24 21 24 M 25 24 30 24 M 15 23 19 23 M 27 23 31 23 M 14 22 17 22 M 29 22 32 22 M 13 21 16 21 M 30 21 33 21 M 13 20 15 20 M 31 20 33 20 M 12 19 15 19 M 31 19 34 19 M 12 18 14 18 M 32 18 34 18" />
    </symbol>
    <g id="up-grade-arrow"> 
      <path stroke="hsl(240 100% 35%)" d="M 3 0 4 0 M 2 1 5 1 M 1 2 6 2 M 0 3 7 3 M 2 4 5 4 M 2 5 5 5 M 2 6 5 6" />
      <path stroke="hsl(0 100% 45%)" d="M 2 7 5 7 M 2 8 5 8 M 2 10 5 10" />
    </g>
    <symbol id="up-grade-super" viewBox="0 -0.5 46 30"> 
      <rect fill="hsl(0 0% 97%)" y="-0.5" width="46" height="30" />
      <use x="1" y="-6" href="#up-grade-arrow" />
      <use x="1" y="6" href="#up-grade-arrow" />
      <use x="1" y="18" href="#up-grade-arrow" />
      <use x="8" y="1" href="#up-grade-arrow" />
      <use x="8" y="13" href="#up-grade-arrow" />
      <use x="8" y="25" href="#up-grade-arrow" />
      <use x="16" y="-6" href="#up-grade-arrow" />
      <use x="16" y="6" href="#up-grade-arrow" />
      <use x="16" y="18" href="#up-grade-arrow" />
      <use x="23" y="1" href="#up-grade-arrow" />
      <use x="23" y="13" href="#up-grade-arrow" />
      <use x="23" y="25" href="#up-grade-arrow" />
      <use x="31" y="-6" href="#up-grade-arrow" />
      <use x="31" y="6" href="#up-grade-arrow" />
      <use x="31" y="18" href="#up-grade-arrow" />
      <use x="38" y="1" href="#up-grade-arrow" />
      <use x="38" y="13" href="#up-grade-arrow" />
      <use x="38" y="25" href="#up-grade-arrow" />

      <path stroke="hsl(0 0% 0%)" d="M 1 19 13 19 M 1 20 14 20 M 1 21 14 21 M 1 22 14 22 M 1 23 14 23 M 1 24 14 24 M 1 25 13 25 M 1 26 13 26 M 2 27 13 27" />
      <path stroke="hsl(0 0% 97%)" d="M 2 20 4 20 M 5 20 7 20 M 8 20 12 20 M 2 21 4 21 M 5 21 7 21 M 8 21 10 21 M 11 21 13 21 M 2 22 4 22 M 5 22 7 22 M 8 22 10 22 M 11 22 13 22 M 2 23 4 23 M 5 23 7 23 M 8 23 10 23 M 11 23 13 23 M 2 24 4 24 M 5 24 7 24 M 8 24 10 24 12 24 M 2 25 7 25 M 8 25 10 25 M 3 26 6 26 M 8 26 10 26" />

      <path stroke="hsl(0 0% 0%)" d="M 16 19 45 19 M 15 20 45 20 M 15 21 45 21 M 15 22 45 22 M 15 23 45 23 M 15 24 45 24 M 15 25 45 25 M 15 26 45 26 M 16 27 45 27" />
      <path stroke="hsl(0 0% 97%)" d="M 17 20 20 20 M 16 21 18 21 M 19 21 21 21 M 16 22 18 22 M 16 23 21 23 M 16 24 18 24 M 19 24 21 24 M 16 25 18 25 M 19 25 21 25 M 17 26 21 26 M 22 20 26 20 M 22 21 24 21 M 25 21 27 21 M 22 22 24 22 M 25 22 27 22 M 22 23 24 23 27 23 M 22 24 26 24 M 22 25 24 25 M 25 25 27 25 M 22 26 24 26 M 25 26 27 26 M 29 20 32 20 M 28 21 30 21 M 31 21 33 21 M 28 22 30 22 M 31 22 33 22 M 28 23 33 23 M 28 24 30 24 M 31 24 33 24 M 28 25 30 25 M 31 25 33 25 M 28 26 30 26 M 31 26 33 26 M 34 20 38 20 M 34 21 36 21 M 37 21 39 21 M 34 22 36 22 M 37 22 39 22 M 34 23 36 23 M 37 23 39 23 M 34 24 36 24 M 37 24 39 24 M 34 25 36 25 M 37 25 39 25 M 34 26 38 26 M 40 20 44 20 M 40 21 42 21 M 40 22 42 22 M 40 23 44 23 M 40 24 42 24 M 40 25 42 25 M 40 26 44 26" /> 

      <path stroke="hsl(0 0% 0%)" d="M 20 17 26 17 M 19 16 27 16 M 18 15 28 15 M 17 14 29 14 M 16 13 30 13 M 16 12 30 12 M 15 11 31 11 M 15 10 31 10 M 15 9 31 9 M 15 8 31 8 M 16 7 30 7 M 16 6 30 6 M 16 5 30 5 M 17 4 29 4 M 18 3 28 3 M 19 2 27 2" />
      <path stroke="hsl(240 100% 35%)" d="M 19 11 22 11 M 24 11 27 11 M 17 10 29 10 M 16 9 18 9 M 28 9 30 9 M 20 9 22 9 M 24 9 26 9 M 16 8 17 8 M 20 8 23 8 M 24 8 26 8 M 29 8 30 8 M 20 7 22 7 M 23 7 26 7 M 20 6 22 6 M 24 6 26 6 M 20 5 26 5 M 20 4 26 4 M 21 3 25 3" />
      <path stroke="hsl(0 100% 45%)" d="M 18 9 20 9 M 17 8 20 8 M 17 7 20 7 M 17 6 20 6 M 17 5 20 5 M 18 4 20 4 M 26 4 28 4 M 26 5 29 5 M 26 6 29 6 M 26 7 29 7 M 26 8 29 8 M 26 9 28 9" /> 
      <path stroke="hsl(0 0% 97%)" d="M 21 16 25 16 M 19 15 27 15 M 18 14 22 14 M 24 14 28 14 M 17 13 21 13 M 22 13 24 13 M 25 13 29 13 M 17 12 20 12 M 22 12 24 12 M 26 12 29 12 M 16 11 17 11 M 29 11 30 11 M 22 9 24 9 M 23 8 24 8 M 22 7 23 7 M 22 6 24 6" />
    </symbol>
  </defs>
  <g style="cursor: pointer;">
    <use href="#up-grade-normal">
      <set id="windowDefault" begin="click" />
    </use>
    <use href="#up-grade-super">
      <set attributeName="display" to="none" />
      <set begin="click" attributeName="display" to="none" />
      <set begin="windowDefault.begin" attributeName="display" to="initial" />
    </use>
  </g>
</svg>`
};
