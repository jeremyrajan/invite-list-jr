// import interface
import ICustomer from './Customer';

/**
 * Convert to degress to radians
 * @param deg degree
 */
export function deg2rad(deg: number = 0) {
  return deg * (Math.PI / 180);
}

/**
 * Calculate longiture and latitude in KM
 * @param lat1 Reference Latitude
 * @param lon1 Reference Longitude
 * @param lat2 Calculate Latitude
 * @param lon2 Calculate Longitude
 */
export function latitudeLongitudeInKM(lat1: string, lon1: string, lat2: string, lon2: string) {
  const latitudeRef = parseFloat(lat1);
  const longitudeRef = parseFloat(lon1);
  const latitudeCalc = parseFloat(lat2);
  const longitudeCalc = parseFloat(lon2);

  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(latitudeCalc - latitudeRef); // deg2rad
  const dLon = deg2rad(longitudeCalc - longitudeRef);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(latitudeRef)) * Math.cos(deg2rad(latitudeCalc)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

/**
 * Sort array of objects in asc order.
 * @param arrayOfObjects Array of objects
 * @param key Key value to sort against
 */
export function sort(arrayOfObjects: ICustomer[], key: string) {
  if (!key) {
    throw new Error('Key is not defined');
  }
  return arrayOfObjects.sort((a, b) => a[key] - b[key]);
}
