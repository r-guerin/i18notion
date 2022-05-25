import { parseEnv } from '../env';

let OLD_ENV: NodeJS.ProcessEnv;

beforeAll(() => {
  OLD_ENV = process.env;
});

afterAll(() => {
  process.env = OLD_ENV;
});

beforeEach(() => {
  process.env.NOTION_API_KEY = 'secret_n0t10n_4p1_k3y';
  process.env.NOTION_BLOCK_ID = '083d3b7a-272d-4605-89dc-88c8910bbad3';
});

describe('parseEnv', () => {
  test('When NOTION_API_KEY is not defined, should throw corresponding error', () => {
    delete process.env.NOTION_API_KEY;

    const throwable = () => {
      parseEnv();
    };

    expect(throwable).toThrow('Missing mandatory env variable: [NOTION_API_KEY]');
  });

  test('When NOTION_BLOCK_ID is not defined, should throw corresponding error', () => {
    delete process.env.NOTION_BLOCK_ID;

    const throwable = () => {
      parseEnv();
    };

    expect(throwable).toThrow('Missing mandatory env variable: [NOTION_BLOCK_ID]');
  });

  test('When NOTION_API_KEY and NOTION_BLOCK_ID are defined, should return their values', () => {
    expect(parseEnv()).toStrictEqual({
      apiKey: 'secret_n0t10n_4p1_k3y',
      blockId: '083d3b7a-272d-4605-89dc-88c8910bbad3',
    });
  });
});
