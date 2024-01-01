/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => b - a)
    s.sort((a, b) => b - a)
    
    function search(v){
        for(let i=0;i<g.length;i++){
            if(g[i] <= v){
//              Found
                g.splice(i, 1)
                return true;
            }
        }
        return false;
    }
    let res = 0;
    for(const v of s){
        if(search(v)) res++;
    }
    return res;
};