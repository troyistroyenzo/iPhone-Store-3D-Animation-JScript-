//Movement Animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    console.log("hey")
    console.log(e.pageX, e.pageY);
    let xAxis = (window.innerWidth / 2 - e.pageX) / 51;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 51;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

//Items
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const phone = document.querySelector('.phone img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const models = document.querySelector('.models');
const colors = document.querySelector('.colors');

//Animate In
container.addEventListener('mouseenter', e => {
    card.style.transform=`none`;
    
    //Popout
    title.style.transform = "translateZ(150px)";
    subtitle.style.transform = "translateZ(150px)";
    phone.style.transform = "translateZ(150px) rotateZ(-25deg)";
    description.style.transform = "translateZ(150px)";
    models.style.transform = "translateZ(150px)";
    purchase.style.transform = "translateZ(150px)";
    colors.style.transform = "translateZ(150px)";
})


//Animate Out
container.addEventListener('mouseleave', e => {
    card.style.transition="all 0.5s ease";
    card.style.transform=`rotateY(0deg) rotateX(0deg)`
    //Popback
    title.style.transform = "translateZ(0px)";
    subtitle.style.transform = "translateZ(0px)";
    phone.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    models.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    colors.style.transform = "translateZ(0px)";
})