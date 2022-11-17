"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonDeconstructedService = void 0;
const EntityService_1 = require("./EntityService");
class JsonDeconstructedService {
    static print(entities) {
        entities.print(EntityService_1.EntityService);
    }
    static GetEntityWithKey(entities, key) {
        let output;
        const fun = (en) => {
            if (en.key == key) {
                output = en;
            }
            return output;
        };
        output = entities.foreach(fun);
        return output;
    }
    static GetEntityWithKeyWithParentIndex(entities, key, parentIndex, index) {
        let output;
        const fun = (en) => {
            if (en.key == key && en.parentIndex == parentIndex) {
                output = en;
            }
            return output;
        };
        output = entities.foreach(fun);
        return output;
    }
    static GetEntityWithKeyOfParent(entities, key, parentKey) {
        let output;
        const fun = (en) => {
            if (en.parent != null) {
                if (en.parent.key == parentKey && en.key == key) {
                    output = en;
                }
            }
            return output;
        };
        output = entities.foreach(fun);
        return output;
    }
    static printMeta(entities) {
        entities.printMeta(EntityService_1.EntityService);
    }
    static GetEntityWithKeyOfAncestor(entities, key, ancestorKey) {
        let output;
        let workingWithEntity;
        let foundKey = false;
        const fun = (en) => {
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
                } while (workingWithEntity.parent != null && foundKey == false);
            }
            return output;
        };
        output = entities.foreach(fun);
        return output;
    }
}
exports.JsonDeconstructedService = JsonDeconstructedService;
