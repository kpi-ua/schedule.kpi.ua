export const prepareList = list => {
  return list.map(item => ({
    label: item.name,
    value: item.id,
  }))
}