	/********************************************
	*	Importer un dossier/projet dans GitHub	*
	********************************************/

// Liens de mes projets:
"https://github.com/ThomasGT78/convertisseur_fichier_bdd.git"
"https://github.com/ThomasGT78/formation-git.git"
"https://github.com/ThomasGT78/MyMiniApps.git"

/// 1- Créer un commit sur le dossier
//Dans un terminal, se placer dans le dossier
git init /* cela crée un fichier caché .git */

// Ajouter les fichiers dans la zone de transit
git add .

// Valider le dépôt dans le «local repository»
git commit -m ""

/// 2- Définir un dépôt distant
git remote add [nomDepotLocal] [adresseDepotGitHub]
// Exemple
git remote add origin https://github.com/ThomasGT78/test.git


/// 3- Ajouter les modifications sur le dépôt distant
git push [nomDepotLocal] [brancheCibleDuDepotDistant]
// Exemple
git push origin master


		/************************
		*	Travail en Équipe	*
		************************/
		
/// Récupérer une branche distante
git fetch [nomDepotDistant]
/*
-Récupère les branches d'un dépôt distant et les place dans le dépôt local
-Utile pour obtenir une branche distante qui n'existe pas en local car elle a été créé par un collègue par exemple
*/


/// Se mettre à jour
git pull [nomDepotDistant]
/* 
-Pas besoin du nom du dépôt si qu'un seul dépôt distant
-Récupère les modifications du dépôt distant sur la branche active en local, la même branche doit exister sur le dépôt distant.
-Modifications intégrées dans les dossier de travail
=> commit nécessaire pour les intégrées dans le dépôt local
- c'est un «fetch» suivi d'un «merge» et d'un «checkout»
*/

/// Cloner un projet
git clone adresseRepositoryGitHub
git clone https://github.com/smaloron/formation-git-2020.git


		/** Indications GitHub	**/
		
// create a new repository on the command line
echo "# MyMiniApps" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin "https://github.com/ThomasGT78/MyMiniApps.git"
git push -u origin main

// push an existing repository from the command line
git remote add origin cheminDuRepositery
git remote add origin"https://github.com/ThomasGT78/MyMiniApps.git"

git branch -M main // pour créer une branch "main" (facultatif)
git push -u origin master	// main si la branch a été créé