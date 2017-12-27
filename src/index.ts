import * as fs from 'fs-extra';
import * as path from 'path';
import { haversine, spherical } from './distance-algos';
import { convertTxtToJSON, readFileJSON } from './file-ops';
import { parseArgs } from './parse-args';
import { sort } from './utils';

import ICustomer from './Customer';

/**
 * Find the customers, as per search criteria and input
 * @param customers JSON Array<Object> of customers
 * @param findConfig JSON config with proximity and information
 * @return Array<Object> who are within in the proximity.
 */
export function find(customers, findConfig) {
  const customerListSorted = sort(customers, 'user_id');

  const inviteList = customerListSorted.filter((c) => {
    // choose between haversine or spherical algo
    c.inKm = haversine(
      c.latitude, c.longitude,
      findConfig.locationCordinates.lat, findConfig.locationCordinates.long,
    );
    return c.inKm <= findConfig.proximity; // within the proxity.
  });

  return inviteList;
}

/**
 * Main entry of the module.
 * @async
 */
export default async function main() {
  try {
    const args = parseArgs(process.argv);
    const config = await readFileJSON(args.config);
    const customers = await convertTxtToJSON(args.file);
    const inviteList = find(customers, config);
    return inviteList;
  } catch (error) {
    throw error;
  }
}
