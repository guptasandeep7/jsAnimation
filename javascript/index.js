function animate(){
    var snows = document.getElementsByClassName("snow");
    for (const snow of snows) {
        snow.style.left=(Math.random()*2000) +"px";
        snow.style.backgroundColor="rgba("
        +Math.random()*255+
        ","
        +Math.random()*255+
        ","
        +Math.random()*255+
        ","
        +Math.random()+
        ")";
        

    }

        setInterval(() => {
            for (const snow of snows) {
                snow.style.top = (Math.random()*1000)+"px";

            }
            
        }, 500);   

}
