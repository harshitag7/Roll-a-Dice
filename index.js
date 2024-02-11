
var random = Math.floor(Math.random()* 6) + 1;

if(random == 1) document.querySelector(".grid .item5").classList.add("white");
    if(random == 2){
        document.querySelector(".grid .item3").classList.add("white");
        document.querySelector(".grid .item7").classList.add("white");
    }
    if(random == 3){
        document.querySelector(".grid .item3").classList.add("white");
        document.querySelector(".grid .item7").classList.add("white");
        document.querySelector(".grid .item5").classList.add("white");
    }

    if(random == 4){
        document.querySelector(".grid .item1").classList.add("white");
        document.querySelector(".grid .item3").classList.add("white");
        document.querySelector(".grid .item7").classList.add("white");
        document.querySelector(".grid .item9").classList.add("white");
    }

    if(random == 5){
        document.querySelector(".grid .item1").classList.add("white");
        document.querySelector(".grid .item3").classList.add("white");
        document.querySelector(".grid .item7").classList.add("white");
        document.querySelector(".grid .item9").classList.add("white");
        document.querySelector(".grid .item5").classList.add("white");
    }

    if(random == 6){
        document.querySelector(".grid .item1").classList.add("white");
        document.querySelector(".grid .item3").classList.add("white");
        document.querySelector(".grid .item7").classList.add("white");
        document.querySelector(".grid .item9").classList.add("white");
        document.querySelector(".grid .item4").classList.add("white");
        document.querySelector(".grid .item6").classList.add("white");
    }