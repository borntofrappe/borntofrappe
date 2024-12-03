export default {
	'svelte-5': `<svg style="display: block; color: hsl(15 100% 50%);" viewBox="0 -0.5 2 3.5">
    <defs>
        <path id="s1" fill="currentColor" d="M 0 0.25 0.5 0 1 0.25 1 0.75 0.5 1 0 0.75 Z" />
        <g id="s2">
            <use href="#s1" />
            <path fill="hsl(0 0% 0%)" opacity="0.1" d="M 0 0.25 0.5 0.5 0.5 1 0 0.75" />
        </g>
        <g id="s3">
            <use href="#s1" />
            <path fill="hsl(0 0% 0%)" opacity="0.2" d="M 0 0.25 0.5 0.5 1 0.25 0.5 0" />
        </g>
        <g id="s4">
            <use href="#s1" />
            <path fill="hsl(0 0% 0%)" opacity="0.3" d="M 0 0.25 0.5 0.5 0.5 1 0 0.75" />
        </g>
        <g id="s5">
            <use href="#s1" />
            <path fill="hsl(0 0% 0%)" opacity="0.2" d="M 0 0.25 0.5 0.5 1 0.25 0.5 0" />
            <path fill="hsl(0 0% 0%)" opacity="0.1" d="M 0 0.25 0.5 0.5 0.5 1 0 0.75" />
        </g>
    </defs>
    <use href="#s4" x="1" y="1.5" />
    <use href="#s3" x="0.5" y="1.75" />
    <use href="#s5" y="2" />
    <use href="#s4" x="1" y="1" />
    <use href="#s3" x="1" y="0.5" />
    <use href="#s3" x="0.5" y="0.75" />
    <use href="#s2" y="1" />
    <use href="#s2" y="0.5" />
    <use href="#s1" x="1" y="-0.5" />
    <use href="#s1" x="0.5" y="-0.25" />
    <use href="#s2" />
</svg>`
};
