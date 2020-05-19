const icons = require("../_data/icons");
module.exports = (title, keywords = []) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blog Post</title>

    <style>
      @font-face {
        font-family: "Maven Pro";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/mavenpro/v20/7Auup_AqnyWWAxW2Wk3swUz56MS91Eww8cLx1nejog.woff2)
          format("woff2");
        unicode-range: U+0000-00FF;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        --color: hsl(215, 22%, 5%);
        --background: hsl(215, 10%, 97%);
        --accent: hsl(340, 90%, 55%);
      }

      main {
        width: 1000px;
        height: 500px;
        display: grid;
        grid-template-columns: 475px 1fr;
        color: var(--color);
        background: var(--background);
        border: 0.6rem solid var(--color);
        position: relative;
        overflow: hidden;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-50 -50 100 100' width='20' height='20'%3E%3Cg opacity='0.05'%3E%3Cg fill='currentColor' stroke='none'%3E%3Ccircle r='10' /%3E%3Ccircle r='10' transform='translate(50 -50)' /%3E%3Ccircle r='10' transform='translate(50 50)' /%3E%3Ccircle r='10' transform='translate(-50 50)' /%3E%3Ccircle r='10' transform='translate(-50 -50)' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        background-size: 20px;
        background-position: -5px 5px;
      }

      main:before,
      main:after {
        background: var(--color);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-50 -50 100 100' width='20' height='20'%3E%3Cg%3E%3Cg fill='currentColor' stroke='none'%3E%3Ccircle r='10' /%3E%3Ccircle r='10' transform='translate(50 -50)' /%3E%3Ccircle r='10' transform='translate(50 50)' /%3E%3Ccircle r='10' transform='translate(-50 50)' /%3E%3Ccircle r='10' transform='translate(-50 -50)' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        background-size: 15px;
        background-position: -5px 5px;
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='25 -20 100 40'%3E%3Cg stroke='none' fill='none'%3E%3Cpath d='M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0' /%3E%3C/g%3E%3C/svg%3E");
        -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='25 -20 100 40'%3E%3Cg fill='currentColor' stroke='none'%3E%3Cpath d='M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0' /%3E%3C/g%3E%3C/svg%3E");
        mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='25 -20 100 40'%3E%3Cg fill='currentColor' stroke='none'%3E%3Cpath d='M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0' /%3E%3C/g%3E%3C/svg%3E");
        -webkit-mask-position: 50% 0%;
        mask-position: 50% 0%;
        position: absolute;
        left: 0%;
        width: 100%;
        height: 100px;
      }

      main:before {
        transform: translateY(-50%) scaleY(-1);
        top: 0%;
      }

      main:after {
        transform: translateY(50%) scaleY(-1);
        bottom: 0%;
      }

      main > svg {
        color: var(--color);
        height: 70%;
        width: auto;
        display: block;
        justify-self: center;
        align-self: center;
      }

      div {
        align-self: center;
        margin-left: -75px;
        width: calc(100% + 75px);
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      h1 {
        font-family: "Maven Pro", sans-serif;
        font-weight: 700;
        font-size: 4.5rem;
        text-align: center;
        grid-column: 1/-1;
      }

      div section {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1.5rem;
        color: var(--accent);
      }
      div span {
        margin: 0 1rem;
        padding: 0.85rem;
        border: 0.45rem solid currentColor;
        border-radius: 50%;
        width: 4.8rem;
      }

      div span svg {
        display: block;
        width: 100%;
        height: auto;
      }
    </style>
  </head>
  <body>
    <main>
      <svg viewBox="-50 -50 100 100" width="300" height="300">
      <defs>
        <mask id="mask">
          <rect
            x="-50"
            y="-50"
            width="100"
            height="100"
            fill="hsl(0, 0%, 100%)"
          />
          <g fill="hsl(0, 0%, 0%)">
            <circle transform="translate(31 31)" r="16" />
          </g>
        </mask>
      </defs>

      <g mask="url(#mask)">
            <circle r="37" fill="none" stroke="currentColor" stroke-width="6" />
            <g transform="translate(-20 -20)">
                <svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="40" height="40"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"><g transform="rotate(45)"><path stroke-width="8" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" /><g stroke-width="7"><path d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /><path transform="scale(-1 1)" d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" /><path d="M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5" /><circle r="9" cy="-11" /></g></g></g></svg>
            </g>
        </g>
            <g transform="translate(31 31)">
                <circle stroke-width="3.75" r="16" fill="none" stroke="currentColor" />
                <g transform="translate(-9 -9)">
                    <svg aria-hidden="true" aria-focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="18" height="18"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="8"><path d="M -26 -19 h -20 v -6 a 12 12 0 0 1 24 0 v 50 a 12 12 0 0 0 24 0 v -5 h 44 v 5 a 12 12 0 0 1 -12 12 h -44 a 12 12 0 0 1 -12 -12" /><path d="M -34 -37 h 44 a 12 12 0 0 1 12 12 v 45 h -20 v 5 a 12 12 0 0 1 -24 0 v -50 a 12 12 0 0 0 -12 -12" /></g><g stroke-width="6"><path d="M -10 -20 h 20" /><path d="M -10 -8 h 10" /><path d="M -10 4 h 15" /><path d="M -10 16 h 5" /></g></g></svg>
                </g>
            </g>
        </svg>

      <div>
        <h1>
          ${title}
        </h1>
        <section>
        ${keywords
          .map(
            (keyword) => `
            <span>
                ${icons[keyword] ? icons[keyword] : icons.bug}
            </span>
        `
          )
          .join("")}
        </section>
      </div>
    </main>
  </body>
</html>
`;
