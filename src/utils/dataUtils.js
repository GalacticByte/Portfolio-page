export const addIds = (items, startId = 1) => {
  return items.map((item, index) => ({
    id: startId + index,
    ...item,
  }))
}
