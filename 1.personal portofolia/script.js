var titleLinks = document.getElementsByClassName("title-links");
var tableContents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");

function opentab(tabname){
    for(titleLink of titleLinks){
        titleLink.classList.remove("active-link");
    }

    for(tableContent of tableContents){
        tableContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openmenu(){
    sidemenu.style.right="0"
}

function closemenu(){
    sidemenu.style.right="-200px";
}