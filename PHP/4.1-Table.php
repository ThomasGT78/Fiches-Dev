		<!---------------
		-	  TABLE 	-
		---------------->
<?php
// "http://localhost:8081/4.1-Table.php"


		/************************
		*	 Tableau Ordinal	*
		************************/

// Initialiser un tableau
$prenomsV1[0] = Thomas;
$prenomsV1[1] = Laura;
$prenomsV1[2] = Romain;
// ou
$prenomsV2 = array('Baptiste', 'Laura', 'Romain');
// ou
$prenomsV3 = ['Stéphane', 'Mous', 'Thomas'];


// Affichage Contenue d'un Tableau
echo $prenomsV1[0];	// Thomas
echo $prenomsV3[2];	// Romain

echo print_r($prenomsV2); 
/* Array ( [0] => Thomas [1] => Laura [2] => Romain )*/

// Retourne l'élément courant du tableau
current($array);

// Avance le pointeur interne d'un tableau
next($array);

while (current($prenomsV2)) {
	$value = current($prenomsV2);
    echo key($prenomsV2) . "=>" . $value, "\n";
    next($prenomsV2);
}
		/************************
		*	Tableau Associatif	*
		************************/
		
$personne = array(
	'nom' => 'Garot',
	'prenom' => 'Thomas',
	'age' => '33',
);

// Vérifier si une Clé existe dans l'array (boolean)
array_key_exists('key', $array);

// Vérifier si une Valeur existe dans l'array (boolean)
in_array('value', $array);


		/************
		*	 KEY	*
		************/
		
// Récupérer la Clé d'une Valeur dans l'array
array_search('value', $array);


// Retourne toutes les clés d'un tableau
array_keys($array ,[$search_value] ,[$strictMode = false]);
/* renvoi: array */
$keys = array_keys($personne);
print_r($keys);
foreach($keys as $key){
	echo $key ."<br>";
}


// Retourne la clé courante dans le tableau array
key($array | $object);
/* renvoi: int | string | null */

while ($value = current($personne)) {
    echo key($personne) . "=>" . $value, "<br>";
    next($personne);
}

foreach($personne as $key => $detail){
	echo $key . "=>" . $detail, "<br>";
}
?>
