import themeList from "./themes";
import generateTeam from './generators';
import Bowman from './Character-types/Bowman';
import Swordsman from './Character-types/Swordsman'
import Daemon from './Character-types/Daemon'
import Undead from './Character-types/Undead'
import PositionedCharacter from "./PositionedCharacter";

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    // TODO: add event listeners to gamePlay events
    //отрисовываем поле
    this.gamePlay.drawUi(themeList.get("Level 1"));

    //создаем команды
    const playerTeam = generateTeam([Bowman, Swordsman], 1, 2);
    const enemyTeam = generateTeam([Daemon, Undead], 1, 2);

    //создаем массивы доступных начлаьных позиций для игрока и врага
    const boardSize = this.gamePlay.boardSize
    const cellsSum = boardSize * boardSize
    let positionedPlayerArray = [];
    let startPlayerCells = [];
    let startEnemyCells = [];
    for(let i = 0; i < cellsSum; i++){
      if(i===0 || i%this.gamePlay.boardSize === 0 || i%this.gamePlay.boardSize === 1){
        startPlayerCells.push(i)
        startEnemyCells.push(i+boardSize-2)
      }
    }

    //создаем массив PositionedCharacter, где все персонажи имеют позиции
    for(let item of playerTeam.characterList){
      let position = 0;
      position = startPlayerCells[Math.floor(Math.random()*startPlayerCells.length)];
      let positionedPlayer = new PositionedCharacter(item, position);
      positionedPlayerArray.push(positionedPlayer)
    }
    for(let item of enemyTeam.characterList){
      let position = 0;
      position = startEnemyCells[Math.floor(Math.random()*startEnemyCells.length)];
      let positionedPlayer = new PositionedCharacter(item, position);
      positionedPlayerArray.push(positionedPlayer)
    }
    //рисуем всех персонажей
    this.gamePlay.redrawPositions(positionedPlayerArray)
    
    
    // TODO: load saved stated from stateService

  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
