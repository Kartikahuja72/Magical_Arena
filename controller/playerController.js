const Player = require('../model/playerModel');

class PlayerController {
  static isAlive(player) {
    return player.health > 0;
  }
}

module.exports = PlayerController;
