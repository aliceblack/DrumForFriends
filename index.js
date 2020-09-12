
function playAudio(reference) { 
    var audio = document.getElementById(reference); 
    audio.play(); 
} 

function pauseAudio(reference) { 
    var audio = document.getElementById(reference); 
    audio.pause(); 
} 



$('#instructions').modal('show');