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
    var gameArray = []; //Stores buttons selected randomly by the computer
    var userArray = []; //Stores buttons selected by the user
    var roundCount = 0;
    var gameArrayIndex = 0;
    var roundStatus = "";


//Adding event listeners to buttons on users turn
    $('#tL').click(function () {
        boxAnim("1");
        simSoundf();
    });
    $('#tR').click(function () {
        boxAnim("2");
        simSoundc();
    });
    $('#bL').click(function () {
        boxAnim("3");
        simSoundd();
    });
    $('#bR').click(function () {
        boxAnim("4");
        simSounda();
    });


//When the "begin round" button is selected--this makes sure that the userArray is clear of previous values
    $("#startButt").click(function () {
        console.log(gameArray);
        userArray = [];
        $('#roundNumber').html("<h2>CURRENT ROUND ||<br>" + roundCount + "<br></h2><br>ROUND STATUS ||<br><span>WATCHING</span>")
        if (gameArray.length > 0) {
            compTurn();
            roundCount++;
            console.log(roundCount);
        } else {
            compTurn();
            roundCount++;
            console.log(roundCount);
        }
    });

//Follows the path of the comp's turn
    function compTurn() {
        sequenceGen();
        var roundStatus = "Watching";
    }


//Stores the value of the square selected by the user and compares the results with the comp's selection
    function userTurn() {
        $('.game_button').click(function () {
            var roundStatus = "User's turn to match";
            var userValue = $(this).data("game");
            userArray.push(userValue);
            for (gameArrayIndex; gameArrayIndex < userArray.length; gameArrayIndex++) {
                if (userArray[gameArrayIndex] != gameArray[gameArrayIndex]) {
                    gameArrayIndex = 0;
                    gameOver();
                } else {
                    gameArrayIndex++;
                    alert("THEYRE THE SAME!  Press the 'Begin Round' button to continue!");
                }
            }
        });
    }
    userTurn();


//Generates a random sequence and animates the outcome
    function sequenceGen() {
        var randomSquare = Math.floor(Math.random() * 4) + 1;
        console.log(gameArray);


//Occurs on every round after the first--converts the value to a string then animates the related square
        if (gameArray.length > 0) {
            sqSelect(randomSquare);
            var randomString = randomSquare.toString();
            gameArray.push(randomString);
            var i = 0;
                var preVal = gameArray[i];
                var intervalId = setInterval(function() {
                    boxAnim(preVal);
                    i++;
                    if(i >= gameArray.length) {
                        clearInterval(intervalId);
                    }
                }, 1000);
        } else {
            sqSelect(randomSquare);
        }
    }

//Tells the user that the game is over and clears both arrays for the next game
    function gameOver() {
        gameArray.length = 0;
        alert("Game Over--seems Simple Simon isn't so simple");
        gameArray = [];
        userArray = [];
        roundStatus = "";
        roundCount = 0;
    }


//This happens when the boxes animate
    function boxAnim(value) {
        $('.game_button[data-game=' + value + ']').fadeOut(300).fadeIn(300);
        if(value == '1'){
            simSoundf();
        } else if(value == '2'){
            simSoundc();
        } else if(value == '3'){
            simSoundd();
        } else if(value == '4'){
            simSounda();
        }
    }

//Occurs any time a square is selected by the comp
    function sqSelect(randomSquare) {
        switch (true) {
            case (randomSquare == 1):
                gameArray.push('1');
                console.log("1 got pushed");
                boxAnim("1");
                simSoundf();
                break;
            case (randomSquare == 2):
                gameArray.push('2');
                console.log("1 got pushed");
                boxAnim("2");
                simSoundc();
                break;
            case (randomSquare == 3):
                gameArray.push('3');
                console.log("3 got pushed");
                boxAnim("3");
                simSoundd();
                break;
            case (randomSquare == 4):
                gameArray.push('4');
                console.log("4 got pushed");
                boxAnim("4");
                simSounda();
                break;
        }
    }


}());
