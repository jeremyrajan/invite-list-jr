/**
 * Sort array of objects in asc order.
 * @param arrayOfObjects Array of objects
 * @param key Key value to sort against
 */
export function sort(arrayOfObjects, key: string) {
  if (!key) {
    throw new Error('Key is not defined');
  }
  return arrayOfObjects.sort((a, b) => a[key] - b[key]);
}
