var myLogo = [
    "look/banner/banner0.png",
    "look/banner/IDASTouhou3.png",
    "look/banner/IDASTouhou_TitleLogo.png",
    "look/banner/TouhouInfinity.png"
];


function choosePic() {
    var logo = document.getElementById("logoindex");

    if (!logo) return;

    var randomNum = Math.floor(Math.random() * myLogo.length);
    logo.src = myLogo[randomNum];
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


document.addEventListener("DOMContentLoaded", choosePic);
