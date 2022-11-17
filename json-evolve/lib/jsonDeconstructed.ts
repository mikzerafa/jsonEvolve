
import { Entity } from './Entity';
import { ArrayEvolve } from './ArrayEvolve';
export class JsonDeconstructed {
    readonly entities: ArrayEvolve<number, Entity>;

    constructor(entities: ArrayEvolve<number, Entity>) {
        this.entities = entities;
    }


}