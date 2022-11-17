export declare class Entity {
    readonly key: string;
    readonly value: string;
    readonly level: number;
    readonly parent?: Entity;
    readonly values?: Map<number, string>;
    readonly parentIndex?: number;
    readonly isArray: boolean;
    constructor(key: string, value: string, level: number, parent?: Entity, parentIndex?: number, values?: Map<number, string>);
}
//# sourceMappingURL=entity.d.ts.map