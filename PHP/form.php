<?php
if(isset($_POST['sendmail'])) {

    $firstName = ucwords($_POST['recherche_ville']);
      
    //technique 1
    $result= $mysqli->query('SELECT ville_nom, ville_id FROM villes WHERE "'.$recherche.'" = ville_nom ');
    $row = $result->fetch_array();
    

	if(!isset($row['ville_nom'])) {
		echo 'Cette ville nexiste pas dans notre base de données';
	}

	else {
		$ville_id = $row['ville_id'];
		$ville_nom = $row['ville_nom'];
		echo "<a href='ville.php?id=$ville_id'> Voir plus d'informations sur : $ville_nom </a><br><br> "; 

		$mysqli->query('INSERT INTO user_searchs(search_user_id, search_ville_id) VALUES ('.$user_id.', '.$ville_id.')');

		$result = $mysqli->query('SELECT ville_id, ville_nom FROM villes INNER JOIN user_searchs ON villes.ville_id = user_searchs.search_ville_id WHERE search_user_id = "'.$user_id.'"');
		while ($row = $result ->fetch_array()) {
			$liste_recherche[$row['ville_id']] =  $row['ville_nom'];

		}
	
	}
}

?>