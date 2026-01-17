<?php
// Logique PHP
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Christophe Millot - Infographie & Print</title>

    <link rel="icon" type="image/png" href="assets/img/favicon.ico">
    <link rel="apple-touch-icon" href="assets/img/favicon.ico">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="css/style.css?v=<?php echo time(); ?>">
</head>
<body>

    <?php 
    include 'includes/header.php'; 
    ?>

<main>
    <?php 
    // On force la page sur 'accueil' pour l'instant car tes travaux 
    // print y sont regroupés, ou 'print' si tu crées main-print.php
    $page = 'print'; 
    
    $file = 'includes/main-' . $page . '.php';
    
    if (file_exists($file)) {
        include $file;
    } else {
        echo "<section class='container'>
                <h1>Erreur</h1>
                <p>Le fichier <strong>$file</strong> est introuvable.</p>
              </section>";
    }
    ?>
</main>

    <?php 
    include 'includes/footer.php'; 
    ?>

    <script src="assets/js/menu.js"></script>
</body>
</html>