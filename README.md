# Magical Arena

The Magical Arena is a turn-based battle simulation where players fight using dice rolls to attack and defend. This project implements the Magical Arena using an MVC (Model-View-Controller) file structure in Node.js.

## Project Structure

The project directory is organized as follows:

magical-arena/
│
├── model/
│ ├── playerModel.js
│ ├── gameModel.js
│ └── diceModel.js
│
├── controller/
│ ├── playerController.js
│ ├── gameController.js
│ └── diceController.js
│
└── src/
├── main.js
└── tests/
├── playerController.test.js
├── gameController.test.js
└── diceController.test.js



- **model:** Contains the definitions of the models (Player, Game, Dice) without implementation details.
- **controller:** Contains the implementation of controllers for each component (PlayerController, GameController, DiceController).
- **src:** Contains the main file (`main.js`) to run the game and a directory (`tests/`) for unit tests.

## How to Run

To run the Magical Arena game, follow these steps:

1. Navigate to the project directory in your terminal.
2. Run the main file using Node.js:

    ```
    node src/main.js
    ```

3. The game will simulate the battle between two players and display the winner.

## How to Test

The project includes unit tests for each component. To run the tests, follow these steps:

1. Navigate to the project directory in your terminal.
2. Run the following command:

    ```
    npm test
    ```

3. Jest will execute all test files located in the `src/tests/` directory and display the test results.

## Components

### Models

- **Player:** Represents a player in the game. It has attributes like health, strength, and attack.
- **Game:** Manages the game logic. It contains an array of players and keeps track of the current player.
- **Dice:** Represents a six-sided die.

### Controllers

- **Player Controller:** Handles player-related logic, such as checking if the player is alive.
- **Game Controller:** Manages the game flow, including playing turns.
- **Dice Controller:** Handles dice-related logic, such as rolling the dice.

## Testing

The project uses Jest as the testing framework for running unit tests. Jest is configured to recognize test files located in the `src/tests/` directory and execute them.

## Dependencies

The project does not require any external dependencies. It uses built-in Node.js modules for file system operations and the Jest testing framework for unit testing.

