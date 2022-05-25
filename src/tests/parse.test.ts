import {
  mockRows,
  mockRowsWithEmptyGroup,
  mockRowsWithEmptyHeader,
  mockRowsWithEmptyKeys,
  mockRowsWithEmptyValues,
} from '../mocks/rows.mock';
import { parseTableRows } from '../parse';

describe('parseTableRows', () => {
  test('When some locale headers are missing, should ignore them', () => {
    const result = parseTableRows(mockRowsWithEmptyHeader);

    expect(result).toStrictEqual([
      [
        'en',
        {
          auth: { login: 'Login', logout: 'Logout' },
          general: { title: 'MyWebsite.com', welcome: 'Welcome on MyWebsite.com!' },
        },
      ],
    ]);
  });

  test('When some groups are missing, should ignore them', () => {
    const result = parseTableRows(mockRowsWithEmptyGroup);

    expect(result).toStrictEqual([
      [
        'en',
        {
          auth: {
            login: 'Login',
          },
          general: {
            welcome: 'Welcome on MyWebsite.com!',
          },
        },
      ],
      [
        'fr',
        {
          auth: {
            login: 'Connexion',
          },
          general: {
            welcome: 'Bienvenue sur MyWebsite.com!',
          },
        },
      ],
    ]);
  });

  test('When some keys are missing, should ignore them', () => {
    const result = parseTableRows(mockRowsWithEmptyKeys);

    expect(result).toStrictEqual([
      [
        'en',
        {
          auth: {
            login: 'Login',
          },
          general: {
            title: 'MyWebsite.com',
          },
        },
      ],
      [
        'fr',
        {
          auth: {
            login: 'Connexion',
          },
          general: {
            title: 'MyWebsite.com',
          },
        },
      ],
    ]);
  });

  test('When some keys are values, should ignore them', () => {
    const result = parseTableRows(mockRowsWithEmptyValues);

    expect(result).toStrictEqual([
      [
        'en',
        {
          auth: {
            login: 'Login',
            logout: 'Logout',
          },
          general: {
            welcome: 'Welcome on MyWebsite.com!',
          },
        },
      ],
      [
        'fr',
        {
          auth: {
            login: 'Connexion',
          },
          general: {
            title: 'MyWebsite.com',
            welcome: 'Bienvenue sur MyWebsite.com!',
          },
        },
      ],
    ]);
  });

  test('Should return properly formatted entries', () => {
    const result = parseTableRows(mockRows);

    expect(result).toStrictEqual([
      [
        'en',
        {
          auth: {
            login: 'Login',
            logout: 'Logout',
          },
          general: {
            title: 'MyWebsite.com',
            welcome: 'Welcome on MyWebsite.com!',
          },
        },
      ],
      [
        'fr',
        {
          auth: {
            login: 'Connexion',
            logout: 'Déconnexion',
          },
          general: {
            title: 'MyWebsite.com',
            welcome: 'Bienvenue sur MyWebsite.com!',
          },
        },
      ],
    ]);
  });
});
