import Character from "../Character";

export default class Swordsman extends Character {
    constructor(level){
        super(level);
        this.type = 'swordsman',
        this.level = level,
        this.attack = 40,
        this.defence = 10,
        this.health = 50
    }
}