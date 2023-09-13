export default {
	'outline-filter': `<svg style="display: block;" viewBox="-2.5 -16.962017059326172 38.461490631103516 22.93290138244629">
    <defs>
        <filter id="outline-filter-filter">
            <feMorphology in="SourceGraphic" result="dilation" operator="dilate" radius="1" />
            <feFlood result="color" flood-color="hsl(0 0% 25%)" />
            <feComposite in="color" in2="dilation" operator="in" />
            <feComposite in2="SourceGraphic" operator="out" />
            <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
    </defs>
    <text filter="url(#outline-filter-filter)" fill="hsl(0 0% 99%)" font-family="sans-serif" font-size="16" font-weight="700">Tutti</text>
</svg>`,
	'outline-html': `<div>
    <svg aria-hidden="true" style="position: absolute; width: 0; height: 0;">
        <defs>
            <filter id="outline-html-filter">
                    <feMorphology in="SourceGraphic" result="dilation" operator="dilate" radius="4" />
                    <feFlood result="color" flood-color="hsl(0 0% 25%)" />
                    <feComposite in="color" in2="dilation" operator="in" />
                    <feComposite in2="SourceGraphic" operator="out" />
                    <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
    </svg>
    <p style="filter: url(#outline-html-filter); color: hsl(0 0% 99%); font-family: sans-serif; font-size: 3rem; font-weight: 700;">
        On HTML element and even on longer sentences, daring to break in multiple rows.
    </p>
</div>`,
	'outline-stroke': `<svg style="display: block;" viewBox="-2.5 -16.962017059326172 83.21540832519531 22.93290138244629">
    <text fill="hsl(0 0% 99%)" stroke="hsl(0 0% 25%)" stroke-width="2" paint-order="stroke" font-family="sans-serif" font-size="16" font-weight="700">Sforzando</text>
</svg>`,
	'fe-morphology': `<svg style="display: block;" viewBox="-2.5 -16.962017059326172 56.25579833984375 22.93290138244629">
    <defs>
        <filter id="fe-morphology-filter">
            <feMorphology operator="dilate" radius="1" />
        </filter>
        <pattern id="fe-morphology-pattern" width="5.733225345611572" height="5.733225345611572" patternUnits="userSpaceOnUse" viewBox="0 -0.5 2 2">
            <path stroke="hsl(0 0% 25%)" d="M 0 0 1 0 M 1 1 2 1" />
            <path stroke="hsl(0 0% 35%)" d="M 1 0 2 0 M 0 1 1 1" />
        </pattern>
    </defs>
    <g fill="hsl(0 0% 25%)">
        <rect id="fe-morphology-background" x="-2.5" y="-16.962017059326172" width="56.25579833984375" height="22.93290138244629" />
    </g>
    <use href="#fe-morphology-background" fill="url(#fe-morphology-pattern)" />
    <text filter="url(#fe-morphology-filter)" fill="hsl(0 0% 99%)" font-family="sans-serif" font-size="16" font-weight="700">Tempo</text>
</svg>`,
	'fe-flood': `<svg style="display: block;" viewBox="-2.5 -16.962017059326172 51.239288330078125 22.93290138244629">
    <defs>
        <filter id="fe-flood-filter">
            <feFlood flood-color="hsl(0 0% 25%)" />
        </filter>
    </defs>
    <text filter="url(#fe-flood-filter)" fill="hsl(0 0% 99%)" font-family="sans-serif" font-size="16" font-weight="700">Senza</text>
</svg>`,
	'fe-composite-in': `<svg style="display: block;" viewBox="-2.5 -16.962017059326172 48.56983947753906 22.93290138244629">
    <defs>
        <filter id="fe-composite-in-filter">
            <feMorphology in="SourceGraphic" result="stroke" operator="dilate" radius="1" />
            <feFlood result="color" flood-color="hsl(0 0% 25%)" />
            <feComposite in="color" in2="stroke" operator="in" />
        </filter>
    </defs>
    <text filter="url(#fe-composite-in-filter)" fill="hsl(0 0% 99%)" font-family="sans-serif" font-size="16" font-weight="700">Dolce</text>
</svg>`,
	'fe-composite-out': `<svg style="display: block;" viewBox="-2.5 -16.962017059326172 44.99953079223633 22.93290138244629">
    <defs>
        <filter id="fe-composite-out-filter">
            <feMorphology in="SourceGraphic" result="stroke" operator="dilate" radius="1" />
            <feFlood result="color" flood-color="hsl(0 0% 25%)" />
            <feComposite in="color" in2="stroke" operator="in" />
            <feComposite in2="SourceGraphic" operator="out" />
        </filter>
        <pattern id="fe-composite-out-pattern" width="5.7320332527160645" height="5.7320332527160645" patternUnits="userSpaceOnUse" viewBox="0 -0.5 2 2">
            <path stroke="hsl(0 0% 92%)" d="M 0 0 1 0 M 1 1 2 1" />
            <path stroke="hsl(0 0% 99%)" d="M 1 0 2 0 M 0 1 1 1" />
        </pattern>
    </defs>
    <g fill="hsl(0 0% 92%)">
        <rect id="fe-composite-out-background" x="-2.5" y="-17.01325035095215" width="56.25658416748047" height="22.928133010864258" />
    </g>
    <use href="#fe-composite-out-background" fill="url(#fe-composite-out-pattern)" />
    <text filter="url(#fe-composite-out-filter)" fill="hsl(0 0% 99%)" font-family="sans-serif" font-size="16" font-weight="700">Forte</text>
</svg>`
};
