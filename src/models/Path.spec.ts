import {Point} from "./Point";
import {Segment} from "./Segment";
import {Path} from "./Path";

describe('Path model', () => {

    describe('given a path with no segment', () => {
        test('its distance should be zero', () => {
            const path: Path = new Path(null);

            expect(typeof path.getDistance).toEqual('function');
            expect(path.getDistance()).toEqual(0);
        });

        test('no stops are present', () => {
            const path: Path = new Path(null);

            expect(typeof path.getStops).toEqual('function');
            expect(path.getStops().length).toEqual(0);
        });
    });

    describe('given a path with segments AB - BC', () => {
        test('its distance should be their distances sum', () => {
            const {path} = buildABCPath();

            expect(typeof path.getDistance).toEqual('function');
            expect(path.getDistance()).toEqual(8);
        });

        test('its stops are A, B, C', () => {
            const {pointA, pointB, pointC, path} = buildABCPath();

            expect(typeof path.getStops).toEqual('function');
            expect(path.getStops().length).toEqual(3);
            expect(path.getStops()).toContain(pointA);
            expect(path.getStops()).toContain(pointB);
            expect(path.getStops()).toContain(pointC);
        });

        function buildABCPath() {
            const pointA: Point = new Point(0, 1);
            const pointB: Point = new Point(0, 5);
            const pointC: Point = new Point(0, 9);

            const segmentAB: Segment = new Segment(pointA, pointB);
            const segmentBC: Segment = new Segment(pointB, pointC);

            const path: Path = new Path([segmentAB, segmentBC]);
            return {pointA, pointB, pointC, path};
        }
    });

});