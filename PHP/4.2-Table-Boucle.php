		<!-----------------------
		-	  Table - Boucle	-
		------------------------>
<?php
// "http://localhost:8081/4.2-Table-Boucle.php"


		/************************
		*	 Tableau Ordinal	*
		************************/

$prenoms = ['Stéphane', 'Mous', 'Thomas'];

// FOR
for ($i = 0; $i < count($prenoms) ; $i++){
	echo "<p>$prenoms[$i]</p>";
}
// FOREACH
foreach ($prenoms as $prenom){
	echo "<p>$prenom</p>";
}


		/************************
		*	Tableau Associatif	*
		************************/

$personne = array(
	'nom' => 'Garot',
	'prenom' => 'Thomas',
	'age' => '33',
);

// FOR
for ($i = 0; $i < count($personne) ; $i++){
	$keys = array_keys($personne);
	$key = $keys[$i];
	echo "<p>for: $key => $personne[$key]</p>";
}

// FOREACH
foreach ($personne as $detail){
	echo "<p>$detail</p>";
}

foreach ($personne as $key => $detail){
	echo "<p>$key = $detail</p>";
}

for ($i = 0; $i < count($prenomsV2) ; $i++){
	$key = key($prenoms);
	echo "<p>$key</p>";
}
?>
