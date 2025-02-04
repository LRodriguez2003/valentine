function playAudio() {
    console.log("Before play");
    
    var audio = document.getElementById('myAudio');
    console.log("Audio element:", audio);

    audio.muted = false;
    
    audio.play().then(() => {
      console.log("Audio is playing!");
    }).catch((error) => {
      console.log("Error playing audio:", error);
    });
    
    console.log("After play");

    document.getElementById('headingId').classList.remove('hidden');
    document.getElementById('heading2Id').classList.remove('hidden');
    document.getElementById('myImage').classList.remove('hidden');
    document.getElementById('butt').classList.remove('hidden');
}

function stopAudio() {
    var audio = document.getElementById('myAudio');

    audio.pause();
} 

function acceptValentine() {
    document.getElementById('headingId').innerText = 'To start our Valentine/Anniversary';
    document.getElementById('heading2Id').innerText = 'I have booked and paid for a nail appointment for you';

    yesButton = document.getElementById('yesButton').remove();
    noButton = document.getElementById('noButton')?.remove();

    newImage = document.getElementById('myImage').src = 'happy.gif';

    document.getElementById('message-container').innerHTML = '<h3>Your nail appointment is on</h3>';
    document.getElementById('message-container2').innerHTML = '<h3>Feb 8th @ 12pm by Tinted_Tips</h3>';
    document.getElementById('message-container3').innerHTML = '<h3>Address: 80 Merton Street</h3>';
};


function declineValentine() {
    document.getElementById('message-container').innerHTML= '<h3>Sorry, Now you can only press yes</h3>';
    
    document.getElementById('myImage').src = 'angry.gif';

    document.getElementById('noButton').remove();
}