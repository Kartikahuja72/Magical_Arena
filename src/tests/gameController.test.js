const GameController = require('../../controller/gameController');
//const Player = require('../magical-arena/model/playerModel');
const Player = require('../../model/playerModel');

test('Game ends when a player is defeated', () => {
  const player1 = new Player(50, 5, 10);
  const player2 = new Player(100, 10, 5);
  GameController.playGame(player1, player2);
  expect(player1.health <= 0 || player2.health <= 0).toBe(true);
});
