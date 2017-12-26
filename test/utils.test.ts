import {deg2rad, sort, latitudeLongitudeInKM} from '../src/utils';
const config = {
  "locationCordinates": {
    "lat": "53.339428",
    "long": "-6.257664"
  },
  "proximity": 100
};

describe('utils', () => {
  describe('deg2rad', () => {
    it('should return 0, if deg is empty', () => {
      expect(deg2rad()).toBe(0);
    });

    it('should return a valid radian value', () => {
      expect(deg2rad(53.339428)).toBe(0.9309486397304539);
    });
  });

  describe('sort (Array of Objects)', () => {
    it('should error out, if key is not defined', () => {
      const result = () => sort([{ "latitude": "52.986375", "user_id": 12, "name": "Christina McArdle", "longitude": "-6.043701" }], '')
      expect(result).toThrowError('Key is not defined');
    });

    it('should sort the array of objects in ascending order', () => {
      const customers = [
        { "latitude": "52.986375", "user_id": 2, "name": "Christina McArdle", "longitude": "-6.043701" },
        { "latitude": "52.986375", "user_id": 1, "name": "Christina McArdle", "longitude": "-6.043701" }
      ]
      const resultCustomersASC = [
        { "latitude": "52.986375", "user_id": 1, "name": "Christina McArdle", "longitude": "-6.043701" },
        { "latitude": "52.986375", "user_id": 2, "name": "Christina McArdle", "longitude": "-6.043701" }
      ]
      expect(sort(customers, 'user_id')).toEqual(resultCustomersASC);
    });
  });
  
  describe('latitudeLongitudeInKM', () => {
    it('should return the number less than 100 KM', () => {
      const customer = { "latitude": "53.2451022", "user_id": 4, "name": "Ian Kehoe", "longitude": "-6.238335" };
      const result = latitudeLongitudeInKM(customer.latitude, customer.longitude, config.locationCordinates.lat, config.locationCordinates.long);
      expect(result).toBeLessThan(100);
    });

    it('should return the number > than 100KM', () => {
      const customer = { "latitude": "52.240382", "user_id": 10, "name": "Georgina Gallagher", "longitude": "-6.972413" };
      const result = latitudeLongitudeInKM(customer.latitude, customer.longitude, config.locationCordinates.lat, config.locationCordinates.long);
      expect(result).toBeGreaterThan(100);
    });
  });
});