import { Entity } from './Entity';
import { ArrayEvolve } from "./ArrayEvolve";
export declare class JsonParser {
    private _entities;
    constructor();
    FindAncestorKey(parentEntity: Entity): string;
    ParseLayer(json: string, level?: number, parentEntity?: Entity, parentIndex?: number): string;
    GetEntities(): ArrayEvolve<number, Entity>;
}
//# sourceMappingURL=JsonParser.d.ts.map