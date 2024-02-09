export default {
	vitrail: `<svg style="display: block;" viewBox="0 0 100 100">
    <style>
        #vitrail-glass polygon {
            opacity: 0;
        }
        #vitrail-glass polygon:hover {
            opacity: 0.5;
        }
    </style>
    <defs>
        <mask id="vitrail-mask-background">
            <path fill="white" d="M 0 50 C 0 0 0 0 50 0 S 100 0 100 50 100 100 50 100 0 100 0 50" />
        </mask>
        <mask id="vitrail-mask-foreground">
            <g transform="translate(50 50)" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M -3.5 0 -3.5 -25 A 8 8 0 1 1 3.5 -25 L 3.5 25 A 8 8 0 1 1 -3.5 25 Z" />
                <path transform="rotate(45)" d="M -3.5 0 -3.5 -25 A 8 8 0 1 1 3.5 -25 L 3.5 25 A 8 8 0 1 1 -3.5 25 Z" />
                <path transform="rotate(90)" d="M -3.5 0 -3.5 -25 A 8 8 0 1 1 3.5 -25 L 3.5 25 A 8 8 0 1 1 -3.5 25 Z" />
                <path transform="rotate(135)" d="M -3.5 0 -3.5 -25 A 8 8 0 1 1 3.5 -25 L 3.5 25 A 8 8 0 1 1 -3.5 25 Z" />
            </g>
        </mask>
    </defs>
    <g mask="url(#vitrail-mask-background)" fill="currentColor" stroke="currentColor">
        <polygon points="45,45,43,57,59,57,45,45" style="color: hsl(0 0% 13%);" />
        <polygon points="59,57,59,43,45,45,59,57" style="color: hsl(0 0% 9%);" />
        <polygon points="43,57,54,69,59,57,43,57" style="color: hsl(0 0% 17%);" />
        <polygon points="70,73,70,56,59,57,70,73" style="color: hsl(0 0% 18%);" />
        <polygon points="59,57,70,56,59,43,59,57" style="color: hsl(0 0% 13%);" />
        <polygon points="43,57,43,70,54,69,43,57" style="color: hsl(0 0% 11%);" />
        <polygon points="59,43,45,31,45,45,59,43" style="color: hsl(0 0% 10%);" />
        <polygon points="45,45,27,57,43,57,45,45" style="color: hsl(0 0% 10%);" />
        <polygon points="28,41,27,57,45,45,28,41" style="color: hsl(0 0% 10%);" />
        <polygon points="43,57,27,57,43,70,43,57" style="color: hsl(0 0% 14%);" />
        <polygon points="69,31,59,29,59,43,69,31" style="color: hsl(0 0% 12%);" />
        <polygon points="59,43,59,29,45,31,59,43" style="color: hsl(0 0% 18%);" />
        <polygon points="70,56,74,43,59,43,70,56" style="color: hsl(0 0% 10%);" />
        <polygon points="45,31,28,41,45,45,45,31" style="color: hsl(0 0% 15%);" />
        <polygon points="74,43,69,31,59,43,74,43" style="color: hsl(0 0% 11%);" />
        <polygon points="69,83,70,73,54,69,69,83" style="color: hsl(0 0% 10%);" />
        <polygon points="54,69,70,73,59,57,54,69" style="color: hsl(0 0% 15%);" />
        <polygon points="86,58,84,41,74,43,86,58" style="color: hsl(0 0% 16%);" />
        <polygon points="16,69,26,70,27,57,16,69" style="color: hsl(0 0% 17%);" />
        <polygon points="27,57,26,70,43,70,27,57" style="color: hsl(0 0% 18%);" />
        <polygon points="43,70,40,83,54,69,43,70" style="color: hsl(0 0% 12%);" />
        <polygon points="26,70,40,83,43,70,26,70" style="color: hsl(0 0% 10%);" />
        <polygon points="86,58,74,43,70,56,86,58" style="color: hsl(0 0% 17%);" />
        <polygon points="74,43,84,41,69,31,74,43" style="color: hsl(0 0% 18%);" />
        <polygon points="41,11,26,27,45,31,41,11" style="color: hsl(0 0% 18%);" />
        <polygon points="45,31,26,27,28,41,45,31" style="color: hsl(0 0% 16%);" />
        <polygon points="28,41,16,42,27,57,28,41" style="color: hsl(0 0% 12%);" />
        <polygon points="70,73,86,58,70,56,70,73" style="color: hsl(0 0% 17%);" />
        <polygon points="57,88,69,83,54,69,57,88" style="color: hsl(0 0% 12%);" />
        <polygon points="70,73,87,70,86,58,70,73" style="color: hsl(0 0% 9%);" />
        <polygon points="69,31,58,17,59,29,69,31" style="color: hsl(0 0% 14%);" />
        <polygon points="59,29,58,17,45,31,59,29" style="color: hsl(0 0% 10%);" />
        <polygon points="70,14,58,17,69,31,70,14" style="color: hsl(0 0% 10%);" />
        <polygon points="40,83,57,88,54,69,40,83" style="color: hsl(0 0% 18%);" />
        <polygon points="15,30,16,42,28,41,15,30" style="color: hsl(0 0% 14%);" />
        <polygon points="16,42,13,57,27,57,16,42" style="color: hsl(0 0% 18%);" />
        <polygon points="13,57,16,69,27,57,13,57" style="color: hsl(0 0% 12%);" />
        <polygon points="26,70,30,88,40,83,26,70" style="color: hsl(0 0% 13%);" />
        <polygon points="83,83,87,70,70,73,83,83" style="color: hsl(0 0% 18%);" />
        <polygon points="16,88,30,88,26,70,16,88" style="color: hsl(0 0% 9%);" />
        <polygon points="42.85714285714286,100,57.142857142857146,100,57,88,42.85714285714286,100" style="color: hsl(0 0% 10%);" />
        <polygon points="26,27,15,30,28,41,26,27" style="color: hsl(0 0% 16%);" />
        <polygon points="0,42.85714285714286,0,57.142857142857146,13,57,0,42.85714285714286" style="color: hsl(0 0% 18%);" />
        <polygon points="17,13,15,30,26,27,17,13" style="color: hsl(0 0% 11%);" />
        <polygon points="58,17,41,11,45,31,58,17" style="color: hsl(0 0% 15%);" />
        <polygon points="86,26,70,14,69,31,86,26" style="color: hsl(0 0% 11%);" />
        <polygon points="58,17,57.142857142857146,0,41,11,58,17" style="color: hsl(0 0% 11%);" />
        <polygon points="100,28.571428571428573,86,26,84,41,100,28.571428571428573" style="color: hsl(0 0% 18%);" />
        <polygon points="84,41,86,26,69,31,84,41" style="color: hsl(0 0% 13%);" />
        <polygon points="100,42.85714285714286,84,41,86,58,100,42.85714285714286" style="color: hsl(0 0% 17%);" />
        <polygon points="69,83,83,83,70,73,69,83" style="color: hsl(0 0% 18%);" />
        <polygon points="71.42857142857143,100,83,83,69,83,71.42857142857143,100" style="color: hsl(0 0% 16%);" />
        <polygon points="41,11,27,13,26,27,41,11" style="color: hsl(0 0% 16%);" />
        <polygon points="42.85714285714286,100,57,88,40,83,42.85714285714286,100" style="color: hsl(0 0% 14%);" />
        <polygon points="57,88,71.42857142857143,100,69,83,57,88" style="color: hsl(0 0% 15%);" />
        <polygon points="30,88,42.85714285714286,100,40,83,30,88" style="color: hsl(0 0% 15%);" />
        <polygon points="100,71.42857142857143,100,57.142857142857146,87,70,100,71.42857142857143" style="color: hsl(0 0% 12%);" />
        <polygon points="87,70,100,57.142857142857146,86,58,87,70" style="color: hsl(0 0% 14%);" />
        <polygon points="100,57.142857142857146,100,42.85714285714286,86,58,100,57.142857142857146" style="color: hsl(0 0% 10%);" />
        <polygon points="16,69,16,88,26,70,16,69" style="color: hsl(0 0% 10%);" />
        <polygon points="30,88,28.571428571428573,100,42.85714285714286,100,30,88" style="color: hsl(0 0% 17%);" />
        <polygon points="0,71.42857142857143,16,88,16,69,0,71.42857142857143" style="color: hsl(0 0% 10%);" />
        <polygon points="0,42.85714285714286,13,57,16,42,0,42.85714285714286" style="color: hsl(0 0% 16%);" />
        <polygon points="13,57,0,71.42857142857143,16,69,13,57" style="color: hsl(0 0% 10%);" />
        <polygon points="0,28.571428571428573,0,42.85714285714286,15,30,0,28.571428571428573" style="color: hsl(0 0% 13%);" />
        <polygon points="15,30,0,42.85714285714286,16,42,15,30" style="color: hsl(0 0% 13%);" />
        <polygon points="28.571428571428573,0,17,13,27,13,28.571428571428573,0" style="color: hsl(0 0% 10%);" />
        <polygon points="27,13,17,13,26,27,27,13" style="color: hsl(0 0% 11%);" />
        <polygon points="86,26,84,12,70,14,86,26" style="color: hsl(0 0% 17%);" />
        <polygon points="70,14,57.142857142857146,0,58,17,70,14" style="color: hsl(0 0% 18%);" />
        <polygon points="100,14.285714285714286,84,12,86,26,100,14.285714285714286" style="color: hsl(0 0% 17%);" />
        <polygon points="57.142857142857146,100,71.42857142857143,100,57,88,57.142857142857146,100" style="color: hsl(0 0% 12%);" />
        <polygon points="71.42857142857143,0,57.142857142857146,0,70,14,71.42857142857143,0" style="color: hsl(0 0% 9%);" />
        <polygon points="41,11,28.571428571428573,0,27,13,41,11" style="color: hsl(0 0% 9%);" />
        <polygon points="100,85.71428571428572,100,71.42857142857143,87,70,100,85.71428571428572" style="color: hsl(0 0% 17%);" />
        <polygon points="100,85.71428571428572,87,70,83,83,100,85.71428571428572" style="color: hsl(0 0% 12%);" />
        <polygon points="57.142857142857146,0,42.85714285714286,0,41,11,57.142857142857146,0" style="color: hsl(0 0% 10%);" />
        <polygon points="16,88,28.571428571428573,100,30,88,16,88" style="color: hsl(0 0% 13%);" />
        <polygon points="100,42.85714285714286,100,28.571428571428573,84,41,100,42.85714285714286" style="color: hsl(0 0% 17%);" />
        <polygon points="0,57.142857142857146,0,71.42857142857143,13,57,0,57.142857142857146" style="color: hsl(0 0% 13%);" />
        <polygon points="84,12,71.42857142857143,0,70,14,84,12" style="color: hsl(0 0% 18%);" />
        <polygon points="0,14.285714285714286,0,28.571428571428573,15,30,0,14.285714285714286" style="color: hsl(0 0% 17%);" />
        <polygon points="42.85714285714286,0,28.571428571428573,0,41,11,42.85714285714286,0" style="color: hsl(0 0% 11%);" />
        <polygon points="17,13,0,14.285714285714286,15,30,17,13" style="color: hsl(0 0% 15%);" />
        <polygon points="71.42857142857143,100,85.71428571428572,100,83,83,71.42857142857143,100" style="color: hsl(0 0% 17%);" />
        <polygon points="85.71428571428572,100,100,85.71428571428572,83,83,85.71428571428572,100" style="color: hsl(0 0% 14%);" />
        <polygon points="0,85.71428571428572,14.285714285714286,100,16,88,0,85.71428571428572" style="color: hsl(0 0% 18%);" />
        <polygon points="16,88,14.285714285714286,100,28.571428571428573,100,16,88" style="color: hsl(0 0% 12%);" />
        <polygon points="0,71.42857142857143,0,85.71428571428572,16,88,0,71.42857142857143" style="color: hsl(0 0% 18%);" />
        <polygon points="100,28.571428571428573,100,14.285714285714286,86,26,100,28.571428571428573" style="color: hsl(0 0% 12%);" />
        <polygon points="84,12,85.71428571428572,0,71.42857142857143,0,84,12" style="color: hsl(0 0% 11%);" />
        <polygon points="100,14.285714285714286,85.71428571428572,0,84,12,100,14.285714285714286" style="color: hsl(0 0% 15%);" />
        <polygon points="14.285714285714286,0,0,14.285714285714286,17,13,14.285714285714286,0" style="color: hsl(0 0% 10%);" />
        <polygon points="28.571428571428573,0,14.285714285714286,0,17,13,28.571428571428573,0" style="color: hsl(0 0% 9%);" />
        <polygon points="85.71428571428572,100,100,100,100,85.71428571428572,85.71428571428572,100" style="color: hsl(0 0% 10%);" />
        <polygon points="0,85.71428571428572,0,100,14.285714285714286,100,0,85.71428571428572" style="color: hsl(0 0% 10%);" />
        <polygon points="100,14.285714285714286,100,0,85.71428571428572,0,100,14.285714285714286" style="color: hsl(0 0% 15%);" />
        <polygon points="14.285714285714286,0,0,0,0,14.285714285714286,14.285714285714286,0" style="color: hsl(0 0% 18%);" />
    </g>
    <g mask="url(#vitrail-mask-foreground)">
        <g fill="currentColor" stroke="currentColor">
            <polygon points="45,45,43,57,59,57,45,45" style="color: hsl(0 0% 14%);" />
            <polygon points="59,57,59,43,45,45,59,57" style="color: hsl(0 0% 9%);" />
            <polygon points="43,57,54,69,59,57,43,57" style="color: hsl(0 0% 9%);" />
            <polygon points="70,73,70,56,59,57,70,73" style="color: hsl(0 0% 16%);" />
            <polygon points="59,57,70,56,59,43,59,57" style="color: hsl(0 0% 15%);" />
            <polygon points="43,57,43,70,54,69,43,57" style="color: hsl(0 0% 9%);" />
            <polygon points="59,43,45,31,45,45,59,43" style="color: hsl(0 0% 18%);" />
            <polygon points="45,45,27,57,43,57,45,45" style="color: hsl(0 0% 15%);" />
            <polygon points="28,41,27,57,45,45,28,41" style="color: hsl(0 0% 18%);" />
            <polygon points="43,57,27,57,43,70,43,57" style="color: hsl(0 0% 18%);" />
            <polygon points="69,31,59,29,59,43,69,31" style="color: hsl(0 0% 9%);" />
            <polygon points="59,43,59,29,45,31,59,43" style="color: hsl(0 0% 11%);" />
            <polygon points="70,56,74,43,59,43,70,56" style="color: hsl(0 0% 14%);" />
            <polygon points="45,31,28,41,45,45,45,31" style="color: hsl(0 0% 14%);" />
            <polygon points="74,43,69,31,59,43,74,43" style="color: hsl(0 0% 17%);" />
            <polygon points="69,83,70,73,54,69,69,83" style="color: hsl(0 0% 14%);" />
            <polygon points="54,69,70,73,59,57,54,69" style="color: hsl(0 0% 9%);" />
            <polygon points="86,58,84,41,74,43,86,58" style="color: hsl(0 0% 16%);" />
            <polygon points="16,69,26,70,27,57,16,69" style="color: hsl(0 0% 15%);" />
            <polygon points="27,57,26,70,43,70,27,57" style="color: hsl(0 0% 9%);" />
            <polygon points="43,70,40,83,54,69,43,70" style="color: hsl(0 0% 14%);" />
            <polygon points="26,70,40,83,43,70,26,70" style="color: hsl(0 0% 18%);" />
            <polygon points="86,58,74,43,70,56,86,58" style="color: hsl(0 0% 16%);" />
            <polygon points="74,43,84,41,69,31,74,43" style="color: hsl(0 0% 15%);" />
            <polygon points="41,11,26,27,45,31,41,11" style="color: hsl(0 0% 17%);" />
            <polygon points="45,31,26,27,28,41,45,31" style="color: hsl(0 0% 18%);" />
            <polygon points="28,41,16,42,27,57,28,41" style="color: hsl(0 0% 13%);" />
            <polygon points="70,73,86,58,70,56,70,73" style="color: hsl(0 0% 12%);" />
            <polygon points="57,88,69,83,54,69,57,88" style="color: hsl(0 0% 10%);" />
            <polygon points="70,73,87,70,86,58,70,73" style="color: hsl(0 0% 10%);" />
            <polygon points="69,31,58,17,59,29,69,31" style="color: hsl(0 0% 16%);" />
            <polygon points="59,29,58,17,45,31,59,29" style="color: hsl(0 0% 11%);" />
            <polygon points="70,14,58,17,69,31,70,14" style="color: hsl(0 0% 18%);" />
            <polygon points="40,83,57,88,54,69,40,83" style="color: hsl(0 0% 15%);" />
            <polygon points="15,30,16,42,28,41,15,30" style="color: hsl(0 0% 10%);" />
            <polygon points="16,42,13,57,27,57,16,42" style="color: hsl(0 0% 16%);" />
            <polygon points="13,57,16,69,27,57,13,57" style="color: hsl(0 0% 12%);" />
            <polygon points="26,70,30,88,40,83,26,70" style="color: hsl(0 0% 9%);" />
            <polygon points="83,83,87,70,70,73,83,83" style="color: hsl(0 0% 16%);" />
            <polygon points="16,88,30,88,26,70,16,88" style="color: hsl(0 0% 16%);" />
            <polygon points="42.85714285714286,100,57.142857142857146,100,57,88,42.85714285714286,100" style="color: hsl(0 0% 16%);" />
            <polygon points="26,27,15,30,28,41,26,27" style="color: hsl(0 0% 15%);" />
            <polygon points="0,42.85714285714286,0,57.142857142857146,13,57,0,42.85714285714286" style="color: hsl(0 0% 15%);" />
            <polygon points="17,13,15,30,26,27,17,13" style="color: hsl(0 0% 9%);" />
            <polygon points="58,17,41,11,45,31,58,17" style="color: hsl(0 0% 10%);" />
            <polygon points="86,26,70,14,69,31,86,26" style="color: hsl(0 0% 9%);" />
            <polygon points="58,17,57.142857142857146,0,41,11,58,17" style="color: hsl(0 0% 14%);" />
            <polygon points="100,28.571428571428573,86,26,84,41,100,28.571428571428573" style="color: hsl(0 0% 14%);" />
            <polygon points="84,41,86,26,69,31,84,41" style="color: hsl(0 0% 18%);" />
            <polygon points="100,42.85714285714286,84,41,86,58,100,42.85714285714286" style="color: hsl(0 0% 15%);" />
            <polygon points="69,83,83,83,70,73,69,83" style="color: hsl(0 0% 17%);" />
            <polygon points="71.42857142857143,100,83,83,69,83,71.42857142857143,100" style="color: hsl(0 0% 17%);" />
            <polygon points="41,11,27,13,26,27,41,11" style="color: hsl(0 0% 17%);" />
            <polygon points="42.85714285714286,100,57,88,40,83,42.85714285714286,100" style="color: hsl(0 0% 17%);" />
            <polygon points="57,88,71.42857142857143,100,69,83,57,88" style="color: hsl(0 0% 17%);" />
            <polygon points="30,88,42.85714285714286,100,40,83,30,88" style="color: hsl(0 0% 12%);" />
            <polygon points="100,71.42857142857143,100,57.142857142857146,87,70,100,71.42857142857143" style="color: hsl(0 0% 17%);" />
            <polygon points="87,70,100,57.142857142857146,86,58,87,70" style="color: hsl(0 0% 14%);" />
            <polygon points="100,57.142857142857146,100,42.85714285714286,86,58,100,57.142857142857146" style="color: hsl(0 0% 17%);" />
            <polygon points="16,69,16,88,26,70,16,69" style="color: hsl(0 0% 18%);" />
            <polygon points="30,88,28.571428571428573,100,42.85714285714286,100,30,88" style="color: hsl(0 0% 14%);" />
            <polygon points="0,71.42857142857143,16,88,16,69,0,71.42857142857143" style="color: hsl(0 0% 9%);" />
            <polygon points="0,42.85714285714286,13,57,16,42,0,42.85714285714286" style="color: hsl(0 0% 13%);" />
            <polygon points="13,57,0,71.42857142857143,16,69,13,57" style="color: hsl(0 0% 9%);" />
            <polygon points="0,28.571428571428573,0,42.85714285714286,15,30,0,28.571428571428573" style="color: hsl(0 0% 16%);" />
            <polygon points="15,30,0,42.85714285714286,16,42,15,30" style="color: hsl(0 0% 14%);" />
            <polygon points="28.571428571428573,0,17,13,27,13,28.571428571428573,0" style="color: hsl(0 0% 10%);" />
            <polygon points="27,13,17,13,26,27,27,13" style="color: hsl(0 0% 18%);" />
            <polygon points="86,26,84,12,70,14,86,26" style="color: hsl(0 0% 15%);" />
            <polygon points="70,14,57.142857142857146,0,58,17,70,14" style="color: hsl(0 0% 10%);" />
            <polygon points="100,14.285714285714286,84,12,86,26,100,14.285714285714286" style="color: hsl(0 0% 15%);" />
            <polygon points="57.142857142857146,100,71.42857142857143,100,57,88,57.142857142857146,100" style="color: hsl(0 0% 18%);" />
            <polygon points="71.42857142857143,0,57.142857142857146,0,70,14,71.42857142857143,0" style="color: hsl(0 0% 10%);" />
            <polygon points="41,11,28.571428571428573,0,27,13,41,11" style="color: hsl(0 0% 17%);" />
            <polygon points="100,85.71428571428572,100,71.42857142857143,87,70,100,85.71428571428572" style="color: hsl(0 0% 14%);" />
            <polygon points="100,85.71428571428572,87,70,83,83,100,85.71428571428572" style="color: hsl(0 0% 12%);" />
            <polygon points="57.142857142857146,0,42.85714285714286,0,41,11,57.142857142857146,0" style="color: hsl(0 0% 14%);" />
            <polygon points="16,88,28.571428571428573,100,30,88,16,88" style="color: hsl(0 0% 9%);" />
            <polygon points="100,42.85714285714286,100,28.571428571428573,84,41,100,42.85714285714286" style="color: hsl(0 0% 12%);" />
            <polygon points="0,57.142857142857146,0,71.42857142857143,13,57,0,57.142857142857146" style="color: hsl(0 0% 9%);" />
            <polygon points="84,12,71.42857142857143,0,70,14,84,12" style="color: hsl(0 0% 16%);" />
            <polygon points="0,14.285714285714286,0,28.571428571428573,15,30,0,14.285714285714286" style="color: hsl(0 0% 9%);" />
            <polygon points="42.85714285714286,0,28.571428571428573,0,41,11,42.85714285714286,0" style="color: hsl(0 0% 10%);" />
            <polygon points="17,13,0,14.285714285714286,15,30,17,13" style="color: hsl(0 0% 18%);" />
            <polygon points="71.42857142857143,100,85.71428571428572,100,83,83,71.42857142857143,100" style="color: hsl(0 0% 13%);" />
            <polygon points="85.71428571428572,100,100,85.71428571428572,83,83,85.71428571428572,100" style="color: hsl(0 0% 14%);" />
            <polygon points="0,85.71428571428572,14.285714285714286,100,16,88,0,85.71428571428572" style="color: hsl(0 0% 17%);" />
            <polygon points="16,88,14.285714285714286,100,28.571428571428573,100,16,88" style="color: hsl(0 0% 15%);" />
            <polygon points="0,71.42857142857143,0,85.71428571428572,16,88,0,71.42857142857143" style="color: hsl(0 0% 12%);" />
            <polygon points="100,28.571428571428573,100,14.285714285714286,86,26,100,28.571428571428573" style="color: hsl(0 0% 9%);" />
            <polygon points="84,12,85.71428571428572,0,71.42857142857143,0,84,12" style="color: hsl(0 0% 16%);" />
            <polygon points="100,14.285714285714286,85.71428571428572,0,84,12,100,14.285714285714286" style="color: hsl(0 0% 9%);" />
            <polygon points="14.285714285714286,0,0,14.285714285714286,17,13,14.285714285714286,0" style="color: hsl(0 0% 16%);" />
            <polygon points="28.571428571428573,0,14.285714285714286,0,17,13,28.571428571428573,0" style="color: hsl(0 0% 18%);" />
            <polygon points="85.71428571428572,100,100,100,100,85.71428571428572,85.71428571428572,100" style="color: hsl(0 0% 16%);" />
            <polygon points="0,85.71428571428572,0,100,14.285714285714286,100,0,85.71428571428572" style="color: hsl(0 0% 16%);" />
            <polygon points="100,14.285714285714286,100,0,85.71428571428572,0,100,14.285714285714286" style="color: hsl(0 0% 10%);" />
            <polygon points="14.285714285714286,0,0,0,0,14.285714285714286,14.285714285714286,0" style="color: hsl(0 0% 9%);" />
        </g>
        <g id="vitrail-glass">
            <polygon points="45,45,43,57,59,57,45,45" fill="hsl(0 0% 85%)" />
            <polygon points="59,57,59,43,45,45,59,57" fill="hsl(0 0% 76%)" />
            <polygon points="43,57,54,69,59,57,43,57" fill="hsl(0 0% 80%)" />
            <polygon points="70,73,70,56,59,57,70,73" fill="hsl(0 0% 83%)" />
            <polygon points="59,57,70,56,59,43,59,57" fill="hsl(0 0% 84%)" />
            <polygon points="43,57,43,70,54,69,43,57" fill="hsl(0 0% 83%)" />
            <polygon points="59,43,45,31,45,45,59,43" fill="hsl(0 0% 82%)" />
            <polygon points="45,45,27,57,43,57,45,45" fill="hsl(0 0% 85%)" />
            <polygon points="28,41,27,57,45,45,28,41" fill="hsl(0 0% 81%)" />
            <polygon points="43,57,27,57,43,70,43,57" fill="hsl(0 0% 76%)" />
            <polygon points="69,31,59,29,59,43,69,31" fill="hsl(0 0% 83%)" />
            <polygon points="59,43,59,29,45,31,59,43" fill="hsl(0 0% 81%)" />
            <polygon points="70,56,74,43,59,43,70,56" fill="hsl(0 0% 76%)" />
            <polygon points="45,31,28,41,45,45,45,31" fill="hsl(0 0% 79%)" />
            <polygon points="74,43,69,31,59,43,74,43" fill="hsl(0 0% 85%)" />
            <polygon points="69,83,70,73,54,69,69,83" fill="hsl(0 0% 83%)" />
            <polygon points="54,69,70,73,59,57,54,69" fill="hsl(0 0% 77%)" />
            <polygon points="86,58,84,41,74,43,86,58" fill="hsl(0 0% 83%)" />
            <polygon points="16,69,26,70,27,57,16,69" fill="hsl(0 0% 77%)" />
            <polygon points="27,57,26,70,43,70,27,57" fill="hsl(0 0% 85%)" />
            <polygon points="43,70,40,83,54,69,43,70" fill="hsl(0 0% 81%)" />
            <polygon points="26,70,40,83,43,70,26,70" fill="hsl(0 0% 76%)" />
            <polygon points="86,58,74,43,70,56,86,58" fill="hsl(0 0% 79%)" />
            <polygon points="74,43,84,41,69,31,74,43" fill="hsl(0 0% 79%)" />
            <polygon points="41,11,26,27,45,31,41,11" fill="hsl(0 0% 82%)" />
            <polygon points="45,31,26,27,28,41,45,31" fill="hsl(0 0% 84%)" />
            <polygon points="28,41,16,42,27,57,28,41" fill="hsl(0 0% 78%)" />
            <polygon points="70,73,86,58,70,56,70,73" fill="hsl(0 0% 84%)" />
            <polygon points="57,88,69,83,54,69,57,88" fill="hsl(0 0% 78%)" />
            <polygon points="70,73,87,70,86,58,70,73" fill="hsl(0 0% 77%)" />
            <polygon points="69,31,58,17,59,29,69,31" fill="hsl(0 0% 76%)" />
            <polygon points="59,29,58,17,45,31,59,29" fill="hsl(0 0% 77%)" />
            <polygon points="70,14,58,17,69,31,70,14" fill="hsl(0 0% 77%)" />
            <polygon points="40,83,57,88,54,69,40,83" fill="hsl(0 0% 83%)" />
            <polygon points="15,30,16,42,28,41,15,30" fill="hsl(0 0% 82%)" />
            <polygon points="16,42,13,57,27,57,16,42" fill="hsl(0 0% 85%)" />
            <polygon points="13,57,16,69,27,57,13,57" fill="hsl(0 0% 77%)" />
            <polygon points="26,70,30,88,40,83,26,70" fill="hsl(0 0% 82%)" />
            <polygon points="83,83,87,70,70,73,83,83" fill="hsl(0 0% 82%)" />
            <polygon points="16,88,30,88,26,70,16,88" fill="hsl(0 0% 77%)" />
            <polygon points="42.85714285714286,100,57.142857142857146,100,57,88,42.85714285714286,100" fill="hsl(0 0% 77%)" />
            <polygon points="26,27,15,30,28,41,26,27" fill="hsl(0 0% 81%)" />
            <polygon points="0,42.85714285714286,0,57.142857142857146,13,57,0,42.85714285714286" fill="hsl(0 0% 79%)" />
            <polygon points="17,13,15,30,26,27,17,13" fill="hsl(0 0% 76%)" />
            <polygon points="58,17,41,11,45,31,58,17" fill="hsl(0 0% 83%)" />
            <polygon points="86,26,70,14,69,31,86,26" fill="hsl(0 0% 84%)" />
            <polygon points="58,17,57.142857142857146,0,41,11,58,17" fill="hsl(0 0% 83%)" />
            <polygon points="100,28.571428571428573,86,26,84,41,100,28.571428571428573" fill="hsl(0 0% 81%)" />
            <polygon points="84,41,86,26,69,31,84,41" fill="hsl(0 0% 84%)" />
            <polygon points="100,42.85714285714286,84,41,86,58,100,42.85714285714286" fill="hsl(0 0% 82%)" />
            <polygon points="69,83,83,83,70,73,69,83" fill="hsl(0 0% 79%)" />
            <polygon points="71.42857142857143,100,83,83,69,83,71.42857142857143,100" fill="hsl(0 0% 81%)" />
            <polygon points="41,11,27,13,26,27,41,11" fill="hsl(0 0% 85%)" />
            <polygon points="42.85714285714286,100,57,88,40,83,42.85714285714286,100" fill="hsl(0 0% 78%)" />
            <polygon points="57,88,71.42857142857143,100,69,83,57,88" fill="hsl(0 0% 80%)" />
            <polygon points="30,88,42.85714285714286,100,40,83,30,88" fill="hsl(0 0% 84%)" />
            <polygon points="100,71.42857142857143,100,57.142857142857146,87,70,100,71.42857142857143" fill="hsl(0 0% 85%)" />
            <polygon points="87,70,100,57.142857142857146,86,58,87,70" fill="hsl(0 0% 84%)" />
            <polygon points="100,57.142857142857146,100,42.85714285714286,86,58,100,57.142857142857146" fill="hsl(0 0% 81%)" />
            <polygon points="16,69,16,88,26,70,16,69" fill="hsl(0 0% 79%)" />
            <polygon points="30,88,28.571428571428573,100,42.85714285714286,100,30,88" fill="hsl(0 0% 84%)" />
            <polygon points="0,71.42857142857143,16,88,16,69,0,71.42857142857143" fill="hsl(0 0% 81%)" />
            <polygon points="0,42.85714285714286,13,57,16,42,0,42.85714285714286" fill="hsl(0 0% 84%)" />
            <polygon points="13,57,0,71.42857142857143,16,69,13,57" fill="hsl(0 0% 82%)" />
            <polygon points="0,28.571428571428573,0,42.85714285714286,15,30,0,28.571428571428573" fill="hsl(0 0% 80%)" />
            <polygon points="15,30,0,42.85714285714286,16,42,15,30" fill="hsl(0 0% 78%)" />
            <polygon points="28.571428571428573,0,17,13,27,13,28.571428571428573,0" fill="hsl(0 0% 79%)" />
            <polygon points="27,13,17,13,26,27,27,13" fill="hsl(0 0% 78%)" />
            <polygon points="86,26,84,12,70,14,86,26" fill="hsl(0 0% 81%)" />
            <polygon points="70,14,57.142857142857146,0,58,17,70,14" fill="hsl(0 0% 85%)" />
            <polygon points="100,14.285714285714286,84,12,86,26,100,14.285714285714286" fill="hsl(0 0% 79%)" />
            <polygon points="57.142857142857146,100,71.42857142857143,100,57,88,57.142857142857146,100" fill="hsl(0 0% 82%)" />
            <polygon points="71.42857142857143,0,57.142857142857146,0,70,14,71.42857142857143,0" fill="hsl(0 0% 84%)" />
            <polygon points="41,11,28.571428571428573,0,27,13,41,11" fill="hsl(0 0% 82%)" />
            <polygon points="100,85.71428571428572,100,71.42857142857143,87,70,100,85.71428571428572" fill="hsl(0 0% 82%)" />
            <polygon points="100,85.71428571428572,87,70,83,83,100,85.71428571428572" fill="hsl(0 0% 85%)" />
            <polygon points="57.142857142857146,0,42.85714285714286,0,41,11,57.142857142857146,0" fill="hsl(0 0% 83%)" />
            <polygon points="16,88,28.571428571428573,100,30,88,16,88" fill="hsl(0 0% 81%)" />
            <polygon points="100,42.85714285714286,100,28.571428571428573,84,41,100,42.85714285714286" fill="hsl(0 0% 84%)" />
            <polygon points="0,57.142857142857146,0,71.42857142857143,13,57,0,57.142857142857146" fill="hsl(0 0% 78%)" />
            <polygon points="84,12,71.42857142857143,0,70,14,84,12" fill="hsl(0 0% 80%)" />
            <polygon points="0,14.285714285714286,0,28.571428571428573,15,30,0,14.285714285714286" fill="hsl(0 0% 81%)" />
            <polygon points="42.85714285714286,0,28.571428571428573,0,41,11,42.85714285714286,0" fill="hsl(0 0% 82%)" />
            <polygon points="17,13,0,14.285714285714286,15,30,17,13" fill="hsl(0 0% 81%)" />
            <polygon points="71.42857142857143,100,85.71428571428572,100,83,83,71.42857142857143,100" fill="hsl(0 0% 85%)" />
            <polygon points="85.71428571428572,100,100,85.71428571428572,83,83,85.71428571428572,100" fill="hsl(0 0% 82%)" />
            <polygon points="0,85.71428571428572,14.285714285714286,100,16,88,0,85.71428571428572" fill="hsl(0 0% 83%)" />
            <polygon points="16,88,14.285714285714286,100,28.571428571428573,100,16,88" fill="hsl(0 0% 85%)" />
            <polygon points="0,71.42857142857143,0,85.71428571428572,16,88,0,71.42857142857143" fill="hsl(0 0% 78%)" />
            <polygon points="100,28.571428571428573,100,14.285714285714286,86,26,100,28.571428571428573" fill="hsl(0 0% 81%)" />
            <polygon points="84,12,85.71428571428572,0,71.42857142857143,0,84,12" fill="hsl(0 0% 80%)" />
            <polygon points="100,14.285714285714286,85.71428571428572,0,84,12,100,14.285714285714286" fill="hsl(0 0% 84%)" />
            <polygon points="14.285714285714286,0,0,14.285714285714286,17,13,14.285714285714286,0" fill="hsl(0 0% 78%)" />
            <polygon points="28.571428571428573,0,14.285714285714286,0,17,13,28.571428571428573,0" fill="hsl(0 0% 85%)" />
            <polygon points="85.71428571428572,100,100,100,100,85.71428571428572,85.71428571428572,100" fill="hsl(0 0% 77%)" />
            <polygon points="0,85.71428571428572,0,100,14.285714285714286,100,0,85.71428571428572" fill="hsl(0 0% 83%)" />
            <polygon points="100,14.285714285714286,100,0,85.71428571428572,0,100,14.285714285714286" fill="hsl(0 0% 85%)" />
            <polygon points="14.285714285714286,0,0,0,0,14.285714285714286,14.285714285714286,0" fill="hsl(0 0% 76%)" />
        </g>
    </g>
</svg>`,
	'pointer-events-stroke': `<svg style="display: block;" viewBox="-0.2 -0.2 2.5 1.4">
    <style>
        .pointer-events-stroke {
            fill: hsl(0 0% 45%);
            transition: fill 0.2s cubic-bezier(0.37, 0, 0.63, 1);
        }
        .pointer-events-stroke:hover {
            fill: hsl(0 0% 75%);
        }
    </style>
    <path fill="hsl(0 0% 14%)" d="M -0.2 0.3 C -0.2 -0.2 -0.2 -0.2 0.3 -0.2 L 1.8 -0.2 C 2.3 -0.2 2.3 -0.2 2.3 0.3 L 2.3 0.7 C 2.3 1.2 2.3 1.2 1.8 1.2 L 0.3 1.2 C -0.2 1.2 -0.2 1.2 -0.2 0.7" />
    <svg style="color: hsl(0 0% 75%)" x="-0.1" y="-0.1" width="0.225" height="0.225" style="color: hsl(0 0% 75%)" viewBox="-21.832719802856445 -25.32887840270996 46.746585845947266 46.746585845947266">
        <path transform="rotate(110)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M -10 10 -10 11 C -10 17.5 10 17.5 10 11 L 10 10 C 5 12.5 -5 12.5 -10 10 -16 5 -14 -7.5 -7.5 -7.5 -2.5 -7.5 -5 0 -7.5 0 -5 0 -2.5 2.5 -2.5 5 -2.5 2.5 -3 0 -7.5 0 -7.5 0 -5 0 -5 -2.5 -5 0.75 -1 0.75 0 -2.5 -1 0.5 4.3 0.5 5 -2.5 6 -0.5 8 -0.5 10 -2.5 14 -1 14 7.5 10 10 M 10 -2.5 C 11 -3.5 12 -9 10 -11.5 9 -13 6 -14 5 -11.5 4 -13 1 -14 0 -11.5 -1 -13 -4 -14 -5 -11.5 -5 -15 -5 -17 -5.5 -19 -6.5 -21.5 -8 -21 -9 -20 -11 -17 -11.5 -10 -11 -6.5 M -5.5 -7 C -5 -8 -5 -11 -5 -11.5 M 0 -2.5 C 1 -3.5 1 -10 0 -11.5 M 5 -2.5 C 6 -3.5 6 -10 5 -11.5" />
    </svg> 
    <svg width="1" height="1" viewBox="-70 -70 140 140">
        <circle class="pointer-events-stroke" fill="hsl(0 0% 45%)" stroke-width="20" r="40" />
        <text fill="hsl(0 0% 95%)" font-family="monospace" font-weight="700" font-size="12" text-anchor="middle" y="68">visiblePainted</text>
    </svg>
    <svg x="1.1" width="1" height="1" viewBox="-70 -70 140 140">
        <circle class="pointer-events-stroke" style="pointer-events: visible" fill="hsl(0 0% 45%)" stroke-width="20" r="40" />
        <g style="pointer-events: none;" fill="none" stroke="hsl(0 0% 95%)">
            <path stroke-dasharray="0.01 0.03" pathLength="1" d="M 0 -50 A 50 50 0 0 1 0 50 50 50 0 0 1 0 -50" />
            <path stroke-dasharray="0.01 0.03" pathLength="1" d="M 0 -30 A 30 30 0 0 1 0 30 30 30 0 0 1 0 -30" />
        </g>
        <text fill="hsl(0 0% 95%)" font-family="monospace" font-weight="700" font-size="12" text-anchor="middle" y="68">visible</text>
    </svg>
</svg>`
};
