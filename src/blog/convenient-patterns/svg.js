export default {
	'checkboard-pattern': `<svg style="display: block:" viewBox="0 0 100 100">
    <title>Checkboard pattern</title>
    <defs>
        <pattern id="checkboard-pattern" width="0.2" height="0.2" viewBox="0 0 1 1" patternTransform="rotate(45)">
        <rect fill="hsl(0 0% 90%)" width="1" height="1" />
        <path transform="rotate(-45, 0.5 0.5)" fill="hsl(0 0% 30%)" d="M 0.5 0.2 0.8 0.5 0.5 0.8 0.2 0.5Z" />
        </pattern>
    </defs>
    <rect fill="url(#checkboard-pattern)" width="100" height="100" />
</svg>`
};
