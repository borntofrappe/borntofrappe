export default {
	magnemite: `<svg style="display: block;" viewBox="0 0 100 100">
    <title>Magnemite</title>
    <defs>
        <clipPath id="clip-entry">
            <rect width="100" height="100" rx="8" />
        </clipPath>
    </defs>
    <g clip-path="url(#clip-entry)">
        <rect fill="hsl(195 36% 78%)" width="100" height="100" />
        <rect fill="hsl(216 45% 98%)" x="25" y="12" width="50" height="50" />
        <rect fill="hsl(300 1% 37%)" x="47" y="33.5" width="6" height="6" />
        <g transform="translate(8 68)">
            <rect fill="hsl(300 2% 79%)" width="20" height="20" />
            <g fill="hsl(0 1% 55%)">
                <rect x="7" y="2" width="6" height="16" />	
                <rect x="2" y="7" width="16" height="6" />	
            </g>
        </g>
        <g transform="translate(72 68)">
            <rect fill="hsl(300 2% 79%)" width="20" height="20" />
            <g fill="hsl(0 1% 55%)">
                <rect x="7" y="2" width="6" height="16" />	
                <rect x="2" y="7" width="16" height="6" />	
            </g>
        </g>
    </g>
</svg>`,
	magneton: `<svg style="display: block;" viewBox="0 0 100 100">
    <title>Magneton</title>
    <defs>
        <clipPath id="clip-entry">
            <rect width="100" height="100" rx="8" />
        </clipPath>
        <symbol id="magnemite" viewBox="0 0 100 100">
            <title>Magnemite</title>
            <rect fill="hsl(195 36% 78%)" width="100" height="100" />
            <rect fill="hsl(216 45% 98%)" x="25" y="12" width="50" height="50" />
            <rect fill="hsl(300 1% 37%)" x="47" y="33.5" width="6" height="6" />
            <g transform="translate(8 68)">
                <rect fill="hsl(300 2% 79%)" width="20" height="20" />
                <g fill="hsl(0 1% 55%)">
                    <rect x="7" y="2" width="6" height="16" />	
                    <rect x="2" y="7" width="16" height="6" />	
                </g>
            </g>
            <g transform="translate(72 68)">
                <rect fill="hsl(300 2% 79%)" width="20" height="20" />
                <g fill="hsl(0 1% 55%)">
                    <rect x="7" y="2" width="6" height="16" />	
                    <rect x="2" y="7" width="16" height="6" />	
                </g>
            </g>
        </symbol>
    </defs>
    <g clip-path="url(#clip-entry)">
        <rect fill="hsl(44 100% 68%)" width="100" height="100" />
        <use href="#magnemite" x="25" width="50" height="50" />
        <use href="#magnemite" y="50" width="50" height="50" />
        <use href="#magnemite" x="50" y="50" width="50" height="50" />
    </g>
</svg>`,
	'corner-issue-fix': `<svg style="display: block;" viewBox="0 0 2.25 1">
    <svg viewBox="18 18 64 64" width="1" height="1">
        <title>Magneton</title>
        <defs>
        <symbol id="corner-issue-magnemite" viewBox="0 0 100 100">
            <title>Magnemite</title>
            <rect fill="hsl(195 36% 78%)" width="100" height="100" rx="8" />
            <rect fill="hsl(216 45% 98%)" x="25" y="12" width="50" height="50" />
            <rect fill="hsl(300 1% 37%)" x="47" y="33.5" width="6" height="6" />
            <g transform="translate(8 68)">
                <rect fill="hsl(300 2% 79%)" width="20" height="20" />
                <g fill="hsl(0 1% 55%)">
                    <rect x="7" y="2" width="6" height="16" />	
                    <rect x="2" y="7" width="16" height="6" />	
                </g>
            </g>
            <g transform="translate(72 68)">
                <rect fill="hsl(300 2% 79%)" width="20" height="20" />
                <g fill="hsl(0 1% 55%)">
                    <rect x="7" y="2" width="6" height="16" />	
                    <rect x="2" y="7" width="16" height="6" />	
                </g>
            </g>
        </symbol>
        </defs>
        <rect fill="hsl(44 100% 68%)" width="100" height="100" />
        <use href="#corner-issue-magnemite" x="25" width="50" height="50" />
        <use href="#corner-issue-magnemite" y="50" width="50" height="50" />
        <use href="#corner-issue-magnemite" x="50" y="50" width="50" height="50" />

        <g fill="hsl(0 0% 100% / 0.05)">
            <circle transform="translate(50 50)" stroke="hsl(10 48% 52%)" stroke-width="1" r="9" />
            <g stroke="hsl(10 53% 60%)" stroke-width="0.6" stroke-dasharray="0.6 1.48" stroke-linecap="round">
                <circle transform="translate(25 50)" r="4" />
                <circle transform="translate(75 50)" r="4" />
            </g>
        </g>
    </svg>

    <svg viewBox="18 18 64 64" x="1.25" width="1" height="1">
        <title>Magneton</title>
        <defs>
            <symbol id="corner-fix-magnemite" viewBox="0 0 100 100">
                <title>Magnemite</title>
                <rect fill="hsl(195 36% 78%)" width="100" height="100" />
                <rect fill="hsl(216 45% 98%)" x="25" y="12" width="50" height="50" />
                <rect fill="hsl(300 1% 37%)" x="47" y="33.5" width="6" height="6" />
                <g transform="translate(8 68)">
                    <rect fill="hsl(300 2% 79%)" width="20" height="20" />
                    <g fill="hsl(0 1% 55%)">
                        <rect x="7" y="2" width="6" height="16" />	
                        <rect x="2" y="7" width="16" height="6" />	
                    </g>
                </g>
                <g transform="translate(72 68)">
                    <rect fill="hsl(300 2% 79%)" width="20" height="20" />
                    <g fill="hsl(0 1% 55%)">
                        <rect x="7" y="2" width="6" height="16" />	
                        <rect x="2" y="7" width="16" height="6" />	
                    </g>
                </g>
            </symbol>
        </defs>
        <rect fill="hsl(44 100% 68%)" width="100" height="100" />
        <use href="#corner-fix-magnemite" x="25" width="50" height="50" />
        <use href="#corner-fix-magnemite" y="50" width="50" height="50" />
        <use href="#corner-fix-magnemite" x="50" y="50" width="50" height="50" />

        <g fill="hsl(0 0% 100% / 0.05)">
            <circle transform="translate(50 50)" stroke="hsl(197 51% 47%)" stroke-width="1"  r="9" />
            <g stroke="hsl(196 61% 55%)" stroke-width="0.6" stroke-dasharray="0.6 1.48" stroke-linecap="round">
                <circle transform="translate(25 50)" r="4" />
                <circle transform="translate(75 50)" r="4" />
            </g>
        </g>
    </svg>
</svg>`,
	'entries-081-082': `<svg style="display: block;" viewBox="0 0 2.6 1.7">
    <path fill="hsl(0 0% 80%)" d="M 0 0.1 A 0.1 0.1 0 0 1 0.1 0 L 0.4 0 A 0.1 0.1 0 0 1 0.5 0.1 L 0.5 0.25 L 1.1 0.25 A 0.1 0.1 0 0 1 1.2 0.35 L 1.2 1.6 A 0.1 0.1 0 0 1 1.1 1.7 L 0.1 1.7 A 0.1 0.1 0 0 1 0 1.6 Z" />
    <path fill="hsl(0 0% 100%)" d="M 0 0.1 A 0.1 0.1 0 0 1 0.1 0 L 0.4 0 A 0.1 0.1 0 0 1 0.5 0.1 L 0.5 0.25 L 1.1 0.25 A 0.1 0.1 0 0 1 1.2 0.35 L 1.2 1.5 A 0.1 0.1 0 0 1 1.1 1.6 L 0.1 1.6 A 0.1 0.1 0 0 1 0 1.5 Z" />
    <svg viewBox="0 0 100 100" x="0.1" y="0.35" width="1" height="1">
        <title>Magnemite</title>
        <defs>
            <clipPath id="clip-entry">
                <rect width="100" height="100" rx="8" />
            </clipPath>
        </defs>
        <g clip-path="url(#clip-entry)">
            <rect fill="hsl(195 36% 78%)" width="100" height="100" />
            <rect fill="hsl(216 45% 98%)" x="25" y="12" width="50" height="50" />
            <rect fill="hsl(300 1% 37%)" x="47" y="33.5" width="6" height="6" />
            <g transform="translate(8 68)">
                <rect fill="hsl(300 2% 79%)" width="20" height="20" />
                <g fill="hsl(0 1% 55%)">
                    <rect x="7" y="2" width="6" height="16" />	
                    <rect x="2" y="7" width="16" height="6" />	
                </g>
            </g>
            <g transform="translate(72 68)">
                <rect fill="hsl(300 2% 79%)" width="20" height="20" />
                <g fill="hsl(0 1% 55%)">
                    <rect x="7" y="2" width="6" height="16" />	
                    <rect x="2" y="7" width="16" height="6" />	
                </g>
            </g>
        </g>
    </svg>
    <g fill="hsl(0 3% 13%)" font-family="sans-serif">
        <text text-anchor="middle" x="0.25" y="0.2" font-size="0.2" font-weight="700">081</text>		
        <text transform="translate(0 1.37)" text-anchor="middle" x="0.6" y="0.17" font-size="0.17">Magnemite</text>
    </g>

    <g transform="translate(1.4 0)">
        <path fill="hsl(0 0% 80%)" d="M 0 0.1 A 0.1 0.1 0 0 1 0.1 0 L 0.4 0 A 0.1 0.1 0 0 1 0.5 0.1 L 0.5 0.25 L 1.1 0.25 A 0.1 0.1 0 0 1 1.2 0.35 L 1.2 1.6 A 0.1 0.1 0 0 1 1.1 1.7 L 0.1 1.7 A 0.1 0.1 0 0 1 0 1.6 Z" />
        <path fill="hsl(0 0% 100%)" d="M 0 0.1 A 0.1 0.1 0 0 1 0.1 0 L 0.4 0 A 0.1 0.1 0 0 1 0.5 0.1 L 0.5 0.25 L 1.1 0.25 A 0.1 0.1 0 0 1 1.2 0.35 L 1.2 1.5 A 0.1 0.1 0 0 1 1.1 1.6 L 0.1 1.6 A 0.1 0.1 0 0 1 0 1.5 Z" />
        <svg viewBox="0 0 100 100" x="0.1" y="0.35" width="1" height="1">
            <title>Magneton</title>
            <defs>
                <clipPath id="clip-entry">
                    <rect width="100" height="100" rx="8" />
                </clipPath>
                <symbol id="magnemite" viewBox="0 0 100 100">
                    <title>Magnemite</title>
                    <rect fill="hsl(195 36% 78%)" width="100" height="100" />
                    <rect fill="hsl(216 45% 98%)" x="25" y="12" width="50" height="50" />
                    <rect fill="hsl(300 1% 37%)" x="47" y="33.5" width="6" height="6" />
                    <g transform="translate(8 68)">
                        <rect fill="hsl(300 2% 79%)" width="20" height="20" />
                        <g fill="hsl(0 1% 55%)">
                            <rect x="7" y="2" width="6" height="16" />	
                            <rect x="2" y="7" width="16" height="6" />	
                        </g>
                    </g>
                    <g transform="translate(72 68)">
                        <rect fill="hsl(300 2% 79%)" width="20" height="20" />
                        <g fill="hsl(0 1% 55%)">
                            <rect x="7" y="2" width="6" height="16" />	
                            <rect x="2" y="7" width="16" height="6" />	
                        </g>
                    </g>
                </symbol>
            </defs>
            <g clip-path="url(#clip-entry)">
                <rect fill="hsl(44 100% 68%)" width="100" height="100" />
                <use href="#magnemite" x="25" width="50" height="50" />
                <use href="#magnemite" y="50" width="50" height="50" />
                <use href="#magnemite" x="50" y="50" width="50" height="50" />
            </g>
        </svg>
        <g fill="hsl(0 3% 13%)" font-family="sans-serif">
            <text text-anchor="middle" x="0.25" y="0.2" font-size="0.2" font-weight="700">082</text>		
            <text transform="translate(0 1.37)" text-anchor="middle" x="0.6" y="0.17" font-size="0.17">Magneton</text>
        </g>
    </g>
</svg>`,
	'entries-050-051': `<svg style="display: block;" viewBox="0 0 2.6 1.7">
    <path fill="hsl(0 0% 80%)" d="M 0 0.1 A 0.1 0.1 0 0 1 0.1 0 L 0.4 0 A 0.1 0.1 0 0 1 0.5 0.1 L 0.5 0.25 L 1.1 0.25 A 0.1 0.1 0 0 1 1.2 0.35 L 1.2 1.6 A 0.1 0.1 0 0 1 1.1 1.7 L 0.1 1.7 A 0.1 0.1 0 0 1 0 1.6 Z" />
    <path fill="hsl(0 0% 100%)" d="M 0 0.1 A 0.1 0.1 0 0 1 0.1 0 L 0.4 0 A 0.1 0.1 0 0 1 0.5 0.1 L 0.5 0.25 L 1.1 0.25 A 0.1 0.1 0 0 1 1.2 0.35 L 1.2 1.5 A 0.1 0.1 0 0 1 1.1 1.6 L 0.1 1.6 A 0.1 0.1 0 0 1 0 1.5 Z" />
    <svg viewBox="0 0 100 100" x="0.1" y="0.35" width="1" height="1">
        <title>Diglett</title>
        <defs>
            <clipPath id="clip-entry">
                <rect width="100" height="100" rx="8" />
            </clipPath>
        </defs>
        <g clip-path="url(#clip-entry)">
            <rect fill="hsl(26 28% 60%)" width="100" height="100" />
            <g transform="translate(18 12)">
                <rect fill="hsl(0 3% 13%)" width="14" height="30" />
                <rect fill="hsl(120 20% 99%)" x="3" y="2" width="8" height="8" />
            </g>
            <g transform="translate(68 12)">
                <rect fill="hsl(0 3% 13%)" width="14" height="30" />
                <rect fill="hsl(120 20% 99%)" x="3" y="2" width="8" height="8" />
            </g>
            <g transform="translate(18 50)">
                <path fill="hsl(324 50% 79%)" d="M 0 4 L 4 0 L 60 0 L 64 4 L 64 30 L 60 34 L 4 34 L 0 30" />
                <rect fill="hsl(323 52% 95%)" x="9" y="8" width="16" height="8" />
            </g>
        </g>
    </svg>
    <g fill="hsl(0 3% 13%)" font-family="sans-serif">
        <text text-anchor="middle" x="0.25" y="0.2" font-size="0.2" font-weight="700">050</text>		
        <text transform="translate(0 1.37)" text-anchor="middle" x="0.6" y="0.17" font-size="0.17">Diglett</text>
    </g>

    <g transform="translate(1.4 0)">
        <path fill="hsl(0 0% 80%)" d="M 0 0.1 A 0.1 0.1 0 0 1 0.1 0 L 0.4 0 A 0.1 0.1 0 0 1 0.5 0.1 L 0.5 0.25 L 1.1 0.25 A 0.1 0.1 0 0 1 1.2 0.35 L 1.2 1.6 A 0.1 0.1 0 0 1 1.1 1.7 L 0.1 1.7 A 0.1 0.1 0 0 1 0 1.6 Z" />
        <path fill="hsl(0 0% 100%)" d="M 0 0.1 A 0.1 0.1 0 0 1 0.1 0 L 0.4 0 A 0.1 0.1 0 0 1 0.5 0.1 L 0.5 0.25 L 1.1 0.25 A 0.1 0.1 0 0 1 1.2 0.35 L 1.2 1.5 A 0.1 0.1 0 0 1 1.1 1.6 L 0.1 1.6 A 0.1 0.1 0 0 1 0 1.5 Z" />
        <svg viewBox="0 0 100 100" x="0.1" y="0.35" width="1" height="1">
            <title>Dugtrio</title>
            <defs>
                <clipPath id="clip-entry">
                    <rect width="100" height="100" rx="8" />
                </clipPath>
                <symbol id="diglett" viewBox="0 0 100 100">
                    <title>Diglett</title>
                    <rect fill="hsl(26 28% 60%)" width="100" height="100" />
                    <g transform="translate(18 12)">
                        <rect fill="hsl(0 3% 13%)" width="14" height="30" />
                        <rect fill="hsl(120 20% 99%)" x="3" y="2" width="8" height="8" />
                    </g>
                    <g transform="translate(68 12)">
                        <rect fill="hsl(0 3% 13%)" width="14" height="30" />
                        <rect fill="hsl(120 20% 99%)" x="3" y="2" width="8" height="8" />
                    </g>
                    <g transform="translate(18 50)">
                        <path fill="hsl(324 50% 79%)" d="M 0 4 L 4 0 L 60 0 L 64 4 L 64 30 L 60 34 L 4 34 L 0 30" />
                        <rect fill="hsl(323 52% 95%)" x="9" y="8" width="16" height="8" />
                    </g>
                </symbol>
            </defs>
            <g clip-path="url(#clip-entry)">
                <rect fill="hsl(40 56% 63%)" width="100" height="100" />
                <use href="#diglett" x="25" width="50" height="50" />
                <use href="#diglett" y="50" width="50" height="50" />
                <use href="#diglett" x="50" y="50" width="50" height="50" />
            </g>
        </svg>
        <g fill="hsl(0 3% 13%)" font-family="sans-serif">
            <text text-anchor="middle" x="0.25" y="0.2" font-size="0.2" font-weight="700">051</text>		
            <text transform="translate(0 1.37)" text-anchor="middle" x="0.6" y="0.17" font-size="0.17">Dugtrio</text>
        </g>
    </g>
</svg>`,
	'entries-100-101': `<svg style="display: block;" viewBox="0 0 2.6 1.7">
    <path fill="hsl(0 0% 80%)" d="M 0 0.1 A 0.1 0.1 0 0 1 0.1 0 L 0.4 0 A 0.1 0.1 0 0 1 0.5 0.1 L 0.5 0.25 L 1.1 0.25 A 0.1 0.1 0 0 1 1.2 0.35 L 1.2 1.6 A 0.1 0.1 0 0 1 1.1 1.7 L 0.1 1.7 A 0.1 0.1 0 0 1 0 1.6 Z" />
    <path fill="hsl(0 0% 100%)" d="M 0 0.1 A 0.1 0.1 0 0 1 0.1 0 L 0.4 0 A 0.1 0.1 0 0 1 0.5 0.1 L 0.5 0.25 L 1.1 0.25 A 0.1 0.1 0 0 1 1.2 0.35 L 1.2 1.5 A 0.1 0.1 0 0 1 1.1 1.6 L 0.1 1.6 A 0.1 0.1 0 0 1 0 1.5 Z" />
    <svg viewBox="0 0 100 100" x="0.1" y="0.35" width="1" height="1">
        <title>Voltorb</title>
        <defs>
            <clipPath id="clip-entry">
                <rect width="100" height="100" rx="8" />
            </clipPath>
        </defs>
        <g clip-path="url(#clip-entry)">
            <rect fill="hsl(350 70% 56%)" width="100" height="64" />
            <rect fill="hsl(220 16% 93%)" y="64" width="100" height="36" />
            <g fill="none" stroke="hsl(349 77% 58%)" stroke-width="3">
                <path d="M 12 18 L 42 36" />
                <path transform="translate(100 0) scale(-1 1)" d="M 12 18 L 42 36" />
            </g>
            <g fill="none" stroke="hsl(349 61% 53%)" stroke-width="3">
                <path d="M 44 36 L 44 50" />
                <path transform="translate(100 0) scale(-1 1)" d="M 44 42 L 44 50" />
            </g>
            <path fill="hsl(220 16% 93%)" d="M 8 32 L 37 50 L 8 50" />
            <path fill="hsl(120 1% 26%)" d="M 25.842445373535156 43.074623107910156 L 29.00310516357422 45.03641128540039 L 29.00310516357422 48 L 25.842445373535156 48" />		
            <g transform="translate(100 0) scale(-1 1)">
                <path fill="hsl(220 16% 93%)" d="M 8 32 L 37 50 L 8 50" />
                <path fill="hsl(120 1% 26%)" d="M 25.842445373535156 43.074623107910156 L 29.00310516357422 45.03641128540039 L 29.00310516357422 48 L 25.842445373535156 48" />
            </g>
        </g>
    </svg>
    <g fill="hsl(0 3% 13%)" font-family="sans-serif">
        <text text-anchor="middle" x="0.25" y="0.2" font-size="0.2" font-weight="700">100</text>		
        <text transform="translate(0 1.37)" text-anchor="middle" x="0.6" y="0.17" font-size="0.17">Voltorb</text>
    </g>

    <g transform="translate(1.4 0)">
        <path fill="hsl(0 0% 80%)" d="M 0 0.1 A 0.1 0.1 0 0 1 0.1 0 L 0.4 0 A 0.1 0.1 0 0 1 0.5 0.1 L 0.5 0.25 L 1.1 0.25 A 0.1 0.1 0 0 1 1.2 0.35 L 1.2 1.6 A 0.1 0.1 0 0 1 1.1 1.7 L 0.1 1.7 A 0.1 0.1 0 0 1 0 1.6 Z" />
        <path fill="hsl(0 0% 100%)" d="M 0 0.1 A 0.1 0.1 0 0 1 0.1 0 L 0.4 0 A 0.1 0.1 0 0 1 0.5 0.1 L 0.5 0.25 L 1.1 0.25 A 0.1 0.1 0 0 1 1.2 0.35 L 1.2 1.5 A 0.1 0.1 0 0 1 1.1 1.6 L 0.1 1.6 A 0.1 0.1 0 0 1 0 1.5 Z" />
        <svg viewBox="0 0 100 100" x="0.1" y="0.35" width="1" height="1">
            <title>Electrode</title>
            <defs>
                <clipPath id="clip-entry">
                    <rect width="100" height="100" rx="8" />
                </clipPath>
            </defs>
            <g clip-path="url(#clip-entry)">
                <rect fill="hsl(220 16% 93%)" width="100" height="56" />
                <rect fill="hsl(350 70% 56%)" y="56" width="100" height="44" />
                <g fill="none" stroke="hsl(120 1% 26%)" stroke-width="3">
                    <path d="M 7 28 L 18 16 43 36" />
                    <path d="M 54 28 L 58 36 82 16 93 28" />
                </g>
                <g fill="hsl(120 1% 26%)">
                    <rect x="30" y="36" width="4" height="12" />
                    <rect x="66" y="36" width="4" height="12" />
                </g>
                <g transform="translate(15 68)">
                    <path fill="hsl(220 16% 93%)" d="M 0 0 L 70 0 L 70 12 A 3 3 0 0 1 67 15 L 3 15 A 3 3 0 0 1 0 12" />
                    <g fill="hsl(120 1% 26%)">
                        <rect x="50" y="9" width="3" height="6" />
                        <rect x="57" y="6" width="3" height="9" />
                    </g>
                </g>
            </g>
        </svg>
        <g fill="hsl(0 3% 13%)" font-family="sans-serif">
            <text text-anchor="middle" x="0.25" y="0.2" font-size="0.2" font-weight="700">101</text>		
            <text transform="translate(0 1.37)" text-anchor="middle" x="0.6" y="0.17" font-size="0.17">Electrode</text>
        </g>
    </g>
</svg>`
};
