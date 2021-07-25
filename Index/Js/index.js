var El={
    Slider:document.getElementById("Slider"),
    ImgOne:document.getElementById("Img-One"),
    ImgTwo:document.getElementById("Img-Two"),
    ImgThree:document.getElementById("ImgThree"),
    ImgFour:document.getElementById("Img-Four"),
    body:document.querySelector("body"),
    x:0
}

//Envet
// El.body.addEventListener("load",slide);



//function
function slide(){
setInterval(() => {
    if(El.x==0){
        El.ImgTwo.style.opacity=0;
        El.ImgOne.style.opacity="1";
        var t=(El.x)+1;
        return t;
    }
    else if(El.x==1){
       
        El.ImgOne.style.opacity=0;
        El.ImgTwo.style.opacity="1";
        t++
        console.log(s);
        console.log(t);
        return t;
    }
    else if(El.x==2){
        El.ImgTwo.style.opacity=0;
        El.ImgThree.style.opacity="1";
        t++
        return t;
        
    }
},2000);

}