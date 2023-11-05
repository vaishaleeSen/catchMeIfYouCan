var rect=document.getElementById("rectangle");
var rectLeft=rect.offsetLeft;
// console.log(rectLeft);
var rectTop=rect.offsetTop;
// console.log(rectTop);
var rectWidth=rect.clientWidth;
// console.log(rectWidth);
var rectHeight=rect.clientHeight;
// console.log(rectHeight);
var browserW=document.documentElement.clientWidth;
// console.log(browserW);
var browserH=document.documentElement.clientHeight;
// console.log(browserH);

rect.addEventListener('mouseover',moveRect);
var newLeft,newTop;

function moveRect(event){
    newLeft=Math.floor(Math.random() * browserW);
    newTop=Math.floor(Math.random() * browserH);
    // console.log(newTop)


while(newTop===rectTop && newLeft===rectLeft){
    if(newTop==rectTop){
      newTop=Math.floor(Math.random() * browserH)
      console.log(newTop)
    }
      
    else
      newLeft=Math.floor(Math.random() * browserW);  
}

var correctL=false , correctT=false;

while(!correctL || !correctT){
    if(newLeft+rectWidth<=browserW)
       correctL=true;
    else
       newLeft=Math.floor(Math.random() * browserW)   
     
    if(newTop+rectHeight<=browserH){
      correctT=true;
      // console.log(correctT)
    }
    else
       newTop=Math.floor(Math.random() * browserH)
}

toDo(rect.offsetTop,rect.offsetLeft,newTop,newLeft);

var id;

function toDo(initialTop,initialLeft,finalTop,finalLeft){
    id=setInterval(function(){
        sendToDesti(finalTop,finalLeft,id)
    },1);
    // console.log(rectLeft);
}

function sendToDesti(finalTop,finalLeft,id){
    var initialTop=rect.offsetTop;
    var initialLeft=rect.offsetLeft;

    if(initialTop===finalTop && initialLeft===finalLeft){
        clearInterval(id);
        return;
    }

    if(initialLeft<finalLeft){
        if(initialLeft+20<=finalLeft)
          initialLeft+=20;
        else
          initialLeft=finalLeft;
    }else{
        if(initialLeft-20>=finalLeft)
          initialLeft-=20
        else
          initialLeft=finalLeft
    }

    if(initialTop<finalTop){
        if(initialTop+20<=finalTop)
          initialLeft+=20;
        else
          initialTop=finalTop
    }else{
        if(initialTop-20>=finalTop)
          initialTop-=20
        else
         initialTop=finalTop
    }
    rect.style.left = initialLeft+ "px";
	rect.style.top = initialTop + "px";
}

}










