var inputTeamName1 = document.getElementById("input-team-name-1"),
    inputTeamName2 = document.getElementById("input-team-name-2"),
    uiTeam1 = document.getElementById("ui-team1"),
    uiTeam2 = document.getElementById("ui-team2"),
    btnSetTeam1 = document.getElementById("btn-team-name-1"),
    btnSetTeam2 = document.getElementById("btn-team-name-2"),
    team1 = "",
    team2 = "";

btnSetTeam1.addEventListener("click", function(){
    uiTeam1.style.display = "none";
    team1 = inputTeamName1.value;
});

btnSetTeam2.addEventListener("click", function(){
    uiTeam2.style.display = "none";
    team2 = inputTeamName2.value;
});