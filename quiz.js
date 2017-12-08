var inputTeamName1 = document.getElementById("input-team-name-1"),
    inputTeamName2 = document.getElementById("input-team-name-2"),
    uiTeam1 = document.getElementById("ui-team1"),
    uiTeam2 = document.getElementById("ui-team2"),
    btnSetTeam1 = document.getElementById("btn-team-name-1"),
    btnSetTeam2 = document.getElementById("btn-team-name-2"),
    teams = document.getElementById("teams"),
    lblName1 = document.getElementById("teamName1"),
    lblName2 = document.getElementById("teamName2"),
    lblScore1 = document.getElementById("teamScore1"),
    lblScore2 = document.getElementById("teamScore2"), 
    questions = [],
    teams = [
        { id: 1, name: "", score: 0},
        { id: 2, name: "", score: 0}
    ],
    board = document.getElementById("quiz-board")
    ;

btnSetTeam1.addEventListener("click", function(){
    uiTeam1.style.display = "none";
    document.getElementById("display-team1").style.display = "block";
    teams[0].name = inputTeamName1.value;
    lblName1.innerText = teams[0].name;
    lblScore1.innerText = teams[0].score;  
    creatBoard();
});

btnSetTeam2.addEventListener("click", function(){
    uiTeam2.style.display = "none";
    document.getElementById("display-team2").style.display = "block";
    teams[1].name = inputTeamName2.value;
    lblName2.innerText = teams[1].name; 
    lblScore2.innerText = teams[1].score;
});

questions.push({ content: "What is a function?", points: 5});
questions.push({ content: "What is a method?", points: 5});
questions.push({ content: "What are the 3 or 4 pillars of OOP? (5 pts each)", points: 5});
questions.push({ content: "Name the three types of programming styles we discussed. (5 pts each)", points: 5});
questions.push({ content: "What is the “gorilla and banana problem”?", points: 5});
questions.push({ content: "Describe Inheritance.", points: 5});
questions.push({ content: "Describe polymorphism.", points: 5});
questions.push({ content: "Name three HTML 5 elements used to semantically organize a web page.", points: 5});
questions.push({ content: "Describe one reason how using HTML 5 sections could be beneficial for some of your users.", points: 5});
questions.push({ content: "What’s the difference between relative and absolute links?", points: 5});
questions.push({ content: "Describe the difference between in-line and block elements.", points: 5});
questions.push({ content: "What does float do?", points: 5});
questions.push({ content: "What is one pain point of working with floats?", points: 5});
questions.push({ content: "If you have a div with class of “my-div”, what would the CSS look like to tell that div to use flexbox for its contents?", points: 5});
questions.push({ content: "What are some advantages of using a PaaS (Platform as a Service) offering like Azure App Services?", points: 5});
questions.push({ content: "Describe what media queries are and why we use them.", points: 5});

function creatBoard(){
    questions.forEach(element => {
        var colDiv = document.createElement("div"),
        boxDiv = document.createElement("div");
         
        colDiv.classList.add("col-3");
        colDiv.classList.add("px-2");
        colDiv.classList.add("py-2");
        boxDiv.classList.add("question-box");
        colDiv.appendChild(boxDiv);
        boxDiv.innerText = element.points;
        });
}