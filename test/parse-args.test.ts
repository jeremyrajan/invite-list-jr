import {parseArgs} from '../src/parse-args';

describe('parse-args', () => {
  const processArgsDefault = process.argv;
  beforeEach(() => {
    process.argv = [...processArgsDefault];
  });
  it('return the filename when --f is passed', () => {
    process.argv.push('--f=customers.txt');
    process.argv.push('--c=config.json');
    expect(parseArgs(process.argv).file).toBe('customers.txt');
  });

  it('return the filename when --file is passed', () => {
    process.argv.push('--file=customers.txt');
    process.argv.push('--c=config.json');
    expect(parseArgs(process.argv).file).toBe('customers.txt');
  });

  it('return an error, if it cant find the file', () => {
    const noFileNameCheck = () => parseArgs(process.argv);
    expect(noFileNameCheck).toThrowError();
  });
});