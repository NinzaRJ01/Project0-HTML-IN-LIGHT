// For Index Of WebSite
let typeOfConceptsList = document.querySelectorAll(".TypeOfConcepts");
let isOpened = true;
let conceptsList = document.querySelectorAll(".Concepts");
for(let i=0;i<typeOfConceptsList.length;i++){
    typeOfConceptsList[i].addEventListener('click',(e)=>{
        if(isOpened){
            for(let i=0;i<conceptsList.length;i++){
                conceptsList[i].style.display="none"
            }
            isOpened=false;
            
        }
        else{
        
            for(let i=0;i<conceptsList.length;i++){
                conceptsList[i].style.display="flex"
            }
            isOpened=true;
        }
        e.stopPropagation;
    });
    
}