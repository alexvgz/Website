window.onload = choosePic;

var myLogo = ["../look/banner/banner0.png"];

function choosePic() {

     var randomNum = Math.floor(Math.random() * myLogo.length);
     document.getElementById("logo").src = myLogo[randomNum];

 
 }

const imagesToPreload = [
    "/look/buttons/home2.png",
    "/look/buttons/game2.png",
    "/look/buttons/consoles2.png",
    "/look/buttons/anime2.png",
    "/look/buttons/cartoons2.png",
    "/look/buttons/comic2.png",
    "/look/buttons/info2.png",
    "/look/buttons/projects2.png",
    "/look/buttons/collection2.png"
];

imagesToPreload.forEach(src => {
    const img = new Image();
    img.src = src;
});
