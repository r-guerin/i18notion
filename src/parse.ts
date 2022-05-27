type TranslationRecord = Record<string, Record<string, string>>;
export type TranslationEntry = [string, TranslationRecord];

export const parseTableRows = (originalRows: string[][]): TranslationEntry[] => {
  const rows = Array.from(originalRows);
  const translationsMap = new Map<string, TranslationRecord>();

  const [, , ...locales] = rows.shift() ?? [];

  locales.forEach((locale) => {
    translationsMap.set(locale, {});
  });

  let group: string | undefined, key: string | undefined, locale: string | undefined;
  let translation: TranslationRecord | undefined;

  for (const row of rows) {
    group = row.shift();
    key = row.shift();

    if (!group || !key) {
      continue;
    }

    for (const [index, value] of row.entries()) {
      locale = locales[index];
      translation = translationsMap.get(locale);

      if (!value || !locale || !translation) {
        continue;
      }

      if (!translation[group]) {
        translation[group] = {};
      }

      translation[group][key] = value;
    }
  }

  return [...translationsMap.entries()];
};
