import {Segment} from "./Segment";
import {Point} from "./Point";

test('given a segment where endpoints are the same point, then it should return zero as distance between them', () => {
    const point: Point = new Point(0, 1);
    const segment: Segment = new Segment(point, point);

    expect(typeof segment.getDistance).toEqual('function');
    expect(segment.getDistance()).toEqual(0);
});

test('given a segment where endpoints are not the same point, then it should return a distance between them that is greater than zero', () => {
    const pointA: Point = new Point(0, 1);
    const pointB: Point = new Point(0, 5);
    const segment: Segment = new Segment(pointA, pointB);

    expect(typeof segment.getDistance).toEqual('function');
    expect(segment.getDistance()).toBeGreaterThan(0);
    expect(segment.getDistance()).toEqual(4);
});
