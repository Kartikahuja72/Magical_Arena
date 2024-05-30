const Dice = require('../model/diceModel');

class DiceController {
  static rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
}

module.exports = DiceController;
