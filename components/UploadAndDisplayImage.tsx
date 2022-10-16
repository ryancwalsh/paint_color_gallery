import React, { useState } from 'react';

const UploadAndDisplayImage = ({ maxWidth }: { maxWidth?: string }) => {
  // https://stackoverflow.com/a/68979570/470749
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  function removeFileByIndex(index: number) {
    const removed = selectedFiles.splice(index, 1); // https://stackoverflow.com/a/52348198/470749
    console.log({ index, removed, selectedFiles });
    setSelectedFiles(selectedFiles);
  }

  const images = selectedFiles.map((selectedImage, index) => {
    return (
      <div key={selectedImage.name}>
        <img alt="uploaded image" src={URL.createObjectURL(selectedImage)} style={{ maxWidth }} />
        <br />
        <button onClick={() => removeFileByIndex(index)}>Remove</button>
      </div>
    );
  });

  return (
    <div className="fileChooser">
      <input
        type="file"
        name="fileChooserInput"
        multiple={true}
        onChange={(event: React.FormEvent<HTMLInputElement>) => {
          const files = Array.from(event.currentTarget.files as FileList);
          console.log(files);
          setSelectedFiles(files);
        }}
      />
      {images}
    </div>
  );
};

export default UploadAndDisplayImage;
