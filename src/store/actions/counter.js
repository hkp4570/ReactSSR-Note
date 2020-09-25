export const actionsType = {
  'increase': 'counter/increase',
  'decrease': 'counter/decrease',
}

export function increase () {
  return { type: actionsType.increase }
}

export function decrease () {
  return { type: actionsType.decrease }
}
