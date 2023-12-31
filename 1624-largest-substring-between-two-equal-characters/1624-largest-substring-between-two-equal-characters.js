/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let max = -1;
    for(let p1=0;p1<s.length;p1++){
        const v = s.charAt(p1);
        let fIdx = -1
        for(let i=s.length-1;i>p1;i--){
            const v2 = s.charAt(i);
            if(v2 === v){
                fIdx = i;
                break;
            }
        }
        if(fIdx !== -1){
            const res = fIdx - p1 - 1;
            if(res > max) max = res;
        }
    }
    return max;
};