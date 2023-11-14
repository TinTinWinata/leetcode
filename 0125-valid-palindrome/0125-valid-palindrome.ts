const notValid = `~\`!@#$%^&*()_+-=[{]}\\|'";:/?.>,<"' `
const isValid = (val: string) => !notValid.includes(val) 

function isPalindrome(s: string): boolean {
    s = s.toLowerCase();
    let pivot1 = 0;
    let pivot2 = s.length -1;
    while(true){
        if(pivot2 <= pivot1){
            return true;
        }
        if(!isValid(s[pivot1])){
            pivot1++;
            continue;
        }
        if(!isValid(s[pivot2])){
            pivot2--;
            continue;
        }
        
//      All 2 valid
        if(s[pivot1] === s[pivot2]){
            pivot1++;
            pivot2--;
        }else{
            return false;
        }
    }
    return false;
};