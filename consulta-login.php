<?php
session_start();
require_once('dbConnection.php');
include('validar.php');

if (!empty($_POST)) {
  $_SESSION['cedula'] = $_POST['cedula'];
  header('Location: consulta.php');
} else {
  $_SESSION['cedula'] = 0;
}
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Login</title>
  <link rel="stylesheet" href="style.css">
  <script src="https://kit.fontawesome.com/a076d05399.js"></script>
</head>
<header class="header">
  <?php include('nav_login.php'); ?>
</header>

<body>
  <div class="container">
    <header>Consultar Usuario</header>
    <div class="form-outer">
      <form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
        <div class="page slide-page">
          <div class="field">
            <label for="cedula">Cedula del Jefe de Familia</label>
            <input type="number" id="cedula" name="cedula" required>
          </div>
          <div class="field">
            <input type="submit" class="btn-login" value="Consultar">
          </div>
      </form>
    </div>
  </div>
</body>

</html>