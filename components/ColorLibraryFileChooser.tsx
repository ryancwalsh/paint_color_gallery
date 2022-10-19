import React, { useState } from 'react';

import { defaultColorsJson } from '../helpers/colors';

const ColorLibraryFileChooser = ({ setLoadedMegaColors }: any) => {
  // https://stackoverflow.com/a/68979570/470749
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function toggleIsVisible() {
    setIsVisible(!isVisible);
  }

  if (isVisible) {
    return (
      <div className="colorLibraryFileChooser">
        Load from{' '}
        <a className="jsonLink" href={defaultColorsJson} target="_blank" rel="noreferrer" style={{ display: 'inline-block', maxWidth: '200px', overflow: 'auto' }}>
          {defaultColorsJson}
        </a>
        <input
          type="file"
          name="colorLibraryFileChooserInput"
          multiple={false}
          onChange={(event: React.FormEvent<HTMLInputElement>) => {
            const files = Array.from(event.currentTarget.files as FileList);
            console.log(files);
            const reader = new FileReader();
            reader.onload = (onloadEvent: any) => {
              const txt = onloadEvent?.target?.result; // desired file content https://stackoverflow.com/a/40580004/470749
              console.log(txt);
              setLoadedMegaColors(JSON.parse(txt));
            };

            // reader.onerror = (error) => reject(error);
            reader.readAsText(files[0]); // Note that it is also possible to read images and other binaries.
          }}
        />
        <button onClick={() => toggleIsVisible()}>Hide</button>
      </div>
    );
  } else {
    return <button onClick={() => toggleIsVisible()}>Load new color library...</button>;
  }
};

export default ColorLibraryFileChooser;
