import Character from '../Character';

export default class Bowman extends Character {
    constructor(){
        super(level);
        this.type = new.target.name,
        this.level = level,
        this.attack = 25,
        this.defence = 25,
        this.health = 50
    }
}