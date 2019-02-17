
const InitView = function(game) {

	const gameView = $('#game');

	for (let row = 0; row < game.size; row++) {
		let rowView = $('<div class="row"></div>');
		gameView.append(rowView);
		for (let col = 0; col < game.size; col++) {
			rowView.append($(`<div class='cell' row='${row}' col='${col}'>-</div>`));
		}
	}

};