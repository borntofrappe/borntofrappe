export default {
	'flasks-color-channels': `<svg style="display: block;" viewBox="0 0 300 100">
    <style>
        .hover .translate,
        .hover .scale {
            transition: transform 0.5s;
            transition-timing-function: cubic-bezier(.09,1.09,.44,1.38);
        }

        .hover .scale {
            transform: scale(1);
        }

        .hover .translate {
            transform: translateY(8px);
        }

        .hover:hover .translate {
            transform: translateY(1px);
            transition-timing-function: cubic-bezier(.6,-0.35,.22,1.47);
        }

        .hover:hover .scale {
            transform: scale(0.8);
        }
    </style>
    <defs>
        <circle id="flask-body" r="30" />
        <clipPath id="flask-clip">
            <use href="#flask-body" />
        </clipPath>
        <g id="flask-color">
            <rect fill="hsl(0 0% 25%)" x="-11" y="-50" width="22" height="9" rx="4" />
            <rect fill="hsl(0 0% 15%)" x="-7" y="-41.1" width="14" height="8" />
            <use fill="currentColor" href="#flask-body" />
            <g clip-path="url(#flask-clip)" fill="hsl(0 0% 100%)">
                <path opacity="0.2" d="M -50 10 q 25 -15 50 0 t 50 0 v 40 h -100 z" />
                <path transform="translate(10 10)" opacity="0.2" d="M -50 10 q 25 -15 50 0 t 50 0 v 40 h -100 z" />
            </g>
            <circle fill="none" stroke="hsl(0 0% 25%)" stroke-width="6" r="33" />
            <g fill="hsl(0 0% 100% / 0.5)">
                <circle cx="-13" cy="-11" r="6.5" />
                <circle cx="9" cy="-12" r="3.25" />
            </g>
            <g fill="hsl(0 0% 95% / 0.4)">
                <circle r="3.25" />
                <circle cx="16" cy="4" r="6.5" />
            </g>
        </g>
        <ellipse id="flask-shadow" fill="hsl(0 0% 70%)" rx="16" ry="2" />
    </defs>
    <g class="hover" style="color: red;">
        <g transform="translate(50 50)">
            <use class="translate" transform="translate(0 8)" href="#flask-color" />
        </g>
        <g transform="translate(50 98)">
            <use class="scale" transform="scale(1)" href="#flask-shadow" />
        </g>
    </g>

    <g class="hover" style="color: green;" transform="translate(100 0)">
        <g transform="translate(50 50)">
            <use class="translate" transform="translate(0 8)" href="#flask-color" />
        </g>
        <g transform="translate(50 98)">
            <use class="scale" transform="scale(1)" href="#flask-shadow" />
        </g>
    </g>

    <g class="hover" style="color: blue;" transform="translate(200 0)">
        <g transform="translate(50 50)">
            <use class="translate" transform="translate(0 8)" href="#flask-color" />
        </g>
        <g transform="translate(50 98)">
            <use class="scale" transform="scale(1)" href="#flask-shadow" />
        </g>
    </g>
</svg>`
};
