import React from 'react';
import OakSection from '../../oakui/wc/OakSection';
import OakSpinner from '../../oakui/OakSpinner';
import SpinnerDemo from './SpinnerDemo';
import './style.scss';
import OakTypography from '../../oakui/wc/OakTypography';

interface Props {
  match: any;
  history: any;
}

const PlaySpinner = (props: Props) => {
  return (
    // <div className="home full">
    //   <div className="space-bottom-4">
    //     Copy below token as Authorization key on the request header from postman
    //   </div>
    //   <div className="auth-token">{authorization.token}</div>
    // </div>
    <>
      {/* <OakSpinner style="bouncing-dots" /> */}
      <OakSection fillColor="container" outlineColor="none">
        <OakTypography variant="h2">Oak UI Playground</OakTypography>
        <OakTypography variant="subtitle1">
          Demo on how the newly created OAK UI components work
        </OakTypography>
      </OakSection>
      <SpinnerDemo />
    </>
  );
};

export default PlaySpinner;
