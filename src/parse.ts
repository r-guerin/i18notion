import _set from 'lodash/set';
import _cloneDeep from 'lodash/cloneDeep';

export type TranslationEntry = [string, Record<string, string>];

export const parseTableRows = (originalRows: string[][]): TranslationEntry[] => {
  const rows = _cloneDeep(originalRows);
  const translationsMap = new Map<string, Record<string, string>>();

  const headers = rows.shift() ?? [];
  const [, , ...locales] = headers;

  locales.forEach((locale) => {
    translationsMap.set(locale, {});
  });

  for (const row of rows) {
    const [transGroup, transKey, ...values] = row;

    if (!transGroup || !transKey) {
      continue;
    }

    const key = `${transGroup}.${transKey}`;

    for (const [index, value] of values.entries()) {
      const locale = locales[index];

      if (!value || !locale) {
        continue;
      }

      const translation = translationsMap.get(locale) ?? {};
      _set(translation, key, value);
    }
  }

  return [...translationsMap.entries()];
};
