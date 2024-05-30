
const Player = require('../model/playerModel');
const GameController = require('../controller/gameController');

const PlayerA = new Player(50, 5, 10);
const PlayerB = new Player(100, 10, 5);

GameController.playGame(PlayerA, PlayerB);