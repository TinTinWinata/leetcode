function maxProfit(prices: number[]): number {
    let min = prices[0];
    let max = Number.NEGATIVE_INFINITY;
    for(let i=1;i<prices.length;i++){
        const price = prices[i]
        const value = price - min;
        if(value > 0 && value > max){
            max = value;
        }
        if(price < min) {
            min = price;
        }
    }
    if(max === Number.NEGATIVE_INFINITY){
        return 0;
    }
    return max;
}