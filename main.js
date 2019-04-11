var touche = document.getElementById('lastname');

touche.addEventListener('keypress', function(){
  alert(document.getElementById('lastname').value);
});
// L'idée ici est d'afficher une boite de dialogue à chaque fois que
//l'utilisateur appuie sur une touche du clavier de sorte à afficher ce qu'il écrit
// input à la place de 'keypress' fonctionne aussi. La différence est qu'il comprend dans l'affichage la dernière lettre écrite
