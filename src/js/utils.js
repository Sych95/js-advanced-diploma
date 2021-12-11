export function calcTileType(index, boardSize) {
  // TODO: write logic here
  const topLeft = 0;
  const topRight = boardSize-1;
  const bottomLeft = boardSize*boardSize - boardSize;
  const bottomRight = boardSize*boardSize -1;
  if(index !== topLeft && index < topRight){
    return 'top'
  }
  if(index > bottomLeft && index < bottomRight){
    return 'bottom'
  }
  if(index !== topLeft && index !== bottomLeft && index%boardSize === 0){
    return 'left'
  }
  if(index !== topRight && index !== bottomRight && index%boardSize === boardSize -1){
    return 'right'
  }
  if(index === topLeft) {
    return 'top-left';
  }
  if(index === bottomRight){
    return 'bottom-right'
  }
  if(index === topRight){
    return 'top-right'
  }
  if(index === bottomLeft){
    return 'bottom-left'
  }
  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
