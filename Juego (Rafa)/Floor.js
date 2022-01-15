class Floor{
    constructor(x,y, width, heigth){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,heigth);
        this.width = width;
        this.heigth = heigth;
        World.add(world,this.body);
    }
    display(){
        rectMODE(CENTER)
        rect(this.body.position.x, this.body.position.y, this.width, this.heigth);

    }
}