/**
 * Distance calculation algorithms as per
 * https://en.wikipedia.org/wiki/Great-circle_distance
 * @module distance-algos
 */

/**
 * Convert to degress to radians
 * @param deg degree
 */
export function deg2rad(deg: number = 0) {
  return deg * (Math.PI / 180);
}
/**
 * Calculate longiture and latitude in KM using haversine function
 * {@link https://wikimedia.org/api/rest_v1/media/math/render/svg/8d1fd4f0e438bb74d249c7e552e2e419ceb84a17}
 * @param lat1 Reference Latitude
 * @param lon1 Reference Longitude
 * @param lat2 Calculate Latitude
 * @param lon2 Calculate Longitude
 */
export function haversine(lat1: string, lon1: string, lat2: string, lon2: string) {
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
 * Calculate longiture and latitude in KM using spherical law of cosines
 * {@link https://wikimedia.org/api/rest_v1/media/math/render/svg/75af53b063ee43aed3de186b1a98af5c150185b8}
 * @param lat1 Reference Latitude
 * @param lon1 Reference Longitude
 * @param lat2 Calculate Latitude
 * @param lon2 Calculate Longitude
 */
export function spherical(lat1: string, lon1: string, lat2: string, lon2: string) {
  const latitudeRef = parseFloat(lat1);
  const longitudeRef = parseFloat(lon1);
  const latitudeCalc = parseFloat(lat2);
  const longitudeCalc = parseFloat(lon2);

  const R = 6371; // Radius of the earth in km
  const latitudeRefRadians = deg2rad(latitudeRef);
  const latitudeCalcRadians = deg2rad(latitudeCalc);
  const dLon = deg2rad(longitudeCalc - longitudeRef);

  const d = Math.acos(
    Math.sin(latitudeRefRadians) * Math.sin(latitudeCalcRadians) +
    Math.cos(latitudeRefRadians) * Math.cos(latitudeCalcRadians) *
    Math.cos(dLon)) * R;
  return d;
}
