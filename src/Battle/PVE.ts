import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _fighter:Fighter;
  private _monsters:Array<Monster | SimpleFighter>;

  constructor(fighter:Fighter, monsters:Array<Monster | SimpleFighter>) {
    super(fighter);

    this._fighter = fighter;
    this._monsters = monsters;
  }

  private shufflingMonsters():Array<Monster | SimpleFighter> {
    return this._monsters.sort(() => Math.random() - 0.5);
  }

  private rafflingMonster():Monster | SimpleFighter | undefined {
    return this.shufflingMonsters().find((monster) => monster.lifePoints > 0);
  }

  public fight():number {
    let fighting = true;
    let monster;

    do {
      monster = this.rafflingMonster();

      if (!monster || this._fighter.lifePoints <= 0) {
        fighting = false;
      } else {
        this._fighter.attack(monster);
        monster.attack(this._fighter);
      }
    } while (fighting);

    return super.fight();
  }
}