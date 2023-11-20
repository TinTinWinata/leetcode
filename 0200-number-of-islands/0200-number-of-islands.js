/**
 * @param {character[][]} grid
 * @return {number}
 */

const recrusive = (x, y, arr, grid, xLen, yLen) => {
    
    if( x < 0 || y < 0 || x >= xLen || y >= yLen || arr[y][x] === 1 || grid[y][x] === "0"){
        return;
    }
    arr[y][x] = 1;
    recrusive(x + 1, y, arr, grid, xLen, yLen);
    recrusive(x - 1, y, arr, grid, xLen, yLen);
    recrusive(x, y + 1, arr, grid, xLen, yLen);
    recrusive(x, y - 1, arr, grid, xLen, yLen);
}

var numIslands = function(grid) {
    const yLen = grid.length;
    const xLen = grid[0].length; 
    let arr = new Array(yLen).fill(0).map(() => new Array(xLen).fill(0))
    let res = 0;
    for(let y=0;y<yLen;y++){
        for(let x=0;x<xLen;x++){
            if(arr[y][x] === 1){ // check already visited
                continue;
            }
            if(grid[y][x] === "1"){
                res += 1;
                recrusive(x, y, arr, grid, xLen, yLen);
            }
        }
    }
    return res;
};