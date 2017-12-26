import { getFilePath, convertTxtToJSON, readFileJSON } from '../src/file-ops';
import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs-extra';

describe('file-ops', () => {
  describe('getFilePath', () => {
    it('should throw if filePath is not sent', () => {
      const errorCheck = () => getFilePath();
      expect(errorCheck).toThrowError('File Path is invalid!');
    });

    it('should return filePath resolved', () => {
      const resultFilePath = path.join(__dirname, '..', 'customers.txt');
      expect(getFilePath('customers.txt')).toBe(resultFilePath);
    });
  });

  describe('convertTxtToJSON', () => {
    it('should error out, if the file doesnt exist', async () => {
      await expect(convertTxtToJSON()).rejects.toThrowError();
    });

    it('should read the file and parse the contents', async () => {
      const filePath = path.join(os.tmpdir(), 'customers.txt');
      const fileContent = '{ "latitude": "52.986375", "user_id": 2, "name": "Christina McArdle", "longitude": "-6.043701" }';
      const fileCreateCheck = () => fs.outputFileSync(filePath, fileContent);
      expect(fileCreateCheck).not.toThrowError();

      const JSONResultObject = [{
        latitude: '52.986375',
        user_id: 2,
        name: 'Christina McArdle',
        longitude: '-6.043701'
      }];
      await expect(convertTxtToJSON(filePath)).resolves.toEqual(JSONResultObject);
    });
  });

  it('should read the file in JSON format', async () => {
    const filePath = path.join(os.tmpdir(), 'customers.json');
    const fileContent = '{ "latitude": "52.986375", "user_id": 2, "name": "Christina McArdle", "longitude": "-6.043701" }';
    const fileCreateCheck = () => fs.outputFileSync(filePath, fileContent);
    expect(fileCreateCheck).not.toThrowError();
    const JSONResultObject = {
      latitude: '52.986375',
      user_id: 2,
      name: 'Christina McArdle',
      longitude: '-6.043701'
    };
    await expect(readFileJSON(filePath)).resolves.toEqual(JSONResultObject);
  });
});