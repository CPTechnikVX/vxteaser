<?php
// add headers for CORS
header('Access-Control-Allow-Origin: *');
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
	header('Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS');
	if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
		header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
	}
}
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
			font-family: Roboto;
			font-size:   10px;
		}

		body {
			margin:     0;
			padding:    0;
			background: #101112 url('http://www.visit-x.net/assets/img/bg_pattern.jpg');
		}
	</style>
	<link rel="stylesheet" href="css/vx.css" />
</head>
<body>
<div id="app"></div>
<script src="lib/vxteaser.js"></script>
<script src="lib/vxteaser-playground.js"></script>
<div style="width: 1300px; margin: 0 auto; max-width: 100%;">
	<div id="banner"></div>
</div>


<script>
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

	renderPreview(findGetParameter('id'));

	function renderPreview(id) {
		VXTeaserView.Preview.render(document.querySelector('#banner'), {
			vxqlEndpoint: 'https://pu.vxnextgen.x/vxql',
			vxqlWebToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXJ0bmVySWQiOjgyNzgsInByb2R1Y3RJZCI6MTAwMDN9.8B65L1KiQ4xhJlSNJGvcBInBx4CtlUV_KrLMz3AnLyk',
			id:           id
		});
	}
</script>
</body>
</html>
