class Divider {

    constructor(x, y, width, height) {
        var options = {

            isStatic: true

        }

        this.Body = Bodies.rectangle(x, y, width, height, options)

        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }

    display() {

        var pos = this.Body.position;
        rectmode(CENTER);
        push();

        fill("white");
        strokeWeight(4);
        rect(pos.x, pos.y, this.width, this.height);

        pop();

    }



};