/**
 * Created by Calcious on 10/28/16.
 */

"use strict";
(function (){

    //On page load animations
    $('.game_button').hide().delay(2000).fadeIn(3000);
    $('#startButt').hide().delay(4500).slideDown(500);
    $('#roundCount').hide().delay(2000).slideDown(2000);
    $('#instructions').hide().slideDown(2000);



    var gameArray = [];
    var userArray = [];

//Adding event listeners to buttons on users turn

function userInput() {
    $('#tL').click(function () {
        console.log("1");
        userArray.push("1");
    });
    $('#tR').click(function () {
        console.log("2");
        userArray.push("2");
    });
    $('#bL').click(function () {
        console.log("3");
        userArray.push("3");
    });
    $('#bR').click(function () {
        console.log("4");
        userArray.push("4");
    });
}

    //Hiding the amount of rounds and round status until game begins (will be added to HTML in the future)
    //$('#roundNumber').hide()
    //$('#roundStatus').hide()

//Methods that will be needed later--see W3schools for more information
//setTimeout(function,milliseconds,param1,param2,...)
//setInterval(function,milliseconds,param1,param2,...)
//clearInterval(id_of_setinterval)

// This happens when the "begin game" button is selected
    $('#startButt').click(function startGame(){
    gameArray.length = 0;
        compTurn();
    });


//A function that follows the path of the comp's turn
    function compTurn(){
        sequenceGen();
    }



// This generates a random sequence and animates the outcome
    function sequenceGen() {
        var randomSquare = Math.floor(Math.random() * 4) + 1;
        switch (true) {
                    case (randomSquare == 1):
                        gameArray.push('1');
                        console.log("sequenceGen just pushed 1");
                        boxAnim('#tL');
                        break;
                    case (randomSquare == 2):
                        gameArray.push('2');
                        console.log("sequenceGen just pushed 2");
                        boxAnim('#tR');
                        break;
                    case (randomSquare == 3):
                        gameArray.push('3');
                        console.log("sequenceGen just pushed 3");
                        boxAnim('#bL');
                        break;
                    case (randomSquare == 4):
                        gameArray.push('4');
                        console.log("sequenceGen just pushed 4");
                        boxAnim('#bR');
                        break;
                }
    }

//Tells the user that the game is over
    function gameOver(){
        gameArray.length = 0;
        alert("Game Over--seems Simple Simon isn't so simple")
    }


//This happens when the comp animates boxes
    function boxAnim(boxid) {
        $(boxid).fadeOut(300).fadeIn(300);

    }

    //A function that compares the user input to compTurn





}());
