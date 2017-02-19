<html>

<head>
    <title>Données KPI Collectif</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <link rel="shortcut icon" type="image/png" href="media/favicon.png" />
    <link rel="stylesheet" type="text/css" href="css/reset.css" />
    <link rel="stylesheet" type="text/css" href="css/main.css" />
</head>

<body>

    <div id="header">
        <h1>Données KPI</h1>
        <a href="index.php">Retourner page d'accueil</a>
    </div>

    <table class="center">
        <tr>
            <td colspan="2" class="td-title">Données</td>
        </tr>
        <tr>
            <td><p>Visites</p></td>
            <td><p id="visites"></p></td>
        <tr>
            <td><p>Clicks Onglets</p></td>
            <td><p id="clickOnglet"></p></td>
        </tr>
        <tr>
            <td><p>CTA "Qui sommes-nous ?"</p></td>
            <td><p id="clickCtaMain"></p></td>
        </tr>
        <tr>
            <td><p>CTA "Intéressé ?"</p></td>
            <td><p id="clickCtaPres"></p></td>
        </tr>
        <tr>
            <td><p>Temps de visite (H : M : S)</p></td>
            <td><p id="tps-visite"></p></td>
        </tr>
    </table>


    <table class="center">
        <tr>
            <td colspan="2" class="td-title">Clicks Partage</td>
        </tr>
        <tr>
            <td><p>Facebook</p></td>
            <td><p id="clickFB"></p></td>
        </tr>
        <tr>
            <td><p>Twitter</p></td>
            <td><p id="clickTT"></p></td>
        </tr>
    </table>

    <table class="center">
        <tr>
            <td colspan="2" class="td-title">Chat</td>
        </tr>
        <tr>
            <td><p>Clicks Chat Button</p></td>
            <td><p id="clickChat"></p></td>
        </tr>
    </table>

    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script src="https://www.gstatic.com/firebasejs/3.6.8/firebase.js"></script>
    <script type="text/javascript" src="js/firebase-treatment.js"></script>
    <script type="text/javascript" src="js/front.js"></script>
    <script type="text/javascript" src="js/kpi.js"></script>

</body>

</html>



