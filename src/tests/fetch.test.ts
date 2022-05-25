import { Client } from '@notionhq/client';
import { fetchTableRows } from '../fetch';
import { mockNotionBlock } from '../mocks';

const mockList = jest.fn();
const mockClient = {
  blocks: {
    children: {
      list: mockList,
    },
  },
} as unknown as Client;

const mockBlockId = '083d3b7a-272d-4605-89dc-88c8910bbad3';

describe('fetchTableRows', () =>
  test('Should properly call Notion API and return all rows as a two dimensions string array', async () => {
    mockList.mockResolvedValueOnce(mockNotionBlock);

    const result = await fetchTableRows(mockClient, mockBlockId);

    expect(mockList).toHaveBeenCalledTimes(1);
    expect(mockList).toHaveBeenCalledWith({ block_id: mockBlockId });

    expect(result).toStrictEqual([
      ['group', 'key', 'en', 'fr'],
      ['general', 'title', 'MyWebsite.com', 'MyWebsite.com'],
      ['general', 'welcome', 'Welcome on MyWebsite.com!', 'Bienvenue sur MyWebsite.com!'],
      ['auth', 'login', 'Login', 'Connexion'],
      ['auth', 'logout', 'Logout', 'Déconnexion'],
    ]);
  }));
