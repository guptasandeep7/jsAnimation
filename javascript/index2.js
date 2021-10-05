function animate(){
   
    var snows = document.getElementsByClassName("snow");
    var santa = document.getElementById("santa");
    var container = document.getElementById("container");
    var cloud = document.getElementById("cloud");
    var p = document.getElementsByTagName("p")[0];
    
 

    for (const snow of snows) {
        snow.style.left=(Math.random()*window.innerWidth) +"px";
        var a =Math.random()*20;
        snow.style.width = a+"px";
        snow.style.height = a+"px";
        // snow.style.width="2px";
        // snow.style.height="10px";
        let pos = Math.floor(Math.random()*700);
        if(pos%2==0){
            snow.style.top = pos+"px";
        }else{
            snow.style.top = "-"+pos+"px";

        }
       

    }
//     var images = ["url(/photos/santa1.png)",
//                     "url(/photos/santa2.png)",
//                     "url(/photos/santa3.png)",
//                 "url(/photos/santa4.png)",
//             "url(/photos/santa5.png)",
//         "url(/photos/santa6.png)",
//     "url(/photos/santa7.png)",
// "url(/photos/santa8.png)",
// "url(/photos/santa9.jpg)",
// "url(/photos/santa10.jpg)",
// "url(/photos/santa11.jpg)",
// "url(/photos/santa12.jpg)",
// "url(/photos/santa13.jpg)",
// "url(/photos/santa14.jpg)",
// "url(/photos/santa15.jpg)",
// "url(/photos/santa16.jpg)"];

    // var i=0,j=0;
   var s = setInterval(() => {

        // cloud.style.backgroundPositionX=i+"px";
        // i--;
        // santa.style.backgroundImage=images[j];
        // santa.style.left=i+"px";
        // i+=8;
        // j++;
        // if(j>15){
        //     j=0;
        // }
        // if(i>1500){
        //     i=0;
        // }
        for (const snow of snows) {
            snow.style.top = snow.offsetTop +Math.floor(Math.random()+2) +"px";
            if(snow.offsetTop>window.innerHeight){
                snow.style.top="0px";
            }
        }
        
    }, 10);
    
    


}