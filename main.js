document.addEventListener("DOMContentLoaded", () => {
   const app = document.getElementById("app");
   if (app) {
       createGoogleSearch("html");
       createGoogleSearch("javascript");
       createGoogleSearch("css");
       createGoogleSearch("astro");
       createGoogleSearch("bootstrap");
   }
});

function createGoogleSearch(param) {
   const h1 = document.createElement('h1');
   h1.innerHTML = `<a target="_blank" href="http://google.com/search?q=${param}">${param}</a>`;
   app.appendChild(h1);
}


