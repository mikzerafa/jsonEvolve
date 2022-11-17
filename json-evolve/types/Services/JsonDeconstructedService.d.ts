import { Entity } from "../Entity";
import { ArrayEvolve } from "../ArrayEvolve";
export declare abstract class JsonDeconstructedService {
    static print(entities: ArrayEvolve<number, Entity>): void;
    static GetEntityWithKey(entities: ArrayEvolve<number, Entity>, key: string): Entity;
    static GetEntityWithKeyWithParentIndex(entities: ArrayEvolve<number, Entity>, key: string, parentIndex: number, index: number): Entity;
    static GetEntityWithKeyOfParent(entities: ArrayEvolve<number, Entity>, key: string, parentKey: string): Entity;
    static printMeta(entities: ArrayEvolve<number, Entity>): void;
    static GetEntityWithKeyOfAncestor(entities: ArrayEvolve<number, Entity>, key: string, ancestorKey: string): Entity;
}
//# sourceMappingURL=JsonDeconstructedService.d.ts.map