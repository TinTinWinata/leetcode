function onesMinusZeros(grid: number[][]): number[][] {
    const n = grid.length;
    const m = grid[0].length;
    const newGrid = (new Array(n).fill(-1)).map(()=>new Array(m).fill(-1))
    const map = new Map();
    
    function search(coor, tobe, isRow){
        let res = 0;
        const key = `${coor}#${tobe}#${isRow}`
        if(map.has(key)){
            return map.get(key);
        }
        if(isRow){
            for(let i=0;i<m;i++){
                if(grid[coor][i] === tobe){
                    res++;
                }
            }
        }else{
            for(let i=0;i<n;i++){
                if(grid[i][coor] === tobe){
                    res++;
                }
            }
        }
        map.set(key, res);
        return res;
    }

    for(let i=0;i<grid.length;i++){
        const arr = grid[i];
        for(let j=0;j<arr.length;j++){
            newGrid[i][j] = search(i, 1, true) + search(j, 1, false) - search(i, 0, true) -search(j, 0, false);
        }
    }
    return newGrid;
};