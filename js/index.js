

function preLoaderTextAnimation(callBack){
    let all = "0123456789abcdefghijklmnopqrstuvwqyzABC DEFGHIJKLMNOPQRSTUVWXYZ@!$%^&*()-=+?";

    let text = document.getElementById("preTitle");
    
    
    const FINALTEXT = "Glazer Games";
    let boolComplete = true;
    
    let myAnimation = setInterval(() => {
        boolComplete = true;
    
        let alreadyText = text.textContent;
        
        let newString = "";
        for(let i = 0 ; i < FINALTEXT.length; i++){
            
            let decide = Math.random()*200;

            if(FINALTEXT[i] === alreadyText[i] || (decide > 0 && decide <= 20)){
                newString += FINALTEXT[i];
            }else{
                let randomIndex = Math.floor(Math.random() * (all.length - 1));
                newString += all[randomIndex];
                boolComplete = false;
            }
        }
        text.textContent = newString;
    
        if(boolComplete){
            clearInterval(myAnimation);

            // wait for 1 sec and callBack
            setTimeout(() => {
                callBack();
            }, 1000);
        }
    
    }, 50);
    
}


function afterPreLoader(){
    let body = document.querySelector("body");
    body.classList.remove("preOverFlow")
    let html = document.querySelector("html");
    html.classList.remove("preOverFlow")

    let preloader = document.getElementById("preloader");
    preloader.parentElement.removeChild(preloader);
}

preLoaderTextAnimation(afterPreLoader)


// Preloader Finish Here


// For navbar to get black when scroll to half of main page
document.addEventListener("scroll",(e)=>{
    let main = document.getElementById("main");
    let height = main.getBoundingClientRect().height;

    let navOut = document.getElementById("navOut");
   


    if(window.scrollY > height / 2){
        navOut.style.setProperty("--opacity","1");
        navOut.style.border = "none";
    }else{
        navOut.style.setProperty("--opacity","0.5");
        navOut.style.border = "";
    }
    
})



// small Navbar Menu 
let navMenuIcon = document.getElementById("burger");
navMenuIcon.addEventListener("click",()=>{
    let smallNavDown = document.getElementById("smallNavDown");
    smallNavDown.classList.toggle("smallNavDownActive");
})


let social = document.getElementById("social");
social.addEventListener("click",()=>{
    let socialMore = document.getElementById("socialMore");
    socialMore.classList.toggle("smallNavDownInnerActive");

})

let smallNavDownElem = document.querySelectorAll(".clickable");
for(elem of smallNavDownElem){
      elem.addEventListener("click",()=>{
        let smallNavDown = document.getElementById("smallNavDown");
        smallNavDown.classList.toggle("smallNavDownActive");

        if(navMenuIcon.checked){
            navMenuIcon.checked = false;
        }
        
    })
}
