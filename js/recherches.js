function affecter_listener_listes_der(){
  for(i = 0; i < 5; i++){
    element = document.querySelector('#pan-der' + i)
    element.addEventListener('click', function(){
        id_liste = "#liste-der" + this.id.split('pan-der')[1];
        liste = document.querySelector(id_liste);
        if(liste.style.display === "" || liste.style.display === "none"){
          liste.style.display = "block";
        }
        else{
          liste.style.display = "none";
        }
    });
  };
}

affecter_listener_listes_der()
