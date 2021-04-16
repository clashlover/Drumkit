// Detecting button press

var numberOfdrumButtons = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfdrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    // Selecting buttons inner html
    var buttonInnerHtml = this.innerHTML;

    // Adding music function
    audioPlay(buttonInnerHtml);

    // Adding animation function
    buttonAnimation(buttonInnerHtml);

  });

  // another way of writing this code

  /*   document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
        function handleClick() {     //annonmous function
            alert("I got clicked!");
        }
*/
}

// Detecting keyboard press

document.addEventListener("keydown", function(event){
  audioPlay(event.key);
  buttonAnimation(event.key);
});

//function that checks button press or keypress and plays audio file

function audioPlay(key){
  
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "l":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;

      default: console.log(buttonInnerHtml);
        break;
    }
}

//function that add animation to the buttons

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}