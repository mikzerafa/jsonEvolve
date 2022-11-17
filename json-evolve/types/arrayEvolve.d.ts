export declare class ArrayEvolve<T1, T2> {
    entities: Array<Map<number, T2>>;
    constructor();
    size(): number;
    foreach(fun: (par: any) => any): any;
    print(printingService: any): void;
    printMeta(printingService: any): void;
    add(value: any): void;
    get(index: number): T2;
}
//# sourceMappingURL=arrayEvolve.d.ts.map