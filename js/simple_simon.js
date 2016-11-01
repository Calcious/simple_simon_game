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

//Adding event listeners to buttons

    $('#tL').click(function(){
        console.log("1");
        userArray.push("1");
    });
    $('#tR').click(function(){
        console.log("2");
        userArray.push("2");
    });
    $('#bL').click(function(){
        console.log("3");
        userArray.push("3");
    });
    $('#bR').click(function(){
        console.log("4");
        userArray.push("4");
    });

    //Hiding the amount of rounds and round status until game begins (will be added to HTML in the future)
    //$('#roundNumber').hide()
    //$('#roundStatus').hide()

//Methods that will be needed later--see W3schools for more information
//setTimeout(function,milliseconds,param1,param2,...)
//setInterval(function,milliseconds,param1,param2,...)
//clearInterval(id_of_setinterval)

// This happens when the "begin game" button is selected
    function startGame(){
    var roundCount = 0;
    gameArray.length = 0;
        compTurn();
        roundCount++;
    }


//A function that takes a game button as a parameter and animates it when selected by either comp or player
    function compTurn(){
        sequenceGen();
        var i = 0;
        var intervalId = setInterval(function(){
            animateSeq(i);
            i++;
            if (i >= gameArray.length) {
                clearInterval(intervalId);
            }
        },1500);
    }



// This generates a random sequence
    function sequenceGen() {
        var randomSquare = Math.floor(Math.random() * 4) + 1;
        switch (true) {
                    case (randomSquare == 1):
                        gameArray.push('tL');
                        break;
                    case (randomSquare == 2):
                        gameArray.push('tR');
                        break;
                    case (randomSquare == 3):
                        gameArray.push('bL');
                        break;
                    case (randomSquare == 4):
                        gameArray.push('bR');
                        break;
                }
    }

//Tells the user that the game is over
    function gameOver(){
        userArray = 0;
        gameArray.length = 0;
        alert("Game Over--seems Simple Simon isn't so simple")
    }


//This happens when the comp selects a series of boxes
    function boxAnim(boxid) {
        $(boxid).animate({width: 100}, 100);
        $(boxid).animate({height: 100}, 100);
    }


// A function that causes an animation in the boxes as they are selected
    function animateSeq(i) {
        if (gameArray[i] == 'tL')  {
            boxAnim('#topLeft');
        } else if (sgameArray[i] == 'tR')  {
            boxAnim('#topRight');
        } else if (gameArray[i] == 'bL')  {
            boxAnim('#bottomLeft');
        } else if (gameArray[i] == 'bR')  {
            boxAnim('#bottomRight');
        };
    }



}());
