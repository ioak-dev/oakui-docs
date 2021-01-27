import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import OakButton from '../../oakui/wc/OakButton';
import ListAssets from './ListAssets';
import GettingStartedAsset from './GettingStartedAsset';
import OakFooter from '../../oakui/OakFooter';
import OakPage from '../../oakui/OakPage';

interface Props {
  history: any;
}

const Landing = (props: Props) => {
  const authorization = useSelector((state) => state.authorization);

  const goToLogin = () => {
    window.location.href = `${process.env.REACT_APP_ONEAUTH_URL}/#/appspace/${process.env.REACT_APP_ONEAUTH_APPSPACE_ID}/login?type=signin&appId=${process.env.REACT_APP_ONEAUTH_APP_ID}`;
  };

  return (
    <OakPage>
      <div className="landing">
        {authorization.isAuth && (
          <>
            <ListAssets history={props.history} />
            <hr />
            <GettingStartedAsset history={props.history} />
          </>
        )}
        {!authorization.isAuth && (
          <OakFooter align="center">
            <OakButton theme="primary" variant="appear" handleClick={goToLogin}>
              Login
            </OakButton>
          </OakFooter>
        )}
      </div>
    </OakPage>
  );
};

export default Landing;
