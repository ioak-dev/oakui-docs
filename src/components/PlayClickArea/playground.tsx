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
import OakClickArea from '../../oakui/wc/OakClickArea';

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

  const handleClick = (detail: any) => {
    console.log(detail);
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
          No props for this component. You can use any custom styling or other
          components inside this element.
        </OakSection>
      </OakSheet>
      <OakSection
        fillColor={state.matchBackground ? state.color : 'none'}
        paddingHorizontal={2}
        paddingVertical={2}
        rounded
      >
        <OakClickArea handleClick={handleClick}>
          <div className="click-area-content__one">
            <OakSpacing paddingHorizontal={2} paddingVertical={1}>
              <div>Grid one - Lorem ipsum</div>
            </OakSpacing>
          </div>
        </OakClickArea>
        <OakClickArea handleClick={handleClick}>
          <div className="click-area-content__one">
            <OakSpacing paddingHorizontal={2} paddingVertical={1}>
              <div>Grid one - Lorem ipsum</div>
            </OakSpacing>
          </div>
        </OakClickArea>
      </OakSection>
      <br />
      <OakSection
        fillColor={state.matchBackground ? state.color : 'none'}
        paddingHorizontal={2}
        paddingVertical={2}
        rounded
      >
        <OakClickArea handleClick={handleClick}>
          <div className="click-area-content__two">
            <OakSpacing paddingHorizontal={2} paddingVertical={2}>
              <div>Grid one - Lorem ipsum</div>
            </OakSpacing>
          </div>
        </OakClickArea>
        <OakClickArea handleClick={handleClick}>
          <div className="click-area-content__two">
            <OakSpacing paddingHorizontal={2} paddingVertical={2}>
              <div>Grid one - Lorem ipsum</div>
            </OakSpacing>
          </div>
        </OakClickArea>
      </OakSection>
      <br />
      <OakSection
        fillColor={state.matchBackground ? state.color : 'none'}
        paddingHorizontal={2}
        paddingVertical={2}
        rounded
      >
        <OakClickArea handleClick={handleClick}>
          <div className="click-area-content__three">
            <OakSpacing paddingHorizontal={2} paddingVertical={2}>
              <div>Grid one - Lorem ipsum</div>
            </OakSpacing>
          </div>
        </OakClickArea>
        <OakClickArea handleClick={handleClick}>
          <div className="click-area-content__three">
            <OakSpacing paddingHorizontal={2} paddingVertical={2}>
              <div>
                Doloremque et omnis deserunt odit beatae occaecati laudantium
                sapiente tempore minus exercitationem occaecati enim quia quod.
                Eaque harum alias vel delectus dolorem non facilis dolorum
                suscipit. Minus consequatur in deserunt et amet voluptates
                mollitia laboriosam debitis enim nulla. Quasi eveniet
                repudiandae neque ipsa nemo suscipit debitis odio laudantium
                modi eligendi error commodi illo minima blanditiis. Maxime
                quisquam temporibus eum minima nesciunt reiciendis voluptatibus
                veniam dolores officiis natus possimus sunt eos eius. Alias
                ipsam in sapiente incidunt ipsum fuga aliquid necessitatibus
                cumque unde dolores cupiditate natus eveniet
              </div>
            </OakSpacing>
          </div>
        </OakClickArea>
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
