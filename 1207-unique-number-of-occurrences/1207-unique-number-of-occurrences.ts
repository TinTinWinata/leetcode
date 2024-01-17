function uniqueOccurrences(arr: number[]): boolean {
    const map = new Map<number, number>();
    for(const v of arr){
        if(map.has(v)){
            map.set(v, map.get(v) + 1)
        }else map.set(v, 1)
    }
    const calculate = new Map<number, number>();
    for(const [key, value] of map){
        if(calculate.has(value)) return false;
        calculate.set(value, key);
    }
    return true;
};