import { writeFile } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
import { promisify } from 'util';
import { logError, logInfo } from './log';
import { TranslationEntry } from './parse';

const write = promisify(writeFile);

export const writeTranslations =
  (dirPath: string) =>
  async ([key, content]: TranslationEntry): Promise<void> => {
    const path = resolve(cwd(), dirPath, `${key}.json`);

    try {
      logInfo(`Will write content in ${path}`);

      const data = JSON.stringify(content, null, 2);
      await write(path, data, { encoding: 'utf-8' });

      logInfo(`Content successfully written for [${key}]`);
    } catch (error) {
      logError(`Could not write in ${path}`);
    }
  };
