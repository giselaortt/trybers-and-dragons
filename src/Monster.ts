import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints:number;
  private _strength:number;
  
  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints():number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public receiveDamage(attackPoints:number):number {
    const newLife = this._lifePoints - attackPoints;

    if (attackPoints > 0) {
      if (newLife <= 0) {
        this._lifePoints = -1;
      } else {
        this._lifePoints = newLife;
      }
    }
    return this._lifePoints;
  }

  public attack(enemy:SimpleFighter):void {
    enemy.receiveDamage(this._strength);
  }
}