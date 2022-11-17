import { Entity } from "../Entity";

export abstract class EntityService {
    public static print(en: Entity) {
        console.log('\n---Printing Entity---\n');
        console.log('key: ' + en.key);
        console.log('value: ' + en.value);
        console.log('level: ' + en.level);
        this.PrintValues(en);
        console.log('parentIndex: ' + en.parentIndex);
        console.log('isArray: ' + en.isArray);
    }

    private static PrintValues(en: Entity) {
        let index = 0;
        console.log('---Printing values---');
        if (en.values != null) {
            for (let i = 0; i < en.values.size; i++) {
                console.log('value[' + index + ']: ' + en.values.get(index));
                index++;
            }
        }
    }

    public static printMeta(en: Entity) {
        console.log('\n---Printing Entity Meta---\n');
        console.log('key: ' + en.key);
        console.log('level: ' + en.level);
        console.log('parentIndex: ' + en.parentIndex);
        console.log('isArray: ' + en.isArray);
    }

}