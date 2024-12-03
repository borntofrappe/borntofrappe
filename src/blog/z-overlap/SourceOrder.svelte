<script>
  let y = $state(5);
</script>

<div>
  <label>
    <span>Drag the handle to deliver the trick.</span>
    <input type="range" min="0" max="80" step="1" bind:value={y} />
  </label>

  <svg style="display: block;" viewBox="0 0 380 300">
    <defs>
      <symbol
        id="source-order-sparkle"
        viewBox="-5 -5 10 10"
        x="-9"
        y="-9"
        width="18"
        height="18"
      >
        <path
          fill="currentColor"
          d="M -5 0 A 5 5 0 0 0 0 -5 A 5 5 0 0 0 5 0 A 5 5 0 0 0 0 5 A 5 5 0 0 0 -5 0 Z"
        />
      </symbol>
      <symbol
        id="source-order-almond"
        viewBox="-6 -4 12 8"
        x="-12"
        y="-8"
        width="24"
        height="16"
      >
        <path
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
          d="M -5 0 C -3.5 -2 -2 -3 0 -3 C 2 -3 3.5 -2 5 0 C 3.5 2 2 3 0 3 C -2 3 -3.5 2 -5 0 Z"
        />
      </symbol>
      <symbol
        id="source-order-round"
        viewBox="-5 -5 10 10"
        x="-9"
        y="-9"
        width="18"
        height="18"
      >
        <circle fill="none" stroke="currentColor" stroke-width="2" r="4" />
      </symbol>
      <symbol
        id="source-order-rhomboid"
        viewBox="-5 -5 10 10"
        x="-9"
        y="-9"
        width="18"
        height="18"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
          d="M -4 0 L 0 -4 L 4 0 L 0 4 Z"
        />
      </symbol>
      <symbol
        id="source-order-lines"
        viewBox="-1.5 -19.5 19 21"
        x="-9.5"
        y="-10.5"
        width="19"
        height="21"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
        >
          <path d="M 0 0 L 16 -18" />
          <path d="M 10 0 L 16 -6.75" />
        </g>
      </symbol>
      <symbol
        id="source-order-seal"
        viewBox="-77.79217529296875 -80.21690368652344 155.5843505859375 160.43380737304688"
      >
        <mask id="source-order-seal-mask">
          <rect
            fill="white"
            x="-77.79217529296875"
            y="-80.21690368652344"
            width="155.5843505859375"
            height="160.43380737304688"
          />
          <path
            fill="none"
            stroke="black"
            stroke-width="4"
            stroke-linejoin="round"
            stroke-linecap="round"
            d="M 64 0 C 66.57395614066074 21.631189606246316 66.57395614066074 21.631189606246316 51.77708763999664 37.61825614671828 C 41.14496766047312 56.63118960624632 41.14496766047312 56.63118960624632 19.777087639996637 60.867617042889826 C 4.2862637970157365e-15 70 4.2862637970157365e-15 70 -19.77708763999663 60.86761704288983 C -41.144967660473114 56.63118960624632 -41.144967660473114 56.63118960624632 -51.77708763999663 37.61825614671829 C -66.57395614066074 21.631189606246327 -66.57395614066074 21.631189606246327 -64 7.83773951454306e-15 C -66.57395614066074 -21.63118960624634 -66.57395614066074 -21.63118960624634 -51.777087639996644 -37.618256146718274 C -41.14496766047313 -56.631189606246316 -41.14496766047313 -56.631189606246316 -19.777087639996644 -60.867617042889826 C -1.2858791391047208e-14 -70 -1.2858791391047208e-14 -70 19.777087639996623 -60.86761704288983 C 41.14496766047311 -56.63118960624633 41.14496766047311 -56.63118960624633 51.77708763999663 -37.618256146718295 C 66.57395614066074 -21.631189606246338 66.57395614066074 -21.631189606246338 64 0 Z"
          />
          <path
            fill="black"
            d="M 1.7145055188062944e-15 28 C -27.03812160545376 37.214781741247585 -27.03812160545376 37.214781741247585 -26.6295824562643 8.65247584249853 C -43.74859974957706 -14.214781741247595 -43.74859974957706 -14.214781741247595 -16.45798706418925 -22.652475842498525 C -8.450062914116736e-15 -46 -8.450062914116736e-15 -46 16.45798706418924 -22.652475842498532 C 43.74859974957706 -14.214781741247593 43.74859974957706 -14.214781741247593 26.629582456264302 8.652475842498522 C 27.038121605453806 37.21478174124755 27.038121605453806 37.21478174124755 1.7145055188062944e-15 28 Z"
          />
        </mask>
        <path
          mask="url(#source-order-seal-mask)"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="25"
          stroke-linejoin="round"
          stroke-linecap="round"
          d="M 64 0 C 66.57395614066074 21.631189606246316 66.57395614066074 21.631189606246316 51.77708763999664 37.61825614671828 C 41.14496766047312 56.63118960624632 41.14496766047312 56.63118960624632 19.777087639996637 60.867617042889826 C 4.2862637970157365e-15 70 4.2862637970157365e-15 70 -19.77708763999663 60.86761704288983 C -41.144967660473114 56.63118960624632 -41.144967660473114 56.63118960624632 -51.77708763999663 37.61825614671829 C -66.57395614066074 21.631189606246327 -66.57395614066074 21.631189606246327 -64 7.83773951454306e-15 C -66.57395614066074 -21.63118960624634 -66.57395614066074 -21.63118960624634 -51.777087639996644 -37.618256146718274 C -41.14496766047313 -56.631189606246316 -41.14496766047313 -56.631189606246316 -19.777087639996644 -60.867617042889826 C -1.2858791391047208e-14 -70 -1.2858791391047208e-14 -70 19.777087639996623 -60.86761704288983 C 41.14496766047311 -56.63118960624633 41.14496766047311 -56.63118960624633 51.77708763999663 -37.618256146718295 C 66.57395614066074 -21.631189606246338 66.57395614066074 -21.631189606246338 64 0 Z"
        />
      </symbol>
    </defs>
    <g style="color: hsl(48 95% 76%);">
      <use
        transform="translate(280 45) scale(1.6) rotate(-40)"
        href="#source-order-almond"
      />

      <use transform="translate(50 185)" href="#source-order-round" />

      <use transform="translate(65 210)" href="#source-order-lines" />
      <use
        transform="translate(230 40) rotate(180)"
        href="#source-order-lines"
      />
      <use transform="translate(310 230)" href="#source-order-lines" />
      <use
        transform="translate(325 105) rotate(180)"
        href="#source-order-lines"
      />

      <use
        transform="translate(340 180) scale(1.2)"
        href="#source-order-rhomboid"
      />

      <use
        transform="translate(85 70) scale(1.2)"
        href="#source-order-sparkle"
      />
      <use transform="translate(300 75)" href="#source-order-sparkle" />

      <g fill="currentColor">
        <circle transform="translate(135 60)" r="7" />
        <circle transform="translate(260 80) scale(0.7)" r="7" />
      </g>
    </g>

    <g fill="currentColor" style="color: hsl(36 77% 49%);">
      <circle transform="translate(335 135) scale(1.5)" r="7" />
    </g>

    <g transform="translate(45 135)">
      <g style="color: hsl(36 77% 49%);" fill="currentColor">
        <path
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
          d="M 5 -20 L 32 0 L 5 20 Z"
        />
        <circle r="25" />
      </g>
      <g fill="hsl(48 100% 88%)">
        <circle r="3.75" />
        <circle cx="11" r="3.75" />
        <circle cx="-11" r="3.75" />
      </g>
    </g>

    <g transform="translate(190 150)">
      <g stroke-linejoin="round" stroke-linecap="round">
        <path
          style="color: hsl(42 87% 55%);"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="30"
          d="M 0 -65 L 85 -15 L 85 65 A 20 20 0 0 1 65 85 L -65 85 A 20 20 0 0 1 -85 65 L -85 -15 L 0 -65 Z"
        />
        <g transform="translate(0 {y * -1})">
          <path
            style="color: hsl(48 100% 88%);"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="29"
            stroke-linejoin="round"
            stroke-linecap="round"
            d="M 0 -45 L 59.5 -10 L 59.5 45 A 20 20 0 0 1 39.5 65 L -39.5 65 A 20 20 0 0 1 -59.5 45 L -59.5 -10 L 0 -45 Z"
          />
          <g fill="none" stroke="hsl(36 77% 49%)" stroke-width="10">
            <path d="M -26 -20 H 26" />
            <path d="M -18 0 H 18" />
          </g>
          <g transform="translate(45 45)">
            <use
              style="color: hsl(356 75% 53%);"
              href="#source-order-seal"
              x="-16"
              y="-16"
              width="32"
              height="32"
            />
          </g>
        </g>
        <path
          style="color: hsl(42 87% 55%);"
          fill="currentColor"
          d="M -74.36474 -11 A 15 15 0 0 0 -74.5 -10 V 45 C -74.5 64.1516 -58.65151 80 -39.5 80 H 39.5 C 58.65249 80 74.5 64.1516 74.5 45 V -10 A 15 15 0 0 0 74.5 -10.33829 A 15 15 0 0 1 66.254368 3.39371 L 6.754368 33.39371 A 15 15 0 0 1 -6.753632 33.39371 L -66.253632 3.39371 A 15 15 0 0 1 -74.364932 -11 Z"
        />
      </g>
    </g>

    <g transform="translate(110 230)">
      <g
        fill="none"
        stroke="hsl(36 77% 49%)"
        stroke-width="4"
        stroke-linecap="round"
      >
        <path d="M 0 0 L 14 -16" />
        <path d="M 14 0 L 28 -16" />
        <path d="M 28 0 L 42 -16" />
      </g>
    </g>

    <g transform="translate(245 225) rotate(-20)">
      <path
        style="color: hsl(36 77% 49%);"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="10"
        stroke-linejoin="round"
        stroke-linecap="round"
        d="M -15 0 C -10 -7 10 -7 15 0 C 10 7 -10 7 -15 0 Z"
      />
    </g>
  </svg>
</div>

<style>
  div > * + * {
    margin-block-start: 0.5rem;
  }

  label {
    display: block;
  }

  label input {
    margin-block-start: 0.5rem;
    display: block;
    inline-size: 100%;
  }
</style>
