/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.getElementById("button").addEventListener("click", () => {
    document.getElementById("excusa").innerHTML = getTheExcuse();
  });
  function getTheExcuse() {
    let who = ["mi abuela", "mi iguana", "mi perro", "mi hijo"];
    let what = ["chocado", "estampado", "roto", "comido"];
    let when = [
      "antes de venir",
      "esta mañana",
      "hace un momento",
      "ahora mismo"
    ];

    let randomwho = Math.floor(Math.random() * who.length);
    let randomwhat = Math.floor(Math.random() * what.length);
    let randomwhen = Math.floor(Math.random() * when.length);

    let excuse =
      "¡No te lo vas a creer! " +
      who[randomwho] +
      " se ha " +
      what[randomwhat] +
      " " +
      when[randomwhen];
    return excuse;
  }
};
