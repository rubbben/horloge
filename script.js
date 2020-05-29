//Les 3 constante contienent la classe des divs du temps
const secondeDiv = document.querySelector('.seconde');
const minuteDiv = document.querySelector('.minute');
const heureDiv = document.querySelector('.heure');

function miseEnPlace(){
    
    const now = new Date();
    //console.log(now);


    //l'aiguille des secondes
    const seconds = now.getSeconds();
    //console.log(seconds);

    //Besoin de transformer nos donnees secondes en degrees
    const secDeg = ((seconds/60)*360) + 90; //60: 60s dans 1min. 360: 360° dans un cercle. 90: 90° permet de placer les aiguilles vers le haut. (seconds/60)*360) : la position en degree des secondes actuelles. 
    secondeDiv.style.transform = `rotate(${secDeg}deg)`;



    //l'aiguille des minutes
    const mins = now.getMinutes();
    const minDeg = ((mins/60)*360) + ((seconds/60)*6) + 90; // (mins/60)*360) : Place les aiguilles des minutes en degres. et egalement (seconds/60)*6) : en fonction du nombres de secondes qui se sont derouler dans l'horloge. 6 : 6deg = 1min (60 * 6 = 360) (60min en 1h).
    minuteDiv.style.transform = `rotate(${minDeg}deg)`;



    //l'aiguille des heures
    const hour = now.getHours();
    const hourDeg = ((hour/12)*360) + ((mins/60)*30) + 90; //30deg = 1h
    heureDiv.style.transform = `rotate(${hourDeg}deg)`; 
}

setInterval(miseEnPlace, 1000); //Rappel la fonction toute les milisecondes