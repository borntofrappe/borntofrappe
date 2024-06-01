export default {
	'scss-cubes': `<svg style="display: block;" viewBox="-0.05 -4.8 12.1 10.1">
    <defs>
        <g id="c-cube">
            <path d="M 0 0.25 l 0.5 -0.25 0.5 0.25 0 0.5 -0.5 0.25 -0.5 -0.25" />
            <g fill="white">
                <path opacity="0.5" d="M 0 0.25 l 0.5 0.25 0 0.5 -0.5 -0.25" />
                <path opacity="0.25" d="M 0.5 0.5 l 0.5 -0.25 0 0.5 -0.5 0.25" />
            </g>
        </g>
        <pattern id="c-pattern" viewBox="-0.4 -0.4 1.8 1.8" patternUnits="userSpaceOnUse" width="1" height="1">
            <g fill="none" stroke="hsl(187 69% 55%)" stroke-width="0.1">
            <path>
                <animate attributeName="d" dur="9s" begin="6s" repeatCount="indefinite" values="M 0.5 0.875 L 0.5 0.875; M 0.5 0.875 L 0.5 0.875; M 0.5 0.875 L 0.5 0.875; M 0.5 0.875 L 0.5 0.975; M 0.5 0.975 L 0.5 0.975; M 0.5 0.975 L 0.5 0.975" />
            </path>
            <path>
                <animate attributeName="d" dur="9s" repeatCount="indefinite" values="M 0 0.5 L 0 0.5; M 0 0.5 L 0 0.5; M 0 0.5 L 0 0.5; M 0 0.5 L 0 0.7; M 0 0.7 L 0 0.7; M 0 0.7 L 0 0.7" />
            </path>
            <path>
                <animate attributeName="d" dur="9s" begin="3s" repeatCount="indefinite" values="M 1 0.1 L 1 0.1; M 1 0.1 L 1 0.1; M 1 0.1 L 1 0.1; M 1 0.1 L 1 0.175; M 1 0.175 L 1 0.175; M 1 0.175 L 1 0.175" />
            </path>
            </g>
        </pattern>
        <pattern id="c-pattern-1" viewBox="-0.4 -0.4 1.8 1.8" patternUnits="userSpaceOnUse" width="1" height="1">
            <g fill="none" stroke="hsl(187 69% 55%)" stroke-width="0.1">
                <path>
                    <animate attributeName="d" dur="9s" begin="6s" repeatCount="indefinite" values="M 0.4 0.875 L 0.4 0.875; M 0.4 0.875 L 0.4 0.875; M 0.4 0.875 L 0.6 0.975; M 0.6 0.975 L 0.6 0.975; M 0.6 0.975 L 0.6 0.975; M 0.6 0.975 L 0.6 0.975" />
                </path>
                <path>
                    <animate attributeName="d" dur="9s" repeatCount="indefinite" values="M 0 0.5 L 0 0.5; M 0 0.5 L 0 0.5; M 0 0.5 L 0.4 0.7; M 0.4 0.7 L 0.4 0.7; M 0.4 0.7 L 0.4 0.7; M 0.4 0.7 L 0.4 0.7" />
                </path>
                <path>
                    <animate attributeName="d" dur="9s" begin="3s" repeatCount="indefinite" values="M 0.85 0.1 L 0.85 0.1; M 0.85 0.1 L 0.85 0.1; M 0.85 0.1 L 1 0.175; M 1 0.175 L 1 0.175; M 1 0.175 L 1 0.175; M 1 0.175 L 1 0.175" />
                </path>
            </g>
        </pattern>
    </defs>
    <g fill="hsl(187 80% 42%)">
        <g id="c-cube-s">
            <use x="8" y="1.5" href="#c-cube" />
            <use x="7.5" y="1.75" href="#c-cube" />
            <use x="7" y="2" href="#c-cube" />
            <use x="6.5" y="2.25" href="#c-cube" />
            <use x="8" y="1" href="#c-cube" />
            <use x="8" y="0.5" href="#c-cube" />
            <use x="8" href="#c-cube" />
            <use x="7.5" y="0.25" href="#c-cube" />
            <use x="7" y="0.5" href="#c-cube" />
            <use x="6.5" y="0.75" href="#c-cube" />
            <use x="6.5" y="0.25" href="#c-cube" />
            <use x="6.5" y="-0.25" href="#c-cube" />
            <use x="8" y="-1.5" href="#c-cube" />
            <use x="7.5" y="-1.25" href="#c-cube" />
            <use x="7" y="-1" href="#c-cube" />
            <use x="6.5" y="-0.75" href="#c-cube" />
        </g>
        <use x="3" y="-1.5" href="#c-cube-s" />
        <use x="5" y="3" href="#c-cube" />
        <use x="4.5" y="3.25" href="#c-cube" />
        <use x="4" y="3.5" href="#c-cube" />
        <use x="3.5" y="3.25" href="#c-cube" />
        <use x="3.5" y="2.75" href="#c-cube" />
        <use x="3.5" y="2.25" href="#c-cube" />
        <use x="3.5" y="1.75" href="#c-cube" />
        <use x="3.5" y="1.25" href="#c-cube" />
        <use x="5" href="#c-cube" />
        <use x="4.5" y="0.25" href="#c-cube" />
        <use x="4" y="0.5" href="#c-cube" />
        <g opacity="0.5">
            <path d="M 0 -0.25 3 1.25 12 -3.25 9 -4.75 Z" />
            <path d="M 3 1.25 12 -3.25 12 0.75 3 5.25 Z" />
            <path d="M 0 -0.25 3 1.25 3 5.25 0 3.75 Z" />
        </g>
        <g fill="none" stroke="hsl(187 69% 55%)" stroke-width="0.05" stroke-linecap="round" stroke-linejoin="round">
            <path d="M 0 -0.25 3 1.25 12 -3.25 9 -4.75 Z" />
            <path d="M 3 1.25 12 -3.25 12 0.75 3 5.25 Z" />
            <path d="M 0 -0.25 3 1.25 3 5.25 0 3.75 Z" />
        </g>
        <path fill="url(#c-pattern-1)" d="M 0 -0.25 3 1.25 12 -3.25 9 -4.75 Z" />
        <path fill="url(#c-pattern)" d="M 0 -0.25 3 1.25 12 -3.25 12 0.75 3 5.25 0 3.75 Z" />
        <use y="3" href="#c-cube" />
        <use x="0.5" y="3.25" href="#c-cube" />
        <use x="1" y="3.5" href="#c-cube" />
        <use x="1.5" y="3.75" href="#c-cube" />
        <use x="1.5" y="3.25" href="#c-cube" />
        <use x="1.5" y="2.75" href="#c-cube" />
        <use y="1.5" href="#c-cube" />
        <use x="0.5" y="1.75" href="#c-cube" />
        <use x="1" y="2" href="#c-cube" />
        <use x="1.5" y="2.25" href="#c-cube" />
        <use y="1" href="#c-cube" />
        <use y="0.5" href="#c-cube" />
        <use href="#c-cube" />
        <use x="0.5" y="0.25" href="#c-cube" />
        <use x="1" y="0.5" href="#c-cube" />
        <use x="1.5" y="0.75" href="#c-cube" />
    </g>
</svg>`
};
