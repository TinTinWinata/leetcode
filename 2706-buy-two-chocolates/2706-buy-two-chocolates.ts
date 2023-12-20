function buyChoco(prices: number[], money: number): number {
    prices.sort((a, b) => a - b)
    const res = prices[0] + prices[1];
    if(money - res < 0){
        return money;
    }
    return money - res;
};