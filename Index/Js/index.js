var El={
    Slider:document.getElementById("Slider"),
    ImgOne:document.getElementById("Img-One"),
    ImgTwo:document.getElementById("Img-Two"),
    ImgThree:document.getElementById("Img-Three"),
    ImgFour:document.getElementById("Img-Four"),
    body:document.querySelector("body")
}

//Envet
// El.body.addEventListener("load",slide);


var x=0;
//function
function slide(){
setInterval(() => {
    if(x==0){
      El.ImgFour.style.opacity=0;
      El.ImgThree.style.opacity=0;
      El.ImgTwo.style.opacity=0;
       El.ImgOne.style.opacity=1;
       
        return x++;
    }
    else if(x==1){
        El.ImgOne.style.opacity=0;
        El.ImgFour.style.opacity=0;
        El.ImgThree.style.opacity=0;
        El.ImgTwo.style.opacity=1;
         
        
        
        return x++;
    }
    else if(x==2){
        El.ImgTwo.style.opacity=0;
        El.ImgOne.style.opacity=0;
        El.ImgFour.style.opacity=0;
        El.ImgThree.style.opacity=1;
        
        return x++;
        
    }
    else if(x==3){
        El.ImgThree.style.opacity=0;
        El.ImgTwo.style.opacity=0;
        El.ImgOne.style.opacity=0;
        El.ImgFour.style.opacity=1;
        
        x=0
        return x;
        
    }
},3000);

}