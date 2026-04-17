class Ranger {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./assets/ranger.png";
    gameSpaceNode.append(this.node); // as soon as element is created, ad to screen.

    this.x = 350;
    this.y = 410;
    this.width = 70;
    this.height = 110;
    this.gravitySpeed = 10;
    this.jumpSpeed = 465;
    this.isMovingDown = true;

    //initial adjustment of styles
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

  }

  gravity() {
    if (this.y > 430) { return null}
    this.y += this.gravitySpeed;
    this.node.style.top = `${this.y}px`;
    

  }
  

  jump() {
     if (this.y < 130) { return null}
    this.y -= this.jumpSpeed;
    this.node.style.top = `${this.y}px`;
  }
 

}
