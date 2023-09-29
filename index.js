const hElement= document.getElementById("hour")
const mElement =document.getElementById("minutes");
const sElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    h = h<10 ? "0" + h : h ;
    m = m<10 ? "0" + m : m ;
    s = s<10 ? "0" + s : s ;

    hElement.innerText = h;
    mElement.innerText = m;
    sElement.innerText = s;
    
    let ampm = "AM";
    if (h > 12 ){
        h = h - 12;
        ampm="PM"
    }
    


setTimeout( updateClock,1000)

}
updateClock();

// music
// playSong = true;
// document.getElementById("body").addEventListener("click",one)
// function one(){
//     if(playSong){
//     music();
// }
//     playSong=false
// }
// function music(){
// var song = new Audio("music.mp3");
// song.play();
// }


var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
 getDay = new Date().getDay()
 currentday= day[getDay]
 console.log(currentday)
 const dayElement = document.getElementById("day");
 dayElement.innerText = currentday


