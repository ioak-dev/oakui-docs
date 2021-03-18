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
      <OakCheckbox
        name="matchBackground"
        value={state.matchBackground}
        handleChange={handleChange}
        color={
          state.matchBackground &&
          [
            'primary',
            'secondary',
            'tertiary',
            'default',
            'danger',
            'warning',
            'success',
            'invert',
            'info',
          ].includes(state.color)
            ? state.color
            : 'default'
        }
        gutterBottom
      >
        Match background for demo
      </OakCheckbox>
      <OakSection
        fillColor={state.matchBackground ? state.color : 'none'}
        paddingHorizontal={2}
        paddingVertical={2}
        rounded
      >
        <div className="divider-content">
          <OakTypography variant="body1">Lorem ipsum</OakTypography>
          <OakDivider
            color={state.color}
            colorMode={state.colorMode}
            marginVertical={state.marginVertical}
          />
          <OakTypography variant="body1">Dolor sit</OakTypography>
        </div>
      </OakSection>
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
