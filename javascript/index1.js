var count=1;
function day(){
   var moon = document.getElementById("moon");
   var container = document.getElementById("container");

   var i = setInterval(() => {
           moon.style.left = moon.offsetLeft +10+"px";
          if(moon.offsetLeft>window.innerWidth){
              clearInterval(i);
          }
       }, 1);

    setTimeout(() => {
        if(count%2!==0){
            moon.style.backgroundImage = "url(photos/cloud2.png)";
            container.style.backgroundImage="url(photos/snowBackground.jpg)"
            count++;
        }
        else{
            moon.style.backgroundImage = "url(photos/moon.png)";
            container.style.backgroundImage="url(photos/cristmas.jpg)"
            count++;
        }
        
        var j = setInterval(() => {
           moon.style.left = (moon.offsetLeft -10)+"px";
           if(moon.offsetLeft<(window.innerWidth-350)){
               clearInterval(j);
           }
          
       }, 1);
    }, 500);


}