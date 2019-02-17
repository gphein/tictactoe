const TicTacToe = function(size) {

	this.board = [];
	this.size = size;

	for (let k = 0; k < size; k++) {
		this.board[k] =[];
		for (let j = 0; j < size; j++) {
			this.board[k][j] = null;
		}
	}

};

TicTacToe.prototype.AiPlay = function() {

	for (let k = 0; k < this.size; k++) {
		for (let j = 0; j < this.size; j++) {
			if (this.board[j][k] == null) {
				this.mark(j, k, 'O');
				return 1;
			}
		}
	}

	return -1;

};

TicTacToe.prototype.token = function(row, col) {
	return this.board[row][col];
};

TicTacToe.prototype.mark = function(row, col, token) {
	this.board[row][col] = token;
};

