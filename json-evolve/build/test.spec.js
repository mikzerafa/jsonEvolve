"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
require("chai");
const jsonEvolve_1 = __importDefault(require("./jsonEvolve"));
const mock_1 = __importDefault(require("./mock"));
describe('test', () => {
    it('test1', () => {
        //je.assert.Print(randomJson.randomJSON)
        //je.assert.Print(randomJson.randomJSON)
        //je.assert.Print(randomJson.randomJSON2)
        //je.assert.Print(randomJson.randomJSON8);
        //je.assert.Print(randomJson.randomJSON5)
        //je.assert.PrintO(randomJson.randomJSON6)
        //je.assert.Print(randomJson.randomJSON7)
        //je.assert.Print(randomJson.randomJSON8)
        // const keys = je.get.keys(randomJson.tempJSON);
        // console.log(keys[1]);
        //je.assert.Print(randomJson.tempJSON);
        //print.printArray(je.get.keys(randomJson.tempJson));
        //print.printArray(je.get.keys(randomJson.tempJson))
        jsonEvolve_1.default.assert.KeyContainsData(mock_1.default.tempJson, "ctas");
        //console.log('Second key contains data: ' + je.assert.keyContainsData(randomJson.randomJSON, "address"))
        // let map = new ArrayEvolve();
        // let found = 0;
        // let i = 0;
        // while (true) {
        //     map.add(i);
        //     i = i + 1;
        //     if (map.entities.length > found) {
        //         console.log('successfully added entities');
        //         console.log('map size: ' + map.size());
        //         found++;
        //     }
        // }
        //console.log('received: ' + je.get.valueAtIndex(randomJson.randomJSON, "users", 1));
        //console.log('Received (parent index) ' + je.get.valueAtIndexWithParentIndex(randomJson.randomJSON7, "users", 1, 4))
        //const keys: string[] = je.get.keys(randomJson.randomJSON9);
        //print.printArray(keys);
    });
});
