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
//

// This happens when the "begin game" button is selected
    function startGame(){
roundCount = 0;
    gameArray.length = 0;
        sequenceGen();
        //user watches certain boxes animate
        //add to round count
    }


//A function that takes a game button as a parameter and animates it when selected by either comp or player
    //function boxAnim(){}

// This generates a random sequence
    function sequenceGen() {
        var randomSq = Math.floor(Math.random() * 4) + 1;
        switch (true) {
                    case (randomSq == 1):
                        gameArray.push('tL');
                        break;
                    case (randomSq == 2):
                        gameArray.push('tR');
                        break;
                    case (randomSq == 3):
                        gameArray.push('bL');
                        break;
                    case (randomSq == 4):
                        gameArray.push('bR');
                        break;
                }
    }

//This adds an event listener to console.log a value assigned to each button (1, 2, 3, & 4)

//Tells the user that the game is over
    //$('#roundNumber').hide()
    //$('#roundStatus').hide()
    //roundCount = 0


//This happens when the comp selects a series of boxes


// A function that causes an animation in the boxes as they are selected
//     function ???(i) {
//         if (sequence[i] == 'tL')  {
//             boxAnim('#topLeft');
//         } else if (sequence[i] == 'tR')  {
//             boxAnim('#topRight');
//         } else if (sequence[i] == 'bL')  {
//             boxAnim('#bottomLeft');
//         } else if (sequence[i] == 'bR')  {
//             boxAnim('#bottomRight');
//         };
//     }



}());
