let score = 0 ;
let lives = 5;
let pacman = {
    x:1,
    y:1
}
let pinky = {
    x:7,
    y:7
}
let red = {
    x:7,
    y:6
}
let yellow = {
    x:8,
    y:7
}
let blue = {
    x:8,
    y:6
}
function reset(){  
    document.getElementById("world").style.display = "inline-block";
    document.getElementById("pacman").style.display = "inline-block";
    document.getElementById("pacman").style.transform = "rotate(0deg)";
    document.getElementById("pinky").style.display = "inline-block";
    document.getElementById("red").style.display = "inline-block";
    document.getElementById("blue").style.display = "inline-block";
    document.getElementById("yellow").style.display = "inline-block";
    document.getElementById("score").style.display = "inline-block";
    document.getElementById("lives").style.display = "inline-block";
    document.getElementById("end").style.display ="none";
    document.querySelector(".button").style.display ="none";
    document.getElementById("win").style.display ="none";
    score = 0 
    lives = 5
    pacman = {
        x:11,
        y:8
    }
    pinky = {
        x:10,
        y:6
    }
    red = {
        x:10,
        y:6
    }
    yellow = {
        x:12,
        y:6
    }
    blue = {
        x:12,
        y:6
    }
    world = [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,3,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,3,2],
        [2,1,2,2,2,1,2,2,2,2,1,2,1,2,2,2,2,1,2,2,2,1,2],
        [2,1,2,2,2,1,2,2,2,2,1,2,1,2,2,2,2,1,2,2,2,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,1,2],
        [2,1,1,1,1,1,2,2,1,2,0,0,0,2,1,2,2,1,2,2,2,1,2],
        [2,1,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,1,2],
        [2,1,1,2,2,1,1,1,1,1,1,0,1,1,1,1,1,1,2,2,1,1,2],
        [2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,1,1,2,2,1,2,2],
        [2,2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ]
    displayWorld();
    displayPacman();
    displayyellow();
    displayred();
    displayblue();
    displayPinky();
    displayLives();
    displayScore();
    function displayWorld(){
        let output = ""
        for (let i = 0; i<world.length;i++){
            output +="\n<div class='row'>\n"
            for (let j =0; j<world[i].length; j++){
                if(world[i][j]=== 2){
                    output += "<div class='brick'></div>"
                }
                else if (world[i][j]===1){
                    output += "<div class='coin'></div>"
                }
                else if (world[i][j]=== 0){
                    output += "<div class='empty'></div>"
                }
                else if (world[i][j]===3){
                    output+= "<div class='cherry'></div>"
                }
            }
            output +="\n</div>"
        }
        document.getElementById("world").innerHTML = output;
    }
    function displayPacman(){
        document.getElementById("pacman").style.left = pacman.x*50+"px";
        document.getElementById("pacman").style.top = pacman.y*50+"px";
    }
    function displayPinky(){
        document.getElementById("pinky").style.left = pinky.x*50+"px";
        document.getElementById("pinky").style.top = pinky.y*50+"px";
    }
    function displayblue(){
        document.getElementById("blue").style.left = blue.x*50+"px";
        document.getElementById("blue").style.top = blue.y*50+"px";
    }
    function displayyellow(){
        document.getElementById("yellow").style.left = yellow.x*50+"px";
        document.getElementById("yellow").style.top = yellow.y*50+"px";
    }
    function displayred(){
        document.getElementById("red").style.left = red.x*50+"px";
        document.getElementById("red").style.top = red.y*50+"px";
    }
    function displayScore(){
        document.getElementById("score").innerText = "Score: "+score;
    }
    function displayLives(){
        document.getElementById("lives").innerText = "Lives: "+lives;
    }
    document.onkeydown = function(e){
        if (e.keyCode == 37 && world[pacman.y][pacman.x-1] !=2){
            pacman.x--;
            document.getElementById("pacman").style.transform = "rotate(180deg)";
        }
        else if (e.keyCode == 39 &&world[pacman.y][pacman.x+1] !=2){
            pacman.x++;
            document.getElementById("pacman").style.transform = "rotate(0deg)";
        }
        else if (e.keyCode == 38 &&world[pacman.y-1][pacman.x] !=2){
            pacman.y--;
            document.getElementById("pacman").style.transform = "rotate(270deg)";
        }
        else if (e.keyCode == 40 &&world[pacman.y+1][pacman.x] !=2){
            pacman.y++;
            document.getElementById("pacman").style.transform = "rotate(90deg)";
        }
        else if (e.keyCode == 71){
            if (lives > 5){
                lives = 5;
                score = 0;
            }
            else{
                lives = 9000;
                score = 790;
            }
            displayScore();
            displayLives();
        }
        if (world[pacman.y][pacman.x] === 1){
            world[pacman.y][pacman.x] = 0
            score +=10;
            displayScore();
        }
        else if (world[pacman.y][pacman.x] === 3){
            world[pacman.y][pacman.x] = 0
            score += 50;
            displayScore();
        }
        if (score >= 1310){
            document.getElementById("world").style.display = "none";
            document.getElementById("pacman").style.top = "1000px";
            document.getElementById("pinky").style.display = "none";
            document.getElementById("red").style.display = "none";
            document.getElementById("blue").style.display = "none";
            document.getElementById("yellow").style.display = "none";
            document.getElementById("score").style.display = "none";
            document.getElementById("lives").style.display = "none";
            document.getElementById("win").style.display ="block";
            document.querySelector(".button").style.display ="block";
            return;
        }
        displayPacman();
        displayWorld();
    }
    function MoveGhosts() {
        if (score >=100){
            world[5][10] = 0;
            world[5][11] = 0;
            world[5][12] = 0;
            displayWorld();
        }
        let rand = 0
        let call = [
            pinky,
            red,
            blue,
            yellow
        ]
        for (let i = 0; i<4; i++){
            rand = Math.floor(Math.random()*4);
            if (rand === 0){
                if(world[call[i].y+1][call[i].x] !== 2){ 
                    call[i].y += 1
                }
            }
            else if (rand === 1){
                if(world[call[i].y][call[i].x-1] !== 2){
                    call[i].x -= 1
                }
            }
            else if (rand === 2){
                if(world[call[i].y][call[i].x+1] !== 2){
                        call[i].x += 1
                }
            }
            else if (rand === 3){
                if(world[call[i].y-1][call[i].x] !== 2){
                        call[i].y -= 1
                }
            }
            if (
                pacman.x === pinky.x && pacman.y === pinky.y||
                pacman.x === blue.x && pacman.y === blue.y||
                pacman.x === yellow.x && pacman.y === yellow.y||
                pacman.x === red.x && pacman.y === red.y
                ){
                    lives--
                    displayLives();
                    if (lives <= 0){
                        document.getElementById("world").style.display = "none";
                        document.getElementById("pacman").style.display = "none";
                        document.getElementById("pinky").style.display = "none";
                        document.getElementById("red").style.display = "none";
                        document.getElementById("blue").style.display = "none";
                        document.getElementById("yellow").style.display = "none";
                        document.getElementById("score").style.display = "none";
                        document.getElementById("lives").style.display = "none";
                        document.getElementById("end").style.display ="block";
                        document.querySelector(".button").style.display ="block";
                        return;
                    }
                }
        }
        if (score >= 1310){
            return;
        }
        displayyellow();
        displayred();
        displayblue();
        displayPinky();
        setTimeout(MoveGhosts,300);
    }
    MoveGhosts();
}
reset();