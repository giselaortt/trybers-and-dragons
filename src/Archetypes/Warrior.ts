import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private static _createdArchetypeInstances = 0;
  private _energyType:EnergyType;

  constructor(name: string) {
    super(name);
    Warrior._createdArchetypeInstances += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances():number {
    return this._createdArchetypeInstances;
  }

  public get energyType():EnergyType {
    return this._energyType;
  }
}