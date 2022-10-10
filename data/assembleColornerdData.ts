/* eslint-disable unicorn/prefer-json-parse-buffer */
// Run via `yarn assembleColornerdData` or `yarn ts-node ./data/assembleColornerdData.ts`.

import fs from 'fs';

import { type BookFileDetailObject, type ColorNerdRecord, type MegaColor } from '../types';

const colornerdDirectory = './node_modules/colornerd';
const directory = `${colornerdDirectory}/_dev/`;
export const mainJsonOutputFilename = './data/colornerd.json';

export function getMegaColorsFromColornerdJsonFiles() {
  const booksJsonString = fs.readFileSync(`${directory}books.json`, 'utf8');
  const bookFileDetailObjects: BookFileDetailObject[] = JSON.parse(booksJsonString);
  // console.log({ bookFileDetailObjects });
  const megaColors: MegaColor[] = [];
  const keys = new Set<string>();
  for (const bookFileDetailObject of bookFileDetailObjects) {
    const filename = `${colornerdDirectory}/json/${bookFileDetailObject.filename}.json`;
    // console.log({ filename });
    const bookJsonString = fs.readFileSync(`${filename}`, 'utf8');
    // console.log(bookJsonString);
    const recordsInBook: ColorNerdRecord[] = JSON.parse(bookJsonString);
    //  console.log({ recordsInBook });
    for (const record of recordsInBook) {
      // const colorDetailsObject = getColorLibObject(record);
      const entry = { ...record, book: bookFileDetailObject.title };
      const key = `${entry.book}-${entry.hex}`;
      // console.log({ key, entry });
      if (!keys.has(key)) {
        megaColors.push(entry);
        keys.add(key);
      }
    }
  }

  // console.log({ megaColors });
  return megaColors;
}

function translateColornerdJsonFilesToMainJsonFile() {
  const megaColors = getMegaColorsFromColornerdJsonFiles();
  const mainJsonOutput = JSON.stringify(megaColors, null, 2);
  // console.log({ megaColors, mainJsonOutput });
  const mainJsonOutputCleaned = mainJsonOutput.replaceAll('"hex"', '"color"');
  fs.writeFileSync(mainJsonOutputFilename, mainJsonOutputCleaned, 'utf8');
}

translateColornerdJsonFilesToMainJsonFile();
