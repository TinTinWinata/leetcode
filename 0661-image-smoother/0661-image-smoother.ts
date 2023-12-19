function imageSmoother(img: number[][]): number[][] {
    const n = img.length
    const m = img[0].length
    
    const arr = Array.from({ length: n }, () => Array(m).fill(0));
    const direction = [0, -1,  1]
    
    function check(y, x){
        const val = img[y][x];
        let sum = 0;
        let total = 0;
        for(let i=y-1;i<=y+1;i++){
            for(let j=x-1;j<=x+1;j++){
                if(i < n && i >= 0 && j >= 0 && j < m){
                    total++;
                    sum += img[i][j]
                }
            }
        }
        arr[y][x] = Math.floor(sum / total)
    }
    
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            check(i, j)
        }
    }
    return arr;
};