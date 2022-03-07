window.onload = choosePic;

var myLogo = ["../look/banner/banner0.png"];

function choosePic() {

     var randomNum = Math.floor(Math.random() * myLogo.length);
     document.getElementById("logo").src = myLogo[randomNum];

 
 }