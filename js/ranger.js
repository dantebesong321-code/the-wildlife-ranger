class Ranger {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./assets/ranger.png";
    gameSpaceNode.append(this.node); // as soon as element is created, ad to screen.

    this.x = 670;
    this.y = 350;
    this.width = 230;
    this.height = 120;

    //initial adjustment of styles
    this.node.style.width = `${this.width}px`;
    this.node.style.width = `${this.height}px`;

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    this.gravitySpeed = 5;
    this.jumpSpeed = 150;
  }

  gravity() {
    this.y += this.gravitySpeed;
    this.node.style.top = `${this.y}px`;
  }

  jump() {
    this.y -= this.jumpSpeed;
    this.node.style.top = `${this.y}px`;
  }
}
