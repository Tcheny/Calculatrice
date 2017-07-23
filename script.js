let ecran = document.getElementById('ecran');

// attr onclick='btn()' in html to js
btn = (value) => {
  // quand je click sur un button je renvoie sur l'écran la valeur que je veux
  ecran.innerHTML += value;
}

btnClean = () => {
  ecran.innerHTML = "";
}

btnPlus = () => {
  ecran.innerHTML += "+";
}

btnMoins = () => {
  ecran.innerHTML += "-";
}

btnMultip =() => {
  ecran.innerHTML += "*"
}

btnDivise = () => {
  ecran.innerHTML += "/"
}

btnEgal = () => {
  let resultat = eval(document.getElementById('ecran').innerHTML);
  ecran.innerHTML = resultat; 
}
