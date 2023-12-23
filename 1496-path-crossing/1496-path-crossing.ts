const PATH_MAP_X = {
    'N': 0,
    'E': 1,
    'S': 0,
    'W': -1
}

const PATH_MAP_Y = {
    'N': 1,
    'E': 0,
    'S': -1,
    'W': 0
}

function isPathCrossing(path: string): boolean {
  const splitted = path.split('')
  const map = new Map();
    let x = 0;
    let y = 0;
    map.set('0#0', 1)
  for(const v of splitted){
      x += PATH_MAP_X[v]
      y += PATH_MAP_Y[v]
      const key = `${x}#${y}`
      if(map.has(key))return true
      else map.set(key, 1)
  }
    return false
};