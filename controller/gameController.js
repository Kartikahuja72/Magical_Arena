const Game = require('../model/gameModel');
const PlayerController=require('./playerController');
class GameController {
  static playGame(PlayerA, PlayerB) {
    const game = new Game(PlayerA, PlayerB);

    while (PlayerController.isAlive(PlayerA) && PlayerController.isAlive(PlayerB)) {
      const attackerIndex = PlayerA.health < PlayerB.health ? 0 : 1;

      game.fight(attackerIndex);
      if (!PlayerController.isAlive(game.players[1 - attackerIndex])) {
        console.log(`Player ${attackerIndex === 0 ? 'A' : 'B'} wins!`);
        break;
      }

      game.fight(1 - attackerIndex);
      if (!PlayerController.isAlive(game.players[attackerIndex])) {
        console.log(`Player ${attackerIndex === 0 ? 'B' : 'A'} wins!`);
        break;
      }
    }

  }
}

module.exports = GameController;
