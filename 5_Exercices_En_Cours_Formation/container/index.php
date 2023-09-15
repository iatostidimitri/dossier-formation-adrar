<?php
    //import de l'autoloader des classes
    require_once './autoload.php';
    require_once './vendor/autoload.php';
    use App\Controller\UtilisateurController;
    $userController = new UtilisateurController();
    use App\Controller\RolesController;
    $rolesController = new RolesController();
    //utilisation de session_start(pour gérer la connexion au serveur)
    session_start();
    //Analyse de l'URL avec parse_url() et retourne ses composants
    $url = parse_url($_SERVER['REQUEST_URI']);
    //test si l'url posséde une route sinon on renvoi à la racine
    $path = isset($url['path']) ? $url['path'] : '/';
    //routeur
    switch ($path) {
        case '/container/':
            include './home.php';
            break;
        case '/container/test':
            include './test.php';
            break;
        case '/container/userAdd':
            $userController->addUser();
            break;
        case '/container/rolesAdd':
            $rolesController->addRoles();
            break;
        default:
            include './error.php';
            break;
    }
?>