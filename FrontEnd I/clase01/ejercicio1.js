const title = document.querySelector("h1");
console.log(title);
const parrafo = document.querySelector("p");
console.log(parrafo);
title.innerHTML= "TITLE";
parrafo.innerHTML= "jaja";

title.style.backgroundColor = "red";
parrafo.style.backgroundColor = "blue";
parrafo.style.color = "white";

title.classList.add("colorRojo", "grande");
