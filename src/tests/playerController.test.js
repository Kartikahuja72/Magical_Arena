const PlayerController = require('../../controller/playerController');
const Player = require('../../model/playerModel');

test('Player is alive if health is positive', () => {
  const player = new Player(50, 5, 10);
  expect(PlayerController.isAlive(player)).toBe(true);
});

test('Player is not alive if health is zero', () => {
  const player = new Player(0, 5, 10);
  expect(PlayerController.isAlive(player)).toBe(false);
});
