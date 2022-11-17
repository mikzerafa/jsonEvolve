"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityService = void 0;
class EntityService {
    static print(en) {
        console.log('\n---Printing Entity---\n');
        console.log('key: ' + en.key);
        console.log('value: ' + en.value);
        console.log('level: ' + en.level);
        this.PrintValues(en);
        console.log('parentIndex: ' + en.parentIndex);
        console.log('isArray: ' + en.isArray);
    }
    static PrintValues(en) {
        let index = 0;
        console.log('---Printing values---');
        if (en.values != null) {
            for (let i = 0; i < en.values.size; i++) {
                console.log('value[' + index + ']: ' + en.values.get(index));
                index++;
            }
        }
    }
    static printMeta(en) {
        console.log('\n---Printing Entity Meta---\n');
        console.log('key: ' + en.key);
        console.log('level: ' + en.level);
        console.log('parentIndex: ' + en.parentIndex);
        console.log('isArray: ' + en.isArray);
    }
}
exports.EntityService = EntityService;
