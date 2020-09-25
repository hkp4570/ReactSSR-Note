export const actionsType = {
  setData:'movies/setData',
}

export function setData (data) {
  return { type: actionsType.setData, payload: data  }
}
