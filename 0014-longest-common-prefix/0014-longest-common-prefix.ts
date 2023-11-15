function longestCommonPrefix(strs: string[]): string {
    let temp = "";
    for(let i=0;i<strs[0].length;i++){
        const subs = strs[0].substring(0,i + 1);
        console.log(`iter-${i}: subs : ${subs}`)
        let isSame = true;
        for(let j=1;j<strs.length;j++){
            const currSubs = strs[j].substring(0, i + 1);
            if(currSubs !== subs){
                isSame = false;
                break;
            }
        }
        if(isSame){   
            temp = subs;
        }else{
            break;
        }
    }
    return temp;
};