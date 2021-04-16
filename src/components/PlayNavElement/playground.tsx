import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { AccessAlarm } from '@material-ui/icons';

import './style.scss';
import OakSection from '../../oakui/wc/OakSection';
import OakSelect from '../../oakui/wc/OakSelect';
import OakButton from '../../oakui/wc/OakButton';
import OakInput from '../../oakui/wc/OakInput';
import OakSheet from '../../oakui/wc/OakSheet';
import OakFormActionsContainer from '../../oakui/wc/OakFormActionsContainer';
import OakNavElement from '../../oakui/wc/OakNavElement';
import OakNavGroup from '../../oakui/wc/OakNavGroup';

interface Props {
  match: any;
  history: any;
}

const Playground = (props: Props) => {
  const [state, setState] = useState<any>({
    color: 'global',
    colorMode: 'darker',
    marginHorizontal: 0,
    marginVertical: 0,
    matchBackground: true,
  });

  const [panelState, setPanelState] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  const handleClick = (detail: any) => {
    console.log(detail);
  };

  return (
    <div className="expanse-playground">
      <OakSheet
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        fillColor="surface"
        sizeHorizontal="full"
      >
        <OakSection fillColor="none" outlineColor="none" rounded fullWidth>
          <OakSelect
            label="Color"
            value={state.color}
            options={[
              'none',
              'global',
              'container',
              'surface',
              'float',
              'primary',
              'secondary',
              'tertiary',
              'default',
              'info',
              'danger',
              'warning',
              'success',
              'invert',
            ]}
            name="color"
            handleChange={handleChange}
            gutterBottom
          />
          <OakSelect
            label="colorMode"
            value={state.colorMode}
            options={['darker', 'lighter']}
            name="colorMode"
            handleChange={handleChange}
            gutterBottom
          />
          <OakInput
            type="number"
            name="marginVertical"
            label="marginVertical"
            value={state.marginVertical}
            gutterBottom
            handleInput={handleChange}
          />
        </OakSection>
      </OakSheet>
      <div className="expanse-container">
        <OakNavGroup groupName="expanse-test-group" name="one">
          <div
            slot="header"
            className={`expanse__header ${
              panelState.one ? 'panel-active' : ''
            }`}
          >
            <div>
              Expedita commodi sequi ut nobis magni hic ipsum at numquam at cum
              fuga ducimus
            </div>
            <div>
              <AccessAlarm />
            </div>
          </div>
          <div slot="main">
            <OakNavElement handleClick={handleClick}>test</OakNavElement>
          </div>
        </OakNavGroup>
        <OakNavElement handleClick={handleClick}>test</OakNavElement>
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
