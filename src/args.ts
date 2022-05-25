import yargs from 'yargs/yargs';
import { logUsage } from './log';

type Args = {
  resourcesDirPath: string;
};

export const parseArgs = (): Args => {
  const { argv } = yargs(process.argv.slice(2)).parseSync();
  const { resourcesDirPath } = (argv as Args) ?? {};

  if (!resourcesDirPath) {
    logUsage();
  }

  return { resourcesDirPath };
};
