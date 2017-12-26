import * as argsParser from 'args-parser';

/**
 * Parse arguments into object form.
 * @param argv process.argv array to object.
 * @return Object containing config and input file.
 */
export function parseArgs(argv: string[]) {
  const args = argsParser(argv);
  if ((!args.f && !args.file) || (!args.c && !args.config)) {
    throw Error('Please pass a valid input txt file & config as argument.');
  }
  return {
    config: args.c || args.config,
    file: args.f || args.file,
  };
}
