    
function isAnagram(s: string, t: string): boolean {
    const map = new Map();
    if(t.length !== s.length){
        return false;
    }
    
    for(const v of s){
        if(map.has(v)){
            let n = map.get(v)
            n = n + 1;
            map.set(v, n)
        }else{
            map.set(v, 1)
        }
    }
    // console.log('map : ', map)
    for(const v of t){
        if(map.has(v)){
            let n = map.get(v);
            n = n - 1;
            map.set(v, n);
            if(n < 0){
                return false;
            }
        }else{
            return false;
        }
    }
    return true;
};