function numSpecial(mat: number[][]): number {
    let res = 0;
    const n = mat.length;
    const m = mat[0].length;
    
    function check(x: number, y: number){
        for(let i=0;i<m;i++){
            if(i === y) continue;
            if(mat[x][i] === 1) return false;
        }
        
        for(let j=0;j<n;j++){
            if(j === x) continue;
            if(mat[j][y] === 1) return false;
        }
        
        return true;
    }
    
    for(let i=0;i<mat.length;i++){
        const arr:number[] = mat[i]
        for(let j=0;j<arr.length;j++){
            const val = mat[i][j];
            if(val === 1 && check(i, j)){
                res++;
            }
        }
    }
    return res;
};