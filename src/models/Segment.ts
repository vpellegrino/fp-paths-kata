import {Point} from "./Point";

export class Segment {
    origin: Point;
    destination: Point;

    public constructor(origin: Point, destination: Point) {
        this.origin = origin;
        this.destination = destination;
    }

    public toString(): string {
        return `[origin: ${this.origin}, destination: ${this.destination}]`;
    }

    public getDistance(): number {
        const deltaX = this.origin.x - this.destination.x;
        const deltaY = this.origin.y - this.destination.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }

}