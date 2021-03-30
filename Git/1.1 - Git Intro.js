// Configuration de son compte Git
git config --global user.name thomas
git config --global user.email thomas.garot@gmail.com

// Ouvrir le fichier du projet avec la commande cd
cd cheminDuFichichier

// Créer un dossier de Projet et l’ouvrir dans VSC
// Ouvrir le terminal ou commande Windows
git init
(=> cela crée un fichier caché .git)

// Ajouter 1 ou plusieurs fichiers dans la zone de transit
git add cheminFichier.xxx
git add cheminFichier.xxx cheminFichier.xxx
git add .		/* tous les fichiers */

// Retirer 1 ou plusieurs fichier de la zone de transit
git restore --staged nomFichier.xxx
git restore --staged nomFichier1.xxx nomFichier2.xxx
git restore --staged .	/* tous les fichiers */

git rm --cached [fichier]
git rm --cached -r .	//Vide toute la zone de transit

// Valider le dépôt dans le «local repository»
git commit --message="Message de description"
git commit -m "Message de de description"

git commit --all -m "message"

// correction du dernier commit
git commit --amend -m "message"

// voir les infos git (permet aussi de voir si un .git existe)
git status

// voir les commit effectué
git log

// quitter la navigation
q

// Naviguer sur les versions du projet dans l'historique
git checkout 4e1b9637427c686274c511f0b44b915b4f4651a3
git checkout master	// revient sur la dernière version

/// Cloner un projet
git clone https://github.com/smaloron/vagrant-lamp.git