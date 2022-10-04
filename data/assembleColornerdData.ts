// Run via `yarn assembleColornerdData` or `yarn ts-node ./data/assembleColornerdData.ts`.

import fs from 'fs';
import { BookFileDetailObject, ColorNerdRecord, MegaColor } from '../types/index';

const colornerdDir = './node_modules/colornerd';
const dir = `${colornerdDir}/_dev/`;
export const mainJsonOutputFilename = './data/colornerd.json';

export function getMegaColorsFromColornerdJsonFiles() {
  const booksJsonString = fs.readFileSync(`${dir}books.json`, 'utf8');
  const bookFileDetailObjects = JSON.parse(booksJsonString);
  // console.log({ bookFileDetailObjects });
  const megaColors: MegaColor[] = [];
  const keys = new Set<string>();
  bookFileDetailObjects.forEach(function (bookFileDetailObject: BookFileDetailObject) {
    const filename = `${colornerdDir}/json/${bookFileDetailObject.filename}.json`;
    // console.log({ filename });
    const bookJsonString = fs.readFileSync(`${filename}`, 'utf8');
    // console.log(bookJsonString);
    const recordsInBook = JSON.parse(bookJsonString);
    //  console.log({ recordsInBook });
    recordsInBook.forEach((record: ColorNerdRecord) => {
      // const colorLibObject = getColorLibObject(record);
      const entry = { ...record, book: bookFileDetailObject.title };
      const key = `${entry.book}-${entry.hex}`;
      // console.log({ key, entry });
      if (!keys.has(key)) {
        megaColors.push(entry);
        keys.add(key);
      }
    });
  });
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
