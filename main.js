const myVideo = document.getElementById('myVideo')
const container = document.getElementById('container')


var loader = document.getElementById('preloader');
//     window.addEventListener("load", function(){
//         loader.style.display = "none"; 

// })

myVideo.muted = 'false'; 
myVideo.addEventListener('ended', vidEnded)

const vids = ["1.mp4","2.mp4","3.MP4","4.MP4"]
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
    } else{
        loader.style.display = "none";
    }
    myVideo.src = "videos/" + vids[vidPlaying];
    vidStatus = true;
}



 
