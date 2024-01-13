function minSteps(s: string, t: string): number {
    const map = new Map();
    for(let i=0;i<s.length;i++){
        const v = s.charAt(i);
        if(map.has(v)){
            map.set(v, map.get(v) + 1)
        }else map.set(v, 1)
    }
    let min = 0;
    for(let i=0;i<t.length;i++){
        const v = t.charAt(i);
        if(map.has(v)){
            const r = map.get(v);
            if(r > 0) {
                map.set(v, r - 1)
            }else min++;
        }else min++;
    }
    return min;
};