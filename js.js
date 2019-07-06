var btn = document.getElementById("btninput");
var btnplayer6 = document.getElementById("btnplayer6");
btnplayer6.addEventListener("click", player6);

function player6() {
    var display6 = document.getElementById("display6");
    display6.style.display = "block";
}

btn.addEventListener("click", btninput);

function btninput() {
    btn.style.display = "none ";
    var displayerscore6 = document.getElementById("showscoreplayer");
    displayerscore6.style.display = "block";
    var nameplayer1 = document.getElementById("player1").value;
    var nameplayer2 = document.getElementById("player2").value;
    var nameplayer3 = document.getElementById("player3").value;
    var nameplayer4 = document.getElementById("player4").value;
    var nameplayer5 = document.getElementById("player5").value;
    var nameplayer6 = document.getElementById("player6").value;
    //well
    function_Set();
    function_Server();
    function_Spiker();
    function_Blocker();
    function_Digger();
    function_Receiver();

    var scorePlayer1 = 0;
    var scorePlayer2 = 0;
    var scorePlayer3 = 0;
    var scorePlayer4 = 0;
    var scorePlayer5 = 0;
    var scorePlayer6 = 0;

    var scorePlayer1E = 0;
    var scorePlayer2E = 0;
    var scorePlayer3E = 0;
    var scorePlayer4E = 0;
    var scorePlayer5E = 0;
    var scorePlayer6E = 0;
    var count = 1;

    var btnsub = document.getElementById("btnsubmit");
    btnsub.addEventListener("click", btnsubmit);



    function btnsubmit() {
        var sSetPlayer1 = document.getElementById("set_score1");
        var sSerPlayer1 = document.getElementById("ser_score1");
        var sSpiPlayer1 = document.getElementById("spi_score1");
        var sBloPlayer1 = document.getElementById("blo_score1");
        var sDigPlayer1 = document.getElementById("dig_score1");
        var sRecPlayer1 = document.getElementById("rec_score1");

        var sSetPlayer2 = document.getElementById("set_score2");
        var sSerPlayer2 = document.getElementById("ser_score2");
        var sSpiPlayer2 = document.getElementById("spi_score2");
        var sBloPlayer2 = document.getElementById("blo_score2");
        var sDigPlayer2 = document.getElementById("dig_score2");
        var sRecPlayer2 = document.getElementById("rec_score2");

        var sSetPlayer3 = document.getElementById("set_score3");
        var sSerPlayer3 = document.getElementById("ser_score3");
        var sSpiPlayer3 = document.getElementById("spi_score3");
        var sBloPlayer3 = document.getElementById("blo_score3");
        var sDigPlayer3 = document.getElementById("dig_score3");
        var sRecPlayer3 = document.getElementById("rec_score3");

        var sSetPlayer4 = document.getElementById("set_score4");
        var sSerPlayer4 = document.getElementById("ser_score4");
        var sSpiPlayer4 = document.getElementById("spi_score4");
        var sBloPlayer4 = document.getElementById("blo_score4");
        var sDigPlayer4 = document.getElementById("dig_score4");
        var sRecPlayer4 = document.getElementById("rec_score4");

        var sSetPlayer5 = document.getElementById("set_score5");
        var sSerPlayer5 = document.getElementById("ser_score5");
        var sSpiPlayer5 = document.getElementById("spi_score5");
        var sBloPlayer5 = document.getElementById("blo_score5");
        var sDigPlayer5 = document.getElementById("dig_score5");
        var sRecPlayer5 = document.getElementById("rec_score5");

        var sSetPlayer6 = document.getElementById("set_score6");
        var sSerPlayer6 = document.getElementById("ser_score6");
        var sSpiPlayer6 = document.getElementById("spi_score6");
        var sBloPlayer6 = document.getElementById("blo_score6");
        var sDigPlayer6 = document.getElementById("dig_score6");
        var sRecPlayer6 = document.getElementById("rec_score6");

        //error
        var sSetPlayer1E = document.getElementById("set_score1E");
        var sSerPlayer1E = document.getElementById("ser_score1E");
        var sSpiPlayer1E = document.getElementById("spi_score1E");
        var sBloPlayer1E = document.getElementById("blo_score1E");
        var sDigPlayer1E = document.getElementById("dig_score1E");
        var sRecPlayer1E = document.getElementById("rec_score1E");

        var sSetPlayer2E = document.getElementById("set_score2E");
        var sSerPlayer2E = document.getElementById("ser_score2E");
        var sSpiPlayer2E = document.getElementById("spi_score2E");
        var sBloPlayer2E = document.getElementById("blo_score2E");
        var sDigPlayer2E = document.getElementById("dig_score2E");
        var sRecPlayer2E = document.getElementById("rec_score2E");

        var sSetPlayer3E = document.getElementById("set_score3E");
        var sSerPlayer3E = document.getElementById("ser_score3E");
        var sSpiPlayer3E = document.getElementById("spi_score3E");
        var sBloPlayer3E = document.getElementById("blo_score3E");
        var sDigPlayer3E = document.getElementById("dig_score3E");
        var sRecPlayer3E = document.getElementById("rec_score3E");

        var sSetPlayer4E = document.getElementById("set_score4E");
        var sSerPlayer4E = document.getElementById("ser_score4E");
        var sSpiPlayer4E = document.getElementById("spi_score4E");
        var sBloPlayer4E = document.getElementById("blo_score4E");
        var sDigPlayer4E = document.getElementById("dig_score4E");
        var sRecPlayer4E = document.getElementById("rec_score4E");

        var sSetPlayer5E = document.getElementById("set_score5E");
        var sSerPlayer5E = document.getElementById("ser_score5E");
        var sSpiPlayer5E = document.getElementById("spi_score5E");
        var sBloPlayer5E = document.getElementById("blo_score5E");
        var sDigPlayer5E = document.getElementById("dig_score5E");
        var sRecPlayer5E = document.getElementById("rec_score5E");

        var sSetPlayer6E = document.getElementById("set_score6E");
        var sSerPlayer6E = document.getElementById("ser_score6E");
        var sSpiPlayer6E = document.getElementById("spi_score6E");
        var sBloPlayer6E = document.getElementById("blo_score6E");
        var sDigPlayer6E = document.getElementById("dig_score6E");
        var sRecPlayer6E = document.getElementById("rec_score6E");


        // well
        var scoreSetPlayer1 = parseInt(sSetPlayer1.textContent);
        var scoreSerPlayer1 = parseInt(sSerPlayer1.textContent);
        var scoreSpiPlayer1 = parseInt(sSpiPlayer1.textContent);
        var scoreBloPlayer1 = parseInt(sBloPlayer1.textContent);
        var scoreDigPlayer1 = parseInt(sDigPlayer1.textContent);
        var scoreRecPlayer1 = parseInt(sRecPlayer1.textContent);

        var scoreSetPlayer2 = parseInt(sSetPlayer2.textContent);
        var scoreSerPlayer2 = parseInt(sSerPlayer2.textContent);
        var scoreSpiPlayer2 = parseInt(sSpiPlayer2.textContent);
        var scoreBloPlayer2 = parseInt(sBloPlayer2.textContent);
        var scoreDigPlayer2 = parseInt(sDigPlayer2.textContent);
        var scoreRecPlayer2 = parseInt(sRecPlayer2.textContent);

        var scoreSetPlayer3 = parseInt(sSetPlayer3.textContent);
        var scoreSerPlayer3 = parseInt(sSerPlayer3.textContent);
        var scoreSpiPlayer3 = parseInt(sSpiPlayer3.textContent);
        var scoreBloPlayer3 = parseInt(sBloPlayer3.textContent);
        var scoreDigPlayer3 = parseInt(sDigPlayer3.textContent);
        var scoreRecPlayer3 = parseInt(sRecPlayer3.textContent);

        var scoreSetPlayer4 = parseInt(sSetPlayer4.textContent);
        var scoreSerPlayer4 = parseInt(sSerPlayer4.textContent);
        var scoreSpiPlayer4 = parseInt(sSpiPlayer4.textContent);
        var scoreBloPlayer4 = parseInt(sBloPlayer4.textContent);
        var scoreDigPlayer4 = parseInt(sDigPlayer4.textContent);
        var scoreRecPlayer4 = parseInt(sRecPlayer4.textContent);

        var scoreSetPlayer5 = parseInt(sSetPlayer5.textContent);
        var scoreSerPlayer5 = parseInt(sSerPlayer5.textContent);
        var scoreSpiPlayer5 = parseInt(sSpiPlayer5.textContent);
        var scoreBloPlayer5 = parseInt(sBloPlayer5.textContent);
        var scoreDigPlayer5 = parseInt(sDigPlayer5.textContent);
        var scoreRecPlayer5 = parseInt(sRecPlayer5.textContent);

        var scoreSetPlayer6 = parseInt(sSetPlayer6.textContent);
        var scoreSerPlayer6 = parseInt(sSerPlayer6.textContent);
        var scoreSpiPlayer6 = parseInt(sSpiPlayer6.textContent);
        var scoreBloPlayer6 = parseInt(sBloPlayer6.textContent);
        var scoreDigPlayer6 = parseInt(sDigPlayer6.textContent);
        var scoreRecPlayer6 = parseInt(sRecPlayer6.textContent);

        //error
        var scoreSetPlayer1E = parseInt(sSetPlayer1E.textContent);
        var scoreSerPlayer1E = parseInt(sSerPlayer1E.textContent);
        var scoreSpiPlayer1E = parseInt(sSpiPlayer1E.textContent);
        var scoreBloPlayer1E = parseInt(sBloPlayer1E.textContent);
        var scoreDigPlayer1E = parseInt(sDigPlayer1E.textContent);
        var scoreRecPlayer1E = parseInt(sRecPlayer1E.textContent);

        var scoreSetPlayer2E = parseInt(sSetPlayer2E.textContent);
        var scoreSerPlayer2E = parseInt(sSerPlayer2E.textContent);
        var scoreSpiPlayer2E = parseInt(sSpiPlayer2E.textContent);
        var scoreBloPlayer2E = parseInt(sBloPlayer2E.textContent);
        var scoreDigPlayer2E = parseInt(sDigPlayer2E.textContent);
        var scoreRecPlayer2E = parseInt(sRecPlayer2E.textContent);

        var scoreSetPlayer3E = parseInt(sSetPlayer3E.textContent);
        var scoreSerPlayer3E = parseInt(sSerPlayer3E.textContent);
        var scoreSpiPlayer3E = parseInt(sSpiPlayer3E.textContent);
        var scoreBloPlayer3E = parseInt(sBloPlayer3E.textContent);
        var scoreDigPlayer3E = parseInt(sDigPlayer3E.textContent);
        var scoreRecPlayer3E = parseInt(sRecPlayer3E.textContent);

        var scoreSetPlayer4E = parseInt(sSetPlayer4E.textContent);
        var scoreSerPlayer4E = parseInt(sSerPlayer4E.textContent);
        var scoreSpiPlayer4E = parseInt(sSpiPlayer4E.textContent);
        var scoreBloPlayer4E = parseInt(sBloPlayer4E.textContent);
        var scoreDigPlayer4E = parseInt(sDigPlayer4E.textContent);
        var scoreRecPlayer4E = parseInt(sRecPlayer4E.textContent);

        var scoreSetPlayer5E = parseInt(sSetPlayer5E.textContent);
        var scoreSerPlayer5E = parseInt(sSerPlayer5E.textContent);
        var scoreSpiPlayer5E = parseInt(sSpiPlayer5E.textContent);
        var scoreBloPlayer5E = parseInt(sBloPlayer5E.textContent);
        var scoreDigPlayer5E = parseInt(sDigPlayer5E.textContent);
        var scoreRecPlayer5E = parseInt(sRecPlayer5E.textContent);

        var scoreSetPlayer6E = parseInt(sSetPlayer6E.textContent);
        var scoreSerPlayer6E = parseInt(sSerPlayer6E.textContent);
        var scoreSpiPlayer6E = parseInt(sSpiPlayer6E.textContent);
        var scoreBloPlayer6E = parseInt(sBloPlayer6E.textContent);
        var scoreDigPlayer6E = parseInt(sDigPlayer6E.textContent);
        var scoreRecPlayer6E = parseInt(sRecPlayer6E.textContent);

        //////////////////////////////////////////////////////////// show score all ////////////////////////////////////////////////////////////////////
        showscoreall();

        function showscoreall() {
            document.getElementById("showscore").innerHTML +=
                '<div id="showscorediv"><h2 style="color: rgb(75, 75, 75); font-size: 2vw">---------- Set: ' + count + ' ----------</h2></div>' +
                '<div id="showscorediv">' +
                '<div class="scoreall"  id="row1">' +
                '<div class="scorename">' +
                '<h3>' + nameplayer1 + '</h3></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td class="well"> Well :</td>' +
                "<td>  Set:  " + scoreSetPlayer1 + "</td>" +
                "<td>  Server:  " + scoreSerPlayer1 + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer1 + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer1 + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer1 + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer1 + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td class="error"> Error :</td>' +
                "<td>  Set:  " + scoreSetPlayer1E + "</td>" +
                "<td>  Server:  " + scoreSerPlayer1E + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer1E + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer1E + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer1E + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer1E + '</td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                // player 2
                '<div class="scoreall" id="row2">' +
                '<div class="scorename">' +
                '<h3>' + nameplayer2 + '</h3></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td class="well"> Well :</td>' +
                "<td>  Set:  " + scoreSetPlayer2 + "</td>" +
                "<td>  Server:  " + scoreSerPlayer2 + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer2 + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer2 + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer2 + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer2 + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td class="error"> Error :</td>' +
                "<td>  Set:  " + scoreSetPlayer2E + "</td>" +
                "<td>  Server:  " + scoreSerPlayer2E + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer2E + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer2E + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer2E + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer2E + '</td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                // player 3
                '<div class="scoreall"  id="row1">' +
                '<div class="scorename">' +
                '<h3>' + nameplayer3 + '</h3></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td class="well"> Well :</td>' +
                "<td>  Set:  " + scoreSetPlayer3 + "</td>" +
                "<td>  Server:  " + scoreSerPlayer3 + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer3 + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer3 + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer3 + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer3 + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td class="error"> Error :</td>' +
                "<td>  Set:  " + scoreSetPlayer3E + "</td>" +
                "<td>  Server:  " + scoreSerPlayer3E + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer3E + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer3E + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer3E + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer3E + '</td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                // player 4
                '<div class="scoreall" id="row2">' +
                '<div class="scorename">' +
                '<h3>' + nameplayer4 + '</h3></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td class="well"> Well :</td>' +
                "<td>  Set:  " + scoreSetPlayer4 + "</td>" +
                "<td>  Server:  " + scoreSerPlayer4 + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer4 + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer4 + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer4 + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer4 + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td class="error"> Error :</td>' +
                "<td>  Set:  " + scoreSetPlayer4E + "</td>" +
                "<td>  Server:  " + scoreSerPlayer4E + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer4E + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer4E + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer4E + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer4E + '</td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                // player 5
                '<div class="scoreall"  id="row1">' +
                '<div class="scorename">' +
                '<h3>' + nameplayer5 + '</h3></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td class="well"> Well :</td>' +
                "<td>  Set:  " + scoreSetPlayer5 + "</td>" +
                "<td>  Server:  " + scoreSerPlayer5 + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer5 + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer5 + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer5 + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer5 + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td class="error"> Error :</td>' +
                "<td>  Set:  " + scoreSetPlayer5E + "</td>" +
                "<td>  Server:  " + scoreSerPlayer5E + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer5E + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer5E + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer5E + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer5E + '</td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                // player 6
                '<div class="scoreall"  id="row2">' +
                '<div class="scorename">' +
                '<h3>' + nameplayer6 + '</h3></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td class="well"> Well :</td>' +
                "<td>  Set:  " + scoreSetPlayer6 + "</td>" +
                "<td>  Server:  " + scoreSerPlayer6 + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer6 + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer6 + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer6 + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer6 + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td class="error"> Error :</td>' +
                "<td>  Set:  " + scoreSetPlayer6E + "</td>" +
                "<td>  Server:  " + scoreSerPlayer6E + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer6E + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer6E + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer6E + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer6E + '</td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div></br></div>';
        }
        
//////////////////////////////////////////////////////////////////////// show total score  ////////////////////////////////////////////////////////////////////////////////
        showscoretotal();

        function showscoretotal() {
            scoreSetPlayer1+=scoreSetPlayer1;
            scoreSerPlayer1+=scoreSerPlayer1;
            scoreSpiPlayer1+=scoreSpiPlayer1;
            scoreBloPlayer1+=scoreBloPlayer1;
            scoreDigPlayer1+=scoreDigPlayer1;
            scoreRecPlayer1+=scoreRecPlayer1;

            scoreSetPlayer2+=scoreSetPlayer2;
            scoreSerPlayer2+=scoreSerPlayer2;
            scoreSpiPlayer2+=scoreSpiPlayer2;
            scoreBloPlayer2+=scoreBloPlayer2;
            scoreDigPlayer2+=scoreDigPlayer2;
            scoreRecPlayer2+=scoreRecPlayer2;

            scoreSetPlayer3+=scoreSetPlayer3;
            scoreSerPlayer3+=scoreSerPlayer3;
            scoreSpiPlayer3+=scoreSpiPlayer3;
            scoreBloPlayer3+=scoreBloPlayer3;
            scoreDigPlayer3+=scoreDigPlayer3;
            scoreRecPlayer3+=scoreRecPlayer3;

            scoreSetPlayer4+=scoreSetPlayer4;
            scoreSerPlayer4+=scoreSerPlayer4;
            scoreSpiPlayer4+=scoreSpiPlayer4;
            scoreBloPlayer4+=scoreBloPlayer4;
            scoreDigPlayer4+=scoreDigPlayer4;
            scoreRecPlayer4+=scoreRecPlayer4;

            scoreSetPlayer5+=scoreSetPlayer5;
            scoreSerPlayer5+=scoreSerPlayer5;
            scoreSpiPlayer5+=scoreSpiPlayer5;
            scoreBloPlayer5+=scoreBloPlayer5;
            scoreDigPlayer5+=scoreDigPlayer5;
            scoreRecPlayer5+=scoreRecPlayer5;

            scoreSetPlayer6+=scoreSetPlayer6;
            scoreSerPlayer6+=scoreSerPlayer6;
            scoreSpiPlayer6+=scoreSpiPlayer6;
            scoreBloPlayer6+=scoreBloPlayer6;
            scoreDigPlayer6+=scoreDigPlayer6;
            scoreRecPlayer6+=scoreRecPlayer6;
            
            //// ERROR ////
            scoreSetPlayer1E+=scoreSetPlayer1E;
            scoreSerPlayer1E+=scoreSerPlayer1E;
            scoreSpiPlayer1E+=scoreSpiPlayer1E;
            scoreBloPlayer1E+=scoreBloPlayer1E;
            scoreDigPlayer1E+=scoreDigPlayer1E;
            scoreRecPlayer1E+=scoreRecPlayer1E;

            scoreSetPlayer2E+=scoreSetPlayer2E;
            scoreSerPlayer2E+=scoreSerPlayer2E;
            scoreSpiPlayer2E+=scoreSpiPlayer2E;
            scoreBloPlayer2E+=scoreBloPlayer2E;
            scoreDigPlayer2E+=scoreDigPlayer2E;
            scoreRecPlayer2E+=scoreRecPlayer2E;

            scoreSetPlayer3E+=scoreSetPlayer3E;
            scoreSerPlayer3E+=scoreSerPlayer3E;
            scoreSpiPlayer3E+=scoreSpiPlayer3E;
            scoreBloPlayer3E+=scoreBloPlayer3E;
            scoreDigPlayer3E+=scoreDigPlayer3E;
            scoreRecPlayer3E+=scoreRecPlayer3E;

            scoreSetPlayer4E+=scoreSetPlayer4E;
            scoreSerPlayer4E+=scoreSerPlayer4E;
            scoreSpiPlayer4E+=scoreSpiPlayer4E;
            scoreBloPlayer4E+=scoreBloPlayer4E;
            scoreDigPlayer4E+=scoreDigPlayer4E;
            scoreRecPlayer4E+=scoreRecPlayer4E;

            scoreSetPlayer5E+=scoreSetPlayer5E;
            scoreSerPlayer5E+=scoreSerPlayer5E;
            scoreSpiPlayer5E+=scoreSpiPlayer5E;
            scoreBloPlayer5E+=scoreBloPlayer5E;
            scoreDigPlayer5E+=scoreDigPlayer5E;
            scoreRecPlayer5E+=scoreRecPlayer5E;

            scoreSetPlayer6E+=scoreSetPlayer6E;
            scoreSerPlayer6E+=scoreSerPlayer6E;
            scoreSpiPlayer6E+=scoreSpiPlayer6E;
            scoreBloPlayer6E+=scoreBloPlayer6E;
            scoreDigPlayer6E+=scoreDigPlayer6E;
            scoreRecPlayer6E+=scoreRecPlayer6E;

            document.getElementById("scoretotal").innerHTML =
                '<div id="showscorediv"><h1>" Total: ' + count + ' Set "</h1></div>' +
                '<div id="showscorediv">' +
                '<div class="scoreall"  id="row1">' +
                '<div class="scorename">' +
                '<h3>' + nameplayer1 + '</h3></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td class="well"> Well :</td>' +
                "<td>  Set:  " + scoreSetPlayer1 + "</td>" +
                "<td>  Server:  " + scoreSerPlayer1 + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer1 + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer1 + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer1 + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer1 + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td class="error"> Error :</td>' +
                "<td>  Set:  " + scoreSetPlayer1E + "</td>" +
                "<td>  Server:  " + scoreSerPlayer1E + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer1E + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer1E + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer1E + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer1E + '</td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                // player 2
                '<div class="scoreall" id="row2">' +
                '<div class="scorename">' +
                '<h3>' + nameplayer2 + '</h3></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td class="well"> Well :</td>' +
                "<td>  Set:  " + scoreSetPlayer2 + "</td>" +
                "<td>  Server:  " + scoreSerPlayer2 + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer2 + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer2 + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer2 + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer2 + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td class="error"> Error :</td>' +
                "<td>  Set:  " + scoreSetPlayer2E + "</td>" +
                "<td>  Server:  " + scoreSerPlayer2E + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer2E + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer2E + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer2E + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer2E + '</td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                // player 3
                '<div class="scoreall"  id="row1">' +
                '<div class="scorename">' +
                '<h3>' + nameplayer3 + '</h3></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td class="well"> Well :</td>' +
                "<td>  Set:  " + scoreSetPlayer3 + "</td>" +
                "<td>  Server:  " + scoreSerPlayer3 + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer3 + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer3 + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer3 + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer3 + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td class="error"> Error :</td>' +
                "<td>  Set:  " + scoreSetPlayer3E + "</td>" +
                "<td>  Server:  " + scoreSerPlayer3E + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer3E + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer3E + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer3E + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer3E + '</td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                // player 4
                '<div class="scoreall" id="row2">' +
                '<div class="scorename">' +
                '<h3>' + nameplayer4 + '</h3></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td class="well"> Well :</td>' +
                "<td>  Set:  " + scoreSetPlayer4 + "</td>" +
                "<td>  Server:  " + scoreSerPlayer4 + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer4 + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer4 + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer4 + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer4 + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td class="error"> Error :</td>' +
                "<td>  Set:  " + scoreSetPlayer4E + "</td>" +
                "<td>  Server:  " + scoreSerPlayer4E + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer4E + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer4E + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer4E + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer4E + '</td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                // player 5
                '<div class="scoreall"  id="row1">' +
                '<div class="scorename">' +
                '<h3>' + nameplayer5 + '</h3></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td class="well"> Well :</td>' +
                "<td>  Set:  " + scoreSetPlayer5 + "</td>" +
                "<td>  Server:  " + scoreSerPlayer5 + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer5 + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer5 + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer5 + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer5 + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td class="error"> Error :</td>' +
                "<td>  Set:  " + scoreSetPlayer5E + "</td>" +
                "<td>  Server:  " + scoreSerPlayer5E + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer5E + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer5E + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer5E + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer5E + '</td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                // player 6
                '<div class="scoreall"  id="row2">' +
                '<div class="scorename">' +
                '<h3>' + nameplayer6 + '</h3></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td class="well"> Well :</td>' +
                "<td>  Set:  " + scoreSetPlayer6 + "</td>" +
                "<td>  Server:  " + scoreSerPlayer6 + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer6 + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer6 + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer6 + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer6 + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td class="error"> Error :</td>' +
                "<td>  Set:  " + scoreSetPlayer6E + "</td>" +
                "<td>  Server:  " + scoreSerPlayer6E + "</td>" +
                "<td>  Spiker:  " + scoreSpiPlayer6E + "</td>" +
                "<td>  Blocker:  " + scoreBloPlayer6E + "</td>" +
                "<td>  Digger:  " + scoreDigPlayer6E + "</td>" +
                "<td>  Receiver:  " + scoreRecPlayer6E + '</td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div></br></div>';
        }
        count++;
        ////////////////////////////////////////////////////////////////////////  show max score   ////////////////////////////////////////////////////////////////////////////////
        showmaxscore();

        function showmaxscore() {
            scorePlayer1 += (scoreSetPlayer1 + scoreSerPlayer1 + scoreSpiPlayer1 + scoreBloPlayer1 + scoreDigPlayer1 + scoreRecPlayer1);
            scorePlayer2 += (scoreSetPlayer2 + scoreSerPlayer2 + scoreSpiPlayer2 + scoreBloPlayer2 + scoreDigPlayer2 + scoreRecPlayer2);
            scorePlayer3 += (scoreSetPlayer3 + scoreSerPlayer3 + scoreSpiPlayer3 + scoreBloPlayer3 + scoreDigPlayer3 + scoreRecPlayer3);
            scorePlayer4 += (scoreSetPlayer4 + scoreSerPlayer4 + scoreSpiPlayer4 + scoreBloPlayer4 + scoreDigPlayer4 + scoreRecPlayer4);
            scorePlayer5 += (scoreSetPlayer5 + scoreSerPlayer5 + scoreSpiPlayer5 + scoreBloPlayer5 + scoreDigPlayer5 + scoreRecPlayer5);
            scorePlayer6 += (scoreSetPlayer6 + scoreSerPlayer6 + scoreSpiPlayer6 + scoreBloPlayer6 + scoreDigPlayer6 + scoreRecPlayer6);

            var namescore = [" "];
            var points = [scorePlayer1, scorePlayer2, scorePlayer3, scorePlayer4, scorePlayer5, scorePlayer6];
            points.sort(function (a, b) {
                return b - a
            });
            for (var i = 0; i < 6; i++) {
                p6(i);
                p5(i);
                p4(i);
                p3(i);
                p2(i);
                p1(i);
            }

            function p1(i) {
                if (points[i] == scorePlayer1) {
                    for (var j = 0; j < 6; j++) {
                        if (namescore[j] == nameplayer1) {
                            i++;
                            break;
                        }
                    }
                    namescore[i] = nameplayer1;
                }
            }

            function p2(i) {
                if (points[i] == scorePlayer2) {
                    for (var j = 0; j < 6; j++) {
                        if (namescore[j] == nameplayer2) {
                            i++;
                            break;
                        }
                    }
                    namescore[i] = nameplayer2;
                }
            }

            function p3(i) {
                if (points[i] == scorePlayer3) {
                    for (var j = 0; j < 6; j++) {
                        if (namescore[j] == nameplayer3) {
                            i++;
                            break;
                        }
                    }
                    namescore[i] = nameplayer3;
                }
            }

            function p4(i) {
                if (points[i] == scorePlayer4) {
                    for (var j = 0; j < 6; j++) {
                        if (namescore[j] == nameplayer4) {
                            i++;
                            break;
                        }
                    }
                    namescore[i] = nameplayer4;
                }
            }

            function p5(i) {
                if (points[i] == scorePlayer5) {
                    for (var j = 0; j < 6; j++) {
                        if (namescore[j] == nameplayer5) {
                            i++;
                            break;
                        }
                    }
                    namescore[i] = nameplayer5;
                }
            }

            function p6(i) {
                if (points[i] == scorePlayer6) {
                    for (var j = 0; j < 6; j++) {
                        if (namescore[j] == nameplayer6) {
                            i++;
                            break;
                        }
                    }
                    namescore[i] = nameplayer6;
                }
            }
            // show score all 
            document.getElementById("scoremax").innerHTML =
                '<div id="showscorediv"><h1>" Score Max "</h1>' +
                '<div class="scoreall" id="st1">' +
                '<div class="scorename">' +
                '<h4 > 1st </h4></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td><h4>" ' + namescore[0] + ' "</h4></td>' +
                '<td><h4>' + points[0] + '</h4></td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                '<div class="scoreall" id="nd2">' +
                '<div class="scorename">' +
                '<h4> 2nd </h4></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td><h4>" ' + namescore[1] + ' "</h4></td>' +
                '<td><h4>' + points[1] + '</h4></td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                '<div class="scoreall" id="rd3">' +
                '<div class="scorename">' +
                '<h4> 3rd </h4></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td><h4>" ' + namescore[2] + ' "</h4></td>' +
                '<td><h4>' + points[2] + '</h4></td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                '<div class="scoreall" id="th456">' +
                '<div class="scorename">' +
                '<h4> 4th </h4></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td><h4>" ' + namescore[3] + ' "</h4></td>' +
                '<td><h4>' + points[3] + '</h4></td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                '<div class="scoreall" id="th456">' +
                '<div class="scorename">' +
                '<h4> 5th </h4></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td><h4>" ' + namescore[4] + ' "</h4></td>' +
                '<td><h4>' + points[4] + '</h4></td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                '<div class="scoreall" id="th456">' +
                '<div class="scorename">' +
                '<h4> 6th </h4></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td><h4>" ' + namescore[5] + ' "</h4></td>' +
                '<td><h4>' + points[5] + '</h4></td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                '</div>';
        }
        ////////////////////////////////////////////////////////////////////////  show error score   ////////////////////////////////////////////////////////////////////////////////
        showerrorscore();

        function showerrorscore() {
            scorePlayer1E += (scoreSetPlayer1E + scoreSerPlayer1E + scoreSpiPlayer1E + scoreBloPlayer1E + scoreDigPlayer1E + scoreRecPlayer1E);
            scorePlayer2E += (scoreSetPlayer2E + scoreSerPlayer2E + scoreSpiPlayer2E + scoreBloPlayer2E + scoreDigPlayer2E + scoreRecPlayer2E);
            scorePlayer3E += (scoreSetPlayer3E + scoreSerPlayer3E + scoreSpiPlayer3E + scoreBloPlayer3E + scoreDigPlayer3E + scoreRecPlayer3E);
            scorePlayer4E += (scoreSetPlayer4E + scoreSerPlayer4E + scoreSpiPlayer4E + scoreBloPlayer4E + scoreDigPlayer4E + scoreRecPlayer4E);
            scorePlayer5E += (scoreSetPlayer5E + scoreSerPlayer5E + scoreSpiPlayer5E + scoreBloPlayer5E + scoreDigPlayer5E + scoreRecPlayer5E);
            scorePlayer6E += (scoreSetPlayer6E + scoreSerPlayer6E + scoreSpiPlayer6E + scoreBloPlayer6E + scoreDigPlayer6E + scoreRecPlayer6E);

            var namescoreE = [" "];
            var pointsE = [scorePlayer1E, scorePlayer2E, scorePlayer3E, scorePlayer4E, scorePlayer5E, scorePlayer6E];
            pointsE.sort(function (a, b) {
                return b - a
            });
            for (var i = 0; i < 6; i++) {
                p6E(i);
                p5E(i);
                p4E(i);
                p3E(i);
                p2E(i);
                p1E(i);
            }

            function p1E(i) {
                if (pointsE[i] == scorePlayer1E) {
                    for (var j = 0; j < 6; j++) {
                        if (namescoreE[j] == nameplayer1) {
                            i++;
                            break;
                        }
                    }
                    namescoreE[i] = nameplayer1;
                }
            }

            function p2E(i) {
                if (pointsE[i] == scorePlayer2E) {
                    for (var j = 0; j < 6; j++) {
                        if (namescoreE[j] == nameplayer2) {
                            i++;
                            break;
                        }
                    }
                    namescoreE[i] = nameplayer2;
                }
            }

            function p3E(i) {
                if (pointsE[i] == scorePlayer3E) {
                    for (var j = 0; j < 6; j++) {
                        if (namescoreE[j] == nameplayer3) {
                            i++;
                            break;
                        }
                    }
                    namescoreE[i] = nameplayer3;
                }
            }

            function p4E(i) {
                if (pointsE[i] == scorePlayer4E) {
                    for (var j = 0; j < 6; j++) {
                        if (namescoreE[j] == nameplayer4) {
                            i++;
                            break;
                        }
                    }
                    namescoreE[i] = nameplayer4;
                }
            }

            function p5E(i) {
                if (pointsE[i] == scorePlayer5E) {
                    for (var j = 0; j < 6; j++) {
                        if (namescoreE[j] == nameplayer5) {
                            i++;
                            break;
                        }
                    }
                    namescoreE[i] = nameplayer5;
                }
            }

            function p6E(i) {
                if (pointsE[i] == scorePlayer6E) {
                    for (var j = 0; j < 6; j++) {
                        if (namescoreE[j] == nameplayer6) {
                            i++;
                            break;
                        }
                    }
                    namescoreE[i] = nameplayer6;
                }
            }
            // show score all
            document.getElementById("scoreerror").innerHTML =

                '<div id="showscorediv"><h1>" Score Error "</h1>' +
                '<div class="scoreall" id="st1">' +
                '<div class="scorename">' +
                '<h4 > 1st </h4></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td><h4>" ' + namescoreE[0] + ' "</h4></td>' +
                '<td><h4>' + pointsE[0] + '</h4></td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                '<div class="scoreall" id="nd2">' +
                '<div class="scorename">' +
                '<h4> 2nd </h4></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td><h4>" ' + namescoreE[1] + ' "</h4></td>' +
                '<td><h4>' + pointsE[1] + '</h4></td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                '<div class="scoreall" id="rd3">' +
                '<div class="scorename">' +
                '<h4> 3rd </h4></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td><h4>" ' + namescoreE[2] + ' "</h4></td>' +
                '<td><h4>' + pointsE[2] + '</h4></td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                '<div class="scoreall" id="th456">' +
                '<div class="scorename">' +
                '<h4> 4th </h4></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td><h4>" ' + namescoreE[3] + ' "</h4></td>' +
                '<td><h4>' + pointsE[3] + '</h4></td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                '<div class="scoreall" id="th456">' +
                '<div class="scorename">' +
                '<h4> 5th </h4></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td><h4>" ' + namescoreE[4] + ' "</h4></td>' +
                '<td><h4>' + pointsE[4] + '</h4></td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                '<div class="scoreall" id="th456">' +
                '<div class="scorename">' +
                '<h4> 6th </h4></div>' +
                '<div class="scoretablevalue">' +
                '<table>' +
                '<tr>' +
                '<td><h4>" ' + namescoreE[5] + ' "</h4></td>' +
                '<td><h4>' + pointsE[5] + '</h4></td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                '</div>';
        }
        /////////////////////////////////////////////////////////// menu click show score //////////////////////////////////////////////////////////
        var btnShowScore = document.getElementById("divscore");
        btnShowScore.addEventListener("click", divshowscore);
        var btnShowMaxScore = document.getElementById("divmax");
        btnShowMaxScore.addEventListener("click", divshowmax);
        var btnShowErrorScore = document.getElementById("diverror");
        btnShowErrorScore.addEventListener("click", divshowerror);
        var btnShowTotalScore = document.getElementById("divtotal");
        btnShowTotalScore.addEventListener("click", divshowtotal);

        var divAllScore = document.getElementById("showscore");
        var divMaxScore = document.getElementById("scoremax");
        var divErrorScore = document.getElementById("scoreerror");
        var divTotalScore = document.getElementById("scoretotal");

        divAllScore.style.display = "block";
        divMaxScore.style.display = "none";
        divErrorScore.style.display = "none";
        divTotalScore.style.display = "none";


        function divshowscore() {
            divAllScore.style.display = "block";
            divMaxScore.style.display = "none";
            divErrorScore.style.display = "none";
            divTotalScore.style.display = "none";
        }

        function divshowmax() {
            divAllScore.style.display = "none";
            divMaxScore.style.display = "block";
            divErrorScore.style.display = "none";
            divTotalScore.style.display = "none";
        }

        function divshowerror() {
            divAllScore.style.display = "none";
            divMaxScore.style.display = "none";
            divErrorScore.style.display = "block";
            divTotalScore.style.display = "none";
        }
        function divshowtotal() {
            divAllScore.style.display = "none";
            divMaxScore.style.display = "none";
            divErrorScore.style.display = "none";
            divTotalScore.style.display = "block";
        }

        //////////////////////////////////////////////////////////////////** Reset value All *//////////////////////////////////////////////////////////////////
        //well
        sSetPlayer1.textContent = '0';
        sSerPlayer1.textContent = '0';
        sSpiPlayer1.textContent = '0';
        sBloPlayer1.textContent = '0';
        sDigPlayer1.textContent = '0';
        sRecPlayer1.textContent = '0';

        sSetPlayer2.textContent = '0';
        sSerPlayer2.textContent = '0';
        sSpiPlayer2.textContent = '0';
        sBloPlayer2.textContent = '0';
        sDigPlayer2.textContent = '0';
        sRecPlayer2.textContent = '0';

        sSetPlayer3.textContent = '0';
        sSerPlayer3.textContent = '0';
        sSpiPlayer3.textContent = '0';
        sBloPlayer3.textContent = '0';
        sDigPlayer3.textContent = '0';
        sRecPlayer3.textContent = '0';

        sSetPlayer4.textContent = '0';
        sSerPlayer4.textContent = '0';
        sSpiPlayer4.textContent = '0';
        sBloPlayer4.textContent = '0';
        sDigPlayer4.textContent = '0';
        sRecPlayer4.textContent = '0';

        sSetPlayer5.textContent = '0';
        sSerPlayer5.textContent = '0';
        sSpiPlayer5.textContent = '0';
        sBloPlayer5.textContent = '0';
        sDigPlayer5.textContent = '0';
        sRecPlayer5.textContent = '0';

        sSetPlayer6.textContent = '0';
        sSerPlayer6.textContent = '0';
        sSpiPlayer6.textContent = '0';
        sBloPlayer6.textContent = '0';
        sDigPlayer6.textContent = '0';
        sRecPlayer6.textContent = '0';

        //error
        sSetPlayer1E.textContent = '0';
        sSerPlayer1E.textContent = '0';
        sSpiPlayer1E.textContent = '0';
        sBloPlayer1E.textContent = '0';
        sDigPlayer1E.textContent = '0';
        sRecPlayer1E.textContent = '0';

        sSetPlayer2E.textContent = '0';
        sSerPlayer2E.textContent = '0';
        sSpiPlayer2E.textContent = '0';
        sBloPlayer2E.textContent = '0';
        sDigPlayer2E.textContent = '0';
        sRecPlayer2E.textContent = '0';

        sSetPlayer3E.textContent = '0';
        sSerPlayer3E.textContent = '0';
        sSpiPlayer3E.textContent = '0';
        sBloPlayer3E.textContent = '0';
        sDigPlayer3E.textContent = '0';
        sRecPlayer3E.textContent = '0';

        sSetPlayer4E.textContent = '0';
        sSerPlayer4E.textContent = '0';
        sSpiPlayer4E.textContent = '0';
        sBloPlayer4E.textContent = '0';
        sDigPlayer4E.textContent = '0';
        sRecPlayer4E.textContent = '0';

        sSetPlayer5E.textContent = '0';
        sSerPlayer5E.textContent = '0';
        sSpiPlayer5E.textContent = '0';
        sBloPlayer5E.textContent = '0';
        sDigPlayer5E.textContent = '0';
        sRecPlayer5E.textContent = '0';

        sSetPlayer6E.textContent = '0';
        sSerPlayer6E.textContent = '0';
        sSpiPlayer6E.textContent = '0';
        sBloPlayer6E.textContent = '0';
        sDigPlayer6E.textContent = '0';
        sRecPlayer6E.textContent = '0';

    }


    function function_Set() {
        //**well**
        var addScoreSetPlayer1 = document.getElementById("add_score_set_player1");
        var addScoreSetPlayer2 = document.getElementById("add_score_set_player2");
        var addScoreSetPlayer3 = document.getElementById("add_score_set_player3");
        var addScoreSetPlayer4 = document.getElementById("add_score_set_player4");
        var addScoreSetPlayer5 = document.getElementById("add_score_set_player5");
        var addScoreSetPlayer6 = document.getElementById("add_score_set_player6");

        var delScoreSetPlayer1 = document.getElementById("del_score_set_player1");
        var delScoreSetPlayer2 = document.getElementById("del_score_set_player2");
        var delScoreSetPlayer3 = document.getElementById("del_score_set_player3");
        var delScoreSetPlayer4 = document.getElementById("del_score_set_player4");
        var delScoreSetPlayer5 = document.getElementById("del_score_set_player5");
        var delScoreSetPlayer6 = document.getElementById("del_score_set_player6");

        addScoreSetPlayer1.textContent = nameplayer1;
        addScoreSetPlayer2.textContent = nameplayer2;
        addScoreSetPlayer3.textContent = nameplayer3;
        addScoreSetPlayer4.textContent = nameplayer4;
        addScoreSetPlayer5.textContent = nameplayer5;
        addScoreSetPlayer6.textContent = nameplayer6;

        addScoreSetPlayer1.addEventListener("click", funcAddPlayer1);
        addScoreSetPlayer2.addEventListener("click", funcAddPlayer2);
        addScoreSetPlayer3.addEventListener("click", funcAddPlayer3);
        addScoreSetPlayer4.addEventListener("click", funcAddPlayer4);
        addScoreSetPlayer5.addEventListener("click", funcAddPlayer5);
        addScoreSetPlayer6.addEventListener("click", funcAddPlayer6);

        delScoreSetPlayer1.addEventListener("click", funcDelPlayer1);
        delScoreSetPlayer2.addEventListener("click", funcDelPlayer2);
        delScoreSetPlayer3.addEventListener("click", funcDelPlayer3);
        delScoreSetPlayer4.addEventListener("click", funcDelPlayer4);
        delScoreSetPlayer5.addEventListener("click", funcDelPlayer5);
        delScoreSetPlayer6.addEventListener("click", funcDelPlayer6);

        // Add Score
        function funcAddPlayer1() {
            var pa = document.getElementById("set_score1");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer2() {
            var pa = document.getElementById("set_score2");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer3() {
            var pa = document.getElementById("set_score3");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer4() {
            var pa = document.getElementById("set_score4");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer5() {
            var pa = document.getElementById("set_score5");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer6() {
            var pa = document.getElementById("set_score6");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        // Del Score
        function funcDelPlayer1() {
            var pa = document.getElementById("set_score1");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer2() {
            var pa = document.getElementById("set_score2");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer3() {
            var pa = document.getElementById("set_score3");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer4() {
            var pa = document.getElementById("set_score4");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer5() {
            var pa = document.getElementById("set_score5");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer6() {
            var pa = document.getElementById("set_score6");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }


        //**error**
        var addScoreSetPlayer1E = document.getElementById("add_score_set_player1E");
        var addScoreSetPlayer2E = document.getElementById("add_score_set_player2E");
        var addScoreSetPlayer3E = document.getElementById("add_score_set_player3E");
        var addScoreSetPlayer4E = document.getElementById("add_score_set_player4E");
        var addScoreSetPlayer5E = document.getElementById("add_score_set_player5E");
        var addScoreSetPlayer6E = document.getElementById("add_score_set_player6E");

        var delScoreSetPlayer1E = document.getElementById("del_score_set_player1E");
        var delScoreSetPlayer2E = document.getElementById("del_score_set_player2E");
        var delScoreSetPlayer3E = document.getElementById("del_score_set_player3E");
        var delScoreSetPlayer4E = document.getElementById("del_score_set_player4E");
        var delScoreSetPlayer5E = document.getElementById("del_score_set_player5E");
        var delScoreSetPlayer6E = document.getElementById("del_score_set_player6E");

        addScoreSetPlayer1E.textContent = nameplayer1;
        addScoreSetPlayer2E.textContent = nameplayer2;
        addScoreSetPlayer3E.textContent = nameplayer3;
        addScoreSetPlayer4E.textContent = nameplayer4;
        addScoreSetPlayer5E.textContent = nameplayer5;
        addScoreSetPlayer6E.textContent = nameplayer6;

        addScoreSetPlayer1E.addEventListener("click", funcAddPlayer1E);
        addScoreSetPlayer2E.addEventListener("click", funcAddPlayer2E);
        addScoreSetPlayer3E.addEventListener("click", funcAddPlayer3E);
        addScoreSetPlayer4E.addEventListener("click", funcAddPlayer4E);
        addScoreSetPlayer5E.addEventListener("click", funcAddPlayer5E);
        addScoreSetPlayer6E.addEventListener("click", funcAddPlayer6E);

        delScoreSetPlayer1E.addEventListener("click", funcDelPlayer1E);
        delScoreSetPlayer2E.addEventListener("click", funcDelPlayer2E);
        delScoreSetPlayer3E.addEventListener("click", funcDelPlayer3E);
        delScoreSetPlayer4E.addEventListener("click", funcDelPlayer4E);
        delScoreSetPlayer5E.addEventListener("click", funcDelPlayer5E);
        delScoreSetPlayer6E.addEventListener("click", funcDelPlayer6E);

        // Add Score
        function funcAddPlayer1E() {
            var pa = document.getElementById("set_score1E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer2E() {
            var pa = document.getElementById("set_score2E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer3E() {
            var pa = document.getElementById("set_score3E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer4E() {
            var pa = document.getElementById("set_score4E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer5E() {
            var pa = document.getElementById("set_score5E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer6E() {
            var pa = document.getElementById("set_score6E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        // Del Score
        function funcDelPlayer1E() {
            var pa = document.getElementById("set_score1E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer2E() {
            var pa = document.getElementById("set_score2E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer3E() {
            var pa = document.getElementById("set_score3E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer4E() {
            var pa = document.getElementById("set_score4E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer5E() {
            var pa = document.getElementById("set_score5E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer6E() {
            var pa = document.getElementById("set_score6E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }


    }

    function function_Server() {

        //**WELL */
        var addScoreSerPlayer1 = document.getElementById("add_score_ser_player1");
        var addScoreSerPlayer2 = document.getElementById("add_score_ser_player2");
        var addScoreSerPlayer3 = document.getElementById("add_score_ser_player3");
        var addScoreSerPlayer4 = document.getElementById("add_score_ser_player4");
        var addScoreSerPlayer5 = document.getElementById("add_score_ser_player5");
        var addScoreSerPlayer6 = document.getElementById("add_score_ser_player6");

        var delScoreSerPlayer1 = document.getElementById("del_score_ser_player1");
        var delScoreSerPlayer2 = document.getElementById("del_score_ser_player2");
        var delScoreSerPlayer3 = document.getElementById("del_score_ser_player3");
        var delScoreSerPlayer4 = document.getElementById("del_score_ser_player4");
        var delScoreSerPlayer5 = document.getElementById("del_score_ser_player5");
        var delScoreSerPlayer6 = document.getElementById("del_score_ser_player6");

        addScoreSerPlayer1.textContent = nameplayer1;
        addScoreSerPlayer2.textContent = nameplayer2;
        addScoreSerPlayer3.textContent = nameplayer3;
        addScoreSerPlayer4.textContent = nameplayer4;
        addScoreSerPlayer5.textContent = nameplayer5;
        addScoreSerPlayer6.textContent = nameplayer6;

        addScoreSerPlayer1.addEventListener("click", funcAddPlayer1);
        addScoreSerPlayer2.addEventListener("click", funcAddPlayer2);
        addScoreSerPlayer3.addEventListener("click", funcAddPlayer3);
        addScoreSerPlayer4.addEventListener("click", funcAddPlayer4);
        addScoreSerPlayer5.addEventListener("click", funcAddPlayer5);
        addScoreSerPlayer6.addEventListener("click", funcAddPlayer6);

        delScoreSerPlayer1.addEventListener("click", funcDelPlayer1);
        delScoreSerPlayer2.addEventListener("click", funcDelPlayer2);
        delScoreSerPlayer3.addEventListener("click", funcDelPlayer3);
        delScoreSerPlayer4.addEventListener("click", funcDelPlayer4);
        delScoreSerPlayer5.addEventListener("click", funcDelPlayer5);
        delScoreSerPlayer6.addEventListener("click", funcDelPlayer6);

        // Add Score
        function funcAddPlayer1() {
            var pa = document.getElementById("ser_score1");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer2() {
            var pa = document.getElementById("ser_score2");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer3() {
            var pa = document.getElementById("ser_score3");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer4() {
            var pa = document.getElementById("ser_score4");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer5() {
            var pa = document.getElementById("ser_score5");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer6() {
            var pa = document.getElementById("ser_score6");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        // Del Score
        function funcDelPlayer1() {
            var pa = document.getElementById("ser_score1");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer2() {
            var pa = document.getElementById("ser_score2");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer3() {
            var pa = document.getElementById("ser_score3");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer4() {
            var pa = document.getElementById("ser_score4");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer5() {
            var pa = document.getElementById("ser_score5");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer6() {
            var pa = document.getElementById("ser_score6");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        //** ERROR */
        var addScoreSerPlayer1E = document.getElementById("add_score_ser_player1E");
        var addScoreSerPlayer2E = document.getElementById("add_score_ser_player2E");
        var addScoreSerPlayer3E = document.getElementById("add_score_ser_player3E");
        var addScoreSerPlayer4E = document.getElementById("add_score_ser_player4E");
        var addScoreSerPlayer5E = document.getElementById("add_score_ser_player5E");
        var addScoreSerPlayer6E = document.getElementById("add_score_ser_player6E");

        var delScoreSerPlayer1E = document.getElementById("del_score_ser_player1E");
        var delScoreSerPlayer2E = document.getElementById("del_score_ser_player2E");
        var delScoreSerPlayer3E = document.getElementById("del_score_ser_player3E");
        var delScoreSerPlayer4E = document.getElementById("del_score_ser_player4E");
        var delScoreSerPlayer5E = document.getElementById("del_score_ser_player5E");
        var delScoreSerPlayer6E = document.getElementById("del_score_ser_player6E");

        addScoreSerPlayer1E.textContent = nameplayer1;
        addScoreSerPlayer2E.textContent = nameplayer2;
        addScoreSerPlayer3E.textContent = nameplayer3;
        addScoreSerPlayer4E.textContent = nameplayer4;
        addScoreSerPlayer5E.textContent = nameplayer5;
        addScoreSerPlayer6E.textContent = nameplayer6;

        addScoreSerPlayer1E.addEventListener("click", funcAddPlayer1E);
        addScoreSerPlayer2E.addEventListener("click", funcAddPlayer2E);
        addScoreSerPlayer3E.addEventListener("click", funcAddPlayer3E);
        addScoreSerPlayer4E.addEventListener("click", funcAddPlayer4E);
        addScoreSerPlayer5E.addEventListener("click", funcAddPlayer5E);
        addScoreSerPlayer6E.addEventListener("click", funcAddPlayer6E);

        delScoreSerPlayer1E.addEventListener("click", funcDelPlayer1E);
        delScoreSerPlayer2E.addEventListener("click", funcDelPlayer2E);
        delScoreSerPlayer3E.addEventListener("click", funcDelPlayer3E);
        delScoreSerPlayer4E.addEventListener("click", funcDelPlayer4E);
        delScoreSerPlayer5E.addEventListener("click", funcDelPlayer5E);
        delScoreSerPlayer6E.addEventListener("click", funcDelPlayer6E);

        // Add Score
        function funcAddPlayer1E() {
            var pa = document.getElementById("ser_score1E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer2E() {
            var pa = document.getElementById("ser_score2E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer3E() {
            var pa = document.getElementById("ser_score3E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer4E() {
            var pa = document.getElementById("ser_score4E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer5E() {
            var pa = document.getElementById("ser_score5E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer6E() {
            var pa = document.getElementById("ser_score6E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        // Del Score
        function funcDelPlayer1E() {
            var pa = document.getElementById("ser_score1E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer2E() {
            var pa = document.getElementById("ser_score2E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer3E() {
            var pa = document.getElementById("ser_score3E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer4E() {
            var pa = document.getElementById("ser_score4E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer5E() {
            var pa = document.getElementById("ser_score5E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer6E() {
            var pa = document.getElementById("ser_score6E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }
    }

    function function_Spiker() {
        //** WELL */
        var addScoreSpiPlayer1 = document.getElementById("add_score_spi_player1");
        var addScoreSpiPlayer2 = document.getElementById("add_score_spi_player2");
        var addScoreSpiPlayer3 = document.getElementById("add_score_spi_player3");
        var addScoreSpiPlayer4 = document.getElementById("add_score_spi_player4");
        var addScoreSpiPlayer5 = document.getElementById("add_score_spi_player5");
        var addScoreSpiPlayer6 = document.getElementById("add_score_spi_player6");

        var delScoreSpiPlayer1 = document.getElementById("del_score_spi_player1");
        var delScoreSpiPlayer2 = document.getElementById("del_score_spi_player2");
        var delScoreSpiPlayer3 = document.getElementById("del_score_spi_player3");
        var delScoreSpiPlayer4 = document.getElementById("del_score_spi_player4");
        var delScoreSpiPlayer5 = document.getElementById("del_score_spi_player5");
        var delScoreSpiPlayer6 = document.getElementById("del_score_spi_player6");

        addScoreSpiPlayer1.textContent = nameplayer1;
        addScoreSpiPlayer2.textContent = nameplayer2;
        addScoreSpiPlayer3.textContent = nameplayer3;
        addScoreSpiPlayer4.textContent = nameplayer4;
        addScoreSpiPlayer5.textContent = nameplayer5;
        addScoreSpiPlayer6.textContent = nameplayer6;

        addScoreSpiPlayer1.addEventListener("click", funcAddPlayer1);
        addScoreSpiPlayer2.addEventListener("click", funcAddPlayer2);
        addScoreSpiPlayer3.addEventListener("click", funcAddPlayer3);
        addScoreSpiPlayer4.addEventListener("click", funcAddPlayer4);
        addScoreSpiPlayer5.addEventListener("click", funcAddPlayer5);
        addScoreSpiPlayer6.addEventListener("click", funcAddPlayer6);

        delScoreSpiPlayer1.addEventListener("click", funcDelPlayer1);
        delScoreSpiPlayer2.addEventListener("click", funcDelPlayer2);
        delScoreSpiPlayer3.addEventListener("click", funcDelPlayer3);
        delScoreSpiPlayer4.addEventListener("click", funcDelPlayer4);
        delScoreSpiPlayer5.addEventListener("click", funcDelPlayer5);
        delScoreSpiPlayer6.addEventListener("click", funcDelPlayer6);

        // Add Score
        function funcAddPlayer1() {
            var pa = document.getElementById("spi_score1");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer2() {
            var pa = document.getElementById("spi_score2");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer3() {
            var pa = document.getElementById("spi_score3");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer4() {
            var pa = document.getElementById("spi_score4");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer5() {
            var pa = document.getElementById("spi_score5");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer6() {
            var pa = document.getElementById("spi_score6");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        // Del Score
        function funcDelPlayer1() {
            var pa = document.getElementById("spi_score1");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer2() {
            var pa = document.getElementById("spi_score2");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer3() {
            var pa = document.getElementById("spi_score3");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer4() {
            var pa = document.getElementById("spi_score4");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer5() {
            var pa = document.getElementById("spi_score5");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer6() {
            var pa = document.getElementById("spi_score6");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }
        //** ERROR */
        var addScoreSpiPlayer1E = document.getElementById("add_score_spi_player1E");
        var addScoreSpiPlayer2E = document.getElementById("add_score_spi_player2E");
        var addScoreSpiPlayer3E = document.getElementById("add_score_spi_player3E");
        var addScoreSpiPlayer4E = document.getElementById("add_score_spi_player4E");
        var addScoreSpiPlayer5E = document.getElementById("add_score_spi_player5E");
        var addScoreSpiPlayer6E = document.getElementById("add_score_spi_player6E");

        var delScoreSpiPlayer1E = document.getElementById("del_score_spi_player1E");
        var delScoreSpiPlayer2E = document.getElementById("del_score_spi_player2E");
        var delScoreSpiPlayer3E = document.getElementById("del_score_spi_player3E");
        var delScoreSpiPlayer4E = document.getElementById("del_score_spi_player4E");
        var delScoreSpiPlayer5E = document.getElementById("del_score_spi_player5E");
        var delScoreSpiPlayer6E = document.getElementById("del_score_spi_player6E");

        addScoreSpiPlayer1E.textContent = nameplayer1;
        addScoreSpiPlayer2E.textContent = nameplayer2;
        addScoreSpiPlayer3E.textContent = nameplayer3;
        addScoreSpiPlayer4E.textContent = nameplayer4;
        addScoreSpiPlayer5E.textContent = nameplayer5;
        addScoreSpiPlayer6E.textContent = nameplayer6;

        addScoreSpiPlayer1E.addEventListener("click", funcAddPlayer1E);
        addScoreSpiPlayer2E.addEventListener("click", funcAddPlayer2E);
        addScoreSpiPlayer3E.addEventListener("click", funcAddPlayer3E);
        addScoreSpiPlayer4E.addEventListener("click", funcAddPlayer4E);
        addScoreSpiPlayer5E.addEventListener("click", funcAddPlayer5E);
        addScoreSpiPlayer6E.addEventListener("click", funcAddPlayer6E);

        delScoreSpiPlayer1E.addEventListener("click", funcDelPlayer1E);
        delScoreSpiPlayer2E.addEventListener("click", funcDelPlayer2E);
        delScoreSpiPlayer3E.addEventListener("click", funcDelPlayer3E);
        delScoreSpiPlayer4E.addEventListener("click", funcDelPlayer4E);
        delScoreSpiPlayer5E.addEventListener("click", funcDelPlayer5E);
        delScoreSpiPlayer6E.addEventListener("click", funcDelPlayer6E);

        // Add Score
        function funcAddPlayer1E() {
            var pa = document.getElementById("spi_score1E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer2E() {
            var pa = document.getElementById("spi_score2E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer3E() {
            var pa = document.getElementById("spi_score3E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer4E() {
            var pa = document.getElementById("spi_score4E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer5E() {
            var pa = document.getElementById("spi_score5E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer6E() {
            var pa = document.getElementById("spi_score6E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        // Del Score
        function funcDelPlayer1E() {
            var pa = document.getElementById("spi_score1E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer2E() {
            var pa = document.getElementById("spi_score2E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer3E() {
            var pa = document.getElementById("spi_score3E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer4E() {
            var pa = document.getElementById("spi_score4E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer5E() {
            var pa = document.getElementById("spi_score5E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer6E() {
            var pa = document.getElementById("spi_score6E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }
    }

    function function_Blocker() {
        //** WELL */
        var addScoreBloPlayer1 = document.getElementById("add_score_blo_player1");
        var addScoreBloPlayer2 = document.getElementById("add_score_blo_player2");
        var addScoreBloPlayer3 = document.getElementById("add_score_blo_player3");
        var addScoreBloPlayer4 = document.getElementById("add_score_blo_player4");
        var addScoreBloPlayer5 = document.getElementById("add_score_blo_player5");
        var addScoreBloPlayer6 = document.getElementById("add_score_blo_player6");

        var delScoreBloPlayer1 = document.getElementById("del_score_blo_player1");
        var delScoreBloPlayer2 = document.getElementById("del_score_blo_player2");
        var delScoreBloPlayer3 = document.getElementById("del_score_blo_player3");
        var delScoreBloPlayer4 = document.getElementById("del_score_blo_player4");
        var delScoreBloPlayer5 = document.getElementById("del_score_blo_player5");
        var delScoreBloPlayer6 = document.getElementById("del_score_blo_player6");

        addScoreBloPlayer1.textContent = nameplayer1;
        addScoreBloPlayer2.textContent = nameplayer2;
        addScoreBloPlayer3.textContent = nameplayer3;
        addScoreBloPlayer4.textContent = nameplayer4;
        addScoreBloPlayer5.textContent = nameplayer5;
        addScoreBloPlayer6.textContent = nameplayer6;

        addScoreBloPlayer1.addEventListener("click", funcAddPlayer1);
        addScoreBloPlayer2.addEventListener("click", funcAddPlayer2);
        addScoreBloPlayer3.addEventListener("click", funcAddPlayer3);
        addScoreBloPlayer4.addEventListener("click", funcAddPlayer4);
        addScoreBloPlayer5.addEventListener("click", funcAddPlayer5);
        addScoreBloPlayer6.addEventListener("click", funcAddPlayer6);

        delScoreBloPlayer1.addEventListener("click", funcDelPlayer1);
        delScoreBloPlayer2.addEventListener("click", funcDelPlayer2);
        delScoreBloPlayer3.addEventListener("click", funcDelPlayer3);
        delScoreBloPlayer4.addEventListener("click", funcDelPlayer4);
        delScoreBloPlayer5.addEventListener("click", funcDelPlayer5);
        delScoreBloPlayer6.addEventListener("click", funcDelPlayer6);

        // Add Score
        function funcAddPlayer1() {
            var pa = document.getElementById("blo_score1");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer2() {
            var pa = document.getElementById("blo_score2");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer3() {
            var pa = document.getElementById("blo_score3");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer4() {
            var pa = document.getElementById("blo_score4");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer5() {
            var pa = document.getElementById("blo_score5");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer6() {
            var pa = document.getElementById("blo_score6");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        // Del Score
        function funcDelPlayer1() {
            var pa = document.getElementById("blo_score1");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer2() {
            var pa = document.getElementById("blo_score2");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer3() {
            var pa = document.getElementById("spi_score3");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer4() {
            var pa = document.getElementById("blo_score4");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer5() {
            var pa = document.getElementById("blo_score5");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer6() {
            var pa = document.getElementById("blo_score6");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }
        //** ERROR */
        var addScoreBloPlayer1E = document.getElementById("add_score_blo_player1E");
        var addScoreBloPlayer2E = document.getElementById("add_score_blo_player2E");
        var addScoreBloPlayer3E = document.getElementById("add_score_blo_player3E");
        var addScoreBloPlayer4E = document.getElementById("add_score_blo_player4E");
        var addScoreBloPlayer5E = document.getElementById("add_score_blo_player5E");
        var addScoreBloPlayer6E = document.getElementById("add_score_blo_player6E");

        var delScoreBloPlayer1E = document.getElementById("del_score_blo_player1E");
        var delScoreBloPlayer2E = document.getElementById("del_score_blo_player2E");
        var delScoreBloPlayer3E = document.getElementById("del_score_blo_player3E");
        var delScoreBloPlayer4E = document.getElementById("del_score_blo_player4E");
        var delScoreBloPlayer5E = document.getElementById("del_score_blo_player5E");
        var delScoreBloPlayer6E = document.getElementById("del_score_blo_player6E");

        addScoreBloPlayer1E.textContent = nameplayer1;
        addScoreBloPlayer2E.textContent = nameplayer2;
        addScoreBloPlayer3E.textContent = nameplayer3;
        addScoreBloPlayer4E.textContent = nameplayer4;
        addScoreBloPlayer5E.textContent = nameplayer5;
        addScoreBloPlayer6E.textContent = nameplayer6;

        addScoreBloPlayer1E.addEventListener("click", funcAddPlayer1E);
        addScoreBloPlayer2E.addEventListener("click", funcAddPlayer2E);
        addScoreBloPlayer3E.addEventListener("click", funcAddPlayer3E);
        addScoreBloPlayer4E.addEventListener("click", funcAddPlayer4E);
        addScoreBloPlayer5E.addEventListener("click", funcAddPlayer5E);
        addScoreBloPlayer6E.addEventListener("click", funcAddPlayer6E);

        delScoreBloPlayer1E.addEventListener("click", funcDelPlayer1E);
        delScoreBloPlayer2E.addEventListener("click", funcDelPlayer2E);
        delScoreBloPlayer3E.addEventListener("click", funcDelPlayer3E);
        delScoreBloPlayer4E.addEventListener("click", funcDelPlayer4E);
        delScoreBloPlayer5E.addEventListener("click", funcDelPlayer5E);
        delScoreBloPlayer6E.addEventListener("click", funcDelPlayer6E);

        // Add Score
        function funcAddPlayer1E() {
            var pa = document.getElementById("blo_score1E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer2E() {
            var pa = document.getElementById("blo_score2E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer3E() {
            var pa = document.getElementById("blo_score3E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer4E() {
            var pa = document.getElementById("blo_score4E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer5E() {
            var pa = document.getElementById("blo_score5E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer6E() {
            var pa = document.getElementById("blo_score6E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        // Del Score
        function funcDelPlayer1E() {
            var pa = document.getElementById("blo_score1E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer2E() {
            var pa = document.getElementById("blo_score2E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer3E() {
            var pa = document.getElementById("spi_score3E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer4E() {
            var pa = document.getElementById("blo_score4E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer5E() {
            var pa = document.getElementById("blo_score5E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer6E() {
            var pa = document.getElementById("blo_score6E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }
    }

    function function_Digger() {
        //** WELL */
        var addScoreDigPlayer1 = document.getElementById("add_score_dig_player1");
        var addScoreDigPlayer2 = document.getElementById("add_score_dig_player2");
        var addScoreDigPlayer3 = document.getElementById("add_score_dig_player3");
        var addScoreDigPlayer4 = document.getElementById("add_score_dig_player4");
        var addScoreDigPlayer5 = document.getElementById("add_score_dig_player5");
        var addScoreDigPlayer6 = document.getElementById("add_score_dig_player6");

        var delScoreDigPlayer1 = document.getElementById("del_score_dig_player1");
        var delScoreDigPlayer2 = document.getElementById("del_score_dig_player2");
        var delScoreDigPlayer3 = document.getElementById("del_score_dig_player3");
        var delScoreDigPlayer4 = document.getElementById("del_score_dig_player4");
        var delScoreDigPlayer5 = document.getElementById("del_score_dig_player5");
        var delScoreDigPlayer6 = document.getElementById("del_score_dig_player6");

        addScoreDigPlayer1.textContent = nameplayer1;
        addScoreDigPlayer2.textContent = nameplayer2;
        addScoreDigPlayer3.textContent = nameplayer3;
        addScoreDigPlayer4.textContent = nameplayer4;
        addScoreDigPlayer5.textContent = nameplayer5;
        addScoreDigPlayer6.textContent = nameplayer6;

        addScoreDigPlayer1.addEventListener("click", funcAddPlayer1);
        addScoreDigPlayer2.addEventListener("click", funcAddPlayer2);
        addScoreDigPlayer3.addEventListener("click", funcAddPlayer3);
        addScoreDigPlayer4.addEventListener("click", funcAddPlayer4);
        addScoreDigPlayer5.addEventListener("click", funcAddPlayer5);
        addScoreDigPlayer6.addEventListener("click", funcAddPlayer6);

        delScoreDigPlayer1.addEventListener("click", funcDelPlayer1);
        delScoreDigPlayer2.addEventListener("click", funcDelPlayer2);
        delScoreDigPlayer3.addEventListener("click", funcDelPlayer3);
        delScoreDigPlayer4.addEventListener("click", funcDelPlayer4);
        delScoreDigPlayer5.addEventListener("click", funcDelPlayer5);
        delScoreDigPlayer6.addEventListener("click", funcDelPlayer6);

        // Add Score
        function funcAddPlayer1() {
            var pa = document.getElementById("dig_score1");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer2() {
            var pa = document.getElementById("dig_score2");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer3() {
            var pa = document.getElementById("dig_score3");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer4() {
            var pa = document.getElementById("dig_score4");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer5() {
            var pa = document.getElementById("dig_score5");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer6() {
            var pa = document.getElementById("dig_score6");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        // Del Score
        function funcDelPlayer1() {
            var pa = document.getElementById("dig_score1");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer2() {
            var pa = document.getElementById("dig_score2");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer3() {
            var pa = document.getElementById("dig_score3");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer4() {
            var pa = document.getElementById("dig_score4");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer5() {
            var pa = document.getElementById("dig_score5");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer6() {
            var pa = document.getElementById("dig_score6");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        //** ERROR */

        var addScoreDigPlayer1E = document.getElementById("add_score_dig_player1E");
        var addScoreDigPlayer2E = document.getElementById("add_score_dig_player2E");
        var addScoreDigPlayer3E = document.getElementById("add_score_dig_player3E");
        var addScoreDigPlayer4E = document.getElementById("add_score_dig_player4E");
        var addScoreDigPlayer5E = document.getElementById("add_score_dig_player5E");
        var addScoreDigPlayer6E = document.getElementById("add_score_dig_player6E");

        var delScoreDigPlayer1E = document.getElementById("del_score_dig_player1E");
        var delScoreDigPlayer2E = document.getElementById("del_score_dig_player2E");
        var delScoreDigPlayer3E = document.getElementById("del_score_dig_player3E");
        var delScoreDigPlayer4E = document.getElementById("del_score_dig_player4E");
        var delScoreDigPlayer5E = document.getElementById("del_score_dig_player5E");
        var delScoreDigPlayer6E = document.getElementById("del_score_dig_player6E");

        addScoreDigPlayer1E.textContent = nameplayer1;
        addScoreDigPlayer2E.textContent = nameplayer2;
        addScoreDigPlayer3E.textContent = nameplayer3;
        addScoreDigPlayer4E.textContent = nameplayer4;
        addScoreDigPlayer5E.textContent = nameplayer5;
        addScoreDigPlayer6E.textContent = nameplayer6;

        addScoreDigPlayer1E.addEventListener("click", funcAddPlayer1E);
        addScoreDigPlayer2E.addEventListener("click", funcAddPlayer2E);
        addScoreDigPlayer3E.addEventListener("click", funcAddPlayer3E);
        addScoreDigPlayer4E.addEventListener("click", funcAddPlayer4E);
        addScoreDigPlayer5E.addEventListener("click", funcAddPlayer5E);
        addScoreDigPlayer6E.addEventListener("click", funcAddPlayer6E);

        delScoreDigPlayer1E.addEventListener("click", funcDelPlayer1E);
        delScoreDigPlayer2E.addEventListener("click", funcDelPlayer2E);
        delScoreDigPlayer3E.addEventListener("click", funcDelPlayer3E);
        delScoreDigPlayer4E.addEventListener("click", funcDelPlayer4E);
        delScoreDigPlayer5E.addEventListener("click", funcDelPlayer5E);
        delScoreDigPlayer6E.addEventListener("click", funcDelPlayer6E);

        // Add Score
        function funcAddPlayer1E() {
            var pa = document.getElementById("dig_score1E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer2E() {
            var pa = document.getElementById("dig_score2E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer3E() {
            var pa = document.getElementById("dig_score3E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer4E() {
            var pa = document.getElementById("dig_score4E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer5E() {
            var pa = document.getElementById("dig_score5E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer6E() {
            var pa = document.getElementById("dig_score6E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        // Del Score
        function funcDelPlayer1E() {
            var pa = document.getElementById("dig_score1E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer2E() {
            var pa = document.getElementById("dig_score2E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer3E() {
            var pa = document.getElementById("dig_score3E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer4E() {
            var pa = document.getElementById("dig_score4E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer5E() {
            var pa = document.getElementById("dig_score5E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer6E() {
            var pa = document.getElementById("dig_score6E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }
    }

    function function_Receiver() {
        //** WELL */
        var addScoreRecPlayer1 = document.getElementById("add_score_rec_player1");
        var addScoreRecPlayer2 = document.getElementById("add_score_rec_player2");
        var addScoreRecPlayer3 = document.getElementById("add_score_rec_player3");
        var addScoreRecPlayer4 = document.getElementById("add_score_rec_player4");
        var addScoreRecPlayer5 = document.getElementById("add_score_rec_player5");
        var addScoreRecPlayer6 = document.getElementById("add_score_rec_player6");

        var delScoreRecPlayer1 = document.getElementById("del_score_rec_player1");
        var delScoreRecPlayer2 = document.getElementById("del_score_rec_player2");
        var delScoreRecPlayer3 = document.getElementById("del_score_rec_player3");
        var delScoreRecPlayer4 = document.getElementById("del_score_rec_player4");
        var delScoreRecPlayer5 = document.getElementById("del_score_rec_player5");
        var delScoreRecPlayer6 = document.getElementById("del_score_rec_player6");

        addScoreRecPlayer1.textContent = nameplayer1;
        addScoreRecPlayer2.textContent = nameplayer2;
        addScoreRecPlayer3.textContent = nameplayer3;
        addScoreRecPlayer4.textContent = nameplayer4;
        addScoreRecPlayer5.textContent = nameplayer5;
        addScoreRecPlayer6.textContent = nameplayer6;

        addScoreRecPlayer1.addEventListener("click", funcAddPlayer1);
        addScoreRecPlayer2.addEventListener("click", funcAddPlayer2);
        addScoreRecPlayer3.addEventListener("click", funcAddPlayer3);
        addScoreRecPlayer4.addEventListener("click", funcAddPlayer4);
        addScoreRecPlayer5.addEventListener("click", funcAddPlayer5);
        addScoreRecPlayer6.addEventListener("click", funcAddPlayer6);

        delScoreRecPlayer1.addEventListener("click", funcDelPlayer1);
        delScoreRecPlayer2.addEventListener("click", funcDelPlayer2);
        delScoreRecPlayer3.addEventListener("click", funcDelPlayer3);
        delScoreRecPlayer4.addEventListener("click", funcDelPlayer4);
        delScoreRecPlayer5.addEventListener("click", funcDelPlayer5);
        delScoreRecPlayer6.addEventListener("click", funcDelPlayer6);

        // Add Score
        function funcAddPlayer1() {
            var pa = document.getElementById("rec_score1");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer2() {
            var pa = document.getElementById("rec_score2");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer3() {
            var pa = document.getElementById("rec_score3");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer4() {
            var pa = document.getElementById("rec_score4");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer5() {
            var pa = document.getElementById("rec_score5");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer6() {
            var pa = document.getElementById("rec_score6");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        // Del Score
        function funcDelPlayer1() {
            var pa = document.getElementById("rec_score1");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer2() {
            var pa = document.getElementById("rec_score2");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer3() {
            var pa = document.getElementById("rec_score3");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer4() {
            var pa = document.getElementById("rec_score4");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer5() {
            var pa = document.getElementById("rec_score5");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer6() {
            var pa = document.getElementById("rec_score6");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        //** ERROR */
        var addScoreRecPlayer1E = document.getElementById("add_score_rec_player1E");
        var addScoreRecPlayer2E = document.getElementById("add_score_rec_player2E");
        var addScoreRecPlayer3E = document.getElementById("add_score_rec_player3E");
        var addScoreRecPlayer4E = document.getElementById("add_score_rec_player4E");
        var addScoreRecPlayer5E = document.getElementById("add_score_rec_player5E");
        var addScoreRecPlayer6E = document.getElementById("add_score_rec_player6E");

        var delScoreRecPlayer1E = document.getElementById("del_score_rec_player1E");
        var delScoreRecPlayer2E = document.getElementById("del_score_rec_player2E");
        var delScoreRecPlayer3E = document.getElementById("del_score_rec_player3E");
        var delScoreRecPlayer4E = document.getElementById("del_score_rec_player4E");
        var delScoreRecPlayer5E = document.getElementById("del_score_rec_player5E");
        var delScoreRecPlayer6E = document.getElementById("del_score_rec_player6E");

        addScoreRecPlayer1E.textContent = nameplayer1;
        addScoreRecPlayer2E.textContent = nameplayer2;
        addScoreRecPlayer3E.textContent = nameplayer3;
        addScoreRecPlayer4E.textContent = nameplayer4;
        addScoreRecPlayer5E.textContent = nameplayer5;
        addScoreRecPlayer6E.textContent = nameplayer6;

        addScoreRecPlayer1E.addEventListener("click", funcAddPlayer1E);
        addScoreRecPlayer2E.addEventListener("click", funcAddPlayer2E);
        addScoreRecPlayer3E.addEventListener("click", funcAddPlayer3E);
        addScoreRecPlayer4E.addEventListener("click", funcAddPlayer4E);
        addScoreRecPlayer5E.addEventListener("click", funcAddPlayer5E);
        addScoreRecPlayer6E.addEventListener("click", funcAddPlayer6E);

        delScoreRecPlayer1E.addEventListener("click", funcDelPlayer1E);
        delScoreRecPlayer2E.addEventListener("click", funcDelPlayer2E);
        delScoreRecPlayer3E.addEventListener("click", funcDelPlayer3E);
        delScoreRecPlayer4E.addEventListener("click", funcDelPlayer4E);
        delScoreRecPlayer5E.addEventListener("click", funcDelPlayer5E);
        delScoreRecPlayer6E.addEventListener("click", funcDelPlayer6E);

        // Add Score
        function funcAddPlayer1E() {
            var pa = document.getElementById("rec_score1E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer2E() {
            var pa = document.getElementById("rec_score2E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer3E() {
            var pa = document.getElementById("rec_score3E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer4E() {
            var pa = document.getElementById("rec_score4E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer5E() {
            var pa = document.getElementById("rec_score5E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        function funcAddPlayer6E() {
            var pa = document.getElementById("rec_score6E");
            var score = parseInt(pa.textContent) + 1;
            pa.textContent = score;
        }

        // Del Score
        function funcDelPlayer1E() {
            var pa = document.getElementById("rec_score1E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer2E() {
            var pa = document.getElementById("rec_score2E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer3E() {
            var pa = document.getElementById("rec_score3E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer4E() {
            var pa = document.getElementById("rec_score4E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer5E() {
            var pa = document.getElementById("rec_score5E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }

        function funcDelPlayer6E() {
            var pa = document.getElementById("rec_score6E");
            var score = parseInt(pa.textContent) - 1;
            if (score < 0) {
                score = 0
            }
            pa.textContent = score;
        }
    }
}