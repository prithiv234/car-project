canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");
car1w = 120;
car1h= 70;
car1_image = "car1.png";
car1x = 10;
car1y = 10;

car2w = 120;
car2h= 70;
car2_image = "car2.png";
car2x = 10;
car2y = 100;
background_image ="racing.jpg"

function add() {
    console.log("inside_add")
    background_imgTag = new Image(); 
    background_imgTag.onload = ub;
    background_imgTag.src = background_image;
    car1_imgTag = new Image(); 
    car1_imgTag.onload = ucar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image(); 
    car2_imgTag.onload = ucar2;
    car2_imgTag.src = car2_image;

}
function ub(){
    console.log("inside_ub")
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function ucar1() {
    ctx.drawImage(car1_imgTag, car1x, car1y, car1w, car1h);
}

function ucar2() {
    ctx.drawImage(car2_imgTag, car2x, car2y, car2w, car2h);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    if(keyPressed == '38') 
    { 
        car1_up(); 
        console.log("up");
     }

     if(keyPressed == '40') 
     { 
         car1_down(); 
         console.log("down");
      }

      if(keyPressed == '37') 
      { 
          car1_left(); 
          console.log("left");
       }

       if(keyPressed == '39') 
       { 
           car1_right(); 
           console.log("right");
        }
        

        if(keyPressed == '87') 
    { 
        car2_up(); 
        console.log("up");
     }

     if(keyPressed == '83') 
     { 
         car2_down(); 
         console.log("down");
      }

      if(keyPressed == '65') 
      { 
          car2_left(); 
          console.log("left");
       }

       if(keyPressed == '68') 
       { 
           car2_right(); 
           console.log("right");
        }
}
function car1_up() {
if(car1y >=0){
car1y-=10;
ub();
ucar1();
ucar2();
}

}
function car1_down() {
    if(car1y <=500){
        car1y+=10;
        ub();
        ucar1();
        ucar2();
        }
    
}
function car1_left() {
    if(car1x >=0){
        car1x-=10;
        ub();
        ucar1();
        ucar2();
        }
    
}
function car1_right() {
    if(car1x <=700){
        car1x+=10;
        ub();
        ucar1();
        ucar2();
        }
    
}
function car2_up() {
    if(car2y >=0){
    car2y-=10;
    ub();
    ucar1();
    ucar2();
    }
    
    }
    function car2_down() {
        if(car2y <=500){
            car2y+=10;
            ub();
            ucar1();
            ucar2();
            }
        
    }
    function car2_left() {
        if(car2x >=0){
            car2x-=10;
            ub();
            ucar1();
            ucar2();
            }
        
    }
    function car2_right() {
        if(car2x <=700){
            car2x+=10;
            ub();
            ucar1();
            ucar2();
            }
        
    }