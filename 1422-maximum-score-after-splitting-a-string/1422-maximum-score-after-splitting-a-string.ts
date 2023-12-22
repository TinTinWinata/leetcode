function maxScore(s: string): number {
    let max = Number.NEGATIVE_INFINITY;
    let tempZeroCount = 0;
    let oneCount = 0;
    let tempOneCount = 0;
    
    for(const v of s){
        if(v == '1') oneCount++;
    }
    
    for(let i=0;i < s.length - 1;i++){
        if(s[i] == '0') tempZeroCount++;
        if(s[i] == '1') tempOneCount++;
        
        const right = oneCount - tempOneCount;
        
        if(right + tempZeroCount > max){
            max = right + tempZeroCount
        }
    }
    return max
};