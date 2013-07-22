var Game = (function()	{
	var TicTacToe = function(){
		var that = this;
		that.grid = [[],[],[]];

		(function(){
			that.grid.forEach(function(subArray){
				for (var i = 0; i < 3; i++) {
					subArray[i] = '_';
				}
			});
		})();

	};

	TicTacToe.prototype.place = function(symbol, coordinates){
		var that = this, x = coordinates[0], y = coordinates[1];
		var validMove = function(){
			return (that.grid[x][y] === '_');
		};

		if ( !validMove() ) {
			console.log('invalid move!');
		} else {
			that.grid[x][y] = symbol;
		}

	};

	TicTacToe.prototype.arrayReduce = function(array) {
		return array.reduce(function(element, value){
				return element + value;
			});
	};

	TicTacToe.prototype.winnerByRow = function(){
		var that = this;
		var result = null

		for (var i = 0; i < 3; i++) {
			var reducedRow = that.arrayReduce(that.grid[i]);
			if (reducedRow === 'xxx') {
				result =  'x';
			} else if (reducedRow === 'ooo') {
				result = 'o';
			}
		}
		return result;
	};

	TicTacToe.prototype.winnerByColumn = function(){
		var that = this;

		var threeInAColumn = function(index){
			var column = [];
			for (var i = 0; i < 3; i++) {
					column.push(that.grid[i][index]);
				}

				var reducedColumn = that.arrayReduce(column);

			return that.checkSequence(reducedColumn);
		};

		for (var i = 0; i < 3; i++) {
			var columnSequence = threeInAColumn(i);
			if ((columnSequence === "x") || (columnSequence === "o")) {
				return columnSequence;
			}
		}
		return null;
	};

	TicTacToe.prototype.winnerByLeftDiagonal = function(){
		var that = this;

		var diagonal = [];
		for (var i = 0; i < 3; i++) {
			diagonal.push(that.grid[i][i]);
		}

		reducedDiagonal = that.arrayReduce(diagonal);

		return that.checkSequence(reducedDiagonal);
	};

	TicTacToe.prototype.winnerByRightDiagonal = function(){
		var that = this;

		var diagonal = [];
		for (var i = 0; i < 3; i++) {
			diagonal.push(that.grid[i][2 - i]);
		}

		reducedDiagonal = that.arrayReduce(diagonal);
		return that.checkSequence(reducedDiagonal);
	};

	TicTacToe.prototype.checkSequence = function(str){
		if (str === "ooo") {
			return "o";
		} else if (str === "xxx") {
			return "x";
		} else {
			return null;
		}
	};

	TicTacToe.prototype.winner = function(){
		var winner = (this.winnerByRow() || this.winnerByColumn() ||
									this.winnerByRightDiagonal() || this.winnerByLeftDiagonal());
		return winner;
	};
	return new TicTacToe();
});






$(document).ready(function(){
	var game = Game();
	var $blueImg = $('<img class="team" src="blue.svg">');
	var $redImg = $('<img class="team" src="red.svg">');
	var $victoryImg = $('<img class="victory" src="victory.svg">');

	function pietRender(el, measurement){
		var totalDimension = 0, d, lastClass;
		$(el).each(function(i, div) {
			d = Math.floor(Math.random()*16) + 25;
			totalDimension += d;
			if ( $(div).attr('class') ) {
				lastClass = div = '.' + $(div).attr('class');
			}
			$(div).css(measurement, d + '%');
		});
		d += 100 - totalDimension;
		if (lastClass)
			$(lastClass).css(measurement, d + '%');
		else
			$(el).last().css(measurement, d + '%');
		
	}

	//$(window).on('resize', pietRender);



	function render(rowIndex, columnIndex, xPlays){
		var square = game.grid[rowIndex][columnIndex];
		var $row = $($('div')[rowIndex]);
		var $tile = $($row.children()[columnIndex]);

		if (square === "x") {
			$tile.addClass("blue");
		} else if (square === "o") {
			$tile.addClass("red");
		}
	}

	function renderVictory(rowIndex, columnIndex, team){
		var $teamImg = (team === 'o') ? $redImg : $blueImg;
		var $row = $($('div')[rowIndex]);
		var $tile = $($row.children()[columnIndex]);
		$tile.addClass("yellow");
		$tile.append($victoryImg.add($teamImg));
		$teamImg.fadeIn(400, function(){
			$victoryImg.fadeIn();
		})
		$('span').off('click');
	}


	function play(){
		pietRender('div', 'height');
		
		pietRender('div:first span', 'width');
		var xPlays = true;
		var rowIndex, columnIndex;
		$('span').on('click', function(){
			columnIndex = $(this).index();
			rowIndex = $(this).parent().index();
			if (game.grid[rowIndex][columnIndex] !== '_') return;
			if (xPlays) game.grid[rowIndex][columnIndex] = 'x';
			if (!xPlays) game.grid[rowIndex][columnIndex] = 'o';
			render(rowIndex, columnIndex, xPlays);
			winner = game.winner();
			if (winner) renderVictory(rowIndex, columnIndex, winner);
			xPlays = !xPlays;
		});
	}


	play();
});