function drawAvatar() {
    var gameCanvas = document.getElementById("gameCanvas");
    var avatarImage = new Image();
     
    avatarImage.src = "img/avatar.png";
    gameCanvas.getContext("2d").drawImage(avatarImage, Math.random() * 100, Math.random() * 100);
     
    gameCanvas.addEventListener("mousemove", redrawAvatar);
}
 
function redrawAvatar(mouseEvent) {
    var gameCanvas = document.getElementById("gameCanvas");
    var avatarImage = new Image();
    var enemyImage = new Image();
     
    avatarImage.src = "img/avatar.png";
    enemyImage.src = "img/enemy.png";
    gameCanvas.width = 400; //this erases the contents of the canvas
    gameCanvas.getContext("2d").drawImage(avatarImage, mouseEvent.offsetX, mouseEvent.offsetY);
    gameCanvas.getContext("2d").drawImage(enemyImage, 250, 150);
    

     if (mouseEvent.offsetX > 150 && mouseEvent.offsetX < 250) {
        alert("Stay out of the middle!");
    }

}