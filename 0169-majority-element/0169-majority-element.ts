function majorityElement(nums: number[]): number {
    const map: any= {}
    let result: number = -1;
    let max: number = -1;
    for(const num of nums){
        if(map[num] === undefined){
            map[num] = 1
            if(result === -1){
                result = num;
                max = 1;
            }
        }else{
            map[num] += 1;
            if(map[num] > max){
                result = num;
                max = map[num];
            }
        }
        console.log('Map : ', map)
    }
    return result;
};