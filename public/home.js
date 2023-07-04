$(document).ready(function () {

    $("#choices").hide();
    $("#restart").hide();
    var choice;
    var computerChoice;
    var count = 0;

    //keeps truck if its the computers turn
    var gameon = false;

    var turns = ["!", "!", "!", "!", "!", "!", "!", "!", "!"];

    //when i click x

    $("#choicex").click(function () {
        $("h2, .btn, span").hide();
        $("#choices,.btn1,#restart").show();
        choice = 'x';
        computerChoice = "o";

    });

    //when i click o
    $("#choiceo").click(function () {
        $("h2, .btn, span").hide();
        $("#choices,.btn1,#restart").show();
        choice = "o";
        computerChoice = "x";


    });
    //computer function
    function computer() {
        var taken = false;
        while (taken === false && count !== 5) {
            var randomNum = Math.floor(Math.random() * 10);
            var move = $("#" + randomNum).text();
            if (move === "!") {
                $("#" + randomNum).text(computerChoice);
                taken = true;
                turns[randomNum] = computerChoice;
            }
        }

    }

    //playerturn function
    function playerTurn(choice, id) {
        var spotTaken = $("#" + id).text();
        if (spotTaken === "!") {
            count++;
            turns[id] = choice;
            $("#" + id).text(choice);
            winner(turns, choice);
            if (gameon === false);
            computer();

            if (winner(turns, computerChoice)) {

            }
        }
    }

    //when i click the btn1 class
    $(".btn1").click(function () {
        var slot = $(this).attr('id');
        playerTurn(choice, slot);


    });

    //win function
    function winner(turns, player) {
        if (turns[0] === player && turns[1] === player && turns[2] === player) {
            gameon = true;
            alert(player + " won");
        }
        else if (turns[3] === player && turns[4] === player && turns[5] === player) {
            gameon = true;
            alert(player + " won");
        }
        else if (turns[6] === player && turns[7] === player && turns[8] === player) {
            gameon = true;
            alert(player + " won");
        }
        else if (turns[0] === player && turns[3] === player && turns[6] === player) {
            gameon = true;
            alert(player + " won");
        }
        else if (turns[1] === player && turns[4] === player && turns[7] === player) {
            gameon = true;
            alert(player + " won");
        }
        else if (turns[2] === player && turns[5] === player && turns[8] === player) {
            gameon = true;
            alert(player + " Won");
        }
        else if (turns[0] === player && turns[4] === player && turns[8] === player) {
            gameon = true;
            alert(player + " won");
        }
        else if (turns[2] === player && turns[4] === player && turns[6] === player) {
            gameon = true;
            alert(player + " won");
        }
        else {
            gameon = false;
        }
    }



    //when i click restart
    $("#restart").click(function () {

        $("h2, .btn").show();
        $("#choices,.btn1,#restart").hide();
        $(".btn1").html("!");
        turns = ["!", "!", "!", "!", "!", "!", "!", "!", "!"];
    });


});




