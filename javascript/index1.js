var count=1;
function day(){
    clearInterval();
   var moon = document.getElementById("moon");
   var container = document.getElementById("container");

   var i = setInterval(() => {
           moon.style.left = moon.offsetLeft +5+"px";
          if(moon.offsetLeft>window.innerWidth){
              clearInterval(i);
          }
       },  1);
       
       if(count%2===0){
        
        container.setAttribute("style", "background-image: url(photos/wallpaperflare.com_wallpaper.jpg)");
    }
    else{

        container.setAttribute("style", "background-image: url(photos/night.jpg)");
    }
        var j = setInterval(() => {
           moon.style.left = (moon.offsetLeft -1)+"px";
           if(moon.offsetLeft<(window.innerWidth-350)){

            clearInterval(j);

                if(count%2===0){
                    count++;
                    animate();
                }
                else{
                    count++;
                    celebrate();

                }

           }
          
       }, 1);

    
function celebrate(){
    clearInterval(s);
    var snows = document.getElementsByClassName("snow");
   
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
        
    }, 20);

}




}
