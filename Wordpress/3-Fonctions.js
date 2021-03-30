		/************************
		*	Liste des Fonctions	*
		************************/

///Info général sur le site
get_bloginfo()	// récup les infos

bloginfo("name") // affiche les infos
	'url'
	'description'
	...

have_posts
/* Détermine si la requête WordPress actuelle a des publications sur lesquelles boucler */
get_home_url()

/// Affiche un menu de navigation
wp_nav_menu()
	'menu_class'
	'theme_location'

// navigation dans la liste des articles
posts_nav_link()