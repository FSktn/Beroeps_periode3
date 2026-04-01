const fs = require('fs');

getFles();

let donatie = 0;
let statieGeld = 0.15;
// verander dit voor het doel tracker
let donatie_doel = 25;

let bar = 0;

// elements definen
let fles_count = document.getElementById("flessen");
let donatie_count = document.getElementById("donatie");

// code als fles in bak valt  of als je op de test knop drukt
function doneer(){

// verander naar een post naar de json 

flessen += 1;
donatie = flessen * statieGeld;

// test 
bar += 1 * (100 / donatie_doel);
console.log(bar);
if(bar > 100){
    bar -= 100;
    console.log("reset");
}

document.getElementById("bar").style.width = bar + "%";
// zorgen dat de donatie niet 0.599358 enzo word 
donatie = Math.round(donatie * 100) / 100;

// code die fles count en donatie weergeeft

saveFles();
getFles();


donatie_count.innerHTML = donatie + "€";

// animatie voor donatie
// blur de count 
fles_count.style.filter = "blur(2px)";
donatie_count.style.filter = "blur(2px)";

// blur na pauze reseten met transition 
function reset_blur(){
   fles_count.style.filter = "blur(0px)";
   fles_count.style.transition = "0.2s";

   donatie_count.style.filter = "blur(0px)";
   donatie_count.style.transition = "0.2s";
}
// pauze maken voor reset 
setTimeout(reset_blur, 100);

// blur resetten 
fles_count.style.transition = "0s";
donatie_count.style.transition = "0s";
}


// DEBUG
// knop om doneer() te gebruiken
let pressed = false;

document.addEventListener("keydown", function (event) {
// If event.code was "enter", then display text
  if (event.code === "Enter" ) {
    // om te switchen tussen zichtbaar en onzichtbaar
    if(pressed == false){
        document.getElementById("TEST").style.display = "block";
        pressed = true;
    } else {
        document.getElementById("TEST").style.display = "none";
        pressed = false;
    }
  }
});
// nieuwe fles aantal Posten 



const saveFles = () => {

const finished = (error) =>{
    if(error) (
        console.log(error)
        
    )
}

    const count = {
        count: "33"
}

const jsonData = JSON.stringify(count)
fs.writeFile('flessen.json',jsonData,finished)
}

// info van fles ophalen
async function getFles() {

}