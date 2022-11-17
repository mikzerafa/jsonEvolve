"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.print = void 0;
class print {
    static printArray(arr) {
        for (let i of arr) {
            console.log(i);
        }
    }
    static printMap(map) {
        for (let i = 0; i < map.size; i++) {
            console.log(map.get(i) + "\n");
        }
    }
}
exports.print = print;
//# sourceMappingURL=print.js.map