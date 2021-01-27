import React, { useState } from 'react';
import OakButton from '../../oakui/wc/OakButton';
import OakFooter from '../../oakui/OakFooter';
import OakModal from '../../oakui/wc/OakModal';
import './ModalDemo.scss';
import OakForm from '../../oakui/wc/OakForm';
import OakInput from '../../oakui/wc/OakInput';

const ModalDemo = () => {
  const [state, setState] = useState({
    collegeName: '',
    city: '',
    price: 0,
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
            </OakForm>
          </div>
          <div slot="footer">
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
          </div>
        </OakModal>
      </div>
      <OakFooter align="left">
        <OakButton
          handleClick={() => setVisible(true)}
          theme="primary"
          variant="regular"
        >
          Open modal
        </OakButton>
      </OakFooter>
    </>
  );
};

export default ModalDemo;
