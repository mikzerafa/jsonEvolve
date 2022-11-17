"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    constructor(key, value, level, parent, parentIndex, values) {
        this.key = key;
        this.value = value;
        this.level = level;
        this.parent = parent;
        this.values = values;
        this.parentIndex = parentIndex;
        this.isArray = false;
        if (values != undefined) {
            this.isArray = true;
        }
    }
}
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map