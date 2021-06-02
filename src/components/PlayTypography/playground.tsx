import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { OakTypographyProps } from '@oakui/core-stage/style-composer/OakTypographyComposer';

import './style.scss';
import OakTypography from '../../oakui/wc/OakTypography';
import OakSection from '../../oakui/wc/OakSection';
import OakInput from '../../oakui/wc/OakInput';
import OakSelect from '../../oakui/wc/OakSelect';
import OakCheckbox from '../../oakui/wc/OakCheckbox';
import OakSheet from '../../oakui/wc/OakSheet';
import OakFormActionsContainer from '../../oakui/wc/OakFormActionsContainer';
import OakButton from '../../oakui/wc/OakButton';

interface Props {
  match: any;
  history: any;
}

const Playground = (props: Props) => {
  const [state, setState] = useState<OakTypographyProps>({
    variant: 'body1',
    highlightColor: 'none',
    color: 'inherit',
    align: 'left',
    noWrap: false,
  });
  const [stateTwo, setStateTwo] = useState<OakTypographyProps>({
    variant: 'body1',
    highlightColor: 'none',
    color: 'inherit',
    align: 'left',
    noWrap: false,
  });

  const [slotText, setSlotText] = useState(
    '(1) This is first instance of typography component.'
  );
  const [slotTextTwo, setSlotTextTwo] = useState(
    '(2) This is second typography instance. Two typography components are used to demonstrate display setting changes.'
  );

  const [isOpen, setIsOpen] = useState(false);

  const [isOpenTwo, setIsOpenTwo] = useState(false);

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  const handleChangeTwo = (detail: any) => {
    setStateTwo({ ...stateTwo, [detail.name]: detail.value });
  };
  return (
    <>
      <OakTypography
        variant={state.variant}
        color={state.color}
        highlightColor={state.highlightColor}
        align={state.align}
        noWrap={state.noWrap}
        gutterBottom
      >
        {slotText}
      </OakTypography>
      <OakTypography
        variant={stateTwo.variant}
        color={stateTwo.color}
        highlightColor={stateTwo.highlightColor}
        align={stateTwo.align}
        noWrap={stateTwo.noWrap}
        gutterBottom
      >
        {slotTextTwo}
      </OakTypography>
      <br />
      <br />
      <OakFormActionsContainer align="left">
        <OakButton
          theme="info"
          variant="appear"
          handleClick={() => setIsOpen(true)}
          size="xsmall"
        >
          Change settings (1)
        </OakButton>
        <OakButton
          theme="info"
          variant="appear"
          handleClick={() => setIsOpenTwo(true)}
          size="xsmall"
        >
          Change settings (2)
        </OakButton>
      </OakFormActionsContainer>
      <OakSheet
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        fillColor="surface"
        sizeHorizontal="full"
      >
        <OakSection fillColor="surface" outlineColor="none" rounded fullWidth>
          <OakTypography variant="h5">First sentence settings</OakTypography>
          <br />
          <br />
          <OakSelect
            label="variant"
            value={state.variant}
            options={[
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'subtitle1',
              'subtitle2',
              'body1',
              'body2',
              'caption',
              'overline',
              'inherit',
            ]}
            name="variant"
            gutterBottom
            handleChange={handleChange}
          />
          <OakSelect
            label="align"
            value={state.align}
            options={['inherit', 'left', 'center', 'right', 'justify']}
            name="align"
            gutterBottom
            handleChange={handleChange}
          />
          <OakSelect
            label="color"
            value={state.color}
            options={[
              'inherit',
              'primary',
              'secondary',
              'tertiary',
              'default',
              'danger',
              'warning',
              'success',
              'invert',
              'info',
            ]}
            name="color"
            gutterBottom
            handleChange={handleChange}
          />
          <OakSelect
            label="highlightColor"
            value={state.highlightColor}
            options={[
              'none',
              'primary',
              'secondary',
              'tertiary',
              'default',
              'danger',
              'warning',
              'success',
              'invert',
              'info',
            ]}
            name="highlightColor"
            gutterBottom
            handleChange={handleChange}
          />
          <OakInput
            type="text"
            name="slot text"
            label="slot text"
            value={slotText}
            gutterBottom
            handleInput={(detail: any) => setSlotText(detail.value)}
          />
          <OakCheckbox
            name="noWrap"
            value={state.noWrap || false}
            handleChange={handleChange}
          >
            noWrap
          </OakCheckbox>
        </OakSection>
      </OakSheet>
      <OakSheet
        isOpen={isOpenTwo}
        handleClose={() => setIsOpenTwo(false)}
        fillColor="surface"
        sizeHorizontal="full"
      >
        <OakSection fillColor="surface" outlineColor="none" rounded fullWidth>
          <OakTypography variant="h5">Second sentence settings</OakTypography>
          <br />
          <br />
          <OakSelect
            label="variant"
            value={stateTwo.variant}
            options={[
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'subtitle1',
              'subtitle2',
              'body1',
              'body2',
              'caption',
              'overline',
              'inherit',
            ]}
            name="variant"
            gutterBottom
            handleChange={handleChangeTwo}
          />
          <OakSelect
            label="align"
            value={stateTwo.align}
            options={['inherit', 'left', 'center', 'right', 'justify']}
            name="align"
            gutterBottom
            handleChange={handleChangeTwo}
          />
          <OakSelect
            label="color"
            value={stateTwo.color}
            options={[
              'inherit',
              'primary',
              'secondary',
              'tertiary',
              'default',
              'danger',
              'warning',
              'success',
              'invert',
              'info',
            ]}
            name="color"
            gutterBottom
            handleChange={handleChangeTwo}
          />
          <OakSelect
            label="highlightColor"
            value={stateTwo.highlightColor}
            options={[
              'none',
              'primary',
              'secondary',
              'tertiary',
              'default',
              'danger',
              'warning',
              'success',
              'invert',
              'info',
            ]}
            name="highlightColor"
            gutterBottom
            handleChange={handleChangeTwo}
          />
          <OakInput
            type="text"
            name="slot text"
            label="slot text"
            value={slotTextTwo}
            gutterBottom
            handleInput={(detail: any) => setSlotTextTwo(detail.value)}
          />
          <OakCheckbox
            name="noWrap"
            value={stateTwo.noWrap || false}
            handleChange={handleChangeTwo}
          >
            noWrap
          </OakCheckbox>
        </OakSection>
      </OakSheet>
    </>
  );
};

export default Playground;
