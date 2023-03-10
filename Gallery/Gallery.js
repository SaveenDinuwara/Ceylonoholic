function pagecolor(color){
    document.body.style.background=color;
    }
    
function textcolor(color){
    console.log("Function Called");
    document.getElementById("h1").style.color=color;

    document.getElementById("changeColor").style.color=color;
    
    document.getElementById("description").style.color=color;
    document.body.style.color=color;
}

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
     
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
    }

function description_elephant(){
    /*console.log("elehant called");*/
    var elephant="<br><b><u>The Sri Lankan Elephant</u><br> Sri Lankan elephants were quite common and widely distributed across the tear-shaped island, located at the edge of India’s southern tip. Currently, they face habitat loss and degradation of their natural habitat due to forest clearing. In addition, they are now unable to follow their migratory routes as a result of human development. The Sri Lankan elephant is identified by patches of depigmentation, which are portions of skin without color, found on the ears, face, trunk and belly of the animal. This elephant is the largest and meanwhile the darkest of 4 sub-species of Asian elephant.";
    document.getElementById("description").innerHTML= elephant;
    document.getElementById("img1").style.opacity="100%";
    document.getElementById("img2").style.opacity="50%";
    document.getElementById("img3").style.opacity="50%";
    document.getElementById("img4").style.opacity="50%";
    document.getElementById("img5").style.opacity="50%";
}

function description_leopard(){
    var leopard="<br><b><u>The Sri Lankan leopard</u><br> (Panthera pardus kotiya) is a leopard subspecies native to Sri Lanka. It was first described in 1956 by Sri Lankan zoologist Paules Edward Pieris Deraniyagala. Since 2020, the Sri Lankan leopard has been listed as vulnerable on the IUCN Red List, as the population is estimated at less than 800 mature individuals, and is probably declining.";
    document.getElementById("description").innerHTML= leopard;
    document.getElementById("img1").style.opacity="50%";
    document.getElementById("img2").style.opacity="100%";
    document.getElementById("img3").style.opacity="50%";
    document.getElementById("img4").style.opacity="50%";
    document.getElementById("img5").style.opacity="50%";
}

function description_toque(){
    var toque="<br><b><u>The Toque Macaque</u><br>The toque macaque is a reddish-brown-coloured Old World monkey endemic to Sri Lanka, where it is known as the rilewa or rilawa Its name refers to the whorl of hair at the crown of the head, reminiscent of a brimless toque cap.";
    document.getElementById("description").innerHTML= toque;
    document.getElementById("img1").style.opacity="50%";
    document.getElementById("img2").style.opacity="50%";
    document.getElementById("img3").style.opacity="100%";
    document.getElementById("img4").style.opacity="50%";
    document.getElementById("img5").style.opacity="50%";
}

function description_bear(){
    var bear="<br><b><u>The Sri Lankan Sloth Bear</u><br>The Sri Lankan Sloth Bear (Melursus ursinus inornatus) is a subspecies of the sloth bear which is found mainly in lowland dry forests in the island of Sri Lanka.";
    document.getElementById("description").innerHTML= bear;
    document.getElementById("img1").style.opacity="50%";
    document.getElementById("img2").style.opacity="50%";
    document.getElementById("img3").style.opacity="50%";
    document.getElementById("img4").style.opacity="100%";
    document.getElementById("img5").style.opacity="50%";
}

function description_deer(){
    var deer="<br><b><u>The Sri Lankan Sambar</u><br>The Sri Lankan sambar or Indian sambar -  ගෝනා in Sinhala, is a subspecies of the sambar that lives in India and Sri Lanka. This subspecies is one of the largest sambar subspecies, with the largest antlers both in size and in body proportions. Large males weight up to 270–280 kg. Sambar live in both lowland dry forests and mountain forests. Large herds of sambar roam the Horton Plains National Park, where it is the most common large mammal.";
    document.getElementById("description").innerHTML= deer;
    document.getElementById("img1").style.opacity="50%";
    document.getElementById("img2").style.opacity="50%";
    document.getElementById("img3").style.opacity="50%";
    document.getElementById("img4").style.opacity="50%";
    document.getElementById("img5").style.opacity="100%";
}
