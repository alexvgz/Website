
window.onload = choosePic;

var myLogo = ["look/banner/banner0.png"];

function choosePic() {

     var randomNum = Math.floor(Math.random() * myLogo.length);
     document.getElementById("logoindex").src = myLogo[randomNum];

 
 }



/*var imagesArray = [
'look/bg/bg.png',
'look/banner/banner0.png',
'look/buttons/game2.png',
];

var usedImages = {};
var usedImagesCount = 0;

function displayImage(){

    var num = Math.floor(Math.random() * (imagesArray.length));
    if (!usedImages[num]){
        document.getElementById("logo").src = imagesArray[num];
        usedImages[num] = true;
        usedImagesCount++;
        if (usedImagesCount === imagesArray.length){
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        displayImage();

    }
}
*/