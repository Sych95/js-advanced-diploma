/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */

import Team from "./Team";

 export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  yield new allowedTypes[Math.floor(Math.random()*(allowedTypes.length))](maxLevel)
  yield new allowedTypes[Math.floor(Math.random()*(allowedTypes.length))](maxLevel)
}

export default function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const team = new Team();
  let characterCreator = characterGenerator(allowedTypes, maxLevel);
  for(let i = 1; i <= characterCount; i+=1) {
    let character = characterCreator.next().value
    team.add(character)
  }
  return team
}