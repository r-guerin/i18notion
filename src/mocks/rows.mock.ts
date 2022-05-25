export const mockRows: string[][] = [
  ['group', 'key', 'en', 'fr'],
  ['general', 'title', 'MyWebsite.com', 'MyWebsite.com'],
  ['general', 'welcome', 'Welcome on MyWebsite.com!', 'Bienvenue sur MyWebsite.com!'],
  ['auth', 'login', 'Login', 'Connexion'],
  ['auth', 'logout', 'Logout', 'Déconnexion'],
];

export const mockRowsWithEmptyHeader: string[][] = [
  ['group', 'key', 'en'],
  ['general', 'title', 'MyWebsite.com', 'MyWebsite.com'],
  ['general', 'welcome', 'Welcome on MyWebsite.com!', 'Bienvenue sur MyWebsite.com!'],
  ['auth', 'login', 'Login', 'Connexion'],
  ['auth', 'logout', 'Logout', 'Déconnexion'],
];

export const mockRowsWithEmptyGroup: string[][] = [
  ['group', 'key', 'en', 'fr'],
  ['', 'title', 'MyWebsite.com', 'MyWebsite.com'],
  ['general', 'welcome', 'Welcome on MyWebsite.com!', 'Bienvenue sur MyWebsite.com!'],
  ['auth', 'login', 'Login', 'Connexion'],
  ['', 'logout', 'Logout', 'Déconnexion'],
];

export const mockRowsWithEmptyKeys: string[][] = [
  ['group', 'key', 'en', 'fr'],
  ['general', 'title', 'MyWebsite.com', 'MyWebsite.com'],
  ['general', '', 'Welcome on MyWebsite.com!', 'Bienvenue sur MyWebsite.com!'],
  ['auth', 'login', 'Login', 'Connexion'],
  ['auth', '', 'Logout', 'Déconnexion'],
];

export const mockRowsWithEmptyValues: string[][] = [
  ['group', 'key', 'en', 'fr'],
  ['general', 'title', '', 'MyWebsite.com'],
  ['general', 'welcome', 'Welcome on MyWebsite.com!', 'Bienvenue sur MyWebsite.com!'],
  ['auth', 'login', 'Login', 'Connexion'],
  ['auth', 'logout', 'Logout', ''],
];
