const myVideo = document.getElementById('myVideo')
const container = document.getElementById('container')
// const audio = document.getElementById('audio')



var loader = document.getElementById('preloader');
    window.addEventListener("load", function(){
    loader.style.display = "none"; 
})
myVideo.muted = 'false'; 
myVideo.addEventListener('ended', vidEnded)

const vids = ["part1.mp4","part2.mp4","part3.mp4","part4.mp4","part5.mp4","part6.mp4"]
let vidPlaying = 0;
 

function vidEnded(){
    container.addEventListener('click', checker, true)
}

function checker(){
    if (myVideo.paused) {
        nextVideo();
    }
}

function nextVideo(){
    if(vidPlaying < vids.length){
        vidPlaying++;
    } 
    myVideo.src = "videos/" + vids[vidPlaying];
    vidStatus = true;
}



 