function animate(){
    clearInterval(snowfall);
   
    var snows = document.getElementsByClassName("snow");
 
    for (const snow of snows) {
        snow.style.backgroundColor="white";
        snow.style.left=(Math.random()*window.innerWidth) +"px";
        var a =Math.random()*20;
        snow.style.width = a+"px";
        snow.style.height = a+"px";
        let pos = Math.floor(Math.random()*700);
        if(pos%2==0){
            snow.style.top = pos+"px";
        }else{
            snow.style.top = "-"+pos+"px";

        }

    }


   var snowfall = setInterval(() => {

        for (const snow of snows) {
            snow.style.top = snow.offsetTop +2 +"px";
            if(snow.offsetTop>window.innerHeight){
                snow.style.top="0px";
            }
        }
        
    }, 20);
    
    


}