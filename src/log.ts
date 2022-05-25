import { green, red } from 'chalk';

export const logInfo = (message: string) => {
  console.info(message);
};

export const logSuccess = (message: string) => {
  console.error(`${green(message)} ✅`);
};

export const logError = (message: string) => {
  console.error(`${red(message)} 💥`);
};

export const logWelcome = () => {
  logInfo(`
******************************
***  Welcome to i18notion  ***
******************************
  `);
  console.time('Done in');
};

export const logUsage = () => {
  logError('Invalid parameter');
  logInfo(`
  Usage:

  i18notion --resourcesDirPath=<dirPath>
    
  Example: 
  
  i18notion --resourcesDirPath=./src/features/i18n/resources
  `);
};

export const logDone = () => {
  console.timeEnd('Done in');
  logInfo('');
};
