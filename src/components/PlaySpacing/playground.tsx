import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './style.scss';
import OakTypography from '../../oakui/wc/OakTypography';
import OakSection from '../../oakui/wc/OakSection';
import OakSelect from '../../oakui/wc/OakSelect';
import OakButton from '../../oakui/wc/OakButton';
import OakInput from '../../oakui/wc/OakInput';
import OakSheet from '../../oakui/wc/OakSheet';
import OakFormActionsContainer from '../../oakui/wc/OakFormActionsContainer';
import OakSpacing from '../../oakui/wc/OakSpacing';

interface Props {
  match: any;
  history: any;
}

const Playground = (props: Props) => {
  const [state, setState] = useState<any>({
    marginHorizontal: 0,
    marginVertical: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isValidationSettingsOpen, setIsValidationSettingsOpen] = useState(
    false
  );

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
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
          <OakInput
            label="marginHorizontal"
            value={state.marginHorizontal}
            type="number"
            name="marginHorizontal"
            handleChange={handleChange}
            gutterBottom
          />
          <OakInput
            label="marginVertical"
            value={state.marginVertical}
            type="number"
            name="marginVertical"
            handleChange={handleChange}
            gutterBottom
          />
          <OakInput
            label="paddingHorizontal"
            value={state.paddingHorizontal}
            type="number"
            name="paddingHorizontal"
            handleChange={handleChange}
            gutterBottom
          />
          <OakInput
            label="paddingVertical"
            value={state.paddingVertical}
            type="number"
            name="paddingVertical"
            handleChange={handleChange}
            gutterBottom
          />
        </OakSection>
      </OakSheet>
      <OakSection
        fillColor={state.matchBackground ? state.color : 'none'}
        paddingHorizontal={2}
        paddingVertical={2}
        rounded
      >
        <div className="spacing-content">
          <OakSpacing
            marginVertical={state.marginVertical}
            marginHorizontal={state.marginHorizontal}
            paddingVertical={state.paddingVertical}
            paddingHorizontal={state.paddingHorizontal}
          >
            <div className="spacing-content__one">
              <OakTypography variant="body1">
                Grid one - Lorem ipsum
              </OakTypography>
            </div>
          </OakSpacing>
          <OakSpacing
            marginVertical={state.marginVertical}
            marginHorizontal={state.marginHorizontal}
            paddingVertical={state.paddingVertical}
            paddingHorizontal={state.paddingHorizontal}
          >
            <div className="spacing-content__two">
              <OakTypography variant="body1">
                Grid two - Dolor sit
              </OakTypography>
            </div>
          </OakSpacing>
          <OakSpacing
            marginVertical={state.marginVertical}
            marginHorizontal={state.marginHorizontal}
            paddingVertical={state.paddingVertical}
            paddingHorizontal={state.paddingHorizontal}
          >
            <div className="spacing-content__three">
              <OakTypography variant="body1">
                Grid three - Qehop wegokip
              </OakTypography>
            </div>
          </OakSpacing>
          <OakSpacing
            marginVertical={state.marginVertical}
            marginHorizontal={state.marginHorizontal}
            paddingVertical={state.paddingVertical}
            paddingHorizontal={state.paddingHorizontal}
          >
            <div className="spacing-content__four">
              <OakTypography variant="body1">
                Grid four - Pikul Satogan
              </OakTypography>
            </div>
          </OakSpacing>
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
