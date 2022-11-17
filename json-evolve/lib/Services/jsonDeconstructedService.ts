import { Entity } from "../Entity";
import { EntityService } from "./EntityService";
import { ArrayEvolve } from "../ArrayEvolve";


export abstract class JsonDeconstructedService {
    static print(entities: ArrayEvolve<number, Entity>) {
        entities.print(EntityService);
    }

    static GetEntityWithKey(entities: ArrayEvolve<number, Entity>, key: string) {
        let output: Entity | undefined;
        const fun = (en: Entity) => {
            if (en.key == key) {
                output = en
            }
            return output;
        }

        output = entities.foreach(fun)

        return output;
    }

    static GetEntityWithKeyWithParentIndex(entities: ArrayEvolve<number, Entity>, key: string, parentIndex: number, index: number) {
        let output: Entity | undefined;
        const fun = (en: Entity) => {
            if (en.key == key && en.parentIndex == parentIndex) {
                output = en;
            }
            return output;

        }
        output = entities.foreach(fun)

        return output;
    }

    static GetEntityWithKeyOfParent(entities: ArrayEvolve<number, Entity>, key: string, parentKey: string) {
        let output: Entity | undefined;

        const fun = (en: Entity) => {
            if (en.parent != null) {
                if (en.parent.key == parentKey && en.key == key) {
                    output = en;
                }
            }

            return output;
        }

        output = entities.foreach(fun);

        return output;
    }

    static printMeta(entities: ArrayEvolve<number, Entity>) {
        entities.printMeta(EntityService);
    }


    static GetEntityWithKeyOfAncestor(entities: ArrayEvolve<number, Entity>, key: string, ancestorKey: string) {
        let output: Entity | undefined;
        let workingWithEntity: Entity;
        let foundKey = false;

        const fun = (en: Entity) => {
            workingWithEntity = en;
            if (workingWithEntity.key == key) {
                do {
                    if (workingWithEntity.parent != null) {
                        workingWithEntity = workingWithEntity.parent;
                        if (workingWithEntity.key == ancestorKey) {
                            foundKey = true;
                            output = en;
                        }
                    }
                } while (workingWithEntity.parent != null && foundKey == false)
            }

            return output;
        }

        output = entities.foreach(fun);

        return output;
    }
}