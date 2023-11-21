/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */


const recrusive = (first, curr, map) => {
    // console.log(`first ${first} | curr ${curr} | map `, map , ` | curr map | `, map[curr])

    if(map[curr] === undefined){
        // console.log('return true')
        return true;
    }
    if(first.includes(curr)){
        // console.log(`return on ${curr} : `, first)
        return false;
    }
    first.push(curr);
    for(const val of map[curr]){
        if(!recrusive([...first], val, map)) 
        {
            return false;
        }

    }
    return true;
}

var canFinish = function(numCourses, prerequisites) {
    const map = {}
    for(let i=0;i<prerequisites.length;i++){
        const value = prerequisites[i][1];
        const key = prerequisites[i][0];
        if(map[key]){
            map[key].push(value);
        }else{
            map[key] = [value];
        }
    }
    for(const [key, value] in map){
        console.log('Checking on ', key, value)
        if(!recrusive([], key, map)) return false;
    }
    return true;
};