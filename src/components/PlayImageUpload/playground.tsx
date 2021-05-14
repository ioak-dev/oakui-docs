import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './style.scss';
import OakSection from '../../oakui/wc/OakSection';
import OakSelect from '../../oakui/wc/OakSelect';
import OakButton from '../../oakui/wc/OakButton';
import OakInput from '../../oakui/wc/OakInput';
import OakSheet from '../../oakui/wc/OakSheet';
import OakFormActionsContainer from '../../oakui/wc/OakFormActionsContainer';
import OakImageUpload from '../../oakui/wc/OakImageUpload';

interface Props {
  match: any;
  history: any;
}

const Playground = (props: Props) => {
  const [state, setState] = useState<any>({
    toolbarPosition: 'bottom',
  });

  const [checked, setChecked] = useState({
    text: '',
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isValidationSettingsOpen, setIsValidationSettingsOpen] = useState(
    false
  );

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  const handleCheckedChange = (detail: any) => {
    setChecked({ ...checked, [detail.name]: detail.value });
  };

  const handleSubmit = (event: any) => {
    console.log(event);
  };

  const validatorFunction = (_: any, __: any, value: any): string[] => {
    if (state.validatorFunction) {
      const outcome: string[] = [];
      outcome.push(state.validatorFunction);
      return outcome;
    }
    return [];
  };

  return (
    <>
      <OakSheet
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        fillColor="surface"
        sizeHorizontal="full"
      >
        <OakSection fillColor="none" outlineColor="none" rounded fullWidth>
          <OakSelect
            label="toolbarPosition"
            value={state.toolbarPosition}
            options={['top', 'bottom', 'left', 'right']}
            name="toolbarPosition"
            handleChange={handleChange}
            gutterBottom
          />
        </OakSection>
      </OakSheet>
      <div className="image-upload-playground">
        <OakImageUpload toolbarPosition={state.toolbarPosition} />
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
      {/* </OakSection> */}
    </>
  );
};

export default Playground;
