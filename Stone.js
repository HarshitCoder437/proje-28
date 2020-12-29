class Stone {
    constructor(x,y){
        var options = {
            isStatic: true,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,30,options);
        World.add(world,this.body);
        this.image = loadImage("stone.png");
    }
    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,30,30);
        
    }
}