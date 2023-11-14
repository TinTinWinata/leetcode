const map ={
    '{': '}',
    '[' : ']',
    '(' : ')'
}

const open = "{[("


function isValid(s: string): boolean {
    const stack = []
    for(const val of s){
        if(open.includes(val)){
            // Open
            stack.push(val);
        }else{
            // Close
            const head = stack.pop();
            if(val !== map[head]){
                return false;
            }
        }
    }
    if(stack.length > 0){
        return false;
    }
    return true;
};