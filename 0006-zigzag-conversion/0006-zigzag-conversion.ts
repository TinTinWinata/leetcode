function convert(s: string, numRows: number): string {
    if(s.length === 1 || numRows === 1 || s.length < numRows) return s
    const maxRange = Math.ceil(s.length / numRows);
    const space = numRows - 2;
    const xMax = maxRange + (maxRange - 1) * space + 1;
    const yMax = numRows;
    const arr = new Array(xMax).fill(null).map(() => new Array(yMax).fill(''))
    let p = 0;
    for (let k=0;k<maxRange;k++){
        for(let i=0;i<numRows;i++){
            if(p >= s.length) break;
            const x = k * (numRows - 1);
            const y= i;
            arr[x][y]=s.charAt(p);
            p += 1;
        }
        for(let i=0;i<space;i++){
            if(p >= s.length) break;
            const x = ((numRows - 1) * k) + 1 + i;
            const y = numRows - 2 - i;
            arr[x][y] = s.charAt(p)
            p += 1;
        }
        if(p >= s.length) break;
     
    }
    let result = ''
    for(let i=0;i<yMax;i++){
        for(let j=0;j<xMax;j++){
            if(arr[j][i] !== '') result += arr[j][i]
        }
    }
    return result
};