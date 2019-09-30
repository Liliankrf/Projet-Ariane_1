window.onload = function() {

  // Récupération du canevas et ajustement de sa taille
  var canvas = document.getElementById("canvas");
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  // Récupération du contexte 2D qui sera utilisé pour dessiner
  var context = canvas.getContext("2d");
  context.fillStyle =  "red";

  // Le facteur de grossissement
  var zoom = 1;

  // Monter rapetisse le point rouge, descendre le grossit
  canvas.addEventListener('mousemove', function(e) {
      zoom = e.clientY / canvas.height;
  });

  // Demande de mise à jour du canevas
  requestAnimationFrame(update);

  // Affichage du point rouge proportionnellement au zoom
  function update() {

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.arc(
          canvas.width/2,
          canvas.height/2,
          canvas.height * zoom,
          0,
          2 * Math.PI
      );
      context.fill();

      requestAnimationFrame(update);

  }

};