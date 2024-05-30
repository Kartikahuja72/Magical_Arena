const DiceController = require('../../controller/diceController');

test('Dice roll returns a number between 1 and 6', () => {
  const roll = DiceController.rollDice();
  expect(roll).toBeGreaterThanOrEqual(1);
  expect(roll).toBeLessThanOrEqual(6);
});
