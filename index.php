<html>

    <head>
        <title>KPI Collectif</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="keywords" content="">
        <link rel="shortcut icon" type="image/png" href="media/favicon.png" />
        <link rel="stylesheet" type="text/css" href="css/reset.css" />
        <link rel="stylesheet" type="text/css" href="css/main.css" />
    </head>

    <body id="home">

        <div id="blackout" class="nope"></div>

        <header>
            <h1>KPI Collectif</h1>
            <span class="menu"></span>
            <nav>
                <ul class="none center">
                    <li><a href="#welcome">Bienvenue</a></li>
                    <li><a href="#presentation">Présentation</a></li>
                    <li><a href="#share">Partage</a></li>
                    <li><a href="table.php">Données</a></li>
                </ul>
            </nav>
            <div class="arrow"></div>
        </header>

        <section id="welcome">
            <div>
                <p>Bienvenue sur le site collaborative pour les initiés d'Internet.</p>
                <a href="#presentation" class="anch" id="mainCta">Qui sommes-nous ?</a>
            </div>
        </section>

        <section id="presentation">
            <h1>Présentation</h1>
            <div class="center">
                <p>KPI Collectif est un site collaboratif pour les initiés aux langages et outils du web. Vous pouvez discuter avec des professionnels pour vous aider dans vos projets. Mais avant tout, un peu d'histoire...</p>
                <p>Le début des années 1990 marque la naissance de l'aspect le plus connu d'Internet aujourd'hui : le web, un ensemble de pages en HTML mélangeant du texte, des liens, des images, adressables via une URL et accessibles via le protocole HTTP. Ces standards, développés au CERN par Tim Berners-Lee et Robert Cailliau devinrent rapidement populaires grâce au développement au NCSA par Marc Andreessen et Eric Bina du premier navigateur multimédia Mosaic.</p>
                <p>In blandit tincidunt risus non gravida. Cras sit amet pulvinar ante, pellentesque suscipit libero. Curabitur vehicula in lorem vitae rutrum. Vivamus imperdiet porttitor eros eu iaculis. Nulla lacinia dolor non magna molestie feugiat. Nullam vehicula sem a elit sagittis, eu vulputate metus scelerisque. Integer accumsan ac lectus quis sodales.</p>
            </div>
            <a href="#share" class="anch" id="presCta">Intéressé ?</a>
        </section>

        <section id="share">
            <h1>Suivez-nous et partagez</h1>
            <ul class="center">
                <li id="facebook">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Falexandrebo.fr%2F&amp;src=sdkpreparse" target="_blank">
                        <img src="media/facebook.png" />
                        <p>Facobook</p>
                    </a>
                </li>
                <li id="twitter">
                    <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Falexandrebo.fr%2F" target="_blank">
                        <img src="media/twitter.png" />
                        <p>Twitter</p>
                    </a>
                </li>
            </ul>
        </section>

        <section id="chat">
            <h1>Chat</W></h1>
            <div id="viewer"><ul id="listMsg"></ul></div>
            <div id="connectGG">
                <p>Si vous voulez participer et vous exprimer, connectez-vous et exprimez vos attentes sur notre future plateforme</p>
                <span id="GGC" class="connect"></span>
            </div>
            <form id="formMsg" class="nope">
                <p id="connectUserName"></p>
                <p id="error">Don't forget to complete correctly ALL the areas.</p>
                <!--<input type="text" name="name" placeholder="Name" id="name">-->
                <textarea name="paragraphe" placeholder="Votre message" id="paragraphe"></textarea>
                <input type="submit" value="Envoyer" name="submit" id="submit">
                <a id="GGDC">Deconnexion</a>
            </form>
            <span id="msg-but" class="closed"></span>
            <span id="msg-cross"></span>
        </section>

        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script src="https://www.gstatic.com/firebasejs/3.6.8/firebase.js"></script>
        <script id="entry-table" type="text/x-handlebars-template">
            {{#each this}}{{perso}}{{/each}}
        </script>
        <script type="text/javascript" src="js/firebase-treatment.js"></script>
        <script type="text/javascript" src="js/front.js"></script>
        <script type="text/javascript" src="js/kpi.js"></script>

    </body>

</html>



