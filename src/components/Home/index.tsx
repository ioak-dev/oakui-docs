import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './style.scss';
import OakButton from '../../oakui/wc/OakButton';
import OakEditor from '../../oakui/OakEditor';
import OakImageUpload from '../../oakui/wc/OakImageUpload';

interface Props {
  match: any;
  history: any;
}

const Home = (props: Props) => {
  const [state, setState] = useState<any>([
    {
      data: { text: '<b>lorem ipsum</b>' },
      id: '9793aa3e-0b59-477b-9f2e-8b74517f6bc1',
      type: 'PARAGRAPH',
    },
    {
      data: { text: 'lorem ipsum', level: 1 },
      id: '9793aa3e-0b59-477b-9f2e-8b74517f6bc2',
      type: 'HEADING',
    },
  ]);

  const handleChange = (_value: any) => {
    setState([..._value]);
  };

  const handleSubmit = () => {
    console.log(state);
  };

  const handleChangeRt = (text: any) => {
    console.log(text);
  };

  const handleImageChange = (image: any) => {
    console.log(image);
  };

  return (
    <div>
      <div>Home</div>
      <br />

      {/* <OakImageUpload handleChange={handleImageChange} /> */}
      <div className="image-container">
        <OakImageUpload handleChange={handleImageChange} />
      </div>
      <br />
      <OakEditor value={state} handleChange={handleChange} />
      <br />
      <OakButton handleClick={handleSubmit}>Submit</OakButton>
      <br />
      {/* <OakEditorRichText
        value="abcd"
        handleChange={handleChangeRt}
        controls={[
          OakRichTextControlType.BOLD,
          OakRichTextControlType.ITALIC,
          OakRichTextControlType.BULLET_LIST,
        ]}
      /> */}
    </div>
  );
};

export default Home;
