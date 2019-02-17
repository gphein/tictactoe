
const RefreshView = function(game) {

	const gameView = $('#game');
	let token;

	for (let row = 0; row < game.size; row++) {
		for (let col = 0; col < game.size; col++) {
			token = game.token(row, col);
			if (token !== null) {
				$(`div[row=${row}][col=${col}]`).text(token);
			}
		}
	}

};