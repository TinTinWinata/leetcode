
const map: {[key: string]: number}= {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
}

const findKey = (n: number) => {
    let temp ={key: 'I', value: 1}
    let max = 1;

    for(const key in map){
        if(map[key] <= n){
            temp.key = key;
            temp.value = map[key];
            max = n;
        }else{
            break;
        }
    }
    return temp;
}

function intToRoman(num: number): string {
    let result = ''
    while(num !== 0){
        const {key, value} = findKey(num)
        const divide = Math.floor(num / value);
        for(let i=0;i<divide;i++){
            result += key;
        }
        num %= value;
    }
    return result;
};