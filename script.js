score=0;
cross=true;
// for jumping of dino and moving of obstacle
document.onkeydown = function (e) {
    console.log("key code is : ", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector(".dino");
        dino.classList.add("animateDino");
        setTimeout(() => {
            dino.classList.remove("animateDino")
        }, 700);

    }
    if(e.keyCode==39)
{
    dino=document.querySelector('.dino');
    dinoX =parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left=dinoX+112+"px";
}
if(e.keyCode==37)
{
    dino=document.querySelector('.dino');
    dinoX =parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left=(dinoX-112)+"px";
}

}

// interval check when they coolide
setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    //    taking distance from dino and obstacle dx for dino and ox for obstacle
    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy =parseInt( window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    // taking absolute distance
    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    console.log(offsetX,offsetY)
    if(offsetX<93 && offsetY<52)
    {
        gameover.style.visibility="visible";
        obstacle.classList.remove('obstacleAnimated');
    }
    else if(offsetX<145 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000)
    }

}, 10);
function updateScore(score)
{
 scorecard.innerHTML="Your Score:" +score;
}
