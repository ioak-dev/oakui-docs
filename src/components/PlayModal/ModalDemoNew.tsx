import React, { useState } from 'react';
import OakButton from '../../oakui/wc/OakButton';
import OakFormActionsContainer from '../../oakui/wc/OakFormActionsContainer';
import OakModal from '../../oakui/wc/OakModal';
import './ModalDemo.scss';
import OakEdit from '../../oakui/OakEdit';

const ModalDemoNew = () => {
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

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };
  return (
    <>
      <div className="modal-demo">
        <OakModal
          isOpen={visible}
          handleClose={() => setVisible(false)}
          heading="Modal test dialog"
          backdropIntensity={5}
          color="container"
          height="full"
          width="full"
        >
          <div slot="body">
            <OakEdit />
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

export default ModalDemoNew;
