class ForeGroundTree{
constructor(type, yPosition){
  this.type = type;

   this.node = document.createElement("img");
   if (this.type === "up"){
    this.node.src = this.node.src = "./assets/foreground-tree.png"
   }
   else if (this.type === "down"){
     this.node.src = this.node.src = "./images/poacher-truck.png"
   };

    gameBoxNode.append(this.node); // as soon as element is created, ad to screen.

    this.x = 540;
    this.y = yPosition;
    this.width = 50;
    this.height = 35;

    //initial adjustment of styles
    this.node.style.width = `${this.width}px`;
    this.node.style.width = `${this.height}px`;

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    this.speed = 2;
  
  }

  automaticMovement(){
    this.x -= this.speed
    this.node.style.left = `${this.x}px`;
  }

}