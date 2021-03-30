		/****************
		*	DOCTRINE	*
		****************/


// Doctrine
composer req doctrine

// Maker
composer req --dev maker
=> Modifier la version de DOctrine dans le fichier «composer.json» par:
"doctrine/doctrine-bundle": "2.2",
=> lancer la commande:
composer update


/// Paramétrer la Base de Données
=>  ouvrir fichier .env
=> Copier la ligne correspondant à la BD utilisé (mySQL) et modifier les données
DATABASE_URL="mysql://root:@127.0.0.1:3306/formation_symfony?serverVersion=mariadb-10.5.8"

// Créer la base de données (if new)
php bin/console doctrine:database:create


/// Créer/Modifier une Class => table
php bin/console make:entity
=> crée fichier « ClassName.php » et « ClassNameRepository.php » dans « src/Entity » et « src/Repository »

php bin/console make:entity --regenerate
=> pour mettre à jour les méthodes Setter et Getter

// Créer le code de création de table
php bin/console make:migration
=> crée un fichier « VersionDateTime.php » dans le dossier « migration »

// Execution de la commande SQL créée (Création de la table)
php bin/console doctrine:migrations:migrate


/// Bibliothèque Fixtures
composer req orm-fixtures
composer req --dev fzaninotto/faker

// Create new Fixture
php bin/console make:fixture

// Remplir la table avec un nouvel objet
// (vide la table avant)
php bin/console doctrine:fixtures:load
// (ne vide pas la table avant, rajoute à la suite)
php bin/console doctrine:fixtures:load --append


/// Class de Formulaire
// Liste des références du Form
"https://symfony.com/doc/current/reference/forms/types.html"

// Installer la Bibliothèque
composer require form

// Créer une Class Form
php bin/console make:form

//Modifier la mise en forme du Form dans:
=>config/packages/twig.yaml
/* Ajouter la ligne: */
form_themes: ['bootstrap_4_layout.html.twig']




/// Validation de Formulaire
// Liste des références des Contraintes de validation
"https://symfony.com/doc/current/reference/constraints.html"

// Installer la Bibliothèque
composer require validator

// Utiliser le Namespace
use Symfony\Component\Validator\Constraints as Assert;


// Exemple
@Assert\NotBlank(message="Le titre ne peut pas être vide")

@Assert\Length(
	min=3,
	max=10,
	minMessage="Le titre doit faire au moins {{ limit }} carctères",
	maxMessage="Le titre doit faire au plus {{ limit }} carctères")
	
@Assert\LessThanOrEqual(
	"today",
	message="La date de publication ne peut pas être supérieure à aujourd'hui")


/// Make CRUD
php bin/console make:crud