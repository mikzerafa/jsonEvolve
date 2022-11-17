import { ArrayEvolve } from "./ArrayEvolve";

export abstract class print {
    static printArray(arr: string[]) {
        for (let i of arr) {
            console.log(i);
        }
    }

    static printMap(map: Map<number, string>) {
        for (let i = 0; i < map.size; i++) {
            console.log(map.get(i) + "\n");
        }
    }
}