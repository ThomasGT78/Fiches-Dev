
// Cette bibliothèque est le cœur de React
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>

// Cette bibliothèque permet d’afficher des éléments React
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

/// Structure
var élément créé = React.createElement("élément HTML", Attributs de l’élément sous forme d’objet JSON, enfant(s));
/* 
- Le premier paramètre est un élément HTML sous forme de chaîne de caractères (p, ul, li, select, option, …).
- Le deuxième paramètre est un ensemble d’attributs HTML sous forme d’objet JSON. Mais cela peut-être null ou {}.
- Le troisième paramètre est un élément enfant (nœud texte, objet React, ...). */

// Affichage … toujours dans la balise <script>
ReactDOM.render(élément créé, élément d’affichage);


/// Exemple
var p = React.createElement("p", {id: "id1", className: "red"}, "Hello React");

ReactDOM.render(p, document.getElementById("app"));

/// Structure d’une page HTML-react

<html>
    <head>
        <title>Titre</title>
        <script src="chemin/react.development.js"></script>
        <script src="chemin/react-dom.development.js"></script>
        <link rel="icon" type="image/png" href="../icones/favicon.png">
    </head>

    <body>
        <div id="app"></div>

        <script>
            // code react

           // Le code de création de l’élément

           // Le code d’affichage de l’élément dans la div app

        </script>

    </body>
</html>