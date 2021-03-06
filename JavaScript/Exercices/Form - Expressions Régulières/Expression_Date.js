DATE
Filtre février jusqu'au 29
Les autres jusqu'au 31 ou 30
jusqu'à 12 mois seulement
2 caractères pour les mois et les jours
4 caractères pour les années
Accepte / -  pour séparer les jours mois et années

RegExp("^((((0{1}[1-9]{1})|([12]{1}[0-9]{1}){1})[/-]{1}([0]{1}[2]{1}))|(((0{1}[1-9]{1})|([12]{1}[0-9]{1})|(3{1}[01]{1})){1}[/-]{1}((0{1}[13578]{1})|(1{1}[02]{1})){1}){1}|(((0{1}[1-9]{1})|([12]{1}[0-9]{1})|([3]{1}[0]{1})){1}[/-]{1}((0{1}[469]{1})|([1]{2})){1}){1}){1}[/-]{1}(([1]{1}[9]{1}[0-9]{2})|([2]{1}[0]{1}(([01]{1}[0-9]{1})|([2]{1}[0]{1}){1}){1})){1}$")

(
(		//29 jours max
((0{1}[1-9]{1})	|	([12]{1}[0-9]{1})){1}
// Séparateur jour/mois
[/-]{1}
		//Mois de Février
([0]{1}[2]{1})
)

| //ou

(		//31 jours max
((0{1}[1-9]{1})	|	([12]{1}[0-9]{1})	|	(3{1}[01]{1}){1}
// Séparateur jour/mois
[/-]{1}
		//Mois avec 31 jours
((0{1}[13578]{1})	|	(1{1}[02]{1})){1}
){1}

| //ou

(		//30 jours max
((0{1}[1-9]{1})	|	([12]{1}[0-9]{1})	 |	([3]{1}[0]{1})){1}
// Séparateur jour/mois
[/-]{1}
		//Mois avec 30 jours
((0{1}[469]{1})|([1]{2})){1}
){1}
){1}


// Séparateur mois/années
[/-]{1}

// Années de 1900 à 1999
(([1]{1}[9]{1}[0-9]{2})
| //ou
// Années de 2000 à 2020
([2]{1}[0]{1}
	(([01]{1}[0-9]{1})			// 2000 à 2019
|	([2]{1}[0]{1})				// 2020
	){1}
)
){1}
