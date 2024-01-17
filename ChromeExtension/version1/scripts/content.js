let body=document.querySelector('body');

//button creation
let btnQurious=document.createElement("button");
btnQurious.setAttribute("id","btnQurious");
btnQurious.addEventListener("click",doSomething);
body.appendChild(btnQurious);


//speech convertor
let speechRecognition=new webkitSpeechRecognition();
speechRecognition.continuous=true;
speechRecognition.interimResults=true;
speechRecognition.lang="en-in";

//store the transcript
let transcript="";
speechRecognition.onresult=function(event){
    transcript="";
    for(let i=event.resultIndex;i<event.results.length;i++){
        transcript+=event.results[i][0].transcript;
    } 
};

//keyboard shortcut
document .addEventListener("keydown",handlekbd);

function handlekbd(event){
    if(event.key==="q"){
        btnQurious.click();
    }
}




// for listening and stoping
function doSomething(){
    
    if(btnQurious.hasAttribute("listening")===false){
        btnQurious.setAttribute("listening","true");
        speechRecognition.start();
    }
    else{
        btnQurious.removeAttribute("listening");
        speechRecognition.stop();
//popup creation
        const myPopup= new Popup(
            {
                id:"my-popup",
                titleColor: "#FFFFFF",
                textColor: "#black",
                title:"here what you said:",
                backgroundColor: "blueviolet",
                content:transcript,
                borderWidth: ".15em",
                borderColor: "#FFFFFF",
                textShadow: "0 0 .3em #000000bb",
            }
        );
        //showing popup 
        myPopup.show();
    }
}