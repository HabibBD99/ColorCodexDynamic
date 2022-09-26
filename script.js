
 
         for(var i=0; i< 5; i++){

   document.querySelectorAll("#Btn")[i].addEventListener("click", function(){

    var textButton = this.value;
    
    document.querySelector("h3").innerHTML = textButton + " Button is Clicked";
    
      var ColorBody = document.getElementById("Bdy");
          ColorBody.style.backgroundColor=textButton;   
   
   
   
            });


     }

 
