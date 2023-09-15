<?php
namespace App\Controller;

use App\Model\Roles;
use App\Utils\Utilitaire;
class RolesController extends Roles{
    public function addRoles(){
        $error = "";
        //tester si le formulaire
        if(isset($_POST['submit'])){
            //test si les champs sont remplis
            if(!empty($_POST['nom_roles'])){
                    //setter les valeurs à l'objet RolesController
                    $this->setNom(Utilitaire::cleanInput($_POST['nom_roles']));
                    //tester si le compte existe
                    if(!$this->findOneBy()){
                        //Ajouter le compte en BDD
                        $this->add();
                        $error = "Le role a été ajouté en BDD";
                    }    
                    else{
                        $error = "Le role existe déja";
                    }
            }else{
                $error = "Veuillez renseigner tous les champs du formulaire";
            }
        }
        include '.\App\Vue\vueAddRoles.php';
    }
}
?>