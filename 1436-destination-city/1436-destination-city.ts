function destCity(paths: string[][]): string {
    const map = new Map();
    let curr = paths[0][0];
    for(const arr of paths){
        map.set(arr[0], arr[1]);
    }
    while(true){
        if(map.has(curr)){
            curr = map.get(curr);
        }else{
            break;
        }
    }
    return curr;
};