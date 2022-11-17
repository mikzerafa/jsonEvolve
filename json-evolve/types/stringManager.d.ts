export declare class StringManager {
    GetNextBetween(text: String, first: string, last: string): string;
    CleanValue(value: string): string;
    RemoveSpaces(value: string): string;
    FirstCharIgnoringSpacesIs(text: string, toFind: string): boolean;
    LastCharIgnoringSpacesIs(text: string, toFind: string): boolean;
    DynamicSplit(text: string, splitAt: string): Map<number, string>;
    LastIndexOf(text: string, toFind: string): number;
    IsString(text: string): boolean;
    CleanString(text: string): string;
    CleanStringsInArray(arr: Map<number, string>): Map<number, string>;
    GetNextBetweenDynamic(text: string, first: string, last: string): string;
    hasKey(text: string): boolean;
    GetNextBetweenOptions(text: string, first: string[], last: string[]): string;
    GetNextBetweenOptionsAfter(text: string, first: string[], last: string[], after: string): string;
    RemoveUntilIncluding(text: string, toRemoveUntilIncluding: string): string;
    RemoveUntil(text: string, toRemoveUntil: string): string;
    ContainsAnyOf(text: string, options: string[]): boolean;
}
//# sourceMappingURL=stringManager.d.ts.map