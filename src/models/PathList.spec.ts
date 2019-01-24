import {PathList} from "./PathList";
import {Point} from "./Point";
import {Segment} from "./Segment";
import {Path} from "./Path";

describe('PathList model', () => {

    describe('given an empty path list', () => {
        const pathList: PathList = new PathList(null);

        test('its shortest path is not defined', () => {
            expect(typeof pathList.getShortest).toEqual('function');
            expect(pathList.getShortest()).toBeUndefined();
        });

        describe('filtering it with a stop point', () => {
            test('path list is still empty', () => {
                expect(typeof pathList.filterWithStops).toEqual('function');
                expect(pathList.filterWithStops([new Point(0, 0)]).paths).toEqual([]);
            });
        });
    });

    describe('given the path list [AB - BC] and [AC]', () => {
        const pointA: Point = new Point(0, 10);
        const pointB: Point = new Point(0, 20);
        const pointC: Point = new Point(10, 20);

        const segmentAB: Segment = new Segment(pointA, pointB);
        const segmentBC: Segment = new Segment(pointB, pointC);
        const segmentAC: Segment = new Segment(pointA, pointC);

        const pathAB_BC: Path = new Path([segmentAB, segmentBC]);
        const pathAC: Path = new Path([segmentAC]);

        const pathList: PathList = new PathList([pathAB_BC, pathAC]);

        test('its shortest path is [AC]', () => {
            expect(typeof pathList.getShortest).toEqual('function');
            expect(pathList.getShortest()).toBeDefined();
            expect(pathList.getShortest()).toEqual(pathAC);
        });

        describe('filtering it with no stop point', () => {
            test('path list is still the same', () => {
                expect(typeof pathList.filterWithStops).toEqual('function');
                expect(pathList.filterWithStops([])).toEqual(pathList);
            });
        });

        describe('filtering it with stop points', () => {
            test('path list gets filtered correctly', () => {
                expect(typeof pathList.filterWithStops).toEqual('function');
                expect(pathList.filterWithStops([pointA, pointB])).toEqual(new PathList([pathAB_BC]));
            });
        });
    });

});