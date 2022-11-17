"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonParser = void 0;
const stringManager_1 = require("./stringManager");
const Entity_1 = require("./Entity");
const ArrayEvolve_1 = require("./ArrayEvolve");
class JsonParser {
    constructor() {
        this._entities = new ArrayEvolve_1.ArrayEvolve();
    }
    FindAncestorKey(parentEntity) {
        return parentEntity.key;
    }
    ParseLayer(json, level = 0, parentEntity, parentIndex) {
        const sm = new stringManager_1.StringManager();
        let content;
        const jsonElements = ["\"", "{"];
        let entity;
        content = json;
        do {
            let isArray = false;
            let value = "";
            let values = new Map();
            let contentHandled = false;
            let key = "";
            let arrayValues;
            if (sm.FirstCharIgnoringSpacesIs(content, "[")) {
                //console.log('Is an Array');
                isArray = true;
                key = parentEntity.key;
                arrayValues = sm.GetNextBetweenDynamic(content, '[', ']');
                console.log('Array values: ' + arrayValues);
                if (arrayValues.includes(',')) {
                    // console.log('array values: ' + arrayValues);
                    values = sm.DynamicSplit(arrayValues, ',');
                    console.log('array size: ' + values.size);
                    //console.log('values size: ' + values.size);
                }
                else {
                    values = new Map().set(0, arrayValues);
                }
                values = sm.CleanStringsInArray(values);
                //console.log('values size: ' + values.size);
            }
            else if (sm.ContainsAnyOf(content, jsonElements)) {
                key = sm.GetNextBetween(content, "\"", "\"");
                content = sm.RemoveUntilIncluding(content, ':');
                //let focusedContent = sm.RemoveUntilIncluding(content, "\"" + key + "\"");
                let focusedContent = content;
                if (sm.FirstCharIgnoringSpacesIs(focusedContent, '[')) // isArray
                 {
                    // console.log('Is an array 2');
                    isArray = true;
                    arrayValues = sm.GetNextBetweenDynamic(focusedContent, '[', ']');
                    //  console.log('array values: ' + arrayValues);
                    if (arrayValues.includes(',')) {
                        values = sm.DynamicSplit(arrayValues, ',');
                        //  console.log('values size: ' + values.size);
                    }
                    else {
                        values = new Map().set(0, arrayValues);
                    }
                    values = sm.CleanStringsInArray(values);
                    //console.log("#2 values size: " + values.size);
                }
                else {
                    if (focusedContent.includes(',')) {
                        const nextValue = focusedContent.substring(0, focusedContent.indexOf(','));
                        if (!nextValue.includes("\"") && !nextValue.includes('{')) {
                            value = nextValue;
                            contentHandled = true;
                        }
                        //Handle ',' between strings
                    }
                    else if (!focusedContent.includes("\"") && !focusedContent.includes("{")) {
                        value = focusedContent;
                        contentHandled = true;
                        // console.log('value handled 1');
                    }
                    if (!contentHandled) {
                        value = sm.GetNextBetweenOptions(focusedContent, ["{", "\""], ["}", "\""]);
                    }
                    //console.log('value: ' + value);
                    value = new String(value).trim() + "";
                    if ((value.startsWith('true') || value.startsWith('false')) && sm.LastCharIgnoringSpacesIs(value, '}')) { // THIS IS A PATCH
                        if (value.startsWith('true')) {
                            value = 'true';
                        }
                        else {
                            value = 'false';
                        }
                    }
                    if (isArray) {
                        content = sm.RemoveUntilIncluding(content, "[" + arrayValues + "]");
                    }
                    else {
                        content = sm.RemoveUntilIncluding(content, value);
                    }
                    if (content[0] == "\"" && content.includes(',')) {
                        content = sm.RemoveUntilIncluding(content, "\"");
                        content = sm.RemoveUntilIncluding(content, ',');
                        // console.log('content starts with: ' + content[0]);
                    }
                    //Clean Value
                    value = sm.CleanValue(value);
                    value = sm.RemoveSpaces(value);
                    //console.log('creating entity with value: ' + value);
                    if (sm.LastCharIgnoringSpacesIs(value, "\"") && !sm.FirstCharIgnoringSpacesIs(value, "\"")) {
                        value = value.substring(0, value.lastIndexOf("\""));
                    }
                    entity = new Entity_1.Entity(key, value, level, parentEntity, parentIndex);
                    const hasKey = sm.hasKey(entity.value);
                    if (hasKey) {
                        //console.log('has key');
                        this.ParseLayer(entity.value, level + 1, entity);
                    }
                }
            }
            if (isArray) {
                for (let index = 0; index < values.size; index++) {
                    //console.log('values size: ' + values.size);
                    values.set(index, sm.CleanValue(values.get(index)));
                    values.set(index, sm.RemoveSpaces(values.get(index)));
                    //console.log("#3 values size: " + values.size);
                }
                entity = new Entity_1.Entity(key, "", level, parentEntity, parentIndex, values);
                for (var index = 0; index < entity.values.size; index++) {
                    if (sm.hasKey(entity.values.get(index)) || entity.values.get(index).includes('[') || entity.values.get(index).includes('{')) {
                        this.ParseLayer(entity.values.get(index), level + 1, entity, index);
                        // content = sm.RemoveUntilIncluding(content, entity.values!.get(index));
                        // if (sm.FirstCharIgnoringSpacesIs(content, ',')) {
                        //     content = sm.RemoveUntilIncluding(content, ",");
                        // }
                    }
                }
                content = sm.RemoveUntilIncluding(content, arrayValues);
                content = sm.RemoveUntilIncluding(content, "],");
            }
            //console.log('entities size: ' + this._entities.size);
            this._entities.add(entity);
        } while (content.length > 0 && content.includes(':'));
        return content;
    }
    GetEntities() {
        return this._entities;
    }
}
exports.JsonParser = JsonParser;
//# sourceMappingURL=JsonParser.js.map