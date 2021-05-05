import React, { useEffect, useState } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import './style.scss';
import oakuiWhite from '../../images/oakui_white.svg';
import oakuiBlack from '../../images/oakui_black.svg';

const Logo = () => {
  const authorization = useSelector((state: any) => state.authorization);

  const profile = useSelector((state: any) => state.profile);

  const dispatch = useDispatch();

  return (
    <div className="logo">
      <oak-link href="/">
        {profile.theme === 'theme_light' && (
          <img className="logo--image" src={oakuiBlack} alt="OAKUI logo" />
        )}
        {profile.theme !== 'theme_light' && (
          <img className="logo--image" src={oakuiWhite} alt="OAKUI logo" />
        )}
      </oak-link>
    </div>
  );
};

export default Logo;
