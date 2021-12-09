class CannonBall{
    constructor(x,y) {
        var options={
            restitution:08,
            friction:1.0,
            isStatic:true,
            density:1.0
        }
    
    this.r=40
    this.ball=Bodies.circle(x,y,this.r,options)
    World.add(world,this.ball)
}
display(){
    fill("red")
    ellipse(this.ball.position.x,this.ball.position.y,40,40);
}
}