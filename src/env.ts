type EnvVariables = {
  apiKey: string;
  blockId: string;
};

const readEnv = (key: string) => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing mandatory env variable: [${key}]`);
  }

  return value;
};

export const parseEnv = (): EnvVariables | never => {
  const apiKey = readEnv('NOTION_API_KEY');
  const blockId = readEnv('NOTION_BLOCK_ID');

  return { apiKey, blockId };
};
