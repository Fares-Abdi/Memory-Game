let ismute=0;
var flipContainer = document.getElementById("flipContainer");
var test = document.getElementById("music"); 


flipContainer.addEventListener("click", function() {
    
    flipContainer.classList.toggle('flipped');
    if(ismute==0){
        test.loop=false;
        test.pause();
        ismute=1;
    }
    else{
        test.loop = true;
        test.play();
        ismute=0;
    }
  
});