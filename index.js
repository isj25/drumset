for(var i =0;i<document.querySelectorAll(".drum").length;i++){
    
    document.querySelectorAll(".drum")[i].addEventListener('click',clickHandler);
}

function clickHandler(){
    var ButtonInnerHTML = this.innerHTML;
    makeSound(ButtonInnerHTML);
   
}


document.addEventListener("keydown",function(event){
    makeSound(event.key);
});




function makeSound(key){
     switch(key){
        case "a":{
            var sound = new Audio("tom-2.mp3");
            sound.play();
            break;
            
        }
        case "s":{
             var sound1 = new Audio("tom-3.mp3");
            sound1.play();
             break;
            
        }
        case "d":{
             var sound2 = new Audio("tom-4.mp3");
            sound2.play();
             break;
            
        }
        case "w":{
             var sound3 = new Audio("tom-1.mp3");
            sound3.play();
             break;
            
        }
        case "j":{
             var sound4 = new Audio("snare.mp3");
            sound4.play();
             break;
        }
        case "k":{
             var sound5 = new Audio("crash.mp3");
            sound5.play();
             break;
            
        }
        case "l":{
             var sound6 = new Audio("kick-bass.mp3");
            sound6.play();
             break;
            
        }
        
    }
}