import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './style.scss';
import OakTab from '../../oakui/wc/OakTab';
import OakTypography from '../../oakui/wc/OakTypography';
import OakContainer from '../../oakui/wc/OakContainer';
import OakCard from '../../oakui/wc/OakCard';
import OakSelect from '../../oakui/wc/OakSelect';
import OakCheckboxNew from '../../oakui/wc/OakCheckboxNew';
import OakButton from '../../oakui/wc/OakButton';

interface Props {
  match: any;
  history: any;
}

const PlayCheckbox = (props: Props) => {
  const [state, setState] = useState<any>({
    color: 'primary',
  });

  const [checked, setChecked] = useState(true);

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  const handleCheckedChange = (detail: any) => {
    setChecked(detail.value);
  };

  return (
    <>
      <OakCard>
        <OakSelect
          label="Color"
          value={state.color}
          options={[
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
          handleChange={handleChange}
        />
      </OakCard>
      <OakCard>
        <div className="align-checkbox">
          <OakCheckboxNew
            name="test"
            value={checked}
            color={state.color}
            handleChange={handleCheckedChange}
          >
            derat opusim
          </OakCheckboxNew>
          <OakCheckboxNew
            name="test"
            value={checked}
            color={state.color}
            handleChange={handleCheckedChange}
          >
            Dolor sit
          </OakCheckboxNew>
          <OakCheckboxNew
            name="test"
            value={checked}
            color={state.color}
            handleChange={handleCheckedChange}
          >
            Lorem ipsum
          </OakCheckboxNew>
        </div>
        {/* <OakCheckboxNew name="test" value={checked} handleChange={handleChange}>
          Test label
        </OakCheckboxNew> */}
      </OakCard>
    </>
  );
};

export default PlayCheckbox;
