var x,y,w,h;

class blocks {
    constructor (x,y,w,h) {
    var opt = {
    isStatic:true,
        
  }
    this.body = Bodies.rectangle(x,y,w,h,opt);

 }
 display (w,h) {
     var pos = this.body.position;
     fill("red");
     rectMode(CENTER);
     rect(pos.x,pos.y,w,h);
 }
}