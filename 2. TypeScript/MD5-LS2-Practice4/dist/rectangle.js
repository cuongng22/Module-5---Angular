"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const shape_1 = require("./shape");
class Rectangle extends shape_1.Shape {
    constructor(x, y) {
        super(x, y);
    }
    area() {
        return this.x * this.y;
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=rectangle.js.map