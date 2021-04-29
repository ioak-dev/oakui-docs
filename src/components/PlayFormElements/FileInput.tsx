import React, { useState } from 'react';
import OakInputFile from '../../oakui/OakInputFile';
import OakSection from '../../oakui/wc/OakSection';
import './FileInput.scss';
import packetBlack from '../../images/oneauth_white_small.svg';

const FileInput = () => {
  const [state, setState] = useState<any>({
    testFiles: null,
  });

  const handleChange = (event: any) => {
    console.log(event);
  };

  return (
    <OakSection>
      <OakInputFile
        data={state}
        id="testFiles"
        handleChange={handleChange}
        placeholder="Custom placeholder"
        label="File one"
        multiple
      />
      <OakInputFile
        data={state}
        id="testFiles"
        handleChange={handleChange}
        label="File two lorem ipsum"
      />
      <OakInputFile
        data={state}
        id="testFiles"
        handleChange={handleChange}
        label="File two lorem ipsum"
      >
        <img
          className="file-input--packet"
          src={packetBlack}
          alt="file upload"
        />
      </OakInputFile>
    </OakSection>
  );
};

export default FileInput;
