import React, { useState } from 'react';
import OakCard from '../../oakui/OakCard';
import './SelectInput.scss';
import OakSelectPlain from '../../oakui/OakSelectPlain';
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
    <OakCard title="Select input">
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
      <OakSelectPlain
        data={state}
        id="testField"
        handleChange={handleChange}
        label="Test label"
        elements={[
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
