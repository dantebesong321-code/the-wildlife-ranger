class Tree{
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./assets/foreground tree.png";
    gameSpaceNode.append(this.node); // as soon as element is created, ad to screen.

    this.x = 1200;
    this.y = 100;
    this.width = 500;
    this.height = 1000;
    // this.speed = 10;

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