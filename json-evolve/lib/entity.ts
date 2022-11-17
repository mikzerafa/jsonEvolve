export class Entity {
    readonly key: string;
    readonly value: string;
    readonly level: number;
    readonly parent?: Entity;
    readonly values?: Map<number, string>;
    readonly parentIndex?: number;
    readonly isArray: boolean;

    constructor(key: string, value: string, level: number, parent?: Entity, parentIndex?: number, values?: Map<number, string>) {
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