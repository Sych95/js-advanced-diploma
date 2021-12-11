import Character from "../Character";

export default class Undead extends Character {
    constructor(){
        super(level);
        this.type = new.target.name,
        this.level = level,
        this.attack = 40,
        this.defence = 10,
        this.health = 50
    }
}