/**
 * @param {character[][]} grid
 * @return {number}
 */

const recrusive = (x, y, grid, xLen, yLen) => {
    
    if( x < 0 || y < 0 || x >= xLen || y >= yLen || grid[y][x] === "2" || grid[y][x] === "0"){
        return;
    }
    grid[y][x] = "2";
    recrusive(x + 1, y, grid, xLen, yLen);
    recrusive(x - 1, y, grid, xLen, yLen);
    recrusive(x, y + 1, grid, xLen, yLen);
    recrusive(x, y - 1, grid, xLen, yLen);
}

var numIslands = function(grid) {
//     0 -> water
//     1 -> land
//     2 -> visited
    const yLen = grid.length;
    const xLen = grid[0].length; 
    let arr = new Array(yLen).fill(0).map(() => new Array(xLen).fill(0))
    let res = 0;
    for(let y=0;y<yLen;y++){
        for(let x=0;x<xLen;x++){
            if(grid[y][x] === "2"){ // check already visited
                continue;
            }
            if(grid[y][x] === "1"){
                res += 1;
                recrusive(x, y,  grid, xLen, yLen);
            }
        }
    }
    return res;
};