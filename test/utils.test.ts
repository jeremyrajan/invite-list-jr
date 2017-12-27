import {sort} from '../src/utils';

describe('utils', () => {
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
});