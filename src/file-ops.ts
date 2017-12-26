import * as fs from 'fs-extra';
import * as path from 'path';
import * as util from 'util';

import ICustomer from './Customer';

/**
 * Resolve the filePath
 * @param filePath file path to look for.
 * @return full file path.
 */
export function getFilePath(filePath: string): string {
  if (!filePath) {
    throw Error('File Path is invalid!');
  }
  return path.resolve(filePath);
}

/**
 * Convert text content to JSON
 * @async
 * @param txtFile txt file to read from
 * @return JSON object.
 */
export async function convertTxtToJSON(txtFile: string): Promise<ICustomer[]> {
  if (!txtFile) {
    throw new Error('txtFile is not valid!');
  }
  let fileContents;
  const filePath = getFilePath(txtFile);
  fileContents = await fs.readFile(filePath, 'utf8');
  return fileContents.split('\n').map((l) => JSON.parse(l));
}

/**
 * Read a file contents to JSON.
 * @param filePath file path
 * @return JSON
 */
export async function readFileJSON(filePath: string): Promise<any> {
  const data = await fs.readJson(filePath);
  return data;
}
