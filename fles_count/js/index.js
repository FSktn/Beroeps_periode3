let flessen = 0;
let donatie = 0;
let statieGeld = 1.5;

function doneer(){
flessen += 1;
donatie = flessen * statieGeld;

document.getElementById("flessen").innerHTML = "-" + flessen + "-";
document.getElementById("donatie").innerHTML = donatie + "€";
}