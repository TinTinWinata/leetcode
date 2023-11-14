const arr = {
'I':1,
'IV': 4,
'V':5,
'IX': 9,
'X':10,
'XL': 40,
'L':50,
'XC': 90,
'C':100,
'CD': 400,
'D':500,
'CM': 900,
'M':1000
}

function romanToInt(s: string): number {
    let result = 0;
    for(let i=0;i<s.length;i++){
        // CM
        if(s[i + 1]){
            const temp = arr[s.substring(i, i + 2)]
            if(temp !== undefined){
                result += temp;
                i += 1;
                continue;
            }
        }
        // I
        const temp2 = arr[s.charAt(i)];
        if(temp2 !== undefined){
            result += temp2;
        }
    }
    return result;
};