import Character from "../Character";

export default class Magician extends Character {
    constructor(){
        super(level);
        this.type = new.target.name,
        this.level = level,
        this.attack = 10,
        this.defence = 40,
        this.health = 50
    }
}