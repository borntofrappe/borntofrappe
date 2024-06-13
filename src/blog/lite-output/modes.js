export default {
	ascii: `Makai Toushi Sa-Ga|GB>Seiken Densetsu 2|SNES>Front Mission|SNES>Seiken Densetsu 3|SFC>Bahamut Lagoon|SNES>Front Mission Series: Gun Hazard|SNES>Chocobo no Fushigi na Dungeon|PS1>Einhander|PS1>Chocobo Racing: Genkai e no Road|PS1>Chrono Cross|PS1>DewPrism|PS1>Racing Lagoon|PS1>Seiken Densetsu: Legend of Mana|PS1>`,
	box: `┌──────────────────────────────────┬────────┐
│              title               │ system │
├──────────────────────────────────┼────────┤
│ Makai Toushi Sa-Ga               │ GB     │
│ Seiken Densetsu 2                │ SNES   │
│ Front Mission                    │ SNES   │
│ Seiken Densetsu 3                │ SFC    │
│ Bahamut Lagoon                   │ SNES   │
│ Front Mission Series: Gun Hazard │ SNES   │
│ Chocobo no Fushigi na Dungeon    │ PS1    │
│ Einhander                        │ PS1    │
│ Chocobo Racing: Genkai e no Road │ PS1    │
│ Chrono Cross                     │ PS1    │
│ DewPrism                         │ PS1    │
│ Racing Lagoon                    │ PS1    │
│ Seiken Densetsu: Legend of Mana  │ PS1    │
└──────────────────────────────────┴────────┘`,
	csv: `"Makai Toushi Sa-Ga",GB
"Seiken Densetsu 2",SNES
"Front Mission",SNES
"Seiken Densetsu 3",SFC
"Bahamut Lagoon",SNES
"Front Mission Series: Gun Hazard",SNES
"Chocobo no Fushigi na Dungeon",PS1
Einhander,PS1
"Chocobo Racing: Genkai e no Road",PS1
"Chrono Cross",PS1
DewPrism,PS1
"Racing Lagoon",PS1
"Seiken Densetsu: Legend of Mana",PS1`,
	column: `title                             system
--------------------------------  ------
Makai Toushi Sa-Ga                GB    
Seiken Densetsu 2                 SNES  
Front Mission                     SNES  
Seiken Densetsu 3                 SFC   
Bahamut Lagoon                    SNES  
Front Mission Series: Gun Hazard  SNES  
Chocobo no Fushigi na Dungeon     PS1   
Einhander                         PS1   
Chocobo Racing: Genkai e no Road  PS1   
Chrono Cross                      PS1   
DewPrism                          PS1   
Racing Lagoon                     PS1   
Seiken Densetsu: Legend of Mana   PS1   `,
	html: `<TR><TH>title</TH>
<TH>system</TH>
</TR>
<TR><TD>Makai Toushi Sa-Ga</TD>
<TD>GB</TD>
</TR>
<TR><TD>Seiken Densetsu 2</TD>
<TD>SNES</TD>
</TR>
<TR><TD>Front Mission</TD>
<TD>SNES</TD>
</TR>
<TR><TD>Seiken Densetsu 3</TD>
<TD>SFC</TD>
</TR>
<TR><TD>Bahamut Lagoon</TD>
<TD>SNES</TD>
</TR>
<TR><TD>Front Mission Series: Gun Hazard</TD>
<TD>SNES</TD>
</TR>
<TR><TD>Chocobo no Fushigi na Dungeon</TD>
<TD>PS1</TD>
</TR>
<TR><TD>Einhander</TD>
<TD>PS1</TD>
</TR>
<TR><TD>Chocobo Racing: Genkai e no Road</TD>
<TD>PS1</TD>
</TR>
<TR><TD>Chrono Cross</TD>
<TD>PS1</TD>
</TR>
<TR><TD>DewPrism</TD>
<TD>PS1</TD>
</TR>
<TR><TD>Racing Lagoon</TD>
<TD>PS1</TD>
</TR>
<TR><TD>Seiken Densetsu: Legend of Mana</TD>
<TD>PS1</TD>
</TR>`,
	insert: `INSERT INTO "table"(title,system) VALUES('Makai Toushi Sa-Ga','GB');
INSERT INTO "table"(title,system) VALUES('Seiken Densetsu 2','SNES');
INSERT INTO "table"(title,system) VALUES('Front Mission','SNES');
INSERT INTO "table"(title,system) VALUES('Seiken Densetsu 3','SFC');
INSERT INTO "table"(title,system) VALUES('Bahamut Lagoon','SNES');
INSERT INTO "table"(title,system) VALUES('Front Mission Series: Gun Hazard','SNES');
INSERT INTO "table"(title,system) VALUES('Chocobo no Fushigi na Dungeon','PS1');
INSERT INTO "table"(title,system) VALUES('Einhander','PS1');
INSERT INTO "table"(title,system) VALUES('Chocobo Racing: Genkai e no Road','PS1');
INSERT INTO "table"(title,system) VALUES('Chrono Cross','PS1');
INSERT INTO "table"(title,system) VALUES('DewPrism','PS1');
INSERT INTO "table"(title,system) VALUES('Racing Lagoon','PS1');
INSERT INTO "table"(title,system) VALUES('Seiken Densetsu: Legend of Mana','PS1');`,
	json: `[{"title":"Makai Toushi Sa-Ga","system":"GB"},
{"title":"Seiken Densetsu 2","system":"SNES"},
{"title":"Front Mission","system":"SNES"},
{"title":"Seiken Densetsu 3","system":"SFC"},
{"title":"Bahamut Lagoon","system":"SNES"},
{"title":"Front Mission Series: Gun Hazard","system":"SNES"},
{"title":"Chocobo no Fushigi na Dungeon","system":"PS1"},
{"title":"Einhander","system":"PS1"},
{"title":"Chocobo Racing: Genkai e no Road","system":"PS1"},
{"title":"Chrono Cross","system":"PS1"},
{"title":"DewPrism","system":"PS1"},
{"title":"Racing Lagoon","system":"PS1"},
{"title":"Seiken Densetsu: Legend of Mana","system":"PS1"}]`,
	line: ` title = Makai Toushi Sa-Ga
system = GB

title = Seiken Densetsu 2
system = SNES

title = Front Mission
system = SNES

title = Seiken Densetsu 3
system = SFC

title = Bahamut Lagoon
system = SNES

title = Front Mission Series: Gun Hazard
system = SNES

title = Chocobo no Fushigi na Dungeon
system = PS1

title = Einhander
system = PS1

title = Chocobo Racing: Genkai e no Road
system = PS1

title = Chrono Cross
system = PS1

title = DewPrism
system = PS1

title = Racing Lagoon
system = PS1

title = Seiken Densetsu: Legend of Mana
system = PS1`,
	list: `title|system
Makai Toushi Sa-Ga|GB
Seiken Densetsu 2|SNES
Front Mission|SNES
Seiken Densetsu 3|SFC
Bahamut Lagoon|SNES
Front Mission Series: Gun Hazard|SNES
Chocobo no Fushigi na Dungeon|PS1
Einhander|PS1
Chocobo Racing: Genkai e no Road|PS1
Chrono Cross|PS1
DewPrism|PS1
Racing Lagoon|PS1
Seiken Densetsu: Legend of Mana|PS1`,
	markdown: `|              title               | system |
|----------------------------------|--------|
| Makai Toushi Sa-Ga               | GB     |
| Seiken Densetsu 2                | SNES   |
| Front Mission                    | SNES   |
| Seiken Densetsu 3                | SFC    |
| Bahamut Lagoon                   | SNES   |
| Front Mission Series: Gun Hazard | SNES   |
| Chocobo no Fushigi na Dungeon    | PS1    |
| Einhander                        | PS1    |
| Chocobo Racing: Genkai e no Road | PS1    |
| Chrono Cross                     | PS1    |
| DewPrism                         | PS1    |
| Racing Lagoon                    | PS1    |
| Seiken Densetsu: Legend of Mana  | PS1    |`,
	qbox: `┌────────────────────────────────────┬────────┐
│               title                │ system │
├────────────────────────────────────┼────────┤
│ 'Makai Toushi Sa-Ga'               │ 'GB'   │
│ 'Seiken Densetsu 2'                │ 'SNES' │
│ 'Front Mission'                    │ 'SNES' │
│ 'Seiken Densetsu 3'                │ 'SFC'  │
│ 'Bahamut Lagoon'                   │ 'SNES' │
│ 'Front Mission Series: Gun Hazard' │ 'SNES' │
│ 'Chocobo no Fushigi na Dungeon'    │ 'PS1'  │
│ 'Einhander'                        │ 'PS1'  │
│ 'Chocobo Racing: Genkai e no Road' │ 'PS1'  │
│ 'Chrono Cross'                     │ 'PS1'  │
│ 'DewPrism'                         │ 'PS1'  │
│ 'Racing Lagoon'                    │ 'PS1'  │
│ 'Seiken Densetsu: Legend of Mana'  │ 'PS1'  │
└────────────────────────────────────┴────────┘`,
	quote: `'title','system'
'Makai Toushi Sa-Ga','GB'
'Seiken Densetsu 2','SNES'
'Front Mission','SNES'
'Seiken Densetsu 3','SFC'
'Bahamut Lagoon','SNES'
'Front Mission Series: Gun Hazard','SNES'
'Chocobo no Fushigi na Dungeon','PS1'
'Einhander','PS1'
'Chocobo Racing: Genkai e no Road','PS1'
'Chrono Cross','PS1'
'DewPrism','PS1'
'Racing Lagoon','PS1'
'Seiken Densetsu: Legend of Mana','PS1'`,
	table: `+----------------------------------+--------+
|              title               | system |
+----------------------------------+--------+
| Makai Toushi Sa-Ga               | GB     |
| Seiken Densetsu 2                | SNES   |
| Front Mission                    | SNES   |
| Seiken Densetsu 3                | SFC    |
| Bahamut Lagoon                   | SNES   |
| Front Mission Series: Gun Hazard | SNES   |
| Chocobo no Fushigi na Dungeon    | PS1    |
| Einhander                        | PS1    |
| Chocobo Racing: Genkai e no Road | PS1    |
| Chrono Cross                     | PS1    |
| DewPrism                         | PS1    |
| Racing Lagoon                    | PS1    |
| Seiken Densetsu: Legend of Mana  | PS1    |
+----------------------------------+--------+`,
	tabs: `title	system
Makai Toushi Sa-Ga	GB
Seiken Densetsu 2	SNES
Front Mission	SNES
Seiken Densetsu 3	SFC
Bahamut Lagoon	SNES
Front Mission Series: Gun Hazard	SNES
Chocobo no Fushigi na Dungeon	PS1
Einhander	PS1
Chocobo Racing: Genkai e no Road	PS1
Chrono Cross	PS1
DewPrism	PS1
Racing Lagoon	PS1
Seiken Densetsu: Legend of Mana	PS1`,
	tcl: `"title" "system"
"Makai Toushi Sa-Ga" "GB"
"Seiken Densetsu 2" "SNES"
"Front Mission" "SNES"
"Seiken Densetsu 3" "SFC"
"Bahamut Lagoon" "SNES"
"Front Mission Series: Gun Hazard" "SNES"
"Chocobo no Fushigi na Dungeon" "PS1"
"Einhander" "PS1"
"Chocobo Racing: Genkai e no Road" "PS1"
"Chrono Cross" "PS1"
"DewPrism" "PS1"
"Racing Lagoon" "PS1"
"Seiken Densetsu: Legend of Mana" "PS1"`
};
