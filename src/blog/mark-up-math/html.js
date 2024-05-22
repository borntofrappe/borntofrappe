export default {
	'mathml-calculator': `<svg style="display: block;" viewBox="0 0 34 35">
    <defs>
        <rect id="calculator-display" width="26" height="6" rx="0.5" />
        <clipPath id="calculator-clip">
            <use href="#calculator-display" />
        </clipPath>
    </defs>
    <path fill="hsl(249 8% 17%)" d="M 4 0 A 4 4 0 0 0 0 4 L 0 31 A 4 4 0 0 0 4 35 L 30 35 A 4 4 0 0 0 34 31 L 34 4 A 4 4 0 0 0 30 0 Z" />
    <g transform="translate(4 5)">
        <g clip-path="url(#calculator-clip)">
            <use fill="hsl(249 11% 12%)" href="#calculator-display" />
            <g fill="hsl(0 0% 94%)" stroke="hsl(0 0% 94%)" stroke-width="0.1" stroke-linejoin="round" stroke-linecap="round" font-family="monospace" font-size="4" transform="translate(13 4.5)" text-anchor="middle" letter-spacing="0.1">
                <g>  
                    <text>mathml</text>  
                    <text x="-39">mathml</text>  
                    <animateTransform begin="calculatorKeys.begin" restart="whenNotActive" attributeName="transform" type="translate" to="39 0" dur="2s" />
                </g>
            </g>
        </g>
        <g transform="translate(0 8.5)">
            <g fill="hsl(249 11% 12%)">
                <rect width="8" height="8" rx="0.5" />
                <rect y="9" width="8" height="8" rx="0.5" />
                <rect x="9" y="9" width="8" height="8" rx="0.5" />
                <rect x="9" width="8" height="8" rx="0.5" />
                <rect fill="" x="18" width="8" height="17" rx="0.5" />
            </g>
            <g fill="hsl(0 0% 94%)">
                <rect transform="translate(4 4.1)" x="-1.2" y="-0.4" width="2.4" height="0.8" rx="0.2" />
                <g transform="translate(13 4.1)">
                    <rect transform="rotate(45)" x="-1.9" y="-0.4" width="3.8" height="0.8" rx="0.2" />
                    <rect transform="rotate(-45)" x="-1.9" y="-0.4" width="3.8" height="0.8" rx="0.2" />
                </g>
                <g transform="translate(4 13.1)">
                    <rect x="-1.9" y="-0.4" width="3.8" height="0.8" rx="0.2" />
                    <rect transform="rotate(90)" x="-1.9" y="-0.4" width="3.8" height="0.8" rx="0.2" />
                </g>
                <g transform="translate(13 13.1)">
                    <rect x="-1.8" y="-0.4" width="3.6" height="0.8" rx="0.2" />
                    <circle cy="-1.4" r="0.55" />
                    <circle cy="1.4" r="0.55" />
                </g>
                <g transform="translate(22 8.6)">
                    <rect transform="translate(0 -0.7)" x="-1.6" y="-0.4" width="3.2" height="0.8" rx="0.2" />
                    <rect transform="translate(0 0.7)" x="-1.6" y="-0.4" width="3.2" height="0.8" rx="0.2" />
                </g>
            </g>
            <set id="calculatorKeys" begin="click" />
            <set attributeType="CSS" attributeName="cursor" to="pointer" />
        </g>
    </g>
</svg>`,
	'mathml-tokens': `<mi>C</mi>
<mo>=</mo>
<mn>2</mn>
<mi>&pi;</mi>
<mi>r</mi>`,
	'mathml-sqrt': `<mi>c</mi>
<mo>=</mo>
<msqrt>
  <mi>a</mi>
  <mo>+</mo>
  <mi>b</mi>
</msqrt>`,
	'mathml-root': `<mi>x</mi>
<mo>=</mo>
<mroot>
  <mrow>
    <mi>y</mi>
    <mo>+</mo>
    <mn>3</mn>
  </mrow>
  <mn>3</mn>
</mroot>`,
	'mathml-sup': `<msup>
  <mi>x</mi>
  <mn>3</mn>
</msup>
<mo>=</mo>
<mi>y</mi>
<mo>+</mo>
<mi>3</mi>`,
	'mathml-underover': `<munderover>
  <mn>&sum;</mn>
  <mrow>
    <mi>x</mi>
    <mo>=</mo>
    <mn>0</mn>
  </mrow>
  <mi>n</mi>
</munderover>`,
	'mathml-table': `<mtable>
  <mtr>
    <mtd>1</mtd>
    <mtd>0</mtd>
    <mtd>1</mtd>
  </mtr>
  <mtr>
    <mtd>0</mtd>
    <mtd>1</mtd>
    <mtd>0</mtd>
  </mtr>
</mtable>`,
	'mathml-text': `<math display="block">
  <mtext>
    Q.E.D.
  </mtext>
</math>`
};
