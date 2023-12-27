/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */

var minCost = function(colors, neededTime) {
    let i = 0;
    let res = 0;
    let last = '';
    let max = Number.NEGATIVE_INFINITY;
    let tempMaxIdx = -1;
    let tempFirstIdx = -1;
    let tempCount = 0;
    let isChanged = false;
    while(i <= colors.length){
        const curr = colors.charAt(i);
        if(curr !== last){
            if(isChanged){
                res += tempCount - max
                tempMaxIdx = -1;
                isChanged = false;
               
            } else if(i >= colors.length){
                break;
            }
            else{
                tempCount = neededTime[i];
            }
            tempCount = 0;
            tempFirstIdx = i;
            last = curr;
            max = neededTime[i];
            tempMaxIdx = i;
        }else if(curr === last && neededTime[i] > max){
            max = neededTime[i];
            tempMaxIdx = i;
        }
        if(curr === last){
            isChanged = true;
        }
        tempCount += neededTime[i];
        i++;
    } 
    return res;
};