var btnPlay = document.getElementById("btn-play"),
    output = document.getElementById("output"),
    num = 1;

btnPlay.addEventListener("click", function(){
    if(num <= 100){
        setInterval(counter, 500);
    } else {
        num = 1;
    }
});

function counter(){
    if(num <= 100){
        if(num % 3 == 0 && num % 5 == 0){
            output.innerHTML = "<h1 class='ex'>FIZZBUZZ EXTREME!</h1>";
        } else {
            if(num % 3 == 0){
                output.innerHTML = "<h3>FIZZ!</h3>";
            } else if (num % 5 == 0) {
                output.innerHTML = "<h3>BUZZ!</h3>";
            } else {
                output.innerHTML = "<p>" + num + "</p>";
            }
        }
    } else {
        clearInterval();
        output.innerHTML = "<p>GAME OVER</p>";
    }
    num++;
}