function findSpecialInteger(arr: number[]): number {
    let currVal = -999;
    let maxValue = arr[0];
    let max= Number.NEGATIVE_INFINITY ;
    let temp = 0;
    for(const num of arr){
        if(num != currVal){
            currVal = num;
            temp = 1;
        }else{
            temp++;
            if(temp > max){
                max = temp;
                maxValue = num;
            }
        }
    }
    return maxValue;
};