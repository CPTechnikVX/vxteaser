let _endpoint = '';
let _webToken = '';

export default function(endpoint, webToken) {
	_endpoint = endpoint;
	_webToken = webToken;

	function query(query, vars) {
		vars = vars || {};

		return new Promise((resolve, reject) => {
			fetch(
				_endpoint,
				{
					method:  'post',
					headers: {
						'Authorization': 'Bearer ' + _webToken,
					},
					body:    JSON.stringify({
						query:     query,
						variables: vars
					})
				}
			).then((res) => res.json()
			).then((jsonRes) => {
				resolve(jsonRes.data);
			}).catch((error) => {
				reject(error);
			});
		});
	}

	return {
		query
	}
};
