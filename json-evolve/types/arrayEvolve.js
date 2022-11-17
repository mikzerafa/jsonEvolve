"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayEvolve = void 0;
class ArrayEvolve {
    constructor() {
        this.entities = new Array();
        ;
    }
    size() {
        let output = 0;
        if (this.entities.length > 0) {
            output = ((this.entities.length - 1) * 16777215) + this.entities[this.entities.length - 1].size;
        }
        return output;
    }
    foreach(fun) {
        let output;
        this.entities.forEach((map) => {
            for (let i = 0; i < map.size; i++) {
                output = fun(map.get(i));
            }
        });
        return output;
    }
    print(printingService) {
        for (let i = 0; i < this.entities.length; i++) {
            //console.log('entities length: ' + this.entities.length);
            //console.log('entities size : ' + this.entities.length);
            for (let x = 0; x < this.entities[i].size; x++) {
                //console.log('Map size: ' + this.entities[i].size)
                printingService.print(this.entities[i].get(x));
            }
        }
    }
    printMeta(printingService) {
        for (let i = 0; i < this.entities.length; i++) {
            for (let x = 0; x < this.entities[i].size; x++) {
                printingService.printMeta(this.entities[i].get(x));
            }
        }
    }
    add(value) {
        if (value != undefined) {
            // console.log('adding entity' + this.entities.length)
            // console.log('adding value: ' + JSON.stringify(value));
            if (this.entities.length < 1) {
                //console.log('adding first value');
                const map = new Map();
                map.set(0, value);
                this.entities.push(map);
                //console.log('this . entities[0].size: ' + this.entities[0].size);
            }
            else {
                //get last index of entities
                const lastIndex = this.entities.length - 1;
                //get size of map
                const sizeOfMap = this.entities[lastIndex].size;
                //console.log('Size of map: ' + sizeOfMap);
                //check if less than 16777216
                if (sizeOfMap <= 16777215) {
                    // console.log('adding another entity');
                    //if yes  add to entities at index
                    //console.log('adding to index: ' + (sizeOfMap));
                    this.entities[lastIndex].set(sizeOfMap, value);
                }
                else {
                    //if no create a new index in entities
                    //Add entity in new index
                    const map = new Map();
                    map.set(0, value);
                    this.entities.push(map);
                }
            }
        }
    }
    get(index) {
        let layer = Math.floor(index / 16777215);
        index = index % 16777215;
        return this.entities[layer].get(index);
    }
}
exports.ArrayEvolve = ArrayEvolve;
//# sourceMappingURL=arrayEvolve.js.map