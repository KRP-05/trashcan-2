class trashcan{

    constructor(x,y){
       this.x = x;
       this.y = y;
       this.trashcanWidth = 200;
       this.trashcanHeight = 200;
       this.wallThickness = 20;
       this.angle = 0;
       this.bottomBody = Bodies.rectangle(this.x,this.y,this.trashcanWidth,this.wallThickness,{isStatic:true})
       this.leftBody = Bodies.rectangle(this.x-this.trashcanWidth/2,this.y-this.trashcanHeight/2,this.wallThickness,this.trashcanHeight,{isStatic:true})
       Matter.Body.setAngle(this.leftBody,this.angle)
       this.rightBody = Bodies.rectangle(this.x+this.trashcanWidth/2,this.y-this.trashcanHeight/2,this.wallThickness,this.trashcanHeight,{isStatic:true})
       Matter.Body.setAngle(this.rightBody,-1*this.angle)
    this.imgbody = Bodies.rectangle(this.x,this.y-100,200,200)
    this.image = loadImage("dustbingreen.png")
       World.add(world,this.bottomBody)
       World.add(world,this.leftBody)
       World.add(world,this.rightBody)
       
    }

display(){
    var posbottom =this.bottomBody.position;
    var posleft =this.leftBody.position;
    var posright =this.rightBody.position;
    var posimg = this.imgbody.position
    //var angle = this.body.angle;
    push();
    translate(posbottom.x, posbottom.y);
    imageMode(CENTER);
    stroke(255)
    angleMode(RADIANS)
    fill("white");
    rect(0, 0, this.trashcanWidth, this.wallThickness);
    pop();


    push();
    translate(posleft.x, posleft.y);
    rectMode(CENTER);
    stroke(255)
    angleMode(RADIANS)
    fill("white");
    rotate(this.angle)
    rect(0, 0, this.wallThickness, this.trashcanHeight);
    pop();


   push();
    translate(posright.x, posright.y);
    rectMode(CENTER);
    stroke(255)
    angleMode(RADIANS)
    fill("white");
    rotate(1*this.angle)
    rect(0, 0, this.wallThickness, this.trashcanHeight);
    pop();

    push();
    translate(posimg.x, posimg.y);
    imageMode(CENTER);
    stroke(255)
    angleMode(RADIANS)
    fill("brown");
    rotate(this.angle)
    
    image(this.image,0, 0,200,200);
    pop();
    
}
}