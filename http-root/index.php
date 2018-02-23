<?php
// add headers for CORS
header('Access-Control-Allow-Origin: *');
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
	header('Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS');
	if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
		header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
	}
}

$isLinear     = !empty($_GET['linear']) ? true : false;
$vxqlEndpoint = !empty($_GET['vxqlEndpoint']) ? $_GET['vxqlEndpoint'] : '';
$vxqlWebToken = !empty($_GET['vxqlWebToken']) ? $_GET['vxqlWebToken'] : '';
?>
<!DOCTYPE html>
<html>
<head>
	<title>VXTeaser</title>
	<meta charset="utf-8">
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
	<style>
		html {
			font-family: 'Roboto Condensed';
			font-size:   10px;
		}

		body {
			background-color: #000000;
			margin:           0;
			padding:          0;
		}
	</style>
	<link rel="stylesheet" href="lib/css/main.css" />
</head>
<body>
<div id="app"></div>
<script src="lib/vxteaser-lib.js"></script>
<script src="lib/vxteaser-playground.js"></script>
<div style="width: 1300px; margin: 0 auto; max-width: 100%;">
	<div style="color: white; font-size: 1.6rem; cursor: pointer; line-height: 25px; background-color: #505050; margin-bottom: 5px;">
		<label><input type="checkbox" onClick="toggleLinear(this.checked)" <?=$isLinear ? 'checked' : ''?>>show linear</label>
	</div>
	<div id="banner"></div>
	<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</div>

<script>
	var id = findGetParameter('id');

	function toggleLinear(status) {
		renderPreview(id, status);
	}

	function findGetParameter(parameterName) {
		var result = null,
		    tmp    = [];
		location.search
			.substr(1)
			.split("&")
			.forEach(function(item) {
				tmp = item.split("=");
				if (tmp[0] === parameterName) {
					result = decodeURIComponent(tmp[1]);
				}
			});
		return result;
	}

	// register message listener
	window.addEventListener('message', function(event) {
		if (event.data && event.data.id) {
			renderPreview(event.data.id);
		}
	}, false);

	renderPreview(id, <?=$isLinear?>);

	function renderPreview(id, isLinear) {
		VXTeaser.Preview.render(document.querySelector('#banner'), {
			bannerSuiteClassName: isLinear ? 'is-linear' : '',
			vxqlEndpoint:         <?php echo json_encode($vxqlEndpoint); ?>,
			vxqlWebToken:         <?php echo json_encode($vxqlWebToken); ?>,
			id:                   id
		});
	}
</script>
</body>
</html>
