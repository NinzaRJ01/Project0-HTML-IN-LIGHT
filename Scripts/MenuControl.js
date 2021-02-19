// For Information Section WebPages
let menu = document.querySelector(".Menu");
let isOpened = true;
let menuContentList = document.querySelectorAll(".MenuContent");
menu.addEventListener('click',()=>{
    
    if(isOpened){
        for(let i=0;i<menuContentList.length;i++){
            menuContentList[i].style.display="none";
        }
        isOpened=false;
    }
    else{
        for(let i=0;i<menuContentList.length;i++){
            menuContentList[i].style.display="flex";
        }
        isOpened=true;
    }
})