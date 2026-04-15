class RangerHealthBar{
  constructor() {
    this.node = document.createElement("img");
    gameSpaceNode.append(this.node); // as soon as element is created, ad to screen.

    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.maxHealth = maxHealth;
    this.maxWidth = w;
    this.health = maxHealth;
    this.color = this.color;


    //initial adjustment of styles
    this.node.style.width = `${this.width}px`;
    this.node.style.height= `${this.height}px`;

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.right = `${this.x}px`;
  }
}