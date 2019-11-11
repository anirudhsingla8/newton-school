let start = false;
let flag = 0;
let count = 0;
let pause;
let current_score;
var high_score = 0;
let run;
let id;
let previous;
let no_of_click = 0;


function reset_counter(){
    var a = document.getElementById("timer");
    a.innerText = 0;
    count=0;
}

function startTimer(){
    if(pause == undefined){
        pause = setInterval(increment,1000);
    }
}
function stop_timer() {
    clearInterval(pause);
    pause = undefined;
}
function pause_game() {
    stop_timer();
    start = false;
    document.getElementById("start_game").disabled=false;
    clearInterval(run);
    document.getElementById("1").innerText="";
    document.getElementById("2").innerText="";
    document.getElementById("3").innerText="";
    document.getElementById("4").innerText="";
    document.getElementById("5").innerText="";
    document.getElementById("6").innerText="";
    document.getElementById("7").innerText="";
    document.getElementById("8").innerText="";
    document.getElementById("9").innerText="";
    document.getElementById("1").setAttribute("checked","false");
    document.getElementById("2").setAttribute("checked","false");
    document.getElementById("3").setAttribute("checked","false");
    document.getElementById("4").setAttribute("checked","false");
    document.getElementById("5").setAttribute("checked","false");
    document.getElementById("6").setAttribute("checked","false");
    document.getElementById("7").setAttribute("checked","false");
    document.getElementById("8").setAttribute("checked","false");
    document.getElementById("9").setAttribute("checked","false");
}

function increment() {
    count++;
    var a = document.getElementById("timer");
    a.innerText = count;
}

function startGame() {
    startTimer();
    start = true;
    document.getElementById("start_game").disabled = true;
    var person1 = prompt("Please enter name for first Player");
    var person2 = prompt("Please enter name for second Player");
    document.getElementById("first-name").innerText = person1;
    document.getElementById("second-name").innerText = person2;
}

function win(){
    let a1 = document.getElementById("1").innerHTML;
    let a2 = document.getElementById("2").innerHTML;
    let a3 = document.getElementById("3").innerHTML;
    let a4 = document.getElementById("4").innerHTML;
    let a5 = document.getElementById("5").innerHTML;
    let a6 = document.getElementById("6").innerHTML;
    let a7 = document.getElementById("7").innerHTML;
    let a8 = document.getElementById("8").innerHTML;
    let a9 = document.getElementById("9").innerHTML;
    console.log("inside win condition function");
    if((a1=="X" && a2=="X" && a3=='X') || (a4=="X" && a5=="X" && a6=='X') || (a7=="X" && a8=="X" && a9=='X') || (a1=="X" && a4=="X" && a7=='X') || (a2=="X" && a5=="X" && a8=='X') || (a3=="X" && a6=="X" && a9=='X') || (a1=="X" && a5=="X" && a9=='X') || (a3=="X" && a5=="X" && a7=='X')){
        console.log("inside if block X");
        alert("first player "+document.getElementById("first-name").innerHTML+' wins the game');
        pause_game();
    }
    else if((a1=="O" && a2=="O" && a3=='O') || (a4=="O" && a5=="O" && a6=='O') || (a7=="O" && a8=="O" && a9=='O') || (a1=="O" && a4=="O" && a7=='O') || (a2=="O" && a5=="O" && a8=='O') || (a3=="O" && a6=="O" && a9=='O') || (a1=="O" && a5=="O" && a9=='O') || (a3=="O" && a5=="O" && a7=='O')){
        alert("second player "+document.getElementById("second-name").innerHTML+' wins the game');
        pause_game();
    }
}

function clicked(cid){
    let a = document.getElementById(cid);
    if(a.getAttribute("checked")!='true' && flag===0 && start===true){
        a.setAttribute("checked","true")
        a.innerText='X';
        flag=1;
        no_of_click = no_of_click+1;
    }
    else if (a.getAttribute("checked")!='true' && flag===1 && start===true){
        a.setAttribute("checked","true")
        a.innerText='O';
        flag=0;
        no_of_click = no_of_click+1;
    }
    console.log(no_of_click);
    if (no_of_click>=5){
        console.log("inside win condition");
        win();
    }
}