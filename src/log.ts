import { green, red } from 'chalk';

export const logInfo = (message: string) => {
  console.log(message);
};

export const logSuccess = (message: string) => {
  console.log(`${green(message)} ✅`);
};

export const logError = (message: string) => {
  console.log(`${red(message)} 💥`);
};

export const logWelcome = () => {
  logInfo(`
******************************
***  Welcome to i18notion  ***
******************************
  `);
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

export const logErrorDone = (error: unknown) => {
  logError(`An error occured: ${error}`);
  process.exit(-1);
};

export const logDone = () => {
  logInfo(`
******************************
*** 18notion process done  ***
******************************
  `);
  process.exit(0);
};
