/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */

export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  //Level 1: prairie
  let typecount = allowedTypes.length;
  yield new allowedTypes[Math.floor(Math.random()*(typecount - 1))](Math.floor(Math.random()*maxLevel));
  yield new allowedTypes[Math.floor(Math.random()*(typecount - 1))](Math.floor(Math.random()*maxLevel));
  //Level 2: desert
  typecount = allowedTypes.length;
  yield new allowedTypes[Math.floor(Math.random()*(typecount - 1))](Math.floor(Math.random()*maxLevel));
  //Level 3: arctic
  typecount = allowedTypes.length;
  yield new allowedTypes[Math.floor(Math.random()*(typecount - 1))](Math.floor(Math.random()*maxLevel));
  //Level 4: mountain
  typecount = allowedTypes.length;
  yield new allowedTypes[Math.floor(Math.random()*(typecount - 1))](Math.floor(Math.random()*maxLevel));
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here

}
