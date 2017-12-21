function Shape(sideLengths) {
    this._name = "";
    this._sideLenghts = sideLengths;
}

Shape.prototype.getPerimeter = function() {
    return this._sideLenghts.reduce(function(prevVal, val) {
        return prevVal + val;
    });
};

Shape.prototype.getArea = function() {
    return this._sideLengths[0] * this._sideLenghts[1];
};

function Rectangle(sideLengths) { 
    Shape.call(this, [sideLengths[0], sideLengths[1], sideLengths[0], sideLengths[1]]);
    this._name = "Prostokąt";
}

function Square (sideLength) {
    Rectangle.call(this, [sideLength, sideLength]);

    this._name = "Kwadrat";
}

var shape1 = new Rectangle([20, 10]);