class Game {
  constructor(PlayerA, PlayerB) {
    this.players = [PlayerA, PlayerB];
  }

  fight(attackerIndex) {
    console.log(this.players[attackerIndex]);
    const attacker = this.players[attackerIndex];
    const defender = this.players[1 - attackerIndex];

    const attackRoll = attacker.attack * this.rollDice();
    const defendRoll = defender.strength * this.rollDice();

    const damage = Math.max(0, attackRoll - defendRoll);
    defender.health -= damage;

    console.log(`Attacker rolls ${attackRoll / attacker.attack}, Defender rolls ${defendRoll / defender.strength}`);
    console.log(`Attack damage: ${attackRoll}, Defense strength: ${defendRoll}`);
    console.log(`Defender health reduced by ${damage} to ${defender.health}\n`);
  }


  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
}

module.exports = Game;
