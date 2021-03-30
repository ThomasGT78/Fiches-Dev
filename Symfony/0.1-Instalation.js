		/****************************
		*	Installation Symfony	*
		****************************/

// Télécharger et installer le fichier setup.exe
"https://symfony.com/download"

// Info sur Symfony
=> taper la commande dans un terminal
symfony --help

// Créer un projet appelé «sf-start»
=> se positionner dans le dossier où installer le projet avec le terminal:
cd C:\Thomas Dev\Projet_Symfony

=> Créer le projet:
symfony new nomDossier
symfony new --full nomDossier /* */
=> se positionner dans le projet
cd sf-start

//Démarrer le server
symfony server:start
//ou
symfony serve -d

//Pour choisir le Port de connexion
symfony serve -d --port=8081

/// Ajouter des Recettes ()
"https://flex.symfony.com/"

=> Tapper la commande:
composer require nomRecette
Ex:
composer require annotations
composer require twig
/* plusieurs à la fois */
composer require annotation twig debug maker doctrine migrations orm-fixtures form validator security-csrf

// Afficher la liste des Routes + liste des controllers
php bin/console debug:router --show-controllers

// stocker le résultat dans un fichier
php bin/console debug:router --show-controllers > debug.txt

// Outils de debuggage à installer
composer req debug
composer req --dev debug

/* Fonction comme consol.log() */
dump($elementToAnalize); 


/// Ajouter un Controller
=> click droit sur le dossier Controller
=> New => PHP Class

