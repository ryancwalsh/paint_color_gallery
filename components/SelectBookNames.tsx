import React from 'react';
import Select, { type MultiValue, type ActionMeta } from 'react-select'; // https://react-select.com/home#getting-started

import { getBookNames } from '../helpers/colors';

type Option = any; // TODO

function getOptionsFromNames(bookNames: string[]): Option {
  console.log({ bookNames });
  return bookNames.map((bookName) => {
    return { label: bookName, value: bookName };
  });
}

function getBookNamesFromOptions(options: MultiValue<any>): string[] {
  console.log({ options });
  return options.map((option) => {
    return option.value;
  });
}

export default function SelectBookNames({ selectedBookNames, setSelectedBookNames, loadedMegaColors }: any) {
  function onChange(chosenOptions: MultiValue<Option>, actionMeta: ActionMeta<any>) {
    console.log({ actionMeta, chosenOptions });
    setSelectedBookNames(getBookNamesFromOptions(chosenOptions));
  }

  const defaultValue = getOptionsFromNames(selectedBookNames);
  console.log({ defaultValue });

  const options = getOptionsFromNames(Array.from(getBookNames(loadedMegaColors)));

  return <Select options={options} onChange={onChange} isMulti={true} defaultValue={defaultValue} />;
}
