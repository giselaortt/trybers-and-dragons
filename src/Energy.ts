export default interface Energy {
  type_: EnergyType,
  amount: number,
}

type EnergyType = 'mana' | 'stamina';

export { EnergyType };