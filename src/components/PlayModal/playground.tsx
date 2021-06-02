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
import OakModal from '../../oakui/wc/OakModal';

interface Props {
  match: any;
  history: any;
}

const Playground = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    test: 'Placeat quasi eveniet nisi distinctio',
    test2: 'Repellendus dolore earum commodi',
  });
  const [state, setState] = useState<any>({
    rounded: false,
    animationStyle: 'opacity',
    animationSpeed: 'normal',
    color: 'surface',
    paddingHorizontal: 1,
    paddingVertical: 1,
    heading: 'Lorem ipsum',
    elevation: 5,
    backdropIntensity: 3,
    height: 'auto',
    width: 'auto',
  });

  const [radioValue, setRadioValue] = useState('one');
  const [isOpen, setIsOpen] = useState(false);
  const [isValidationSettingsOpen, setIsValidationSettingsOpen] = useState(
    false
  );

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
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
    <div className="tab-playground">
      <OakSheet
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        fillColor="surface"
        sizeHorizontal="full"
      >
        <OakSection fillColor="none" outlineColor="none" rounded fullWidth>
          <OakCheckbox
            name="rounded"
            value={state.rounded || false}
            handleChange={handleChange}
            gutterBottom
          >
            rounded
          </OakCheckbox>
          <OakSelect
            label="height"
            value={state.height}
            options={['auto', 'small', 'large', 'full']}
            name="height"
            handleChange={handleChange}
            gutterBottom
          />
          <OakSelect
            label="width"
            value={state.width}
            options={['auto', 'small', 'large', 'full']}
            name="width"
            handleChange={handleChange}
            gutterBottom
          />
          <OakSelect
            label="animationStyle"
            value={state.animationStyle}
            options={['opacity', 'slide', 'zoom']}
            name="animationStyle"
            handleChange={handleChange}
            gutterBottom
          />
          <OakSelect
            label="animationSpeed"
            value={state.animationSpeed}
            options={['slow', 'normal', 'fast', 'none']}
            name="animationSpeed"
            handleChange={handleChange}
            gutterBottom
          />
          <OakSelect
            label="Color"
            value={state.color}
            options={[
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
          <OakInput
            label="backdropIntensity"
            type="number"
            value={state.backdropIntensity}
            name="backdropIntensity"
            min={0}
            max={5}
            gutterBottom
            handleChange={handleChange}
          />
          <OakInput
            label="elevation"
            type="number"
            value={state.elevation}
            name="elevation"
            min={0}
            max={24}
            gutterBottom
            handleChange={handleChange}
          />
          <OakInput
            label="paddingHorizontal"
            type="number"
            value={state.paddingHorizontal}
            name="paddingHorizontal"
            min={0}
            max={10}
            gutterBottom
            handleChange={handleChange}
          />
          <OakInput
            label="paddingVertical"
            type="number"
            value={state.paddingVertical}
            name="paddingVertical"
            min={0}
            max={10}
            gutterBottom
            handleChange={handleChange}
          />
          <OakInput
            name="heading"
            value={state.heading}
            gutterBottom
            label="heading"
          />
        </OakSection>
      </OakSheet>
      <div className="modal-playground">
        <OakModal
          isOpen={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          heading={state.heading}
          color={state.color}
          elevation={state.elevation}
          backdropIntensity={state.backdropIntensity}
          paddingHorizontal={state.paddingHorizontal}
          paddingVertical={state.paddingVertical}
          height={state.height}
          width={state.width}
          rounded={state.rounded}
          animationStyle={state.animationStyle}
          animationSpeed={state.animationSpeed}
        >
          <div slot="body">
            <div>
              <p>Repellendus voluptate</p>
              <br />
              <OakInput
                name="test"
                value={form.test}
                gutterBottom
                label="Test input"
              />
              <OakInput
                name="test2"
                value={form.test2}
                gutterBottom
                label="Another form element"
              />
            </div>
          </div>
          <div slot="footer">
            <div className="play-modal-footer">
              <OakButton theme="primary" handleClick={() => {}}>
                Save
              </OakButton>
              <OakButton
                theme="default"
                handleClick={() => setIsModalOpen(false)}
              >
                Close
              </OakButton>
            </div>
          </div>
        </OakModal>
        <OakButton theme="primary" handleClick={() => setIsModalOpen(true)}>
          Open Modal
        </OakButton>
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
