
class BonusBox {
  constructor() {
      this.node = document.createElement("img");
    this.node.src = "./assets/BonusBox.png";
    gameSpaceNode.append(this.node); // as soon as element is created, ad to screen.

     this.x = 1800;
    this.y = 770;
    this.width = 130;
    this.height = 110;
    this.speed = 12;

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

