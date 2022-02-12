class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        this.v = 225;

        Matter.World.add(world,this.body);
      }
      display(){
        if(this.body.speed <3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(BlocksI, 0,0,this.width,this.height);
        pop();
        }
        else{
        World.remove(world, this.body);
        push();
        this.v = this.v - 5;
        tint(255,this.v);
        image(BlocksI, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
        }
      }
        score(){
          if(this.v<225 && this.v >120){
            Score++;
          }    
        }
      }

