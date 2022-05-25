import yargs from 'yargs';
import { logUsage } from './log';

type Args = {
  resourcesDirPath: string;
};

export const parseArgs = (): Args => {
  const { argv } = yargs.option('resourcesDirPath', {
    alias: 'd',
    demand: true,
  });

  const { resourcesDirPath } = argv as Args;

  if (!resourcesDirPath) {
    logUsage();
  }

  return { resourcesDirPath };
};
