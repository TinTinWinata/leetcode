function maxWidthOfVerticalArea(points: number[][]): number {
    points.sort((a, b) => b[0] - a[0])
    let max = Number.NEGATIVE_INFINITY;
    for(let i=1;i<points.length;i++){
        const result = points[i - 1][0] - points[i][0];
        if(result > max){
            max = result;
        }
    }
    return max;
}; 