import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './style.scss';
import OakTypography from '../../oakui/wc/OakTypography';
import OakSection from '../../oakui/wc/OakSection';
import OakSelect from '../../oakui/wc/OakSelect';
import OakButton from '../../oakui/wc/OakButton';
import OakInput from '../../oakui/wc/OakInput';
import OakSheet from '../../oakui/wc/OakSheet';
import OakFormActionsContainer from '../../oakui/wc/OakFormActionsContainer';
import OakDivider from '../../oakui/wc/OakDivider';
import OakCheckbox from '../../oakui/wc/OakCheckbox';
import OakMenuItem from '../../oakui/wc/OakMenuItem';
import OakMenu from '../../oakui/wc/OakMenu';
import OakPopup from '../../oakui/wc/OakPopup';
import OakEditor from '../../oakui/OakEditor';

interface Props {
  match: any;
  history: any;
}

const Playground = (props: Props) => {
  const [state, setState] = useState<any>({
    fixed: false,
  });

  const [editorData, setEditorData] = useState<any>([
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

  const [isOpen, setIsOpen] = useState(false);
  const [isValidationSettingsOpen, setIsValidationSettingsOpen] = useState(
    false
  );

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  const handleEditorChange = (newData: any) => {
    setEditorData([...newData]);
  };

  return (
    <div className="tab-playground">
      <OakSheet
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        fillColor="surface"
        sizeHorizontal="full"
      >
        <OakSection fillColor="none" outlineColor="none" rounded fullWidth>
          <OakCheckbox
            name="fixed"
            value={state.fixed || false}
            size="medium"
            handleChange={handleChange}
            gutterBottom
          >
            fixed
          </OakCheckbox>
        </OakSection>
      </OakSheet>
      <div className="editor-playground">
        <OakEditor
          value={editorData}
          handleChange={handleEditorChange}
          fixed={state.fixed}
        />
      </div>
      <br />
      <OakFormActionsContainer align="left">
        <OakButton
          theme="info"
          variant="appear"
          handleClick={() => setIsOpen(true)}
          size="xsmall"
        >
          Component settings
        </OakButton>
      </OakFormActionsContainer>
    </div>
  );
};

export default Playground;
