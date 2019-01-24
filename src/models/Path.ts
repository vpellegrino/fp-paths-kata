import {Segment} from "./Segment";
import {Point} from "./Point";
import * as _ from 'lodash';

export class Path {
    segments: Array<Segment>;

    public constructor(segments: Array<Segment>) {
        this.segments = segments;
    }

    public toString(): string {
        return `[segments: ${this.segments}]`;
    }

    public getDistance(): number {
        return _.reduce(this.segments, function (distanceSum, segment) {
            const distance = segment ? segment.getDistance() : 0;
            return distanceSum + distance;
        }, 0);
    }

    public getStops(): Array<Point> {
        return _.uniq(
            _.flatMap(this.segments, function (segment) {
                return [segment.origin, segment.destination];
            }));
    }

}