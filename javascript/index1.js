var count=1;
function day(){
    clearInterval();
   var moon = document.getElementById("moon");
   var container = document.getElementById("container");

   var i = setInterval(() => {
           moon.style.left = moon.offsetLeft +10+"px";
          if(moon.offsetLeft>window.innerWidth){
              clearInterval(i);
          }
       },  10);
  
        var j = setInterval(() => {
           moon.style.left = (moon.offsetLeft -10)+"px";
           if(moon.offsetLeft<(window.innerWidth-350)){
            clearInterval(j);

                if(count%2===0){
                    moon.style.backgroundImage = "url(../photos/moon.png)";
                    container.style.backgroundImage="url(../photos/wallpaperflare.com_wallpaper.jpg)";
                    count++;
                    animate();


                }
                else{
                    moon.style.backgroundImage = "url(../photos/moon.png)";
                    container.style.backgroundImage="url(../photos/colorNight.jpg)";
                    count++;
                    celebrate();

                }

           }
          
       }, 20);

    
function celebrate(){
    clearInterval(s);
    var snows = document.getElementsByClassName("snow");
    var container = document.getElementById("container");
    var moon = document.getElementById("moon");

    
   
    for (const snow of snows) {
        snow.style.filter = "blur(0px)";

        snow.style.left=(Math.random()*window.innerWidth) +"px";
        snow.style.backgroundColor="rgba("
        +Math.random()*255+
        ","
        +Math.random()*255+
        ","
        +Math.random()*255+
        ","
        +1+
        ")";

        snow.style.width = "20px";
        snow.style.height = "20px";
        let pos = Math.floor(Math.random()*700);
        if(pos%2==0){
            snow.style.top = pos+"px";
        }else{
            snow.style.top = "-"+pos+"px";
        }
    }

    var s = setInterval(() => {

        for (const snow of snows) {
            snow.style.top = snow.offsetTop +1 +"px";
        
            if(snow.offsetTop>window.innerHeight){
                snow.style.top="0px";
            }
        }
        
    }, 200);

}




}