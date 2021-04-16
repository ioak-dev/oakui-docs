import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { AccessAlarm } from '@material-ui/icons';

import './style.scss';
import OakSection from '../../oakui/wc/OakSection';
import OakSelect from '../../oakui/wc/OakSelect';
import OakButton from '../../oakui/wc/OakButton';
import OakInput from '../../oakui/wc/OakInput';
import OakSheet from '../../oakui/wc/OakSheet';
import OakFormActionsContainer from '../../oakui/wc/OakFormActionsContainer';
import OakDivider from '../../oakui/wc/OakDivider';
import OakNavGroup from '../../oakui/wc/OakNavGroup';

interface Props {
  match: any;
  history: any;
}

const Playground = (props: Props) => {
  const [state, setState] = useState<any>({
    color: 'global',
    level: 1,
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
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
          <OakInput
            type="number"
            name="level"
            label="level"
            value={state.level}
            gutterBottom
            handleInput={handleChange}
          />
        </OakSection>
      </OakSheet>
      <div className="expanse-container">
        <OakNavGroup
          groupName="expanse-test-group"
          name="one"
          level={state.level}
        >
          <div slot="header" className="expanse__header">
            <div>
              Expedita commodi sequi ut nobis magni hic ipsum at numquam at cum
              fuga ducimus
            </div>
            <div>
              <AccessAlarm />
            </div>
          </div>
          <div slot="main">
            <OakSection
              paddingVertical={1}
              paddingHorizontal={1}
              elevation={0}
              fillColor="secondary"
              semitransparent
            >
              At necessitatibus illum excepturi doloremque repellat ipsum nihil
              nam adipisci autem qui tempore vitae perferendis sunt. Ab
              laboriosam nam rem expedita a laboriosam facilis accusamus
              incidunt. Dolor veniam quis similique vel nam blanditiis dolore
              maxime magnam molestias. Explicabo tempore hic quas reprehenderit
              cum nam eos possimus facilis eos exercitationem nisi impedit sint
              assumenda laborum
            </OakSection>
          </div>
        </OakNavGroup>
        <OakNavGroup groupName="expanse-test-group" name="two">
          <div slot="header" className="expanse__header">
            <div>
              Expedita commodi sequi ut nobis magni hic ipsum at numquam at cum
              fuga ducimus
            </div>
            <div>
              <AccessAlarm />
            </div>
          </div>
          <div slot="main">
            <OakSection
              paddingVertical={1}
              paddingHorizontal={1}
              elevation={0}
              fillColor="secondary"
              semitransparent
            >
              At necessitatibus illum excepturi doloremque repellat ipsum nihil
              nam adipisci autem qui tempore vitae perferendis sunt. Ab
              laboriosam nam rem expedita a laboriosam facilis accusamus
              incidunt. Dolor veniam quis similique vel nam blanditiis dolore
              maxime magnam molestias. Explicabo tempore hic quas reprehenderit
              cum nam eos possimus facilis eos exercitationem nisi impedit sint
              assumenda laborum
            </OakSection>
          </div>
        </OakNavGroup>
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
