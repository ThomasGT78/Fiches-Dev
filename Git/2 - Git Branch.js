// Créer une Branche
git branch [nom de la branche]

git switch [nom de la branche]
git checkout [nom de la branche]

// Ettiqueté un commit
git tag nomDuTag idDuCommit
git tag v1.0 baec19fa30ea...
git tag v1.1 master/head/HEAD

// supprimé l'ettiquette
git tag -d nomDuTag


// créer un stash
git stash

// Liter tous les Stash
git stash list

// Appliquer un stash (récupérer les modifs mises de côté)
git stash apply // prend le dernier stash
git stash apply stash@{numéro}

// supprimer un stash
git stash drop stash@{numéro}
git stash pop	// supprime le dernier