class Ranger {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./assets/ranger.png";
    gameSpaceNode.append(this.node); // as soon as element is created, ad to screen.

    this.x = 590;
    this.y = 570;
    this.width = 100;
    this.height = 180;
    this.gravitySpeed = 12;
    this.jumpSpeed = 455;
    this.isMovingDown = true;

    //initial adjustment of styles
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

  }

  gravity() {
    if (this.y > 720) { return null}
    this.y += this.gravitySpeed;
    this.node.style.top = `${this.y}px`;
    

  }
  

  jump() {
     if (this.y < 250) { return null}
    this.y -= this.jumpSpeed;
    this.node.style.top = `${this.y}px`;
  }
 


}
