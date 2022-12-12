import { JsonParser } from "./JsonParser";
import { Entity } from './Entity';
import { JsonDeconstructed } from "./JsonDeconstructed";
import chai from 'chai'
import { JsonDeconstructedService } from "./Services/JsonDeconstructedService";
import { print } from "./print";
import { Console } from "console";

const assert = {
    Print: (json: string) => deconstruct(json),
    PrintMeta: (json: string) => PrintMeta(json),


    KeyContainsData: (json: string, key: string) => KeyContainsData(json, key),
    KeyWithAncestorContainsData: (json: string, key: string, ancestor: string) => KeyWithAncestorContainsData(json, key, ancestor),
    KeyWithAncestorExists: (json: string, key: string, ancestor: string) => KeyWithAncestorExists(json, key, ancestor),
    KeyExists: (json: string, key: string) => KeyExists(json, key),

    SubsetEquals: (json: string, key: string, contains: string) => SubsetEquals(json, key, contains),
    SubsetContains: (json: string, key: string, contains: string) => SubsetContains(json, key, contains),

    SubsetWithParentEquals: (json: string, key: string, parentKey: string, contains: string) => SubsetWithParentEquals(json, key, parentKey, contains),
    SubsetWithParentContains: (json: string, key: string, parentKey: string, contains: string) => SubsetWithParentContains(json, key, parentKey, contains),

    SubsetWithAncestorEquals: (json: string, key: string, ancestorKey: string, contains: string) => SubsetWithAncestorEquals(json, key, ancestorKey, contains),
    SubsetWithAncestorContains: (json: string, key: string, ancestorKey: string, contains: string) => SubsetWithAncestorContains(json, key, ancestorKey, contains),

    SubsetOfArrayAtIndexEquals: (json: string, key: string, index: number, contains: string) => SubsetOfArrayAtIndexEquals(json, key, index, contains),
    SubsetOfArrayAtIndexContains: (json: string, key: string, index: number, contains: string) => SubsetOfArrayAtIndexContains(json, key, index, contains),

    SubsetOfArrayAtIndexWithParentEquals: (json: string, key: string, index: number, parentKey: string, contains: string) => SubsetOfArrayAtIndexWithParentEquals(json, key, index, parentKey, contains),
    SubsetOfArrayAtIndexWithParentContains: (json: string, key: string, index: number, parentKey: string, contains: string) => SubsetOfArrayAtIndexWithParentContains(json, key, index, parentKey, contains),

    SubsetOfArrayAtIndexWithAncestorEquals: (json: string, key: string, index: number, ancestorKey: string, contains: string) => SubsetOfArrayAtIndexWithAncestorEquals(json, key, index, ancestorKey, contains),
    SubsetOfArrayAtIndexWithAncestorContains: (json: string, key: string, index: number, ancestorKey: string, contains: string) => SubsetOfArrayAtIndexWithAncestorContains(json, key, index, ancestorKey, contains),

    SubsetOfArrayAtIndexWithParentIndexEquals: (json: string, key: string, parentIndex: number, index: number, contains: string) => SubsetAtIndexWithParentIndexEquals(json, key, parentIndex, index, contains),
    SubsetOfArrayAtIndexWithParentIndexContains: (json: string, key: string, parentIndex: number, index: number, contains: string) => SubsetAtIndexWithParentIndexContains(json, key, parentIndex, index, contains)
}

const assertObject = {
    Print: (json: object) => deconstruct(JSON.stringify(json)),
    PrintMeta: (json: object) => PrintMeta(JSON.stringify(json)),

    KeyContainsData: (json: object, key: string) => KeyContainsData(JSON.stringify(json), key),
    KeyExists: (json: object, key: string) => KeyExists(JSON.stringify(json), key),
    KeyWithAncestorContainsData: (json: object, key: string, ancestor: string) => KeyWithAncestorContainsData(JSON.stringify(json), key, ancestor),
    KeyWithAncestorExists: (json: object, key: string, ancestor: string) => KeyWithAncestorExists(JSON.stringify(json), key, ancestor),
    KeyWithAncestorContainsDataAtIndex: (json: object, key: string, ancestor: string, index: number) => KeyWithAncestorContainsDataAtIndex(JSON.stringify(json), key, ancestor, index),
    keyWithAncestorExistsAtIndex: (json: object, key: string, ancestor: string, index: number) => KeyWithAncestorExistsAtIndex(JSON.stringify(json), key, ancestor, index),

    SubsetEquals: (json: object, key: string, contains: string) => SubsetEquals(JSON.stringify(json), key, contains),
    SubsetContains: (json: object, key: string, contains: string) => SubsetContains(JSON.stringify(json), key, contains),

    SubsetWithParentEquals: (json: object, key: string, parentKey: string, contains: string) => SubsetWithParentEquals(JSON.stringify(json), key, parentKey, contains),
    SubsetWithParentContains: (json: object, key: string, parentKey: string, contains: string) => SubsetWithParentContains(JSON.stringify(json), key, parentKey, contains),

    SubsetWithAncestorEquals: (json: object, key: string, ancestorKey: string, contains: string) => SubsetWithAncestorEquals(JSON.stringify(json), key, ancestorKey, contains),
    SubsetWithAncestorContains: (json: object, key: string, ancestorKey: string, contains: string) => SubsetWithAncestorContains(JSON.stringify(json), key, ancestorKey, contains),

    SubsetOfArrayAtIndexEquals: (json: object, key: string, index: number, contains: string) => SubsetOfArrayAtIndexEquals(JSON.stringify(json), key, index, contains),
    SubsetOfArrayAtIndexContains: (json: object, key: string, index: number, contains: string) => SubsetOfArrayAtIndexContains(JSON.stringify(json), key, index, contains),

    SubsetOfArrayAtIndexWithParentEquals: (json: object, key: string, index: number, parentKey: string, contains: string) => SubsetOfArrayAtIndexWithParentEquals(JSON.stringify(json), key, index, parentKey, contains),
    SubsetOfArrayAtIndexWithParentContains: (json: object, key: string, index: number, parentKey: string, contains: string) => SubsetOfArrayAtIndexWithParentContains(JSON.stringify(json), key, index, parentKey, contains),

    SubsetOfArrayAtIndexWithAncestorEquals: (json: object, key: string, index: number, ancestorKey: string, contains: string) => SubsetOfArrayAtIndexWithAncestorEquals(JSON.stringify(json), key, index, ancestorKey, contains),
    SubsetOfArrayAtIndexWithAncestorContains: (json: object, key: string, index: number, ancestorKey: string, contains: string) => SubsetOfArrayAtIndexWithAncestorContains(JSON.stringify(json), key, index, ancestorKey, contains),

    SubsetOfArrayAtIndexWithParentIndexEquals: (json: object, key: string, parentIndex: number, index: number, contains: string) => SubsetAtIndexWithParentIndexEquals(JSON.stringify(json), key, parentIndex, index, contains),
    SubsetOfArrayAtIndexWithParentIndexContains: (json: object, key: string, parentIndex: number, index: number, contains: string) => SubsetAtIndexWithParentIndexContains(JSON.stringify(json), key, parentIndex, index, contains)
}

const get = {
    value: (json: string, key: string) => getValue(json, key),
    valueWithParent: (json: string, key: string, parentKey: string) => getValueWithParent(json, key, parentKey),
    valueWithAncestor: (json: string, key: string, ancestorKey: string) => getValueWithAncestor(json, key, ancestorKey),
    values: (json: string, key: string) => getValues(json, key),
    valueAtIndex: (json: string, key: string, index: number) => getValueAtIndex(json, key, index),
    valueAtIndexWithParentIndex: (json: string, key: string, parentIndex: number, index: number) => getValueAtIndexWithParentIndex(json, key, parentIndex, index),

    keysAmount: (json: string) => getKeyLength(json),
    keyAtIndex: (json: string, index: number) => getKeyAtIndex(json, index),
    keys: (json: string) => getKeys(json)
}
const getObject = {
    value: (json: object, key: string) => getValue(JSON.stringify(json), key),
    valueWithParent: (json: object, key: string, parentKey: string) => getValueWithParent(JSON.stringify(json), key, parentKey),
    valueWithAncestor: (json: object, key: string, ancestorKey: string) => getValueWithAncestor(JSON.stringify(json), key, ancestorKey),
    values: (json: object, key: string) => getValues(JSON.stringify(json), key),
    valueAtIndex: (json: object, key: string, index: number) => getValueAtIndex(JSON.stringify(json), key, index),
    valueAtIndexWithParentIndex: (json: object, key: string, parentIndex: number, index: number) => getValueAtIndexWithParentIndex(JSON.stringify(json), key, parentIndex, index),

    keysAmount: (json: object) => getKeyLength(JSON.stringify(json)),
    keyAtIndex: (json: object, index: number) => getKeyAtIndex(JSON.stringify(json), index),
    keys: (json: object) => getKeys(JSON.stringify(json))
}

const KeyExists = function (json: string, key: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKey(jd.entities, key)

    chai.assert.isDefined(entity, "Key was not found: " + key);
}

const KeyContainsData = function (json: string, key: string) {
    const jp = new JsonParser();
    //console.log('JSON Length: ' + json.length);
    jp.ParseLayer(json, 0);
    //console.log('am i even parsing it right')
    //console.log('jp.entities: ' + jp.GetEntities().size())
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKey(jd.entities, key) || new Entity("", "", 0);

    //console.log('entity with key (in key contains data)' + entity.key);
    let arrayAssertion = false;
    try {
        if (entity.values.size > 1) {
            arrayAssertion = true;
        }
        else if (entity.values.size == 1) {
            arrayAssertion = entity.values.get(0).length > 0;
        }

        chai.assert.equal(true, arrayAssertion, "Key or value not found: " + key)
    }
    catch {
        chai.assert.equal(true, (entity.value != null && entity.value != "") || arrayAssertion, "Key or value not found: " + key);
    }


}

const KeyWithAncestorContainsData = function (json: string, key: string, ancestor: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKeyOfAncestor(jd.entities, key, ancestor)

    let isArray = false;
    let arrayEmpty = false;

    try {
        if (entity.values.size > 0) {
            isArray = true;
            if (entity.values.size <= 1) {
                if (entity.values.get(0).length == 0) {
                    arrayEmpty = true;
                }
            }
        }
    }
    catch {
        //Not an Array
        // try {
        //console.log(entity.key)
        chai.assert.notEqual(entity.value, "", "Value is Empty for key: " + key + "with ancestor " + ancestor)
        chai.assert.isDefined(entity.value, "value is not defined for key " + key + "with ancestor" + ancestor)
        // }
        // catch {
        //     chai.assert.equal(true, false, "entity value is undefined for key: " + key);
        // }


    }

    if (isArray) {
        chai.assert.equal(false, arrayEmpty, "Array is Empty for key " + key + " of ancestor " + ancestor)
    }
}

const KeyWithAncestorExistsAtIndex = function (json: string, key: string, ancestor: string, index: number) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKeyOfAncestorAtIndex(jd.entities, key, ancestor, index)

    chai.assert.isDefined(entity, "Key or Ancestor Key not found: " + key + "/" + ancestor + " [" + index + "]")
}
const KeyWithAncestorContainsDataAtIndex = function (json: string, key: string, ancestor: string, index: number) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKeyOfAncestorAtIndex(jd.entities, key, ancestor, index)

    let isArray = false;
    let arrayEmpty = false;

    try {
        if (entity.values.size > 0) {
            isArray = true;
            if (entity.values.size <= 1) {
                if (entity.values.get(0).length == 0) {
                    arrayEmpty = true;
                }
            }
        }
    }
    catch {
        //Not an Array
        // try {
        //console.log(entity.key)
        chai.assert.notEqual(entity.value, "", "Value is Empty for key: " + key + "with ancestor " + ancestor)
        chai.assert.isDefined(entity.value, "value is not defined for key " + key + "with ancestor" + ancestor)
        // }
        // catch {
        //     chai.assert.equal(true, false, "entity value is undefined for key: " + key);
        // }


    }

    if (isArray) {
        chai.assert.equal(false, arrayEmpty, "Array is Empty for key " + key + " of ancestor " + ancestor)
    }
}

const KeyWithAncestorExists = function (json: string, key: string, ancestor: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKeyOfAncestor(jd.entities, key, ancestor)

    chai.assert.isDefined(entity, "Key or Ancestor Key not found: " + key + "/" + ancestor);
}


const getValue = function (json: string, key: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKey(jd.entities, key) || new Entity("", "", 0);

    return entity.value;
}

const getValueWithParent = function (json: string, key: string, parentKey: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKeyOfParent(jd.entities, key, parentKey) || new Entity("", "", 0);

    return entity.value;
}

const getValueWithAncestor = function (json: string, key: string, ancestorKey: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKeyOfAncestor(jd.entities, key, ancestorKey) || new Entity("", "", 0);

    return entity.value;
}

const getValues = function (json: string, key: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKey(jd.entities, key) || new Entity("", "", 0);

    return entity.values;
}

const getValueAtIndex = function (json: string, key: string, index: number) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKey(jd.entities, key) || new Entity("", "", 0);

    return entity.values!.get(index);
}

const getValueAtIndexWithParentIndex = function (json: string, key: string, parentIndex: number, index: number) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKeyWithParentIndex(jd.entities, key, parentIndex, index) || new Entity("", "", 0);

    return entity.values!.get(index);
}


const getKeyLength = function (json: string): number {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    return jd.entities.size();
}

const getKeyAtIndex = function (json: string, index: number): string {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    return jd.entities.get(index).key;
}

const getKeys = function (json: string): string[] {
    let output: string[] = new Array<string>();

    const keyAmount: number = getKeyLength(json);

    for (let i = 0; i < keyAmount; i++) {
        //console.log('Adding key ' + '[' + i + '/' + keyAmount + ']')
        output.push(getKeyAtIndex(json, i));
    }

    return output;
}


const SubsetEquals = function (json: string, key: string, contains: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKey(jd.entities, key) || new Entity("", "", 0);
    chai.expect(entity.value).to.equal(contains)
}

const SubsetContains = function (json: string, key: string, contains: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKey(jd.entities, key) || new Entity("", "", 0);
    chai.expect(entity.value).to.contain(contains)
}

const SubsetOfArrayAtIndexEquals = function (json: string, key: string, index: number, contains: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKey(jd.entities, key) || new Entity("", "", 0);
    chai.expect(entity.values!.get(index)).to.equal(contains);
}
const SubsetOfArrayAtIndexContains = function (json: string, key: string, index: number, contains: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKey(jd.entities, key) || new Entity("", "", 0);
    chai.expect(entity.values!.get(index)).to.contain(contains);
}

const SubsetWithParentEquals = function (json: string, key: string, parentKey: string, contains: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKeyOfParent(jd.entities, key, parentKey) || new Entity("", "", 0);
    chai.expect(entity.value).to.equal(contains)
}

const SubsetWithParentContains = function (json: string, key: string, parentKey: string, contains: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKeyOfParent(jd.entities, key, parentKey) || new Entity("", "", 0);
    chai.expect(entity.value).to.contain(contains)
}

const SubsetOfArrayAtIndexWithParentEquals = function (json: string, key: string, index: number, parentKey: string, contains: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKeyOfParent(jd.entities, key, parentKey) || new Entity("", "", 0);
    chai.expect(entity.values!.get(index)).to.equal(contains)
}

const SubsetOfArrayAtIndexWithParentContains = function (json: string, key: string, index: number, parentKey: string, contains: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKeyOfParent(jd.entities, key, parentKey) || new Entity("", "", 0);
    chai.expect(entity.values!.get(index)).to.contain(contains)
}

const SubsetWithAncestorEquals = function (json: string, key: string, ancestorKey: string, contains: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKeyOfAncestor(jd.entities, key, ancestorKey) || new Entity("", "", 0);
    chai.expect(entity.value).to.equal(contains)
}
const SubsetWithAncestorContains = function (json: string, key: string, ancestorKey: string, contains: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKeyOfAncestor(jd.entities, key, ancestorKey) || new Entity("", "", 0);
    chai.expect(entity.value).to.contain(contains)
}

const SubsetOfArrayAtIndexWithAncestorEquals = function (json: string, key: string, index: number, ancestorKey: string, contains: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKeyOfAncestor(jd.entities, key, ancestorKey) || new Entity("", "", 0);
    chai.expect(entity.values!.get(index)).to.equal(contains);
}
const SubsetOfArrayAtIndexWithAncestorContains = function (json: string, key: string, index: number, ancestorKey: string, contains: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKeyOfAncestor(jd.entities, key, ancestorKey) || new Entity("", "", 0);
    chai.expect(entity.values!.get(index)).to.contain(contains);
}


const SubsetAtIndexWithParentIndexContains = function (json: string, key: string, parentIndex: number, index: number, contains: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKeyWithParentIndex(jd.entities, key, parentIndex, index) || new Entity("", "", 0);

    chai.assert.include(entity.values!.get(index), contains);
}

const SubsetAtIndexWithParentIndexEquals = function (json: string, key: string, parentIndex: number, index: number, contains: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());
    const entity: Entity = JsonDeconstructedService.GetEntityWithKeyWithParentIndex(jd.entities, key, parentIndex, index) || new Entity("", "", 0);

    chai.assert.equal(entity.values!.get(index), contains);
}

const deconstruct = function (json: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    //console.log("found entities: " + jp.GetEntities().size())
    const jd = new JsonDeconstructed(jp.GetEntities());
    //console.log('json deconstructed entities: ' + jd.entities.size());
    JsonDeconstructedService.print(jd.entities);
}

const PrintMeta = function (json: string) {
    const jp = new JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed(jp.GetEntities());

    JsonDeconstructedService.printMeta(jd.entities);
}




export default {
    assert,
    get,
    assertObject,
    getObject
}