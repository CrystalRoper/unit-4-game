var winCount = 0;
var lossCount = 0;
var computerNumber = 0;
var playerNumber = 0;
var valueOptions = [1, 2, 5, 10];
var currentValueIndex = 0;
var crystalValues = [0, 0, 0, 0];

$(function () {
    generateComputerNumber();
    generateCrystalValues();
    updateGame();

    $("#crystal1").on("click", function () {
        playerNumber += crystalValues[0];
        updateGame();
    });

    $("#crystal2").on("click", function () {
        playerNumber += crystalValues[1];
        updateGame();
    });

    $("#crystal3").on("click", function () {
        playerNumber += crystalValues[2];
        updateGame();
    });

    $("#crystal4").on("click", function () {
        playerNumber += crystalValues[3];
        updateGame();

    });

    function generateCrystalValues() {
        for (var i = 0; i < crystalValues.length; i++) {
            crystalValues[i] = valueOptions[i];
        }
    }

    function generateComputerNumber() {
        //want the computer to pick a random number up to 50
        computerNumber = Math.floor(Math.random() * 50) + 1;
    }

    ////////////////////////    

    function updateGame() {
        if (playerNumber === computerNumber) {
            winCount++;
            generateComputerNumber();
            generateCrystalValues();
            playerNumber = 0;
        }

        else if (playerNumber >= computerNumber) {
            lossCount++;
            generateComputerNumber();
            generateCrystalValues();
            playerNumber = 0;
        }

        $('#winCountText').text(winCount);
        $('#lossCountText').text(lossCount);
        $('#playerNumberText').text(playerNumber);
        $('#computerNumberText').text(computerNumber);
    }

});





