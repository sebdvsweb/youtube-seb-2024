const divh3 = document.querySelectorAll("h3"); 

const divContent = document.querySelector(".content");

const nav = document.querySelector("nav");

let btn = document.querySelector("#btn");

let image = document.getElementById("main-logo");

let isClicked = false;

btn.addEventListener("click", function () {
  if (isClicked == false) {
    isClicked = true;
    divContent.classList.replace("content", "content-darkmode");
    nav.classList.add("content-darkmode");
    btn.classList.replace("btn-dark", "btn-light");
    btn.innerHTML = 'Light';
    image.src = "images/white-youtube.png";
    divh3.forEach((h3) => {
      h3.classList.add("p-darkmode");
    });
  } else {
    isClicked = false;
    divContent.classList.replace("content-darkmode", "content");
    nav.classList.remove("content-darkmode");
    btn.classList.replace("btn-light", "btn-dark");
    btn.innerHTML = 'Dark';
    image.src = "images/YouTube_Logo_2017.svg.png";
    divh3.forEach((h3) => {
      h3.classList.remove("p-darkmode");
    });
  }
});

// 1. Enregistrer une video youtube dans le localStorage //
function save() {
  let iframe = document.getElementById("iframeCode").value;
  window.localStorage.setItem("iframe" + new Date(), iframe);
  window.location.reload();
}

// 2. Chargement des vidéos déjà enregistrées //
window.onload = function load() {
  // Transformer le LocalStorage en objet clé:valeur que l'on peut lire facilement
  let iframes = {
      ...localStorage,
  };
  // Création d'une variable vide qui va 'recevoir' l'iframe
  let html = "";

  // Transformer les iframes en tableau, en faire une seule chaine de caractère géante,
  // puis ajouter le bouton de suppression après chaque iframe avec un attribut contenant la clé
  for ([key, iframe] of Object.entries(iframes)) {
      html +=
          iframe +
          `<button class="delete btn btn-warning" style="position:relative;right:20px;top:-10px" data-key="${key}">X</button>`;
  }

  // Ajouter le code HTML généré dans le div vide
  document.querySelector(".video-play").innerHTML = html;

  // Enregistrer l'événement de suppression de vidéo
  document.querySelectorAll("button.delete").forEach((button) => {
      // Au clic sur le bouton de suppression
      button.addEventListener("click", () => {
          // Suppression effective de l'iframe dans le localStorage
          // expliquer dataset
          window.localStorage.removeItem(button.dataset.key);
          // Recharger la page pour voir les changements
          window.location.reload();
      });
  });
};


// Searchbar

// Attend que le DOM soit entièrement chargé avant d'exécuter le code
document.addEventListener("DOMContentLoaded", function() {
  // Ajoute un écouteur d'événements au formulaire de recherche lorsque soumis
  document.getElementById("searchForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire

      // Récupère la valeur de recherche saisie par l'utilisateur
      var searchTerm = document.getElementById("searchInput").value;

      // Appelle les fonctions pour souligner les termes de recherche dans les titres et les URL des vidéos
      highlightTitles(searchTerm);
      highlightVideoURLs(searchTerm);
  });
});

// Fonction pour souligner les termes de recherche dans les titres des vidéos
function highlightTitles(searchTerm) {
  // Sélectionne tous les éléments ayant la classe .title-video (les titres des vidéos)
  var titles = document.querySelectorAll('.title-video');

  // Parcourt tous les titres des vidéos
  titles.forEach(function(title) {
      // Récupère le texte du titre
      var titleText = title.textContent;
      // Remplace tous les occurrences du terme de recherche par le terme souligné dans le texte du titre
      var newText = titleText.replace(new RegExp(searchTerm, "gi"), function(match) {
          return '<span class="highlight">' + match + '</span>';
      });
      // Remplace le texte du titre par le nouveau texte contenant les termes soulignés
      title.innerHTML = newText;
  });
}

// Fonction pour mettre en évidence les URL des vidéos contenant les termes de recherche
function highlightVideoURLs(searchTerm) {
  // Sélectionne tous les éléments <iframe> sur la page (les vidéos incorporées)
  var iframes = document.querySelectorAll('iframe');

  // Parcourt tous les éléments <iframe> sur la page
  iframes.forEach(function(iframe) {
      // Récupère l'URL de la vidéo depuis l'attribut src de l'élément <iframe>
      var videoURL = iframe.getAttribute('src');
      // Vérifie si l'URL de la vidéo contient le terme de recherche
      if (videoURL.includes(searchTerm)) {
          // Met en évidence la vidéo en ajoutant une bordure jaune
          iframe.style.border = "3px solid crimson";
      }
  });
}




/*

// Code GT 2 LE PUY


let isClicked = false; // cette variable va vérifier si le bouton a déja été ciqué ou non
let bouton = document.getElementById('btn');
let body = document.querySelector("body"); // <body>

// créer une variable qui récupère vos titres
// créer une variable qui récupère le logo

bouton.addEventListener('click',function() {

  if (isClicked == false) {
    isClicked = true; 
    body.style.backgroundColor = "black";
    // changer la couleur des textes
    // changer la src du logo
    // changer la couleur du bouton dark
    // changer le texte du bouton dark avec innerHTML
  }

  else {
    isClicked = false;
    body.style.backgroundColor = "white";
    // changer la couleur des textes
    // changer la src du logo
    // changer la couleur du bouton dark
    // changer le texte du bouton dark avec innerHTML
  }
})

*/