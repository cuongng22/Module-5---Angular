import {Shape} from "./shape";

export class Rectangle extends Shape implements IArea {

    constructor(x: number, y: number) {
        super(x, y);
    }

    area(): number {
        return this.x * this.y;
    }

}