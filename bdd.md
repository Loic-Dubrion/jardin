TABLE "carres"
- id (int, PK)
- nom (varchar)
- composition_n (array of int)
- composition_n_1 (array of int)
- composition_n_2 (array of int)
- commentaire (text)


TABLE "legumes"
- id (int, PK)
- nom (varchar)
- type (varchar)
- rotation (array of int)
- alliances (array of int)
- description (text)

Champ	| Type | Contraintes
|:---:|:---:|:---:|
|id |	int |	PK, auto-incrémentation|
|nom	| varchar	 |
|composition_n	| array of int |	REFERENCES legumes(id)|
|composition_n_1 |	array of int |	REFERENCES legumes(id)|
|composition_n_2 |	array of int |	REFERENCES legumes(id)|
|commentaire |	text |	


 |Champ |	Type |	Contraintes |
  |:---:|:---:|:---:|
 |id |	int |	PK, auto-incrémentation |
 |nom |	varchar |	
 |type |	varchar |	
 |rotation |	array of int |	REFERENCES legumes(id) |
 |alliances |	array of int |	REFERENCES legumes(id) |
 |description |	text |	
