//function vatra this hunxa jasla hamlai click garda element dinaxa hai guays

//function call garna kojda chai () lai call garda call vako vayai garxa so
//() so yestyo rakina la
let button = document.querySelectorAll("button");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    var Buttonlist = this.innerHTML;
    console.log(Buttonlist);
    switch (Buttonlist) {
      case "w": {
        let music = new Audio("sounds/crash.mp3");
        music.play();
        break;
      }
      case "a": {
        let music = new Audio("sounds/kick-bass.mp3");
        music.play();
        break;
      }
      case "s": {
        let music = new Audio("sounds/snare.mp3");
        music.play();
        break;
      }
      case "d": {
        let music = new Audio("sounds/tom-1.mp3");
        music.play();
        break;
      }
      case "j": {
        let music = new Audio("sounds/tom-2.mp3");
        music.play();
        break;
      }
      case "k": {
        let music = new Audio("sounds/tom-3.mp3");
        music.play();
        break;
      }
      case "l":
        {
          let music = new Audio("sounds/tom-4.mp3");
          music.play();
          break;
        }
    }
  });
}
