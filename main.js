const myVideo = document.getElementById('myVideo')
const container = document.getElementById('container')


var loader = document.getElementById('preloader');
    window.addEventListener("load", function(){
        loader.style.display = "none"; 

})

myVideo.muted = 'false'; 
myVideo.addEventListener('ended', vidEnded)

const vids = ["1.mp4","2.MP4","3.mp4","4.mp4"]
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
    if(vidPlaying< vids.length){
        vidPlaying++;
    }
    myVideo.src = "videos/" + vids[vidPlaying];
    vidStatus = true;
}



 
