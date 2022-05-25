import { Client } from '@notionhq/client';
import { parseArgs } from './args';
import { parseEnv } from './env';
import { fetchTableRows } from './fetch';
import { logDone, logError, logWelcome } from './log';
import { parseTableRows } from './parse';
import { writeTranslations } from './write';

export const run = async (): Promise<void> => {
  try {
    logWelcome();

    const { apiKey, blockId } = parseEnv();
    const { resourcesDirPath } = parseArgs();

    const client = new Client({ auth: apiKey });

    const rows = await fetchTableRows(client, blockId);
    const entries = parseTableRows(rows);

    const requests = entries.map(writeTranslations(resourcesDirPath));

    await Promise.allSettled(requests);

    logDone();
  } catch (error) {
    logError(`An error occured: ${error}`);
    process.exit(-1);
  }
};
