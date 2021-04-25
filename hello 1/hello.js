var submit = document.getElementById("submit");
submit.onclick = makeChange;

 function makeChange(){
     var greating = document.getElementsByClassName("teep")[0];
     var input = document.getElementById("name").value;
     greating.innerHTML= "hie,  "   +input;
      greating.style.backgroundColor="green";
      greating.style.color="white";
    //  greating.style.fontSize="new roman";
     
}

