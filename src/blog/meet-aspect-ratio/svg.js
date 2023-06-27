export default {
	defs: `<svg aria-hidden="true" style="position: absolute; width: 0; height: 0">
    <defs>
        <pattern id="bento-box-pattern" patternUnits="userSpaceOnUse" width="0.1818" height="0.1818" viewBox="-5 -5 10 10" >
            <g fill="none" stroke="#396262" stroke-width="0.2">
                <path d="M -1 0 l 1 -1 1 1 -1 1z" />
                <path d="M -3 0 l 3 -3 3 3 -3 3z" />
                <path d="M -5 0 l 5 -5 5 5 -5 5z" />
                <path d="M -7 0 l 7 -7 7 7 -7 7z" />
                <path d="M -9 0 l 9 -9 9 9 -9 9z" />
            </g>
        </pattern>
    </defs>
</svg>`,
	'bento-box': `<svg style="display: block;" viewBox="-0.2 -0.2 3.4 3">
    <defs>
        <symbol id="bento-box-treat" viewBox="0 0 1 1">
            <rect fill="#353739" width="1" height="1" />
            <rect fill="#3c4043" width="1" height="0.8" />
            <rect fill="#fef9ea" x="0.15" y="0.15" width="0.7" height="0.5" rx="0.05" />
            <rect fill="currentColor" x="0.325" y="0.25" width="0.35" height="0.3" rx="0.1" />
        </symbol>
  
        <use id="bento-box-treat-1" style="color: #e7897e" href="#bento-box-treat" width="1" height="1" />
        <use id="bento-box-treat-2" style="color: #eacb7d" href="#bento-box-treat" width="1" height="1" />
        <use id="bento-box-treat-3" style="color: #97db7d" href="#bento-box-treat" width="1" height="1" />
    </defs>
    <rect fill="#69b3aa" x="-0.2" y="-0.2" width="3.4" height="3" />
    <g transform="translate(0 2.8) scale(1 0.9)">
        <rect fill="url(#bento-box-pattern)" x="-0.2" y="-3.333" width="3.4" height="3.333" />
    </g>
  
    <rect fill="#266a6b" width="3" height="2.6" />
    <rect fill="#225d5d" width="3" height="0.2" />
  
    <use href="#bento-box-treat-1" />
    <use y="0.8" href="#bento-box-treat-1" />
    <use y="1.6" href="#bento-box-treat-1" />
    <use x="1" href="#bento-box-treat-2" />
    <use x="1" y="0.8" href="#bento-box-treat-2" />
    <use x="2" href="#bento-box-treat-3" />
    <use x="2" y="1.6" href="#bento-box-treat-3" />
  
    <g transform="translate(0 2.4)">
        <rect fill="#69b3aa" x="-0.2" width="3.4" height="0.4" />
        <g transform="translate(0 0.4) scale(1 0.9)">
            <rect fill="url(#bento-box-pattern)" x="-0.2" y="-0.444" width="3.4" height="0.444" />
        </g>
    </g>
  
    <g transform="translate(0 2.6)">
        <rect fill="#559b95" x="-0.2" width="3.4" height="0.2" />
        <g transform="translate(0 0.2) scale(1 1.1)">
            <rect fill="url(#bento-box-pattern)" x="-0.2" y="-0.1818" width="3.4" height="0.1818" />
        </g>
    </g>
</svg>`
};
