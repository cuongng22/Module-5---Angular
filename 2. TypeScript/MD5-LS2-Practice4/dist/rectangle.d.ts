import { Shape } from "./shape";
export declare class Rectangle extends Shape implements IArea {
    constructor(x: number, y: number);
    area(): number;
}
