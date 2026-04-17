class Traps{
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./assets/box-trap.png";
    gameSpaceNode.append(this.node); // as soon as element is created, ad to screen.

    this.x = 900;
    this.y = 460;
    this.width = 90;
    this.height = 70;
    this.speed = 9;

    //initial adjustment of styles
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.right = `${this.x}px`;

  }

  automaticMovement(){
    this.x -= this.speed
    this.node.style.left = `${this.x}px`;
  }
  
}
