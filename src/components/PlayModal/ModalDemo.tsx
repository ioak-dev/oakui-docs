import React, { useState } from 'react';
import OakButton from '../../oakui/wc/OakButton';
import OakFormActionsContainer from '../../oakui/wc/OakFormActionsContainer';
import OakModal from '../../oakui/wc/OakModal';
import './ModalDemo.scss';
import OakForm from '../../oakui/wc/OakForm';
import OakInput from '../../oakui/wc/OakInput';
import OakSelectStyled from '../../oakui/OakSelectStyled';

const ModalDemo = () => {
  const [state, setState] = useState({
    collegeName: '',
    city: '',
    price: 0,
    country: '',
  });
  const [visible, setVisible] = useState(false);
  const submitForm = (event: any) => {
    console.log(event, state);
  };
  const handleChange = (event: any) => {
    console.log(event);
    setState({ ...state, [event.name]: event.value });
  };
  return (
    <>
      <div className="modal-demo">
        <OakModal
          showModal={visible}
          handleClose={() => setVisible(!visible)}
          heading="Modal test dialog"
        >
          <div slot="body">
            <OakForm formGroupName="modal-test" handleSubmit={submitForm}>
              <OakInput
                label="City"
                name="city"
                value={state.city}
                placeholder="City placeholder"
                handleChange={handleChange}
                formGroupName="modal-test"
                regexp={/^[a-z]*$/}
                minLength={2}
                maxLength={5}
                tooltip="City tooltip"
              />
              <OakInput
                label="College name"
                name="collegeName"
                value={state.collegeName}
                placeholder="Your college name"
                handleChange={handleChange}
                formGroupName="modal-test"
                type="text"
                minLength={2}
                maxLength={10}
              />
              <OakInput
                label="Price"
                name="price"
                value={state.price}
                placeholder="Price amount"
                handleChange={handleChange}
                formGroupName="modal-test"
                type="number"
              />
              <OakSelectStyled label="select" name="city" value={state.city} />
              <OakInput
                label="City"
                name="city"
                value={state.city}
                placeholder="City placeholder"
                handleChange={handleChange}
                formGroupName="modal-test"
                regexp={/^[a-z]*$/}
                minLength={2}
                maxLength={5}
                tooltip="City tooltip"
              />
              <OakInput
                label="College name"
                name="collegeName"
                value={state.collegeName}
                placeholder="Your college name"
                handleChange={handleChange}
                formGroupName="modal-test"
                type="text"
                minLength={2}
                maxLength={10}
              />
              <OakInput
                label="Price"
                name="price"
                value={state.price}
                placeholder="Price amount"
                handleChange={handleChange}
                formGroupName="modal-test"
                type="number"
              />
              <OakSelectStyled label="select" name="city" value={state.city} />
            </OakForm>
          </div>
          <div slot="footer">
            <OakFormActionsContainer align="right">
              <OakButton
                theme="primary"
                variant="regular"
                type="submit"
                formGroupName="modal-test"
              >
                Submit
              </OakButton>
              <OakButton
                handleClick={() => setVisible(false)}
                theme="default"
                variant="regular"
              >
                Close
              </OakButton>
            </OakFormActionsContainer>
          </div>
        </OakModal>
      </div>
      <OakFormActionsContainer align="left">
        <OakButton
          handleClick={() => setVisible(true)}
          theme="primary"
          variant="regular"
        >
          Open modal
        </OakButton>
      </OakFormActionsContainer>
    </>
  );
};

export default ModalDemo;
