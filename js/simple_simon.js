/**
 * Created by Calcious on 10/28/16.
 */

"use strict";
(function () {

    //On page load animations
    $('.game_button').hide().delay(2000).fadeIn(3000);
    $('#startButt').hide().delay(4500).slideDown(500);
    $('#roundCount').hide().delay(2000).slideDown(2000);
    $('#instructions').hide().slideDown(2000);

    //AUDIO JS
    var simSf = document.getElementById("simSf");

    function simSoundf() {
        simSf.play();
    }

    var simSc = document.getElementById("simSc");

    function simSoundc() {
        simSc.play();
    }

    var simSd = document.getElementById("simSd");

    function simSoundd() {
        simSd.play();
    }

    var simSa = document.getElementById("simSa");

    function simSounda() {
        simSa.play();
    }

//Variable initializations
    var gameArray = [];
    var userArray = [];
    var roundCount = 0;
    var clearListener = null;
    var gameArrayIndex = 0;


//Adding event listeners to buttons on users turn

    function userInput() {
        $('#tL').click(function () {
            console.log("1");
            console.log(userArray);
            userArray.push("1");
            boxAnim('#tL');
            simSoundf();
        });
        $('#tR').click(function () {
            console.log("2");
            console.log(userArray);
            userArray.push("2");
            boxAnim('#tR');
            simSoundc();
        });
        $('#bL').click(function () {
            console.log("3");
            console.log(userArray);
            userArray.push("3");
            boxAnim('#bL');
            simSoundd();
        });
        $('#bR').click(function () {
            console.log("4");
            console.log(userArray);
            userArray.push("4");
            boxAnim('#bR');
            simSounda();
        });
    }

    //Hiding the amount of rounds and round status until game begins (will be added to HTML in the future)
    //$('#roundNumber').hide()
    //$('#roundStatus').hide()

// This happens when the "begin game" button is selected

    $("#startButt").click(function () {
        userArray = [];
        if (gameArray.length > 0) {
            // userTurn();
            compTurn();
            // compAnimate();
            // compPush();
        } else {
            compTurn();
        }
    });

    function compAnimate() {
        //separate these?
    }

    function compPush() {
        //separate these?
    }


//A function that follows the path of the comp's turn
    function compTurn() {
        sequenceGen();
    }

    $('.game_button').click(function () {
        var userValue = $(this).data("game");
        userArray.push(userValue);
        console.log("User Array: " + userArray);
        console.log("Game Array: " + gameArray);
        for (gameArrayIndex; gameArrayIndex < userArray.length; gameArrayIndex++) {
            if (userArray[gameArrayIndex] != gameArray[gameArrayIndex]) {
                gameArrayIndex = 0;
                gameOver();

            } else {
                gameArrayIndex++;
                console.log("THEYRE THE SAME!!!#$@#$@#")
            }
        }
    });

    function doSetTimeout(preVal) {
        setTimeout(boxAnim(preVal), 1000);
    }

// This generates a random sequence and animates the outcome
    function sequenceGen() {
        var randomSquare = Math.floor(Math.random() * 4) + 1;

        if (gameArray.length > 0) {
            var randomString = randomSquare.toString();
            gameArray.push(randomString);
            for (var i = 0; i < gameArray.length; i++) {
                var preVal = gameArray[i];
                var preValString = preVal.toString();
                console.log(gameArray);
                console.log("this is preval" + preValString);
                doSetTimeout(preVal);
            }
        } else {
            switch (true) {
                case (randomSquare == 1):
                    gameArray.push('1');
                    console.log("sequenceGen just pushed 1");
                    console.log(gameArray);
                    boxAnim("1");
                    simSoundf();
                    break;
                case (randomSquare == 2):
                    gameArray.push('2');
                    console.log("sequenceGen just pushed 2");
                    console.log(gameArray);
                    boxAnim("2");
                    simSoundc();
                    break;
                case (randomSquare == 3):
                    gameArray.push('3');
                    console.log("sequenceGen just pushed 3");
                    console.log(gameArray);
                    boxAnim("3");
                    simSoundd();
                    break;
                case (randomSquare == 4):
                    gameArray.push('4');
                    console.log("sequenceGen just pushed 4");
                    console.log(gameArray);
                    boxAnim("4");
                    simSounda();
                    break;
            }
        }

    }

//Tells the user that the game is over
    function gameOver() {
        gameArray.length = 0;
        alert("Game Over--seems Simple Simon isn't so simple");
        gameArray = [];
        userArray = [];
    }


//This happens when the comp animates boxes
    function boxAnim(value) {
        $('.game_button[data-game=' + value + ']').fadeOut(300).fadeIn(300);
    }

    //A function that compares the user input to compTurn


}());
