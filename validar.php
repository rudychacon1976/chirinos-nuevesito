<?php

if (!empty($_POST["btn-login"])){

    if (empty($_POST['login_cedula'])){
        echo '<div class="field">INTRODUZCA UN NUMERO DE CEDULA</div>';
    } else{
        $num_cedula=$_POST['login_cedula'];
        $sql=$conn->query("SELECT * FROM jefe_familia WHERE cedula='".$cedula."'");
        

        if ($datos=$sql->fetch_object()){
            header("Location:inicio.php");
        }else{
            echo '<div class="field">EL USUARIO NO ESTÁ REGISTRADO</div>';
        };
    };

};

?>