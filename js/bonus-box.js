class BonusBox{
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./assets/box-with-animals.png";
    gameSpaceNode.append(this.node); // as soon as element is created, ad to screen.

    this.x = 1800;
    this.y = 820;
    this.width = 100;
    this.height = 100;
    this.speed = 13;

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
