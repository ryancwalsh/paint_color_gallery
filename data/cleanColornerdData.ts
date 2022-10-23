/* eslint-disable unicorn/prefer-json-parse-buffer */
// Run via `yarn ts-node --esm ./data/cleanColornerdData.ts`.

import fs from 'fs';

const mainJsonOutputFilename = './data/colornerd.json';

type Record = {
  book: string;
  code: string;
  label: string;
  name: string;
};

function main() {
  // console.log({ bookFileDetailObjects });
  const cleanedRecords: Record[] = [];
  const bookCodeKeys = new Set<string>();
  const bookNameKeys = new Set<string>();

  const fileContents = fs.readFileSync(`${mainJsonOutputFilename}`, 'utf8');

  const records: Record[] = JSON.parse(fileContents);

  for (const record of records) {
    const bookCodeKey = `${record.book}-${record.code}`;
    const bookNameKey = `${record.book}-${record.name}`;

    if (!bookCodeKeys.has(bookCodeKey)) {
      bookCodeKeys.add(bookCodeKey);
      if (bookNameKeys.has(bookNameKey)) {
        record.name = `${record.name}_${record.code}`;
      } else {
        bookNameKeys.add(bookNameKey);
      }

      cleanedRecords.push(record);
    }
  }

  fs.writeFileSync(mainJsonOutputFilename, JSON.stringify(cleanedRecords, null, 2), 'utf8');
}

main();
