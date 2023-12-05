function recrusive(){
    
}

function candy(ratings: number[]): number {
    const leftToRight = new Array(ratings.length).fill(1)
    
    function plus(startIndex: number, lastIndex: number){
        const length = lastIndex - startIndex ;
        
        let curr = startIndex;
        
        for(let i=0;i<length;i++,curr++){
            leftToRight[curr] = length - i + 1;
        }
    }
    
    function check(endIndex: number, startIndex: number){
        const length = endIndex - startIndex + 1;
        let curr = startIndex;
        
        for(let i=0;i<length;i++,curr++){
            const val = i + 1;
            leftToRight[curr] = Math.max(leftToRight[curr], val)
        }
    }
    
    let lastIndex: number = 0;
    
    for(let i=0;i<ratings.length;i++){
        
        if(i + 1 >= ratings.length && lastIndex !== i){
            plus(lastIndex, i)
            break;
        }
        
        const current: number = ratings[i];
        const next: number = ratings[i+1];
        
        if(current > next){
//        10, 9 (for example) -> then continue;
            continue;
        }else if(current <= next){
            plus(lastIndex, i);
//         9, 10 (false)
            lastIndex = i + 1;
        }    
    }
    
    for(let i=ratings.length - 1;i>=0;i--){
        
        if(i === 0){
            check(lastIndex, i)
            break;
        }
        const current: number = ratings[i];
        const prev: number = ratings[i-1];
        
        if(current > prev){
            continue;
        }else if(current <= prev){
            
            check(lastIndex, i);
            lastIndex = i - 1;
        }    
    }
    
    let res = 0;
    for(let i=0;i<leftToRight.length;i++){
        res+=leftToRight[i];
    }
    
    return res;
};