import Race from './Race';

export default class Halfling extends Race {
  private static _createdRacesInstances = 0;
  private _maxLifePoints:number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._createdRacesInstances += 1;
    this._maxLifePoints = 60;
  }

  static createdRacesInstances():number {
    return this._createdRacesInstances;
  }

  public get maxLifePoints():number {
    return this._maxLifePoints;
  }
}