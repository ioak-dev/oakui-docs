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
import { Face } from '@material-ui/icons';

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

  const [radioValue, setRadioValue] = useState('one');
  const [isOpen, setIsOpen] = useState(false);
  const [isValidationSettingsOpen, setIsValidationSettingsOpen] = useState(
    false
  );

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  const validatorFunction = (_, __, value: any): string[] => {
    if (state.validatorFunction) {
      const outcome: string[] = [];
      outcome.push(state.validatorFunction);
      return outcome;
    }
    return [];
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
            options={['darker', 'lighter', 'even', 'i']}
            name="colorMode"
            handleChange={handleChange}
            gutterBottom
          />
        </OakSection>
      </OakSheet>
      <div className="menu-playground">
        <OakMenu
          buttonVariant="appear"
          buttonShape="leaf"
          buttonTheme="secondary"
        >
          <div slot="menu-label">Dolorus Umbridge</div>
          <div slot="menu-popup">
            <OakMenuItem fill="container" handleClick={() => {}}>
              <Face />
              Lorem ipsum
            </OakMenuItem>
            <OakMenuItem fill="container" handleClick={() => {}}>
              Dolor sit
            </OakMenuItem>
            <OakMenuItem fill="container" handleClick={() => {}}>
              test
            </OakMenuItem>
            <OakMenuItem fill="container" handleClick={() => {}}>
              test
            </OakMenuItem>
            <OakMenuItem fill="container" handleClick={() => {}}>
              test
            </OakMenuItem>
          </div>
        </OakMenu>
        <br />
        <OakPopup>
          <div slot="trigger">trigger</div>
          <div slot="popup">popup</div>
        </OakPopup>
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
