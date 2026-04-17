class Poacher{
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./assets/poacher-truck.png";
    gameSpaceNode.append(this.node); // as soon as element is created, ad to screen.

    this.x = 900;
    this.y = 410;
    this.width = 130;
    this.height = 250;
    this.speed = 10;

    //initial adjustment of styles
    this.node.style.width = `${this.width}px`;
    this.node.style.width = `${this.height}px`;

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.right = `${this.x}px`;

  }

  automaticMovement(){
    this.x -= this.speed
    this.node.style.left = `${this.x}px`;
  }
  
}
