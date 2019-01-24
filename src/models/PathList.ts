import {Path} from "./Path";
import * as _ from 'lodash';
import {Point} from "./Point";

export class PathList {
    paths: Array<Path>;

    public constructor(paths: Array<Path>) {
        this.paths = paths;
    }

    public toString(): string {
        return `[paths: ${this.paths}]`;
    }

    public getShortest(): Path | undefined {
        return _.minBy(this.paths, path => path.getDistance());
    }

    public filterWithStops(stopPoints: Array<Point>): PathList {
        return new PathList(_.filter(this.paths, path => _.difference(stopPoints, path.getStops()).length === 0));
    }
}
