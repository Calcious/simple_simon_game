/**
 * Created by Calcious on 10/28/16.
 */

"use strict";
(function () {

// //ON PAGE-LOAD ANIMATIONS
//     $('.game_button').hide().delay(2000).fadeIn(3000);
//     $('#startButt').hide().delay(4500).slideDown(500);
//     $('#roundCount').hide().delay(2000).slideDown(2000);
//     $('#instructions').hide().slideDown(2000);
//
// //AUDIO JS THAT LINKS TO HTML
//     var simSf = document.getElementById("simSf");
//     function simSoundf() {
//         simSf.play();
//     }
//
//     var simSc = document.getElementById("simSc");
//     function simSoundc() {
//         simSc.play();
//     }
//
//     var simSd = document.getElementById("simSd");
//     function simSoundd() {
//         simSd.play();
//     }
//
//     var simSa = document.getElementById("simSa");
//     function simSounda() {
//         simSa.play();
//     }
//
// //VARIABLE INITIALIZATIONS
//     var gameArray = []; //Stores buttons selected randomly by the computer
//     var roundCount = 0;
//     var gameArrayIndex = 0;
//     var roundStatus = "";
//
//
// // //EVENT LISTENERS TO BUTTONS FOR USER
// //     $('.tL').click(function () {
// //         boxAnim(this);
// //         simSoundf();
// //     });
// //     $('.tR').click(function () {
// //         boxAnim(this);
// //         simSoundc();
// //     });
// //     $('.bL').click(function () {
// //         boxAnim(this);
// //         simSoundd();
// //     });
// //     $('.bR').click(function () {
// //         boxAnim(this);
// //         simSounda();
// //     });
//
//
// //OCCURS WHEN "BEGIN ROUND" IS CLICKED
//     $("#startButt").click(function() {
//         console.log(gameArray);
//         $('#roundNumber').html("<h2>CURRENT ROUND ||<br>" + roundCount + "<br></h2><br>ROUND STATUS ||<br><span>WATCHING</span>");
//             compTurn();
//             gameArray = [];
//     });
//
// //COMP'S TURN
// function compTurn(){
//     var gameButtonSelect = ['.tL', '.tR', '.bL', '.bR'];
//     var randomNum = Math.floor(Math.random() * 4 + 1);
//     var randomButt = gameButtonSelect[randomNum];
//     gameArray.push(randomButt);
//     queSequence();
// }
//
//
// function queSequence (){
//     var i = 0;
//     var intervalId = setInterval(function(){
//         boxAnim(gameArray.length[i]);
//         i++;
//         if(i >= gameArray.length){
//             userTurn();
//             clearInterval(intervalId);
//         }
//     }, 1000);
// }
//
// //Compares user and comp's selection
//
// function compareInput(square){
//         var userInput = "." + square;
//         var currentSimon = gameArray[gameArrayIndex];
//     if(userInput == currentSimon){
//             if(gameArrayIndex == gameArray.length - 1){
//                 gameArrayIndex = 0;
//                 compTurn();
//             } else{
//                 gameArrayIndex++;
//             }
//     } else{
//         gameOver();
//     }
// }
//
//
// //GAME OVER FUNCTION
//     function gameOver() {
//         alert("Game Over--seems Simple Simon isn't so simple");
//         gameArray = [];
//         roundStatus = "";
//         roundCount = 0;
//     }
//
//     function userTurn() {
//         $('.game_button').click(function () {
//             boxAnim($(this));
//             compareInput($(this).attr("class"));
//         });
//     }
//
//
// // //OCCURS WHEN THE FOLLOWING SQUARES ARE SELECTED
// //     function sqSelect(randomSquare) {
// //         switch (true) {
// //             case (randomSquare == 1):
// //                 gameArray.push('1');
// //                 console.log("1 got pushed");
// //                 boxAnim("1");
// //                 break;
// //             case (randomSquare == 2):
// //                 gameArray.push('2');
// //                 console.log("1 got pushed");
// //                 boxAnim("2");
// //                 break;
// //             case (randomSquare == 3):
// //                 gameArray.push('3');
// //                 console.log("3 got pushed");
// //                 boxAnim("3");
// //                 break;
// //             case (randomSquare == 4):
// //                 gameArray.push('4');
// //                 console.log("4 got pushed");
// //                 boxAnim("4");
// //                 break;
// //         }
// //     }
//
//     //ANIMATION FUNCTION
//     function boxAnim(value) {
//         $('.game_button').fadeOut(300).fadeIn(300);
//         if(value == 'tL'){
//             simSoundf();
//         } else if(value == 'tR'){
//             simSoundc();
//         } else if(value == 'bl'){
//             simSoundd();
//         } else if(value == 'bR'){
//             simSounda();
//         }
//     }
//





    var indexOfSimonMove = 0;
    var simonSequence = [];
    var difficulty = 500;

    function startGame() {
        // $("#score").text("0"); // set score to zero
        // reset any other variables (level, delay, difficulty)
        // zero out simon'sSequence
        simonSequence = [];
        simonMove(); // calls a function to randomly pick a square
    }

    function gameOver() {
        console.log("game over, man!");
        simonSequence = [];
        indexOfSimonMove = 0;
        disableUserInput();
    }

    function animate(selector) {
        $(selector).css("opacity", "0.2")
            .animate({
                opacity: "1.0"
            }, 500);

    }

// randomly pick a square and add it to the end of simon's Sequence
    function simonMove() {
        var squares = ['#green', '#red', '.#ellow', '#blue'];
        var random = Math.floor(Math.random() * 4);
        console.log(random);
        var randomSquare = squares[random];
        simonSequence.push(randomSquare);
        console.log(simonSequence);

        playSimonSequence();
    }

    function playSimonSequence() {
        disableUserInput();

        var i = 0;
        var intervalId = setInterval(function() {
            animate(simonSequence[i]);
            i++;

            if(i >= simonSequence.length) {
                enableUserInput();
                clearInterval(intervalId);
            }
            console.log("This is the current difficulty : " + difficulty);
        }, difficulty);

    }

    function compare(color) {
        var userSelection = "#" + color;
        var currentSimonMove = simonSequence[indexOfSimonMove];

        // userSelection matches currentSimonMove
        if(userSelection == currentSimonMove) {

            // comparing userInput to simon's very last selection
            if(indexOfSimonMove == simonSequence.length - 1) {
                indexOfSimonMove = 0;
                difficulty *= .9;
                simonMove();
                // updateScore();
            } else {
                indexOfSimonMove++;
            }

        } else {
            gameOver();
        }

    }

    // function updateScore() {
    //     var score = $("#score").text();
    //     score++;
    //     $("#score").text(score);
    // }

// start game when user clicks start button.
    $("#startButt").click(startGame);


// enabling/disabling userClicks
    function enableUserInput() {
        // handle the user input when they click a square
        $('button').click(function() {
            // animate the specific button the user clicked
            animate($(this));

            // compare user input to all of simon's choices in order
            compare($(this).attr("id"));

        });
    }

    function disableUserInput() {
        $("button").off('click');
    }
}());
