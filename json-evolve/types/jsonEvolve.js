"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JsonParser_1 = require("./JsonParser");
const Entity_1 = require("./Entity");
const JsonDeconstructed_1 = require("./JsonDeconstructed");
const chai_1 = __importDefault(require("chai"));
const JsonDeconstructedService_1 = require("./Services/JsonDeconstructedService");
const assert = {
    Print: (json) => deconstruct(json),
    PrintMeta: (json) => PrintMeta(json),
    KeyContainsData: (json, key) => KeyContainsData(json, key),
    KeyWithAncestorContainsData: (json, key, ancestor) => KeyWithAncestorContainsData(json, key, ancestor),
    KeyWithAncestorExists: (json, key, ancestor) => KeyWithAncestorExists(json, key, ancestor),
    KeyExists: (json, key) => KeyExists(json, key),
    SubsetEquals: (json, key, contains) => SubsetEquals(json, key, contains),
    SubsetContains: (json, key, contains) => SubsetContains(json, key, contains),
    SubsetWithParentEquals: (json, key, parentKey, contains) => SubsetWithParentEquals(json, key, parentKey, contains),
    SubsetWithParentContains: (json, key, parentKey, contains) => SubsetWithParentContains(json, key, parentKey, contains),
    SubsetWithAncestorEquals: (json, key, ancestorKey, contains) => SubsetWithAncestorEquals(json, key, ancestorKey, contains),
    SubsetWithAncestorContains: (json, key, ancestorKey, contains) => SubsetWithAncestorContains(json, key, ancestorKey, contains),
    SubsetOfArrayAtIndexEquals: (json, key, index, contains) => SubsetOfArrayAtIndexEquals(json, key, index, contains),
    SubsetOfArrayAtIndexContains: (json, key, index, contains) => SubsetOfArrayAtIndexContains(json, key, index, contains),
    SubsetOfArrayAtIndexWithParentEquals: (json, key, index, parentKey, contains) => SubsetOfArrayAtIndexWithParentEquals(json, key, index, parentKey, contains),
    SubsetOfArrayAtIndexWithParentContains: (json, key, index, parentKey, contains) => SubsetOfArrayAtIndexWithParentContains(json, key, index, parentKey, contains),
    SubsetOfArrayAtIndexWithAncestorEquals: (json, key, index, ancestorKey, contains) => SubsetOfArrayAtIndexWithAncestorEquals(json, key, index, ancestorKey, contains),
    SubsetOfArrayAtIndexWithAncestorContains: (json, key, index, ancestorKey, contains) => SubsetOfArrayAtIndexWithAncestorContains(json, key, index, ancestorKey, contains),
    SubsetOfArrayAtIndexWithParentIndexEquals: (json, key, parentIndex, index, contains) => SubsetAtIndexWithParentIndexEquals(json, key, parentIndex, index, contains),
    SubsetOfArrayAtIndexWithParentIndexContains: (json, key, parentIndex, index, contains) => SubsetAtIndexWithParentIndexContains(json, key, parentIndex, index, contains)
};
const assertObject = {
    Print: (json) => deconstruct(JSON.stringify(json)),
    PrintMeta: (json) => PrintMeta(JSON.stringify(json)),
    KeyContainsData: (json, key) => KeyContainsData(JSON.stringify(json), key),
    KeyExists: (json, key) => KeyExists(JSON.stringify(json), key),
    KeyWithAncestorContainsData: (json, key, ancestor) => KeyWithAncestorContainsData(JSON.stringify(json), key, ancestor),
    KeyWithAncestorExists: (json, key, ancestor) => KeyWithAncestorExists(JSON.stringify(json), key, ancestor),
    SubsetEquals: (json, key, contains) => SubsetEquals(JSON.stringify(json), key, contains),
    SubsetContains: (json, key, contains) => SubsetContains(JSON.stringify(json), key, contains),
    SubsetWithParentEquals: (json, key, parentKey, contains) => SubsetWithParentEquals(JSON.stringify(json), key, parentKey, contains),
    SubsetWithParentContains: (json, key, parentKey, contains) => SubsetWithParentContains(JSON.stringify(json), key, parentKey, contains),
    SubsetWithAncestorEquals: (json, key, ancestorKey, contains) => SubsetWithAncestorEquals(JSON.stringify(json), key, ancestorKey, contains),
    SubsetWithAncestorContains: (json, key, ancestorKey, contains) => SubsetWithAncestorContains(JSON.stringify(json), key, ancestorKey, contains),
    SubsetOfArrayAtIndexEquals: (json, key, index, contains) => SubsetOfArrayAtIndexEquals(JSON.stringify(json), key, index, contains),
    SubsetOfArrayAtIndexContains: (json, key, index, contains) => SubsetOfArrayAtIndexContains(JSON.stringify(json), key, index, contains),
    SubsetOfArrayAtIndexWithParentEquals: (json, key, index, parentKey, contains) => SubsetOfArrayAtIndexWithParentEquals(JSON.stringify(json), key, index, parentKey, contains),
    SubsetOfArrayAtIndexWithParentContains: (json, key, index, parentKey, contains) => SubsetOfArrayAtIndexWithParentContains(JSON.stringify(json), key, index, parentKey, contains),
    SubsetOfArrayAtIndexWithAncestorEquals: (json, key, index, ancestorKey, contains) => SubsetOfArrayAtIndexWithAncestorEquals(JSON.stringify(json), key, index, ancestorKey, contains),
    SubsetOfArrayAtIndexWithAncestorContains: (json, key, index, ancestorKey, contains) => SubsetOfArrayAtIndexWithAncestorContains(JSON.stringify(json), key, index, ancestorKey, contains),
    SubsetOfArrayAtIndexWithParentIndexEquals: (json, key, parentIndex, index, contains) => SubsetAtIndexWithParentIndexEquals(JSON.stringify(json), key, parentIndex, index, contains),
    SubsetOfArrayAtIndexWithParentIndexContains: (json, key, parentIndex, index, contains) => SubsetAtIndexWithParentIndexContains(JSON.stringify(json), key, parentIndex, index, contains)
};
const get = {
    value: (json, key) => getValue(json, key),
    valueWithParent: (json, key, parentKey) => getValueWithParent(json, key, parentKey),
    valueWithAncestor: (json, key, ancestorKey) => getValueWithAncestor(json, key, ancestorKey),
    values: (json, key) => getValues(json, key),
    valueAtIndex: (json, key, index) => getValueAtIndex(json, key, index),
    valueAtIndexWithParentIndex: (json, key, parentIndex, index) => getValueAtIndexWithParentIndex(json, key, parentIndex, index),
    keysAmount: (json) => getKeyLength(json),
    keyAtIndex: (json, index) => getKeyAtIndex(json, index),
    keys: (json) => getKeys(json)
};
const getObject = {
    value: (json, key) => getValue(JSON.stringify(json), key),
    valueWithParent: (json, key, parentKey) => getValueWithParent(JSON.stringify(json), key, parentKey),
    valueWithAncestor: (json, key, ancestorKey) => getValueWithAncestor(JSON.stringify(json), key, ancestorKey),
    values: (json, key) => getValues(JSON.stringify(json), key),
    valueAtIndex: (json, key, index) => getValueAtIndex(JSON.stringify(json), key, index),
    valueAtIndexWithParentIndex: (json, key, parentIndex, index) => getValueAtIndexWithParentIndex(JSON.stringify(json), key, parentIndex, index),
    keysAmount: (json) => getKeyLength(JSON.stringify(json)),
    keyAtIndex: (json, index) => getKeyAtIndex(JSON.stringify(json), index),
    keys: (json) => getKeys(JSON.stringify(json))
};
const KeyExists = function (json, key) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKey(jd.entities, key);
    chai_1.default.assert.isDefined(entity, "Key was not found: " + key);
};
const KeyContainsData = function (json, key) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKey(jd.entities, key) || new Entity_1.Entity("", "", 0);
    let arrayAssertion = false;
    try {
        if (entity.values.size > 1) {
            arrayAssertion = true;
        }
        else if (entity.values.size == 1) {
            arrayAssertion = entity.values.get(0).length > 0;
        }
        chai_1.default.assert.equal(true, arrayAssertion, "Key or value not found: " + key);
    }
    catch (_a) {
        chai_1.default.assert.equal(true, (entity.value != null && entity.value != "") || arrayAssertion, "Key or value not found: " + key);
    }
};
const KeyWithAncestorContainsData = function (json, key, ancestor) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKeyOfAncestor(jd.entities, key, ancestor);
    let isArray = false;
    let arrayEmpty = false;
    try {
        if (entity.values.size > 0) {
            isArray = true;
            if (entity.values.size == 0) {
                if (entity.values.get(0).length == 0) {
                    arrayEmpty = true;
                }
            }
        }
    }
    catch (_a) {
        //Not an Array
        try {
            chai_1.default.assert.isNotEmpty(entity.value, "Value is Empty");
        }
        catch (_b) {
            chai_1.default.assert.equal(true, false, "entity value is undefined for key: " + key);
        }
    }
    if (isArray) {
        chai_1.default.assert.equal(false, arrayEmpty, "Array is Empty");
    }
};
const KeyWithAncestorExists = function (json, key, ancestor) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKeyOfAncestor(jd.entities, key, ancestor);
    chai_1.default.assert.isDefined(entity, "Key or Ancestor Key not found: " + key + "/" + ancestor);
};
const getValue = function (json, key) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKey(jd.entities, key) || new Entity_1.Entity("", "", 0);
    return entity.value;
};
const getValueWithParent = function (json, key, parentKey) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKeyOfParent(jd.entities, key, parentKey) || new Entity_1.Entity("", "", 0);
    return entity.value;
};
const getValueWithAncestor = function (json, key, ancestorKey) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKeyOfAncestor(jd.entities, key, ancestorKey) || new Entity_1.Entity("", "", 0);
    return entity.value;
};
const getValues = function (json, key) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKey(jd.entities, key) || new Entity_1.Entity("", "", 0);
    return entity.values;
};
const getValueAtIndex = function (json, key, index) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKey(jd.entities, key) || new Entity_1.Entity("", "", 0);
    return entity.values.get(index);
};
const getValueAtIndexWithParentIndex = function (json, key, parentIndex, index) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKeyWithParentIndex(jd.entities, key, parentIndex, index) || new Entity_1.Entity("", "", 0);
    return entity.values.get(index);
};
const getKeyLength = function (json) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    return jd.entities.size();
};
const getKeyAtIndex = function (json, index) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    return jd.entities.get(index).key;
};
const getKeys = function (json) {
    let output = new Array();
    const keyAmount = getKeyLength(json);
    for (let i = 0; i < keyAmount; i++) {
        output.push(getKeyAtIndex(json, i));
    }
    return output;
};
const SubsetEquals = function (json, key, contains) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKey(jd.entities, key) || new Entity_1.Entity("", "", 0);
    chai_1.default.expect(entity.value).to.equal(contains);
};
const SubsetContains = function (json, key, contains) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKey(jd.entities, key) || new Entity_1.Entity("", "", 0);
    chai_1.default.expect(entity.value).to.contain(contains);
};
const SubsetOfArrayAtIndexEquals = function (json, key, index, contains) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKey(jd.entities, key) || new Entity_1.Entity("", "", 0);
    chai_1.default.expect(entity.values.get(index)).to.equal(contains);
};
const SubsetOfArrayAtIndexContains = function (json, key, index, contains) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKey(jd.entities, key) || new Entity_1.Entity("", "", 0);
    chai_1.default.expect(entity.values.get(index)).to.contain(contains);
};
const SubsetWithParentEquals = function (json, key, parentKey, contains) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKeyOfParent(jd.entities, key, parentKey) || new Entity_1.Entity("", "", 0);
    chai_1.default.expect(entity.value).to.equal(contains);
};
const SubsetWithParentContains = function (json, key, parentKey, contains) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKeyOfParent(jd.entities, key, parentKey) || new Entity_1.Entity("", "", 0);
    chai_1.default.expect(entity.value).to.contain(contains);
};
const SubsetOfArrayAtIndexWithParentEquals = function (json, key, index, parentKey, contains) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKeyOfParent(jd.entities, key, parentKey) || new Entity_1.Entity("", "", 0);
    chai_1.default.expect(entity.values.get(index)).to.equal(contains);
};
const SubsetOfArrayAtIndexWithParentContains = function (json, key, index, parentKey, contains) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKeyOfParent(jd.entities, key, parentKey) || new Entity_1.Entity("", "", 0);
    chai_1.default.expect(entity.values.get(index)).to.contain(contains);
};
const SubsetWithAncestorEquals = function (json, key, ancestorKey, contains) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKeyOfAncestor(jd.entities, key, ancestorKey) || new Entity_1.Entity("", "", 0);
    chai_1.default.expect(entity.value).to.equal(contains);
};
const SubsetWithAncestorContains = function (json, key, ancestorKey, contains) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKeyOfAncestor(jd.entities, key, ancestorKey) || new Entity_1.Entity("", "", 0);
    chai_1.default.expect(entity.value).to.contain(contains);
};
const SubsetOfArrayAtIndexWithAncestorEquals = function (json, key, index, ancestorKey, contains) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKeyOfAncestor(jd.entities, key, ancestorKey) || new Entity_1.Entity("", "", 0);
    chai_1.default.expect(entity.values.get(index)).to.equal(contains);
};
const SubsetOfArrayAtIndexWithAncestorContains = function (json, key, index, ancestorKey, contains) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKeyOfAncestor(jd.entities, key, ancestorKey) || new Entity_1.Entity("", "", 0);
    chai_1.default.expect(entity.values.get(index)).to.contain(contains);
};
const SubsetAtIndexWithParentIndexContains = function (json, key, parentIndex, index, contains) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKeyWithParentIndex(jd.entities, key, parentIndex, index) || new Entity_1.Entity("", "", 0);
    chai_1.default.assert.include(entity.values.get(index), contains);
};
const SubsetAtIndexWithParentIndexEquals = function (json, key, parentIndex, index, contains) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    const entity = JsonDeconstructedService_1.JsonDeconstructedService.GetEntityWithKeyWithParentIndex(jd.entities, key, parentIndex, index) || new Entity_1.Entity("", "", 0);
    chai_1.default.assert.equal(entity.values.get(index), contains);
};
const deconstruct = function (json) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    //console.log("found entities: " + jp.GetEntities().size())
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    //console.log('json deconstructed entities: ' + jd.entities.size());
    JsonDeconstructedService_1.JsonDeconstructedService.print(jd.entities);
};
const PrintMeta = function (json) {
    const jp = new JsonParser_1.JsonParser();
    jp.ParseLayer(json, 0);
    const jd = new JsonDeconstructed_1.JsonDeconstructed(jp.GetEntities());
    JsonDeconstructedService_1.JsonDeconstructedService.printMeta(jd.entities);
};
exports.default = {
    assert,
    get,
    assertObject,
    getObject
};
//# sourceMappingURL=jsonEvolve.js.map