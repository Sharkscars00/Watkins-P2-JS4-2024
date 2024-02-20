const lightbulb = document.getElementById('lightbulb');
const lightswitch = document.getElementById('lightswitch');
const status = document.getElementById('statusOfswitch');

let isLightOn = false;

lightswitch.addEventListener('click', function() {
    if(isLightOn) {
        lightbulb.src = "light off.png";
        lightswitch.src = "switch off.png";
        status.textcontent = "TURN ON THE LIGHT";
        
        

    }else{
        lightbulb.src = "light on.png";
        lightswitch.src = "switch on.png";
        status.textcontent = "You DID IT! Now, Turn OFF the lights"
        
    }
    isLightOn = !isLightOn;
}

);