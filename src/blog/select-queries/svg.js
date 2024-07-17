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
</svg>`
};
