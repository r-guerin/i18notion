# i18notion

Source i18next resources from your Notion workspace

## Goal

`i18notion` act as a layer on top of `i18next` and allow you to effortlessly fetch your translations from a Notion block in your team's workspace and generate corresponding resource files

## Installation

```bash
# With npm
npm install i18next react-i18next
npm install i18notion -D

# or yarn
yarn add i18next react-i18next
yarn add i18notion -D
```

## Getting started

1. Create a new Notion table containing your translations. First rows should contain your headers: one for the groups, one for the keys and one for each language you want to use. Here is an example:

![Notion translation table](https://i.ibb.co/K9WVBmm/notion-table.png)

2. Create a Notion internal integration following [those instructions](https://www.notion.so/help/add-and-manage-integrations-with-the-api).

3. Share the translation table page with your internal integration

4. Retrieve yout internal integration API key and the block ID corresponding to the translation table. You can copy the block link and inspect the result to retrieve it. ie: In the following link `https://www.notion.so/Translations-67bdf9435c38401583fde776581a0bf8#000aaa111bbb` the block id would be `000aaa111bbb`.

5. Place those values in your `.env` file

```bash
NOTION_API_KEY=secret_n0t10n_4p1_k3y
NOTION_BLOCK_ID=000aaa111bbb
```

6. Run `18notion` specifying your resources directory path

```bash
  i18notion --resourcesDirPath="./src/features/i18n/resources"
```

Generated files content should look like this (ie: `en.json`)

```json
{
  "general": {
    "title": "MyApp",
    "welcome": "Welcome on MyApp!"
  },
  "auth": {
    "login": "Login",
    "logout": "Logout"
  }
}
```

7. Import the generated files in your `i18next` config

```typescript
// ./src/features/i18n/init.ts

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './resources/en.json';
import fr from './resources/fr.json';

export const initI18n = (): void => {
  i18next.use(initReactI18next).init({
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
    },
  });
};
```

Et voila! You're all set ✅
