import { deg2rad, haversine, spherical } from '../src/distance-algos';

const config = {
  "locationCordinates": {
    "lat": "53.339428",
    "long": "-6.257664"
  },
  "proximity": 100
};

describe('distance algos', () => {
  describe('deg2rad', () => {
    it('should return 0, if deg is empty', () => {
      expect(deg2rad()).toBe(0);
    });

    it('should return a valid radian value', () => {
      expect(deg2rad(53.339428)).toBe(0.9309486397304539);
    });
  });

  describe('haversine function', () => {
    it('should return the number less than 100 KM', () => {
      const customer = { "latitude": "53.2451022", "user_id": 4, "name": "Ian Kehoe", "longitude": "-6.238335" };
      const result = haversine(customer.latitude, customer.longitude, config.locationCordinates.lat, config.locationCordinates.long);
      expect(result).toBeLessThan(100);
    });

    it('should return the number > than 100KM', () => {
      const customer = { "latitude": "52.240382", "user_id": 10, "name": "Georgina Gallagher", "longitude": "-6.972413" };
      const result = haversine(customer.latitude, customer.longitude, config.locationCordinates.lat, config.locationCordinates.long);
      expect(result).toBeGreaterThan(100);
    });
  });

  describe('spherical law of cosines', () => {
    it('should return the number less than 100 KM', () => {
      const customer = { "latitude": "53.2451022", "user_id": 4, "name": "Ian Kehoe", "longitude": "-6.238335" };
      const result = spherical(customer.latitude, customer.longitude, config.locationCordinates.lat, config.locationCordinates.long);
      expect(result).toBeLessThan(100);
    });

    it('should return the number > than 100KM', () => {
      const customer = { "latitude": "52.240382", "user_id": 10, "name": "Georgina Gallagher", "longitude": "-6.972413" };
      const result = spherical(customer.latitude, customer.longitude, config.locationCordinates.lat, config.locationCordinates.long);
      expect(result).toBeGreaterThan(100);
    });
  });
});