import inviteList, { find } from '../src/index';
const customerList = [
  { "latitude": "52.986375", "user_id": 12, "name": "Christina McArdle", "longitude": "-6.043701" },
  { "latitude": "51.92893", "user_id": 1, "name": "Alice Cahill", "longitude": "-10.27699" },
  { "latitude": "51.8856167", "user_id": 2, "name": "Ian McArdle", "longitude": "-10.4240951" },
  { "latitude": "52.3191841", "user_id": 3, "name": "Jack Enright", "longitude": "-8.5072391" },
  { "latitude": "53.807778", "user_id": 28, "name": "Charlie Halligan", "longitude": "-7.714444" }
];

const config = {
  "locationCordinates": {
    "lat": "53.339428",
    "long": "-6.257664"
  },
  "proximity": 200
};

describe('invite-list', () => {
  describe('find', () => {
    it('should sort the customers user_ids in asc order, when called', () => {
      const result = find(customerList, config);
      // this is a very specific test case with 3 results.
      expect(result[0].user_id).toBe(3);
      expect(result[2].user_id).toBe(28);
    });

    it('should inject inKm key in customer list for easier information', () => {
      const result = find(customerList, config);
      // this is a very specific test case with 3 results.
      expect(result.filter(f => !!f.inKm).length).toBe(3);
    });

    it('should return array of customers, who close to the proximity defined', () => {
      const result = find(customerList, config);
      expect(result).toHaveLength(3);
    });

    it('should return an empty array, if there are no customers in proximity', () => {
      const newConfig = Object.assign({}, config, {
        proximity: 0
      });
      const result = find(customerList, newConfig);
      expect(result).toHaveLength(0);
    });
  });

  describe('invite-list main', () => {
    const processArgsDefault = process.argv;
    beforeEach(() => {
      process.argv = [...processArgsDefault];
    });
    it('should give a list of customers if input txt and config file is valid', async () => {
      process.argv.push('--f=customers.txt');
      process.argv.push('--c=config.json');
      // the default customer list and config have 16 as results.
      await expect(inviteList()).resolves.toHaveLength(16);
    });

    it('should throw error, if input txt is not passed', async () => {
      process.argv.push('--c=config.json');
      await expect(inviteList()).rejects.toThrowError();
    });

    it('should throw error, if config is not passed', async () => {
      process.argv.push('--f=customers.txt');
      await expect(inviteList()).rejects.toThrowError();
    });
  });
});