<script>
	import './typewriter-effect.js';
</script>

<div>
	<code>
		sqlite&gt;
		<!-- prettier-ignore -->
		<typewriter-effect 
            separator="|"
            rate="120"
            pause="3500"
            lines='SELECT "title" FROM "books" ORDER BY "pages" LIMIT 5;|SELECT "name" FROM "students" WHERE "grade" >= 4.0;|SELECT ROUND(AVG("rating"), 2) FROM "movies";'>
            SELECT "title", "genre" FROM "games";
        </typewriter-effect>
	</code>
</div>

<style>
	code {
		font-size: inherit;
		color: inherit;
		background: none;
		font-family: monospace;
		font-weight: 700;
	}

	typewriter-effect {
		text-decoration: underline hsl(119 43% 50%);
	}

	typewriter-effect::after {
		content: '|';
		margin-inline-start: 0.1rem;
		animation: blank 1s infinite linear;
	}

	@keyframes blank {
		0%,
		100% {
			opacity: 0;
		}
		25%,
		75% {
			opacity: 1;
		}
	}
</style>
