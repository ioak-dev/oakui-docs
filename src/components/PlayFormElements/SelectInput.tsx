import React, { useState } from 'react';
import OakCard from '../../oakui/wc/OakCard';
import './SelectInput.scss';
import OakSelect from '../../oakui/wc/OakSelect';

const SelectInput = () => {
  const [state, setState] = useState({
    testField: '',
  });

  const handleChange = (event: any) => {
    console.log(event);
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <OakCard heading="Select input">
      <OakSelect
        value={state.testField}
        name="testField"
        handleChange={handleChange}
        label="Test label"
        options={[
          'one',
          'two',
          'three',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
        ]}
      />
      <OakSelect
        value={state.testField}
        name="testField"
        handleChange={handleChange}
        label="Test label"
        options={[
          'one',
          'two',
          'three',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
          'lorem ipsum dolor sit',
          'dsas sdafds af ds f dsaf',
        ]}
      />
    </OakCard>
  );
};

export default SelectInput;