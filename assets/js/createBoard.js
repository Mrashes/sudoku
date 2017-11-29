function makepuzzle(board) {
	var puzzle  = [];
	var deduced = makeArray(81, null);
	var order   = _.range(81);

	shuffleArray(order);

	for (var i = 0; i < order.length; i++) {
		var pos = order[i];

		if (deduced[pos] == null) {
			puzzle.push({pos:pos, num:board[pos]});
			deduced[pos] = board[pos];
			deduce(deduced);
		}
	}

	shuffleArray(puzzle);

	for (var i = puzzle.length - 1; i >= 0; i--) {
		var e = puzzle[i];
		removeElement(puzzle, i);

		var rating = checkpuzzle(boardforentries(puzzle), board);
		if (rating == -1) {
			puzzle.push(e);
		}
	}

	return boardforentries(puzzle);
}
