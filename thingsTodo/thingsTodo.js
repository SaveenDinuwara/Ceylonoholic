function filter(type){
    const cards=document.querySelectorAll(".card");

    for(let i=0;i<cards.length;i++){
        if(cards[i].classList.contains(type)){
            console.log("events");
            cards[i].classList.remove("hide_card");
        }
        else{
            console.log("no-events");
            cards[i].classList.add("hide_card");

        }
    }
    
}

function reset_filter(){
    const cards=document.querySelectorAll(".card");

    for(let i=0;i<cards.length;i++){
        cards[i].classList.remove("hide_card");
    }
}

function activeBtn_background(active, id1,id2,id3){
    document.getElementById(active).classList.add("active");
    document.getElementById(id1).classList.remove("active");
    document.getElementById(id2).classList.remove("active");
    document.getElementById(id3).classList.remove("active");

}


document.getElementById("events").addEventListener("click",function(){
    console.log("events clicked");
    activeBtn_background("events","heritage","adventure","all")
    filter("events")
});

document.getElementById("heritage").addEventListener("click",function(){
    console.log("heritage clicked");
    activeBtn_background("heritage","events","adventure","all")
    filter("heritage")
});

document.getElementById("adventure").addEventListener("click",function(){
    console.log("adventure clicked");
    activeBtn_background("adventure","events","heritage","all")
    filter("adventure")
});


document.getElementById("all").addEventListener("click",function(){
    console.log("all clicked");
    activeBtn_background("all","events","heritage","adventure");
    reset_filter();
});